import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBarChartCircle06 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M22.946 10.901a1 1 0 1 0-1.99.198zM13.8 3.18a1 1 0 0 0 .398-1.96zM9 11.5a1 1 0 1 0-2 0zm-2 5a1 1 0 1 0 2 0zm6-9a1 1 0 1 0-2 0zm-2 9a1 1 0 1 0 2 0zm6-3a1 1 0 1 0-2 0zm-2 3a1 1 0 1 0 2 0zM20.556 2a1 1 0 1 0-2 0zm-2 5.112a1 1 0 1 0 2 0zm3.556-1.556a1 1 0 1 0 0-2zm-5.112-2a1 1 0 1 0 0 2zM21 12a9 9 0 0 1-9 9v2c6.075 0 11-4.925 11-11zm-9 9a9 9 0 0 1-9-9H1c0 6.075 4.925 11 11 11zm-9-9a9 9 0 0 1 9-9V1C5.925 1 1 5.925 1 12zm17.956-.901Q21 11.543 21 12h2q0-.555-.054-1.099zM12 3q.928.002 1.801.18l.398-1.96A11 11 0 0 0 12 1zm-5 8.5v5h2v-5zm4-4v9h2v-9zm4 6v3h2v-3zM18.556 2v2.556h2V2zm0 2.556v2.556h2V4.556zm3.556-1h-2.556v2h2.556zm-2.556 0H17v2h2.556z"
    />
  </svg>
);
export default SvgBarChartCircle06;
