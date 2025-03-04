import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHardDriveCheck = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M13.648 3h-4.46c-1.153 0-1.73 0-2.23.184a3 3 0 0 0-1.16.77c-.364.39-.588.921-1.035 1.983l-2.387 5.67c-.14.333-.21.5-.26.673q-.066.23-.095.468c-.021.178-.021.36-.021.721V16.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 21 5.12 21 6.8 21h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 18.72 22 17.88 22 16.2v-2.73c0-.363 0-.544-.021-.722a3 3 0 0 0-.095-.468c-.05-.173-.12-.34-.26-.673l-.671-1.594M2.5 12.5h19M6 16.5h3.35m6.26-10.783 1.754 1.844a.514.514 0 0 0 .753 0L22 3.476"
    />
  </svg>
);
export default SvgHardDriveCheck;
