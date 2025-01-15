import * as React from 'react';
import type { SVGProps } from 'react';
const SvgOctagon = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.063 2.937c.346-.346.519-.519.72-.642a2 2 0 0 1 .579-.24C8.592 2 8.836 2 9.325 2h5.35c.489 0 .733 0 .963.055.204.05.4.13.579.24.201.123.374.296.72.642l4.126 4.126c.346.346.519.519.642.72q.165.27.24.579c.055.23.055.474.055.963v4.35c0 .489 0 .733-.055.963-.05.204-.13.4-.24.579-.123.201-.296.374-.642.72l-4.126 4.126c-.346.346-.519.519-.72.642q-.271.165-.578.24c-.23.055-.475.055-.964.055h-5.35c-.489 0-.733 0-.963-.055q-.309-.075-.579-.24c-.201-.123-.374-.296-.72-.642l-4.126-4.126c-.346-.346-.519-.519-.642-.72a2 2 0 0 1-.24-.578C2 14.409 2 14.164 2 13.675v-4.35c0-.489 0-.733.055-.963a2 2 0 0 1 .24-.579c.123-.201.296-.374.642-.72z"
    />
  </svg>
);
export default SvgOctagon;
