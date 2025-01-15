import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudFirewall = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20 18.184c1.206-.87 2-2.35 2-4.03 0-2.677-2.015-4.846-4.5-4.846-.463 0-.91.075-1.331.215C15.969 6.99 13.997 5 11.593 5 9.246 5 7.31 6.895 7.034 9.341a4 4 0 0 0-.534-.033c-2.485 0-4.5 2.17-4.5 4.846 0 1.567.69 2.96 1.762 3.846m7.564-5.262-1.506.47c-.57.178-.854.268-1.065.44-.186.15-.33.347-.42.57-.1.252-.1.55-.1 1.147v.413c0 1.104 0 1.656.12 2.176.12.53.333 1.033.626 1.49.288.449.683.835 1.472 1.607.523.511.785.767 1.082.87.301.105.629.105.93 0 .297-.103.559-.359 1.082-.87.789-.772 1.184-1.158 1.472-1.607.293-.457.505-.96.627-1.49.12-.52.12-1.072.12-2.176v-.413c0-.597 0-.895-.102-1.147a1.4 1.4 0 0 0-.42-.57c-.21-.172-.495-.261-1.064-.44l-1.506-.47c-.25-.078-.376-.117-.503-.133a1.4 1.4 0 0 0-.342 0c-.127.016-.253.055-.503.133"
    />
  </svg>
);
export default SvgCloudFirewall;
