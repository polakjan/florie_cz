export default function Homepage() {

    return (
        <div className="page page--homepage homepage">

            <h1 className="page__headline">Florie: <span className="em">Navzdory</span></h1>

            <div className="main__section homepage__welcome" style={ { textAlign: 'center', padding: '3em 1.5em' } }>

                <p className="em" style={ { fontSize: '1.25em' } }>
                    Slyšte, slyšte!
                </p>

                <p style={ { fontSize: '1.25em' } }>
                    Na vědomost se dává, že Florie bude!
                </p>

                <p style={ { fontSize: '1.25em', fontWeight: 700 } }>
                    21.8. - 25.8. 2024
                </p>

                <p>
                    Očekávejte přesnější informace už příští týden.
                </p>

                <div className="homepage__section-seal">
                    <img src="/img/florie-seal.png" alt="pečeť Florie" />
                </div>

            </div>

        </div>
    )

}