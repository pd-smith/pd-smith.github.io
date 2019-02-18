import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { hydrate, injectGlobal } from 'emotion';
import styled from '@emotion/styled';
import { colors, Anchor } from '../components/shared/typography';

const CommonFooter = styled.footer({
    color: colors.darkgray,
    textAlign: 'center',
    fontSize: '35px',
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '50px',
    padding: '20px 0'
});

const SocialMediaLink = styled(Anchor)({
    padding: '0 5px'
});

function onClientBootstrap() {
    hydrate(window.__NEXT_DATA__.style.ids);
}

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = Component.getInitialProps(ctx);
        }
        return { pageProps };
    }

    constructor(props) {
        super(props);

        if (typeof window !== 'undefined') {
            onClientBootstrap();
        }

        injectGlobal`
            html, body {
                font-family: 'Poppins', sans-serif;
                line-height: 1.5;
                background-color: ${colors.lightgray};
                color: ${colors.darkgray};
            }

            html { 
                height:100%;
            }
            body {
                min-height:100%;
                margin: 0;
                position:relative;
            }
            body::after{
                content:'';
                height: 100px;
                display:block;
            }
            h1 {
                font-size: 30px;
            }
            h2 {
                font-size: 26px;
                margin: 30px 0 15px;
                font-weight: bold;
            }
            h3 {
                font-size: 22px;
                margin: 30px 0 10px;
            }
            hr {
                border-right-width: initial;
                border-bottom-width: initial;
                border-left-width: initial;
                border-right-color: initial;
                border-bottom-color: initial;
                border-left-color: initial;
                margin: 50px 0px;
                border-style: solid none none;
                border-image: initial;
                border-top: 1px solid rgb(211, 211, 211);
                background: none;
            }
        `;
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title>Main Site</title>
                </Head>
                <Container>
                    <Component {...pageProps} />
                </Container>
                <CommonFooter>
                    <SocialMediaLink target="_blank" href="https://www.linkedin.com/in/patrsmith/">
                        <i className="fab fa-linkedin" />
                    </SocialMediaLink>
                    <SocialMediaLink target="_blank" href="https://github.com/pd-smith">
                        <i className="fab fa-github-square" />
                    </SocialMediaLink>
                </CommonFooter>
            </>
        );
    }
}
