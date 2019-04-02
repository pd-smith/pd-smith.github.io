import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Link from 'next/link';
import { colors, Anchor } from './typography';

const LINKS = [
    {
        title: 'Snippets',
        href: '/snippets'
    },
    {
        title: 'Readings',
        href: '/readings'
    }
];
const HeaderLink = styled(Anchor)({
    display: 'inline-block',
    padding: '10px',
    borderRadius: '5px'
});
const SectionLink = styled(HeaderLink)(({ isSelected = false }) => {
    const styles = {
        transition: 'all 0.3s ease-in-out 0s',
        marginLeft: '10px',
        opacity: '0.8',
        background: 'none',
        ':first-of-type': {
            marginLeft: '0'
        },
        ':hover': {
            opacity: '0.9'
        }
    }
    if (isSelected) {
        styles.backgroundColor = colors.coolpurple;
        styles.color = colors.lightgray;
        styles[':hover'].color = colors.lightgray;
    }
    return styles;
});

const HomeLink = styled(HeaderLink)({
    fontSize: '18px',
    opacity: 1,
    fontWeight: 'bold',
    ':hover': {
        opacity: 1
    }
});

const HeaderContainer = styled.header(({ dark }) => ({
    width: '100%',
    padding: '30px 0px 0px',
    flexShrink: 0,
    zIndex: '10',
    position: 'absolute',
    top: '0px',
    color: dark ? colors.coolpurple : colors.lightgray
}));

const Navigation = styled.nav({
    display: 'flex',
    justifyContent: 'space-between'
});

const NavigationAlignment = styled.div({
    width: '100%',
    maxWidth: '800px',
    margin: '0px auto'
});

const Header = ({ currentPageHref, dark, ...otherProps }) => (
    <HeaderContainer {...otherProps}>
        <NavigationAlignment>
            <Navigation>
                <div>
                    <Link href="/" passHref>
                        <HomeLink {...{ dark }}>Pat Smith</HomeLink>
                    </Link>
                </div>
                <div>
                    {LINKS.map(({ title, href }) => (
                        <Link key={title} href={href} passHref>
                            <SectionLink {...{ dark, isSelected: currentPageHref === href }}>{title}</SectionLink>
                        </Link>
                    ))}
                </div>
            </Navigation>
        </NavigationAlignment>
    </HeaderContainer>
);
Header.propTypes = {
    currentPageHref: PropTypes.string.isRequired,
    dark: PropTypes.bool
};
Header.defaultProps = {
    dark: false
};
Header.displayName = 'Header';
export default Header;
