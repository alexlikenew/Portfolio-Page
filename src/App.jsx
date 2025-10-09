import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Route, Routes} from "react-router";
import AppLayout from "./ui/AppLayout.jsx";
import Index from "./pages/Index.jsx";
// import Tailwind (musi być pierwszy!)

import "./styles/index.css";

// import SCSS (custom)
import "./styles/style.css";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

function App() {
    const [count, setCount] = useState(0)
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>

            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout/>}>
                        <Route index path="/" element={<Index/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            // </QueryClientProvider>
    )
}

export default App
