import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBankNote01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M18.332 12h.01M5.785 12h.01M5.2 19h13.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 17.48 22 16.92 22 15.8V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 5 19.92 5 18.8 5H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 6.52 2 7.08 2 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 19 4.08 19 5.2 19m13.632-7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M6.285 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m8.31 0a2.537 2.537 0 1 1-5.074 0 2.537 2.537 0 0 1 5.075 0"
    />
  </svg>
);
export default SvgBankNote01;
