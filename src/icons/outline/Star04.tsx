import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStar04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M10.422 6.712c.444-2.692.665-4.038 1.045-4.277a1 1 0 0 1 1.068 0c.38.24.601 1.585 1.045 4.277l.338 2.053c.067.407.1.61.197.773a1 1 0 0 0 .348.348c.163.097.366.13.773.197l2.053.338c2.692.444 4.037.665 4.277 1.045a1 1 0 0 1 0 1.068c-.24.38-1.585.601-4.277 1.045l-2.053.338c-.407.067-.61.1-.773.197a1 1 0 0 0-.348.348c-.097.163-.13.366-.197.774l-.338 2.052c-.444 2.692-.665 4.038-1.045 4.277a1 1 0 0 1-1.068 0c-.38-.24-.601-1.585-1.045-4.277l-.338-2.052c-.067-.408-.1-.611-.197-.774a1 1 0 0 0-.348-.348c-.163-.097-.366-.13-.774-.197l-2.052-.338c-2.692-.444-4.038-.665-4.277-1.045a1 1 0 0 1 0-1.068c.24-.38 1.585-.601 4.277-1.045l2.052-.338c.408-.067.611-.1.774-.197a1 1 0 0 0 .348-.348c.096-.163.13-.366.197-.773z"
    />
  </svg>
);
export default SvgStar04;
