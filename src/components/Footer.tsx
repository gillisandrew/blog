import React from 'react';
import { Link } from 'gatsby';
import Logo from '../elements/Logo';

class Footer extends React.Component {
    public render(): JSX.Element {
        return (
            <footer className="bg-white">
                <div className="container mx-auto px-8 pin-b">
                    <div className="w-full flex flex-col md:flex-row py-6">
                        <div className="flex-1 mb-6 text-gray-400 md:p-2">
                            <Link to="/" title="Logo" className="flex justify-center items-center">
                                <Logo className="w-10" />
                                <h1 className="text-black uppercase ml-2">
                                    <span>hey</span>
                                    <strong>andrew</strong>
                                    <span className="">.dev</span>
                                </h1>
                            </Link>
                            <div className="mt-2 text-center">
                                &copy;&nbsp;{new Date().getFullYear()} | Andrew Gillis
                            </div>
                        </div>

                        <div className="flex-1">
                            <p className="uppercase text-gray-500 md:mb-6">Links</p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a
                                        href="#"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                    >
                                        FAQ
                                    </a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a
                                        href="#"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                    >
                                        Help
                                    </a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a
                                        href="#"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                    >
                                        Support
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <p className="uppercase text-gray-500 md:mb-6">Legal</p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a
                                        href="#"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                    >
                                        Terms
                                    </a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a
                                        href="#"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                    >
                                        Privacy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <p className="uppercase text-gray-500 md:mb-6">Social</p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a
                                        href="#"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                    >
                                        Facebook
                                    </a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a
                                        href="#"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                    >
                                        Linkedin
                                    </a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a
                                        href="#"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                    >
                                        Twitter
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <p className="uppercase text-gray-500 md:mb-6">Company</p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a
                                        href="#"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                    >
                                        Official Blog
                                    </a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a
                                        href="#"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a
                                        href="#"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
