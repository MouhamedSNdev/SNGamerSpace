import { useState } from 'react';
import { useRef } from 'react';
import BarOpen from '../assets/icons/barOpen.jsx';
import BarClose from '../assets/icons/barClose.jsx';
import Logo from '../assets/icons/logo.jsx';
import UserIcon from '../assets/icons/userIcon.jsx';
import styles from '../styles/navBar.module.css'

function NavBar() {

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef(null);

	function showMenu() {
        setIsMenuOpen(true)
        menuRef.current.classList.add(styles.header__navigation__menu__visible);
        
	}

	function closeMenu() {
		setIsMenuOpen(false)
		menuRef.current.classList.remove(styles.header__navigation__menu__visible);
	}

	return (
		<header className={styles.header}>
			<nav className={styles.header__navigation}>
				{ isMenuOpen ? <BarClose closeMenu={closeMenu} /> : <BarOpen showMenu={showMenu} /> }
				<Logo styles={styles.logo} />
				<UserIcon />
				<ul className={styles.header__navigation__menu} ref={menuRef}>
					<li>Aceuil</li>
					<li>Tournois</li>
					<li>News</li>
					<li>Boutique</li>
					<li>À propos</li>
					<li>Contact</li>
					<li className={styles.header__navigation__menu__registrations}>
						<button className={`${styles.header__navigation__menu__registrations__button} ${styles.header__navigation__menu__registrations__buttonLogin}`}>Connecter</button>
						<button className={styles.header__navigation__menu__registrations__button}>S'inscrire</button>
					</li>
				</ul>
				
			</nav>
		</header>
	);
}

export default NavBar;
