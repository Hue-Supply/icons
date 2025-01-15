import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDribbble = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12.055 21a9 9 0 0 1 8.89-10m-8.89 10H12a9 9 0 0 1-9-9.055M12.055 21a8.96 8.96 0 0 0 5.791-2.157m3.1-7.843q.053.493.054 1a8.98 8.98 0 0 1-3.154 6.843m3.1-7.843A9.004 9.004 0 0 0 13 3.055m0 0a8.98 8.98 0 0 0-7.843 3.099M13 3.054a9 9 0 0 1-10 8.891m2.157-5.791A8.96 8.96 0 0 0 3 11.945m2.157-5.791c6.558.944 11.745 6.131 12.69 12.689"
    />
  </svg>
);
export default SvgDribbble;
