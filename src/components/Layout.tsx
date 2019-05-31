import React from 'react';
import Helmet from 'react-helmet';
import Footer from './Footer';
import Navbar from './Navbar';
import './all.scss';
import useSiteMetadata from './SiteMetadata';

const TemplateWrapper = ({ children }: JSX.ElementChildrenAttribute): JSX.Element => {
    const { title, description } = useSiteMetadata();
    return (
        <div className="leading-normal tracking-normal text-white gradient">
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />

                <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
                <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
                <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />

                <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
                <meta name="theme-color" content="#fff" />

                <meta property="og:type" content="business.business" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="/" />
                <meta property="og:image" content="/img/og-image.jpg" />
            </Helmet>
            <Navbar items={[{ target: '/', name: 'Home', active: true }, { target: '/contact', name: 'Contact', active: false }]} />
            {children}
            <Footer />
        </div>
    );
};

export default TemplateWrapper;