import React from 'react';
import WI from './WeddingInvitations.json'

function WeddingInvitations() {
    return (
        <div className='container'>
            <div className='row'>
                {
                    WI.map(video =>
                        <div className='col-12 text-center'>
                            <iframe src={video.videoURL} className='wedding-invitation-video pb-3' allowFullScreen title='wedding invitation'></iframe>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default WeddingInvitations;