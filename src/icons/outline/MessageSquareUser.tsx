import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMessageSquareUser = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8.392 15.152S8.793 12.53 12 12.53s3.608 2.622 3.608 2.622M7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v5.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 18 17.88 18 16.2 18h-.846c-.487 0-.73 0-.968.038a3 3 0 0 0-.615.168c-.224.087-.434.211-.854.459l-3.634 2.141c-.411.243-.617.364-.778.406a1.2 1.2 0 0 1-1.46-.834C7 20.218 7 19.979 7 19.502c0-.292 0-.438-.021-.548-.088-.467-.344-.761-.794-.913-.107-.037-.3-.064-.686-.118a2.7 2.7 0 0 1-.861-.25 3 3 0 0 1-1.311-1.311C3 15.72 3 14.88 3 13.2V7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3m6.23 5.003a2.03 2.03 0 1 1-4.06 0 2.03 2.03 0 0 1 4.06 0"
    />
  </svg>
);
export default SvgMessageSquareUser;
