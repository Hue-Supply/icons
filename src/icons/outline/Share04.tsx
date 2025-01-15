import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShare04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M10.707 6.1c0-1.127 0-1.69.11-2.008a2 2 0 0 1 2.741-1.155c.305.144.708.537 1.514 1.324l5.582 5.45c.82.799 1.229 1.199 1.382 1.662a2 2 0 0 1 0 1.254c-.153.463-.563.863-1.382 1.663l-5.582 5.45c-.806.786-1.209 1.18-1.514 1.323a2 2 0 0 1-2.74-1.155c-.11-.318-.11-.882-.11-2.008 0-.28 0-.42-.024-.527a.98.98 0 0 0-.724-.751c-.106-.028-.25-.033-.537-.044-1.78-.065-3.65-.043-5.895 1.907-.55.478-.826.717-1.01.719a.48.48 0 0 1-.405-.2c-.11-.148-.09-.48-.049-1.142.428-6.934 2.981-9.945 7.359-10.412.33-.035.494-.053.594-.085a.94.94 0 0 0 .669-.744c.021-.102.021-.242.021-.521"
    />
  </svg>
);
export default SvgShare04;
