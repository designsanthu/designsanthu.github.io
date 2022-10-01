import React, { useEffect, useState } from 'react';
import axios from 'axios'
import pic2 from '../images/homeCarosel/2.jpg'
import pic3 from '../images/homeCarosel/3.jpg'
import pic4 from '../images/homeCarosel/4.jpg'
import pic5 from '../images/homeCarosel/5.jpg'
import pic6 from '../images/homeCarosel/6.jpg'
import pic7 from '../images/homeCarosel/7.jpg'
import { IoCloseCircleOutline } from 'react-icons/io5'

function Designs() {

    const [zoomImg, setImage] = useState("")

    const imgGallery = [
        {
            url: pic2
        },
        {
            url: pic3
        },
        {
            url: pic4
        },
        {
            url: pic5
        },
        {
            url: pic6
        },
        {
            url: pic7
        }
    ]



    return (
        <div>

            {
                zoomImg !== "" &&
                <div className='zoomImgContainer'>
                    <div className='zoomInImage'>
                        <span className='imgclosebtn' onClick={() => setImage("")} > <IoCloseCircleOutline /></span>
                        <img src={zoomImg} className="w-75" />
                    </div>
                </div>
            }

            {
                imgGallery.map(img =>
                    <img src={img.url} className="w-50" onClick={() => setImage(img.url)} />)
            }
        </div >
    );
}

export default Designs;