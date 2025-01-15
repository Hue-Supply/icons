import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBarChartCircle05 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      fill="currentColor"
      d="M22.946 10.901a1 1 0 1 0-1.99.198zM13.8 3.18a1 1 0 0 0 .398-1.96zM9 11.5a1 1 0 1 0-2 0zm-2 5a1 1 0 1 0 2 0zm6-9a1 1 0 1 0-2 0zm-2 9a1 1 0 1 0 2 0zm6-3a1 1 0 1 0-2 0zm-2 3a1 1 0 1 0 2 0zM20.623 2a1 1 0 1 0-2 0zm-2 5.704a1 1 0 1 0 2 0zm-.63-3.328A1 1 0 0 0 16.5 5.708zm1.582 3.274.746-.666zm.096 0 .746.666zm3.075-1.942a1 1 0 1 0-1.492-1.332zM21 12a9 9 0 0 1-9 9v2c6.075 0 11-4.925 11-11zm-9 9a9 9 0 0 1-9-9H1c0 6.075 4.925 11 11 11zm-9-9a9 9 0 0 1 9-9V1C5.925 1 1 5.925 1 12zm17.956-.901Q21 11.543 21 12h2q0-.555-.054-1.099zM12 3q.928.002 1.801.18l.398-1.96A11 11 0 0 0 12 1zm-5 8.5v5h2v-5zm4-4v9h2v-9zm4 6v3h2v-3zM18.623 2v5.673h2V2zm0 5.673v.031h2v-.031zm-2.122-1.965 2.328 2.608 1.492-1.332-2.328-2.608zm3.916 2.608 2.329-2.608-1.492-1.332-2.329 2.608zm-1.588 0c.198.222.484.357.794.357v-2c.276 0 .527.12.698.311zm.794.357c.31 0 .596-.135.794-.357l-1.492-1.332a.94.94 0 0 1 .698-.311z"
    />
  </svg>
);
export default SvgBarChartCircle05;
