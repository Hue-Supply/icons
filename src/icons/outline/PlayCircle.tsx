import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPlayCircle = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.95 10.793c0-1.383 0-2.074.288-2.451.25-.328.633-.53 1.045-.55.474-.024 1.044.368 2.183 1.151l1.756 1.207c.903.621 1.354.932 1.513 1.32.138.34.138.72 0 1.06-.159.388-.61.699-1.513 1.32l-1.756 1.207c-1.14.783-1.709 1.175-2.183 1.151a1.4 1.4 0 0 1-1.045-.55c-.288-.377-.288-1.068-.288-2.45z"
    />
  </svg>
);
export default SvgPlayCircle;
