import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLayout08 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 9v6m0-6h9m-9 0H3m9 6h9m-9 0H3m9 0v6m0 0h4.2c1.68 0 2.521 0 3.163-.327a3 3 0 0 0 1.31-1.311c.328-.642.328-1.482.328-3.162V15m-9 6H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2L3 15m18 0V9M3 15V9m18 0V7.8c0-1.68 0-2.52-.326-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8V9"
    />
  </svg>
);
export default SvgLayout08;
