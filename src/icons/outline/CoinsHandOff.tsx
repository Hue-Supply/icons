import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCoinsHandOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m6 13.901 4.002-1.53c.462-.178.96-.237 1.451-.175m4.3 4.03h-1.478M6 19.406h1.627a3 3 0 0 1 1.372.332l1.77.91a3 3 0 0 0 1.853.294l4.444-.723a3 3 0 0 0 1.273-.528l.366-.264m.601-4.815c1.186-.71 2.694.145 2.694 1.527 0 .398-.133.78-.37 1.087M1.75 2l20 20M9.707 4.98a4.965 4.965 0 1 1 6.61 6.502M4 21c-.465 0-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C2 19.697 2 19.464 2 19v-5c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C3.304 12 3.536 12 4 12s.697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C6 13.303 6 13.536 6 14v5c0 .465 0 .698-.051.888a1.5 1.5 0 0 1-1.06 1.06C4.696 21 4.464 21 4 21"
    />
  </svg>
);
export default SvgCoinsHandOff;
