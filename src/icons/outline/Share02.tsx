import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShare02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7 10.99h-.79c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874c-.218.428-.218.988-.218 2.108v2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.31 1.311c.642.327 1.482.327 3.163.327h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.31-1.31c.328-.643.328-1.483.328-3.163v-2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874c-.428-.218-.988-.218-2.108-.218H17m-4.99-7.98 4.269 4.269m-4.27-4.27L7.742 7.28m4.269-4.27v10.622"
    />
  </svg>
);
export default SvgShare02;
