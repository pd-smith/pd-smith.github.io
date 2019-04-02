import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Anchor, colors } from '../shared/typography';

const SnippetContainer = styled.div({
    maxWidth: '800px',
    marginTop: '40px',
    padding: '40px',
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '0px 3px 7px 0px #d3dcec'
});

const SectionTitle = styled.h2({
    color: colors.coolpurple
});
const ReadingTitle = styled.h3({
    color: colors.coolpurple
});
const ArticleLink = styled(Anchor)({
    display: 'block',
    textAlign: 'right'
})
const ReadingBrick = ({ title, links }) => (
    <SnippetContainer>
        <SectionTitle>{title}</SectionTitle>
        {links.map(({ linkTitle, description, link }, index) => (
            <Fragment key={index}>
                <ReadingTitle>{linkTitle}</ReadingTitle>
                <p>{description}</p>
                <ArticleLink target="_blank" href={link.href}>
                    {link.title}
                </ArticleLink>
                <hr />
            </Fragment>  
        ))}
    </SnippetContainer>
);
ReadingBrick.displayName = 'ReadingBrick';
ReadingBrick.propTypes = {
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
        linkTitle: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        link: PropTypes.shape({
            title: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired
        })
    })).isRequired
};
export default ReadingBrick;