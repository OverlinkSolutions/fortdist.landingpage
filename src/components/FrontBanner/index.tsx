import { useEffect, useState } from 'react';

import banner1 from '../../assets/banner1.png';
import banner1Mobile from '../../assets/banner1-mobile.png';
import { getWindowDimensions } from '../../utils/dimensions';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

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
		// <Carousel infiniteLoop swipeable showThumbs={false} autoPlay interval={5000} showStatus={false}>
			
			<div>
				<img className='d-block w-100' src={isMobile ? banner1Mobile : banner1} alt="Banner um" />
			</div>
			
		// </Carousel>
	);
}
