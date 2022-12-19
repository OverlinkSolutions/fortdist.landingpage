import React, { useEffect, useState } from 'react';

import banner1 from '../../assets/banner1.png';
import banner1Mobile from '../../assets/banner1-mobile.png';
import { getWindowDimensions, isMobile } from '../../utils/dimensions';

import "./styles.css";

export default function FrontBanner() {

	function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

const isMobile = useWindowDimensions().width < 500;

	return (
		<div id="carouselSlideOnly" className='carousel slide' data-bs-ride="carousel">
			<div className="carousel-inner">
				<div className='carousel-item active'>
					<img className='d-block w-100' src={isMobile ? banner1Mobile : banner1 } alt="Banner um" />
				</div>
				<div className='carousel-item'>
					<img className='d-block w-100' src={banner1} alt="First Slide" />
				</div>
			</div>
		</div>
	);
}
