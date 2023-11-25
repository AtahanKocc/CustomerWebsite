import React from 'react'
import Section from "./common/Section"
import {FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa';
import contact from '../assets/development.png'


const Contact = () => {
 
   const SOCIAL = [
    {
        id:1,
        link: "https://twitter.com/ruzgar_ekenn",
        icon: <FaTwitter />,
    },
    {
        id:2,
        link: "https://www.facebook.com/",
        icon: <FaFacebook />,
    },
    {
        id:3,
        link: "https://www.linkedin.com/in/yusuf-s%C3%BCng%C3%BC-a86739185/",
        icon: <FaLinkedin />,
    }
   ];
 
 
 
    return (
    <Section title="Contact 📞" 
    subtitle="If you have any questions or would like to work together, please feel free to contact me.">     
    
    <div className='flex flex-col items-center justify-center gap-8 text-center'>
        <div><img src={contact} alt='contact info' className='w-32 h-32'></img></div>
        <div>
            <p className='max-w-xs md:max-w-lg font-extralight'>
               I'm open to talk regarding freelancing or full-time opportunities.
            </p>
        </div>
        <div className='flex w-full items-center justify-evenly text-3xl'>
            {SOCIAL.map(({id, link, icon}) => ( 
               <a 
               href={link} 
               target="_blank" 
               rel='noopener noreferrer'
               className='duration-200 ease-in-out hover:text-rose-300'>
                {icon}
                </a>
            ))}
        </div>

        <div className='p-8 text-left w-full'>
          <form action='' method='POST'>
            <div className='gap-4 w-full'>
              <div className='flex flex-col'> 
                   <label className='capitalize text-sm py-2 font-extralight'>
                    Name
                   </label>
                   <input type='text' name='name' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400
                   dark:text-white'></input>
                </div>

                <div className='flex flex-col'> 
                   <label className='capitalize text-sm py-2 font-extralight'>
                    Surname
                   </label>
                   <input type='text' name='surname' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400
                   dark:text-white'></input>
                </div>


                <div className='flex flex-col'> 
                   <label className='capitalize text-sm py-2 font-extralight'>
                    Email
                   </label>
                   <input type='text' name='email' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400
                   dark:text-white'></input>
                </div>

                <div className='flex flex-col'> 
                   <label className='capitalize text-sm py-2 font-extralight'>
                    Message
                   </label>
                   <textarea
                    name="message"
                    rows="6"
                    className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400'
                   ></textarea>
                </div>
            </div>

            <div className='flex items-center justify-center'>
              <button className='my-8 bg-gradient-to-r from-rose-600 to-teal-500
              text-white px-6 py-3 uppercase rounded-md tracking-wider
              cursor-pointer hover:scale-105 duration-150'>
                    Send Message
              </button>
            </div>
          </form>
        </div>
    </div>
   
   
    </Section>
  )
}

export default Contact