import * as React from 'react';
import type { SVGProps } from 'react';
const SvgReceiptPln = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M7.5 9.406h2.793a.5.5 0 0 1 .353.853l-2.792 2.793a.5.5 0 0 0 .353.854H11m3-4.5v1.935m0 0v2.065a.5.5 0 0 0 .5.5H17m-3-2.565-.86.42m.86-.42 1.132-.553m2.421 9.469c-.437-.938-1.756-.99-2.259-.087l-.099.18c-.479.86-1.743.78-2.109-.135-.392-.98-1.78-.98-2.172 0-.366.916-1.63.996-2.109.134l-.1-.179c-.502-.904-1.82-.85-2.258.087C5.867 21.497 4 21.1 4 19.73V7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 3 7.12 3 8.8 3h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 5.28 20 6.12 20 7.8v11.931c0 1.37-1.868 1.766-2.447.526"
    />
  </svg>
);
export default SvgReceiptPln;
