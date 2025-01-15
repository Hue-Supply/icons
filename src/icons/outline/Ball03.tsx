import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBall03 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M9.752 2.341c0 .17.09.327.238.412l.886.512c.363.21.544.314.735.365a1.5 1.5 0 0 0 .778 0c.19-.05.372-.156.735-.365l.781-.451a.69.69 0 0 0 .343-.594m4.904 2.82a.6.6 0 0 0-.298.516v.953c0 .42 0 .629.05.82.069.254.203.487.39.673.14.14.32.244.683.454l.799.46c.201.117.45.117.651 0m-.088 6.126a.48.48 0 0 0-.475 0l-.887.511c-.362.21-.544.315-.683.454-.187.186-.321.419-.39.674-.05.19-.05.4-.05.819v.755c0 .275.12.532.323.71m-4.93 2.763c0-.385-.204-.74-.537-.932l-.586-.338c-.363-.21-.545-.315-.735-.366a1.5 1.5 0 0 0-.778 0c-.19.051-.372.156-.735.366l-.452.26a1.34 1.34 0 0 0-.665 1.03m-5.177-3.109c.348-.2.562-.572.562-.973v-.649c0-.42 0-.629-.051-.819a1.5 1.5 0 0 0-.39-.674c-.139-.14-.32-.244-.683-.454l-.562-.324c-.348-.2-.776-.2-1.124 0m.283-6.034c.174.1.388.1.562 0l.843-.486c.363-.21.545-.315.684-.454a1.5 1.5 0 0 0 .39-.674c.05-.19.05-.4.05-.819V5.63c0-.252-.084-.492-.233-.685M12 15.643v3.97m0-15.93V8.5m3.459 5.145 3.438 1.985M5.102 7.666l3.891 2.247m6.466-.263 3.438-1.985M5.102 15.631l3.68-2.125M4.912 4.945A9.97 9.97 0 0 0 2 12c0 4.752 3.315 8.73 7.759 9.748M4.913 4.945A9.97 9.97 0 0 1 12 2c5.523 0 10 4.477 10 10a9.97 9.97 0 0 1-2.823 6.964m-9.418 2.784c.72.165 1.47.252 2.241.252a9.97 9.97 0 0 0 7.177-3.036m-10.332-7.4v.872c0 .504 0 .757.074.983.065.2.171.384.312.54.159.177.377.303.814.555l.755.436c.437.252.656.378.888.428.206.043.418.043.624 0 .232-.05.45-.176.888-.428l.755-.436c.437-.252.655-.378.814-.555.14-.156.247-.34.312-.54.074-.226.074-.479.074-.983v-.872c0-.504 0-.757-.074-.983a1.5 1.5 0 0 0-.312-.54c-.159-.177-.377-.303-.814-.555L13.2 9.05c-.437-.252-.656-.378-.888-.428a1.5 1.5 0 0 0-.624 0c-.232.05-.45.176-.888.428l-.755.436c-.437.252-.655.378-.814.555-.14.156-.247.34-.312.54-.074.226-.074.479-.074.983"
    />
  </svg>
);
export default SvgBall03;
