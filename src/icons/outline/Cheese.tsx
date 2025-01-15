import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCheese = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m3.742 9.395-.978 6.527c-.125.83-.187 1.246-.073 1.588.1.3.293.561.551.745.293.21.709.272 1.54.396l13.054 1.956c.83.125 1.246.187 1.587.073.3-.1.562-.293.746-.551.209-.293.271-.709.396-1.54l.978-6.526M3.742 9.395l17.8 2.668m-17.8-2.668S4.228 6.722 6.15 4.94c.96-.89 2.1-1.304 3-1.494.257-.055.385-.082.787-.059.253.015.8.147 1.033.248.368.162.565.322.958.64l9.615 7.787m-14.02 1.342.007.001m4.61 3.256h.007m5.262-1.776.008.001M7.9 13.461a.382.382 0 1 1-.757-.113.382.382 0 0 1 .757.113m4.617 3.257a.382.382 0 1 1-.757-.113.382.382 0 0 1 .757.113m5.27-1.775a.383.383 0 1 1-.757-.114.383.383 0 0 1 .756.114"
    />
  </svg>
);
export default SvgCheese;
