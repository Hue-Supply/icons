import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBarn = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M3 21h18M6.522 5.297 4.342 8.93a3 3 0 0 0-.236.431 1.5 1.5 0 0 0-.086.312c-.02.12-.02.244-.02.492V18.6c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.656c.32.163.74.163 1.581.163h11.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581v-8.435c0-.248 0-.371-.02-.492a1.5 1.5 0 0 0-.086-.312 3 3 0 0 0-.236-.431l-2.18-3.633c-.177-.295-.265-.442-.38-.563a1.5 1.5 0 0 0-.349-.271c-.145-.082-.31-.131-.64-.23l-3.42-1.026c-.256-.077-.384-.115-.514-.13a1.5 1.5 0 0 0-.35 0c-.13.015-.258.053-.515.13L7.89 4.233c-.329.099-.494.148-.639.23a1.5 1.5 0 0 0-.349.271c-.115.12-.203.268-.38.563M14.4 21v-3.811c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656c-.32-.163-.74-.163-1.581-.163-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656c-.163.32-.163.74-.163 1.58V21zM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
);
export default SvgBarn;
