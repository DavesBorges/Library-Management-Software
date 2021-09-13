/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import user from './user.svg';

export const UserIcon = () => (
  <img
    css={css`
      width: 12px;
      opacity: 0.8;
    `}
    src={user}
    alt="User"
    width="12px"
  />
);
