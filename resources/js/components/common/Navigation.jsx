import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {

    const [open, setOpen] = useState(false);

    const location = useLocation();

    const items = [
        { to: "/", name: "Úvod" },
        { to: "/pribeh", name: "Příběh" },
        { to: "/prakticke", name: "Praktické" },
        { to: "/registrace", name: "Registrace" },
    ]

    const toggleOpen = ev => {
        ev.preventDefault();

        setOpen(!open);
    }

    return (
        <nav className={ `header__navigation navigation` + (open ? ' navigation--open' : '') }>

            <div className="navigation__items">
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
            </div>

            <div className="navigation__burger" onClick={ toggleOpen }>
                <div className="navigation__burger-lines">
                    <div><div>/</div></div>
                    <div><div>/</div></div>
                    <div><div>/</div></div>
                </div>
            </div>

        </nav>
    )

}