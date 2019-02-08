import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { hydrate, injectGlobal } from 'emotion';
import styled from '@emotion/styled';

const CommonFooter = styled.footer({
    color: 'white',
    textAlign: 'center',
    fontSize: '35px',
    position: 'absolute',
    right: '0',
    bottom: '0',
    left: '0',
    padding: '20px 0'
});

const SocialMediaLink = styled.a({
    color: 'white',
    padding: '0 5px',
    ':hover': {
        color: 'white',
        textDecoration: 'none'
    }
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
                font-family: 'Merriweather Sans', sans-serif;
                line-height: 1;
                background-color: #247BA0;
                color: #70C1B3;
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
                    <SocialMediaLink href="https://www.linkedin.com/in/patrsmith/">
                        <i className="fab fa-linkedin" />
                    </SocialMediaLink>
                    <SocialMediaLink href="https://github.com/pd-smith">
                        <i className="fab fa-github-square" />
                    </SocialMediaLink>
                </CommonFooter>
            </>
        );
    }
}
