import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShoppingBag05 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M16 6a4 4 0 0 0-8 0m.398 6.384v.308a3.602 3.602 0 1 0 7.204 0v-.308M12 22c-2.796 0-4.193 0-5.296-.457a6 6 0 0 1-3.247-3.247C3 17.194 3 15.796 3 13v-1.522c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311c.642-.327 1.482-.327 3.162-.327h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.31C21 8.959 21 9.799 21 11.479V13c0 2.796 0 4.194-.457 5.296a6 6 0 0 1-3.247 3.247C16.194 22 14.796 22 12 22"
    />
  </svg>
);
export default SvgShoppingBag05;
