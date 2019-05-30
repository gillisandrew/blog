import React from 'react';
import { ReactNodeLike } from 'prop-types';

export const HTMLContent = ({ content, className }: P): JSX.Element => (
    <div className={className} dangerouslySetInnerHTML={{ __html: content.toString() }} />
);

const Content = ({ content, className }: P): JSX.Element => <div className={className}>{content}</div>;

interface P {
    content: ReactNodeLike;
    className?: string;
}

export default Content;
