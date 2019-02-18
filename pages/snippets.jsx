import React from 'react';
import Head from 'next/head';
import Header from '../components/shared/header';
import LinkBrick from '../components/snippets/link-brick';
import { colors } from '../components/shared/typography';
import styled from '@emotion/styled';
const SNIPPET_LINKS = [
    {
        title: 'Badges',
        description: 'A simple POC for my best friend Nick! Our money making Badge scheme 😄',
        link: {
            title: 'CodePen',
            href: 'https://codepen.io/pd-smith/details/VgGeXE'
        }
    },
    {
        title: 'Select All',
        description: 'A "back to basics" test of a select all checkbox.',
        link: {
            title: 'CodePen',
            href: 'https://codepen.io/pd-smith/pen/vQyqWN'
        }
    }
];
const SnippetHolder = styled.div({
    margin: '30px auto',
    maxWidth: '800px'
});
const SectionHeader = styled.section({
    height: '100px',
    backgroundColor: colors.prettypink
});
const Snippets = () => (
    <>
        <Head>
            <title>Code Snippets</title>
        </Head>
        <SectionHeader>
            <Header currentPageHref="/snippets" />
        </SectionHeader>
        <SnippetHolder>
            {SNIPPET_LINKS.map(({ title, description, link }, index) => (
                <LinkBrick key={index} {...{ title, description, link }} />
            ))}
        </SnippetHolder>
    </>
);
Snippets.displayName = 'Snippets';
export default Snippets;
