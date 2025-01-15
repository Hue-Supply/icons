import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudRaining09Alt = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19.956 15.155A4.75 4.75 0 0 0 22 11.25v-.277A4.473 4.473 0 0 0 17.527 6.5a.04.04 0 0 1-.036-.025l-.165-.496A5.82 5.82 0 0 0 11.806 2H9a7 7 0 0 0-4.498 12.364m3.287-.826v1.744m4.21-.788v2.033m4.212-2.989v1.744m-8.422 3.73v1.742m4.21-.788V22m4.212-2.989v1.743"
    />
  </svg>
);
export default SvgCloudRaining09Alt;
