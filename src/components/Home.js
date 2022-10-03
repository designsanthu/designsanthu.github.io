import React from 'react';
import albumPic1 from '../images/designs/1.jpg'
import albumPic2 from '../images/designs/2.jpg'
import albumPic3 from '../images/designs/3.jpg'
import albumPic4 from '../images/designs/4.jpg'
import albumPic5 from '../images/designs/5.jpg'
import albumPic6 from '../images/designs/6.jpg'

function Home() {
    const designPics = [
        {
            designPic1: "https://drive.google.com/uc?export=view&id=1eSaWok5x30RNAYdi1Fr7S7PQgiBcMhq_",
            designPic2: "https://drive.google.com/uc?export=view&id=1eG3suhmsP8JWcguiPW9h9F9DhatdpawE",
            designPic3: "https://drive.google.com/uc?export=view&id=1e76g7GwKRwCj3wSOn4v1YzjML7aCdQKP",
            designPic4: "https://drive.google.com/uc?export=view&id=1dnqGSZDuO0umBlRDSyaLV9rxcKqmXpzn",
            designPic5: "https://drive.google.com/uc?export=view&id=1ddwsHhqX8u8TLGZm_vFTDyVim9QunXKR",
            designPic6: "https://drive.google.com/uc?export=view&id=1eNnF2g-PZINTviHvcmGjF_JGLFALhOBL"
        }
    ]
    return (
        <div>
            <div className='d-none d-sm-block'>
                <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <img src={albumPic1} className="d-block w-100" alt="img" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={albumPic2} className="d-block w-100" alt="img" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={albumPic3} className="d-block w-100" alt="img" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={albumPic4} className="d-block w-100" alt="img" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={albumPic5} className="d-block w-100" alt="img" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={albumPic6} className="d-block w-100" alt="img" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            {/* small screens */}
            <div className='d-block d-sm-none'>
                <div id="carouselExampleControls1" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <img src={designPics[0].designPic1} className="d-block w-100" alt="img" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={designPics[0].designPic2} className="d-block w-100" alt="img" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={designPics[0].designPic3} className="d-block w-100" alt="img" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={designPics[0].designPic4} className="d-block w-100" alt="img" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={designPics[0].designPic5} className="d-block w-100" alt="img" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={designPics[0].designPic6} className="d-block w-100" alt="img" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;