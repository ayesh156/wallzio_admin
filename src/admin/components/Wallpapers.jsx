import React, { useState } from 'react';
import { orderBy } from 'lodash';
import { RiDeleteBin6Line } from "react-icons/ri";
import TagsInput from './InputTags';

function Wallpapers() {

    const [sortingColumn, setSortingColumn] = useState('id');
    const [sortingDirection, setSortingDirection] = useState('ASC');
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const [isModal2Open, setisModal2Open] = useState(false);

    const toggleModal2 = () => {
        setisModal2Open(!isModal2Open);
    };

    const data = [
        { id: 1, name: 'Night town', url: 'https://images.pexels.com/photos/302183/pexels-photo-302183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', price: '$100', action: 'publish' },
        { id: 2, name: 'Night town', url: 'https://images.pexels.com/photos/302183/pexels-photo-302183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', price: '$100', action: 'publish' },
        { id: 3, name: 'Night town', url: 'https://images.pexels.com/photos/302183/pexels-photo-302183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', price: '$100', action: 'draft' },
        { id: 4, name: 'Night town', url: 'https://images.pexels.com/photos/302183/pexels-photo-302183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', price: '$100', action: 'publish' },
        { id: 5, name: 'Night town', url: 'https://images.pexels.com/photos/302183/pexels-photo-302183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', price: '$100', action: 'publish' },
        { id: 6, name: 'Night town', url: 'https://images.pexels.com/photos/302183/pexels-photo-302183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', price: '$100', action: 'draft' },
    ];

    const columns = {
        id: 'ID',
        name: 'Name',
        description: 'Description',
        price: 'Price',
        action: 'Action',
    };

    function updateSorting(column) {
        if (column === sortingColumn) {
            setSortingDirection(prev => prev === 'ASC' ? 'DESC' : 'ASC');
        }

        setSortingColumn(column);
    }

    const sortedData = orderBy(data, sortingColumn, [sortingDirection.toLowerCase()]);

    return (
        <main className='p-5 grow bg-white my-2 mr-2 rounded-3xl'>
            <h1 className='text-primary2 text-xl font-bold mb-4'>Wallpapers</h1>

            <div className='grid sm:grid-cols-2'>
                <div className='sm:mb-0 mb-5 mr-5 sm:ml-5 ml-0'>
                    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Wallpapers..." required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </div>


                <div className='flex justify-end mr-5 mb-5'>

                    <button
                        className="w-full sm:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center"
                        onClick={toggleModal}
                    >
                        Add Wallpapers
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10">
                    <div className="md:w-[800px] w-[80vw] h-[80vh] flex flex-col">
                        <button className="text-white text-xl place-self-end" onClick={toggleModal}>
                            X
                        </button>
                        <div className="bg-white overflow-y-scroll sm:overflow-y-hidden p-2 rounded">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-5">Add New Wallpaper</h3>
                                <div className='mx-2 columns-1 px-5 sm:px-0 sm:mx-0 sm:columns-3 text-lg my-5'>
                                    <div className='rounded-xl mb-5 sm:mb-0 relative overflow-hidden shadow-lg'
                                    >
                                        <img src='https://images.pexels.com/photos/302183/pexels-photo-302183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="" />
                                        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-end">
                                            <div className="text-xl">
                                                <button className='px-2 rounded-md text-red-700 bg-white'>x</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rounded-xl mb-5 sm:mb-0 relative overflow-hidden shadow-lg'
                                    >
                                        <img src='https://images.pexels.com/photos/302183/pexels-photo-302183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="" />
                                        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-end">
                                            <div className="text-xl">
                                                <button className='px-2 rounded-md text-red-700 bg-white'>x</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rounded-xl mb-5 sm:mb-0 relative overflow-hidden shadow-lg'
                                    >
                                        <img src='https://images.pexels.com/photos/302183/pexels-photo-302183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="" />
                                        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-end">
                                            <div className="text-xl">
                                                <button className='px-2 rounded-md text-red-700 bg-white'>x</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center w-full">
                                    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" multiple type="file" className="hidden" />
                                    </label>
                                </div>
                                <div className='mt-3'>
                                    <input type="checkbox" className='mr-2' />
                                    I confirm, represent and warrant that the content I am uploading is fully owned by me.
                                </div>
                                <div className="mt-6 flex items-center justify-end gap-x-6">
                                <button type="button" className="ml-3 text-sm font-semibold leading-6 text-gray-900" onClick={toggleModal}>Cancel</button>
                                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Upload</button>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className='mx-2 sm:columns-3 gap-3 text-lg mt-5'>

                {data.map((item, index) => (
                    <div
                        key={item.id}
                        className={`rounded-xl overflow-hidden shadow-lg mb-5 sm:mb-0 ${index === 0 ? '' : 'mt-3'}`}
                        onClick={toggleModal2}
                    >
                        <div className='relative'>
                            <img src={item.url} alt="" />
                            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end">
                                <div className="text-white text-xl mb-2 ml-2">
                                    <button className={`px-2 rounded-md ${item.action === 'publish' ? 'bg-green-600' : 'bg-slate-400'}`}>{item.action}</button>
                                </div>
                            </div>
                        </div>
                        <div className='p-2 grid'>
                            <span>{item.name}</span>
                            <span className='text-gray-400'>{item.price}</span>
                        </div>
                    </div>
                ))}

            </div>

            {isModal2Open && (
                <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
                    <div className="md:w-[800px] w-[80vw] h-[90vh] flex flex-col">
                        <button className="text-white text-xl place-self-end" onClick={toggleModal2}>
                            X
                        </button>
                        <div className="bg-white p-2 rounded overflow-y-scroll">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-5">Edit Wallpaper</h3>
                                <div className="flex justify-center mb-2">
                                    <div>
                                        <div className='sm:w-64 w-32 overflow-hidden rounded-xl shadow-lg'>
                                            <img src="https://images.pexels.com/photos/302183/pexels-photo-302183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                                        </div>
                                        <label htmlFor="changeBtn" className='rounded-md grid text-center bg-white px-2.5 mt-2 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>Change</label>
                                        <input type="file" className="hidden" id='changeBtn' />
                                    </div>

                                </div>
                                <div className="mb-3">
                                    <label for="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wallpaper Name</label>
                                    <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className="mb-3">
                                    <label for="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                    <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className="mb-5">
                                    <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Description..."></textarea>

                                </div>
                                <div className='w-full'>
                                <TagsInput tags={['Night', 'Fancy']}/>
                                </div>
                                <div className="mt-6 flex items-center justify-end gap-x-6">
                                <button type="button" className="ml-3 text-sm font-semibold leading-6 text-gray-900" onClick={toggleModal}>Cancel</button>
                                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </main>
    )
}

export default Wallpapers