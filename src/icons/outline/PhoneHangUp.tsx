import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPhoneHangUp = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M6.544 16.013a20.2 20.2 0 0 1-3.379-5.19c-.04-.088-.06-.133-.19-.636-.34-1.326.115-3.824.902-4.944.3-.426.482-.609.848-.975.376-.375.564-.563.754-.683a2 2 0 0 1 2.129 0c.19.12.378.308.754.683l.381.382c.411.41.617.617.729.857a1.5 1.5 0 0 1 .128.82c-.033.263-.166.522-.432 1.039L8.54 8.588c-.114.222-.172.333-.205.493a1.5 1.5 0 0 0-.01.43c.025.16.063.246.14.417.267.59.774 1.512 1.678 2.572m3.14 2.73c.384.235.72.408.99.533.185.085.277.127.448.152.124.018.334.009.455-.02.168-.041.284-.108.517-.242l1.1-.635c.452-.26.678-.39.908-.44a1.5 1.5 0 0 1 1 .132c.21.107.394.292.763.66l.268.268c.375.376.563.563.683.754a2 2 0 0 1 0 2.128c-.12.191-.308.379-.683.755-.366.366-.55.549-.975.848-1.12.787-3.618 1.242-4.944.901-.504-.13-.548-.15-.637-.19-.93-.42-1.967-.972-3.033-1.693M2.902 21l17.5-17.5"
    />
  </svg>
);
export default SvgPhoneHangUp;
