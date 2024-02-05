import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default function Header() {

    return (
        <header className="header">

            <h1 className="header__site-name">
                <Link to="/">
                    <span className="header__site-name-main">Florie</span>
                    <span className="header__site-name-sub">Navzdory</span>
                </Link>
            </h1>

            <Navigation />

        </header>
    )

}