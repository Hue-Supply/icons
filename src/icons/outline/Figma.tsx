import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFigma = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 2.024H8.75c-1.795 0-3.25 1.493-3.25 3.334S6.955 8.69 8.75 8.69M12 2.024v6.667m0-6.667h3.25c1.795 0 3.25 1.493 3.25 3.334S17.045 8.69 15.25 8.69m-3.25 0H8.75m3.25 0v6.667m0-6.667h3.25m-6.5 0c-1.795 0-3.25 1.492-3.25 3.333s1.455 3.334 3.25 3.334m3.25 0H8.75m3.25 0v3.333c0 1.841-1.455 3.333-3.25 3.333S5.5 20.532 5.5 18.691c0-1.84 1.455-3.333 3.25-3.333m6.5-6.667c1.795 0 3.25 1.492 3.25 3.333s-1.455 3.334-3.25 3.334S12 13.865 12 12.024s1.455-3.333 3.25-3.333"
    />
  </svg>
);
export default SvgFigma;
