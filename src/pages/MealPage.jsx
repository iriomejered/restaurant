import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { randomPrice } from '../utils/price';

export default function MealPage({ items = [] }) {
  const { id } = useParams();
  const location = useLocation();
  const [meal, setMeal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar el plato');
        return res.json();
      })
      .then((data) => {
        const m = data.meals && data.meals[0];
        if (!m) throw new Error('Plato no encontrado');
        const priceFromState = location.state?.price;
        const priceFromList = items.find((it) => it.id === id)?.price;
        setMeal({
          id: m.idMeal,
          name: m.strMeal,
          category: m.strCategory,
          thumb: m.strMealThumb,
          instructions: m.strInstructions,
          price: priceFromState ?? priceFromList ?? randomPrice()
        });
        setError(null);
      })
      .catch((err) => {
        setError(err.message || 'Error desconocido');
        setMeal(null);
      })
      .finally(() => setIsLoading(false));
  }, [id, items, location.state]);

  if (isLoading) return <p className="center">Loading...</p>;
  if (error) return <p className="center error">Error: {error}</p>;

  return (
    <article className="meal">
      <Link to="/">← Volver</Link>
      <h1>{meal.name}</h1>
      <img src={meal.thumb} alt={meal.name} className="meal-thumb" />
      <p className="category">{meal.category} • <strong>${meal.price.toFixed(2)}</strong></p>
      <h2>Preparación</h2>
      <p className="instructions">{meal.instructions}</p>
    </article>
  );
}