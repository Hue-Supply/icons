import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDonut = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m17.907 12.18.608.608M16.727 7.72l-.223.83M12.278 6.12l-.608-.607m-5.171 7.502-.828-.232m.969-4.624.86-.015m12.833 9.412S18.667 15.89 15.89 17s-3.611 1.111-6.667 0-5 .555-5 .555M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-7.778 0a2.222 2.222 0 1 1-4.444 0 2.222 2.222 0 0 1 4.444 0"
    />
  </svg>
);
export default SvgDonut;
