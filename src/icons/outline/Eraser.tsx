import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEraser = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6.83 20.981h4.079m9.034 0H10.91m-4.077.002-1.727-1.727c-1.188-1.188-1.782-1.782-2.005-2.467a3 3 0 0 1 0-1.855c.223-.684.817-1.278 2.005-2.467l5.01-5.01m0 0 1.643-1.643c1.188-1.188 1.782-1.782 2.467-2.005a3 3 0 0 1 1.854 0c.685.223 1.28.817 2.467 2.005l.35.35c1.189 1.188 1.783 1.782 2.005 2.467a3 3 0 0 1 0 1.854c-.222.685-.816 1.28-2.004 2.467l-1.643 1.643m-7.138-7.139 7.138 7.139m0 0-5.956 5.956-.39.43"
    />
  </svg>
);
export default SvgEraser;
