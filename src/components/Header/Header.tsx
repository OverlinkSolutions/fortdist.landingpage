import React from 'react';

import "./styles.css";
import Logo from "../../assets/logo_horizontal.png";
import MenuIcon from '../../assets/menu.svg';
import { useState, useEffect } from 'react';

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

function ItemDesktop(props: { direction: string, /* handleHeaderClick: (pos: number) => void */} ) {
	return (
		<div style={{ display: 'flex', flexDirection: props.direction as any }}>
			<span onClick={() => null} className="header-item-container">SEÇÃO</span>
			<span onClick={() => null} className="header-item-container">SEÇÃO</span>
			<span onClick={() => null} className="header-item-container">SEÇÃO</span>
			<span onClick={() => null} className="header-item-container">SEÇÃO</span>
			<span onClick={() => null} className="header-item-container">SEÇÃO</span>
		</div>
	);
}

interface HeaderProps {
	//handleHeaderClick: (pos: number) => void;
}

export default function Header(props: HeaderProps) {
	const { width } = useWindowDimensions();
	const [menuOpen, setMenuOpen] = useState(false);

	return (
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
					{width >= 992 && <ItemDesktop direction='row' /*handleHeaderClick={props.handleHeaderClick}*/ />}
				</div>
				{
					menuOpen && width < 992 && <ItemDesktop direction='column' /*handleHeaderClick={props.handleHeaderClick} */ />
				}
			</div>
		</div>
	);
}