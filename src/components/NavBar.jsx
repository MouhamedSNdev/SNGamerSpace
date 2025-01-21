import BarOpen from '../assets/barOpen.jsx';
import Logo from '../assets/logo.jsx';
import UserIcon from '../assets/userIcon.jsx';

function NavBar() {
    
	function showMenu() {
		const bar = document.querySelector('.navigation ul')
		bar.classList.toggle('showMenu');
	}

	return (
		<header>
			<nav className="navigation">
				<BarOpen showMenu={showMenu} />
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
