import React from 'react';
import Img from 'gatsby-image';

const PreviewCompatibleImage: React.FunctionComponent<PreviewCompatibleImageProps> = ({
    alt = '',
    childImageSharp = null,
    image = null,
}: PreviewCompatibleImageProps): JSX.Element => {
    if (!!image && !!image.childImageSharp) {
        return (
            <Img className="image w-full h" fluid={{ ...image.childImageSharp.fluid, aspectRatio: 4 / 1 }} alt={alt} />
        );
    }
    if (!!childImageSharp) {
        return <Img fluid={{ ...childImageSharp.fluid, aspectRatio: 1 }} alt={alt} />;
    }
    if (!!image && typeof image === 'string') {
        return <img src={image} alt={alt} />;
    }
    return <span>Nada</span>;
};

interface PreviewCompatibleImageProps {
    alt?: string;
    childImageSharp?: any;
    image?: any;
    className: string;
}

export default PreviewCompatibleImage;
