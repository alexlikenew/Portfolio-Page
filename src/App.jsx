import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Route, Routes} from "react-router";
import AppLayout from "./ui/AppLayout.jsx";
import Index from "./pages/Index.jsx";
// import Tailwind (musi być pierwszy!)
import SpeedInsights from "@vercel/speed-insights/astro"
import "./styles/index.css";

// import SCSS (custom)
import "./styles/style.css";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import BlogPage from "./pages/BlogPage.jsx";
import FAQ from "./pages/FAQ.jsx";

function App() {
    const [count, setCount] = useState(0)
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <SpeedInsights/>
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout/>}>
                        <Route index path="/" element={<Index/>}/>
                        <Route path="/faq" element={<FAQ/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="/blog/:url" element={<BlogPage/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            // </QueryClientProvider>
    )
}

export default App
