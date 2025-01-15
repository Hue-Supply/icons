import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBankNoteGroupOff = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M19.652 19.916c-.243.005-.524.005-.852.005H9.315c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.218-.428-.218-.988-.218-2.108v-4.72c0-1.12 0-1.68.218-2.107a2 2 0 0 1 .874-.874c.28-.143.617-.192 1.13-.21m13.66 8.628q.004-.315.003-.717v-4.72c0-1.12 0-1.68-.218-2.107a2 2 0 0 0-.874-.874c-.428-.218-.988-.218-2.108-.218h-5.463M6.117 15.1H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.875C2 13.58 2 13.02 2 11.9V7.18c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874m14.793 4.534V7.18c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874c-.428-.218-.988-.218-2.108-.218H8.758m10.329 10.381h.008m-9.973 0h.008m6.358 1.464a2.015 2.015 0 0 1-2.93-2.757M1.749 2l20 20m-2.266-7.639a.397.397 0 1 1-.794 0 .397.397 0 0 1 .794 0m-9.965 0a.397.397 0 1 1-.794 0 .397.397 0 0 1 .794 0"
    />
  </svg>
);
export default SvgBankNoteGroupOff;
