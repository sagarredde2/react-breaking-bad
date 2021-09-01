import React from 'react';
import CharItem from './CharItem';

const CharGrid = ({items}) => {
  return (
    <section className='cards'>
    {items.map((item) => (
      <CharItem key={item.char_id} item={item}></CharItem>
    ))}
  </section>
  )
};
export default CharGrid;
