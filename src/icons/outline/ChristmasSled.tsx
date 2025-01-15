import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChristmasSled = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeWidth={2}
      d="M17.453 15.617S15 16.5 15 19s2 3 2 3M4.9 14.293S7 15.936 7 18.5 5 22 5 22m-3 0h18.25a1.75 1.75 0 1 0 0-3.5H20M2.867 4.774c.138.197.212.432.212.673V6.4c0 3.36 0 5.04.654 6.324a6 6 0 0 0 2.622 2.622C7.638 16 9.319 16 12.679 16h1.231c1.431 0 2.147 0 2.818-.156a6 6 0 0 0 2.018-.886c.57-.388 1.054-.914 2.023-1.967l.242-.264c.194-.21.29-.315.374-.425a3 3 0 0 0 .602-1.543c.013-.138.013-.28.013-.566v-.866c0-.147 0-.221-.002-.261-.07-1.333-1.717-1.917-2.611-.926-.027.03-.074.087-.167.202l-.075.092a3 3 0 0 1-2.236 1.065l-.119.001h-.587c-1.115 0-1.673 0-2.173-.132a4 4 0 0 1-2.058-1.31c-.33-.398-.566-.903-1.038-1.914L9.851 3.823l-.082-.173a3 3 0 0 0-2.59-1.649L6.99 2H4.313C2.887 2 2.05 3.605 2.867 4.774Z"
    />
  </svg>
);
export default SvgChristmasSled;
