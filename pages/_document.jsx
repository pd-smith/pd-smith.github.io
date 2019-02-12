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
