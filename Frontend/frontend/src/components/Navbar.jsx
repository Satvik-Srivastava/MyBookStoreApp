import React, { useEffect, useState } from 'react'
import Login from './Login'

export default function Navbar() {

return (
  <>
    <div className="max-w-screen-2xl container mx-auto md:px-20">
      <div className="navbar bg-base-100 mb-15 fixed top-0 left-0 right-0 z-50 pb-2 border-b-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/course">Course</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="font-bold text-3xl font-sans md:ml-24 hover:cursor-pointer text-[#1DA1F2]">
            Candle
          </a>
        </div>
        <div className="navbar-end lg:flex">
          <div>
            <ul className="px-1 font-semibold menu menu-horizontal hidden md:mr-2 md:flex">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/course">Course</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div className="px-3 py-2 border rounded-md hidden">
            <label className=" flex items-center gap-2 mr-5">
              <input
                type="text"
                className="outline-none grow"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>

          <div className="hidden md:block">
            <label className="border border-gray-700 rounded-md p-2 flex items-center gap-2">
              <input
                type="text"
                className="flex-grow outline-none border-none bg-transparent placeholder-gray-400"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>

          <div className="block ml-3">
            <button>
              <a
                className="p-2  border-gray-500 delay-150 rounded-md bg-[#1DA1F2] text-white mr-5 "
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </a>
              <Login />
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);
}