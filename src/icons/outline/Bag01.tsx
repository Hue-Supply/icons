import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBag01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9 11.5v10m6-10v10M11 7h2m5 4.5V7.3c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C15.72 2.5 14.88 2.5 13.2 2.5h-2.4c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C6 4.78 6 5.62 6 7.3v4.2zm-9.2 10h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 19.22 20 18.38 20 16.7v-.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 11.5 16.88 11.5 15.2 11.5H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 13.78 4 14.62 4 16.3v.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.642.327 1.482.327 3.162.327"
    />
  </svg>
);
export default SvgBag01;
