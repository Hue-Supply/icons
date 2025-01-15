import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcecream02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4.29 19.73 7.116 16.9m12.728-8.485h-9.9m7.072 4.243H6.41m.282 2.404 2.263 2.263c.594.594.891.89 1.234 1.002a1.5 1.5 0 0 0 .927 0c.342-.111.64-.408 1.233-1.002l6.081-6.081c.658-.658.987-.987 1.184-1.329a3 3 0 0 0 0-3c-.197-.342-.526-.67-1.184-1.328s-.986-.987-1.328-1.184a3 3 0 0 0-3 0c-.342.197-.671.526-1.329 1.184l-6.08 6.08c-.595.595-.892.892-1.003 1.234a1.5 1.5 0 0 0 0 .927c.111.343.408.64 1.002 1.234"
    />
  </svg>
);
export default SvgIcecream02;
