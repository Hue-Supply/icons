import * as React from 'react';
import type { SVGProps } from 'react';
const SvgThermometerCold = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9.026 11.3V5.1m0 6.2L6.2 14.4m2.826-3.1 2.826 3.1m-2.826-3.1v3.1m0-9.3L6.2 2m2.826 3.1L11.852 2M9.026 5.1V2M5.924 8.2h6.2m-6.2 0-3.1-2.826m3.1 2.826-3.1 2.826m3.1-2.826h-3.1M17.647 2c1.112 0 2.013.901 2.013 2.013v11.558a3.53 3.53 0 1 1-4.026 0V4.013C15.634 2.9 16.535 2 17.647 2"
    />
  </svg>
);
export default SvgThermometerCold;
