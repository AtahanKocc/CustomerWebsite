import React from 'react';
import Section from "./common/Section";
import Autocad from "../assets/autocad.jpg";
import Solidworks from "../assets/solidworks.jpeg"
import Matlab from "../assets/matlab.jpeg"
import Excel from "../assets/excel2.png"

const Skills = () => {
    const skills = [
        {
            id: 1,
            src: Autocad,
            title: "Autocad",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: Solidworks,
            title: "Solidworks",
            style: "shadow-blue-500",
        },
        {
            id:3,
            src:Matlab,
            title:"Matlab",
        },
        {
            id: 4,
            src: Excel,
            title: "Excel",
            style: "shadow-blue-500",
        },
       
    ];

    return (
        <Section
            title="Skills 🛠️"
            subtitle="These are the technologies I've worked with"
        >
            <div className='grid grid-cols-4 gap-5'>
                {skills.map(({ id, src, title, style }) => (
                    <div
                        key={id}
                        className='flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110'
                    >
                        <img src={src} alt={title} className='w-full h-full md:w-44 md:h-44 object-contain' />
                        <h3 className='mt-5 text-base'>{title}</h3>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;