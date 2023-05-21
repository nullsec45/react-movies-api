import React, { useEffect } from 'react'
import { Home, Detail } from "./pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/detail/:id" element={<Detail />} exact />
          </Routes>
        </main>
      </Router >
    </>

  )
}

export default App
