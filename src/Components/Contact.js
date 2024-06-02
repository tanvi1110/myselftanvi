import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <div className='contact'>
            <div className='cLeft'>
                <div className='cLeftCenter'>
                    <div className='ctop'>
                        <h1>Contact</h1>
                        <p>
                            Hey there! Got a project in mind or just want to chat about the latest design trends? Drop me a message! I promise I won't bite—unless you’re a cookie. 🍪 Let's create something amazing together!         </p>
                    </div>
                    <div className='cBottom'>
                        <div className='phone'>
                            <h1>Phone</h1>
                            <p>+91 1234567890</p>
                        </div>
                        <div className='email'>
                            <h1>Email</h1>
                            <p>tanvi221110@gmail.com</p>
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
                        <form className='formg'>
                            <div className='formGroup'>
                                <label htmlFor='fullname'>Full Name</label>
                                <input type='text' id='fullname'  />
                            </div>
                            <div className='formGroup'>
                                <label htmlFor='email'>Email</label>
                                <input type='email' id='email'  />
                            </div>
                            <div className='formGroup'>
                                <label htmlFor='message'>Message</label>
                                <textarea id='message' ></textarea>
                            </div>
                            <div className='senddiv'>

                            <button className='sendbtn' type='submit'>Send</button>
                            </div>
                            <div className='errordiv'>
                                <div className='error'>Error message</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
