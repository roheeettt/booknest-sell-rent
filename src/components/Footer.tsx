
import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-book-dark text-white">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-book-light" />
            <span className="font-serif text-xl font-bold">BookNest</span>
          </div>
          <p className="text-book-light/80 max-w-xs">
            Your trusted marketplace for buying, selling, and renting pre-loved books.
          </p>
        </div>
        
        <div>
          <h3 className="font-serif text-lg font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-book-light/80 hover:text-book-light transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/books" className="text-book-light/80 hover:text-book-light transition-colors">
                Browse Books
              </Link>
            </li>
            <li>
              <Link to="/books/sell" className="text-book-light/80 hover:text-book-light transition-colors">
                Sell Books
              </Link>
            </li>
            <li>
              <Link to="/books/rent" className="text-book-light/80 hover:text-book-light transition-colors">
                Rent Books
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-serif text-lg font-medium mb-4">Categories</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/books?category=fiction" className="text-book-light/80 hover:text-book-light transition-colors">
                Fiction
              </Link>
            </li>
            <li>
              <Link to="/books?category=non-fiction" className="text-book-light/80 hover:text-book-light transition-colors">
                Non-Fiction
              </Link>
            </li>
            <li>
              <Link to="/books?category=children" className="text-book-light/80 hover:text-book-light transition-colors">
                Children's Books
              </Link>
            </li>
            <li>
              <Link to="/books?category=textbooks" className="text-book-light/80 hover:text-book-light transition-colors">
                Textbooks
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-serif text-lg font-medium mb-4">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-book-light shrink-0 mt-0.5" />
              <span className="text-book-light/80">
                123 Bookmark Street, Reading, RG1 2LT
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-book-light" />
              <span className="text-book-light/80">+44 (0) 123 456 7890</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-book-light" />
              <span className="text-book-light/80">hello@booknest.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-black/20 py-4">
        <div className="container text-center text-book-light/60 text-sm">
          &copy; {new Date().getFullYear()} BookNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
