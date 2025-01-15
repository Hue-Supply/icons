import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMeta = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 10.168q2.658-4.189 4.663-4.188c2.007 0 3.274 2.22 4.013 5.234.706 2.879.502 6.806-2.006 6.806-1.118 0-2.657-1.57-4.162-3.664A27.7 27.7 0 0 1 12 10.168m0 0Q9.342 5.98 7.337 5.98c-2.007 0-3.274 2.22-4.014 5.234-.706 2.879-.501 6.806 2.007 6.806 1.118 0 2.657-1.57 4.161-3.664A28 28 0 0 0 12 10.168"
    />
  </svg>
);
export default SvgMeta;
