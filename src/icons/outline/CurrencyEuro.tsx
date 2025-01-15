import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCurrencyEuro = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M18.025 5.314c-1.371-1.165-3.109-1.86-5-1.86C8.593 3.453 5 7.28 5 12s3.593 8.547 8.025 8.547c1.891 0 3.629-.696 5-1.861M3 10h9m-9 4h9"
    />
  </svg>
);
export default SvgCurrencyEuro;
