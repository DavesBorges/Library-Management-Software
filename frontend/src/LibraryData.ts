export interface BookData {
  bookId: number;
  title: string;
  authors: string[];
  sinopse?: string;
  copyrightDate: number;
  isbn: string;
  language: string;
  genre: string[];
  isInLibrary: boolean;
  isCheckedOut?: boolean;
  clientWhoHas?: UserData;
  reviews: ReviewData[];
}

export interface ReviewData {
  reviewId: number;
  content: string;
  review: number;
  userName: string;
  created: Date;
}

export interface UserData {
  name: string;
  cardNumber: number;
  fees: number;
}

export interface TransactionData {
  book: BookData;
  user: UserData;
  checkOutTime: Date;
  returnDate: Date;
  returned: boolean;
}

const books: BookData[] = [
  {
    bookId: 1,
    title: 'The C Programming Language',
    sinopse:
      'This second editon describes C as defined by the ANSI standard. This book is meant to help the reader learn how to program in C. The book assumes some familiarity with basic programming concepts like variables, assignment statements, loops, and functions. A novice programmer should be able to read along and pick up the language.',
    authors: ['Brian Wilson Kernighan', 'Dennis MacAlistair Ritchie'],
    copyrightDate: 1988,
    isbn: '0131103709',
    language: 'english',
    genre: ['Technical', 'Computer Programming'],
    isInLibrary: true,
    isCheckedOut: true,
    reviews: [
      {
        reviewId: 1,
        content: 'Good reference book',
        review: 4,
        userName: 'Eddie Brown',
        created: new Date(),
      },
    ],
  },
  {
    bookId: 2,
    title: 'Waiting for Godot',
    authors: ['Samuel Becket'],
    copyrightDate: 2000,
    language: 'english',
    genre: ['Drama'],
    isbn: '0571058086',
    isInLibrary: true,
    isCheckedOut: false,
    reviews: [],
  },
  {
    bookId: 3,
    title: 'IT',
    authors: ['Stephen King'],
    sinopse:
      'They were seven teenagers when they first stumbled upon the horror. Now they were grown-up men and women who had gone out into the big world to gain success and happiness. But none of them could withstand the force that drew them back to Derry, Maine to face the nightmare without an end and the evil without a name...',
    copyrightDate: 1987,
    language: 'english',
    genre: ['Thriller', 'Horror'],
    isbn: '0451149513',
    isInLibrary: false,
    reviews: [],
  },
];

const users: UserData[] = [
  {
    name: 'John Smith',
    cardNumber: 1455,
    fees: 40,
  },
  {
    name: 'Mary Anne',
    cardNumber: 1735,
    fees: 17.43,
  },
  {
    name: 'João Alberto',
    cardNumber: 2345,
    fees: 0,
  },
];

const transactions: TransactionData[] = [
  {
    book: books[0],
    user: users[1],
    checkOutTime: new Date(2021, 9, 1),
    returnDate: new Date(2021, 9, 29),
    returned: false,
  },
  {
    book: books[1],
    user: users[0],
    checkOutTime: new Date(2021, 9, 1),
    returnDate: new Date(2021, 9, 10),
    returned: true,
  },
  {
    book: books[1],
    user: users[0],
    checkOutTime: new Date(2021, 8, 25),
    returnDate: new Date(2021, 9, 1),
    returned: true,
  },
];

const wait = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
export const getAllBooks = async (): Promise<BookData[]> => {
  await wait(500);
  return books.filter((book) => book.copyrightDate !== 0);
};

export const getBook = async (bookId: number): Promise<BookData | null> => {
  await wait(500);
  let results = books.filter((book) => book.bookId === bookId);
  return results.length !== 0 ? results[0] : null;
};
