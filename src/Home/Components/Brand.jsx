import React from 'react'

const Brand = () => {
  return (
    <>
      <div className="py-14 bg-[#F5F5F5]">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <h3 className="text-[24px] font-bold font-jakarta text-black leading-[32px] w-full sm:w-[657px] mx-auto text-center">
                    “We've got custom T-shirts in a range of fits and sizes, so everyone can wear your brand or message.”
                </h3>
                <div className="mt-6">
                    <ul className="flex gap-y-6 flex-wrap items-center justify-center [&>*]:px-12 lg:divide-x">
                        <li className="flex-none">
                            <img src="images/spotify.png" alt="spotify" />
                        </li>
                        <li className="flex-none">
                            <img src="images/feedly.png" alt="spotify" />
                        </li>
                        <li className="flex-none">
                                <img src="images/upwork.png" alt="spotify" />
                        </li>
                        <li className="flex-none">
                                <img src="images/hopin.png" alt="spotify" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Brand