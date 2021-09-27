/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React, { FC, Fragment, useEffect, useState } from 'react';
import { ReviewData } from './LibraryData';

interface Props {
  data: ReviewData;
}

export const Review: FC<Props> = ({ data }) => <div>{data.content}</div>;
