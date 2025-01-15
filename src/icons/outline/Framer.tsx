import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFramer = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M5.035 15.67h12.83c.651 0 .976 0 1.118-.124a.5.5 0 0 0 .165-.434c-.022-.188-.264-.405-.75-.838l-5.672-5.066a1 1 0 0 0-.174-.14.5.5 0 0 0-.136-.052c-.053-.012-.11-.012-.223-.012H5.835c-.28 0-.42 0-.527.055a.5.5 0 0 0-.219.218c-.054.107-.054.247-.054.527zm0 0h6.2c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.219c.054.107.054.247.054.527v4c0 .588 0 .882-.117 1.022a.5.5 0 0 1-.413.177c-.182-.011-.395-.214-.821-.62zm6.272-6.868-5.7-5.067c-.487-.433-.731-.65-.754-.838a.5.5 0 0 1 .165-.434c.142-.125.468-.125 1.12-.125h12.096c.28 0 .42 0 .527.054a.5.5 0 0 1 .219.219c.055.106.055.246.055.527v5.066c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.219c-.107.054-.247.054-.527.054h-6.396c-.113 0-.17 0-.223-.012a.5.5 0 0 1-.135-.051c-.048-.027-.09-.064-.174-.139"
    />
  </svg>
);
export default SvgFramer;
