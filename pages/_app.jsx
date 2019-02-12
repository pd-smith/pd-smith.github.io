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
                font-family: 'Merriweather Sans', sans-serif;
                line-height: 1;
                background-color: ${colors.lightblue};
                color: ${colors.darkgray};
            }

            html { 
                height:100%;
            }
            body {
                min-height:100%;
                position:relative;
            }
            body::after{
                content:'';
                height: 100px;
                display:block;
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
