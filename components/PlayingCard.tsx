import { styled } from '../config/stitches';

export const PlayingCard = styled('article', {
  width: '16rem',
  padding: '0.5rem',
  margin: '0 auto',
  border: '1px solid black',
  outline: '0.7rem solid white',
  backgroundColor: 'white',
  fontFamily: 'Open Sans',

  // https://www.joshwcomeau.com/shadow-palette/
  $$shadowColor: '305deg 12% 58%',
  boxShadow: `0.3px 0.5px 0.7px hsl($$shadowColor / 0.49),
  1.2px 2.1px 2.8px -0.7px hsl($$shadowColor / 0.52),
  3.1px 5.2px 7px -1.5px hsl($$shadowColor / 0.55),
  7.5px 12.7px 17.1px -2.2px hsl($$shadowColor / 0.57)`,
});

export const PlayingCardHeader = styled('header', {
  padding: '0.5rem',
  border: '1px solid black',
  textAlign: 'center',
  textTransform: 'uppercase',
  variants: {
    street: {
      orange: {
        backgroundColor: '#FFAC1C',
      },
      red: {
        backgroundColor: '#CC5500',
        color: 'white',
      },
      green: {
        backgroundColor: '#4F7942',
        color: 'white',
      },
      yellow: {
        backgroundColor: '#FFEA00',
      },
    },
  },
  defaultVariants: {
    street: 'orange',
  },
});

export const PlayingCardHeaderTitle = styled('h1', {
  fontWeight: 800,
  fontSize: '1.2rem',
});

export const PlayingCardHeaderSubline = styled('p', {
  fontWeight: 400,
  fontSize: '0.8rem',
  marginBottom: '0.5rem',
});
