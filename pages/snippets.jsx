import React from 'react';
import Header from '../components/shared/header';
import LinkBrick from '../components/snippets/link-brick';
const SNIPPET_LINKS = [
    {
        title: 'Select All',
        description: 'A "back to basics" test of a select all checkbox.',
        link: {
            title: 'CodePen',
            href: 'https://codepen.io/pd-smith/pen/vQyqWN'
        }
    }
];
const Snippets = () => (
    <>
        <Header currentPageHref="/snippets" />
        <div>
            {SNIPPET_LINKS.map(({ title, description, link }, index) => (
                <LinkBrick key={index} {...{ title, description, link }} />
            ))}
        </div>
    </>
);
Snippets.displayName = 'Snippets';
export default Snippets;
