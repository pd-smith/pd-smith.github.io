import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Anchor, colors } from '../shared/typography';

const SnippetContainer = styled.div({
    maxWidth: '800px',
    padding: '40px',
    backgroundColor: 'white',
    borderRadius: '5px'
});

const SnippetTitle = styled.h2({
    color: colors.coolpurple
});
const LinkBrick = ({ title, description, link }) => (
    <SnippetContainer>
        <SnippetTitle>{title}</SnippetTitle>
        <p>{description}</p>
        <hr />
        <Anchor href={link.href}>{link.title}</Anchor>
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
