import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Link from 'next/link';
import { colors, Anchor } from './typography';

const LINKS = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'Snippets',
        href: '/snippets'
    }
];

const HeaderLink = styled(Anchor)(({ isSelected = false }) => {
    const borderBottom = isSelected ? `2px solid ${colors.darkblue}` : 'none';
    return {
        margin: '0 30px',
        padding: '10px 0',
        fontWeight: 'bold',
        borderBottom,
        ':first-of-type': {
            paddingLeft: '0'
        },
        ':last-of-type': {
            paddingRight: '0'
        }
    };
});

const HeaderContainer = styled.div({
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0 150px'
});

const Header = ({ currentPageHref }) => (
    <HeaderContainer>
        {LINKS.map(({ title, href }) => (
            <Link key={title} href={href}>
                <HeaderLink isSelected={currentPageHref === href}>{title}</HeaderLink>
            </Link>
        ))}
    </HeaderContainer>
);
Header.propTypes = {
    currentPageHref: PropTypes.string.isRequired
};
Header.displayName = 'Header';
export default Header;
