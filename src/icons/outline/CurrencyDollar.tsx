import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCurrencyDollar = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6 17.333A3.24 3.24 0 0 0 9.19 20H14a4 4 0 0 0 0-8h-3.52a4 4 0 0 1 0-8h4.307A3.27 3.27 0 0 1 18 6.667M12.309 2v20"
    />
  </svg>
);
export default SvgCurrencyDollar;
