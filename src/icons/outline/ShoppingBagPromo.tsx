import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShoppingBagPromo = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M16 9.404V6a4 4 0 0 0-8 0v3.404M21.99 17.2 17.19 22m4.8 0H22m-4.82-4.8h.01M13 22H7.968c-1.888 0-2.833 0-3.515-.382a3 3 0 0 1-1.32-1.504c-.291-.727-.17-1.663.075-3.535l.747-5.722c.193-1.48.29-2.22.641-2.778a3 3 0 0 1 1.282-1.125c.598-.276 1.344-.276 2.837-.276h6.571c1.493 0 2.24 0 2.838.276a3 3 0 0 1 1.281 1.125c.351.557.448 1.297.641 2.778l.28 2.148"
    />
  </svg>
);
export default SvgShoppingBagPromo;
