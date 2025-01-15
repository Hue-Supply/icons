import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDropletsOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M17.933 18.517a6.58 6.58 0 0 1-5.81 3.475h-.245c-4.198 0-7.327-3.872-6.445-7.976a11 11 0 0 1 1.202-3.145L8.05 8.397m10.241 4.577a11 11 0 0 0-.925-2.103L12.72 2.74c-.235-.413-.353-.62-.507-.688a.52.52 0 0 0-.423 0c-.154.069-.272.275-.508.687L10.15 4.72M2 2l20 20"
    />
  </svg>
);
export default SvgDropletsOff;
