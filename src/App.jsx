import { useState } from 'react'
import { Modal, Navbar, Search, MovieList } from "./components";


function App() {

  return (
    <>
      <Navbar />
      <div className='container'>
        <Search />
        <Modal />
        <MovieList />
      </div>
    </>

  )
}

export default App
