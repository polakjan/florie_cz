import { Link, useLocation } from "react-router-dom";

export default function Navigation() {

    const location = useLocation();

    const items = [
        { to: "/", name: "Úvod" },
        { to: "/pribeh", name: "Příběh" },
        { to: "/prakticke", name: "Praktické" },
        { to: "/registrace", name: "Registrace" },
    ]

    return (
        <nav className="header__navigation navigation">

            {
                items.map(item => (
                    <Link
                        key={ item.to }
                        className={ `navigation__item` + (item.to === location.pathname ? ' navigation__item--active' : '') }
                        to={ item.to }
                    >
                        { item.name }
                    </Link>
                ))
            }

        </nav>
    )

}