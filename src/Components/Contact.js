'use client'
import React, { useState } from 'react'
import './Contact.css'
const Contact = () => {
    const [fullname, setFullname] = useState("");

    const [email, setEmail] = useState("");

    const [message, setMessage] = useState("");

    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('api/contact', {
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify({
                fullname,
                email,
                message
            })
        })
        const { msg, success } = await res.json()
        setError(msg)
        setSuccess(success)

        if (success) {
            setFullname("");
            setEmail("");
            setMessage("");
        }

    }


    return (
        <div className='contact'>
            <div id='contact' className='cLeft'>
                <div className='cLeftCenter'>
                
                    <div className='ctop'>
                        <h1 data-aos="fade-up"
                        >Contact</h1>
                        <p data-aos="zoom-in">
                            Hey there! Got a project in mind or just want to chat about the latest design trends? Drop me a message! I promise I won't bite—unless you’re a cookie. 🍪 Let's create something amazing together!         </p>
                    </div>
                    <div className='cBottom'>
                        <div className='phone'>
                            <h1>Phone</h1>
                            <p>+91 9340080705</p>
                        </div>
                        <div className='email'>
                            <h1>Email</h1>
                            <p>tanvi221304@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cRight'>
                <div className='cRightCenter'>
                    <div className='contactform'>
                        <h1> Contact Form</h1>
                    </div>
                    <div className='formdiv'>
                        <form onSubmit={handleSubmit} className='formg'>
                            <div className='formGroup'>
                                <label htmlFor='fullname'>Full Name</label>
                                <input onChange={(e) => setFullname(e.target.value)}
                                    value={fullname} type='text' id='fullname' />
                            </div>
                            <div className='formGroup'>
                                <label htmlFor='email'>Email</label>
                                <input onChange={(e) => setEmail(e.target.value)}
                                    value={email} type='email' id='email' />
                            </div>
                            <div className='formGroup'>
                                <label htmlFor='message'>Message</label>
                                <textarea onChange={(e) => setMessage(e.target.value)}
                                    value={message} id='message' ></textarea>
                            </div>
                            <div className='senddiv'>

                                <button className='sendbtn' type='submit'>Send</button>
                            </div>
                            <div className='errordiv'>
                                {error &&
                                    error.map((e) => (
                                        <div
                                            className={`${success ? "text-green-800" : "text-red-600"
                                                } px-5 py-2`}
                                        >
                                            {e}
                                        </div>
                                    ))}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
