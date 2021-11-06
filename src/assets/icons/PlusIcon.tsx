// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";

/* eslint-disable-next-line react/display-name */
export const PlusIcon: VFC = memo(() => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" xmlSpace="preserve">
      <g transform="translate(-.3)">
        <circle cx="10.3" cy="10" r="10"/>
        <path d="m11.12 14.2-.07-3.46h3.4c.42 0 .84-.42.84-.84a.91.91 0 0 0-.85-.85h-3.4v-3.4a.91.91 0 0 0-.84-.85.91.91 0 0 0-.85.85v3.4h-3.4a.91.91 0 0 0-.84.85c0 .42.42.84.85.84h3.4v3.4c0 .42.42.85.84.85.5.07.85-.29.92-.78z" fill="#fff"/>
      </g>
    </svg>
  );
});
