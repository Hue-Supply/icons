import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAiRobot03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20 12h2M12 4v3.469M12 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2M2 12h2m10.5-.475v1.456m-5-1.456v1.456M18 1.5 16 2m-9.984-.5 2 .5m-2 3 2-.5M18 5l-2-.5M7 18h10v4H7zm2.019 0h5.962a5.019 5.019 0 0 0 0-10.038H9.02a5.019 5.019 0 0 0 0 10.038"
    />
  </svg>
);
export default SvgAiRobot03;
