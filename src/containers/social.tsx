const StayConnected = () => {
    return <div className='h-screen flex flex-col justify-around w-full text-center  text-white p-4
     bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        <div>
            <div className="text-9xl font-bold">
                Stay Connected
            </div>
            <div className="text-6xl mt-5">
              <a
              className="text-white hover:text-gray-200" 
              href="https://twitter.com/imabptweets">@imabptweets</a>
            </div>
        </div>
        <div className="text-2xl font-bold mt-5">
            connect@johndoe.com
        </div>
    </div>
}


export default StayConnected;