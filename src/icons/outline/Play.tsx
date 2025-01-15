import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPlay = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4.74 9.418c0-2.957 0-4.436.615-5.242A3 3 0 0 1 7.59 3c1.013-.05 2.232.787 4.669 2.463l3.755 2.581c1.93 1.328 2.896 1.992 3.235 2.823a3 3 0 0 1 0 2.266c-.338.83-1.304 1.495-3.235 2.822l-3.755 2.582C9.822 20.212 8.603 21.05 7.59 21a3 3 0 0 1-2.235-1.177c-.616-.806-.616-2.284-.616-5.241z"
    />
  </svg>
);
export default SvgPlay;
