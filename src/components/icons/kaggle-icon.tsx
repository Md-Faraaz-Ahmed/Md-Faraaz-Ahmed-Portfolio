import type { SVGProps } from "react";

const KaggleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Kaggle</title>
    <path
      fill="currentColor"
      d="M15.429 12l-4.715 4.714-4.714-4.714L1.286 16.714l4.714 4.715L1.286 26.143l4.714 4.714 4.715-4.714 4.714 4.714 4.714-4.714-4.714-4.715 4.714-4.714-4.714-4.714z"
      transform="translate(-1.286 -6.857) scale(0.8)"
    />
  </svg>
);

export default KaggleIcon;
