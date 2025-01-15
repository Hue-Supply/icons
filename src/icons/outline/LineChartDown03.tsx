import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLineChartDown03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m20.57 17-4.193-4.559a2.883 2.883 0 0 0-4.237-.007 2.883 2.883 0 0 1-4.154.079L3 7.527M21 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V3"
    />
  </svg>
);
export default SvgLineChartDown03;
