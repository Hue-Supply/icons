import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFingerprintScan = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m7.146 17.185.042-.07q.466-.761.81-1.6M13.166 19c.468-.958.852-1.967 1.141-3.016m.479-2.354q.154-1.155.155-2.353c0-1.734-1.37-3.139-3.059-3.139s-3.059 1.405-3.059 3.139q0 .8-.108 1.569m8.528 4.026c.493-1.778.757-3.655.757-5.595a6.37 6.37 0 0 0-.882-3.249M5 14.701a8 8 0 0 0 .765-3.424c0-1.143.298-2.215.818-3.139m2.24-2.298c.9-.534 1.945-.84 3.06-.84s2.158.306 3.058.84m-3.059 5.437c0 2.76-.771 5.334-2.105 7.51M16.444 2h.756c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 4.28 22 5.12 22 6.8v.756M7.556 2H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 4.28 2 5.12 2 6.8v.756m0 8.888v.756c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 22 5.12 22 6.8 22h.756m8.888 0h.756c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 19.72 22 18.88 22 17.2v-.756"
    />
  </svg>
);
export default SvgFingerprintScan;
