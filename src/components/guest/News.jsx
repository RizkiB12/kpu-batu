import React from 'react';
import People from '../../assets/images/people.jpg';

const News = () => {
    return (
        <div className='w-full bg-white py-5 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={People} alt='/' />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                        molestiae delectus culpa hic assumenda, voluptate reprehenderit
                        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
                        eveniet ex deserunt fuga?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default News;