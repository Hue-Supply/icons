import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSwapHorizontal01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M21 16.873H3.165m-.099-9.718h17.835M7.52 12.722l-4.455 4.15 4.456 4.151m9.023-18.019L21 7.155l-4.455 4.151"
    />
  </svg>
);
export default SvgSwapHorizontal01;
