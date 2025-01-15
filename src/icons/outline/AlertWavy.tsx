import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlertWavy = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 8v5m0 3h.01M7.69 3.994l-.89.07a2.98 2.98 0 0 0-2.735 2.737l-.071.888a3 3 0 0 1-.703 1.698l-.579.678a2.98 2.98 0 0 0 0 3.87l.579.678c.407.478.653 1.072.703 1.698l.07.888a2.98 2.98 0 0 0 2.737 2.736l.888.071c.626.05 1.22.296 1.698.703l.678.579c1.115.95 2.755.95 3.87 0l.678-.579a3 3 0 0 1 1.698-.703l.888-.07a2.98 2.98 0 0 0 2.736-2.737l.071-.889c.05-.625.296-1.22.703-1.697l.579-.678a2.98 2.98 0 0 0 0-3.87l-.579-.678a3 3 0 0 1-.703-1.698l-.07-.888a2.98 2.98 0 0 0-2.737-2.736l-.889-.071a3 3 0 0 1-1.697-.703l-.678-.579a2.98 2.98 0 0 0-3.87 0l-.678.579a3 3 0 0 1-1.698.703"
    />
  </svg>
);
export default SvgAlertWavy;
