import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShoppingBag04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4 7h16M8 11.026v.828a4 4 0 0 0 8 0v-.828M15.75 2c1.174 0 1.76 0 2.267.19a3 3 0 0 1 1.172.792c.364.401.582.946 1.018 2.035l.45 1.125c.128.32.192.48.237.646q.06.221.087.448c.019.17.019.343.019.688V17.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 22 17.88 22 16.2 22H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 19.72 3 18.88 3 17.2V7.924c0-.345 0-.518.02-.688q.026-.227.086-.448c.045-.165.109-.326.237-.646l.45-1.125c.436-1.09.654-1.634 1.018-2.035a3 3 0 0 1 1.171-.793C6.49 2 7.076 2 8.25 2z"
    />
  </svg>
);
export default SvgShoppingBag04;
