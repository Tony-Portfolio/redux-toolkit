import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Index from "./pages/Index";
import Detail from './pages/Detail';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import LoadingSpinner from "./components/LoadingSpinner";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

function AppContent() {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [location]);

    return (
        <>
            {loading && (
                <LoadingSpinner />
            )}
            <Navigation />

            <div className="dark:bg-black bg-white">
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/movie/:id" element={<Detail />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/movie/popular" element={<Popular />} />
                    <Route path="/movie/top_rated" element={<TopRated />} />
                    <Route path="/movie/search/:query" element={<Search />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
