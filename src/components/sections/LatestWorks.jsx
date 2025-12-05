import React from 'react'
import Container from '../../components/common/Container.jsx'
import {portfolio} from '../../data/data.jsx'
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import {ReactIcon} from "../common/Icons.jsx";

function LatestWorks() {
    return (
        <Container className="py-12" id="works">
            <div className="fcb pb-8">
                <div className="space-y-1">
                    <h3 className="text-2xl font-bold">My Latest Works</h3>
                    <p className="text-sm">Perfect Solution for digital experience</p>
                </div>
                <div className="hidden sm:block">
                    <Link to={'#'} className={'text-sm text-primary font-semibold fc gap-2 hover-border'}>
                        <span>Explore More Works</span> <ReactIcon name={'right-arrow'}/>
                    </Link>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolio.map((p) => (
                    <div key={p.title} className="bg-white rounded-2xl ring-1 ring-gray-200 overflow-hidden">
                        <img src={p.image} alt={p.title} className="w-full h-40 object-cover"/>
                        <div className="p-4">
                            <div className="font-semibold">{p.title}</div>
                            <div className="text-xs text-gray-600">{p.tag}</div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default LatestWorks