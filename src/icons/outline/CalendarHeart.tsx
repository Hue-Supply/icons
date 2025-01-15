import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCalendarHeart = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 2.04v4m8-4v4m-13 4h18m-13.2 12h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.312C21 19.76 21 18.92 21 17.24v-8.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4.04 17.88 4.04 16.2 4.04H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.31C3 6.32 3 7.16 3 8.84v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.31c.642.328 1.482.328 3.162.328m4.198-7.928c-.62-.705-1.655-.895-2.433-.249s-.886 1.726-.276 2.49c.61.763 2.709 2.545 2.709 2.545s2.098-1.782 2.709-2.546a1.75 1.75 0 0 0-.277-2.489c-.79-.639-1.812-.456-2.432.25"
    />
  </svg>
);
export default SvgCalendarHeart;
