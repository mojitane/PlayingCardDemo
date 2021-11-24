import React from 'react';
import {
  PlayingCard,
  PlayingCardHeader,
  PlayingCardHeaderSubline,
  PlayingCardHeaderTitle,
} from '../components/PlayingCard';
import { Spacer } from '../components/Spacer';
import { CardPricingList } from '../components/CardPricingList';

export default function Demo() {
  return (
    <div>
      <Spacer size="large" />

      <p>
        Find the code on{' '}
        <a href="https://github.com/mojitane/PlayingCardDemo">github</a> or
        explore on{' '}
        <a href="https://github.dev/mojitane/PlayingCardDemo">github dev</a>.
      </p>

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

      <a href="https://twitter.com/mojitane">@mojitane</a>
    </div>
  );
}
