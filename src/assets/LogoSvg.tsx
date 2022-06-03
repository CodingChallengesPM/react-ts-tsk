interface LogoSvgProps {
  width?: number;
  height?: number;
}

const LogoSvg = ({width = 106, height = 26}:LogoSvgProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 106 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 19V2L17 17V19L1 34V26L10 18L7 14L1 19Z" fill="#AA0565" stroke="#AA0565"/>
    <path d="M29 28V8H31.893V25.852H43V28H29ZM64 17.5C64 19.656 63.569 21.519 62.706 23.09C61.843 24.66 60.659 25.87 59.155 26.722C57.65 27.574 55.932 28 54 28C52.068 28 50.35 27.574 48.845 26.722C47.341 25.871 46.157 24.66 45.295 23.089C44.43 21.52 44 19.656 44 17.5C44 15.344 44.431 13.481 45.294 11.91C46.157 10.34 47.341 9.13 48.845 8.278C50.35 7.426 52.068 7 54 7C55.932 7 57.65 7.426 59.155 8.278C60.659 9.129 61.843 10.34 62.705 11.911C63.57 13.48 64 15.344 64 17.5ZM61.345 17.5C61.345 15.73 61.017 14.236 60.361 13.018C59.711 11.801 58.831 10.879 57.717 10.254C56.611 9.628 55.372 9.316 54 9.316C52.628 9.316 51.386 9.628 50.272 10.254C49.166 10.879 48.285 11.801 47.628 13.018C46.979 14.236 46.655 15.73 46.655 17.5C46.655 19.27 46.979 20.764 47.628 21.982C48.285 23.199 49.166 24.121 50.272 24.746C51.386 25.372 52.628 25.684 54 25.684C55.372 25.684 56.61 25.372 57.717 24.746C58.83 24.121 59.712 23.199 60.361 21.982C61.017 20.764 61.345 19.27 61.345 17.5ZM106 17.5C106 19.656 105.569 21.519 104.706 23.09C103.843 24.66 102.659 25.87 101.155 26.722C99.65 27.574 97.932 28 96 28C94.068 28 92.35 27.574 90.845 26.722C89.341 25.871 88.157 24.66 87.295 23.089C86.43 21.52 86 19.656 86 17.5C86 15.344 86.431 13.481 87.294 11.91C88.157 10.34 89.341 9.13 90.845 8.278C92.35 7.426 94.068 7 96 7C97.932 7 99.65 7.426 101.155 8.278C102.659 9.129 103.843 10.34 104.706 11.911C105.569 13.481 106 15.344 106 17.5ZM103.345 17.5C103.345 15.73 103.017 14.236 102.361 13.018C101.712 11.801 100.83 10.879 99.717 10.254C98.611 9.628 97.372 9.316 96 9.316C94.628 9.316 93.386 9.628 92.272 10.254C91.166 10.879 90.285 11.801 89.628 13.018C88.979 14.236 88.655 15.73 88.655 17.5C88.655 19.27 88.979 20.764 89.628 21.982C90.285 23.199 91.166 24.121 92.272 24.746C93.386 25.372 94.628 25.684 96 25.684C97.372 25.684 98.61 25.372 99.717 24.746C100.83 24.121 101.712 23.199 102.361 21.982C103.017 20.764 103.345 19.27 103.345 17.5ZM81.087 13.667C80.8618 13.0219 80.543 12.4135 80.141 11.861C79.7622 11.3269 79.2956 10.861 78.761 10.483C78.2126 10.0945 77.6028 9.80103 76.957 9.615C76.283 9.415 75.544 9.315 74.739 9.315C73.42 9.315 72.221 9.628 71.141 10.254C70.061 10.879 69.203 11.801 68.565 13.018C67.927 14.236 67.609 15.73 67.609 17.5C67.609 19.27 67.931 20.764 68.576 21.982C69.221 23.199 70.094 24.121 71.196 24.746C72.297 25.372 73.536 25.684 74.913 25.684C76.188 25.684 77.312 25.434 78.283 24.936C79.2324 24.457 80.0244 23.7157 80.565 22.8C81.115 21.875 81.391 20.787 81.391 19.536L82.217 19.696H75.522V17.5H84V19.696C84 21.379 83.609 22.843 82.826 24.087C82.051 25.332 80.978 26.297 79.609 26.982C78.246 27.66 76.68 28 74.913 28C72.942 28 71.21 27.574 69.717 26.722C68.232 25.871 67.073 24.66 66.239 23.089C65.413 21.52 65 19.656 65 17.5C65 15.883 65.236 14.43 65.707 13.138C66.185 11.841 66.859 10.736 67.728 9.825C68.596 8.91446 69.6485 8.19985 70.815 7.729C72.004 7.243 73.312 7 74.74 7C75.914 7 77.008 7.163 78.023 7.49C79.0029 7.78803 79.9253 8.2499 80.751 8.856C81.5437 9.43005 82.2249 10.1441 82.761 10.963C83.3017 11.7844 83.6786 12.7026 83.871 13.667H81.088H81.087Z" fill="black"/>
    </svg>
  )
}

export default LogoSvg