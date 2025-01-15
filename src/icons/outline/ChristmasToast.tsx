import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChristmasToast = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M7.372 16.939a3 3 0 0 1-2.364-3.523L6.09 7.92c.163-.824.244-1.236.466-1.52a1.5 1.5 0 0 1 .77-.516c.346-.098.758-.017 1.583.145l1.177.232c.824.162 1.236.243 1.52.466.249.196.43.465.516.77.099.346.018.758-.145 1.583l-1.082 5.494a3 3 0 0 1-3.523 2.364Zm0 0-.87 4.415m10.08-8.259a3 3 0 0 1-3.585-2.268l-1.23-5.464c-.184-.82-.276-1.23-.187-1.578A1.5 1.5 0 0 1 12.076 3c.277-.23.687-.322 1.507-.506l1.17-.263c.82-.185 1.23-.277 1.579-.188a1.5 1.5 0 0 1 .783.496c.23.277.322.687.507 1.506L18.85 9.51a3 3 0 0 1-2.269 3.585Zm0 0 .987 4.39M6.502 21.354l1.963.386m-1.963-.386-1.962-.387m13.03-3.482 1.95-.438m-1.95.438-1.952.44m-9.765-7.047 5.775-1.476m6.323-2.908-5.775-.843"
    />
  </svg>
);
export default SvgChristmasToast;
