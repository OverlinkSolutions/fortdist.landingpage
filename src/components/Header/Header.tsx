import React from 'react';

import "./styles.css";
import Logo from "../../assets/logo_horizontal.png";
import MenuIcon from '../../assets/menu.svg';
import { useState, useEffect } from 'react';
import whatsapp from '../../assets/whatsapp.png';

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height
	};
}

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

function ItemDesktop(props: { direction: string }) {

	return (
		<div style={{ display: 'flex', flexDirection: props.direction as any, position: 'relative' }}>
			<a style={{ textDecoration: 'none' }} href="https://api.whatsapp.com/send?phone=5579999683408&text=Olá, gostaria de alugar a fazenda!">
				<button
					style={{
						backgroundImage: 'linear-gradient(to right, #ffb347 0%, #ffcc33  51%, #ffb347  100%)',
						color: 'white',
						fontWeight: 'bold'
					}}
					className="btn">
					<img src={whatsapp} style={{ width: 25, marginRight: 8 }} />
					FALE CONOSCO
				</button>
			</a>
		</div>
	);
}

export default function Header() {
	const { width } = useWindowDimensions();
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<div className="header-container">
				<div className="container">
					<div style={{ display: "flex", justifyContent: 'space-between', padding: '16px 0px', }}>
						<div>
							<img src={Logo} height='33' alt="Fazenda Modelo Logo" />
						</div>
						{
							width < 992 &&
							<div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
								<img alt="Ícone de menu" src={MenuIcon} width={25} />
							</div>
						}
						{width >= 992 && <ItemDesktop direction='row' />}
					</div>
					{
						menuOpen && width < 992 && <ItemDesktop direction='column' />
					}
				</div>
			</div>
			<div style={{ width: '100%', height: 65 }}>
				{ /* Empty div to keep the content from being covered by the header */}
			</div>
		</>
	);
}