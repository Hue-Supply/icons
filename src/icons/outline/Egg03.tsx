import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEgg03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20.41 10.41c.746-3.653.124-6.813-3.167-8.41l.06 3.6-.855 1.713zM12.025 22c3.9 0 7.114-2.617 7.565-7.395.035-.363.052-.544.003-.765a1.6 1.6 0 0 0-.247-.539c-.134-.181-.309-.306-.659-.556l-1.872-1.337a3 3 0 0 0-.383-.252 1.4 1.4 0 0 0-.283-.105c-.11-.028-.225-.039-.455-.06l-1.923-.174c-.768-.07-1.152-.105-1.364-.258a.95.95 0 0 1-.381-.922c.041-.258.288-.555.781-1.147.205-.245.307-.368.363-.503a.95.95 0 0 0 .045-.585c-.034-.142-.116-.28-.28-.554l-.566-.941c-.126-.212-.19-.317-.224-.43a1 1 0 0 1-.04-.312c.005-.119.04-.237.11-.473l.53-1.802c.079-.266.118-.399.083-.528a.53.53 0 0 0-.2-.276c-.111-.073-.23-.077-.466-.084L12.025 2C7.817 2 4.406 7.906 4.406 13.429c0 5.522 3.411 8.571 7.62 8.571"
    />
  </svg>
);
export default SvgEgg03;
