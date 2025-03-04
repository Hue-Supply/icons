import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudX = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="m7.034 9.341-.126.992a1 1 0 0 0 1.12-.88zm9.135.182-.997.079a1 1 0 0 0 1.313.87zM9.75 10.527a1 1 0 0 0-1.414 1.414zm3.512 6.34a1 1 0 0 0 1.414-1.414zm1.414-4.926a1 1 0 0 0-1.414-1.414zm-6.34 3.512a1 1 0 1 0 1.414 1.414zM6.5 18C4.636 18 3 16.35 3 14.154H1C1 17.31 3.394 20 6.5 20zM3 14.154c0-2.195 1.636-3.846 3.5-3.846v-2c-3.106 0-5.5 2.688-5.5 5.846zm18 0C21 16.349 19.364 18 17.5 18v2c3.106 0 5.5-2.689 5.5-5.846zm-3.5-3.846c1.864 0 3.5 1.65 3.5 3.846h2c0-3.158-2.394-5.846-5.5-5.846zm0 7.692h-11v2h11zM8.028 9.454C8.255 7.448 9.818 6 11.593 6V4C8.674 4 6.367 6.342 6.04 9.229zm-1.528.854q.207 0 .408.025L7.16 8.35a5 5 0 0 0-.66-.041zm9.985.164q.481-.162 1.015-.164v-2c-.573 0-1.126.093-1.647.266zM11.593 6c1.817 0 3.415 1.52 3.579 3.602l1.994-.157C16.93 6.458 14.584 4 11.593 4zm-3.256 5.941 2.463 2.463 1.414-1.414-2.463-2.463zm2.463 2.463 2.463 2.463 1.414-1.414-2.463-2.463zm2.463-3.877L10.8 12.99l1.414 1.414 2.463-2.463zM10.8 12.99l-2.463 2.463 1.414 1.414 2.463-2.463z"
    />
  </svg>
);
export default SvgCloudX;
