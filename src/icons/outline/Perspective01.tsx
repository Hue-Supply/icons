import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPerspective01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3.006 7.771c0-1.981 0-2.972.406-3.67a3 3 0 0 1 1.585-1.32c.761-.271 1.735-.09 3.683.27l8.389 1.555c1.396.259 2.095.388 2.618.746a3 3 0 0 1 1.051 1.263c.256.58.256 1.29.256 2.71v5.35c0 1.42 0 2.13-.256 2.71a3 3 0 0 1-1.051 1.263c-.523.358-1.222.487-2.618.746L8.68 20.95c-1.948.36-2.922.541-3.683.27a3 3 0 0 1-1.585-1.32c-.406-.698-.406-1.689-.406-3.67z"
    />
  </svg>
);
export default SvgPerspective01;
