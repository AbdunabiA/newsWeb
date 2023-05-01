

export const ChosenIcon = ({ className, width = 16, height = 21 }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.625 0H2.375C1.32031 0 0.5 0.859375 0.5 1.875V18.75C0.5 19.7266 1.51562 20.3125 2.375 19.8438L8 16.5625L13.5859 19.8438C14.4453 20.3125 15.5 19.7266 15.5 18.75V1.875C15.5 0.859375 14.6406 0 13.625 0ZM13.625 17.6562L8 14.375L2.375 17.6562V2.10938C2.375 1.99219 2.45312 1.875 2.57031 1.875H13.3516C13.5078 1.875 13.625 1.99219 13.625 2.10938V17.6562Z"
        // fill="#3E3232"
        // fillOpacity="0.5"
      />
    </svg>
  );
};

