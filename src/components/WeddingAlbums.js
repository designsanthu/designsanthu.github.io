import React, { useEffect, useState } from 'react';
import pic1 from '../images/designs/1.jpg'
import pic2 from '../images/designs/2.jpg'
import pic3 from '../images/designs/3.jpg'
import pic4 from '../images/designs/4.jpg'
import pic5 from '../images/designs/5.jpg'
import pic6 from '../images/designs/6.jpg'
import { IoCloseCircleOutline } from 'react-icons/io5'

function WeddingAlbums() {

    const [zoomImg, setImage] = useState("")

    const imgGallery = [
        {
            url: pic1
        },
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

export default WeddingAlbums;