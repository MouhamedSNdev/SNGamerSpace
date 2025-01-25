import styles from"../styles/card.module.css"

function CardTournament() {

    return (
        <article className={styles.card}>
            <div className={styles.card__image}></div>
            <p className={styles.card__info}>Name</p>
            <p className={styles.card__info}>Date and time</p>
            <button className={styles.card__button}>Participer</button>
        </article>
    )
}

function Tournament() {
    return (
        <section className={styles.tournament}>
            <h2>Tournament Call of Duty Mobile</h2>
            <div className={styles.card__container}>
                <CardTournament />
                <CardTournament />
                <CardTournament />
                <CardTournament />
            </div>
        </section>
    )
}

export default Tournament; 