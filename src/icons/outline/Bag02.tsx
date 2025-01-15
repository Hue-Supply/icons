import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBag02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M16 22h1.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 19.72 22 18.88 22 17.2v-.8c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.655C20.861 14 20.441 14 19.6 14h-.731c-.27 0-.404 0-.48.008-.138.013-.061 0-.196.033-.074.017-.374.121-.975.33-.822.284-2.399.629-5.218.629s-4.397-.345-5.218-.63c-.601-.208-.902-.312-.975-.33-.135-.031-.058-.019-.197-.032C5.535 14 5.4 14 5.131 14H4.4c-.84 0-1.26 0-1.581.164a1.5 1.5 0 0 0-.656.655C2 15.139 2 15.559 2 16.4v.8c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 22 5.12 22 6.8 22H8m6-6v1.5M10 16v1.5m-1-15v4m6-4v4M6.5 7h11a2.5 2.5 0 0 0 0-5h-11a2.5 2.5 0 0 0 0 5M6 7h12v12.6c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.656c-.32.163-.74.163-1.581.163H8.4c-.84 0-1.26 0-1.581-.163a1.5 1.5 0 0 1-.656-.656C6 20.861 6 20.441 6 19.6z"
    />
  </svg>
);
export default SvgBag02;
