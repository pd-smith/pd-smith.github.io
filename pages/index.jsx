import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import { colors } from '../components/shared/typography';
import Header from '../components/shared/header';

const MainIntroContainer = styled.div({
    paddingTop: '150px'
});

const AccentBreak = styled.hr({
    borderColor: colors.seablue,
    maxWidth: '100px',
    margin: '0 auto 0 0',
    display: 'inherit'
});

const NameHeader = styled.h2({
    margin: '5px 0',
    color: colors.darkblue
});
const TitleHeader = styled.h1({
    margin: '5px 0',
    color: colors.darkblue
});

const SubText = styled.p({
    fontSize: '14px',
    fontStyle: 'italic'
});
const IntroBlock = styled.main({
    padding: '10px 10px 10px 10px',
    maxWidth: '600px',
    margin: 'auto'
});
const IndexPage = () => (
    <>
        <Head>
            <title>Pat Smith</title>
        </Head>
        <Header currentPageHref="/" />
        <MainIntroContainer>
            <IntroBlock>
                <NameHeader>PAT SMITH</NameHeader>
                <TitleHeader>SOFTWARE ENGINEER</TitleHeader>
                <AccentBreak />
                <SubText>Lover of all things web and beyond</SubText>
            </IntroBlock>
        </MainIntroContainer>
    </>
);

IndexPage.displayName = 'IndexPage';
export default IndexPage;
