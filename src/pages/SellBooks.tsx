
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Check, DollarSign, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const SellBooks = () => {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-serif font-medium mb-2">
          Sell Your Books
        </h1>
        <p className="text-muted-foreground mb-8">
          Turn your pre-loved books into cash or store credit
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-serif font-medium mb-4">
                Why Sell With Us?
              </h2>
              <ul className="space-y-4">
                {[
                  "Reach a community of eager book lovers",
                  "Set your own prices for items you list",
                  "Choose between selling or renting your books",
                  "Easy and streamlined listing process",
                  "Secure payment processing",
                  "Dedicated customer support team"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-book-accent2 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-serif font-medium mb-4">
                How It Works
              </h2>
              <ol className="space-y-6">
                {[
                  {
                    title: "Create Your Listing",
                    description: "Take photos of your books and fill in details about title, author, condition, and price.",
                    icon: Calendar
                  },
                  {
                    title: "Get Paid",
                    description: "When someone purchases your book, you'll receive payment directly to your account.",
                    icon: DollarSign
                  },
                  {
                    title: "Ship the Book",
                    description: "Pack and ship the book to its new owner using our shipping label system.",
                    icon: Truck
                  }
                ].map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="rounded-full bg-book-accent2/10 text-book-accent2 h-8 w-8 flex items-center justify-center shrink-0 mt-0.5">
                      <step.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-book-dark text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-serif font-medium mb-4">Ready to List Your Books?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Join thousands of sellers who have successfully found new homes for their pre-loved books. Create your first listing today and start earning!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-book-accent1 hover:bg-book-accent1/90">
              Create a Listing
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link to="/faq">Read FAQ</Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-medium mb-6 text-center">
            Seller Testimonials
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "I've sold over 50 books through BookNest. The process is simple and the community is amazing!",
                author: "Sarah T."
              },
              {
                quote: "BookNest helped me clear out my overflowing bookshelves and earn some extra cash in the process.",
                author: "Michael R."
              },
              {
                quote: "As a college student, I was able to recover a significant portion of what I spent on textbooks. Highly recommend!",
                author: "Jessica K."
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-book-paper border book-card-shadow"
              >
                <p className="italic mb-4">{testimonial.quote}</p>
                <p className="font-medium">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SellBooks;
