import React from 'react';
import { contentHome } from '../../content/content';
import './trio-cards.scss';

const TrioCards = () => {
  if (!contentHome || !contentHome.trioCards) {
    return <div>Error: Content not found</div>;
  }

  const { trioCards } = contentHome;

  return (
    <section className="cards-container">
      {trioCards.map((card, index) => (
        <article key={index} className="card">
          <section>
            <img src={`/assets/${card.imageUrl}`} alt={card.alt} className="card-image" />
          </section>
          <section>
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
          </section>
        </article>
      ))}
    </section>
  );
};

export default TrioCards;
