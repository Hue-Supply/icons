import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCassette = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M11 8h2M6.8 19.5h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 17.22 22 16.38 22 14.7V9.3c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 4.5 18.88 4.5 17.2 4.5H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 6.78 2 7.62 2 9.3v5.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.642.327 1.482.327 3.162.327M10 13a2 2 0 1 0-4 0 2 2 0 0 0 4 0m8 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
    />
  </svg>
);
export default SvgCassette;
