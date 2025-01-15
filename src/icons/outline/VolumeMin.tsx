import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVolumeMin = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M20 8s1.5 1.5 1.5 4-1.5 4-1.5 4M6.4 8.16h.605c.255 0 .383 0 .505-.025a1.3 1.3 0 0 0 .314-.103c.113-.054.215-.13.42-.282l3.927-2.911c1.233-.915 1.85-1.372 2.366-1.36a1.5 1.5 0 0 1 1.146.578C16 4.463 16 5.23 16 6.767v10.464c0 1.536 0 2.304-.318 2.711a1.5 1.5 0 0 1-1.145.577c-.516.013-1.133-.445-2.367-1.36l-3.926-2.913c-.205-.152-.307-.228-.42-.282a1.3 1.3 0 0 0-.314-.104c-.122-.024-.25-.024-.505-.024H6.4c-.84 0-1.26 0-1.581-.163a1.5 1.5 0 0 1-.656-.656C4 14.697 4 14.277 4 13.437v-2.878c0-.84 0-1.26.163-1.58a1.5 1.5 0 0 1 .656-.656c.32-.164.74-.164 1.581-.164"
    />
  </svg>
);
export default SvgVolumeMin;
