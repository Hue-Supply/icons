import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCreditCardUpload = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12.736 19H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 16.72 2 15.88 2 14.2V9.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 5 5.12 5 6.8 5h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 7.28 22 8.12 22 9.8v2.12M2 10h20m-2.814 11.022v-5.967m0 0v-.033m0 .033a.08.08 0 0 1 .056.024L22 17.822m-2.814-2.767a.08.08 0 0 0-.057.024l-2.758 2.743"
    />
  </svg>
);
export default SvgCreditCardUpload;
