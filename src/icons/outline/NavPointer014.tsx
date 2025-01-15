import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNavPointer014 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9 2v2M2 9h2m.05-4.95 1.415 1.415M4.051 13.95l1.414-1.414m7.07-7.072L13.95 4.05m.523 6.348L18.59 12.2c1.08.473 1.62.709 1.865 1.087.214.33.29.732.211 1.117-.09.441-.507.858-1.341 1.692l-.199.199.466.466c.33.328.494.493.592.664a1.5 1.5 0 0 1 0 1.5c-.098.171-.263.335-.591.664-.33.329-.494.493-.665.592a1.5 1.5 0 0 1-1.5 0c-.17-.099-.335-.263-.664-.592l-.466-.466-.342.342c-.834.834-1.25 1.25-1.692 1.341a1.5 1.5 0 0 1-1.117-.21c-.378-.246-.614-.786-1.087-1.866l-1.8-4.116c-1.021-2.332-1.531-3.498-1.305-4.215a2 2 0 0 1 1.304-1.304c.717-.226 1.883.284 4.214 1.304"
    />
  </svg>
);
export default SvgNavPointer014;
