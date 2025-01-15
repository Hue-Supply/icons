import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVolumeMax = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M17 8s1.5 1.5 1.5 4-1.5 4-1.5 4m3-11s2 2.625 2 7-2 7-2 7M4.4 8.16h.16c.305 0 .457 0 .601-.034a1.3 1.3 0 0 0 .364-.144c.127-.074.238-.179.46-.387l2.971-2.793c1.276-1.2 1.914-1.8 2.459-1.83a1.5 1.5 0 0 1 1.235.533C13 3.923 13 4.8 13 6.55v10.897c0 1.752 0 2.628-.35 3.046a1.5 1.5 0 0 1-1.236.534c-.544-.031-1.182-.631-2.458-1.832l-2.97-2.794c-.223-.208-.334-.313-.461-.387a1.3 1.3 0 0 0-.364-.144c-.144-.034-.296-.034-.6-.034H4.4c-.84 0-1.26 0-1.581-.163a1.5 1.5 0 0 1-.656-.656C2 14.697 2 14.277 2 13.437v-2.878c0-.84 0-1.26.163-1.58a1.5 1.5 0 0 1 .656-.656c.32-.164.74-.164 1.581-.164"
    />
  </svg>
);
export default SvgVolumeMax;
