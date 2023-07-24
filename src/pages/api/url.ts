import * as cheerio from 'cheerio';

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const { url }= req.query

    if(url){
        const response = await fetch(url as string)

        const body = await response.text();

        const $ = cheerio.load(body);

        const urlObject = new URL(url as string)

        const title = $('title').text().trim()
        let image : string | undefined = ""
        let name : string | undefined = ""
        let siteImage : string | undefined = ""

        $('script[type="application/ld+json"]').map((idx, el) => {
            const text = $(el).text()
            
            if(text.includes("Article") || text.includes("NewsArticle") || text.includes("ReportageNewsArticle")){
                const json = JSON.parse(text.replace(/&quot;/g,'"'));
                if(json["@graph"]){
                    json["@graph"].map((data : any) => {
                        if(data["@type"] == "Article" || data["@type"] == "NewsArticle" || data["@type"] == "ReportageNewsArticle"){
                            if(json["@graph"][0].image){
                                image = getImage(json["@graph"][0].image)
                            }
                        }
                    })
                    
                }else{

                    if(json["image"]) image = getImage(json["image"])

                    if(json["publisher"]){
                        name = json["publisher"].name
                    }
                }

            }
        })

        if(!name){
            name = $('meta[property="og:site_name"]').attr("content")
        }

        if(!name){
            name = urlObject.host.replace(".com", "").replace(".br", "")
        }

        if(!image){
            image = $('meta[property="og:image"]').attr("content")
        }

        siteImage = $('link[rel="icon"]').attr("href")
        if(!siteImage) {
            siteImage = $('link[rel="shortcut icon"]').attr("href")
        }
        if(!siteImage?.includes("https")){
            siteImage = urlObject.origin + siteImage
        }


        return res.status(200).json({ 
            title: title, 
            image: image,
            name: name,
            siteImage: siteImage
        })

    }

    

    return res.status(200).json({ message: 'Foi' })
}

function getImage(json : any){
    if(json.url){
        return json.url
    }else{
        return json
    }
}