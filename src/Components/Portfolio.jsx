import React from 'react'
import Insure from '../assets/images/projects/insure-landing-page.jpg'
import Manage from '../assets/images/projects/Manage-landing-page.jpg'
import News from '../assets/images/projects/news-home-page.jpg'

const Portfolio = () => {

    const portfolios =[
        {
            id:1,
            src: Insure,
            link:"https://voluble-begonia-ea4e3a.netlify.app/",
            link2:"https://github.com/Yukihira2k/insure-page-react-talwind"
        },
        {
            id:2,
            src: Manage,
            link:"https://incredible-pixie-6b842b.netlify.app/",
            link2:"https://github.com/Yukihira2k/reactJs-TailwindCss-manage-page"

        },
        {
            id:3,
            src: News,
            link:"https://prismatic-kitten-99737d.netlify.app/",
            link2:"https://github.com/Yukihira2k/NewsLandingPage/tree/main/tailwindCSSwithReact"
        },
    ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
       
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8 mt-[45%] md:mt-auto">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Check out some of my work right here</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

                
            {
                portfolios.map(({id,src,link,link2}) =>(
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img src={src} className="rounded-md duration-200 hover:scale-105"></img>
                    <div className="flex item-center justify-center">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href={link} target="_blank" rel="noreferrer">Demo</a></button>
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href={link2} target="_blank" rel="noreferrer">Code</a></button>
                    </div>

                </div>
                ))
            }

             
            </div>
        </div>

    </div>
  )
}

export default Portfolio