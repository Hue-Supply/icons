import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHalloweenCoffin = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M12 5.762V8.27m0 0v5.013m0-5.013h2.507m-2.507 0H9.493M5.31 9.544l1.72 8.597c.274 1.375.412 2.062.77 2.576a3 3 0 0 0 1.259 1.032c.574.251 1.275.251 2.677.251h.53c1.402 0 2.102 0 2.677-.251a3 3 0 0 0 1.259-1.032c.358-.514.496-1.201.77-2.576l1.72-8.597c.115-.573.172-.86.174-1.146a3 3 0 0 0-.09-.753c-.07-.278-.194-.542-.44-1.072l-.842-1.803c-.469-1.004-.703-1.506-1.064-1.873a3 3 0 0 0-1.138-.725C14.805 2 14.25 2 13.143 2h-2.286c-1.108 0-1.662 0-2.148.172a3 3 0 0 0-1.138.725c-.361.367-.595.87-1.064 1.873l-.841 1.803c-.247.53-.37.794-.44 1.072a3 3 0 0 0-.091.753c.002.287.06.573.174 1.146"
    />
  </svg>
);
export default SvgHalloweenCoffin;
