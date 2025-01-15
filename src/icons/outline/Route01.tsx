import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRoute01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M5.5 5.304h.005M18.5 16.68h.005M12 5h3.914c1.93 0 2.74 2.465 1.187 3.61l-9.202 6.78C6.345 16.535 7.155 19 9.086 19H12M9 5.79c0 1.89-1.32 3.424-2.34 4.326-.276.245-.414.367-.731.462-.21.063-.647.063-.858 0-.317-.095-.455-.217-.732-.462C3.32 9.214 2 7.681 2 5.79 2 3.697 3.567 2 5.5 2S9 3.697 9 5.79m-3.25-.486a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0M22 17.164c0 1.891-1.32 3.425-2.34 4.327-.276.245-.414.367-.731.462-.21.063-.647.063-.858 0-.317-.095-.456-.217-.732-.462C16.32 20.59 15 19.055 15 17.165c0-2.093 1.567-3.79 3.5-3.79s3.5 1.697 3.5 3.79m-3.25-.485a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0"
    />
  </svg>
);
export default SvgRoute01;
