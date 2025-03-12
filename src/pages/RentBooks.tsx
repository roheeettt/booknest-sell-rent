
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import BookCard from "@/components/BookCard";
import { books } from "@/lib/data";
import { Link } from "react-router-dom";

const RentBooks = () => {
  // Filter books that are available for rent
  const rentableBooks = books.filter(book => book.isForRent);
  
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-serif font-medium mb-2">
          Rent Books
        </h1>
        <p className="text-muted-foreground mb-8">
          Enjoy your favorite reads without the commitment of purchasing
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {[
            {
              title: "Affordable Access",
              description: "Rent books at a fraction of the purchase price, perfect for students and avid readers."
            },
            {
              title: "Flexible Duration",
              description: "Choose rental periods that fit your needs, from a few weeks to several months."
            },
            {
              title: "Quality Guaranteed",
              description: "All rental books are verified to be in good condition or better."
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border bg-white book-card-shadow"
            >
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-serif font-medium mb-6">
            Available for Rent
          </h2>
          
          {rentableBooks.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {rentableBooks.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-book-aged rounded-lg">
              <p className="text-lg mb-4">No books currently available for rent</p>
              <Button asChild>
                <Link to="/books">Browse All Books</Link>
              </Button>
            </div>
          )}
        </div>
        
        <div className="bg-book-dark text-white rounded-lg p-8 mt-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-medium mb-4">How Renting Works</h2>
            <p className="mb-6">
              Renting books with BookNest is simple and hassle-free. Browse our collection, select your rental period, and enjoy your books. Return them when you're done or extend your rental if you need more time.
            </p>
            <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
              <Link to="/how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RentBooks;
