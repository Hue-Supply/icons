import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDogBowl = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m14.057 15.022 3.55-6.15a2.412 2.412 0 1 0 .831-4.545 2.412 2.412 0 1 0-3.52 2.992l-3.387 5.865m.781 1.567L9.254 9.454a2.412 2.412 0 1 0-3.52-2.992 2.412 2.412 0 1 0 .83 4.545l2.162 3.744M7.805 21h8.39c1.018 0 1.527 0 1.978-.146a3 3 0 0 0 1.254-.792c.326-.344.545-.804.983-1.724.502-1.055.754-1.583.704-2.012a1.5 1.5 0 0 0-.693-1.096c-.366-.23-.95-.23-2.12-.23H5.698c-1.17 0-1.754 0-2.12.23a1.5 1.5 0 0 0-.692 1.096c-.05.429.201.957.704 2.012.438.92.657 1.38.983 1.724a3 3 0 0 0 1.254.792c.45.146.96.146 1.979.146"
    />
  </svg>
);
export default SvgDogBowl;
