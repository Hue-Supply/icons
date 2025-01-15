import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStar05 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9.756 5.63c.696-1.828 1.043-2.74 1.547-3.005a1.5 1.5 0 0 1 1.392 0c.504.264.851 1.177 1.547 3.004l.755 1.984c.141.37.212.555.322.71q.148.21.356.357c.156.11.341.18.711.322l1.984.755c1.827.696 2.74 1.043 3.004 1.547a1.5 1.5 0 0 1 0 1.392c-.264.504-1.177.851-3.004 1.547l-1.984.755c-.37.141-.555.212-.71.322a1.5 1.5 0 0 0-.357.356c-.11.156-.18.34-.322.711l-.755 1.984c-.696 1.827-1.043 2.74-1.547 3.004a1.5 1.5 0 0 1-1.392 0c-.504-.264-.851-1.177-1.547-3.004l-.755-1.984c-.141-.37-.212-.555-.322-.71a1.5 1.5 0 0 0-.356-.357c-.156-.11-.34-.18-.711-.322l-1.984-.755c-1.826-.696-2.74-1.043-3.003-1.547a1.5 1.5 0 0 1 0-1.392c.263-.504 1.177-.851 3.003-1.547l1.984-.755c.37-.141.555-.212.711-.322a1.5 1.5 0 0 0 .356-.356c.11-.156.18-.34.322-.711z"
    />
  </svg>
);
export default SvgStar05;
