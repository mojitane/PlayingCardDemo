import { styled } from '../config/stitches';

export const Spacer = styled('div', {
  variants: {
    size: {
      small: {
        height: '0.5rem',
      },
      medium: {
        height: '1rem',
      },
      large: {
        height: '3rem',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});
