import React from 'react';
import {
  PlayingCard,
  PlayingCardHeader,
  PlayingCardHeaderSubline,
  PlayingCardHeaderTitle,
} from '../components/PlayingCard';
import { Spacer } from '../components/Spacer';
import { CardPricingList } from '../components/CardPricingList';
import { styled } from '../config/stitches';

const Text = styled('p', {
  fontFamily: 'Open Sans',
  textAlign: 'center',
});

export default function Demo() {
  return (
    <div>
      <Spacer size="large" />

      <Text>
        Find the code on{' '}
        <a href="https://github.com/mojitane/PlayingCardDemo">github</a> or
        explore on{' '}
        <a href="https://github.dev/mojitane/PlayingCardDemo">github dev</a>.
      </Text>

      <Spacer />

      <PlayingCard>
        <PlayingCardHeader street="green">
          <PlayingCardHeaderSubline>Title Deed</PlayingCardHeaderSubline>
          <PlayingCardHeaderTitle>Plange Mühle</PlayingCardHeaderTitle>
        </PlayingCardHeader>

        <Spacer />

        <CardPricingList />
      </PlayingCard>

      <Spacer size="large" />

      <PlayingCard>
        <PlayingCardHeader street="orange">
          <PlayingCardHeaderSubline>Title Deed</PlayingCardHeaderSubline>
          <PlayingCardHeaderTitle>Carl-Blum-Straße</PlayingCardHeaderTitle>
        </PlayingCardHeader>

        <Spacer />

        <CardPricingList />
      </PlayingCard>

      <Spacer size="large" />

      <PlayingCard>
        <PlayingCardHeader street="red">
          <PlayingCardHeaderSubline>Title Deed</PlayingCardHeaderSubline>
          <PlayingCardHeaderTitle>Obere Donaustraße</PlayingCardHeaderTitle>
        </PlayingCardHeader>

        <Spacer />

        <CardPricingList />
      </PlayingCard>

      <Spacer size="large" />

      <Text>
        <a href="https://twitter.com/mojitane">@mojitane</a>
      </Text>
    </div>
  );
}
