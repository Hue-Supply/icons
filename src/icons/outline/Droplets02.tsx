import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDroplets02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.681 18.949a6.57 6.57 0 0 0 5.556 3.043h.245c4.198 0 7.326-3.872 6.445-7.976a11 11 0 0 0-1.203-3.145l-4.646-8.13c-.235-.413-.353-.62-.507-.688a.52.52 0 0 0-.423 0c-.154.069-.272.275-.507.687l-.638 1.116m-1.695 4.206L8.134 2.508c-.16-.281-.241-.422-.347-.47a.35.35 0 0 0-.288 0c-.106.048-.186.189-.347.47L3.978 8.062a7.5 7.5 0 0 0-.821 2.148A4.503 4.503 0 0 0 7.56 15.66h.167a4.503 4.503 0 0 0 4.403-5.449 7.5 7.5 0 0 0-.822-2.148"
    />
  </svg>
);
export default SvgDroplets02;
