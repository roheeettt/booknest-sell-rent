
import React from "react";
import { Link } from "react-router-dom";
import { Search, BookIcon, BookOpen, Star, BookMarked } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Layout from "@/components/Layout";
import FeaturedBooks from "@/components/FeaturedBooks";
import { books } from "@/lib/data";

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/books?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };
  
  // Get 5 recent books
  const recentBooks = [...books]
    .sort((a, b) => new Date(b.listed).getTime() - new Date(a.listed).getTime())
    .slice(0, 5);

  // Get books to feature (books with good or better condition)
  const featuredBooks = books
    .filter(book => ["new", "like-new", "very-good"].includes(book.condition))
    .slice(0, 5);
  
  // Get rental books to feature
  const rentalBooks = books
    .filter(book => book.isForRent)
    .slice(0, 5);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-book-dark text-white py-16 md:py-24">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Discover Your Next Favorite Book
            </h1>
            <p className="text-lg md:text-xl text-book-light/90 mb-8">
              Buy, sell, and rent pre-loved books from our curated collection
            </p>
            
            <form onSubmit={handleSearch} className="flex w-full max-w-md mx-auto mb-8">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by title, author, or keyword..."
                  className="pl-9 h-12 border-0 rounded-l-lg focus-visible:ring-offset-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button type="submit" className="rounded-l-none h-12 px-6 bg-book-accent1 hover:bg-book-accent1/90">
                Search
              </Button>
            </form>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-book-accent1 hover:bg-book-accent1/90">
                <Link to="/books">Browse Collection</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/books/sell">Sell Your Books</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background pattern for hero */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTZWMGg2djMwem0wIDBoMjR2NkgzNnYtNnpNMzAgMzBoLTZ2LTZoNnY2em0wIDBoLTZ2MzBoNlYzMHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-14 bg-book-aged">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-center mb-10">
            Browse Books by Category
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Fiction", icon: BookOpen, color: "bg-book-accent1/10 text-book-accent1", link: "/books?category=Fiction" },
              { name: "Non-Fiction", icon: BookIcon, color: "bg-book-accent2/10 text-book-accent2", link: "/books?category=Non-Fiction" },
              { name: "Children's", icon: Star, color: "bg-amber-500/10 text-amber-500", link: "/books?category=Children's" },
              { name: "Textbooks", icon: BookMarked, color: "bg-blue-500/10 text-blue-500", link: "/books?category=Textbook" },
              { name: "Rentals", icon: BookOpen, color: "bg-purple-500/10 text-purple-500", link: "/books/rent" },
              { name: "Sell", icon: BookIcon, color: "bg-green-500/10 text-green-500", link: "/books/sell" },
            ].map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className={cn(
                  "flex flex-col items-center justify-center p-6 rounded-lg transition-all hover:-translate-y-1",
                  "border border-border/50 book-card-shadow bg-white",
                )}
              >
                <div className={cn("p-3 rounded-full mb-3", category.color)}>
                  <category.icon className="h-6 w-6" />
                </div>
                <span className="font-medium">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Books */}
      <FeaturedBooks 
        title="Recently Added" 
        books={recentBooks}
        viewAllLink="/books"
      />
      
      <div className="bg-book-aged">
        <FeaturedBooks 
          title="Featured Books" 
          books={featuredBooks}
          viewAllLink="/books?condition=very-good"
        />
      </div>
      
      <FeaturedBooks 
        title="Books Available for Rent" 
        books={rentalBooks}
        viewAllLink="/books/rent"
      />
      
      {/* Why Choose Us Section */}
      <section className="py-14 bg-book-dark text-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-center mb-10">
            Why Choose BookNest?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Curated Selection",
                description: "Every book in our collection is carefully reviewed and categorized for quality and condition.",
              },
              {
                title: "Cost Effective",
                description: "Get more for less with pre-loved books at a fraction of retail prices, or rent them for even less.",
              },
              {
                title: "Eco-Friendly",
                description: "Give books a second life and reduce waste by participating in our book circulation ecosystem.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white/5 border border-white/10"
              >
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-book-light/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
