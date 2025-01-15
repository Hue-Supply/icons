import * as React from 'react';
import type { SVGProps } from 'react';
const SvgKey01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M17.377 8.88a1.975 1.975 0 0 0-2.11-2.109m-3.73-2.052a5.58 5.58 0 1 1 3.156 9.471L9.24 19.644c-.53.53-.795.794-1.101.99-.298.19-.623.332-.965.421-.352.091-.727.105-1.475.133-.965.036-1.448.053-1.815-.119a1.67 1.67 0 0 1-.805-.805c-.172-.367-.155-.85-.119-1.815.028-.748.042-1.123.133-1.475a3.4 3.4 0 0 1 .42-.965c.197-.306.462-.571.991-1.101l5.454-5.453a5.57 5.57 0 0 1 1.579-4.736"
    />
  </svg>
);
export default SvgKey01;
