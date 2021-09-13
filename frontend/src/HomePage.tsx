/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { BookList } from './BookList';
import { getAllBooks } from './LibraryData';
import { PrimaryButton } from './Styles';
export const HomePage = () => (
  <div
    css={css`
      margin: 50px auto 20px auto;
      padding: 30px 20px;
      max-width: 600px;
    `}
  >
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
      `}
    >
      <h2
        css={css`
          font-size: 15px;
          font-weight: bold;
          margin: 10px 0px 5px;
          text-align: center;
          text-transform: uppercase;
        `}
      >
        Books
      </h2>
      <PrimaryButton>Add a book</PrimaryButton>
    </div>
    <BookList data={getAllBooks()} />
  </div>
);
