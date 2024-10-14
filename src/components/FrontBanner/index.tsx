import { useEffect, useState } from 'react';

import banner1 from '../../assets/banner1.png';
import { getWindowDimensions } from '../../utils/dimensions';

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
			<div>
				<img className='d-block w-100' src={banner1} alt="Banner um" />
			</div>
	);
}
