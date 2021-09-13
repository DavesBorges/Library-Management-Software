import { FC } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { BookData } from './LibraryData';
import { accent1, accent2, gray5 } from './Styles';
import { Book } from './Book';

interface Props {
  data: BookData[];
}

export const BookList: FC<Props> = ({ data }) => (
  <ul
    css={css`
      list-style: none;
      margin: 10px 0 0 0;
      padding: 0px 20px;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-top: 3px solid ${accent2};
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
    `}
  >
    {data.map((book) => (
      <li
        key={book.bookId}
        css={css`
          border-top: 1px solid ${gray5};
          :first-of-type {
            border-top: none;
          }
        `}
      >
        <Book data={book} />
      </li>
    ))}
  </ul>
);
