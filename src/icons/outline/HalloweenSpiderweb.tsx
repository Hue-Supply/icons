import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHalloweenSpiderweb = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 22V12m0 0V2m0 10 9 5m-9-5L3 7m9 5-9 5m9-5 9-5m-7.445 14.495 6.122-3.401c.6-.333.9-.5 1.117-.736a2 2 0 0 0 .428-.728c.101-.306.101-.648.101-1.333V8.703c0-.685 0-1.027-.1-1.333a2 2 0 0 0-.429-.728c-.218-.237-.517-.403-1.117-.736l-6.122-3.401c-.567-.316-.851-.473-1.152-.535a2 2 0 0 0-.805 0c-.3.062-.584.22-1.151.535L4.324 5.906c-.6.333-.899.5-1.117.736a2 2 0 0 0-.428.728c-.101.306-.101.648-.101 1.333v6.594c0 .685 0 1.027.1 1.333a2 2 0 0 0 .429.728c.218.237.518.403 1.117.736l6.123 3.401c.567.316.85.473 1.15.535.267.054.54.054.806 0 .3-.062.585-.22 1.152-.535M6.728 9.071v5.858L12 17.86l5.273-2.93V9.071L12 6.14z"
    />
  </svg>
);
export default SvgHalloweenSpiderweb;
