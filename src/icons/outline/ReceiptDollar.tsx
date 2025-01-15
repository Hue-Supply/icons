import * as React from 'react';
import type { SVGProps } from 'react';
const SvgReceiptDollar = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 11.55h-.961a1.869 1.869 0 1 1 0-3.738H12m0 3.738h.962a1.87 1.87 0 1 1 0 3.738H12m0-3.738V7.812m0 3.738v3.738m0-7.476V6.566m0 1.246h1.56c.322 0 .639.072.928.213M12 15.288v1.246m0-1.246h-1.422c-.11 0-.165 0-.22-.002a3 3 0 0 1-.678-.104c-.053-.014-.105-.03-.21-.063m8.083 5.138c-.437-.938-1.756-.99-2.259-.087l-.099.18c-.479.86-1.743.78-2.109-.135-.392-.98-1.78-.98-2.172 0-.366.916-1.63.996-2.109.134l-.1-.179c-.502-.904-1.82-.85-2.258.087C5.867 21.497 4 21.1 4 19.73V7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 3 7.12 3 8.8 3h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 5.28 20 6.12 20 7.8v11.931c0 1.37-1.868 1.766-2.447.526"
    />
  </svg>
);
export default SvgReceiptDollar;
