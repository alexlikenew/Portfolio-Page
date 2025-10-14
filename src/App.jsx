import {useState} from 'react'
import {BrowserRouter, Route, Routes} from "react-router";
import AppLayout from "./ui/AppLayout.jsx";
import Index from "./pages/Index.jsx";
import "./styles/index.css";
import "./styles/style.css";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import BlogPage from "./pages/BlogPage.jsx";
import FAQ from "./pages/FAQ.jsx";
import {SpeedInsights} from "@vercel/speed-insights/react";
import AboutPage from "./pages/About.jsx";


function App() {
    const [count, setCount] = useState(0)
    const queryClient = new QueryClient();

    return (
        <>


                <SpeedInsights/>
                <QueryClientProvider client={queryClient}>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<AppLayout/>}>
                                <Route index path="/" element={<Index/>}/>
                                <Route path="/faq" element={<FAQ/>}/>
                                <Route path="/about" element={<AboutPage/>}/>
                                <Route path="/blog" element={<Blog/>}/>
                                <Route path="/blog/:url" element={<BlogPage/>}/>
                                <Route path="/contact" element={<Contact/>}/>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                    // </QueryClientProvider>

        </>
    )
}

export default App
