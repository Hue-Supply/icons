import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHalloweenGhost = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M15 9v.025m1.944 11.447a2.11 2.11 0 0 0-1.888 0L14 21c-.643.322-.965.483-1.298.563-.461.11-.943.11-1.404 0-.333-.08-.655-.241-1.298-.563l-1.056-.528a2.11 2.11 0 0 0-1.888 0C5.652 21.174 4 20.153 4 18.584V10a8 8 0 1 1 16 0v8.584c0 1.57-1.652 2.59-3.056 1.888M15.994 9a.994.994 0 1 1-1.988 0 .994.994 0 0 1 1.987 0M9.987 9A.994.994 0 1 1 8 9a.994.994 0 0 1 1.987 0"
    />
  </svg>
);
export default SvgHalloweenGhost;
