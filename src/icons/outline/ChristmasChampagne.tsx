import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChristmasChampagne = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M9 6h5M9 16h5m1.333-5.333c-.302-.265-.454-.398-.581-.542a3 3 0 0 1-.727-1.602C14 8.332 14 8.13 14 7.728V4.4c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.656C12.861 2 12.441 2 11.6 2h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C9 3.139 9 3.559 9 4.4v3.328c0 .402 0 .604-.025.795a3 3 0 0 1-.727 1.602c-.127.144-.279.277-.581.542-.606.53-.908.794-1.164 1.083a6 6 0 0 0-1.454 3.204C5 15.337 5 15.74 5 16.544V18c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C6.9 22 7.6 22 9 22h5c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C18 20.1 18 19.4 18 18v-1.457c0-.804 0-1.206-.05-1.589a6 6 0 0 0-1.453-3.204c-.256-.289-.558-.554-1.164-1.083Z"
    />
  </svg>
);
export default SvgChristmasChampagne;
