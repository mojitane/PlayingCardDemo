import { styled } from '../config/stitches';

export const PricingList = styled('ul', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

export const PricingListItem = styled('li', {
  padding: 0,
  display: 'flex',
  '&>div:nth-of-type(1)': {
    flex: '1',
  },
  '&>div:nth-of-type(2)': {
    textAlign: 'right',
  },
});
