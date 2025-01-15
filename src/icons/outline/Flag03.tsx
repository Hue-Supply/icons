import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFlag03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4 21V4m0-.5v11s2-1 5-1c2.343 0 3.657 1.5 6 1.5 2.242 0 3.663-.41 4.395-.705.172-.07.258-.104.338-.197a.57.57 0 0 0 .118-.293c.008-.123-.036-.222-.125-.421L18 9.5l1.34-4.353c.24-.78.36-1.171.309-1.324a.43.43 0 0 0-.27-.298c-.147-.065-.595.026-1.491.208C17.142 3.885 16.186 4 15 4c-2.343 0-3.657-1.5-6-1.5-3 0-5 1-5 1"
    />
  </svg>
);
export default SvgFlag03;
