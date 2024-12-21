import React from 'react';
import { Search } from 'lucide-react';
import "../css/Header.css";

const Header = () => {
  return (
    <div >
        <header className='header'>
            silar
            <div className="heading_names">
                <h1 className='heading1'> International Conference on Transportation & Development </h1>
                <p>In partnership with the Arizona Department of Transportation</p>
            </div>
            <div className='extraphoto'>
                <img src='https://cdn.asce.org/asce-conferences/asce-ictd.org/s3fs-public/site-images/ictd-2025-banner.png'
                alt=""
                className='extraphoto' />
            </div>
        </header>
    </div>
  )
};

export default Header;