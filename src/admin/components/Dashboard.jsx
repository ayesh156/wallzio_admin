import React, { useState, useEffect } from 'react'
import { HiOutlineChartBar } from "react-icons/hi";
import './adminStyle.css';
import { FaUserAlt } from "react-icons/fa";
import { AreaChart, XAxis, ResponsiveContainer, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';
import { adminUser } from '../../assets';

function Dashboard() {

    const [domLoaded, setDomLoaded] = useState(false);
    useEffect(() => {
        setDomLoaded(true);
    }, []);

    const data = [
        {
            "name": "January",
            "downloads": 4000,
            "Subscriptions": 2400,
            "amt": 2400
        },
        {
            "name": "February",
            "downloads": 3000,
            "Subscriptions": 1398,
            "amt": 2210
        },
        {
            "name": "March",
            "downloads": 2000,
            "Subscriptions": 9800,
            "amt": 2290
        },
        {
            "name": "April",
            "downloads": 2780,
            "Subscriptions": 3908,
            "amt": 2000
        },
        {
            "name": "June",
            "downloads": 1890,
            "Subscriptions": 4800,
            "amt": 2181
        },
        {
            "name": "July",
            "downloads": 2390,
            "Subscriptions": 3800,
            "amt": 2500
        },
        {
            "name": "August",
            "downloads": 3490,
            "Subscriptions": 4300,
            "amt": 2100
        }
    ];

    const wallpapers = [
        { id: 1, title: 'Cable Bridge', price: 110, img: 'https://images.pexels.com/photos/302183/pexels-photo-302183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 2, title: 'City at Night', price: 70, img: 'https://images.pexels.com/photos/1364982/pexels-photo-1364982.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
        { id: 3, title: 'Ciyscape', price: 100, img: 'https://images.pexels.com/photos/2132689/pexels-photo-2132689.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
        { id: 4, title: 'Town hall', price: 86, img: 'https://images.pexels.com/photos/15501131/pexels-photo-15501131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 5, title: 'Scissors swing', price: 60, img: 'https://images.pexels.com/photos/15501116/pexels-photo-15501116.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
        { id: 6, title: 'Town lights', price: 80, img: 'https://images.pexels.com/photos/15501103/pexels-photo-15501103.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
    ];

    return (
        <main className='p-5 grow bg-white my-2 mr-2 rounded-3xl'>
            <div className="flex mb-6 items-center">
                <div className='w-1/2 grow'>
                    <h1 className="text-primary2 text-xl mb-4">Welcome, <b>Ayesh</b></h1>
                </div>
                <div className=''>
                    <div className="bg-gray-200 flex items-center rounded-md overflow-hidden">
                        <img className='h-8' src={adminUser} alt="" />
                        <span className='px-3'>Ayesh</span>
                    </div>
                </div>
            </div>
            <div className="md:flex gap-10">
                <div className='md:w-9/12 grow'>
                    <div className="md:flex gap-5 ">
                        <div className="bg-blue-300 grow w-full mb-5 md:mb-0 md:w-1/2 md:gap-2 flex items-center text-primary2 p-5 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md">
                            <span className='text-3xl'><FaUserAlt /></span>
                            <div>
                                <h2 className='font-bold text-2xl leading-4'>5</h2>
                                <h3 className='text-xs'>Subscribers</h3>
                            </div>
                        </div>
                        <div className="bg-red-200 grow w-full md:w-1/2 md:gap-2 flex items-center text-primary2 p-5 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md">
                            <span className='text-4xl'><HiOutlineChartBar /></span>
                            <div>
                                <h2 className='font-bold text-2xl leading-4'>345</h2>
                                <h3 className='text-xs'>Wallpapers</h3>
                            </div>
                        </div>
                    </div>

                    <div className="w-full" style={{ height: '60vh' }}>
                        <h2 className="mt-5 mb-3 text-primary font-bold text-xl">Wallpapers</h2>
                        {domLoaded && (
                            <ResponsiveContainer width="98%">
                                <AreaChart data={data}
                                    margin={{ top: 0, right: 0, left: -20, bottom: 45 }}>
                                    <defs>
                                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="name" style={{ fill: '#aaa', fontSize: '.7rem' }} />
                                    <YAxis label={{ fill: 'red' }} style={{ fill: '#aaa', fontSize: '.7rem' }} />
                                    <CartesianGrid strokeDasharray="1 1" style={{ borderStyle: { color: 'red' } }} />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="downloads" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                                    <Area type="monotone" dataKey="Subscriptions" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        )}
                    </div>
                </div>
                <div className='md:w-3/12 grow'>
                    <h2 className='text-primary2 font-bold'>Top selling Wallpapers</h2>
                    <div className='mt-3'>
                        {wallpapers.map(wallpapers => (

                            <div className='flex mb-4 items-center gap-2'>
                                <span className='text-gray-500 text-xs'>{wallpapers.id}</span>
                                <img className='w-14 rounded-md' src={wallpapers.img} alt="" />
                                <div>
                                    <div className='text-sm leading-5 text-primary2'>{wallpapers.title}</div>
                                    <div className='text-primary2 text-xl font-bold leading-5'>${wallpapers.price}</div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Dashboard