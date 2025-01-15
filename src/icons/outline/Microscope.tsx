import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMicroscope = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="m15.174 4.543 4.243 4.242M14.5 22.09A7.5 7.5 0 0 0 19.5 9m-5 13.09H2m12.5 0H22M5 22v-2m2.979-8.215L16.464 3.3a3 3 0 1 1 4.242 4.242l-8.485 8.486zm3.745 5.068c-.278.464-.417.696-.563.851a2 2 0 0 1-2.545.314c-.178-.116-.37-.307-.752-.69l-1.188-1.187c-.383-.383-.574-.574-.69-.753a2 2 0 0 1 .314-2.545c.155-.145.387-.284.851-.563.149-.089.223-.133.295-.163a1 1 0 0 1 .966.12c.062.045.123.106.246.229l2.88 2.88c.123.123.184.184.23.247a1 1 0 0 1 .119.965c-.03.072-.074.147-.163.295"
    />
  </svg>
);
export default SvgMicroscope;
