import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFolderCopy = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      strokeWidth={2}
      d="M5 6.556h12.92c1.428 0 2.142 0 2.688.29.48.256.87.664 1.114 1.166.278.57.278 1.317.278 2.81v3.911c0 1.494 0 2.24-.278 2.811-.244.502-.635.91-1.114 1.165-.546.291-1.26.291-2.688.291H9.08c-1.428 0-2.142 0-2.688-.29a2.6 2.6 0 0 1-1.114-1.166C5 16.974 5 16.227 5 14.734zm0 0h11.05l-.927-1.55c-.437-.733-.656-1.099-.952-1.364a2.5 2.5 0 0 0-.897-.52C12.902 3 12.49 3 11.664 3H7.72c-.952 0-1.428 0-1.792.194-.32.17-.58.442-.743.777C5 4.35 5 4.849 5 5.844zM2 13v1c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C5.8 22 7.2 22 10 22h1"
    />
  </svg>
);
export default SvgFolderCopy;
