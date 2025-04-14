import React, { CSSProperties } from 'react'

type TimeLineItem = {
    title : string;
    period: string;
    quote? : string;
    description?: string;
}

interface Props{    
    title: string;    
    timelineItems: TimeLineItem[];
    liCSS?: CSSProperties;
}

const TimeLine = ({title, timelineItems, liCSS = {marginBottom:'20px'}} : Props) => {
    if (timelineItems.length < 1) return;
  
    return (
    <div className='mt-5'>
        <h3 className='text-white font-bold text-md'>{title}</h3>
        <ul className='ml-5 mt-3 relative border-l border-gray-5^00'>            
        
            {timelineItems.map((item, index)=>(
                <li key={index} className="ml-4" style={liCSS}>
                    <div className='absolute mt-1.5 -left-1.5 bg-primary rounded-full w-3 h-3'></div>
                    <time className='text-primary text-sm'>{item.period}</time>
                    <h3 className='text-white-text font-semibold text-md'>{item.title}</h3>
                    {item.quote && 
                        <blockquote className='italic font-semibold text-gray-900'>
                            <p className='text-gray-400 text-base'>&quot;{item.quote}&quot;</p>
                        </blockquote>
                    }
                    <p className='text-gray-400 text-base'>{item.description}</p>
                    
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TimeLine