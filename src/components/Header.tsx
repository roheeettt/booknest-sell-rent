
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, BookOpen, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/books?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-book-paper/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <div className="flex gap-6 md:gap-10">
          <Link to="/" className="hidden md:flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-book-accent1" />
            <span className="font-serif text-xl font-bold tracking-tight">BookNest</span>
          </Link>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <div className="flex flex-col gap-6 py-4">
                <Link to="/" className="flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-book-accent1" />
                  <span className="font-serif text-xl font-bold">BookNest</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  <Link to="/" className="text-lg font-medium">Home</Link>
                  <Link to="/books" className="text-lg font-medium">Browse Books</Link>
                  <Link to="/books/sell" className="text-lg font-medium">Sell Books</Link>
                  <Link to="/books/rent" className="text-lg font-medium">Rent Books</Link>
                  <Link to="/about" className="text-lg font-medium">About Us</Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        <nav className="mx-6 hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className={cn("font-medium transition-colors hover:text-book-accent1")}>
            Home
          </Link>
          <Link to="/books" className={cn("font-medium transition-colors hover:text-book-accent1")}>
            Browse Books
          </Link>
          <Link to="/books/sell" className={cn("font-medium transition-colors hover:text-book-accent1")}>
            Sell Books
          </Link>
          <Link to="/books/rent" className={cn("font-medium transition-colors hover:text-book-accent1")}>
            Rent Books
          </Link>
        </nav>
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          <form onSubmit={handleSearch} className="hidden md:flex w-[200px] lg:w-[300px]">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 bg-white/60"
              />
            </div>
          </form>
          
          <Button asChild variant="ghost" size="icon" className="mr-2">
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Link>
          </Button>
          
          <Button asChild variant="ghost" size="icon">
            <Link to="/account">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
