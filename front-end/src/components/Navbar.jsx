import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    // Navitems to navigate to different routes
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
    ]


    

    return (
        <>

            <ul>
                <li>
                    {
                        navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                            >
                                {item.name}
                            </NavLink>
                        ))
                    }
                </li>
            </ul>

        </>
    )
}
