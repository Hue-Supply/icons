import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCreditCardLocker = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeWidth={2}
      d="M11.634 19H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 16.72 2 15.88 2 14.2V9.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 5 5.12 5 6.8 5h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 7.28 22 8.12 22 9.8v1.308M2 10h20m-1.6 7.2v-1.6a1.6 1.6 0 1 0-3.2 0v1.6m-.064 4.8h3.328c.537 0 .806 0 1.011-.105a.96.96 0 0 0 .42-.42c.105-.205.105-.473.105-1.011v-1.728c0-.538 0-.806-.105-1.012a.96.96 0 0 0-.42-.42c-.205-.104-.474-.104-1.011-.104h-3.328c-.538 0-.807 0-1.012.105a.96.96 0 0 0-.42.42c-.104.204-.104.473-.104 1.011v1.728c0 .538 0 .806.104 1.012a.96.96 0 0 0 .42.42c.205.104.474.104 1.012.104Z"
    />
  </svg>
);
export default SvgCreditCardLocker;
