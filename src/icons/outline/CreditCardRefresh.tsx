import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCreditCardRefresh = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19 19a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H9.512M5 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h9.597M2 10h20m-9.539 6.744L14.994 19l-2.533 2.256m-.928-18.512L9 5l2.533 2.256"
    />
  </svg>
);
export default SvgCreditCardRefresh;
