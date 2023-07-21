import { useState } from 'react'

import Head from '../../node_modules/next/head'


export default function Home() {

  const [title, setTitle] = useState("Your title here")
  const [image, setImage] = useState("/preview.png")
  const [name, setName] = useState("Name of your website")
  const [siteImage, setSiteImage] = useState("/profile.png")

  return (
    <main
      className="font-[montserrat,sans-serif]"
    >
      <div className={`w-[100vw] h-[100vh] flex justify-center items-center`}>
        <div className='w-full max-w-[1080px] h-[90vh] flex justify-between'>
          <div>
            <div className='flex flex-col gap-8'>
              <h1 className='text-[42px] font-bold '>Google Discover Simulator</h1>
              <div className='flex flex-col gap-2'>
                <label htmlFor="" className='text-[32px] font-bold'>Title</label>
                <input type="text" className='h-[40px] px-2 rounded-sm' placeholder='Your title here' onChange={(e) => {setTitle(e.target.value)}}/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="" className='text-[32px] font-bold'>Image Link</label>
                <input type="text" className='h-[40px] px-2 rounded-sm' placeholder='Your image link here' onChange={(e) => {setImage(e.target.value)}}/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="" className='text-[32px] font-bold'>Website Name</label>
                <input type="text" className='h-[40px] px-2 rounded-sm' placeholder='Your website name here' onChange={(e) => {setName(e.target.value)}}/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="" className='text-[32px] font-bold'>Website Image</label>
                <input type="text" className='h-[40px] px-2 rounded-sm' placeholder='Your website image link here' onChange={(e) => {setSiteImage(e.target.value)}}/>
              </div>
              
            </div>
            
          </div>
          <div className="bg-[#232323] h-full max-h-[700px] w-full max-w-[380px] rounded-[32px] flex flex-col justify-evenly items-center shadow-md">
            <div className='bg-[#3e3e3e] w-[80px] h-[10px] rounded-full'></div>
            <div className='bg-[white] w-[85%] h-[85%] rounded-sm shadow-cellphone'>
              <div className='p-4'>
                <div className='bg-[white] shadow-google rounded-full h-10 w-full flex items-center justify-between px-2'>
                  <div className='flex items-center gap-2'>
                    <img src="/google.png" alt="" className='w-[22px]'/>
                    <span className='text-[12px] text-[gray]'>Search...</span>
                  </div>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="#4285F4" d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z"></path><path fill="#34A853" d="M11 18.92h2V22h-2z"></path><path fill="#F4B400" d="M7 12H5c0 1.93.78 3.68 2.05 4.95l1.41-1.41C7.56 14.63 7 13.38 7 12z"></path><path fill="#EA4335" d="M12 17c-1.38 0-2.63-.56-3.54-1.47l-1.41 1.41C8.32 18.21 10.07 19 12.01 19c3.87 0 6.98-3.14 6.98-7h-2c0 2.76-2.23 5-4.99 5z"></path></svg>
                </div>
              </div>
              <BigPreview image={image} title={title} name={name} siteImage={siteImage}/>
              <div className='w-full h-[1px] bg-[#eaeaea]'></div>
              <SmallPreview image={image} title={title} name={name} siteImage={siteImage}/>

            </div>
            <div className='bg-[black] w-[40px] h-[40px] rounded-full'></div>
          </div>  
        </div>
      </div>
    </main>
  )
}

function BigPreview({image, title, name, siteImage} : {image: string; title: string; name: string; siteImage: string}){
  return(
    <div>
      <div className='p-4'>
        <div className={`h-[180px] bg-center rounded-[16px] bg-cover`} style={{backgroundImage: `url('${image}')`}}>
          
        </div>
        <h2 className='font-bold pt-2'>{title}</h2>
      
        <Footer name={name} siteImage={siteImage}/>
      </div>
    </div>
  )
}

function SmallPreview({image, title, name, siteImage} : {image: string; title: string; name: string; siteImage: string}){
  return(
    <div>
      <div className='p-4 flex flex-col'>
        <div className='flex justify-between gap-2'>
          <h2 className='font-bold pt-2'>{title}</h2>
          <div className='block'>
            <div className={`h-[60px] w-[100px] bg-center rounded-[8px] bg-cover`} style={{backgroundImage: `url('${image}')`}}>
            
            </div>
          </div>
        </div>  
        <Footer name={name} siteImage={siteImage}/>
      </div>
    </div>
  )
}

function Footer({name, siteImage} : {name: string; siteImage: string}){
  return(
    <div className='flex justify-between items-center pt-2'>
      <div className='flex items-center gap-2'>
        <div className='w-6 h-6 bg-[#f0f0f0] rounded-full'>
          <img src={siteImage} alt="" className='w-full'/>
        </div>
        <span className='text-[12px]'>{name}</span>
      </div>
      <div className='flex items-center gap-4'>
        <svg xmlns="http://www.w3.org/2000/svg"  fill="#000000" height="18px" width="18px" version="1.1" id="Capa_1" viewBox="0 0 471.701 471.701">
          <g>
            <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"/>
          </g>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none">
          <path d="M9 12C9 13.3807 7.88071 14.5 6.5 14.5C5.11929 14.5 4 13.3807 4 12C4 10.6193 5.11929 9.5 6.5 9.5C7.88071 9.5 9 10.6193 9 12Z" stroke="#000000" stroke-width="1.5"/>
          <path d="M14 6.5L9 10" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M14 17.5L9 14" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M19 18.5C19 19.8807 17.8807 21 16.5 21C15.1193 21 14 19.8807 14 18.5C14 17.1193 15.1193 16 16.5 16C17.8807 16 19 17.1193 19 18.5Z" stroke="#000000" stroke-width="1.5"/>
          <path d="M19 5.5C19 6.88071 17.8807 8 16.5 8C15.1193 8 14 6.88071 14 5.5C14 4.11929 15.1193 3 16.5 3C17.8807 3 19 4.11929 19 5.5Z" stroke="#000000" stroke-width="1.5"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4ZM15 5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5ZM12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12ZM11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19ZM12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 20.6569 10.3431 22 12 22Z" fill="#000000"/>
        </svg>
      </div>
    </div>
  )
}