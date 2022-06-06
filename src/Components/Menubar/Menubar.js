import React from 'react';
import './Menubar.css'

const Menubar = () => {
    return (
        <div>
            <div className='container m-3 p-3'>
                <div className='row'>
                    <div className='col col md-5'>
                        <h2>Random Meal Cart</h2>
                    </div>
                    <div className='col col-md-7 menu-container d-flex justify-content-end'>
                        <li className='menu me-5'>Home</li>
                        <li className='menu me-5'>Contact</li>
                        <li className='menu me-5'>Link</li>
                    </div>

                </div>
            </div >
        </div >
    );
};

export default Menubar;