import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMessageCricleDotsNotification = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20.945 11q.055.492.055 1a9 9 0 0 1-11.214 8.726c-.546-.139-1.117-.188-1.667-.067l-3.551.778a1.5 1.5 0 0 1-1.746-1.934l.749-2.276c.249-.755.164-1.57-.092-2.324A9 9 0 0 1 13 3.055M8.995 12.5h.01m2.99 0h.01m2.99 0h.01M22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
);
export default SvgMessageCricleDotsNotification;
