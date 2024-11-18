import { useState } from 'react'

import './App.css'

function App() {

  const [articles, setArticles] = useState([])
  const [newArticle, setNewArticle] = useState('')


  function addArticle(e) {
    e.preventDefault()

    setArticles([
      ...articles,
      newArticle
    ])
    setNewArticle('')
  }

  return (
    <div className="container mt-5">
      <h1>Blog</h1>

      {/* Form per aggiungere articoli */}
      <form onSubmit={addArticle}>
        <div className="mb-3">
          <label htmlFor="article" className="form-label">Article</label>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add Article"
              value={newArticle}
              onChange={(e) => setNewArticle(e.target.value)}
            />
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              Add
            </button>
          </div>
        </div>
      </form>


      <ul className="list-group">
        {articles.map((article, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {article}
            <button
              className="btn btn-sm btn-danger"
              onClick={() => deleteArticle(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
