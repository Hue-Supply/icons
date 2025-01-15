import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPrinter = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6 18c-.93 0-1.395 0-1.776-.102a3 3 0 0 1-2.122-2.121C2 15.395 2 14.93 2 14v-3.2c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 6 5.12 6 6.8 6h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 8.28 22 9.12 22 10.8V14c0 .93 0 1.395-.102 1.777a3 3 0 0 1-2.122 2.12C19.396 18 18.93 18 18 18m.66-8.726h-1.5M9.2 22h5.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C18 20.48 18 19.92 18 18.8v-3.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C16.48 12 15.92 12 14.8 12H9.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C6 13.52 6 14.08 6 15.2v3.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C7.52 22 8.08 22 9.2 22M19 6v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C17.48 2 16.92 2 15.8 2H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 3.52 5 4.08 5 5.2V6z"
    />
  </svg>
);
export default SvgPrinter;
