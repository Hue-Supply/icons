import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPieChart03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M13 4.062A8.001 8.001 0 0 1 12 20a8 8 0 0 1-7.938-7M8.79 2.837a11 11 0 0 1 1.829-.576c.64-.142.959-.213 1.35-.084.301.1.658.386.82.658.21.354.21.758.21 1.565v6.2c0 .84 0 1.26-.163 1.58a1.5 1.5 0 0 1-.655.656C11.86 13 11.44 13 10.6 13H4.4c-.807 0-1.21 0-1.565-.211a1.7 1.7 0 0 1-.658-.82c-.129-.391-.058-.71.084-1.35a11 11 0 0 1 6.53-7.782"
    />
  </svg>
);
export default SvgPieChart03;
