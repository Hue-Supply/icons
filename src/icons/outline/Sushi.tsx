import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSushi = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M14.873 18.017V8.238a2.44 2.44 0 0 0-1.969-2.392c-1.482-.29-2.965.486-3.35 1.947-.35 1.33-.681 3.102-.681 5.057 0 2.01.35 3.826.71 5.167m9.78-5.025c.792.748 1.146 1.915.901 3.079a2.7 2.7 0 0 1-2.64 2.143H6.455a2.72 2.72 0 0 1-2.59-1.9c-.378-1.2-.094-2.454.687-3.278m14.812-.044a2.94 2.94 0 0 0-1.315-.716 27 27 0 0 0-3.028-.579m4.343 1.295c.797.336 2.105-.218 2.354-1.046.431-1.437-.18-2.963-1.601-3.442-1.228-.413-2.932-.848-5.096-1.078m-10.469 5.61c.38-.4.876-.698 1.47-.84a27 27 0 0 1 2.705-.499m-4.175 1.34c-.786.34-1.784-.265-2.135-1.046-.641-1.426-.11-3.071 1.375-3.56 1.368-.45 3.297-.911 5.781-1.092"
    />
  </svg>
);
export default SvgSushi;
