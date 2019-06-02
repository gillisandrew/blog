import React from 'react';
import { Link } from 'gatsby';
import Logo from '../elements/Logo';

interface NavbarProps {
    items: {
        name: string;
        target: string;
        active: boolean;
    }[];
}

interface NavbarState {
    isOpen: boolean;
    navBarActiveClass: string;
    scrollPositionY: number;
}
const debounce = (func, wait): Function => {
    let timeout;
    return (...args): void => {
        clearTimeout(timeout);
        timeout = setTimeout((): void => func.apply(this, args), wait);
    };
};

class Navbar extends React.Component<NavbarProps, NavbarState> {
    public constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            navBarActiveClass: '',
            scrollPositionY: 0,
        };
    }
    public componentDidMount(): void {
        // 32 is the number of milliseconds to debounce
        // I picked this because it's approx 1 frame (ie: 16.7ms)
        // You'll want to modulate that to your taste.
        // Add console.logs in handleScroll function to check if its flooding.
        this.setState({ scrollPositionY: +window.scrollY });
        window.addEventListener('scroll', debounce(this.handleScroll, 16));
    }
    public componentWillUnmount(): void {
        return window.removeEventListener('scroll', debounce(this.handleScroll, 16));
    }

    private handleScroll = (): void => {
        // + is unary operator, same as Number(window.scrollY)
        const scrollPositionY = +window.scrollY;
        return this.setState({ scrollPositionY });
    };
    private handleToggle = (): void => {
        const isOpen = !this.state.isOpen;
        return this.setState({ isOpen });
    };

    public render(): JSX.Element {
        const { items } = this.props;
        const isScrolling = !!this.state.scrollPositionY;
        const { isOpen } = this.state;
        return (
            <nav
                className={['nav-bar', isScrolling ? 'nav-bar--scrolling' : '', isOpen ? 'nav-bar--toggled' : ''].join(
                    ' ',
                )}
                role="navigation"
                aria-label="main-navigation"
                id="header"
            >
                <div className={`nav-inner container`}>
                    <div className="nav-brand">
                        <Link to="/" title="Logo">
                            <Logo light={!isScrolling} className="h-10 mb-2 fill-current inline" />
                            <h1>
                                <span>hey</span>
                                <strong>andrew</strong>
                            </h1>
                        </Link>
                    </div>
                    <div className="nav-toggle">
                        <button onClick={this.handleToggle}>
                            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div id="nav-content" className="nav-content">
                        <ul>
                            {items.map(
                                ({ target, name, active }, index): JSX.Element => (
                                    <li key={index} className={active ? 'active' : ''}>
                                        <Link to={target}>{name}</Link>
                                    </li>
                                ),
                            )}
                        </ul>
                        <button id="navAction">Contact</button>
                    </div>
                </div>
                <hr className="border-b border-alpha-10 opacity-50 my-0 py-0" />
            </nav>
        );
    }
}

export default Navbar;
