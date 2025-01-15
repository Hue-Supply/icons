import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGlassOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16.45v5.565m0-5.564a6.604 6.604 0 0 1-6.577-7.203l.306-3.368M13 16.45a6.57 6.57 0 0 0 3.51-1.006m-3.51 6.57h3.896m-3.895 0H9.105M19.121 4.212l.458 5.037A6.6 6.6 0 0 1 19.247 12m-.126-7.79c0-1.228-2.74-2.225-6.12-2.225-1.002 0-1.948.088-2.783.243m8.903 1.983c0 1.064-2.055 1.954-4.8 2.173M3 1.697l20 20"
    />
  </svg>
);
export default SvgGlassOff;
