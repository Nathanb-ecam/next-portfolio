'use client';
import React from 'react'
import { CiCalendarDate, CiMail } from 'react-icons/ci'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { MdPhoneAndroid } from 'react-icons/md'

const PersonalCard = () => {
  return (
    <div className="w-[280px] max-w-[280px] bg-grey-bg px-5 border border-ligthwhite rounded-2xl sticky top-[40px] h-fit">   

        <div className='flex flex-col items-center'>            
            <div className='mt-15 mb-2 bg-ligthgrey-bg flex justify-center items-center w-[150px] h-[150px] rounded-lg '>
              😎
            </div>
            <div className='text-2xl font-bold text-white-text mb-2'>Nathan Buchin</div>
            <div className='text-xs bg-ligthwhite mt-1 rounded py-[4px] px-[8px] text-white-text'>Software Engineer</div>            
        </div>     

        <div className="line-separator my-10 h-[1px] rounded w-full bg-ligthwhite"></div>

        <div className="general-infos flex flex-col gap-5">
          
          <div className='flex items-center gap-4'> 
            <CiMail className='text-primary text-xl'/>
            <div className="field-wrapper">
              <div className="uppercase text-xs text-grey-text">email</div>
              <div className="text-white-text">nath.buchin@gmail.com</div>
            </div>
          </div>
          <div className='row flex items-center gap-4'>
          <MdPhoneAndroid className='text-primary text-xl'/>
            <div className="field-wrapper">
              <div className="uppercase text-xs text-grey-text">phone</div>
              <div className="text-white-text">+32 493 16 70 77</div>
            </div>
          </div>
          <div className='row flex items-center gap-4'>
          <IoLocationOutline className='text-primary text-xl'/>
            <div className="field-wrapper">
              <div className="uppercase text-xs text-grey-text">location</div>
              <div className="text-white-text">Brussels, Belgium</div>
            </div>
          </div>
          <div className='row flex items-center gap-4'>
          <CiCalendarDate className='text-primary text-xl'/>
            <div className="field-wrapper">
              <div className="uppercase text-xs text-grey-text">birthday</div>
              <div className="text-white-text">November 16, 1999</div>
            </div>
          </div>

        </div>


        <div className="socials text-grey-text text-xl my-5 mx-auto py-2 px-5 w-max rounded flex justify-center gap-3">
          <a href="https://github.com/Nathanb-ecam">
            <FaGithub/>
          </a>
          <a href="https://www.linkedin.com/in/nathan-buchin-993295223">                        
            <FaLinkedin/>
          </a>          
        </div>

    </div>
  )
}

export default PersonalCard