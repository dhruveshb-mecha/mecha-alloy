type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  circle: (props: IconProps) => (
    <svg
      width="114"
      height="114"
      viewBox="0 0 114 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="57.2477"
        cy="57.184"
        r="54.923"
        stroke="currentColor"
        stroke-width="3.00948"
      />
    </svg>
  ),
  send_icon_disabled: (props: IconProps) => (
    <svg
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="23.9996"
        cy="24.2608"
        r="21.941"
        fill="#898A8D"
      />
      <path
        d="M14.4599 22.8301L23.9995 13.2905L33.5391 22.8301M23.9995 15.1984L23.9995 35.2315"
        stroke="#28282A"
        stroke-width="3.5"
        stroke-linecap="square"
        stroke-linejoin="bevel"
      />
    </svg>
  ),
  send_icon_enabled: (props: IconProps) => (
    <svg
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="23.9996"
        cy="24.2608"
        r="21.941"
        fill="#0055FF"
      />
      <path
        d="M14.4599 22.8301L23.9995 13.2905L33.5391 22.8301M23.9995 15.1984L23.9995 35.2315"
        stroke="white"
        stroke-width="3.5"
        stroke-linecap="square"
        stroke-linejoin="bevel"
      />
    </svg>
  ),
  mic_icon: (props: IconProps) => (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_6384_703)">
        <circle
          cx="25"
          cy="25"
          r="23.75"
          fill="#0D0D0E"
          stroke="white"
          stroke-width="2.5"
        />
        <path
          d="M25 39L25 36.2248M14 24.9448L14 25.2248C14 31.2999 18.9249 36.2248 25 36.2248V36.2248C31.0751 36.2248 36 31.2999 36 25.2248L36 24.9448M31.0366 18.0429L31.0366 24.7629C31.0366 28.1002 28.3339 30.8057 25 30.8057C21.6661 30.8057 18.9634 28.1002 18.9634 24.7629L18.9634 18.0429C18.9634 14.7055 21.6661 12 25 12C28.3339 12 31.0366 14.7055 31.0366 18.0429Z"
          stroke="white"
          stroke-width="3.5"
          stroke-linecap="square"
          stroke-linejoin="bevel"
        />
      </g>
      <defs>
        <clipPath id="clip0_6384_703">
          <rect width="50" height="50" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  stop_icon: (props: IconProps) => (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_6384_730)">
        <circle
          cx="25"
          cy="25"
          r="23.75"
          fill="#0D0D0E"
          stroke="white"
          stroke-width="2.5"
        />
        <path
          d="M17 32.739L17 16.739L33 16.739L33 32.739L17 32.739Z"
          fill="#FF1111"
          stroke="#FF1111"
          stroke-width="3.5"
          stroke-linecap="square"
          stroke-linejoin="bevel"
        />
      </g>
      <defs>
        <clipPath id="clip0_6384_730">
          <rect width="50" height="50" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  send_icon_red: (props: IconProps) => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="24.151"
        cy="24.0001"
        r="21.941"
        fill="#FF6060"
      />
      <path
        d="M14.6113 22.0921L24.1509 12.5525L33.6904 22.0921M24.1509 14.4604L24.1509 34.4935"
        stroke="white"
        stroke-width="3.33885"
        stroke-linecap="square"
        stroke-linejoin="bevel"
      />
    </svg>
  ),
  // send_icon_disabled: (props: IconProps) => (
  //   <svg
  //     width="48"
  //     height="48"
  //     viewBox="0 0 48 48"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //     {...props}
  //   >
  //     <circle
  //       cx="24.151"
  //       cy="24.0001"
  //       r="21.941"
  //       fill="#898A8D"
  //     />
  //     <path
  //       d="M14.6113 22.0921L24.1509 12.5525L33.6904 22.0921M24.1509 14.4604L24.1509 34.4935"
  //       stroke="white"
  //       stroke-width="3.33885"
  //       stroke-linecap="square"
  //       stroke-linejoin="bevel"
  //     />
  //   </svg>
  // ),

  send_icon_yellow: (props: IconProps) => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="24.151"
        cy="23.8487"
        r="21.941"
        fill="#E4B200"
      />
      <path
        d="M14.6113 21.9408L24.1509 12.4012L33.6904 21.9408M24.1509 14.3092L24.1509 34.3423"
        stroke="white"
        stroke-width="3.33885"
        stroke-linecap="square"
        stroke-linejoin="bevel"
      />
    </svg>
  ),
  play_icon_red: (props: IconProps) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="20"
        cy="20"
        r="19"
        stroke="#FF7575"
        stroke-width="2"
      />
      <path
        d="M15 27L29 20L15 13L15 27Z"
        fill="#FF7575"
        stroke="#FF7575"
        stroke-width="3.5"
        stroke-linecap="square"
        stroke-linejoin="bevel"
      />
    </svg>
  ),
  camera_icon: (props: IconProps) => (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_6384_938)">
        <circle
          cx="21.6959"
          cy="21.8487"
          r="20.6959"
          stroke="white"
          stroke-width="2"
        />
        <path
          d="M25.4434 22.8388C25.4434 24.9167 23.7656 26.6012 21.6959 26.6012C19.6263 26.6012 17.9485 24.9167 17.9485 22.8388C17.9485 20.7609 19.6263 19.0765 21.6959 19.0765C23.7656 19.0765 25.4434 20.7609 25.4434 22.8388Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="bevel"
        />
      </g>
      <defs>
        <clipPath id="clip0_6384_938">
          <rect
            width="43.3917"
            height="43.3917"
            fill="white"
            transform="translate(0 0.152832)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  voice_assistant_icon: (props: IconProps) => (
    <svg
      width="38"
      height="36"
      viewBox="0 0 38 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_f_6384_812)">
        <path
          d="M12.2209 3.56063C7.28842 4.33807 5.37021 8.79756 5.02767 10.9301C4.52704 13.0087 3.82616 17.587 5.02767 19.2714C6.52957 21.377 5.02767 27.2078 8.66383 31.095C12.3 34.9822 24.6313 34.4963 25.738 31.095C26.8446 27.6937 31.5874 28.3416 33.7217 22.5107C35.856 16.6799 33.9588 8.17669 28.5836 6.96194C23.2085 5.74719 18.3866 2.58883 12.2209 3.56063Z"
          fill="#FF7575"
          fill-opacity="0.1"
        />
        <path
          d="M12.2209 3.56063C7.28842 4.33807 5.37021 8.79756 5.02767 10.9301C4.52704 13.0087 3.82616 17.587 5.02767 19.2714C6.52957 21.377 5.02767 27.2078 8.66383 31.095C12.3 34.9822 24.6313 34.4963 25.738 31.095C26.8446 27.6937 31.5874 28.3416 33.7217 22.5107C35.856 16.6799 33.9588 8.17669 28.5836 6.96194C23.2085 5.74719 18.3866 2.58883 12.2209 3.56063Z"
          stroke="#FF7575"
          stroke-width="0.972222"
        />
      </g>
      <path
        d="M12.2209 3.56063C7.28842 4.33807 5.37021 8.79756 5.02767 10.9301C4.52704 13.0087 3.82616 17.587 5.02767 19.2714C6.52957 21.377 5.02767 27.2078 8.66383 31.095C12.3 34.9822 24.6313 34.4963 25.738 31.095C26.8446 27.6937 31.5874 28.3416 33.7217 22.5107C35.856 16.6799 33.9588 8.17669 28.5836 6.96194C23.2085 5.74719 18.3866 2.58883 12.2209 3.56063Z"
        fill="url(#paint0_radial_6384_812)"
        fill-opacity="0.05"
        stroke="#FF7575"
        stroke-width="0.972222"
      />
      <g filter="url(#filter1_f_6384_812)">
        <path
          d="M26.7973 4.84455C23.0898 1.37788 18.3125 2.48612 16.3873 3.47358C14.4065 4.30329 10.295 6.45065 9.69459 8.40231C8.94413 10.8419 3.32682 13.0918 2.48115 18.2829C1.63549 23.474 9.73463 33.002 13.1555 31.8731C16.5764 30.7441 19.0217 34.902 25.0344 33.1554C31.0471 31.4089 36.6836 24.8744 34.2978 19.8782C31.912 14.8821 31.4316 9.17789 26.7973 4.84455Z"
          stroke="#FF7575"
          stroke-width="0.972222"
        />
      </g>
      <path
        d="M26.7973 4.84455C23.0898 1.37788 18.3125 2.48612 16.3873 3.47358C14.4065 4.30329 10.295 6.45065 9.69459 8.40231C8.94413 10.8419 3.32682 13.0918 2.48115 18.2829C1.63549 23.474 9.73463 33.002 13.1555 31.8731C16.5764 30.7441 19.0217 34.902 25.0344 33.1554C31.0471 31.4089 36.6836 24.8744 34.2978 19.8782C31.912 14.8821 31.4316 9.17789 26.7973 4.84455Z"
        fill="url(#paint1_radial_6384_812)"
        fill-opacity="0.1"
        stroke="#FF7575"
        stroke-width="0.972222"
      />
      <defs>
        <filter
          id="filter0_f_6384_812"
          x="2.61318"
          y="1.62685"
          width="33.717"
          height="33.9553"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood
            flood-opacity="0"
            result="BackgroundImageFix"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="0.632375"
            result="effect1_foregroundBlur_6384_812"
          />
        </filter>
        <filter
          id="filter1_f_6384_812"
          x="0.187726"
          y="0.269514"
          width="36.9038"
          height="35.5384"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood
            flood-opacity="0"
            result="BackgroundImageFix"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="0.869516"
            result="effect1_foregroundBlur_6384_812"
          />
        </filter>
        <radialGradient
          id="paint0_radial_6384_812"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(19.472 18.6044) rotate(90) scale(15.2268 15.1077)"
        >
          <stop />
          <stop offset="1" stop-color="#FF7575" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_6384_812"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(19.26 19.5052) rotate(51.8522) scale(15.2908 15.1654)"
        >
          <stop stop-color="#FF7575" />
          <stop offset="0.985" stop-color="#080808" />
        </radialGradient>
      </defs>
    </svg>
  ),
  right_arrow: (props: IconProps) => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="24.151"
        cy="24.0001"
        r="21.941"
        fill="#0D0D0E"
      />
      <path
        d="M21.242 14.5526L30.7816 24.0922L21.242 33.6318M30.7816 24.0922L10.7085 24.0922"
        stroke="white"
        stroke-width="3.33885"
        stroke-linecap="square"
        stroke-linejoin="bevel"
      />
    </svg>
  ),

  left_arrow: (props: IconProps) => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="24.151"
        cy="24.0001"
        r="21.941"
        fill="#0D0D0E"
      />
      <path
        d="M21.242 33.6318L11.7024 24.0922L21.242 14.5526M11.7024 24.0922L31.7755 24.0922"
        stroke="white"
        stroke-width="3.33885"
        stroke-linecap="square"
        stroke-linejoin="bevel"
      />
    </svg>
  ),
};
