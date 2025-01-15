import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBlur02Off = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M8 2.832A10 10 0 0 1 12 2c1.421 0 2.774.297 3.998.831M21.168 16A10 10 0 0 0 22 11.904M14.19 4.699l1.253-1.253.554-.615m3.205 6.878 1.253-1.253.636-.626m-2.516-2.505.373-.373.08-.065m-7.341 2.317-.157.157m5.165 4.853-.18.179M11.885 1.998 9.809 4.073M16.07 7.83l-1.253 1.253m5.012 5.01 1.879-1.88.29-.31M7.93 10.962l-1.252 1.253m6.262 3.757-1.252 1.253M6.053 7.83l.625-.625.173-.104m4.21 5.739.626-.626.153-.124m4.23 5.76.626-.626.156-.122m-12.68-2.383L2.92 15.97m6.262 3.758L7.93 20.98M3.545 10.335l-1.252 1.253m6.264 3.757-1.252 1.253m6.262 3.757-1.252 1.252M1.75 2l3.052 3.052M21.75 22l-2.797-2.797M15.998 2.83a10 10 0 0 1 3.03 2.056m0 0c.854.843 1.557 1.84 2.064 2.943m0 0c.57 1.242.894 2.62.908 4.074m-10.16.186L6.851 7.101m4.99 4.99 5.01 5.01m-10-10L4.802 5.052m0 0-.063.072A9.97 9.97 0 0 0 2 12c0 5.523 4.477 10 10 10a9.96 9.96 0 0 0 6.788-2.657l.165-.14m-2.101-2.101 2.1 2.1"
    />
  </svg>
);
export default SvgBlur02Off;
