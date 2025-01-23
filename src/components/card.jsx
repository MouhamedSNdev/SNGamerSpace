import "../styles/card.css"



function Tournament() {
    return (
        <section className="tournament">
            <h2>Tournois Call Of Duty Mobile
            </h2>
            <div>
                <CardTournament />
                <CardTournament />
                <CardTournament />
                <CardTournament />
                <CardTournament />
                <CardTournament />
                <CardTournament />
                <CardTournament />
                <CardTournament />
            </div>
        </section >
    )
}




function CardTournament() {
    return (
        <article className="card">
            <div></div>
            <p className="info">Name</p>
            <p className="info">Date and time</p>
            <button>Participer</button>
        </article>
    )
}

export default Tournament;