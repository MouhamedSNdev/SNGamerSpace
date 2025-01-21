import BarOpen from '../assets/barOpen.jsx';
import Logo from '../assets/logo.jsx';
import UserIcon from '../assets/userIcon.jsx';

function NavBar() {
    const bar = document.querySelector('ul');
	function showMenu() {
		bar.classList.toggle('barOpen');
	}

    const root = document.getElementById("root");
    if (bar.classList.contains("barOpen")) {
        root.addEventListener("click", (even) => {
            if(even.target != bar) {
            bar.classList.remove("barOpen") }
        })
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
				</ul>
				<nav className="signupAndLogin">
					<button className="login">Connecter</button>
					<button className="signup">{"S'inscrir"}</button>
				</nav>
			</nav>
		</header>
	);
}

export default NavBar;
