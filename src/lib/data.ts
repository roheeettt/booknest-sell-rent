
import { Book, BookFilter } from "./types";

export const books: Book[] = [
  {
    id: "1",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. Set in the mid-1930s in the small town of Maycomb, Alabama, the story centers around the Finch family: Scout, her brother Jem, and their father Atticus, a respected lawyer who defends a black man accused of raping a white woman.",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww",
    price: 8.99,
    rentalPrice: 2.99,
    isForRent: true,
    isForSale: true,
    condition: "good",
    category: "Fiction",
    genre: ["Classic", "Historical Fiction"],
    ageGroup: "Adult",
    publishedYear: 1960,
    isbn: "9780061120084",
    pages: 336,
    seller: {
      id: "u1",
      name: "BookLover42",
      rating: 4.8
    },
    listed: "2023-09-15T14:48:00.000Z"
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    description: "Winston Smith toes the Party line, rewriting history to satisfy the demands of the Ministry of Truth. With each lie he writes, Winston grows to hate the Party that seeks power for its own sake and persecutes those who dare to commit thoughtcrimes. But as he starts to think for himself, Winston can't escape the fact that Big Brother is always watching.",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww",
    price: 9.99,
    rentalPrice: 3.49,
    isForRent: true,
    isForSale: true,
    condition: "very-good",
    category: "Fiction",
    genre: ["Classic", "Dystopian", "Science Fiction"],
    ageGroup: "Adult",
    publishedYear: 1949,
    isbn: "9780451524935",
    pages: 328,
    seller: {
      id: "u2",
      name: "ClassicReads",
      rating: 4.9
    },
    listed: "2023-10-01T09:30:00.000Z"
  },
  {
    id: "3",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work 'her own darling child' and its vivacious heroine, Elizabeth Bennet, 'as delightful a creature as ever appeared in print.'",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D",
    price: 7.99,
    rentalPrice: 2.49,
    isForRent: true,
    isForSale: true,
    condition: "good",
    category: "Fiction",
    genre: ["Classic", "Romance"],
    ageGroup: "Adult",
    publishedYear: 1813,
    isbn: "9780141439518",
    pages: 432,
    seller: {
      id: "u3",
      name: "JanesFan",
      rating: 4.7
    },
    listed: "2023-09-22T16:15:00.000Z"
  },
  {
    id: "4",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    description: "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry.",
    cover: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fHww",
    price: 10.99,
    rentalPrice: 3.99,
    isForRent: true,
    isForSale: true,
    condition: "like-new",
    category: "Fiction",
    genre: ["Fantasy", "Young Adult"],
    ageGroup: "Children",
    publishedYear: 1997,
    isbn: "9780747532743",
    pages: 223,
    seller: {
      id: "u4",
      name: "MagicBooks",
      rating: 4.9
    },
    listed: "2023-11-05T11:20:00.000Z"
  },
  {
    id: "5",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story is of the fabulously wealthy Jay Gatsby and his new love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted 'gin was the national drink and sex the national obsession.'",
    cover: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JlYXQlMjBnYXRzYnl8ZW58MHx8MHx8fDA%3D",
    price: 6.99,
    rentalPrice: 2.49,
    isForRent: true,
    isForSale: true,
    condition: "good",
    category: "Fiction",
    genre: ["Classic", "Literary Fiction"],
    ageGroup: "Adult",
    publishedYear: 1925,
    isbn: "9780743273565",
    pages: 180,
    seller: {
      id: "u5",
      name: "VintageReads",
      rating: 4.6
    },
    listed: "2023-08-28T15:45:00.000Z"
  },
  {
    id: "6",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description: "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon.",
    cover: "https://images.unsplash.com/photo-1599940824399-b87987ceb969?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9iYml0fGVufDB8fDB8fHww",
    price: 12.99,
    rentalPrice: 3.99,
    isForRent: true,
    isForSale: true,
    condition: "very-good",
    category: "Fiction",
    genre: ["Fantasy", "Adventure"],
    ageGroup: "Young Adult",
    publishedYear: 1937,
    isbn: "9780547928227",
    pages: 366,
    seller: {
      id: "u6",
      name: "MiddleEarthFan",
      rating: 4.8
    },
    listed: "2023-10-15T13:10:00.000Z"
  },
  {
    id: "7",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    description: "In Sapiens, Dr. Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural, and Scientific Revolutions. Drawing on insights from biology, anthropology, paleontology, and economics, he explores how the currents of history have shaped our human societies, the animals and plants around us, and even our personalities.",
    cover: "https://images.unsplash.com/photo-1511108690759-009324a90311?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D",
    price: 14.99,
    rentalPrice: 4.99,
    isForRent: true,
    isForSale: true,
    condition: "like-new",
    category: "Non-Fiction",
    genre: ["History", "Science", "Anthropology"],
    ageGroup: "Adult",
    publishedYear: 2014,
    isbn: "9780062316097",
    pages: 464,
    seller: {
      id: "u7",
      name: "ThoughtfulReader",
      rating: 4.9
    },
    listed: "2023-11-10T09:25:00.000Z"
  },
  {
    id: "8",
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    description: "The Very Hungry Caterpillar follows the ravenous caterpillar's path as he eats his way through one apple on Monday, two pears on Tuesday, three plums on Wednesday, and so on. Strikingly bold, colorful pictures and a simple text let early readers 'read along' with the story.",
    cover: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JlYXQlMjBnYXRzYnl8ZW58MHx8MHx8fDA%3D",
    price: 5.99,
    rentalPrice: 1.99,
    isForRent: true,
    isForSale: true,
    condition: "good",
    category: "Children's",
    genre: ["Picture Book", "Educational"],
    ageGroup: "Children",
    publishedYear: 1969,
    isbn: "9780399226908",
    pages: 26,
    seller: {
      id: "u8",
      name: "KidsBookCorner",
      rating: 4.7
    },
    listed: "2023-09-05T14:30:00.000Z"
  },
  {
    id: "9",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    description: "This internationally acclaimed textbook provides a comprehensive introduction to the modern study of computer algorithms. It covers a broad range of algorithms in depth, yet makes their design and analysis accessible to all levels of readers. Each chapter is relatively self-contained and presents an algorithm, a design technique, an application area, or a related topic.",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D",
    price: 79.99,
    rentalPrice: 24.99,
    isForRent: true,
    isForSale: false,
    condition: "good",
    category: "Textbook",
    genre: ["Computer Science", "Educational"],
    ageGroup: "Adult",
    publishedYear: 2009,
    isbn: "9780262033848",
    pages: 1312,
    seller: {
      id: "u9",
      name: "TechTextbooks",
      rating: 4.6
    },
    listed: "2023-08-20T10:15:00.000Z"
  },
  {
    id: "10",
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "Paulo Coelho's masterpiece tells the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found. The story of the treasures Santiago finds along the way teaches us, as only a few stories can, about the essential wisdom of listening to our hearts, recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, following our dreams.",
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWxjaGVtaXN0fGVufDB8fDB8fHww",
    price: 8.99,
    rentalPrice: 2.99,
    isForRent: true,
    isForSale: true,
    condition: "very-good",
    category: "Fiction",
    genre: ["Philosophical", "Inspirational"],
    ageGroup: "Adult",
    publishedYear: 1988,
    isbn: "9780062315007",
    pages: 208,
    seller: {
      id: "u10",
      name: "InspiringReads",
      rating: 4.8
    },
    listed: "2023-10-25T16:40:00.000Z"
  },
  {
    id: "11",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    description: "In the international bestseller, Thinking, Fast and Slow, Daniel Kahneman, the renowned psychologist and winner of the Nobel Prize in Economics, takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    cover: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww",
    price: 15.99,
    rentalPrice: 4.99,
    isForRent: true,
    isForSale: true,
    condition: "like-new",
    category: "Non-Fiction",
    genre: ["Psychology", "Science", "Economics"],
    ageGroup: "Adult",
    publishedYear: 2011,
    isbn: "9780374533557",
    pages: 499,
    seller: {
      id: "u11",
      name: "BrainBooks",
      rating: 4.9
    },
    listed: "2023-11-15T13:45:00.000Z"
  },
  {
    id: "12",
    title: "Educated: A Memoir",
    author: "Tara Westover",
    description: "Born to survivalists in the mountains of Idaho, Tara Westover was seventeen the first time she set foot in a classroom. Her family was so isolated from mainstream society that there was no one to ensure the children received an education, and no one to intervene when one of Tara's older brothers became violent. When another brother got himself into college, Tara decided to try a new kind of life.",
    cover: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D",
    price: 12.99,
    rentalPrice: 3.99,
    isForRent: true,
    isForSale: true,
    condition: "very-good",
    category: "Non-Fiction",
    genre: ["Memoir", "Biography"],
    ageGroup: "Adult",
    publishedYear: 2018,
    isbn: "9780399590504",
    pages: 334,
    seller: {
      id: "u12",
      name: "TrueStoriesShop",
      rating: 4.7
    },
    listed: "2023-10-05T11:30:00.000Z"
  }
];

