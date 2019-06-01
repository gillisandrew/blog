import React from 'react';
interface LogoProps {
    className?: string;
    light?: boolean;
}
export const Logo = ({ light, className }: LogoProps): JSX.Element => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className + ' logo'} viewBox="0 0 500 458.43">
            <title>heyandrew</title>
            <path
                d="M464.43,256c0-126.6-102.62-229.21-229.21-229.21a229.18,229.18,0,0,0-66.92,9.94c100.48,13.64,178.44,99.1,180.34,202.82,0,131.94,81.58,197.29,138.23,226.76,11.31,5.88,23.41-6.29,17.67-17.67C470.54,381.32,464.43,256,464.43,256Z"
                transform="translate(-6 -26.79)"
                className={'logo-fill-1'}
            />
            <path
                d="M120.61,256a114.61,114.61,0,0,1,209.83-63.77c-22.39-83.22-98-144.82-188-145.9a229.26,229.26,0,0,0-90,348.06C90.4,362,120.61,295,120.61,256Z"
                transform="translate(-6 -26.79)"
                className={'logo-fill-2'}
            />

            <path
                d="M235.21,370.61a114.65,114.65,0,0,1-108-76.29A208.89,208.89,0,0,1,59.67,403.37a229.22,229.22,0,0,0,325.7,25.82c-25.21-26.18-46.67-61.27-55.91-108A114.49,114.49,0,0,1,235.21,370.61Z"
                transform="translate(-6 -26.79)"
                className={'logo-fill-3'}
            />
        </svg>
    );
};

export default Logo;
