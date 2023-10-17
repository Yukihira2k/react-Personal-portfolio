import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white ">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8 mt-[35%] md:mt-auto">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500  ">About</p>
            </div>

            <p className="text-xl mt-20">
            I've always been fascinated by the intersection of creativity and technology, and that's what led me to pursue a career in front-end development. During my time in college, I dedicated myself to learning the latest web technologies, best practices, and design principles.
            </p>

            <br></br>

            <h2 className="text-4xl font-bold inline pb-4">What motivates me?</h2>
            <p className="text-xl">
            What drives me in this field is the ever-evolving nature of web development. The constant pursuit of new techniques and technologies keeps me motivated and enthusiastic. I'm passionate about web performance optimization, ensuring that websites not only look great but also load quickly, providing users with a seamless experience.
             
            </p>

        </div>
    </div>
  )
}

export default About