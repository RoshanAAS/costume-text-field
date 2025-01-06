"use client"

import *  as React from "react" 
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { transform } from "../../utils/dataTransformers.js";
import textInputValidationRules from "../../utils/validations/textInputValidationRules.js";

type RuleName = keyof typeof textInputValidationRules;

interface CostumeTextFieldProps {
  id: string;
  label: string;
  value?: string;
  regExpression?: RegExp;
  transformers?: string[];
  noValueNoRender?: boolean;
  sx?: object;
  onChange?: (value: string) => void;
  controllerOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  variant?: "outlined" | "filled" | "standard";
  disableUnderline?: boolean;
  focused?: boolean;
  register?: any;
  required?: boolean;
  errors?: Record<string, any>;
  helperText?: string;
  inputRightIcon?: React.ReactNode;
  selectSize?: "small" | "medium";
  inputLeftIcon?: React.ReactNode;
  ruleName?: RuleName;
  placeHolderText?: string;
  multiline?: boolean;
  readOnly?: boolean;
  inputRef?: React.Ref<any>;
  width?: number | string;
  customValidation?: (value: string) => boolean | string;
}

const CostumeTextField: React.FC<CostumeTextFieldProps> = (props) : React.JSX.Element | null => {
  const {
    id, label, value = "", regExpression, transformers, noValueNoRender = false, sx = {},
    onChange = null, controllerOnChange = null, disabled = false, variant = "outlined", disableUnderline = true,
    focused, register, required = false, errors = {}, helperText = "", inputRightIcon = "",
    selectSize = "small", inputLeftIcon = "", ruleName = "", placeHolderText = "", multiline = false,
    readOnly = false, inputRef = "", width, customValidation = null
  } = props;

  const {
    inputRules = { required },
    // placeholder = (placeHolderText || ""),
    inputFieldType = null
  } = ruleName && textInputValidationRules[ruleName] ? textInputValidationRules[ruleName] : {};

  if (ruleName && inputRules) {
    inputRules.required = required;
  }

  const [textValue, setTextValue] = useState(value || "");

  useEffect(() => {
    setTextValue(value);
  }, [value]);

  if (noValueNoRender && !value) {
    return null;
  }

  const copyText = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target?.value) {
      navigator.clipboard.writeText(target.value);
      alert("Copied");
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = transformers?.length ? transform(e.target.value, transformers) : e.target.value;
    if (!regExpression || (regExpression && Boolean(newValue.match(regExpression)))) {
      setTextValue(newValue);
      if (onChange) {
        onChange(newValue);
      }

      if (controllerOnChange) {
        e.target.value = newValue;
        controllerOnChange(e);
      }
    }
  };

  return (
    <TextField
      InputLabelProps={{ shrink: true }}
      variant={variant}
      size={selectSize}
      InputProps={{
        readOnly,
        disableUnderline,
        startAdornment: inputLeftIcon,
        endAdornment: inputRightIcon
      }}
      name={id}
      id={id}
      label={label}
      value={textValue}
      type={inputFieldType || ""}
      {...(register ? register(id, {
        ...inputRules,
        required,
        value: textValue,
        ...(customValidation && { validate: customValidation })
      }) : {})}
      required={required}
      error={!!errors[id]}
      placeholder={placeHolderText || ""}
      helperText={errors[id]?.message || helperText}
      onDoubleClick={copyText}
      sx={{ "& .MuiFormLabel-root": { fontSize: 15, fontWeight: "600" }, ...sx }}
      inputProps={{
        style: { fontSize: 15, width },
        autoComplete: "off",
        form: { autoComplete: "off" }
      }}
      onChange={handleOnChange}
      disabled={disabled}
      multiline={multiline}
      minRows={2}
      focused={focused}
      inputRef={inputRef}
      FormHelperTextProps={{ sx: { color: "error.dark" } }}
    />
  );
};

export default CostumeTextField;