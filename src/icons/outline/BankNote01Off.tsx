import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBankNote01Off = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4.45 5.004c-.646.01-1.039.051-1.358.214a2 2 0 0 0-.874.874C2 6.52 2 7.08 2 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 19 4.08 19 5.2 19h13.34m3.459-2.634L22 15.8V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 5 19.92 5 18.8 5h-8.775m3.595 9a2.537 2.537 0 0 1-3.704-3.36M1.75 2l20 20m-3.703-10h.01M5.5 12h.01m13.037 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M6 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
  </svg>
);
export default SvgBankNote01Off;
