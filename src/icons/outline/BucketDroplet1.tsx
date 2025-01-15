import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBucketDroplet1 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M13.99 19.635 7.346 13m6.646 6.635A4 4 0 0 0 21 17V6.2c-.001-1.12-.001-1.68-.219-2.108a2 2 0 0 0-.874-.874C19.48 3 18.92 3 17.8 3h-1.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C13 4.52 13 5.08 13 6.2v1.136m.99 12.3A3.99 3.99 0 0 1 13 17V7.336m0 0-1.08-1.073c-.792-.792-1.188-1.188-1.645-1.336a2 2 0 0 0-1.236 0c-.457.148-.853.544-1.645 1.336l-1.13 1.13c-.793.793-1.189 1.19-1.337 1.646a2 2 0 0 0 0 1.236c.149.457.545.853 1.338 1.645L7.345 13m9.648 8H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 19.48 3 18.92 3 17.8v-1.6c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 13 5.08 13 6.2 13h1.145M17 17l.009.005"
    />
  </svg>
);
export default SvgBucketDroplet1;
