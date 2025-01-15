import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlarmClockHeart = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M18.636 2c.852.567 1.628 1.24 2.309 2M5.309 2A12 12 0 0 0 3 4m14 15.5 2.5 2.5M6.998 19.5l-2.5 2.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-9.003-2.203c-.8-.909-2.133-1.153-3.135-.32-1.002.832-1.143 2.223-.356 3.208.787.984 3.491 3.282 3.491 3.282s2.705-2.298 3.492-3.282a2.256 2.256 0 0 0-.356-3.209c-1.02-.823-2.336-.588-3.136.321"
    />
  </svg>
);
export default SvgAlarmClockHeart;
