import { FC } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { BookData } from './LibraryData';
import { accent1, accent2, gray3, gray4, gray5 } from './Styles';
import { Book } from './Book';

interface Props {
  data: BookData[];
  render?: boolean;
}

export const BookList: FC<Props> = ({ data, render = true }) => {
  return (
    <ul
      css={css`
        list-style: none;
        margin: 10px 0 0 0;
        padding: 10px 10px;
        background-color: #f7f8fa;
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
              margin: 0px;
            }
            margin-top: 10px;
            padding: 0px 20px;
            background-color: #fff;
            border: 2px solid ${gray4};
            border-radius: 10px;
          `}
        >
          <Book data={book} />
        </li>
      ))}
    </ul>
  );
};
