import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.svg';

interface NavbarProps {
    items: {
        name: string;
        target: string;
        active: boolean;
    }[];
}

interface NavbarState {
    active: boolean;
    navBarActiveClass: string;
    scrollPositionY: number;
}
const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

class Navbar extends React.Component<NavbarProps, NavbarState> {
    public constructor(props) {
        super(props);
        this.state = {
            active: false,
            navBarActiveClass: '',
            scrollPositionY: 0,
        };
    }
    private componentDidMount(): void {
        // 32 is the number of milliseconds to debounce
        // I picked this because it's approx 1 frame (ie: 16.7ms)
        // You'll want to modulate that to your taste.
        // Add console.logs in handleScroll function to check if its flooding.
        window.addEventListener('scroll', debounce(this.handleScroll, 16));
    }
    private componentWillUnmount(): void {
        return window.removeEventListener('scroll', debounce(this.handleScroll, 16));
    }

    private handleScroll = (): void => {
        // + is unary operator, same as Number(window.scrollY)
        const scrollPositionY = +window.scrollY;
        return this.setState({ scrollPositionY });
    };

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
        const isScrolling = !!this.state.scrollPositionY;
        return (
            <nav
                className={`fixed w-full z-30 top-0 overflow-hidden text-white${isScrolling ? ' bg-white shadow' : ''}`}
                role="navigation"
                aria-label="main-navigation"
                id="header"
                style={{
                    transition: '.1s linear all',
                }}
            >
                <div
                    className={`w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2`}
                >
                    <div className="pl-4 flex items-center">
                        <Link
                            to="/"
                            className={`toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl mt-1 lg:mt-0 ${
                                isScrolling ? ' text-gray-700' : ' text-white'
                            }`}
                            title="Logo"
                        >
                            <svg
                                className="h-10 mb-2 fill-current inline"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 420"
                            >
                                <g>
                                    <path
                                        d="M406,202.4c0-110.5-89.5-200-200-200S6,91.9,6,202.4s89.5,200,200,200c51.8,0,98.9-19.7,134.4-51.9
                                        c-20.9-21.7-38.6-54.2-45.3-102.7c-16.5,32.4-50.2,54.6-89.1,54.6c-55.2,0-100-44.8-100-100c0-55.2,44.8-100,100-100
                                        s100,44.8,100,100c0,108.1,58.4,162.2,112,189.1c45.7,22.9,88,26.2,88,26.2S406,328.8,406,202.4z"
                                    />
                                </g>
                            </svg>
                            <h1 className="inline-block ml-4 uppercase">heyandrew</h1>
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
                                ({ target, name, active }, index): JSX.Element => (
                                    <li key={index} className="mr-3">
                                        <Link
                                            to={target}
                                            className={`inline-block py-2 px-4 text-black${
                                                active ? ' font-bold' : ''
                                            } no-underline`}
                                        >
                                            {name}
                                        </Link>
                                    </li>
                                ),
                            )}
                        </ul>
                        <button
                            id="navAction"
                            className={`mx-auto xlg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 lg:mr-4 shadow opacity-75 bg-white${
                                isScrolling ? ' gradient text-white' : ' text-gray-800'
                            }`}
                        >
                            Contact
                        </button>
                    </div>
                </div>
                <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
            </nav>
        );
    }
}

export default Navbar;
