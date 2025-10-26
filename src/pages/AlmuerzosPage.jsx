import React from 'react';
import MenuList from '../components/MenuList';

export default function AlmuerzosPage({ items = [], isLoading, error }) {
  if (isLoading) return <p className="center">Loading...</p>;
  if (error) return <p className="center error">Error: {error}</p>;
  const filtered = items.filter((i) => i.mealTime === 'Almuerzo');
  return (
    <section>
      <h1>Almuerzos</h1>
      <MenuList items={filtered} />
    </section>
  );
}