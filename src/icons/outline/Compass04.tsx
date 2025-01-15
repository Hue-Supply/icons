import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCompass04 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.45 12.933c-.766-.306-1.149-.46-1.267-.683a.69.69 0 0 1-.01-.623c.11-.228.488-.393 1.243-.725l5.587-2.454c.662-.29.994-.436 1.226-.376a.69.69 0 0 1 .453.385c.098.218.01.57-.168 1.27l-1.5 5.915c-.203.8-.304 1.2-.51 1.346a.69.69 0 0 1-.616.093c-.24-.08-.455-.433-.883-1.137L10.92 14.16a1.5 1.5 0 0 0-.151-.224.7.7 0 0 0-.135-.114c-.056-.037-.12-.062-.246-.112z"
    />
  </svg>
);
export default SvgCompass04;
