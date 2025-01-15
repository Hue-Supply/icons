import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSvg = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3 15c.306.613.933 1 1.618 1H6a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 6 12H4.5A1.5 1.5 0 0 1 3 10.5v-1A1.5 1.5 0 0 1 4.5 8h1.382c.685 0 1.312.387 1.618 1m2.75-1 2 8 2-8M21 8h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-2.5a.5.5 0 0 0-.5-.5H20"
    />
  </svg>
);
export default SvgSvg;
