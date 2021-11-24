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

      {/* <PlayingCard>
        <PlayingCardHeader street="green">
          <PlayingCardHeaderSubline>Title Deed</PlayingCardHeaderSubline>
          <PlayingCardHeaderTitle>Carl-Blum-Street</PlayingCardHeaderTitle>
        </PlayingCardHeader>

        <Spacer />

        <PricingList>
          <PricingListItem>
            <div>Rent</div>
            <div><span style={{transform: "rotate(180deg)", display: 'inline-block'}}>₩</span>16</div>
          </PricingListItem>
          <PricingListItem>
            <div>Rent with colour set</div>
            <div><span style={{transform: "rotate(180deg)", display: 'inline-block'}}>₩</span>28</div>
          </PricingListItem>
          <PricingListItem>
            <div>
              Rent with <ColoredIcon>1️⃣</ColoredIcon>
            </div>
            <div><span style={{transform: "rotate(180deg)", display: 'inline-block'}}>₩</span>70</div>
          </PricingListItem>
          <PricingListItem>
            <div>
              Rent with <ColoredIcon>2️⃣</ColoredIcon>
            </div>
            <div><span style={{transform: "rotate(180deg)", display: 'inline-block'}}>₩</span>200</div>
          </PricingListItem>
          <PricingListItem>
            <div>
              Rent with <ColoredIcon>3️⃣</ColoredIcon>
            </div>
            <div><span style={{transform: "rotate(180deg)", display: 'inline-block'}}>₩</span>550</div>
          </PricingListItem>
          <PricingListItem>
            <div>
              Rent with <ColoredIcon>4️⃣</ColoredIcon>
            </div>
            <div><span style={{transform: "rotate(180deg)", display: 'inline-block'}}>₩</span>750</div>
          </PricingListItem>
          <PricingListItem>
            <div>
              Rent with <ColoredIcon color="red">1️⃣</ColoredIcon>
            </div>
            <div><span style={{transform: "rotate(180deg)", display: 'inline-block'}}>₩</span>950</div>
          </PricingListItem>

          <hr />

          <PricingListItem>
            <div>Houses cost</div>
            <div><span style={{transform: "rotate(180deg)", display: 'inline-block'}}>₩</span>100 each</div>
          </PricingListItem>
          <PricingListItem>
            <div>Hotels cost</div>
            <div><span style={{transform: "rotate(180deg)", display: 'inline-block'}}>₩</span>100 each</div>
          </PricingListItem>
        </PricingList>
      </PlayingCard> */}
    </div>
  );
}
