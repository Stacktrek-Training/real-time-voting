import React from 'react'
import 'flowbite'
import answer from '../../assets/icons/answer.svg'
import result from '../../assets/icons/result.svg'
import details from '../../assets/icons/details.svg'
import logo from '../../assets/logo/logo.png'
import wallpaper from '../../assets/icons/wallpaper.png'
import userprofile from '../../assets/icons/userprofile.svg'
import signout from '../../assets/icons/signout.svg'
import men from '../../assets/icons/men.svg'
const Navbar = () => {
    return (
        <div>
            {/* top navigation bar */}
            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="border-b border-blue-200 ml-8max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-[5.1rem]">
                    <a href="/" class="inline-flex items-center">
                        <img src={logo} class="h-7  ml-1 w-[13.8rem]" />
                    </a>

                    <div class="w-[20rem] mt-2 ml-60">
                        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-00 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
                <div class="h-[33.4rem] ml-[-1] w-[15rem]">
                    <img src={wallpaper} class="h-full " />
                </div>

            </nav>
            {/* create poll form */}
            <div class="ml-[19.9rem] border border-blue-200 mt-[-30rem] w-[55rem] rounded-lg z-50 p-4">
                <form class="w-full" autocomplete="off">
                    <div class="mb-6">
                        <div class="flex items-center space-x-4">
                            <img src={men} class="w-[1.9rem] ml-[1rem] " />
                            <div class="font-medium dark:text-white">
                                <div>Aram Mc Marcelino</div>
                                <div class="text-sm text-gray-500 dark:text-gray-400">Joined in February 20,2023</div>
                            </div>
                        </div>
                        <button type="button" class="py-1 px-5 w-full mr-10 mt-4 text-3x1 font-medium text-gray-900 focus:outline-none bg-blue-200 rounded-lg border border-blue-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">What Programming Language did you use? </button>

                    </div>

                    <div class="mb-6 h-15 mr-[40rem]" autocomplete='off'>
                        <button type="button" class="py-2.5 px-5 w-[30rem] mr-10 mb-2 text-3x1 font-medium text-gray-900 focus:outline-none bg-blue-200 rounded-lg border border-blue-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">C#</button>
                        <button type="button" class="py-2.5 px-5 w-[30rem] mr-10 mb-2 text-3x1 font-medium text-gray-900 focus:outline-none bg-blue-200 rounded-lg border border-blue-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">PHP</button>
                        <button type="button" class="py-2.5 px-5 w-[30rem] mr-10 mb-2 text-3x1 font-medium text-gray-900 focus:outline-none bg-blue-200 rounded-lg border border-blue-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Javascript</button>
                    </div>
                    <div class="ml-4">
                    </div>
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Back to Poll
                        <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </form>
                <div class="mt-3">
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <img src={result} class="h-5 w-5" />
                        View Results
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Navbar