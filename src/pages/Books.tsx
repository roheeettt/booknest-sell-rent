
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Layout from "@/components/Layout";
import BookCard from "@/components/BookCard";
import BookFilters from "@/components/BookFilters";
import { books, filterBooks } from "@/lib/data";
import { BookFilter } from "@/lib/types";

const Books = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  // Extract initial filters from URL
  const initialFilters: BookFilter = {
    category: queryParams.get("category") || undefined,
    genre: queryParams.get("genre") || undefined,
    ageGroup: queryParams.get("ageGroup") || undefined,
    condition: queryParams.get("condition") as BookFilter["condition"] || undefined,
    minPrice: queryParams.get("minPrice") ? Number(queryParams.get("minPrice")) : undefined,
    maxPrice: queryParams.get("maxPrice") ? Number(queryParams.get("maxPrice")) : undefined,
    forSale: queryParams.get("forSale") === "true" ? true : undefined,
    forRent: queryParams.get("forRent") === "true" ? true : undefined,
    search: queryParams.get("search") || undefined,
  };
  
  const [filters, setFilters] = useState<BookFilter>(initialFilters);
  const [searchInputValue, setSearchInputValue] = useState(initialFilters.search || "");
  const [filteredBooks, setFilteredBooks] = useState(books);
  
  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== "") {
        params.set(key, String(value));
      }
    });
    
    const newUrl = `${location.pathname}${params.toString() ? `?${params.toString()}` : ""}`;
    window.history.replaceState(null, "", newUrl);
    
    // Apply filters to books
    setFilteredBooks(filterBooks(books, filters));
  }, [filters, location.pathname]);
  
  const handleFilterChange = (newFilters: BookFilter) => {
    setFilters(newFilters);
  };
  
  const handleResetFilters = () => {
    setFilters({});
    setSearchInputValue("");
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters({ ...filters, search: searchInputValue });
  };
  
  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
          <div>
            <h1 className="text-3xl font-serif font-medium mb-2">
              Browse Books
            </h1>
            <p className="text-muted-foreground">
              {filteredBooks.length} {filteredBooks.length === 1 ? "book" : "books"} found
              {filters.search ? ` for "${filters.search}"` : ""}
            </p>
          </div>
          
          <form onSubmit={handleSearch} className="flex w-full md:w-auto">
            <Input
              type="search"
              placeholder="Search books..."
              value={searchInputValue}
              onChange={(e) => setSearchInputValue(e.target.value)}
              className="rounded-r-none"
            />
            <Button type="submit" className="rounded-l-none">
              Search
            </Button>
          </form>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop filters sidebar */}
          <div className="hidden lg:block w-64 shrink-0">
            <BookFilters 
              filters={filters}
              onFilterChange={handleFilterChange}
              onReset={handleResetFilters}
            />
          </div>
          
          {/* Mobile filters sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="lg:hidden mb-4">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[90vw] sm:w-[400px] p-6">
              <BookFilters 
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={handleResetFilters}
              />
            </SheetContent>
          </Sheet>
          
          {/* Book grid */}
          <div className="flex-1">
            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {filteredBooks.map(book => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg mb-2">No books found matching your filters</p>
                <Button variant="link" onClick={handleResetFilters}>
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Books;
