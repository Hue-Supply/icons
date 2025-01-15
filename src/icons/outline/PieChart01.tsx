import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPieChart01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7.4 13.5c-.787 0-1.181 0-1.545.226-.269.167-.567.564-.652.869-.116.412-.033.699.134 1.273A8.5 8.5 0 1 0 15.869 5.337c-.575-.167-.862-.25-1.274-.135-.305.086-.702.384-.869.653-.226.363-.226.757-.226 1.545v3.7c0 .84 0 1.26-.163 1.58a1.5 1.5 0 0 1-.656.656c-.32.164-.74.164-1.58.164zM10 4.4c0-.782 0-1.172-.23-1.538-.168-.268-.576-.57-.882-.651-.418-.112-.696-.026-1.252.146a8 8 0 0 0-5.278 5.279c-.172.556-.258.834-.147 1.251.082.306.383.714.651.883.366.23.757.23 1.538.23h3.2c.84 0 1.26 0 1.581-.164a1.5 1.5 0 0 0 .656-.655C10 8.86 10 8.44 10 7.6z"
    />
  </svg>
);
export default SvgPieChart01;
