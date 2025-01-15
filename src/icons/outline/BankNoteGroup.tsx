import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBankNoteGroup = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6.116 15.1H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.875C2 13.58 2 13.02 2 11.9V7.18c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C3.52 3.98 4.08 3.98 5.2 3.98h9.485c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.428.218.988.218 2.108v1.552m1.202 5.63h.008m-9.973 0h.008m.185 5.559H18.8c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 18.4 22 17.84 22 16.72v-4.72c0-1.12 0-1.68-.218-2.107a2 2 0 0 0-.874-.875c-.428-.217-.988-.217-2.108-.217H9.315c-1.12 0-1.68 0-2.108.217a2 2 0 0 0-.874.875c-.218.427-.218.987-.218 2.108v4.719c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218m10.169-5.56a.397.397 0 1 1-.795 0 .397.397 0 0 1 .795 0m-9.965 0a.397.397 0 1 1-.794 0 .397.397 0 0 1 .794 0m6.6 0a2.015 2.015 0 1 1-4.031 0 2.015 2.015 0 0 1 4.03 0"
    />
  </svg>
);
export default SvgBankNoteGroup;
