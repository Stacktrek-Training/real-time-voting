import React from 'react'
import 'flowbite'
import create from '../../assets/icons/create.svg'
import result from '../../assets/icons/result.svg'
import details from '../../assets/icons/details.svg'
import logo from '../../assets/logo/logo.png'
import userprofile from '../../assets/icons/userprofile.svg'
import signout from '../../assets/icons/signout.svg'
const Report = () => {
  return (
    <div>{/* top navigation bar */}
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="border-b border-blue-500 ml-8max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-[5.1rem]">
          <a href="/" class="inline-flex items-center">
            <img src={logo} class="h-7  ml-1 w-[13.8rem]" />
          </a>

          <div class="w-[20rem] mt-2 ml-60">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="home" class="block py-3 text-[1.1rem] w-9 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 mr-20" aria-current="page">Home</a>
              </li>
              <li>
                <a href="about" class="block py-2 pl-3 pr-4 text-[1.1rem] text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
            </ul>
          </div>


          <div class="flex md:order-2 mt-[-1rem]">
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
              <svg class="w-5 mt-[2-rem] h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Search</span>
            </button>
            <div class="relative hidden md:block">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 /" placeholder="Search..." />
            </div>
            <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span class="sr-only">Open menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mt-[4rem]" id="navbar-search">
            <div class="relative mt-3 md:hidden">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              </div>
              <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>

          </div>
        </div>

        {/* dashboard */}
        <div>

          <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
          </button>

          <aside id="separator-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            {/* side bar */}
            <div class="h-full px-3 py-4 overflow-y-auto bg-blue-200 dark:bg-blue-800 mt-20 border-r">
              <ul class="space-y-2 font-medium">
                <li>
                  <a href="/" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <img src={create} class="w-[1.45rem]" />
                    <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"></svg>
                    <span class="ml-[-0.8rem]">Create Poll</span>
                  </a>
                </li>

                <li>
                  <a href="/results" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <img src={result} class="w-[1.7rem] ml-[-0.1rem]" />
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"></svg>
                    <span class="flex-1 ml-[-0.8rem] whitespace-nowrap">View Results</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <img src={details} class="w-[1.7rem]" />
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"></svg>
                    <span class="flex-1 ml-[-0.8rem] whitespace-nowrap">Reports</span>
                  </a>
                </li>
                <li>

                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <img src={signout} class="w-[1.7rem]" />
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"></svg>
                    <span class="flex-1 ml-[-0.8rem] whitespace-nowrap">Sign Out</span>
                  </a>
                </li>
              </ul>
              <ul class="pt-5 mt-56 w-[16rem]  space-y-3 font-medium border-t border-white dark:border-gray-900">


                <li>
                  {/**UserProfile */}
                  <div class="flex items-center justify-center space-x-0.9 ml-[0.40rem]">
                    <img src={userprofile} class="w-[1.9rem] ml-[-2rem] " />
                    <div class="font-medium dark:text-white">
                      <div>Rustia Sabino</div>
                      <div class="text-sm text-black dark:text-gray-400">Joined in February 20,2023</div>
                    </div>


                  </div>
                </li>
              </ul>
            </div>

          </aside>
        </div>
      </nav>
      {/**Report */}
      <div>
      <div class="ml-[26rem] mt-30 p-4  bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
            <dl class="grid max-w-screen-xl grid-cols-2 gap-5 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-3 dark:text-white sm:p-8">
                <div class=" items-center justify-center">
                    <dt class="mb-2 text-5xl font-extrabold">100k+</dt>
                    <dd class="ml-10 font-bold text-blue-800 dark:text-gray-400">Users</dd>
                </div>
                <div class=" items-center justify-center">
                    <dt class="mb-2 text-5xl font-extrabold">90k+</dt>
                    <dd class="ml-10 font-bold text-blue-800 dark:text-gray-400">Polls</dd>
                </div>
                <div class=" items-center justify-center">
                    <dt class="mb-2 text-5xl font-extrabold">50k+</dt>
                    <dd class="ml-10 font-bold text-blue-800 dark:text-gray-400">Votes</dd>
                </div>
            </dl>
        </div>
      
       







      </div>




    </div>



  )
}

export default Report