// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";

/* eslint-disable-next-line react/display-name */
export const AlertWarningIcon: VFC = memo(() => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 27.4'>
      <path d='M15 19.3c-.9 0-1.6.7-1.6 1.5 0 .9.7 1.6 1.5 1.6h.1c.9 0 1.5-.7 1.5-1.6 0-.8-.7-1.5-1.5-1.5z' />
      <path d='M29.3 24.7c1-1.6 1-3.7 0-5.3L19.6 2.7a5.38 5.38 0 00-7.3-2c-.8.5-1.5 1.2-2 2L.7 19.4a5.3 5.3 0 002 7.3c.8.5 1.7.7 2.7.7h19.3c1.8 0 3.6-1 4.6-2.7zm-2.1-1.2c-.5.9-1.5 1.5-2.5 1.5H5.3c-1 0-2-.5-2.5-1.4a3 3 0 010-2.9L12.5 4a2.94 2.94 0 015.1 0l9.7 16.7c.4.8.4 1.9-.1 2.8z' />
      <path d='M14.6 8.4c-.7.2-1.2.9-1.2 1.7 0 .5.1 1 .1 1.5l.3 5.5c0 .6.5 1.1 1.2 1.1.6 0 1.1-.5 1.2-1.1V16c.1-1.2.1-2.4.2-3.6 0-.8.1-1.5.1-2.3 0-.3 0-.5-.1-.8-.3-.7-1.1-1-1.8-.9z' />
    </svg>
  );
});
