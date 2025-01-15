import * as React from 'react';
import type { SVGProps } from 'react';
const SvgExam02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      fill="currentColor"
      d="M18.577 18.388h1zm-.906 2.92.925.381zm-2.219 0-.924.38v.001zm2.85-1.529.924.382zm.275-15.764h-1zm-4.03 0h-1zm.275 15.764.925-.38zM6.202 3.364a1 1 0 0 0-1.556 1.258zm.549 2.27.777-.63zm.57 0-.778-.63zm3.716-3.005A1 1 0 0 0 9.482 1.37zm-4.69 16.956a1 1 0 1 0-1.554 1.257zm.55 2.269-.777.629zm.57 0-.777-.629zm3.717-3.005a1 1 0 0 0-1.555-1.258zM6.13 9.666a1 1 0 1 0-1.414 1.414zm2.57 5.398a1 1 0 0 0 1.414-1.414zm1.414-3.984a1 1 0 0 0-1.414-1.414zm-5.398 2.57a1 1 0 0 0 1.414 1.414zm12.66 5.748-.63 1.529 1.849.762.63-1.528zm-1 1.529-.63-1.529-1.85.763.63 1.528zm-.83-2.539V4.015h-2v14.373zm2.03-14.373v14.373h2V4.015zm-3.03 15.373h4.03v-2h-4.03zm2.2 1.539a.2.2 0 0 1-.073.093.2.2 0 0 1-.112.03.2.2 0 0 1-.113-.03.2.2 0 0 1-.072-.093l-1.85.762c.749 1.815 3.32 1.815 4.069 0zm2.479-.766a4.7 4.7 0 0 0 .35-1.773h-2c0 .347-.067.69-.2 1.01zM16.562 3c.56 0 1.015.454 1.015 1.015h2A3.015 3.015 0 0 0 16.562 1zm0-2a3.015 3.015 0 0 0-3.015 3.015h2C15.547 3.455 16 3 16.562 3zm-.815 18.399c-.132-.321-.2-.664-.2-1.01h-2c0 .607.12 1.21.35 1.772zM4.647 4.621l1.326 1.64 1.555-1.257-1.327-1.64zm3.451 1.64 2.94-3.633L9.481 1.37 6.543 5.005zm-2.125 0c.25.31.63.518 1.063.518s.812-.208 1.062-.517L6.543 5.005a.64.64 0 0 1 .493-.225c.227 0 .4.11.492.225zm-1.18 14.58 1.327 1.64 1.555-1.257-1.327-1.64zm3.452 1.64 2.939-3.633-1.555-1.258-2.94 3.634zm-2.125 0c.25.31.63.518 1.062.518s.813-.208 1.063-.517L6.69 21.225A.64.64 0 0 1 7.182 21c.227 0 .4.11.493.225zM4.717 11.08l1.992 1.992 1.414-1.414-1.992-1.992zm1.992 1.992L8.7 15.064l1.414-1.414-1.992-1.992zM8.7 9.666 6.71 11.658l1.414 1.414 1.992-1.992zM6.71 11.658 4.717 13.65l1.414 1.414 1.992-1.992z"
    />
  </svg>
);
export default SvgExam02;
