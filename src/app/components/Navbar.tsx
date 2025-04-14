import React from 'react'

interface Props{
    selectedTab: string;
    setSelectedTab : (tabName : string) => void;
}

const Navbar = ({selectedTab, setSelectedTab} : Props) => {
    const tabs = ['About me', 'Skills', 'Portfolio'];    
  
    return (
    <nav className='absolute top-0 right-0 bg-ligthwhite z-{-1} border-b border-l border-ligthwhite rounded-bl-lg w-[45%]'>
        <ul className='flex justify-evenly gap-2 py-4 w-full'>
            {tabs.map((tab)=>(
                <li 
                key={tab}
                className={`text-gray-500 hover:cursor-pointer ${selectedTab === tab ? 'text-primary' : ''}`}
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