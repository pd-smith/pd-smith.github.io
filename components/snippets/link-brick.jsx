import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Anchor, colors } from '../shared/typography';

const SnippetContainer = styled.div({
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px 0',
    backgroundColor: '#e7eaef',
    textAlign: 'center',
    borderRadius: '5px',
    boxShadow: '3px 2px 3px 1px #d0d1d4'
});
const SnippetTitle = styled.h2({
    color: colors.darkblue,
    margin: '10px 0'
});
const SnippetDescription = styled.p();
const SnippetLink = styled(Anchor)();
const LinkBrick = ({ title, description, link }) => (
    <SnippetContainer>
        <SnippetTitle>{title}</SnippetTitle>
        <SnippetDescription>{description}</SnippetDescription>
        <SnippetLink href={link.href}>{link.title}</SnippetLink>
    </SnippetContainer>
);
LinkBrick.displayName = 'LinkBrick';
LinkBrick.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
    }).isRequired
};
export default LinkBrick;
