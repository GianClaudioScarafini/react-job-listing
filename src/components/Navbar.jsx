/* eslint-disable react/no-unknown-property */
import React from 'react';
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

    const linkClass =({isActive}) => isActive ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'

    return (
        <div>
            <nav class="bg-indigo-700 border-b border-indigo-500">
                <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div class="flex h-20 items-center justify-between">
                        <div
                            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                        >
                            <NavLink class="flex flex-shrink-0 items-center mr-4" to="/index.html">
                                <img
                                    class="h-10 w-auto"
                                    src={logo}
                                    alt="React Jobs"
                                />
                                <span class="hidden md:block text-white text-2xl font-bold ml-2"
                                >React Jobs</span
                                >
                            </NavLink>
                            <div class="md:ml-auto">
                                <div class="flex space-x-2">
                                    <NavLink
                                        to="/"
                                        className={linkClass}
                                    >Home
                                    </NavLink>
                                    <NavLink
                                        to="/jobs"
                                        className={linkClass}
                                    >Jobs</NavLink
                                    >
                                    <NavLink
                                        to="/add-job"
                                        className={linkClass}
                                    >Add Job</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
