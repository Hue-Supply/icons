import * as React from 'react';
import type { SVGProps } from 'react';
const SvgKey02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.393 8.8a1.965 1.965 0 0 0-2.1-2.099M11.581 4.66a5.553 5.553 0 1 1 3.141 9.425l-3.236 3.236-1.827-.16-.363 2.35c-.528.528-.791.791-1.096.986-.296.19-.62.33-.96.419-.35.09-.723.104-1.468.132-.96.035-1.44.053-1.806-.118a1.67 1.67 0 0 1-.8-.801c-.172-.366-.155-.846-.12-1.806.029-.745.042-1.118.133-1.468.088-.34.23-.664.419-.96.195-.305.458-.569.986-1.096l5.426-5.426a5.55 5.55 0 0 1 1.571-4.713"
    />
  </svg>
);
export default SvgKey02;
