import React from 'react'
import TimeLine from '../TimeLine'

const AboutMe = () => {
  const experiences = [
    {
        title: 'iCure internship - IoT software engineering',
        period: 'January - June 2024',
        quote : 'Design and implementation of an IoT solution for medical data collection.',
        description: ''
    },
    {
        title: 'OnePoint internship - software development',
        period: 'March - April 2021',        
        description: `IoT extension to the "OneRoom" project, built by MIC Mons to showcase AI's power in a playful manner.`
    },
  ]

  const educations = [
    {
        title: 'Computer Science',
        period: 'September 2022 - June 2024',                
        description: 'ECAM Brussels Engineering School'
    },
    {
        title: 'Industrial Engineer',
        period: 'September 2018 - June 2022',  
        description: 'ECAM Brussels Engineering School'              
    },
  ]
  
    return (
    <>
        <div className='text-grey-text text-sm md:text-md'>           
            As a recent graduate in Industrial Engineering with a focus on Computer Science, I am exploring opportunities to expand my skill set and deepen my knowledge. I believe in continuous learning and strive to stay updated with the latest technologies and industry trends. I am excited to collaborate with others and contribute to innovative projects.
        </div>
        
        <TimeLine title='Experience' timelineItems={experiences} />
        <TimeLine title='Education' timelineItems={educations} liCSS={{marginBottom:'12px'}}/>


    </>
  )
}

export default AboutMe