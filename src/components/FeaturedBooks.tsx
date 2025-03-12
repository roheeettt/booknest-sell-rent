
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Book } from "@/lib/types";
import BookCard from "./BookCard";

interface FeaturedBooksProps {
  title: string;
  books: Book[];
  viewAllLink?: string;
}

const FeaturedBooks = ({ title, books, viewAllLink }: FeaturedBooksProps) => {
  return (
    <section className="py-8">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-serif font-medium">{title}</h2>
          {viewAllLink && (
            <Link 
              to={viewAllLink} 
              className="text-book-accent1 flex items-center hover:underline"
            >
              View all <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          )}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {books.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
