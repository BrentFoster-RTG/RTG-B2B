import Checkbox from "@mui/material/Checkbox";
import { SvgIcon } from "@mui/material";

const UncheckedIcon = () => (
  <SvgIcon viewBox="0 0 24 24">
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="4"
      fill="#fff"
      stroke="#ccc"
      strokeWidth="2"
    />
  </SvgIcon>
);

const CheckedIcon = () => (
  <SvgIcon viewBox="0 0 24 24">
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="4"
      fill="#FFBA18"
      stroke="#FFBA18"
      strokeWidth="2"
    />
    <path
      d="M6.5 12.5L10 16L17.5 8.5"
      stroke="#000"
      strokeWidth="2.2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

const CustomCheckbox = (props) => {
  return (
    <Checkbox
      disableRipple
      icon={<UncheckedIcon />}
      checkedIcon={<CheckedIcon />}
      sx={{
        padding: 0,
      }}
      {...props}
    />
  );
};

export default CustomCheckbox;
