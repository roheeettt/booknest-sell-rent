
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, Upload } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CreateListing = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    category: "",
    condition: "",
    price: "",
    forRent: false,
    rentalPrice: "",
    isbn: "",
    publishedYear: "",
    pages: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission process
    setTimeout(() => {
      setIsSubmitting(false);
      // Redirect to success page or back to sell books page
      navigate("/books/sell?success=true");
    }, 1500);
  };

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-serif font-medium mb-2">Create a Book Listing</h1>
        <p className="text-muted-foreground mb-8">Fill in the details about the book you want to sell or rent</p>

        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Book Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Book Title*</Label>
                  <Input 
                    id="title" 
                    name="title" 
                    value={formData.title} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="author">Author*</Label>
                  <Input 
                    id="author" 
                    name="author" 
                    value={formData.author} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="description">Description*</Label>
                  <Textarea 
                    id="description" 
                    name="description" 
                    rows={4} 
                    value={formData.description} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Category*</Label>
                  <Select 
                    name="category" 
                    onValueChange={(value) => handleSelectChange("category", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Fiction">Fiction</SelectItem>
                      <SelectItem value="Non-Fiction">Non-Fiction</SelectItem>
                      <SelectItem value="Children's">Children's</SelectItem>
                      <SelectItem value="Textbook">Textbook</SelectItem>
                      <SelectItem value="Reference">Reference</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="condition">Condition*</Label>
                  <Select 
                    name="condition" 
                    onValueChange={(value) => handleSelectChange("condition", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="like-new">Like New</SelectItem>
                      <SelectItem value="very-good">Very Good</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="acceptable">Acceptable</SelectItem>
                      <SelectItem value="poor">Poor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="price">Selling Price ($)*</Label>
                  <Input 
                    id="price" 
                    name="price" 
                    type="number" 
                    min="0.01" 
                    step="0.01" 
                    value={formData.price} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                
                <div className="space-y-2 flex items-center">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="forRent"
                      name="forRent"
                      checked={formData.forRent}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 rounded border-gray-300 text-book-accent1 focus:ring-book-accent1"
                    />
                    <Label htmlFor="forRent" className="cursor-pointer">Also available for rent</Label>
                  </div>
                  
                  {formData.forRent && (
                    <div className="ml-6 space-y-2">
                      <Label htmlFor="rentalPrice">Rental Price ($)*</Label>
                      <Input 
                        id="rentalPrice" 
                        name="rentalPrice" 
                        type="number" 
                        min="0.01" 
                        step="0.01" 
                        value={formData.rentalPrice} 
                        onChange={handleInputChange} 
                        required={formData.forRent} 
                        className="w-full"
                      />
                    </div>
                  )}
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <Label>Book Cover Photo*</Label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md border-gray-300">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-book-accent1 hover:text-book-accent1/90 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        PNG, JPG, GIF up to 5MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="isbn">ISBN (Optional)</Label>
                    <Input 
                      id="isbn" 
                      name="isbn" 
                      value={formData.isbn} 
                      onChange={handleInputChange} 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="publishedYear">Year Published (Optional)</Label>
                    <Input 
                      id="publishedYear" 
                      name="publishedYear" 
                      type="number" 
                      min="1800" 
                      max={new Date().getFullYear()} 
                      value={formData.publishedYear} 
                      onChange={handleInputChange} 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="pages">Number of Pages (Optional)</Label>
                    <Input 
                      id="pages" 
                      name="pages" 
                      type="number" 
                      min="1" 
                      value={formData.pages} 
                      onChange={handleInputChange} 
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-4 pt-4">
                <Button type="button" variant="outline" onClick={() => navigate("/books/sell")}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-book-accent1 hover:bg-book-accent1/90" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Create Listing"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CreateListing;
