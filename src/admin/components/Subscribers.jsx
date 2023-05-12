import React, { useState } from 'react';
import { orderBy } from 'lodash';
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbLock, TbLockOpen } from "react-icons/tb";

function Subscribers() {

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
      <h1 className='text-primary2 text-xl font-bold mb-4'>Subscribers</h1>

      <div className='w-full sm:w-1/2'>
        <div className='sm:mb-0 mb-5 mr-5 sm:ml-5 ml-0'>
          <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Subscribers..." required />
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </div>
      </div>

      <div className='p-5 bg-white dark:bg-gray-900 w-[80vw] md:w-full md:overflow-auto overflow-x-scroll'>
        <div className="shadow-md sm:rounded-lg p-3 min-w-[40rem]">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr over>

                {Object.keys(columns).map(ck => (
                  <th onClick={() => updateSorting(ck)} scope="col" className="px-6 py-3">
                    {columns[ck]}
                    {sortingColumn === ck ? (
                      sortingDirection === 'ASC' ? '↓' : '↑'
                    ) : ''}
                  </th>
                ))}

              </tr>
            </thead>
            <tbody>

              {sortedData.map(item => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  {Object.keys(item).map((key, index) => (
                    <td className={`px-6 py-4 ${index === Object.keys(item).length - 1 ? 'text-red-500 font-bold' : ''}`}>
                      {item[key]}
                    </td>
                  ))}
                  <td className="px-6 py-4 flex items-center">
                    <button onClick={toggleModal} className="text-gray-400 hover:text-gray-600 ease-out duration-1000">
                      Edit
                    </button>
                    <button className="text-white bg-red-600 p-1 border rounded-md hover:bg-red-400 ml-5 ease-out duration-1000">
                      <RiDeleteBin6Line />
                    </button>
                    <button className="text-white bg-yellow-600 p-1 border rounded-md hover:bg-yellow-400 ml-2 ease-out duration-1000">
                      <TbLock />
                    </button>
                    {/* <button className="text-white bg-blue-600 p-1 border rounded-md hover:bg-blue-400 ml-2 ease-out duration-1000">
                                            <TbLockOpen />
                                        </button> */}
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
          <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
            <ul className="inline-flex items-center -space-x-px">
              <li>
                <a href="#" className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="sr-only">Previous</span>
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                </a>
              </li>
              <li>
                <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
              </li>
              <li>
                <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
              </li>
              <li>
                <a href="#" aria-current="page" className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
              </li>
              <li>
                <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
              </li>
              <li>
                <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
              </li>
              <li>
                <a href="#" className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="sr-only">Next</span>
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
          <div className="md:w-[800px] w-[80vw] flex flex-col">
            <button className="text-white text-xl place-self-end" onClick={toggleModal}>
              X
            </button>
            <div className="bg-white p-2 rounded h-[80vh] overflow-y-scroll">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Edit Subscriber</h3>
                  <div className="space-y-3">
                    <div className="border-b border-gray-900/10 pb-4">

                      <div className='flex items-center justify-center'>
                        <div className="w-32">
                          <div className="mt-2 flex items-center gap-x-3">
                            <svg className="h-32 w-32 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                            </svg>

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
                            <select id="country" name="country" autocomplete="country-name" className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2  px-3 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                              <option>United States</option>
                              <option>Canada</option>
                              <option>Mexico</option>
                            </select>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-5">
                      <h2 className="text-base font-semibold leading-7 text-gray-900">Package Information</h2>

                      <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">

                      <div className="sm:col-span-3">
                          <label for="country" className="block text-sm font-medium leading-6 text-gray-900">Package</label>
                          <div className="mt-2">
                            <select id="country" name="country" autocomplete="country-name" className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2  px-3 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                              <option>Select Pagackage</option>
                              <option>Basic</option>
                              <option>Premium</option>
                              <option>Gold</option>
                            </select>
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900">Monthly Payment</label>
                          <div className="mt-2">
                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label for="last-name" className="block text-sm font-medium leading-6 text-gray-900">Joined Date</label>
                          <div className="mt-2">
                            <input type="text" name="last-name" id="last-name" autocomplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Duration</label>
                          <div className="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
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
          </div>
        </div>
      )}

    </main>
  )
}

export default Subscribers