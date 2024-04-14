import React,{useContext} from 'react'
import Notes from './Notes'

const Home = () => {
  return (
    <>
    <div className='container my-3'>
      <h1>Add a Notes</h1>
      <form className='my-3'>
        <div className="mb-3">
          <label for="notestitle" className="form-label">Notes Title</label>
          <input type="text" className="form-control" id="notestitle"/>
        </div>
        <div className="mb-3">
          <label for="notesdescription" className="form-label">Notes Description</label>
          <input type="text" className="form-control" id="notesdescription"/>
        </div>
        <button type="submit" className="btn btn-primary">Add Notes</button>
      </form>
      <Notes/>
    </div>
    </>
  )
}

export default Home