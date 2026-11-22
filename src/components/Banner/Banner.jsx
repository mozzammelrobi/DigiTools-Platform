import React from 'react';
import bannerlogo from '../../assets/banner.png'
import { CiPlay1 } from 'react-icons/ci';

const Banner = () => {
    return (
        <div className="hero max-w-300 mx-auto my-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    alt="Tailwind CSS hero component"
                    src={bannerlogo}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <p className='bg-[#6273821A] rounded-full text-[#9514FA] btn mb-4'>New: AI-Powered Tools Available</p>
                    <h1 className="text-7xl font-extrabold">Supercharge Your Digital Workflow</h1>
                    <p className="py-6 text-[#9514FA]">
                        Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today. <br />
                        Explore Products
                    </p>
                    <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full" >Explore Droduct</button>
                    <button className='btn rounded-full ml-4 border border-[#9514FA]  text-[#9514FA]'> <CiPlay1 /> Watch Demo</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;