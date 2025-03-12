
import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { BookFilter } from "@/lib/types";
import { categories, genres, ageGroups, conditions } from "@/lib/data";

interface BookFiltersProps {
  filters: BookFilter;
  onFilterChange: (filters: BookFilter) => void;
  onReset: () => void;
}

const BookFilters = ({ filters, onFilterChange, onReset }: BookFiltersProps) => {
  const handleCategoryChange = (value: string) => {
    onFilterChange({ ...filters, category: value });
  };

  const handleGenreChange = (value: string) => {
    onFilterChange({ ...filters, genre: value });
  };

  const handleAgeGroupChange = (value: string) => {
    onFilterChange({ ...filters, ageGroup: value });
  };

  const handleConditionChange = (value: string) => {
    onFilterChange({ ...filters, condition: value as BookFilter["condition"] });
  };

  const handlePriceChange = (values: number[]) => {
    onFilterChange({ 
      ...filters, 
      minPrice: values[0], 
      maxPrice: values[0] === 0 && values[1] === 100 ? undefined : values[1] 
    });
  };

  const handleAvailabilityChange = (type: "forSale" | "forRent", checked: boolean) => {
    onFilterChange({ ...filters, [type]: checked });
  };

  const activeFiltersCount = Object.values(filters).filter(value => 
    value !== undefined && value !== "" && value !== false
  ).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Filters</h3>
        {activeFiltersCount > 0 && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onReset}
            className="text-xs h-8"
          >
            Clear all <X className="ml-1 h-3 w-3" />
          </Button>
        )}
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select value={filters.category || ""} onValueChange={handleCategoryChange}>
            <SelectTrigger id="category">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="genre">Genre</Label>
          <Select value={filters.genre || ""} onValueChange={handleGenreChange}>
            <SelectTrigger id="genre">
              <SelectValue placeholder="All Genres" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Genres</SelectItem>
              {genres.map(genre => (
                <SelectItem key={genre} value={genre}>
                  {genre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="ageGroup">Age Group</Label>
          <Select value={filters.ageGroup || ""} onValueChange={handleAgeGroupChange}>
            <SelectTrigger id="ageGroup">
              <SelectValue placeholder="All Age Groups" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Age Groups</SelectItem>
              {ageGroups.map(ageGroup => (
                <SelectItem key={ageGroup} value={ageGroup}>
                  {ageGroup}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="condition">Condition</Label>
          <Select value={filters.condition || ""} onValueChange={handleConditionChange}>
            <SelectTrigger id="condition">
              <SelectValue placeholder="Any Condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any Condition</SelectItem>
              {conditions.map(condition => (
                <SelectItem key={condition.value} value={condition.value}>
                  {condition.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="price-range">Price Range</Label>
            <span className="text-sm text-muted-foreground">
              ${filters.minPrice || 0} - ${filters.maxPrice || 100}
            </span>
          </div>
          <Slider
            id="price-range"
            defaultValue={[filters.minPrice || 0, filters.maxPrice || 100]}
            max={100}
            step={1}
            onValueChange={handlePriceChange}
            className="py-4"
          />
        </div>
        
        <div className="space-y-3">
          <Label>Availability</Label>
          
          <div className="flex items-center justify-between">
            <Label htmlFor="for-sale" className="text-sm font-normal">
              For Sale
            </Label>
            <Switch
              id="for-sale"
              checked={filters.forSale || false}
              onCheckedChange={(checked) => handleAvailabilityChange("forSale", checked)}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <Label htmlFor="for-rent" className="text-sm font-normal">
              For Rent
            </Label>
            <Switch
              id="for-rent"
              checked={filters.forRent || false}
              onCheckedChange={(checked) => handleAvailabilityChange("forRent", checked)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookFilters;
