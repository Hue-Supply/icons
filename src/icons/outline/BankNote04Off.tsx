import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBankNote04Off = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.332 10.5h.01m-12.557 3h.01m4.217-3A2.537 2.537 0 0 0 13.62 14M22 16.785V6.015c0-.613-.373-1.164-.96-1.343C20.085 4.381 18.542 4 17 4c-2.5 0-5 1-5 1m0 0s-.383.153-1 .34q-.202.061-.433.125M12 5l.014-.006M12 19s2.5-1 5-1q.25 0 .5.013M12 19c-.041.017-2.52 1-5 1-1.542 0-3.085-.38-4.04-.672-.587-.18-.96-.73-.96-1.343V7.215C2 6.156 3.086 5.4 4.12 5.64c.425.098.892.188 1.38.254M12 19c4.24-1.696 6.36-2.544 0 0M1.75 2l20 20m-2.918-11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-12.547 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
  </svg>
);
export default SvgBankNote04Off;
