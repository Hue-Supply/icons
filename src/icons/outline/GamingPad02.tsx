import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGamingPad02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M15 6v.6c0 .84 0 1.26-.164 1.581a1.5 1.5 0 0 1-.655.656C13.861 9 13.441 9 12.6 9h-1.2c-.84 0-1.26 0-1.581-.163a1.5 1.5 0 0 1-.656-.656C9 7.861 9 7.441 9 6.6V6m2.747 8.143c-.34 0-.51 0-.67.017a3 3 0 0 0-1.998 1.08c-.102.123-.195.265-.382.55-.945 1.44-1.417 2.161-1.733 2.435-1.66 1.437-4.25.663-4.85-1.45C2 16.376 2 15.514 2 13.79v-.935c0-1.724 0-2.586.176-3.296a6 6 0 0 1 4.382-4.382C7.268 5 8.13 5 9.854 5h4.292c1.724 0 2.586 0 3.296.176a6 6 0 0 1 4.382 4.382c.176.71.176 1.572.176 3.296v.935c0 1.723 0 2.585-.114 2.987-.6 2.112-3.19 2.886-4.85 1.448-.316-.273-.788-.993-1.734-2.434a7 7 0 0 0-.381-.55 3 3 0 0 0-1.999-1.08c-.16-.017-.33-.017-.67-.017z"
    />
  </svg>
);
export default SvgGamingPad02;
