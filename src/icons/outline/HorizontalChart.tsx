import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHorizontalChart = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3 14.5h8v2.6c0 .84 0 1.26-.164 1.581a1.5 1.5 0 0 1-.655.656c-.32.163-.74.163-1.581.163H3zm0 0v-5m0 5h10.6c.84 0 1.26 0 1.581-.164a1.5 1.5 0 0 0 .656-.655c.163-.32.163-.74.163-1.581V9.5H3m0 0v-5h15.6c.84 0 1.26 0 1.581.163a1.5 1.5 0 0 1 .656.656c.163.32.163.74.163 1.581v.2c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.656c-.32.163-.74.163-1.581.163zM3 3v18"
    />
  </svg>
);
export default SvgHorizontalChart;
