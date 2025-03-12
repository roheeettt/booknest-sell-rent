
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, BookOpen, Tag, Star, BookMarked, User, Calendar } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import { books } from "@/lib/data";
import FeaturedBooks from "@/components/FeaturedBooks";

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const book = books.find(book => book.id === id);
  
  // Get similar books based on genre (limit to 5)
  const similarBooks = book
    ? books
        .filter(b => 
          b.id !== book.id && 
          b.genre.some(g => book.genre.includes(g))
        )
        .slice(0, 5)
    : [];
  
  if (!book) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-medium mb-4">Book not found</h1>
          <p className="mb-6">The book you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/books">Browse Books</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const conditionMap = {
    "new": "New",
    "like-new": "Like New",
    "very-good": "Very Good",
    "good": "Good",
    "acceptable": "Acceptable",
    "poor": "Poor"
  };
  
  const handleAddToCart = () => {
    toast.success(`${book.title} added to your cart!`);
  };
  
  const handleRentBook = () => {
    toast.success(`${book.title} added to your cart as a rental!`);
  };
  
  const handleContactSeller = () => {
    toast.success(`Message sent to ${book.seller.name}!`);
  };
  
  return (
    <Layout>
      <div className="container py-8">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="md:col-span-1">
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-book-aged book-card-shadow">
              {book.cover ? (
                <img 
                  src={book.cover} 
                  alt={book.title} 
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-book-light">
                  <BookOpen className="h-16 w-16 text-book-dark/30" />
                </div>
              )}
            </div>
            
            <div className="mt-6 space-y-4">
              {book.isForSale && (
                <Button className="w-full" onClick={handleAddToCart}>
                  Buy for ${book.price.toFixed(2)}
                </Button>
              )}
              
              {book.isForRent && book.rentalPrice && (
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={handleRentBook}
                >
                  Rent for ${book.rentalPrice.toFixed(2)}/month
                </Button>
              )}
              
              <Button 
                variant="secondary" 
                className="w-full"
                onClick={handleContactSeller}
              >
                Contact Seller
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h1 className="text-3xl font-serif font-medium mb-2">{book.title}</h1>
            <p className="text-xl text-muted-foreground mb-4">by {book.author}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {book.isForSale && (
                <Badge className="bg-book-accent1 hover:bg-book-accent1/90">
                  For Sale
                </Badge>
              )}
              {book.isForRent && (
                <Badge className="bg-book-accent2 hover:bg-book-accent2/90">
                  For Rent
                </Badge>
              )}
              <Badge variant="outline">
                {conditionMap[book.condition]}
              </Badge>
            </div>
            
            <Separator className="my-6" />
            
            <div className="prose max-w-none mb-8">
              <h2 className="text-xl font-medium mb-4">Description</h2>
              <p>{book.description}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-8">
              <div className="flex items-center gap-2">
                <BookMarked className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">
                  <span className="text-muted-foreground">Category:</span>{" "}
                  <Link to={`/books?category=${book.category}`} className="hover:underline">
                    {book.category}
                  </Link>
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <Tag className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">
                  <span className="text-muted-foreground">Genre:</span>{" "}
                  <span>
                    {book.genre.map((g, i) => (
                      <React.Fragment key={g}>
                        <Link to={`/books?genre=${g}`} className="hover:underline">
                          {g}
                        </Link>
                        {i < book.genre.length - 1 ? ", " : ""}
                      </React.Fragment>
                    ))}
                  </span>
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">
                  <span className="text-muted-foreground">Age Group:</span>{" "}
                  <Link to={`/books?ageGroup=${book.ageGroup}`} className="hover:underline">
                    {book.ageGroup}
                  </Link>
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">
                  <span className="text-muted-foreground">Published:</span>{" "}
                  {book.publishedYear}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">
                  <span className="text-muted-foreground">Seller:</span>{" "}
                  {book.seller.name} ({book.seller.rating} ⭐)
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">
                  <span className="text-muted-foreground">Listed:</span>{" "}
                  {format(new Date(book.listed), "MMM d, yyyy")}
                </span>
              </div>
            </div>
            
            <div className="p-4 bg-book-aged rounded-lg mb-8">
              <h3 className="font-medium mb-2">Book Details</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-muted-foreground">ISBN:</span>{" "}
                  {book.isbn}
                </div>
                <div>
                  <span className="text-muted-foreground">Pages:</span>{" "}
                  {book.pages}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {similarBooks.length > 0 && (
        <div className="bg-book-aged py-8">
          <FeaturedBooks 
            title="Similar Books You Might Like" 
            books={similarBooks}
          />
        </div>
      )}
    </Layout>
  );
};

export default BookDetail;
