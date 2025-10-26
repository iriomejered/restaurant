import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuItem({ item }) {
  return (
    <article className="card">
      <Link to={`/meals/${item.id}`} state={{ price: item.price }}>
        <img className="thumb" src={item.thumb} alt={item.name} />
      </Link>
      <div className="card-body">
        <h3 className="title">{item.name}</h3>
        <p className="category">{item.category}</p>
        <p className="price">${item.price.toFixed(2)}</p>
        <Link className="btn" to={`/meals/${item.id}`} state={{ price: item.price }}>
          Ver plato
        </Link>
      </div>
    </article>
  );
}