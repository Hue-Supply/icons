import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShoppingCart01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m4.946 6 12.623-.11c1.314-.01 1.971-.016 2.438.248a2 2 0 0 1 .888 1.044c.187.503.077 1.151-.144 2.447l-.804 4.71c-.161.945-.242 1.418-.48 1.773a2 2 0 0 1-.845.714c-.39.174-.87.174-1.83.174H9.667c-.945 0-1.417 0-1.803-.17a2 2 0 0 1-.842-.699c-.238-.348-.326-.812-.5-1.74zm0 0-.668-4H2.846m15.472 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </svg>
);
export default SvgShoppingCart01;
