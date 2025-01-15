import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUsersGroup03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M4 21s.889-5.815 8-5.815S20 21 20 21m-.96-15.895a2.915 2.915 0 0 1-.5 5.399m-.903 2.967c3.857.415 4.363 3.724 4.363 3.724M4.96 5.105a2.915 2.915 0 0 0 .5 5.399m.903 2.967C2.506 13.886 2 17.195 2 17.195M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
    />
  </svg>
);
export default SvgUsersGroup03;
