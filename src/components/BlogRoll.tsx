import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import Img from 'gatsby-image';
interface P {
    data: {
        allMarkdownRemark: {
            edges: any[];
        };
    };
}
class BlogRoll extends React.Component<P> {
    public render(): React.ReactNode {
        const { data } = this.props;
        const { edges: posts } = data.allMarkdownRemark;

        return (
            <>
                {posts &&
                    posts.map(
                        ({ node: post }): JSX.Element => (
                            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink" key={post.id}>
                                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                                    <Link
                                        to={post.fields.slug}
                                        className="flex flex-wrap no-underline hover:no-underline"
                                    >
                                        { !!post.frontmatter.featuredimage ? (
                                            <Img className="image w-full" alt={post.frontmatter.title} fluid={{...post.frontmatter.featuredimage.childImageSharp.fluid, aspectRatio: 16/9}} />

                                        ) : (
                                            <div
                                                className="w-full gradient  aspect-ratio-16/9 relative clearfix"
                                            >
                                                <div className="absolute top-1/2 left-1/2 px-8 py-4 uppercase w-full text-center text-alpha-40 text-bold tracking-widest" style={{transform: 'translate(-50%, -50%)'}}>
                                                    {post.frontmatter.title}
                                                </div>
                                            </div>
                                        )}
                                        <p className="w-full text-gray-600 text-xs md:text-sm px-6 uppercase py-3">
                                            {post.frontmatter.date}
                                        </p>
                                        <h3 className="w-full font-bold text-xl text-gray-800 px-6 mb-4">
                                            {post.frontmatter.title}
                                        </h3>
                                        <p className="text-gray-800 text-base px-6 mb-5">{post.excerpt}</p>
                                    </Link>
                                </div>
                                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                                    <div className="text-gray-600 uppercase text-xs">
                                        {post.frontmatter.tags.map((tag, index, tags) => (
                                            <>
                                                <span key={index}>{tag}</span>
                                                {tags.length - 1 > index ? ', ' : ''}
                                            </>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-start">
                                        <Link
                                            className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
                                            to={post.fields.slug}
                                        >
                                            Keep Reading →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ),
                    )}
            </>
        );
    }
}

const BlogRollWithQuery = (): JSX.Element => (
    <StaticQuery
        query={graphql`
            query BlogRollQuery {
                allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] }
                    filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
                ) {
                    edges {
                        node {
                            excerpt(pruneLength: 400)
                            id
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                templateKey
                                date(formatString: "MMMM DD, YYYY")
                                featuredpost
                                tags
                                featuredimage {
                                    absolutePath
                                    childImageSharp {
                                        fluid(
                                            maxWidth: 384
                                            cropFocus: ENTROPY
                                            duotone: { shadow: "#134e5e", highlight: "#71b280", opacity: 80 }
                                            toFormat: PNG
                                            quality: 100
                                        ) {
                                            ...GatsbyImageSharpFluid_withWebp
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={(data): React.ReactNode => <BlogRoll data={data} />}
    />
);
export default BlogRollWithQuery;
