import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNavPointer01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6.925 20.692c-1.705.568-2.557.852-3.068.647a1.5 1.5 0 0 1-.894-1.021c-.136-.534.258-1.342 1.047-2.956L9.844 5.416c.692-1.417 1.038-2.125 1.508-2.35a1.5 1.5 0 0 1 1.296 0c.471.225.817.933 1.509 2.35l5.834 11.946c.788 1.614 1.183 2.422 1.047 2.956a1.5 1.5 0 0 1-.894 1.02c-.512.206-1.364-.078-3.069-.646l-4.316-1.439c-.281-.094-.422-.14-.566-.16a1.5 1.5 0 0 0-.385 0c-.144.02-.285.066-.567.16z"
    />
  </svg>
);
export default SvgNavPointer01;
