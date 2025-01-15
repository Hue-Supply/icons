import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCodeLaptop = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M10 8 8.354 9.646a.5.5 0 0 0 0 .708L10 12m4-4 1.646 1.646a.5.5 0 0 1 0 .708L14 12m-9.333 8h14.666A2.667 2.667 0 0 0 22 17.333c0-.736-.597-1.333-1.333-1.333H3.333C2.597 16 2 16.597 2 17.333A2.667 2.667 0 0 0 4.667 20M21 16V7.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 4 18.92 4 17.8 4H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 5.52 3 6.08 3 7.2V16z"
    />
  </svg>
);
export default SvgCodeLaptop;
