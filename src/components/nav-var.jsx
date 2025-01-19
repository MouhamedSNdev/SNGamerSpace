import logo from '../assets/sngs.png';
function NavBar() {
	return (
		<header>
			<nav>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width="50"
					height="50"
					viewBox="0 0 50 50"
				>
					<path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
				</svg>
				<img src={logo} alt="" />
                <ul>
                    <li>Aceuil</li>
                    <li>Tournois</li>
                    <li>News</li>
                    <li>Contact</li>
                </ul>
			</nav>
		</header>
	);
}

export default NavBar;
