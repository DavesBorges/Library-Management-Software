/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React, { FC, Fragment, useEffect, useState } from 'react';
import { ReviewData } from './LibraryData';
import { Review } from './Review';

interface Props {
  data: ReviewData[];
}

export const ReviewList: FC<Props> = ({ data }) => (
  <div>
    <div
      css={css`
        font-weight: bold;
        color: black;
        font-size: 13px;
      `}
    >
      Reviews
    </div>
    <ul
      css={css`
        list-style: none;
      `}
    >
      {data.map((review) => (
        <li key={review.reviewId}>
          {' '}
          <Review data={review} />
        </li>
      ))}
    </ul>
  </div>
);
