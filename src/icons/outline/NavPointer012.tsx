import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNavPointer012 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.685 8.9C3.665 6.566 3.155 5.4 3.381 4.684A2 2 0 0 1 4.685 3.38c.716-.227 1.882.284 4.214 1.304l7.65 3.347c1.328.58 1.991.87 2.237 1.308a1.5 1.5 0 0 1 .102 1.249c-.171.472-.779.866-1.994 1.655l-.676.438 1.98 1.653c.573.48.86.719 1.027.98a2 2 0 0 1 .09 1.994c-.143.276-.407.54-.936 1.07-.53.529-.794.793-1.07.936a2 2 0 0 1-1.993-.09c-.262-.166-.502-.454-.981-1.028l-1.653-1.98-.438.676c-.789 1.216-1.183 1.823-1.655 1.995a1.5 1.5 0 0 1-1.248-.102c-.438-.246-.728-.91-1.31-2.237z"
    />
  </svg>
);
export default SvgNavPointer012;
