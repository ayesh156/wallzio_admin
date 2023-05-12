import React, { useState } from 'react';
import { orderBy } from 'lodash';
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbLock, TbLockOpen } from "react-icons/tb";
import { adminUser } from '../../assets';

function Settings() {

  const [sortingColumn, setSortingColumn] = useState('id');
  const [sortingDirection, setSortingDirection] = useState('ASC');
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const data = [
    { id: 1, name: 'Ayesh Chathuranga', email: 'ayesh@gmail.com', password: 'ayesh123' },
    { id: 2, name: 'Ayesh Chathuranga', email: 'ayesh@gmail.com', password: 'ayesh123' },
    { id: 3, name: 'Ayesh Chathuranga', email: 'ayesh@gmail.com', password: 'ayesh123' },
    { id: 4, name: 'Ayesh Chathuranga', email: 'ayesh@gmail.com', password: 'ayesh123' },
    { id: 5, name: 'Ayesh Chathuranga', email: 'ayesh@gmail.com', password: 'ayesh123' },
    { id: 6, name: 'Ayesh Chathuranga', email: 'ayesh@gmail.com', password: 'ayesh123' },
    { id: 7, name: 'Ayesh Chathuranga', email: 'ayesh@gmail.com', password: 'ayesh123' },
    { id: 8, name: 'Ayesh Chathuranga', email: 'ayesh@gmail.com', password: 'ayesh123' },
    { id: 9, name: 'Ayesh Chathuranga', email: 'ayesh@gmail.com', password: 'ayesh123' },
    { id: 10, name: 'Ayesh Chathuranga', email: 'ayesh@gmail.com', password: 'ayesh123' },
  ];

  const columns = {
    id: 'ID',
    name: 'Name',
    email: 'Email',
    password: 'Password',
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
      <h1 className='text-primary2 text-xl font-bold mb-2'>Edit Profile</h1>
    <div className='justify-center items-center flex'>
          <div className="flex flex-col w-full sm:w-10/12">
                  <div className="space-y-3">
                    <div className="border-b border-gray-900/10 pb-4">

                      <div className='flex items-center justify-center'>
                        <div className="w-32">
                          {/* <div className="mt-2 flex items-center gap-x-3">
                            <svg className="h-32 w-32 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                            </svg>

                          </div> */}
                          <div className="mt-2 mb-2 flex items-center gap-x-3">
                          <img className='w-32 h-32 rounded-full' src={adminUser} alt="" />
                          </div>
                          <label htmlFor="changeBtn" className='rounded-md grid text-center bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>Change</label>
                          <input type="file" className="hidden" id='changeBtn' />
                        </div>
                      </div>
                      
                    </div>

                    <div className="border-b border-gray-900/10 pb-5">
                      <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>

                      <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                          <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                          <div className="mt-2">
                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label for="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                          <div className="mt-2">
                            <input type="text" name="last-name" id="last-name" autocomplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                          <div className="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                          <div className="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>

                        <div className="col-span-full">
                          <label for="street-address" className="block text-sm font-medium leading-6 text-gray-900">Address</label>
                          <div className="mt-2">
                            <input type="text" name="street-address" id="street-address" autocomplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Mobile</label>
                          <div className="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label for="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
                          <div className="mt-2">
                            <select id="country" name="country" autocomplete="country-name" className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 px-3 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                              <option>United States</option>
                              <option>Canada</option>
                              <option>Mexico</option>
                            </select>
                          </div>
                        </div>

                      </div>
                    </div>
                    
                  </div>

                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={toggleModal}>Cancel</button>
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                  </div>
              </div>
              </div>
    </main>
  )
}

export default Settings