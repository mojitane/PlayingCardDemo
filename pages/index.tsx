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
        <PlayingCardHeader street="green">
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
