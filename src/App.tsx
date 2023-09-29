import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from "./pages/Index";
import Details from './pages/Details';

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

function AppContent() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/movie/:id" element={<Details />}></Route>
            </Routes>
        </>
    );
}

export default App;