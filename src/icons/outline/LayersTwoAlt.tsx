import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLayersTwoAlt = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m21 15.5-6.928 3.314c-.761.364-1.142.546-1.54.618a3 3 0 0 1-1.064 0c-.398-.072-.778-.254-1.539-.618L3 15.5m11.09-1.724 4.393-2.125c1.43-.692 2.146-1.038 2.373-1.51a1.5 1.5 0 0 0 0-1.3c-.227-.473-.942-.819-2.373-1.51L14.09 5.205c-.767-.371-1.15-.557-1.552-.63a3 3 0 0 0-1.075 0c-.402.073-.785.259-1.553.63L5.518 7.33c-1.431.692-2.147 1.038-2.374 1.51a1.5 1.5 0 0 0 0 1.3c.227.473.943.819 2.374 1.511l4.392 2.125c.768.37 1.151.556 1.553.63.355.064.72.064 1.075 0 .401-.074.785-.26 1.552-.63"
    />
  </svg>
);
export default SvgLayersTwoAlt;
