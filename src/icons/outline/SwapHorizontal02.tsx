import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSwapHorizontal02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3.066 16.873h17.835M21 7.155H3.165m13.38 5.567L21 16.872l-4.455 4.151M7.522 3.005 3.066 7.155l4.456 4.151"
    />
  </svg>
);
export default SvgSwapHorizontal02;
