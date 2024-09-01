import React from 'react'
import book from '../images/book.png'
export default function Hero() {
return (
<>
    <div className='min-h-80 flex md:ml-24 md:mt-6 p-10 md:mb-14 mt-7'>
        <div>
            <h1 className='text-5xl font-bold font-sans mb-6 md:mt-36'>Discover Your Next <span className='text-[#1DA1F2]'> Favorite Book</span></h1>
            <p className='text-xl mb-6'> Browse, buy, and enjoy books effortlessly on our bookstore app.</p>
            <div className="flex items-center gap-3 md:mt-8 text-gray-500 font-medium">
                <div className="relative md:w-3/4 w-11/12">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900">Email :</span>
                    <input type="text" id="first_name"
                        className="pl-16 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="@gmail.com" required />
                </div>
            </div>
            <div>
            <button className="btn btn-info text-white mt-4">Subscribe</button>
            </div>

        </div>
        <div>
            <img src="https://media.istockphoto.com/id/1318913887/vector/man-reading-book-character-illustration.jpg?s=612x612&w=0&k=20&c=EBjvpUNwuBa7apfLIfVOrKmQU4r_0chSKs2d-zK6_3Q=" className='md:ml-14 w-96 md:mt-11 hidden md:block' alt="" />

        </div>
    </div>
</>
)
}