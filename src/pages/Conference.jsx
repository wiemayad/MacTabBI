import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import emailjs from "@emailjs/browser";

import conference from '../img/mactabbi/conference.jpg'
import conference2 from '../img/mactabbi/conference2.jpg'

// bg-conference
//bg-gradient-to-r from-rouge to-orange-600

const Conference = () => {
    const Conferences = [
        {
            date: "13/11/2023",
            topic: "Topic13",
            person: "Person13"
        },
        {
            date: "14/11/2023",
            topic: "Topic14",
            person: "Person14"
        },
        {
            date: "15/11/2023",
            topic: "Topic15",
            person: "Person15"
        },
        {
            date: "16/11/2023",
            topic: "Topic16",
            person: "Person16"
        },
        {
            date: "17/11/2023",
            topic: "Topic17",
            person: "Person17"
        },
        {
            date: "18/11/2023",
            topic: "Topic18",
            person: "Person18"
        },
        {
            date: "19/11/2023",
            topic: "Topic19",
            person: "Person19",
        }
    ]
    const [data, setData] = useState(Conferences)

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')

    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                //Your service id / Email services -> Gmail -> ServiceID
                "service_d897vqd",
                //your template id / Email templates -> sETTINGS -> TemplateID
                "template_l9g7igi",
                form.current,
                //your user id / Integration -> UserID or publicKey
                "VyBFQFgs0yzRNTGf8"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                    setName('')
                    setMail('')
                    setPhone('')

                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    const [checkedValues, setValues] = useState([])

    const handleChange = (event) => {
        const { value, checked } = event.target

        if (checked) {
            setValues(pre => [...pre, value])
        }
        else (
            setValues(pre => {
                return [...pre.filter(conference => conference !== value)]
            })
        )
    };
    console.log(checkedValues)

    return (
        <div id='Conference' className='text-white h-[100vh] flex items-center justify-center bg-gradient-to-r from-rouge to-orange-600 '
        >
            <div className='flex gap-1 justify-between w-full px-20'>
                <div className='justify-center p-6'>
                    <img className='h-[90vh]' src={conference2} />
                </div>

                <div className='bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg 
                backdrop-filter backdrop-blur-lg bg-opacity-30 relative'>
                    <h1 className='text-3xl font-bold text-center'>Register NOW !</h1>

                    <form ref={form} onSubmit={sendEmail} action="">
                        <div className='relative my-1 '>
                            <input type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)} 
                                name='username'
                                className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                                dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'
                                placeholder='Fullname' />
                            {/*<label htmlFor=''
                                className='absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] 
                                peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 peer '>
                            Fullname</label>*/}
                        </div>

                        <div className='relative my-1 '>
                            <input type='text'
                            value={mail}
                                name='email'
                                onChange={(e) => setMail(e.target.value)} 
                                className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                                dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'
                                placeholder='Email Adress' />
                            </div>

                        <div className='relative my-1 '>
                            <input type='text'
                            value={phone}
                                name='phonenumber'
                                onChange={(e) => setPhone(e.target.value)} 
                                className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                                dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'
                                placeholder='Phone number' />
                          </div>

                        <div className='relative py-1'>
                            Pick conference
                            {data.map((item, index) =>
                                <div class="flex py-1" key={index}>
                                    <div class="flex items-center h-5">
                                        <input id="helper-checkbox"
                                            aria-describedby="helper-checkbox-text"
                                            type="checkbox"
                                            name='checkedValues'
                                            onChange={handleChange}
                                            value={item.date}
                                            class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded 
                                    focus:ring-red-500 focus:ring-2" />
                                    </div>
                                    <div class="ml-2 text-sm">
                                        <label for="helper-checkbox"
                                            class="font-medium text-gray-300">
                                            {item.date}
                                        </label>
                                        <p id="helper-checkbox-text"
                                            class="text-xs font-normal text-gray-300">
                                            {item.topic}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link to="/congrats">
                            <input type="submit" value="Send" 
                            className='w-full mb-1 text-[18px] mt-2 text-black rounded bg-white py-1
                             hover:bg-gray-400 transition-colors duration-150' />
                        </Link>
                    </form>

                </div>
            </div>

        </div>

    )
}

export default Conference