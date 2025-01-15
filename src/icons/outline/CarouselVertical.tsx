import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCarouselVertical = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 2c0 .465 0 .697-.051.888a1.5 1.5 0 0 1-1.06 1.06C15.697 4 15.464 4 15 4H9c-.465 0-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C7 2.696 7 2.464 7 2m10 20c0-.465 0-.698-.051-.888a1.5 1.5 0 0 0-1.06-1.06C15.697 20 15.464 20 15 20H9c-.465 0-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C7 21.303 7 21.536 7 22m12-8.2v-3.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C17.48 7 16.92 7 15.8 7H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 8.52 5 9.08 5 10.2v3.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C6.52 17 7.08 17 8.2 17h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C19 15.48 19 14.92 19 13.8"
    />
  </svg>
);
export default SvgCarouselVertical;
