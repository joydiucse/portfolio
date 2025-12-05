import React from 'react'
import Container from '../../components/common/Container.jsx'
import {ReactIcon} from "../Icons.jsx";
import {Link} from "react-router-dom";

const data = [
    {
        title: "Web Application",
        count: "25+ Projects",
        className: 'bg-primary',
        icon: 'web'
    },
    {
        title: "API Integration",
        count: "12+ Projects",
        className: 'bg-secondary',
        icon: 'api'
    },
    {
        title: "Database Design",
        count: "32+ Apps",
        className: 'bg-rose-600',
        icon: 'web'
    }
]

const serviceCount = [
    {
        label: 'Project Completed',
        count: '50+'
    },
    {
        label: 'Happy Clients',
        count: '25+'
    },

]

const IconButton = ({icon, className = ''}) => {
    return (
        <>
            <div className={`size-14 rounded-full fcc text-white text-xl ${className}`}>
                <ReactIcon name={icon}/>
            </div>
        </>
    )
}

function Service() {


    return (
        <Container className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* LEFT SECTION */}
            <div className="lg:col-span-2">
                <div className="-mt-32 sm:mt-0 z-10 relative bg-body rounded-2xl sm:rounded-0 py-4 sm:py-0 -mx-2 sm:mx-0 px-4 sm:px-0 border sm:border-none border-gray-200 shadow-xl sm:shadow-none">
                    <div className="space-y-4">
                        {data.map((item, index) => (
                            <Link
                                to="#"
                                key={index}
                                className="block sample-border rounded-lg px-4 py-3 hover:shadow-xl duration-200"
                            >
                                <div className="flex items-center gap-6">
                                    <IconButton icon={item?.icon} className={item?.className} />
                                    <div className="space-y-0">
                                        <p className="text-lg font-medium">{item?.title}</p>
                                        <p className="text-sm">{item?.count}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>

            {/* EMPTY COLUMN - auto hidden on mobile */}
            <div className="hidden lg:block lg:col-span-1"></div>

            {/* RIGHT SECTION */}
            <div className="lg:col-span-2 flex items-center">
              <div className="space-y-6 w-full">

                <div className="font-medium text-border-design space-y-1">
                  <p className="text-2xl md:text-3xl">What do I</p>
                  <p className="text-4xl md:text-5xl text-primary-dark">Service?</p>
                </div>

                <div className="space-y-2">
                  <p className="font-medium text-base md:text-lg">
                    Need a professional full-stack web developer?
                  </p>
                  <p className="text-sm md:text-base">
                    I build fast, secure, and modern websites — from simple landing pages to advanced AI-powered platforms.
                  </p>
                </div>

                {/* COUNTS */}
                <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20">
                  {serviceCount.map((item, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <h3 className="text-3xl md:text-4xl font-semibold text-primary-dark">
                          {item?.count}
                        </h3>
                        <h3 className="text-xs md:text-sm">{item?.label}</h3>
                      </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </Container>
    )
}

export default Service
