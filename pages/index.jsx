import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import { colors } from '../components/shared/typography';
import Header from '../components/shared/header';

const SectionHeader = styled.section({
    paddingTop: '40px',
    backgroundColor: colors.darkpurple
});

const AccentBreak = styled.hr({
    width: '100px',
    margin: '20px 0',
    display: 'inline-block'
});

const TitleHeader = styled.h1({
    margin: '5px 0',
    lineHeight: 1
});
const SubText = styled.p({
    fontSize: '18px',
    margin: '5px 0',
    fontStyle: 'italic'
});
const AccentBox = styled.div({
    backgroundColor: 'white',
    maxWidth: '800px',
    margin: '-20px auto 0px',
    borderRadius: '5px',
    padding: '40px 80px 60px'
});
const IntroBlock = styled.main({
    maxWidth: '600px',
    padding: '100px 40px 40px 40px',
    margin: '0 auto',
    color: colors.lightgray
});
const IndexPage = () => (
    <>
        <Head>
            <title>Pat Smith</title>
        </Head>
        <Header currentPageHref="/" />
        <SectionHeader>
            <IntroBlock>
                <TitleHeader>Pat Smith</TitleHeader>
                <TitleHeader>Software Engineer</TitleHeader>
                <AccentBreak />
                <SubText>Lover of all things web and beyond</SubText>
            </IntroBlock>
        </SectionHeader>
        <AccentBox>
            <h2>Plans</h2>
            <h3>Homepage</h3>
            <p>
                The end goal of this page is to be extendable, accessible, and above all an avenue for learning. Next
                steps will be making this site into a PWA (Progressive Web Application)
            </p>
        </AccentBox>
    </>
);

IndexPage.displayName = 'IndexPage';
export default IndexPage;
