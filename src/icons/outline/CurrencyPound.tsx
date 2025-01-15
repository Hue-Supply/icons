import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCurrencyPound = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m16.858 5.492-.203-.294a4.15 4.15 0 0 0-3.56-1.79c-2.933.105-4.833 3.139-3.647 5.823l.081.183c.324.731.508 1.517.543 2.316l.064 1.474c.056 1.262.083 1.892-.066 2.47a4 4 0 0 1-.747 1.497c-.372.466-.892.823-1.934 1.537l-1.15.79c-.386.264-.579.396-.604.514a.3.3 0 0 0 .087.278c.087.083.32.083.788.083h11.528M5.51 12.998h7.724"
    />
  </svg>
);
export default SvgCurrencyPound;
