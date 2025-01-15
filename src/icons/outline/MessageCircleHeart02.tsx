import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMessageCircleHeart02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 21a9 9 0 0 1-2.214-.274c-.546-.139-1.117-.188-1.667-.067l-3.551.778a1.5 1.5 0 0 1-1.746-1.934l.749-2.276c.249-.755.164-1.57-.092-2.324A9 9 0 1 1 20.876 10.5m-2.879 4.621c-.8-.909-2.133-1.153-3.135-.32-1.002.832-1.143 2.223-.356 3.208.787.984 3.491 3.282 3.491 3.282s2.705-2.298 3.492-3.282a2.256 2.256 0 0 0-.356-3.209c-1.02-.823-2.336-.588-3.136.321"
    />
  </svg>
);
export default SvgMessageCircleHeart02;
