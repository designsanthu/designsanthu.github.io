import axios from 'axios';
import React, { useEffect } from 'react';
import pic1 from '../images/designs/1.jpg'
import pic2 from '../images/designs/2.jpg'
import pic3 from '../images/designs/3.jpg'
import pic4 from '../images/designs/4.jpg'
import pic5 from '../images/designs/5.jpg'
import pic6 from '../images/designs/6.jpg'
// import pic7 from '../images/designs/7.jpeg'
function Home() {
    useEffect(() => {
        fetch('https://graph.instagram.com/design_santhu?fields=id,username,media&access_token=IGQVJVQWpiQlZA0bE8tSmU5N25HX3lLbzB4aTl3N2ltMzR6RmE3RVFQX2M2UkRkYnNNcmI3SHJnRzRJLUlhRjltb01XckxkLTRXTVRvNldFaTA1d3d4N29sT2EwVTBOOHdzcUdWLTlNbWc0Y0IyY1pobwZDZD')
            .then(res => console.log(res))
    }, [])
    return (
        <div>
            <div className=''>
                <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <img src={pic1} className="d-block w-100" alt="img" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={pic2} className="d-block w-100" alt="img" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={pic3} className="d-block w-100" alt="img" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={pic4} className="d-block w-100" alt="img" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={pic5} className="d-block w-100" alt="img" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={pic6} className="d-block w-100" alt="img" />
                        </div>
                        {/* <div className="carousel-item" data-bs-interval="2000">
                            <img src={pic7} className="d-block w-100" alt="img" />
                        </div> */}
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
        </div>
    );
}

export default Home;