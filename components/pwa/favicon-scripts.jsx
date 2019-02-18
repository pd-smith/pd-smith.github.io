import React from 'react';
const FAVICON_FILE_PATH = '/static/favicon';
const ICON_SIZES = ['32x32', '96x96', '16x16'];
const ANDROID_ICON_SIZES = ['192x192'];
const APPLE_ICON_SIZES = ['57x57', '60x60', '72x72', '76x76', '114x114', '120x120', '144x144', '152x152', '180x180'];

const getAppleFavicons = () =>
    APPLE_ICON_SIZES.map((size, index) => (
        <link key={index} rel="apple-touch-icon" sizes={size} href={`${FAVICON_FILE_PATH}/apple-icon-${size}.png`} />
    ));
const getAndroidFavicons = () =>
    ANDROID_ICON_SIZES.map((size, index) => (
        <link
            key={index}
            rel="icon"
            type="image/png"
            sizes={size}
            href={`${FAVICON_FILE_PATH}/android-icon-${size}.png`}
        />
    ));
const getFavicons = () =>
    ICON_SIZES.map((size, index) => (
        <link key={index} rel="icon" type="image/png" sizes={size} href={`${FAVICON_FILE_PATH}/favicon-${size}.png`} />
    ));

export const FaviconLinks = () => (
    <>
        {getAppleFavicons()}
        {getAndroidFavicons()}
        {getFavicons()}
    </>
);
FaviconLinks.displayName = 'FaviconLinks';
