import * as React from 'react';
import type { SVGProps } from 'react';
const SvgServer04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2.5 8h19m-19 7h19M5.487 18.43h3.637m9.365 0h.01M5.488 11.59h3.637m9.365 0h.01M2 9.104V17.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 22 5.12 22 6.8 22h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 19.72 22 18.88 22 17.2V9.104c0-.575 0-.862-.052-1.14a3 3 0 0 0-.23-.71c-.119-.255-.287-.488-.623-.955l-1.658-2.304c-.527-.73-.79-1.096-1.128-1.36a3 3 0 0 0-1.005-.515C16.892 2 16.442 2 15.541 2H8.46c-.9 0-1.351 0-1.763.12a3 3 0 0 0-1.005.515c-.338.264-.601.63-1.128 1.36L2.905 6.3c-.336.467-.504.7-.623.955a3 3 0 0 0-.23.71C2 8.243 2 8.53 2 9.105"
    />
  </svg>
);
export default SvgServer04;
