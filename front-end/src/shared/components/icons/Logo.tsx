import type { SVGProps } from "react";

export function MasterTrackLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={480}
      height={380}
      viewBox="0 0 480 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="65f32ff4">
        <path
          id="ba47f102"
          d="M56 0H20C8.9543 0 0 8.9543 0 20V360C0 371.046 8.9543 380 20 380H56C67.0457 380 76 371.046 76 360V20C76 8.9543 67.0457 0 56 0Z"
          fill="white"
        />
        <path
          id="f0bfdf47"
          d="M460 0H424C412.954 0 404 8.9543 404 20V360C404 371.046 412.954 380 424 380H460C471.046 380 480 371.046 480 360V20C480 8.9543 471.046 0 460 0Z"
          fill="white"
        />
        <path
          id="4e7ff2ba"
          d="M76 80L180 210V296L76 180V80Z"
          fill="white"
        />
        <path
          id="423b57cf"
          d="M404 80L300 210V296L404 180V80Z"
          fill="white"
        />
        <path
          id="b4deeff4"
          d="M90 0H390C402 0 412 10 412 22C412 34 402 44 390 44H90C78 44 68 34 68 22C68 10 78 0 90 0Z"
          fill="url(#1e5a8fe4)"
        />
        <path
          id="69b54ad9"
          d="M202 40H278V360C278 372 268 380 256 380H224C212 380 202 372 202 360V40Z"
          fill="url(#fa3b9271)"
        />
        <path
          id="295c6001"
          opacity={0.95}
          d="M240 118L296 185L278 210L240 168L202 210L184 185L240 118Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="1e5a8fe4"
          x1="68"
          y1="44"
          x2="79.0746"
          y2="-42.5835"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1D4ED8" />
          <stop offset="0.6" stopColor="#3B82F6" />
          <stop offset="1" stopColor="#60A5FA" />
        </linearGradient>
        <linearGradient
          id="fa3b9271"
          x1="202"
          y1="380"
          x2="346.767"
          y2="347.64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1D4ED8" />
          <stop offset="0.6" stopColor="#3B82F6" />
          <stop offset="1" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default MasterTrackLogo;