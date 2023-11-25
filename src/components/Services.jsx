import React from 'react'
import Section from './common/Section'
import web from "../assets/coding.png";
import academic from "../assets/academicsupport.png";
import solidworks from "../assets/solidworks.png";
import graphic from "../assets/gdpng.png"

const Services = () => {

    const services = [
       
        {
            id:1,
            image:web,
            title:"Autocad",
        },
        {
            id:2,
            image:academic,
            title:"Academic Support",
        },
        {
            id:3,
            image:solidworks,
            title:"Solidworks",
        },
        {
            id:4,
            image:graphic,
            title:"Graphic Design",
        }
    ];

  return (
    <Section title="Services ⚒️" subtitle="Here is a list of every service I offer to my customers. Please email me if you are unable to find what you are looking for. I am always happy to help."
    >

        <div className='grid gap-10 lg:grid-cols-2'>
            {services.map(({id, image, title}) => (
                <div key={id} className='flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110
                '
                >
                    <img src={image} alt={title} className='w-36 h-36 md:w-44 md:h-44 object-contain' />
                    <h3 className='mt-5 text-base'>{title}</h3>
                </div>
            ))}
        </div>

    </Section>
  )
}

export default Services