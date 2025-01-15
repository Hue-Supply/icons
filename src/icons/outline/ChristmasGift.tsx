import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChristmasGift = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12 8v14m-8-7h16M7.8 22h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 19.72 21 18.88 21 17.2v-4.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 8 17.88 8 16.2 8H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 10.28 3 11.12 3 12.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22ZM11 8c1.5-1.167 2.56-4.206 4.5-5.5 3-2 6 1 3.5 4C17.5 8.3 13.167 8 11 8Zm1.931 0c-1.5-1.167-2.56-4.206-4.5-5.5-3-2-6 1-3.5 4 1.5 1.8 5.834 1.5 8 1.5Z"
    />
  </svg>
);
export default SvgChristmasGift;
