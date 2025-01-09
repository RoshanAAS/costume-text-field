import * as React from "react";
import { useState, useEffect } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { transform } from "../../utils/dataTransformers.js";
import textInputValidationRules from "../../utils/validations/textInputValidationRules.js";

type RuleName = keyof typeof textInputValidationRules;

interface CostumeTextFieldProps extends Omit<TextFieldProps, "onChange" | "value"> {
  id: string;
  value?: string;
  regExpression?: RegExp;
  transformers?: string[];
  noValueNoRender?: boolean;
  onChange?: (value: string) => void;
  controllerOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRightIcon?: React.ReactNode;
  inputLeftIcon?: React.ReactNode;
  ruleName?: RuleName;
  customValidation?: (value: string) => boolean | string;
  errors?: Record<string, { message?: string }>; // For React Hook Form errors
  placeHolderText?: string; // Placeholder for the input field
  width?: number | string; // Width of the input field
  readOnly?: boolean; // Read-only property for the input field
  register?: (name: string, options?: Record<string, any>) => void; // Register function from React Hook Form
}

const CostumeTextField: React.FC<CostumeTextFieldProps> = (props) => {
  const {
    id,
    label,
    value = "",
    regExpression,
    transformers,
    noValueNoRender = false,
    onChange,
    controllerOnChange,
    disabled = false,
    variant = "outlined",
    required = false,
    errors = {},
    helperText = "",
    inputRightIcon,
    inputLeftIcon,
    ruleName,
    placeHolderText = "",
    multiline = false,
    readOnly = false,
    inputRef,
    width,
    customValidation,
    register,
    sx = {},
    ...restProps
  } = props;

  const { inputRules = { required }, inputFieldType = undefined } =
    ruleName && textInputValidationRules[ruleName] ? textInputValidationRules[ruleName] : {};

  if (ruleName && inputRules) {
    inputRules.required = required;
  }

  const [textValue, setTextValue] = useState(value);

  useEffect(() => {
    setTextValue(value);
  }, [value]);

  if (noValueNoRender && !value) {
    return null;
  }

  const copyText = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.value) {
      navigator.clipboard.writeText(target.value);
      alert("Copied");
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = transformers?.length
      ? transform(e.target.value, transformers)
      : e.target.value;

    if (!regExpression || regExpression.test(newValue)) {
      setTextValue(newValue);
      onChange?.(newValue);

      if (controllerOnChange) {
        e.target.value = newValue;
        controllerOnChange(e);
      }
    }
  };

  const textFieldProps = register
    ? register(id, {
        ...inputRules,
        required,
        value: textValue,
        ...(customValidation && { validate: customValidation }),
      })
    : {};

  return (
    <TextField
      {...textFieldProps}
      InputLabelProps={{ shrink: true }}
      variant={variant}
      size={restProps.size || "small"}
      InputProps={{
        readOnly,
        startAdornment: inputLeftIcon,
        endAdornment: inputRightIcon,
      }}
      name={id}
      id={id}
      label={label}
      value={textValue}
      type={inputFieldType || ""}
      required={required}
      error={!!errors[id]}
      placeholder={placeHolderText}
      helperText={errors[id]?.message || helperText}
      onDoubleClick={copyText}
      sx={{
        "& .MuiFormLabel-root": { fontSize: 15, fontWeight: 600 },
        ...sx,
      }}
      inputProps={{
        style: { fontSize: 15, width },
        autoComplete: "off",
        form: { autoComplete: "off" },
      }}
      onChange={handleOnChange}
      disabled={disabled}
      multiline={multiline}
      minRows={multiline ? 2 : undefined}
      focused={restProps.focused}
      inputRef={inputRef}
      FormHelperTextProps={{ sx: { color: "error.dark" } }}
      {...restProps}
    />
  );
};

export default CostumeTextField;
