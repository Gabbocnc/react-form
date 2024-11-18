import { useState } from 'react'

import './App.css'

function App() {

  const [article, setArticle] = useState('')
  const [newArticle, setNewArticle] = useState('')


  return (
    <>
      <div className="container mt-5">
        <h1>Blog</h1>

        <form onSubmit={setArticle}>
          <div className="mb-3">
            <label htmlFor="article" className='form-label'>Article</label>

            <div className="input-group mb-3">
              <input type="text" className='form-control' placeholder='Add Article' value={newArticle} onChange={e => { setNewArticle(e.target.value) }} />
              <button className='btn btn-outline-secondary' type='submit' id='button-addon2'>Button</button>
            </div>
          </div>
        </form>







      </div>
    </>
  )
}

export default App
