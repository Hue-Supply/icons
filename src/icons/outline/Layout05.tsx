import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLayout05 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 10v11m0-11h9m-9 0H3m9 11h4.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V10m-9 11H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.31-1.311C3 18.72 3 17.88 3 16.2V10m18 0V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.31-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.31 1.311C3 5.28 3 6.12 3 7.8V10"
    />
  </svg>
);
export default SvgLayout05;
