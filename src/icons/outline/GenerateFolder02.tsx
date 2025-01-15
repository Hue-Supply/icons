import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGenerateFolder02 = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
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
      d="M5 4v17m0 0H3m2 0h4m0 0V4m0 17h2M3 3h8m9.2 1.181V4.2m-6.615 8.474c.28-.082.42-.123.548-.17a4 4 0 0 0 2.37-2.37c.047-.129.088-.269.17-.549.052-.178.078-.267.098-.306a.5.5 0 0 1 .895 0c.02.04.046.128.098.306.082.28.123.42.17.549a4 4 0 0 0 2.37 2.37c.13.047.27.088.549.17.178.052.267.078.307.098a.5.5 0 0 1 0 .895c-.04.02-.129.046-.307.098-.28.082-.42.123-.549.17a4 4 0 0 0-2.37 2.37c-.047.13-.088.27-.17.549-.052.178-.078.267-.098.307a.5.5 0 0 1-.895 0 3 3 0 0 1-.098-.307 9 9 0 0 0-.17-.549 4 4 0 0 0-2.37-2.37c-.129-.047-.269-.088-.548-.17-.179-.052-.268-.078-.307-.098a.5.5 0 0 1 0-.895c.04-.02.128-.046.306-.098m4.72-8.753c.147-.043.22-.065.287-.09a2.09 2.09 0 0 0 1.239-1.238c.024-.067.046-.14.089-.287.027-.093.04-.14.05-.16a.261.261 0 0 1 .469 0c.01.02.024.067.05.16.044.147.065.22.09.287a2.09 2.09 0 0 0 1.238 1.239c.068.024.14.046.287.089.093.027.14.04.16.05a.261.261 0 0 1 0 .469c-.02.01-.067.024-.16.05-.146.044-.22.065-.287.09a2.09 2.09 0 0 0-1.238 1.238c-.025.068-.046.14-.09.287-.026.093-.04.14-.05.16a.261.261 0 0 1-.468 0c-.01-.02-.024-.067-.051-.16a5 5 0 0 0-.09-.287 2.09 2.09 0 0 0-1.238-1.238 5 5 0 0 0-.287-.09c-.093-.026-.14-.04-.16-.05a.261.261 0 0 1 0-.468c.02-.01.067-.024.16-.051"
    />
  </svg>
);
export default SvgGenerateFolder02;
