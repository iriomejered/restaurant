import React from 'react';
import MenuItem from './MenuItem';

export default function MenuList({ items = [] }) {
  if (!items.length) return <p className="center">No hay platos para mostrar.</p>;
  return (
    <section className="grid">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </section>
  );
}