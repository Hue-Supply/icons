import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHomeShield = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9.5 22H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 19.72 2 18.88 2 17.2v-5.8c0-.88 0-1.32.115-1.724a3 3 0 0 1 .495-.99c.254-.334.606-.598 1.31-1.126l5.2-3.9c1.033-.775 1.55-1.162 2.116-1.311a3 3 0 0 1 1.528 0c.567.15 1.083.536 2.116 1.311L20 7.5m-3.716 4.652-1.6.5c-.605.19-.907.284-1.131.467-.198.161-.351.37-.446.607-.107.268-.107.585-.107 1.22v.439c0 1.174 0 1.76.127 2.313.129.563.354 1.099.666 1.584.306.477.725.888 1.564 1.709.556.543.833.815 1.15.925.319.112.667.112.987 0 .316-.11.593-.382 1.15-.925.838-.821 1.257-1.232 1.563-1.709a5 5 0 0 0 .666-1.584c.127-.553.127-1.14.127-2.313v-.44c0-.634 0-.95-.107-1.22a1.5 1.5 0 0 0-.446-.606c-.224-.183-.526-.277-1.131-.466l-1.6-.5c-.266-.084-.399-.126-.535-.142a1.5 1.5 0 0 0-.362 0c-.136.017-.269.058-.535.141"
    />
  </svg>
);
export default SvgHomeShield;
