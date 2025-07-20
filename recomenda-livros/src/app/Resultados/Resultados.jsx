import React, { useState } from 'react';
import { FaArrowLeft, FaSearch, FaFilter, FaStar } from 'react-icons/fa';
import './Resultados.css';

const booksData = [
  { id: 1, title: 'O Hobbit', author: 'J.R.R. Tolkien', cover: 'hobbit.jpg', rating: 4.7, tag: 'Tendências atuais' },
  { id: 2, title: '1984', author: 'George Orwell', cover: '1984.jpg', rating: 4.5, tag: 'Tendências atuais' },
  { id: 3, title: 'Duna', author: 'Frank Herbert', cover: 'duna.jpg', rating: 4.6, tag: 'Baseado no seu gosto' },
  { id: 4, title: 'Alice no País das Maravilhas', author: 'Lewis Carrol', cover: 'alice.jpg', rating: 4.7, tag: 'Baseado no seu gosto' },
  { id: 5, title: 'Harry Potter e a Pedra Filosofal', author: 'J.K. Rowling', cover: 'hp1.jpg', rating: 4.7, tag: 'Baseado no seu gosto' },
  { id: 6, title: 'Percy Jackson e os Olimpianos', author: 'Rick Riordan', cover: 'pj.jpg', rating: 4.7, tag: 'Baseado no seu gosto' },
  { id: 7, title: 'Coraline', author: 'Neil Gaiman', cover: 'coraline.jpg', rating: 4.7, tag: 'Baseado no seu gosto' },
  { id: 8, title: 'Mitologia Nórdica', author: 'Neil Gaiman', cover: 'mitologia.jpg', rating: 4.7, tag: 'Baseado no seu histórico' },
  { id: 9, title: 'O Alienista', author: 'Machado de Assis', cover: 'alienista.jpg', rating: 4.7, tag: 'Tendências atuais' },
];

function Resultados() {
  const [search, setSearch] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);

  const filteredBooks = booksData.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <FaArrowLeft className="back-icon" />
        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Buscar Livro..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="avatar">A</div>
      </header>

      <div className="filter-bar">
        <button className="btn-filter" onClick={() => setFilterOpen(!filterOpen)}>
          <FaFilter /> FILTROS
        </button>
        <span className="filter-text">Nenhum filtro aplicado</span>
      </div>

      <main className="book-grid">
        {filteredBooks.map(book => (
          <div key={book.id} className="card">
            <img src={book.cover} alt={book.title} />
            <div className="card-info">
              <h3>{book.title}</h3>
              <p className="author">{book.author}</p>
              <div className="rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar key={i} className={i < Math.round(book.rating) ? 'filled' : ''} />
                ))}
                <span>{book.rating}</span>
              </div>
              <span className="tag">{book.tag}</span>
            </div>
          </div>
        ))}
      </main>
      <footer className="gallery-footer">
        <a href="#foruns" className="footer-link">Fóruns <span className="badge">32</span></a>
        <a href="#recomendacoes" className="footer-link">Recomendações</a>
      </footer>
    </div>
  );
}

export default Resultados;