import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClockHeart = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M12 6.5V12l-2.373 2.373m8.37 1.458c-.8-.91-2.133-1.154-3.135-.322-1.002.833-1.143 2.224-.356 3.209S17.997 22 17.997 22s2.705-2.298 3.492-3.282a2.256 2.256 0 0 0-.356-3.209c-1.02-.823-2.336-.587-3.136.322"
    />
  </svg>
);
export default SvgClockHeart;
