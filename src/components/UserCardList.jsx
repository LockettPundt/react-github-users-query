import React, { useState } from 'react';
import Card from './Card';
const UserCardList = props => {
  const { cards } = props;


  const cardDisplay = cards.map(card => {
    return <Card {...card}></Card>
  });

  return (
    <div>{cardDisplay}</div>
  )
}

export default UserCardList