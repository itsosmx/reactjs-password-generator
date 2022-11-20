import { FormControlLabel, Checkbox as CheckboxMUI } from "@mui/material";
import React from "react";

export default function Checkbox({
  label,
  checked,
  onChange,
  name,
  value,
  ...props
}) {
  return (
    <FormControlLabel
      label={label}
      control={
        <CheckboxMUI
          color="secondary"
          sx={{ color: "white" }}
          onChange={onChange}
          name={name}
          checked={value}
          {...props}
        />
      }
    />
  );
}
