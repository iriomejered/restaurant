import React from 'react';
import MenuList from '../components/MenuList';

export default function DesayunosPage({ items = [], isLoading, error }) {
  if (isLoading) return <p className="center">Loading...</p>;
  if (error) return <p className="center error">Error: {error}</p>;
  const filtered = items.filter((i) => i.mealTime === 'Desayuno');
  return (
    <section>
      <h1>Desayunos</h1>
      <MenuList items={filtered} />
    </section>
  );
}