// Categories
export const categories = [
  "Fiction",
  "Non-Fiction",
  "Children's",
  "Textbook",
  "Reference",
  "Poetry"
];

// Genres
export const genres = [
  "Classic",
  "Science Fiction",
  "Fantasy",
  "Mystery",
  "Romance",
  "Thriller",
  "Horror",
  "Historical Fiction",
  "Biography",
  "Memoir",
  "Self-Help",
  "Business",
  "Science",
  "History",
  "Philosophy",
  "Psychology",
  "Poetry",
  "Adventure",
  "Young Adult",
  "Dystopian",
  "Picture Book",
  "Educational",
  "Philosophical",
  "Inspirational",
  "Computer Science",
  "Anthropology",
  "Economics",
  "Literary Fiction"
];

// Age Groups
export const ageGroups = [
  "Children",
  "Young Adult",
  "Adult"
];

// Conditions
export const conditions = [
  { value: "new", label: "New" },
  { value: "like-new", label: "Like New" },
  { value: "very-good", label: "Very Good" },
  { value: "good", label: "Good" },
  { value: "acceptable", label: "Acceptable" },
  { value: "poor", label: "Poor" }
];

// Helper function to filter books
export const filterBooks = (books: Book[], filters: BookFilter) => {
  return books.filter(book => {
    // Filter by category
    if (filters.category && book.category !== filters.category) {
      return false;
    }
    
    // Filter by genre (if the book has at least one of the filtered genres)
    if (filters.genre && !book.genre.includes(filters.genre)) {
      return false;
    }
    
    // Filter by age group
    if (filters.ageGroup && book.ageGroup !== filters.ageGroup) {
      return false;
    }
    
    // Filter by condition
    if (filters.condition && book.condition !== filters.condition) {
      return false;
    }
    
    // Filter by price range
    if (typeof filters.minPrice === 'number' && book.price < filters.minPrice) {
      return false;
    }
    if (typeof filters.maxPrice === 'number' && book.price > filters.maxPrice) {
      return false;
    }
    
    // Filter by sale availability
    if (typeof filters.forSale === 'boolean' && book.isForSale !== filters.forSale) {
      return false;
    }
    
    // Filter by rental availability
    if (typeof filters.forRent === 'boolean' && book.isForRent !== filters.forRent) {
      return false;
    }
    
    // Filter by search text (in title, author, description)
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      return (
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.description.toLowerCase().includes(searchTerm)
      );
    }
    
    return true;
  });
};
