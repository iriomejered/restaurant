import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import DesayunosPage from './pages/DesayunosPage';
import AlmuerzosPage from './pages/AlmuerzosPage';
import CenasPage from './pages/CenasPage';
import MealPage from './pages/MealPage';
import { randomPrice } from './utils/price';

export default function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar datos');
        return res.json();
      })
      .then((data) => {
        const meals = data.meals || [];
        const mealTimes = ['Desayuno', 'Almuerzo', 'Cena'];
        const normalized = meals.map((m, idx) => ({
          id: m.idMeal,
          name: m.strMeal,
          category: m.strCategory || 'Sin categoría',
          thumb: m.strMealThumb,
          price: randomPrice(),
          mealTime: mealTimes[idx % mealTimes.length]
        }));
        setItems(normalized);
        setError(null);
      })
      .catch((err) => {
        setError(err.message || 'Error desconocido');
        setItems([]);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage items={items} isLoading={isLoading} error={error} />} />
          <Route path="/desayunos" element={<DesayunosPage items={items} isLoading={isLoading} error={error} />} />
          <Route path="/almuerzos" element={<AlmuerzosPage items={items} isLoading={isLoading} error={error} />} />
          <Route path="/cenas" element={<CenasPage items={items} isLoading={isLoading} error={error} />} />
          <Route path="/meals/:id" element={<MealPage items={items} />} />
        </Routes>
      </main>
    </div>
  );
}