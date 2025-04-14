'use client';
import React, { useState } from 'react'
import Navbar from './Navbar'
import AboutMe from './main-sections/AboutMe';
import Skills from './main-sections/Skills';
import Portfolio from './main-sections/Portfolio';


const MainComponent = () => {
    const [selectedTab, setSelectedTab] = useState('About me');
    return (
      <div className='relative overflow-hidden bg-grey-bg flex-1 px-5 border border-ligthwhite rounded-2xl'>          
                
        <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        <section className='w-full'>
          <div className="title mt-[20px]">
            <div className='text-3xl font-bold text-white-text'>{selectedTab}</div>
            <div className="line bg-primary mt-2 mb-5 rounded w-[50px] h-[5px]"></div>
          </div>
          <div className="content overflow-scroll">
            {selectedTab === 'About me' && <AboutMe />}            
            {selectedTab === 'Skills' && <Skills />}
            {selectedTab === 'Portfolio' && <Portfolio />}
          </div>


        </section>

        


        
      </div>
  )
}

export default MainComponent