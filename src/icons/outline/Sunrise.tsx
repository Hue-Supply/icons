import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSunrise = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      fill="currentColor"
      d="M6 18.028a1 1 0 1 0 2 0zm10 0a1 1 0 1 0 2 0zm-14-1a1 1 0 1 0 0 2zm2 2a1 1 0 1 0 0-2zm16-2a1 1 0 1 0 0 2zm2 2a1 1 0 1 0 0-2zM5.637 10.25a1 1 0 1 0-1.414 1.414zm0 2.829a1 1 0 0 0 1.414-1.415zm11.312-1.415a1 1 0 0 0 1.414 1.415zm2.829 0a1 1 0 0 0-1.415-1.414zM22 23a1 1 0 1 0 0-2zM2 21a1 1 0 1 0 0 2zM13 2a1 1 0 1 0-2 0zm-2 7.89a1 1 0 1 0 2 0zM9.23 5.52a1 1 0 0 0-1.45 1.376zm2.7 4.295-.725.689zm.142 0 .725.689zm4.15-2.919a1 1 0 0 0-1.45-1.377zM8 18.028a4 4 0 0 1 4-4v-2a6 6 0 0 0-6 6zm4-4a4 4 0 0 1 4 4h2a6 6 0 0 0-6-6zm-10 5h2v-2H2zm18 0h2v-2h-2zM4.223 11.664l1.414 1.415 1.414-1.415-1.414-1.414zm14.14 1.415 1.415-1.415-1.415-1.414-1.414 1.415zM22 21H2v2h20zM11 2v7.846h2V2zm0 7.846v.043h2v-.043zM7.78 6.896l3.425 3.608 1.45-1.378L9.23 5.52zm5.017 3.608 3.426-3.608-1.45-1.377-3.426 3.607zm-1.591 0c.21.221.498.342.795.342v-2c.246 0 .483.1.655.28zm.795.342c.297 0 .586-.12.796-.342l-1.45-1.378a.9.9 0 0 1 .654-.28z"
    />
  </svg>
);
export default SvgSunrise;
