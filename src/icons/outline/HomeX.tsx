import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHomeX = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeWidth={2}
      d="m9.635 10.979 2.364 2.364m0 0 2.365 2.365m-2.365-2.365 2.365-2.364m-2.365 2.364-2.364 2.365M3 12.3V16.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2v-3.9c0-1.031 0-1.547-.122-2.03a4 4 0 0 0-.527-1.203c-.271-.417-.65-.767-1.408-1.467l-3.686-3.405c-1.148-1.062-1.723-1.592-2.375-1.793a3 3 0 0 0-1.764 0c-.652.2-1.227.731-2.375 1.793L5.057 7.6c-.758.7-1.137 1.05-1.408 1.467a4 4 0 0 0-.527 1.204C3 10.753 3 11.269 3 12.3Z"
    />
  </svg>
);
export default SvgHomeX;
