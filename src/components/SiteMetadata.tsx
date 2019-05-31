import { graphql, useStaticQuery } from 'gatsby';
import { SiteMetadataQuery } from '../graphql';

const useSiteMetadata = (): SiteMetadataQuery['site']['siteMetadata'] => {
    const { site } = useStaticQuery(
        graphql`
            query SiteMetadata {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `,
    );
    return site.siteMetadata;
};

export default useSiteMetadata;
