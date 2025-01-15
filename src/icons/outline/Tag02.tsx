import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTag02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M5.36 1.997h1.204c1.468 0 2.202-.001 2.893.165.612.147 1.198.389 1.735.718.606.371 1.125.89 2.163 1.928l7.837 7.837M6.482 9.267h.009m-4.409.405v.123c0 .735 0 1.102.082 1.447a3 3 0 0 0 .36.868c.185.303.445.562.964 1.082l6.66 6.659c1.187 1.188 1.781 1.782 2.466 2.005a3 3 0 0 0 1.854 0c.685-.223 1.28-.817 2.467-2.005l.123-.123c1.189-1.188 1.783-1.782 2.005-2.467a3 3 0 0 0 0-1.854c-.222-.685-.816-1.28-2.005-2.467L10.4 6.28c-.519-.519-.779-.778-1.081-.964a3 3 0 0 0-.868-.36c-.346-.082-.713-.082-1.447-.082H6.88c-1.679.001-2.518.001-3.16.328a3 3 0 0 0-1.31 1.31c-.327.642-.327 1.481-.328 3.16m4.833-.405a.433.433 0 1 1-.865 0 .433.433 0 0 1 .865 0"
    />
  </svg>
);
export default SvgTag02;
