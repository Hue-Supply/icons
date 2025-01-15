import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLayerPlus = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M16.59 17.796h2.211m0 0h2.212m-2.212 0v-2.21m0 2.21v2.212m-4.71-6.427 4.392-2.125c1.43-.692 2.146-1.038 2.373-1.51a1.5 1.5 0 0 0 0-1.3c-.227-.472-.942-.818-2.373-1.51L14.09 5.01c-.767-.371-1.15-.557-1.552-.63a3 3 0 0 0-1.075 0c-.402.073-.785.259-1.553.63L5.518 7.135c-1.431.693-2.147 1.039-2.374 1.51a1.5 1.5 0 0 0 0 1.3c.227.473.943.82 2.374 1.511l4.392 2.125c.768.37 1.151.556 1.553.63.355.064.72.064 1.075 0 .401-.074.785-.26 1.552-.63Z"
    />
  </svg>
);
export default SvgLayerPlus;
