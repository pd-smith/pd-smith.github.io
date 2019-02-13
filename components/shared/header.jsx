import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Link from 'next/link';
import { colors, Anchor } from './typography';

const LINKS = [
    {
        title: 'Snippets',
        href: '/snippets'
    }
];

const HeaderLink = styled(Anchor)(
    ({ isSelected = false }) => {
        const backgroundColor = isSelected ? colors.darkpurple : 'none';
        return {
            display: 'inline-block',
            padding: '10px',
            borderRadius: '5px',
            transition: 'all 0.3s ease-in-out 0s',
            marginLeft: '10px',
            backgroundColor,
            opacity: '0.8',
            ':first-of-type': {
                marginLeft: '0'
            },
            ':hover': {
                opacity: '0.9'
            }
        };
    },
    ({ homeLink }) =>
        homeLink
            ? {
                  fontSize: '18px',
                  opacity: 1,
                  ':hover': {
                      opacity: 1
                  }
              }
            : {}
);

const HeaderContainer = styled.header({
    width: '100%',
    padding: '30px 0px 0px',
    flexShrink: 0,
    zIndex: '10',
    position: 'absolute',
    top: '0px',
    color: colors.lightgray
});

const Navigation = styled.nav({
    display: 'flex',
    justifyContent: 'space-between'
});

const NavigationAlignment = styled.div({
    width: '100%',
    maxWidth: '800px',
    margin: '0px auto'
});

const Header = ({ currentPageHref }) => (
    <HeaderContainer>
        <NavigationAlignment>
            <Navigation>
                <div>
                    <Link href="/">
                        <HeaderLink homeLink dark>
                            Pat Smith
                        </HeaderLink>
                    </Link>
                </div>
                <div>
                    {LINKS.map(({ title, href }) => (
                        <Link key={title} href={href}>
                            <HeaderLink dark isSelected={currentPageHref === href}>
                                {title}
                            </HeaderLink>
                        </Link>
                    ))}
                </div>
            </Navigation>
        </NavigationAlignment>
    </HeaderContainer>
);
Header.propTypes = {
    currentPageHref: PropTypes.string.isRequired
};
Header.displayName = 'Header';
export default Header;
