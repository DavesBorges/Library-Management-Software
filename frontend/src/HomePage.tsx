/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useEffect, useState } from 'react';
import { BookList } from './BookList';
import { BookData, getAllBooks } from './LibraryData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { PrimaryButton } from './Styles';

export const HomePage = () => {
  const [books, setBooks] = useState<BookData[] | null>(null);
  const [booksLoading, setBooksLoading] = useState(true);
  useEffect(() => {
    const doGetAllBooks = async () => {
      const books = await getAllBooks();
      setBooks(books);
      setBooksLoading(false);
    };
    doGetAllBooks();
  }, []);

  const [count, setCount] = useState(0);

  const handleAddBookClick = () => {
    console.log('TODO - move to the Add Book page');
  };
  return (
    <Page>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <PageTitle>Books </PageTitle>
        <PrimaryButton onClick={handleAddBookClick}>Add a book</PrimaryButton>
      </div>
      {booksLoading ? (
        <div
          css={css`
            font-size: 16px;
            font-style: italic;
          `}
        >
          Loading...
        </div>
      ) : (
        <BookList data={books || []} />
      )}
    </Page>
  );
};
