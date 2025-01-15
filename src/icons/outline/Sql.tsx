import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSql = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3 15c.27.608.873 1 1.539 1H5.5A1.5 1.5 0 0 0 7 14.5v-1A1.5 1.5 0 0 0 5.5 12h-1A1.5 1.5 0 0 1 3 10.5v-1A1.5 1.5 0 0 1 4.5 8h.961C6.127 8 6.73 8.392 7 9m5.5 5.5L14 16m3-8v7.5a.5.5 0 0 0 .5.5H21M10 9.5v5a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 12.5 8h-1A1.5 1.5 0 0 0 10 9.5"
    />
  </svg>
);
export default SvgSql;
