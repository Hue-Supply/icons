import * as React from 'react';
import type { SVGProps } from 'react';
const SvgReceiptEuro = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M14.946 14.406c-.603.83-1.446 1.346-2.379 1.346-1.83 0-3.315-1.986-3.315-4.436s1.484-4.436 3.315-4.436c.933 0 1.776.516 2.378 1.346m-7.218 3.093 4.384-.003m5.442 8.94c-.437-.937-1.756-.99-2.259-.086l-.099.18c-.479.86-1.743.78-2.109-.135-.392-.98-1.78-.98-2.172 0-.366.916-1.63.996-2.109.134l-.1-.179c-.502-.904-1.82-.85-2.258.087C5.867 21.497 4 21.1 4 19.73V7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 3 7.12 3 8.8 3h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 5.28 20 6.12 20 7.8v11.931c0 1.37-1.868 1.766-2.447.526"
    />
  </svg>
);
export default SvgReceiptEuro;
