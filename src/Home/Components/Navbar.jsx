import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";




const Navbar = () => {
   const [state, setState] = useState(false)
  const navRef = useRef()



  useEffect(() => {

      const body = document.body

      // Disable scrolling
      const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"]
      if (state) body.classList.add(...customBodyStyle)
      // Enable scrolling
      else body.classList.remove(...customBodyStyle)

      // Sticky strick
      const customStyle = ["sticky-nav", "fixed", "border-b"]
      window.onscroll = () => {
          if (window.scrollY > 80) navRef.current.classList.add(...customStyle)
          else navRef.current.classList.remove(...customStyle)
      }
    }, [state])

  return (
    <>
      <nav ref={navRef} className="bg-white w-full top-0 z-20">
          <div className="items-center px-4 max-w-screen-xl mx-auto md:px-8 lg:flex">
              <div className="flex items-center justify-between py-4 lg:py-4 lg:block">
                    <Link>
                        <img
                            src="images/logo.png"
                            width={120}
                            height={50}
                            alt=" logo"
                        />
                    </Link>
                  <div className="lg:hidden">
                      <button className="text-gray-700 text-xl outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${ state ? 'h-screen pb-20 overflow-auto pr-4' : 'hidden'}`}>
                    <div>
                        <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
                            <li className="mt-8 mb-8 lg:mt-0 lg:mb-0">
                                <Link className="text-xl font-semibold font-jakarta text-black hover:text-primary duration-[.3s] hover:scale-[1.1]">
                                    Contact
                                </Link>
                            </li>
                            <li className="mt-4 lg:mt-0">
                                <Link className="py-3 px-4 text-center text-white bg-indigo-600 hover:bg-primary duration-[.3s] rounded-md shadow block lg:inline">
                                    Login
                                </Link>
                            </li>
                            <li className="mt-8 lg:mt-0">
                                <Link className="py-3 px-4 text-center text-white bg-indigo-600 hover:bg-primary duration-[.3s] rounded-md shadow block lg:inline">
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <ul className="justify-center gap-8 items-center space-y-8 mt-[5px] lg:flex lg:space-x-6 lg:space-y-0">
                            <li>
                              <Link className='text-sm font-bold font-jakarta text-black hover:text-primary duration-[.3s] flex items-center gap-1 hover:scale-[1.1]'>
                              Home <IoIosArrowDown />
                              </Link>
                            </li>
                            <li>
                              <Link className='text-sm font-bold font-jakarta text-black hover:text-primary duration-[.3s] flex items-center gap-1 hover:scale-[1.1]'>
                              TeeSpace <IoIosArrowDown />
                              </Link>
                            </li>
                            <li>
                              <Link className='text-sm font-bold font-jakarta text-black hover:text-primary duration-[.3s] flex items-center gap-1 hover:scale-[1.1]'>
                              Shop <IoIosArrowDown />
                              </Link>
                            </li>
                            <li>
                              <Link className='text-sm font-bold font-jakarta text-black hover:text-primary duration-[.3s] flex items-center gap-1 hover:scale-[1.1]'>
                              Blog <IoIosArrowDown />
                              </Link>
                            </li>
                            <li>
                              <Link className='text-sm font-bold font-jakarta text-black hover:text-primary duration-[.3s] flex items-center gap-1 hover:scale-[1.1]'>
                              Pages <IoIosArrowDown />
                              </Link>
                            </li>
                        </ul>
                    </div>
              </div>
          </div>
      </nav>
    </>
  )
}

export default Navbar