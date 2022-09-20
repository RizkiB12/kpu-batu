import React from 'react';


const Cards = () => {
    return (
        <div className='w-full py-[5rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src="https://joeschmoe.io/api/v1/male/jane" alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Rudi Saputra</h2>
                    <p className='text-center text-4xl font-bold'>PPK</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>SMA</p>
                        <p className='py-2 border-b mx-8'>IG 👍: Rudiiii</p>
                        <p className='py-2 border-b mx-8'>FB ❤️: RudiSaputra_</p>
                    </div>
                    <button className='bg-[#df5900] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src="https://joeschmoe.io/api/v1/male/joe" alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Haris Mulyanto</h2>
                    <p className='text-center text-4xl font-bold'>PPS</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>S1 Psikologi</p>
                        <p className='py-2 border-b mx-8'>IG 👍: Rudiiii</p>
                        <p className='py-2 border-b mx-8'>FB ❤️: RudiSaputra_</p>
                    </div>
                    <button className='bg-black text-[#df5900] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src="https://joeschmoe.io/api/v1/male/jed" alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Dodit Mulyanto</h2>
                    <p className='text-center text-4xl font-bold'>KPPS</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>S1 Hukum</p>
                        <p className='py-2 border-b mx-8'>IG 👍: Rudiiii</p>
                        <p className='py-2 border-b mx-8'>FB ❤️: RudiSaputra_</p>
                    </div>
                    <button className='bg-[#df5900] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;