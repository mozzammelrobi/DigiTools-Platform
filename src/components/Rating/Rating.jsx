import React from 'react';

const Rating = () => {
    return (
        <div className='mb-28 bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='max-w-300 mx-auto flex'>
                <div className='py-14'>
                    <div className='px-28 '>
                        <button className='text-6xl font-extrabold text-white'>200+</button>
                        <p className='mt-3 text-white'>Premium Tools</p>
                    </div>
                </div>
                <div className='py-14'>
                    <div className='px-28 border-white border-l border-r'>
                        <button className='text-6xl font-extrabold text-white'>50K+</button>
                        <p className='mt-3 text-white'>Active Users</p>
                    </div>
                </div>
                <div className='py-14 '>
                    <div className='px-28 '>
                        <button className='text-6xl font-extrabold text-white'>4.9</button>
                        <p className='mt-3 text-white'>Rating</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Rating;