import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBarChartCircle04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      fill="currentColor"
      d="M22.946 10.901a1 1 0 1 0-1.99.198zM13.8 3.18a1 1 0 0 0 .398-1.96zM9 11.5a1 1 0 1 0-2 0zm-2 5a1 1 0 1 0 2 0zm6-9a1 1 0 1 0-2 0zm-2 9a1 1 0 1 0 2 0zm6-3a1 1 0 1 0-2 0zm-2 3a1 1 0 1 0 2 0zm3.623-8.796a1 1 0 1 0 2 0zm2-5.704a1 1 0 1 0-2 0zm.631 3.328a1 1 0 1 0 1.492-1.332zm-1.583-3.274-.746.666zm-.096 0-.746-.666zm-3.074 1.942a1 1 0 1 0 1.492 1.332zM21 12a9 9 0 0 1-9 9v2c6.075 0 11-4.925 11-11zm-9 9a9 9 0 0 1-9-9H1c0 6.075 4.925 11 11 11zm-9-9a9 9 0 0 1 9-9V1C5.925 1 1 5.925 1 12zm17.956-.901Q21 11.543 21 12h2q0-.555-.054-1.099zM12 3q.928.002 1.801.18l.398-1.96A11 11 0 0 0 12 1zm-5 8.5v5h2v-5zm4-4v9h2v-9zm4 6v3h2v-3zm5.623-5.796V2.032h-2v5.672zm0-5.672V2h-2v.032zm2.123 1.964-2.329-2.608-1.492 1.332 2.33 2.608zm-3.917-2.608-2.328 2.608 1.492 1.332L20.32 2.72zm1.588 0a1.06 1.06 0 0 0-.794-.356v2a.94.94 0 0 1-.698-.312zm-.794-.356c-.31 0-.596.134-.794.356l1.492 1.332a.94.94 0 0 1-.698.312z"
    />
  </svg>
);
export default SvgBarChartCircle04;
