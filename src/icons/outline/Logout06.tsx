import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLogout06 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M13.02 8v-.065c0-1.402 0-2.103-.251-2.677a3 3 0 0 0-1.032-1.259c-.514-.358-1.201-.496-2.576-.77l-.4-.08c-1.968-.394-2.952-.591-3.722-.325a3 3 0 0 0-1.607 1.318c-.412.702-.412 1.706-.412 3.713v8.29c0 2.007 0 3.01.412 3.713a3 3 0 0 0 1.607 1.318c.77.266 1.754.07 3.722-.324l.4-.08c1.375-.275 2.062-.413 2.576-.771a3 3 0 0 0 1.032-1.26c.25-.573.25-1.274.25-2.676V16M21 12l-4.27 4.799M21 12l-4.27-4.799M21 12H10.38"
    />
  </svg>
);
export default SvgLogout06;
