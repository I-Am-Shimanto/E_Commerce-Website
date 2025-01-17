import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowForward } from "react-icons/io";


const Banner = () => {
  return (
    <>
      <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left ">
                    <h1 className="w-[400px] sm:w-[484px] text-[68px] font-bold font-jakarta text-black leading-[81.6px]">
                      Make the most of o
                      <br />
                      <span className="">printing</span>
                    </h1>
                    <p className="w-full sm:w-[450px] text-lg font-medium font-jakarta text-secondary leading-[32px] pt-9 mb-10">
                      What’s more, we do it right! A full administration printing background. Print shirts for yourself or your online business
                        </p>
                    <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <Link className="w-fit px-7 py-3 w- bg-primary text-white text-center rounded-md shadow-md block sm:w-auto flex items-center gap-1 hover:bg-black duration-[.3s]">
                            Shop Now <IoMdArrowForward/>
                        </Link>
                    </div>
                </div>
                <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                    <img src="images/banner.png" className="w-full mx-auto sm:w-10/12  lg:w-full" alt='banner'/>
                </div>
            </section>
    </>
  )
}

export default Banner