
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Index";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import RentBooks from "./pages/RentBooks";
import SellBooks from "./pages/SellBooks";
import CreateListing from "./pages/CreateListing";
import NotFound from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/books/rent" element={<RentBooks />} />
        <Route path="/books/sell" element={<SellBooks />} />
        <Route path="/books/create-listing" element={<CreateListing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
