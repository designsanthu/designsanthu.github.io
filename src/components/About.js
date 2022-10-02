import React from 'react';
import santhuimg from '../images/santhuimg.jpg'
import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { GoMail } from 'react-icons/go'
function About(props) {
    return (
        <div>
            <div className='row m-0 p-0'>
                <div className='col-md-6 text-center p-5'>
                    <img src={santhuimg} className='myimage-about' alt='...' />
                </div>
                <div className='col-md-6 my-info p-5'>
                    <div className='m-auto' style={{ maxWidth: '330px' }}>
                        <h4 className='my-name mb-4'>Sandeep</h4>
                        <p>
                            Hello, I am a graphic designer. I design wedding invitations and album of weddings,
                            I will create social media posts such as CDP, Flyers, Logos, Banners.
                            I design eye-catching and creative posts.
                            If you have any work then discuss it with me.
                            I am available to solve your problem with my skills and experience.
                        </p>
                        <p className='text-muted mt-2'>
                            Feel free to get in touch with me.I am always open to discussing new projects,
                            creative ideas or opportunities to be a part of your vision.
                        </p>
                        <h6>My creative mind is my strongest weapon</h6>
                        <div className='contact-container d-flex justify-content-evenly'>
                            <a href="whatsapp:contact=917095216512@s.whatsapp.com" target='_blank'><FaWhatsapp className='contact-icon' /></a>
                            <a href="http://instagram.com/_u/design_santhu/" target='_blank'><AiOutlineInstagram className='contact-icon' /></a>
                            <a href='mailto:designsanthu@gmail.com' target='_blank'><GoMail className='contact-icon' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;