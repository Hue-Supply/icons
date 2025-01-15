import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCsv = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7 14a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2h.5A1.5 1.5 0 0 1 7 9.5m3 5.5c.306.613.933 1 1.618 1H13a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 13 12h-1.5a1.5 1.5 0 0 1-1.5-1.5v-1A1.5 1.5 0 0 1 11.5 8h1.382c.685 0 1.312.387 1.618 1M17 8l2 8 2-8"
    />
  </svg>
);
export default SvgCsv;
