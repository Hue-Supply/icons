import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserChange02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8 18s.611-4.2 5.5-4.2S19 18 19 18M2 11.5v.9c0 3.36 0 5.04.654 6.324a6 6 0 0 0 2.622 2.622C6.56 22 8.24 22 11.6 22h.4m4.594-13.75c0 1.795-1.385 3.25-3.094 3.25s-3.094-1.455-3.094-3.25S11.791 5 13.5 5s3.094 1.455 3.094 3.25M9.8 19h7.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 16.72 22 15.88 22 14.2V6.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 2 18.88 2 17.2 2H9.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C5 4.28 5 5.12 5 6.8v7.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C7.28 19 8.12 19 9.8 19"
    />
  </svg>
);
export default SvgUserChange02;
