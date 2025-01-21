import { useState } from 'react';
import BarOpen from '../assets/barOpen.jsx';
import BarClose from '../assets/barClose.jsx';
import Logo from '../assets/logo.jsx';
import UserIcon from '../assets/userIcon.jsx';

function NavBar() {

	const [menuOpen, setMenuOpen] = useState(false);

	function showMenu() {
		setMenuOpen(true)
		const bar = document.querySelector('.navigation ul')
		bar.classList.add('showMenu');
	}

	function closeMenu() {
		setMenuOpen(false)
		const bar = document.querySelector('.navigation ul')
		bar.classList.remove('showMenu');
	}

	return (
		<header>
			<nav className="navigation">
				{menuOpen ? <BarClose closeMenu={closeMenu} /> : <BarOpen showMenu={showMenu} /> }
				<Logo />
				<UserIcon />
				<ul>
					<li>Aceuil</li>
					<li>Tournois</li>
					<li>News</li>
					<li>Boutique</li>
					<li>À propos</li>
					<li>Contact</li>
					<li className='registrations'>
						<button className='login'>Connecter</button>
						<button className='register'>S'inscrire</button>
					</li>
				</ul>
				
			</nav>
		</header>
	);
}

export default NavBar;
