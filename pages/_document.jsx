import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { renderToString } from 'react-dom/server';
import { extractCritical } from 'emotion-server';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const page = renderPage();
        const { css, ids } = extractCritical(renderToString(() => page.html || page.errorHtml));
        return {
            ...page,
            style: {
                css,
                ids
            }
        };
    }

    constructor(props) {
        super(props);
        const {
            __NEXT_DATA__,
            style: { ids }
        } = this.props;

        if (ids) {
            __NEXT_DATA__.style = { ids };
        }
    }

    render() {
        const { style } = this.props;
        return (
            <html lang="en">
                <Head>
                    <meta name="viewport" content="width=device-width" />
                    <meta name="Description" content="Homepage for Patrick Smith; Software Engineer." />
                    <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans" rel="stylesheet" />
                    <link
                        rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.7.1/css/brands.css"
                        integrity="sha384-BKw0P+CQz9xmby+uplDwp82Py8x1xtYPK3ORn/ZSoe6Dk3ETP59WCDnX+fI1XCKK"
                        crossOrigin="anonymous"
                    />
                    <link rel="apple-touch-icon" sizes="57x57" href="/static/favicon/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/static/favicon/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/static/favicon/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/static/favicon/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/static/favicon/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/static/favicon/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/static/favicon/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/static/favicon/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-icon-180x180.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/static/favicon/android-icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
                    <link rel="manifest" href="/static/favicon/manifest.json" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta name="msapplication-TileImage" content="/static/favicon/ms-icon-144x144.png" />
                    <meta name="theme-color" content="#ffffff" />
                    <style dangerouslySetInnerHTML={{ __html: style.css }} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script
                        defer
                        src="https://use.fontawesome.com/releases/v5.7.1/js/all.js"
                        integrity="sha384-eVEQC9zshBn0rFj4+TU78eNA19HMNigMviK/PU/FFjLXqa/GKPgX58rvt5Z8PLs7"
                        crossOrigin="anonymous"
                    />
                </body>
            </html>
        );
    }
}
