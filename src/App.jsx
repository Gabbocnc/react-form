import { useState } from 'react'

import './App.css'

function App() {

  const [articles, setArticles] = useState([])
  const [newArticle, setNewArticle] = useState('')


  function addArticle(e) {
    e.preventDefault();
    setArticles([...articles, { title: newArticle, status: 'published' }]);
    setNewArticle('');

  }


  function deleteArticle(index) {
    setArticles(articles.filter((article, i) => index !== i));
  }

  function editTitle(index) {
    const newTitle = prompt('Enter new title', articles[index].title);
    if (newTitle) {
      const updatedArticles = [...articles];
      updatedArticles[index].title = newTitle;
      setArticles(updatedArticles);
    }
  }

  function changeStatus(index) {
    const newStatus = prompt('Enter new status', articles[index].status)

    if (newStatus) {
      const updateStatus = [...articles];
      updateStatus[index].status = newStatus;
      setArticles(updateStatus)
    }
  }


  return (
    <div className="container mt-5">
      <h1>Blog</h1>

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

      <ul className="list-group  list-unstyled ">
        {articles.map((article, index) => (
          <li key={index}>
            <h5> Title : {article.title}</h5>
            <p> State: {article.status}

              <button
                className="btn btn-sm btn-warning"
                onClick={() => changeStatus(index)}
              >
                Change Status
              </button>
            </p>

            <div className=' d-flex justify-content-end'>
              <button className='btn btn-sm btn-success' onClick={() => editTitle(index)}><i className="bi bi-pencil-square"></i></button>
              <button className='btn btn-sm btn-danger' onClick={() => deleteArticle(index)}><i className="bi bi-trash2-fill"></i></button>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
