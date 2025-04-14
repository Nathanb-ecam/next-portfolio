import React from 'react'
import ProgessBarSection from '../ProgessBarSection'
import TechLoop from '../TechLoop'

const Skills = () => {

    const languages = [
        {name:"Python",percentage:"80"},
        {name:"Java",percentage:"70"},
        {name:"HTML/CSS",percentage:"85"},
        {name:"Javascript",percentage:"70"},
    ]

    const frameworks = [
        {name:"React",percentage:"80"},
        {name:"Angular",percentage:"70"},
        {name:"Django",percentage:"65"},
        {name:"Spring boot",percentage:"70"},
    ]
    const databases = [
        {name:"MySQL",percentage:"90"},
        {name:"Mongodb",percentage:"75"},        
    ]

    const tools = [
        {name:"Docker",percentage:"80"},
        {name:"Kubernetes",percentage:"80"},
        {name:"Postman",percentage:"85"},        
    ]

    return (
    <div className=''>        
        <TechLoop />
        <ProgessBarSection title='Languages'skills={languages}/>
        <ProgessBarSection title='Frameworks'skills={frameworks}/>
        <ProgessBarSection title='Databases'skills={databases}/>
        <ProgessBarSection title='Tools'skills={tools}/>
    </div>    
  )
}

export default Skills