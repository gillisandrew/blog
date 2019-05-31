import React, { SFCElement, JSXElementConstructor } from 'react';
import PropTypes, { ReactNodeLike } from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent, CustomContent } from '../components/Content';
import { BlogPostByIdQuery } from '../graphql';

export const BlogPostTemplate = ({ content, contentComponent, description, tags, title, helmet }: P): JSX.Element => {
    const PostContent = contentComponent || Content;

    return (
        <>
            {helmet || null}
            <div className="container mx-auto pt-24 md:px0 px-24">
                <div className="bg-white text-gray-800 p-4 rounded shadow">
                        <h1 className="text-2xl font-bold uppercase">{title}</h1>
                        <p className="">{description}</p>
                        <PostContent content={content} />
                        {tags && tags.length ? (
                            <div style={{ marginTop: `4rem` }}>
                                <h4>Tags</h4>
                                <ul className="taglist">
                                    {tags.map(
                                        (tag): JSX.Element => (
                                            <li key={tag + `tag`}>
                                                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>
                        ) : null}
                        </div>
            </div>
        </>
    );
};

interface P {
    content: CustomContent['content'];
    contentComponent?: JSXElementConstructor<CustomContent>;
    description?: string;
    title?: string;
    helmet?: object;
    tags: string[];
}

interface BlogPostProps {
    data: BlogPostByIdQuery;
}
const BlogPost = ({ data }: BlogPostProps): JSX.Element => {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <BlogPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                helmet={
                    <Helmet titleTemplate="%s | Blog">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta name="description" content={`${post.frontmatter.description}`} />
                    </Helmet>
                }
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
            />
        </Layout>
    );
};

BlogPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
};

export default BlogPost;

export const pageQuery = graphql`
    query BlogPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                tags
            }
        }
    }
`;
