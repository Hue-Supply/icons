import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMessageCircleHeart01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 21a9 9 0 1 0-8.521-6.097c.256.753.34 1.569.092 2.324l-.75 2.276a1.5 1.5 0 0 0 1.747 1.934l3.55-.778c.551-.12 1.122-.072 1.668.067.709.179 1.45.274 2.214.274"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.997 9.83c-.8-.908-2.133-1.153-3.135-.32-1.002.832-1.143 2.223-.356 3.208.787.984 3.491 3.282 3.491 3.282s2.705-2.298 3.492-3.282a2.256 2.256 0 0 0-.356-3.209c-1.02-.823-2.336-.587-3.136.322"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMessageCircleHeart01;
