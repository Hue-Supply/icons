import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMicrowave = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M15.333 5.333H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 6.853 2 7.413 2 8.533v6.934c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218h10.133m0-13.334H18.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.428.218.988.218 2.108v6.934c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218h-3.467m0-13.334v13.334m3.333-10v1.11m0 3.334h.011M5.941 10.167s1.541.666 2.778 0 2.778 0 2.778 0m-5.556 3.666s1.541.666 2.778 0 2.778 0 2.778 0"
    />
  </svg>
);
export default SvgMicrowave;
