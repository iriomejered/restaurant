import React from 'react';
import MenuList from '../components/MenuList';

export default function HomePage({ items, isLoading, error }) {
  if (isLoading) return <p className="center">Loading...</p>;
  if (error) return <p className="center error">Error: {error}</p>;
  return (
    <section>
      <h1>Menú</h1>
      <MenuList items={items} />
    </section>
  );
}