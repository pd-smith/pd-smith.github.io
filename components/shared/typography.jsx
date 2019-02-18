import styled from '@emotion/styled';

export const colors = Object.freeze({
    darkgray: '#393939',
    lightblue: '#F2F5F9',
    seablue: '#47C1C3',
    prettypink: '#FFD6E5',
    darkblue: '#17325B',
    red: '#E85143',
    blue: '#2D79DF',
    honeyyellow: '#FFB800',
    lightbrown: '#D97844',
    lightgray: '#FAFAFA',
    coolpurple: '#5245C2',
    darkpurple: '#231B43',
    darkpurpleHover: '#4024D4'
});

export const Anchor = styled.a(({ dark }) => ({
    cursor: 'pointer',
    textDecoration: 'none',
    color: dark ? colors.lightgray : colors.coolpurple,
    ':hover': {
        textDecoration: 'none',
        color: dark ? 'white' : colors.darkpurpleHover
    }
}));
