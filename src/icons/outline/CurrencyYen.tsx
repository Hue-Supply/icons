import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCurrencyYen = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M5.432 3.516 12 12.07m0 0 6.568-8.555M12 12.07v8.414M5.49 12h13.087m-11.15 4h9.211"
    />
  </svg>
);
export default SvgCurrencyYen;
