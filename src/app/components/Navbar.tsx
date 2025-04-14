import React from 'react'

interface Props{
    selectedTab: string;
    setSelectedTab : (tabName : string) => void;
}

const Navbar = ({selectedTab, setSelectedTab} : Props) => {
    const tabs = ['About me', 'Skills', 'Portfolio'];    
  
    return (
    <nav className='fixed bottom-0 bg-black z-10 backdrop-blur-md w-full md:absolute md:top-0 md:bottom-auto right-0 md:bg-ligthwhite md:z-{-1} border-b border-l border-ligthwhite rounded-bl-lg w-[55%] md:w-[45%]'>
        <ul className='flex justify-evenly gap-2 py-4 w-full'>
            {tabs.map((tab)=>(
                <li 
                key={tab}
                className={`text-grey-text text-xs truncate text-nowrap sm:text-sm hover:cursor-pointer ${selectedTab === tab ? 'text-primary' : ''}`}
                onClick={()=>setSelectedTab(tab)}
                >
                    {tab}
                </li>
            ))
            }                        
        </ul>
    </nav>
  )
}

export default Navbar