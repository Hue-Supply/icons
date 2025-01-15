import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBezier02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4 14c-.465 0-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C2 12.697 2 12.464 2 12s0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C3.304 10 3.536 10 4 10m0 4c.465 0 .697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C6 12.697 6 12.464 6 12s0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C4.696 10 4.464 10 4 10m0 4q0 .122.034.239a8.02 8.02 0 0 0 5.675 5.484l.291.072M4 10l.02-.14c.009-.07.013-.104.021-.144.006-.03.016-.074.024-.104.01-.039.019-.064.035-.115a8.02 8.02 0 0 1 5.514-5.245L10 4.176m9.709 5.677a8.02 8.02 0 0 0-5.664-5.59L14 4.244m-4-.067V4c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C11.303 2 11.536 2 12 2s.697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C14 3.304 14 3.536 14 4v.242m-4-.066c0 .35.007.547.051.712a1.5 1.5 0 0 0 1.06 1.06C11.303 6 11.536 6 12 6s.697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.042-.155.05-.337.052-.647m-4 15.553V20c0 .465 0 .698.051.888a1.5 1.5 0 0 0 1.06 1.06c.191.052.424.052.889.052s.697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C14 20.697 14 20.464 14 20v-.25m-4 .045c.001-.333.008-.523.051-.683a1.5 1.5 0 0 1 1.06-1.06C11.303 18 11.536 18 12 18s.697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06c.042.154.05.334.052.639m0 0 .095-.027a8.02 8.02 0 0 0 5.57-5.423l.057-.3m0 0H20c.465 0 .698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C22 12.697 22 12.464 22 12s0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C20.697 10 20.464 10 20 10s-.698 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C18 11.303 18 11.536 18 12s0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.15.04.323.05.61.051"
    />
  </svg>
);
export default SvgBezier02;
