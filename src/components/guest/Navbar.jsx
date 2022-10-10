import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slice/AuthSlice';

const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { authUser } = useSelector(state => state.authUser)
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const handleLogout = () => {
        console.log('clicked')
        dispatch(logout())
        navigate('/')
    }

    const handleLogin = () => {
        navigate('/login')
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#df7000]'>BADAN ADHOC</h1>
            <ul className='hidden md:flex'>
                <li className='p-4  hover:text-orange-400'>Home</li>
                <li className='p-4  hover:text-orange-400'>News</li>
                <li className='p-4  hover:text-orange-400'>Team</li>
                <li className='p-4  hover:text-orange-400'>FAQ</li>
                <NavLink to="/login">
                    <li className='p-4 text-white hover:text-orange-400'>Login</li>
                </NavLink>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>LOGO.</h1>
                <li className='p-4 border-b border-gray-600 text-white  hover:text-orange-400'>Home</li>
                <li className='p-4 border-b border-gray-600 text-white  hover:text-orange-400'>News</li>
                <li className='p-4 border-b border-gray-600 text-white  hover:text-orange-400'>Team</li>
                <li className='p-4 border-b border-gray-600 text-white  hover:text-orange-400'>FAQ</li>
                <li className='p-4 border-b border-gray-600 text-white  hover:text-orange-400 cursor-pointer' onClick={authUser === null ? () => handleLogin() : () => handleLogout()}>{authUser === null ? 'Login' : 'Logout'}</li>
            </ul>
        </div >
    );
};

export default Navbar;