/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React, { FC, Fragment, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { extractAuthors, getAverageRating } from './Book';
import { BookData, getBook } from './LibraryData';
import { Page } from './Page';
import { ReviewList } from './ReviewList';
import { gray1, gray2, gray3, gray5, gray6 } from './Styles';

interface RouteParams {
  bookId: string;
}

export const BookPage: FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  let [book, setBook] = useState<BookData | null>(null);

  useEffect(() => {
    const doGetBook = async (bookId: number) => {
      const foundBook = await getBook(bookId);
      setBook(foundBook);
    };
    if (match.params.bookId) {
      const bookId = Number(match.params.bookId);
      doGetBook(bookId);
    }
  }, [match.params.bookId]);

  return (
    <Page>
      <div
        css={css`
          background-color: white;
          padding: 15px 20px 20px 20px;
          border-radius: 4px;
          border: 1px solid ${gray6};
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
        `}
      >
        {book && (
          <Fragment>
            <div
              css={css`
                font-weight: bold;
                color: ${gray1};
                font-size: 17px;
                padding: 10px 0 10px 15px;
              `}
            >
              {book.title}
            </div>
            <div
              css={css`
                font-style: italic;
                color: ${gray3};
                padding: 5px 0 10px 0;
                font-size: 14px;
                color: ${gray2};
                text-align: right;
              `}
            >
              By:{' '}
              <span
                css={css`
                  color: ${gray2};
                  font-weight: bolder;
                `}
              >
                {book.authors.map(extractAuthors)}{' '}
              </span>
            </div>
            {book.sinopse && (
              <div
                css={css`
                  text-decoration: none;
                  color: ${gray1};
                  font-size: 15px;
                  padding: 10px 0 7px 0;
                  border-bottom: 1px solid ${gray5};
                `}
              >
                <span
                  css={css`
                    font-weight: bold;
                  `}
                >
                  Description:
                </span>{' '}
                {book.sinopse}
              </div>
            )}
            {book.reviews.length && (
              <div
                css={css`
                  font-size: 12px;
                  color: ${gray2};
                  padding-bottom: bottom;
                `}
              >
                Rating:
                <Fragment>
                  <span> {getAverageRating(book.reviews)} </span>
                  <ReviewList data={book.reviews} />
                </Fragment>
              </div>
            )}
          </Fragment>
        )}
      </div>
    </Page>
  );
};
