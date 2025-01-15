import * as React from 'react';
import type { SVGProps } from 'react';
const SvgServer01 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M2.5 12.5h19M6 16.577h3.35m8.626 0h.01M2 13.47V16.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 21 5.12 21 6.8 21h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 18.72 22 17.88 22 16.2v-2.73c0-.363 0-.544-.021-.722a3 3 0 0 0-.095-.468c-.05-.173-.12-.34-.26-.673l-2.387-5.67c-.447-1.062-.67-1.592-1.034-1.982a3 3 0 0 0-1.162-.771C16.542 3 15.965 3 14.814 3H9.187c-1.152 0-1.728 0-2.229.184a3 3 0 0 0-1.16.77c-.364.39-.588.921-1.035 1.983l-2.387 5.67c-.14.333-.21.5-.26.673q-.066.23-.095.468c-.021.178-.021.36-.021.721"
    />
  </svg>
);
export default SvgServer01;
