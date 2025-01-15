import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMap = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9 4v15m7-13v14M4.641 4.453l3.655-1.218c.261-.087.392-.131.526-.15a1.5 1.5 0 0 1 .36-.008c.134.013.267.051.532.127l5.572 1.592c.265.076.398.114.533.127q.18.018.359-.008c.134-.019.265-.062.526-.15l2.137-.712c1.067-.355 1.6-.533 2.024-.427a1.5 1.5 0 0 1 .9.649c.235.369.235.93.235 2.055v10.94c0 .622 0 .933-.104 1.198a1.5 1.5 0 0 1-.434.602c-.218.182-.513.28-1.103.477l-3.42 1.14c-.349.116-.523.174-.702.2q-.24.034-.479.01c-.18-.017-.356-.068-.71-.169l-5.096-1.456c-.354-.101-.53-.152-.71-.17a2 2 0 0 0-.479.011c-.179.026-.353.084-.702.2l-1.902.634c-1.067.356-1.6.533-2.024.427a1.5 1.5 0 0 1-.9-.648C3 19.356 3 18.795 3 17.67V6.73c0-.622 0-.933.104-1.198a1.5 1.5 0 0 1 .434-.601c.218-.183.513-.281 1.103-.478"
    />
  </svg>
);
export default SvgMap;
