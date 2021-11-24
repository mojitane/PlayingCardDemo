import { styled } from '../config/stitches';

export const ColoredIcon = styled('span', {
  filter: 'hue-rotate(var(--rotation))',

  variants: {
    color: {
      green: {
        '--rotation': '270deg',
      },
      red: {
        '--rotation': '130deg',
      },
    },
  },

  defaultVariants: {
    color: 'green',
  },
});
