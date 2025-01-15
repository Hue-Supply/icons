import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCheckOctagon = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m8.888 12.196 1.748 1.873c.204.218.305.327.424.368a.5.5 0 0 0 .322 0c.119-.04.22-.15.424-.368l4.082-4.373m1.05 11.367 4.125-4.126c.346-.346.519-.519.642-.72q.165-.271.24-.578c.055-.23.055-.475.055-.964v-5.35c0-.489 0-.733-.055-.963q-.075-.309-.24-.579c-.123-.201-.296-.374-.642-.72l-4.126-4.126c-.346-.346-.519-.519-.72-.642a2 2 0 0 0-.578-.24C15.409 2 15.164 2 14.675 2h-5.35c-.489 0-.733 0-.963.055a2 2 0 0 0-.579.24c-.201.123-.374.296-.72.642L2.937 7.063c-.346.346-.519.519-.642.72a2 2 0 0 0-.24.579C2 8.592 2 8.836 2 9.325v5.35c0 .489 0 .733.055.963.05.204.13.4.24.579.123.201.296.374.642.72l4.126 4.126c.346.346.519.519.72.642q.27.165.579.24c.23.055.474.055.963.055h5.35c.489 0 .733 0 .963-.055.204-.05.4-.13.579-.24.201-.123.374-.296.72-.642"
    />
  </svg>
);
export default SvgCheckOctagon;
