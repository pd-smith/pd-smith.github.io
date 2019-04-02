import React from 'react';
import Head from 'next/head';
import Header from '../components/shared/header';
import { colors } from '../components/shared/typography';
import styled from '@emotion/styled';
import ReadingBrick from '../components/snippets/reading-brick';

const READING_LINKS = [
    {
        title: 'Blogs',
        links: [{
            linkTitle: 'Overreacted',
            description: 'Dan Abramov is a master of explaining React in a way that strikes a balance between accessible and "in the weeds".',
            link: {
                title: 'Visit',
                href: 'https://overreacted.io/'
            }
        }, {
            linkTitle: 'Kent C Dodds\'s Blog',
            description: 'Kent (The Doddfather) is a prolific member of the React (and Javascript) community. His blog is filled with many wisdom nuggets that will help you take your skills to the next level.',
            link: {
                title: 'Visit',
                href: 'https://kentcdodds.com/blog/'
            }
        }]
    },
    {
        title: 'React',
        links: [{
            linkTitle: 'A Complete Guide to useEffect',
            description: 'Dan Abramov walks gives an in depth guide of how to use useEffect. This article was very important for me recognizing how to properly use hooks.',
            link: {
                title: 'Read Article',
                href: 'https://overreacted.io/a-complete-guide-to-useeffect/'
            }
        }, {
            linkTitle: 'The State Reducer Pattern with React Hooks',
            description: 'Kent C Dodds walks through some great patterns for building customer hooks that create simple and clean components.',
            link: {
                title: 'Read Article',
                href: 'https://overreacted.io/a-complete-guide-to-useeffect/'
            }
        }]
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
const Readings = () => (
    <>
        <Head>
            <title>Readings</title>
        </Head>
        <SectionHeader>
            <Header currentPageHref="/readings" />
        </SectionHeader>
        <SnippetHolder>
            <h1>Readings</h1>
            <p>Here's a collection of readings that I've found that I personally have found useful.</p>
            {READING_LINKS.map(({ title, links }, index) => (
                <ReadingBrick key={index} {...{ title, links }} />
            ))}
        </SnippetHolder>
    </>
);
Readings.displayName = 'Readings';
export default Readings;