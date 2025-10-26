import React from 'react';
import MenuList from '../components/MenuList';

export default function CenasPage({ items = [], isLoading, error }) {
  if (isLoading) return <p className="center">Loading...</p>;
  if (error) return <p className="center error">Error: {error}</p>;
  const filtered = items.filter((i) => i.mealTime === 'Cena');
  return (
    <section>
      <h1>Cenas</h1>
      <MenuList items={filtered} />
    </section>
  );
}