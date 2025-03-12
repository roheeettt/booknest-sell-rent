
import React from "react";
import { Link } from "react-router-dom";
import { Book as BookIcon } from "lucide-react";
import { Book } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const { id, title, author, cover, price, rentalPrice, isForRent, isForSale, condition, listed } = book;
  
  const listingDate = new Date(listed);
  const timeAgo = formatDistanceToNow(listingDate, { addSuffix: true });
  
  const conditionMap = {
    "new": "New",
    "like-new": "Like New",
    "very-good": "Very Good",
    "good": "Good",
    "acceptable": "Acceptable",
    "poor": "Poor"
  };

  return (
    <Link to={`/books/${id}`}>
      <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 book-card-shadow h-full flex flex-col bg-white">
        <div className="relative pt-[120%] overflow-hidden bg-book-aged">
          {cover ? (
            <img 
              src={cover} 
              alt={title} 
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-book-light">
              <BookIcon className="h-16 w-16 text-book-dark/30" />
            </div>
          )}
          
          <div className="absolute top-2 right-2 flex flex-col gap-1">
            {isForSale && (
              <Badge className="bg-book-accent1 hover:bg-book-accent1/90">
                For Sale
              </Badge>
            )}
            {isForRent && (
              <Badge className="bg-book-accent2 hover:bg-book-accent2/90">
                For Rent
              </Badge>
            )}
          </div>
          
          <Badge className="absolute bottom-2 left-2 bg-black/70 hover:bg-black/70">
            {conditionMap[condition]}
          </Badge>
        </div>
        
        <CardContent className="flex flex-col flex-grow p-4">
          <h3 className="font-medium text-lg line-clamp-1 mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm mb-2">by {author}</p>
          
          <div className="mt-auto pt-3 flex items-baseline justify-between">
            <div>
              {isForSale && (
                <span className="font-medium text-book-dark mr-2">
                  ${price.toFixed(2)}
                </span>
              )}
              {isForRent && rentalPrice && (
                <span className="text-sm text-muted-foreground">
                  {isForSale ? "or " : ""}
                  ${rentalPrice.toFixed(2)}/mo
                </span>
              )}
            </div>
            <span className="text-xs text-muted-foreground">
              {timeAgo}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BookCard;
