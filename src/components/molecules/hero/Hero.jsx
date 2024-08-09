import './Hero.scss';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return (
        <section id="hero">
            <div className="hero_container">
                <h1 className="hero_container-title">Welcome to <span>Little Lemon</span></h1>
                <h2>Fusce a diam ex. Curabitur ac tellus metus. In erat diam.</h2>
                <div className="hero_container-buttons">
                    <a href="#Menu">OUR MENU</a>
                    <a href="/reservations">BOOK A TABLE</a>
                </div>
            </div>
        </section>
    )
}