import React from 'react'

type Skill = {
    name: string;
    percentage: string;
}

interface Props{
    title: string;
    skills: Skill[]
}

const ProgessBarSection = ({title, skills} : Props) => {
    if (skills?.length < 1) return;
    return (
    <>
        <div className='font-semibold text-white mt-5 mb-3 text-sm md:text-md'>
            {title}
        </div>
        <div className='bg-ligthgrey-bg border border-ligthwhite rounded-md py-2 px-5 text-xs md:text-sm'>
            {skills?.map((skill, index)=>(
                <div className='my-4' key={index}>                    
                    <label className='font-medium text-white-text mb-1 mr-1.5'>{skill.name}</label>
                    <label className='text-white-text text-sm mb-1'>{skill.percentage}%</label>
                    <div className='bg-ligthwhite rounded-2xl w-full h-1'>
                        <div className='bg-linear-to-r from-cyan-500 to-primary h-full rounded-2xl' style={{width:`${skill.percentage}%`}}></div>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default ProgessBarSection