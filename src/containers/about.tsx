const AboutSection = () => {
    return <div className='h-screen flex flex-col justify-around w-full text-center  text-white p-4
     bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        <div>
            <div className="text-9xl font-bold">
                John Doe
            </div>
            <div className="text-6xl mt-5">
                Junior Developer
            </div>
        </div>
        <div className="text-2xl font-bold mt-5">
            connect@johndoe.com
        </div>
    </div>
}

export default AboutSection;