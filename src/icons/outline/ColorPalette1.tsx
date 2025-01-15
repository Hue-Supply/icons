import * as React from 'react';
import type { SVGProps } from 'react';
const SvgColorPalette1 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M18.482 13.955c1.244-.324 2.393-.967 3.064-2.475C23.678 6.686 17.746 2 12.5 2a9.46 9.46 0 0 0-4.64 1.208m.28 6.19h.01m4.655-2.73h.01m4.503 2.73h.01M1.75 2l3.44 3.44M21.75 22l-7.341-7.341M5.19 5.44l-.178.213A9.46 9.46 0 0 0 3 11.5a9.5 9.5 0 0 0 9.5 9.5c1.327 0 2.096-1.318 1.357-2.262-.852-1.089-1.985-2.296-.245-3.687.16-.129.346-.232.55-.317l.247-.075M5.19 5.44l9.219 9.219M8.836 9.487a.814.814 0 1 1-1.629 0 .814.814 0 0 1 1.63 0m4.793-2.82a.814.814 0 1 1-1.629 0 .814.814 0 0 1 1.629 0m4.514 2.73a.815.815 0 1 1-1.63 0 .815.815 0 0 1 1.63 0"
    />
  </svg>
);
export default SvgColorPalette1;
