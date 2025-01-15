import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClipboardUpload = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    
    viewBox="0 0 24 24"
    {...props}
   fill={props.color || "currentColor"}>
    <path
      fill="currentColor"
      d="m5.638 21.673-.454.891zm-1.311-1.311.891-.454zm15.346 0-.891-.454zm-1.311 1.311.454.891zm1.612-15.065.992-.13zm-2.582-2.582.13-.992zM4.026 6.608l-.992-.13zm2.582-2.582-.13-.992zm2.06 1.923.258-.966zm-1.061-1.06.966-.26zm8.786 0-.966-.26zm-1.06 1.06-.26-.966zm0-3.898-.26.966zm1.06 1.06-.966.26zm-7.726-1.06.26.966zm-1.06 1.06.966.26zM11 17a1 1 0 1 0 2 0zm2-6a1 1 0 1 0-2 0zm.754 3.466a1 1 0 1 0 1.492-1.332zm-1.703-3.41.745-.665zm-.101 0 .745.667zm-3.196 2.078a1 1 0 1 0 1.492 1.332zM19 7.5v9.7h2V7.5zM15.2 21H8.8v2h6.4zM5 17.2V7.5H3v9.7zM8.8 21c-.857 0-1.439 0-1.889-.038-.438-.035-.663-.1-.819-.18l-.908 1.782c.485.247 1.002.346 1.564.392C7.298 23 7.976 23 8.8 23zM3 17.2c0 .824 0 1.501.044 2.052.046.562.145 1.079.392 1.564l1.782-.908c-.08-.156-.145-.38-.18-.819C5 18.639 5 18.057 5 17.2zm3.092 3.582a2 2 0 0 1-.874-.874l-1.782.908a4 4 0 0 0 1.748 1.748zM19 17.2c0 .857 0 1.439-.038 1.889-.035.438-.1.663-.18.819l1.782.908c.247-.485.346-1.002.392-1.564.045-.55.044-1.228.044-2.052zM15.2 23c.824 0 1.501 0 2.052-.044.562-.046 1.079-.145 1.564-.392l-.908-1.782c-.156.08-.38.145-.819.18-.45.037-1.032.038-1.889.038zm3.582-3.092a2 2 0 0 1-.874.874l.908 1.782a4 4 0 0 0 1.748-1.748zM21 7.5c0-.433.002-.746-.034-1.022l-1.983.261c.015.114.017.265.017.761zM16.5 5c.496 0 .648.002.761.017l.261-1.983C17.246 2.998 16.932 3 16.5 3zm4.466 1.478a4 4 0 0 0-3.444-3.444l-.26 1.983a2 2 0 0 1 1.72 1.722zM5 7.5c0-.496.002-.647.017-.761l-1.983-.261C2.998 6.754 3 7.068 3 7.5zM7.5 3c-.433 0-.746-.002-1.022.034l.261 1.983C6.853 5.002 7.004 5 7.5 5zM5.017 6.739A2 2 0 0 1 6.74 5.017l-.261-1.983a4 4 0 0 0-3.444 3.444zM9.556 3h4.888V1H9.556zm4.888 2H9.556v2h4.888zM9.556 5c-.242 0-.39 0-.502-.005-.106-.005-.131-.013-.128-.012L8.41 6.915c.35.094.746.085 1.147.085zm-3-1c0 .4-.009.797.085 1.147l1.932-.518c0 .004-.007-.02-.012-.128-.005-.112-.005-.26-.005-.501zm2.37.983a.5.5 0 0 1-.353-.354l-1.932.518a2.5 2.5 0 0 0 1.768 1.768zM15.444 4c0 .242 0 .39-.005.501-.005.107-.013.132-.012.128l1.932.518c.094-.35.085-.746.085-1.147zm-1 3c.4 0 .797.009 1.147-.085l-.517-1.932c.004-.001-.022.007-.128.012-.112.005-.26.005-.502.005zm.983-2.37a.5.5 0 0 1-.353.353l.517 1.932a2.5 2.5 0 0 0 1.768-1.768zM14.444 3c.242 0 .39 0 .502.005.106.005.132.013.128.012l.517-1.932C15.241.991 14.845 1 14.444 1zm3 1c0-.4.009-.797-.085-1.147l-1.932.518c0-.004.007.021.012.128.005.112.005.26.005.501zm-2.37-.983a.5.5 0 0 1 .353.354l1.932-.518a2.5 2.5 0 0 0-1.768-1.768zM9.556 1c-.4 0-.797-.009-1.147.085l.517 1.932c-.003.001.022-.007.128-.012C9.166 3 9.314 3 9.556 3zm-1 3c0-.242 0-.39.005-.501.005-.107.013-.132.012-.128L6.64 2.853c-.094.35-.085.746-.085 1.147zm-.147-2.915A2.5 2.5 0 0 0 6.64 2.853l1.932.518a.5.5 0 0 1 .353-.354zM13 17v-5.967h-2V17zm0-5.967V11h-2v.033zm2.246 2.101-2.45-2.743-1.491 1.332 2.45 2.743zm-4.042-2.743-2.45 2.743 1.492 1.332 2.45-2.743zm1.592 0a1.07 1.07 0 0 0-.796-.358v2a.93.93 0 0 1-.695-.31zM12 10.033c-.31 0-.598.135-.796.358l1.491 1.332a.93.93 0 0 1-.695.31z"
    />
  </svg>
);
export default SvgClipboardUpload;
