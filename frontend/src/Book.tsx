import { FC } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { BookData, ReviewData } from './LibraryData';
import { gray1, gray2, gray3, gray4, gray5 } from './Styles';
import { Link } from 'react-router-dom';

interface Props {
  data: BookData;
  showContent?: boolean;
}

export const extractAuthors = (
  author: string,
  index: number,
  authors: string[],
): string =>
  author +
  (index < authors.length - 1
    ? index < authors.length - 2
      ? ', '
      : ' and '
    : '');

const getSubstring = (content: string, maxCharacters: number): string => {
  // Returns the substring in a way that the words will not be cut in the middle
  // It will return the previous word of content[maxCharacters]
  while (
    maxCharacters < content.length &&
    '\n\t '.includes(content[maxCharacters]) === false &&
    maxCharacters < content.length
  ) {
    --maxCharacters;
  }
  while (
    maxCharacters < content.length &&
    (content[maxCharacters] === ' ' ||
      content[maxCharacters] === '\t' ||
      content[maxCharacters] === '\n')
  ) {
    --maxCharacters;
  }
  console.log(content.substring(0, maxCharacters), content[maxCharacters]);
  return content.substring(0, maxCharacters + 1);
};

export const getAverageRating = (reviews: ReviewData[]): number => {
  let sum = 0;
  reviews.forEach((review) => {
    sum += review.review;
  });
  return sum / reviews.length;
};

export const Book: FC<Props> = ({ data, showContent = true }) => (
  <Link
    to={`/books/${data.bookId}`}
    css={css`
      text-decoration: none;
    `}
  >
    <div
      css={css`
        padding: 10px 0px;
      `}
    >
      <div
        css={css`
          padding: 10px 0px;
          padding-bottom: 2px;
          font-size: 19px;
          color: black;
        `}
      >
        {data.title}
      </div>
      <div
        css={css`
          font-style: italic;
          color: ${gray3};
          padding: 5px 0 10px 0;
          font-size: 14px;
          color: ${gray3};
          text-align: left;
        `}
      >
        By:{' '}
        <span
          css={css`
            color: ${gray2};
            font-weight: bold; ;
          `}
        >
          {data.authors.map(extractAuthors)}{' '}
        </span>
      </div>
      {!data.sinopse && (
        <div
          css={css`
            text-decoration: none;
            color: ${gray1};
            font-size: 15px;
            padding: 10px 0 7px 0;
            border-bottom: 1px solid ${gray5};
          `}
        >
          No desctiption available{' '}
        </div>
      )}
      {data.sinopse && (
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
          {data.sinopse.length > 50
            ? `${getSubstring(data.sinopse, 150)}...`
            : data.sinopse}
        </div>
      )}
      <div
        css={css`
          font-size: 12px;
          color: ${gray2};
        `}
      >
        Rating:
        {data.reviews.length > 0 ? (
          <span> {getAverageRating(data.reviews)} </span>
        ) : (
          <span> No reviews</span>
        )}
      </div>
    </div>
  </Link>
);
