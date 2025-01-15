import * as React from 'react';
import type { SVGProps } from 'react';
const SvgInboxUpload = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M17 3.169a3 3 0 0 1 1.773 1.667l2.992 7.106A3 3 0 0 1 22 13.106V18a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4.894a3 3 0 0 1 .235-1.164l2.992-7.106A3 3 0 0 1 7 3.169M2.5 12.5h3.484a1.5 1.5 0 0 1 1.393.943l.246.614A1.5 1.5 0 0 0 9.016 15h5.969a1.5 1.5 0 0 0 1.392-.943l.246-.614a1.5 1.5 0 0 1 1.392-.943H21.5M12 8V2.033m0 0V2m0 .033q.029 0 .05.024L14.5 4.8M12 2.033a.07.07 0 0 0-.05.024L9.5 4.8"
    />
  </svg>
);
export default SvgInboxUpload;
