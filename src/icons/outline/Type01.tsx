import * as React from 'react';
import type { SVGProps } from 'react';
const SvgType01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20 6.5v-.1c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C18.861 4 18.441 4 17.6 4H6.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C4 5.139 4 5.559 4 6.4v.1M12 4v16m3 0H9"
    />
  </svg>
);
export default SvgType01;
