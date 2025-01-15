import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGift02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 7h3.5a2.5 2.5 0 0 0 0-5h-.071A3.43 3.43 0 0 0 12 5.429M12 7V5.429M12 7H8.5a2.5 2.5 0 0 1 0-5h.071A3.43 3.43 0 0 1 12 5.429M12 7v15M4 12h16v5.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2zm.4 0h15.2c.84 0 1.26 0 1.581-.164a1.5 1.5 0 0 0 .656-.655c.163-.32.163-.74.163-1.581v-.2c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C20.861 7 20.441 7 19.6 7H4.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C2 8.139 2 8.559 2 9.4v.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.656c.32.163.74.163 1.581.163"
    />
  </svg>
);
export default SvgGift02;
