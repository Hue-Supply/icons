import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLeftIndent01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M13 5.25h7m-6.993 4.5h7m-16.012 4.5h16.012m-16.012 4.5h16.012M3.994 8.05v-1.1c0-1.193 0-1.79.248-2.113a1.2 1.2 0 0 1 .9-.469c.407-.017.895.325 1.873 1.01l.786.549c.755.53 1.133.794 1.267 1.123a1.2 1.2 0 0 1 0 .9c-.134.33-.512.594-1.267 1.123l-.786.55c-.978.684-1.466 1.026-1.873 1.008a1.2 1.2 0 0 1-.9-.468c-.248-.323-.248-.92-.248-2.113"
    />
  </svg>
);
export default SvgLeftIndent01;
