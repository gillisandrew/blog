import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.svg';

interface P {
    items: {
        name: string;
        target: string;
    }[];
}

interface S {
    active: boolean;
    navBarActiveClass: string;
}

class Navbar extends React.Component<P, S> {
    public constructor(props) {
        super(props);
        this.state = {
            active: false,
            navBarActiveClass: '',
        };
    }

    private toggleHamburger(): void {
        // toggle the active boolean in the state
        this.setState(
            {
                active: !this.state.active,
            },
            // after state has been updated,
            (): void => {
                // set the class in state for the navbar accordingly
                if (this.state.active) {
                    this.setState({
                        navBarActiveClass: 'is-active',
                    });
                } else {
                    this.setState({
                        navBarActiveClass: '',
                    });
                }
            },
        );
    }

    public render(): JSX.Element {
        const { items } = this.props;
        return (
            <nav
                className="fixed w-full z-30 top-0 text-white"
                role="navigation"
                aria-label="main-navigation"
                id="header"
            >
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                    <div className="pl-4 flex items-center">
                        <Link
                            to="/"
                            className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl text-white"
                            title="Logo"
                        >
                            <img src={logo} alt="Andrew Gillis" style={{ width: '88px' }} />
                        </Link>
                    </div>
                    <div className="block lg:hidden pr-4">
                        <button className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
                            <svg
                                className="h-8 fill-current inline"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div
                        id="nav-content"
                        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20 bg-gray-100"
                    >
                        <ul className="list-reset lg:flex justify-end flex-1 items-center">
                            {items.map(
                                (item, index): JSX.Element => (
                                    <li key={index} className="mr-3">
                                        <Link
                                            to={item.target}
                                            className="inline-block py-2 px-4 text-black font-bold no-underline"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ),
                            )}
                        </ul>
                        <button
                            id="navAction"
                            className="mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 bg-white text-gray-800"
                        >
                            Contact
                        </button>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
