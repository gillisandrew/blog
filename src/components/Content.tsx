import React from 'react';

export const HTMLContent = ({ content, className }: CustomContent): JSX.Element => (
    <div className={className} dangerouslySetInnerHTML={{ __html: content.toString() }} />
);

const Content = ({ content, className }: CustomContent): JSX.Element => <div className={className}>{content}</div>;

export interface CustomContent {
    content: JSX.Element | string;
    className?: string;
}

export default Content;
