import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUsersPlus02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="m7.076 15.731.242.97zM4 21H3a1 1 0 0 0 1 1zm7.012 1a1 1 0 1 0 0-2zm2.917-5.779a1 1 0 1 0 .2-1.99zm5.486-.333a1 1 0 1 0-2 0zm-2 5.112a1 1 0 1 0 2 0zm3.556-1.556a1 1 0 1 0 0-2zm-5.112-2a1 1 0 1 0 0 2zM19.56 3.172a1 1 0 0 0-1.12 1.656zm-1.12 7a1 1 0 0 0 1.12 1.656zM5 19.67a3.06 3.06 0 0 1 2.318-2.969l-.485-1.94A5.06 5.06 0 0 0 3 19.67zM5 21v-1.33H3V21zm-1 1h7.012v-2H4zm3.318-5.299a19.3 19.3 0 0 1 6.61-.48l.2-1.99a21.3 21.3 0 0 0-7.295.53zM15.5 7.5A3.5 3.5 0 0 1 12 11v2a5.5 5.5 0 0 0 5.5-5.5zM12 11a3.5 3.5 0 0 1-3.5-3.5h-2A5.5 5.5 0 0 0 12 13zM8.5 7.5A3.5 3.5 0 0 1 12 4V2a5.5 5.5 0 0 0-5.5 5.5zM12 4a3.5 3.5 0 0 1 3.5 3.5h2A5.5 5.5 0 0 0 12 2zm5.415 11.888v2.556h2v-2.556zm0 2.556V21h2v-2.556zm3.556-1h-2.556v2h2.556zm-2.556 0H15.86v2h2.556zm.025-12.616C19.437 5.503 20 6.477 20 7.5h2c0-1.804-.997-3.353-2.44-4.328zM20 7.5c0 1.023-.563 1.997-1.56 2.672l1.12 1.656C21.003 10.853 22 9.304 22 7.5z"
    />
  </svg>
);
export default SvgUsersPlus02;
