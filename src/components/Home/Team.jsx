import React from 'react'

import User from "../../img/mactabbi/logorouge.jpg"

const Team = () => {

    const people = [
        {
            name: 'Merzoug Nacereddine',
            role: 'Owner',
            imageUrl: User
        },
        {
            name: 'Berhail Lamis Ouenassa',
            role: 'Hub manager',
            imageUrl: User
        },
        {
            name: 'Nardjis',
            role: 'Community manager',
            imageUrl: User
        },
        {
            name: 'Fadi',
            role: 'Project manager',
            imageUrl: User
        },
    ]

    return (
        <div className=' h-[95vh]  mt-[5rem] pr-[3rem] pl-[3rem]'>
            <div className='gap-4 mt-[2rem] mb-[2rem]'>
                <div className=' pr-[3rem] pl-[3rem] text-[1.8rem] font-bold'>
                    <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                        Meet our team
                    </h2>
                </div>

                <div className="justify-between grid mt-10 mb-10 gap-x-3 gap-y-10 px-10 lg:px-10 xl:grid-cols-2">
                    <ul role="list" className="grid gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-sm font-semibold leading-6 text-rouge">{person.role}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='gap-2 mt-[2rem] mb-[2rem]'>
                <div className=' pr-[3rem] pl-[3rem] text-[1.8rem] font-bold text-center'>
                    Your work is our work
                </div>
                <div className='text-[1.8rem] font-bold text-center text-rouge'>
                    All you need is a MAC, a Table, & a Business Idea
                </div>
                <div className=' pr-[3rem] pl-[3rem] text-[1.8rem] font-bold text-center'>
                    Build your business today !!!
                </div>
            </div>
        </div>
    )
}

export default Team