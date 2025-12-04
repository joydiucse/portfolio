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
        icon: 'web'
    },
    {
        title: "Database Design",
        count: "32+ Apps",
        className: 'bg-rose-600',
        icon: 'web'
    }
]

const IconButton = ({icon, className=''}) => {
    return (
        <>
            <div className={`size-14 rounded-full fcc text-white ${className}`}>
                <ReactIcon name={icon}/>
            </div>
        </>
    )
}

function Service() {


    return (
        <Container className="py-12">
            <div className="grid grid-cols-2">
                <div className="lg:col-span-1">
                    <div className="space-y-10">
                        {data.map((item, index) => (
                            <Link to={'#'} key={index} className={'block border'}>
                              <div className={'fc gap-6'}>
                                <IconButton icon={item?.icon} className={item?.className}/>
                                <div className="space-y-0">
                                  <p className={'text-lg font-medium'}>{item?.title}</p>
                                  <p className={'text-sm'}>{item?.count}</p>
                                </div>
                              </div>
                            </Link>

                        ))}
                    </div>
                </div>
                <div className="lg:col-span-1 ">

                </div>
            </div>
        </Container>
    )
}

export default Service