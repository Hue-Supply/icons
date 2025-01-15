import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLayersThreeAlt = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m21 13-7.05 3.136c-.718.32-1.077.479-1.45.542-.331.056-.67.056-1 0-.374-.063-.733-.223-1.451-.542L2.999 13m18 5-7.082 3.085c-.707.308-1.06.462-1.426.523a3 3 0 0 1-.982 0c-.367-.06-.72-.215-1.426-.523L3 18m10.987-6.698 4.342-1.975c1.526-.694 2.289-1.041 2.526-1.522a1.5 1.5 0 0 0 0-1.325c-.237-.481-1-.828-2.526-1.522l-4.342-1.975c-.731-.332-1.097-.499-1.478-.564a3 3 0 0 0-1.019 0c-.38.065-.746.232-1.477.564L5.67 4.958c-1.527.694-2.29 1.04-2.526 1.522a1.5 1.5 0 0 0 0 1.325c.236.48 1 .828 2.526 1.522l4.342 1.975c.73.332 1.096.498 1.477.564.337.058.682.058 1.02 0 .38-.066.746-.232 1.477-.564"
    />
  </svg>
);
export default SvgLayersThreeAlt;
