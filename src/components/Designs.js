import React, { useEffect, useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5'
import designs from './designs.json'

function Designs() {
    const [zoomImg, setImage] = useState("")
    return (
        <div className='container'>
            <div className="d-none d-sm-block">
                {
                    zoomImg !== "" &&
                    <div className='zoomImgContainer'>

                        <div className='zoomInImage d-flex flex-column'>
                            <span className='imgclosebtn mb-3' onClick={() => setImage("")} > <IoCloseCircleOutline /></span>
                            <img src={zoomImg} className="zoom-img rounded" />
                        </div>
                    </div>
                }
            </div>
            <div className="d-none d-sm-inline">
                <div className='row m-0 p-0'>
                    {
                        designs.map(img => <div className='card col-md-3 col-sm-6'>
                            <div className='text-center pt-2 pb-3'>
                                <img src={img.design_pic} alt='...' onClick={() => setImage(img.design_pic)} className='card-img rounded designs-image' />
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
            <div className="d-inline d-sm-none">
                <div className='row m-0 p-0'>
                    {
                        designs.map(img => <div className='card col-md-3 col-sm-6'>
                            <div className='text-center pt-2 pb-3'>
                                <img src={img.design_pic} alt='...' onClick={() => setImage("")} className='card-img rounded designs-image' />
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div >
    );
}

export default Designs;