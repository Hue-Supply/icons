import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShieldWifi = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 14.333h.004M14 12.315c-.491-.611-1.205-.996-2-.996s-1.509.385-2 .996m6-1.991c-.983-1.222-2.41-1.991-4-1.991s-3.017.769-4 1.99m2.568-8-3.2 1c-1.21.379-1.814.568-2.262.933a3 3 0 0 0-.892 1.212C4 6.005 4 6.638 4 7.905v.879c0 2.345 0 3.518.254 4.623a10 10 0 0 0 1.332 3.165c.612.954 1.45 1.774 3.128 3.414 1.111 1.087 1.667 1.63 2.299 1.85a3 3 0 0 0 1.974 0c.632-.22 1.188-.763 2.3-1.85 1.676-1.64 2.515-2.46 3.127-3.414a10 10 0 0 0 1.332-3.165C20 12.302 20 11.129 20 8.784v-.879c0-1.267 0-1.9-.214-2.437a3 3 0 0 0-.892-1.212c-.448-.365-1.053-.554-2.262-.932l-3.2-1c-.532-.166-.798-.25-1.07-.282a3 3 0 0 0-.725 0c-.27.033-.537.116-1.069.282"
    />
  </svg>
);
export default SvgShieldWifi;
