import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHome06 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m18.943 7.6-3.686-3.405c-1.148-1.062-1.723-1.592-2.375-1.793a3 3 0 0 0-1.764 0c-.652.2-1.227.731-2.375 1.792L5.057 7.6c-.758.7-1.137 1.05-1.408 1.467a4 4 0 0 0-.527 1.204C3 10.753 3 11.269 3 12.3V18.6c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.656c.32.163.74.163 1.581.163h1.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656C9 19.861 9 19.441 9 18.6v-3.2c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.655c.32-.164.74-.164 1.581-.164h1.2c.84 0 1.26 0 1.581.164a1.5 1.5 0 0 1 .656.655c.163.32.163.74.163 1.581v3.2c0 .84 0 1.26.164 1.581a1.5 1.5 0 0 0 .655.656c.32.163.74.163 1.581.163h1.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581v-6.3c0-1.031 0-1.547-.122-2.03a4 4 0 0 0-.527-1.203c-.271-.417-.65-.767-1.408-1.467"
    />
  </svg>
);
export default SvgHome06;
