import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGrill = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m9.75 16.087-4.156 5.869m8.312-5.87 1.504 2.125m-8.293 1.86h7.611M7.305 2v1.76M12 2v1.76M16.696 2v1.76m-6.34 11.972h3.288c.533 0 .799 0 1.024-.017a6 6 0 0 0 5.533-5.533c.016-.224.016-.49.016-1.024 0-.133 0-.2-.004-.256A1.5 1.5 0 0 0 18.83 7.52c-.056-.004-.123-.004-.256-.004H5.427c-.134 0-.2 0-.256.004a1.5 1.5 0 0 0-1.384 1.383c-.004.057-.004.123-.004.256 0 .533 0 .8.017 1.024a6 6 0 0 0 5.533 5.533c.225.017.491.017 1.024.017m8.417 4.5a2.022 2.022 0 1 1-4.044 0 2.022 2.022 0 0 1 4.044 0"
    />
  </svg>
);
export default SvgGrill;
