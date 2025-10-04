import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Route, Routes} from "react-router";
import AppLayout from "./ui/AppLayout.jsx";
import Index from "./pages/Index.jsx";
// import Tailwind (musi być pierwszy!)
import "./styles/index.css";

// import SCSS (custom)
import "./styles/style.css";

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout/>} >
        <Route index path="/" element={<Index/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
