import pugb from "../assets/images/pugb.webp"
import codm from "../assets/images/codm.webp"
import freefire from "../assets/images/freefire.webp"
import efootball from "../assets/images/efootball.webp"
import '../styles/hero.css'

function Hero() {
	return (
		<section>
			<h1>Bienvenue sur SNGamerSpace </h1>
			<p>
				Participez à des tournois, connectez-vous avec d'autres gamers et restez informé des dernières actualités du gaming.
			</p>
            <div className="supportGame" >
                <img src={pugb} alt="Une image de Pubg mobile sengal" loading="lazy" /> 
                <img src={freefire} alt="Une imgae de FreeFire Mobie Senegal" loading="lazy" />
                <img src={efootball} alt="Une image de EfootBall Mobile Senegal" loading="lazy" />
				<img src={codm} alt="Une image de Call of dudy Mobile Sengal" loading="lazy" />
            </div>
            <button>Explorer</button>
		</section>
	);
}

export default Hero;
