import React from 'react';
import header from "../assets/header.png";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-white bg-cover bg-fixed" style={{ backgroundImage: `url(${header})` }}>
            <div className="container mx-auto">
                {/* Main */}
                <div className="container p-4 md:p-8 mx-auto flex flex-col md:flex-row items-center">
                    {/* Left Col */}
                    <div className="flex flex-col w-full xl:w-2/5 justify-center items-center lg:items-start overflow-y-hidden">
                        <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                            Welcome to Medi Archive
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                                - Your Private Blockchain Health Repository
                            </span>
                        </h1>
                        <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                            Safeguarding your health data with the power of blockchain technology. Your privacy is our priority.
                        </p>
                        <a href='/form'>
  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
    Go to App
  </button>
</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
