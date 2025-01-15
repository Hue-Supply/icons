import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEraserOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6.83 20.981h4.103m9.798 0h-9.798m9.798 0-4.933-4.933m4.933 4.933L21.75 22m-5.952-5.952-4.5 4.503-.365.43m4.865-4.933L8.665 8.915M6.832 20.983l-1.727-1.727c-1.188-1.188-1.782-1.782-2.005-2.467a3 3 0 0 1 0-1.855c.223-.684.817-1.278 2.005-2.466l3.56-3.553m2.71-2.718 1.259-1.259c.369-.369.553-.553.73-.685a3 3 0 0 1 3.576 0c.177.132.362.316.73.685l2.102 2.102c.37.369.554.553.685.73a3 3 0 0 1 0 3.576c-.131.177-.316.362-.684.73l-1.26 1.26m-9.848-4.42L1.75 2"
    />
  </svg>
);
export default SvgEraserOff;
