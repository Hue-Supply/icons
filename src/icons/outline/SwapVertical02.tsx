import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSwapVertical02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7.174 3.047v17.835m9.718.099V3.146m-5.567 13.38-4.15 4.455-4.152-4.456m18.02-9.022-4.151-4.456-4.151 4.456"
    />
  </svg>
);
export default SvgSwapVertical02;
