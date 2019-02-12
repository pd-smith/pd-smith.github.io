import styled from '@emotion/styled';

export const colors = Object.freeze({
    darkgray: '#2E3030',
    lightblue: '#F2F5F9',
    seablue: '#47C1C3',
    darkblue: '#17325B',
    red: '#DB202C',
    lightbrown: '#D97844'
});

export const Anchor = styled.a({
    cursor: 'pointer',
    color: colors.darkblue,
    ':hover': {
        textDecoration: 'none',
        color: colors.seablue
    }
});
