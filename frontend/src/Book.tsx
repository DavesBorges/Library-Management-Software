import { FC } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { BookData, ReviewData } from './LibraryData';
import { gray1, gray2, gray3 } from './Styles';

interface Props {
  data: BookData;
  showContent?: boolean;
}

const extractAuthors = (
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

const getAverageRating = (reviews: ReviewData[]): number => {
  let sum = 0;
  reviews.forEach((review) => {
    sum += review.review;
  });
  return sum / reviews.length;
};

export const Book: FC<Props> = ({ data, showContent = true }) => (
  <div
    css={css`
      padding: 10px 0px;
    `}
  >
    <div
      css={css`
        padding: 10px 0px;
        font-size: 19px;
      `}
    >
      {data.title}
    </div>
    <div
      css={css`
        font-size: 12px;
        font-style: italic;
        color: ${gray3};
        padding-bottom: 10px;
        font-size: 15px;
        color: ${gray2};
      `}
    >
      Author(s):{' '}
      <span
        css={css`
          color: ${gray2};
        `}
      >
        {data.authors.map(extractAuthors)}{' '}
      </span>
    </div>
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
);
