const textInputValidationRules = {
  file: {
    inputFieldType: "file",
    inputRules: { required: false }
  },
  text: {
    inputFieldType: "text",
    inputRules: {
      required: true,
      maxLength: { value: 60, message: "Name is too long" },
      minLength: { value: 2, message: "Name is too short" },
      pattern: {
        value: /^[a-zA-Z0-9]+$/,
        message: "Name is not valid"
      }
    }
  },
  variantCode: {
    inputFieldType: "text",
    inputRules: {
      required: true,
      maxLength: { value: 10, message: "Code is too long" },
      minLength: { value: 1, message: "Code is too short" },
      pattern: {
        value: /^[a-zA-Z0-9]+$/,
        message: "Name is not valid"
      }
    }
  },
  productInternalCode: {
    inputFieldType: "number",
    inputRules: {
      required: true,
      maxLength: { value: 5, message: "Internal code is too long" },
      minLength: { value: 5, message: "Internal code is too short" },
      pattern: {
        value: /^[0-9]*$/,
        message: "Internal code must have only 5 digits"
      }
    }
  },
  mobileNumber: {
    inputFieldType: "number",
    inputRules: {
      required: false,
      maxLength: { value: 10, message: "Invalid Mobile Number" },
      minLength: { value: 10, message: "Invalid Mobile Number" },
      pattern: { value: /^[0-9]*$/, message: "Invalid Mobile Number" }
    }
  },
  gstIn: {
    inputFieldType: "text",
    inputRules: {
      required: false,
      maxLength: { value: 15, message: "Invalid GSTIN" },
      minLength: { value: 15, message: "Invalid GSTIN" },
      pattern: { value: /^([0][1-9]|[1-2][0-9]|[3][0-7])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$/, message: "Invalid GSTIN" }
    }
  },
  tax: {
    inputFieldType: "number",
    inputRules: {
      required: false,
      pattern: { value: /^(100(?:\.0{1,2})?|[1-9]?\d(?:\.\d{1,2})?|\.\d{1,2})$/, message: "Only numbers are allowed" }
    }
  },
  positiveDecimal: {
    inputFieldType: "number",
    inputRules: {
      required: false,
      pattern: { value: /^((?!0)\d{1,}|0\.\d{1,2})($|\.$|\.\d{1,2}$)/g, message: "Only positive decimal number is allowed" }
    }
  },
  uuidV4: {
    inputFieldType: "text",
    inputRules: {
      required: false,
      pattern: { value: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/g, message: "Only UUID V4 is required" }
    }
  },
  wholeNumber: {
    inputFieldType: "number",
    inputRules: {
      required: false,
      valueAsNumber: true,
      min: { value: 0, message: "Positive number only" },
      pattern: { value: /^(0|[1-9][0-9]*)$/, message: "Only whole numbers are allowed" }
    }
  },
  houseNo: {
    inputFieldType: "text",
    label: "House No.",
    placeholder: "Ex. 120A or 12A/10",
    inputRules: {
      required: false,
      minLength: { value: 1, message: "House number is too short" },
      maxLength: { value: 20, message: "House number is too long" }
    }
  },
  floorNumber: {
    inputFieldType: "text",
    label: "Floor No.",
    placeholder: "Ex. 1 or 2 or 3",
    inputRules: {
      required: false,
      minLength: { value: 1, message: "House number is too short" },
      maxLength: { value: 20, message: "House number is too long" }
    }
  },
  apartmentOrStreet: {
    inputFieldType: "text",
    label: "Apartment/Street",
    placeholder: "Apartment/Street Name",
    inputRules: {
      required: false,
      minLength: { value: 1, message: "Apartment name or street name is too short" },
      maxLength: { value: 120, message: "Apartment name or street name is too long" }
    }
  },
  landmark: {
    inputFieldType: "text",
    label: "Landmark",
    placeholder: "Near by Landmark",
    inputRules: {
      required: false,
      minLength: { value: 3, message: "Landmark is too short" },
      maxLength: { value: 70, message: "Landmark is too long" }
    }
  },
  city: {
    inputFieldType: "text",
    label: "City",
    placeholder: "Bangalore",
    inputRules: {
      required: false,
      minLength: { value: 3, message: "City is too short" },
      maxLength: { value: 100, message: "City is too long" }
    }
  },
  pin: {
    inputFieldType: "text",
    label: "Pin Code",
    placeholder: "Ex. 560068",
    inputRules: {
      required: false,
      minLength: { value: 6, message: "Pin Code is too short" },
      maxLength: { value: 6, message: "Pin Code is too long" }
    }
  },
  utr: {
    inputFieldType: "text",
    inputRules: {
      required: true,
      // maxLength: { value: 6, message: "Enter last 6 digits of the UTR" },
      minLength: { value: 6, message: "Enter last 6 digits of the UTR" },
      pattern: {
        value: /^[A-Za-z0-9]+$/,
        message: "Invalid UTR format"
      }
    }
  },
  email: {
    inputFieldType: "email",
    inputRules: {
      required: false,
      pattern: {
        // eslint-disable-next-line no-useless-escape
        value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        message: "Invalid email address"
      }
    }
  },
  RAM: {
    inputFieldType: "number",
    inputRules: {
      required: true,
      valueAsNumber: true,
      min: { value: 8, message: "RAM size must be at least 8 GB" },
      pattern: { value: /^[1-9][0-9]*$/, message: "Invalid RAM Size" }
    }
  },
  ROM: {
    inputFieldType: "number",
    inputRules: {
      required: false,
      valueAsNumber: true,
      min: { value: 120, message: "ROM size must be more than 120GB" },
      pattern: { value: /^[1-9][0-9]*$/, message: "Invalid ROM Size" }
    }
  },
  days: {
    inputFieldType: "number",
    inputRules: {
      required: true,
      valueAsNumber: true,
      max: { value: 365, message: "Number of days must be within the range 1-365." },
      min: { value: 1, message: "Number of days must be within the range 1-365." },
      pattern: {
        value: /^[1-9][0-9]*$/,
        message: "Number of days must be equal to or less than 365"
      }
    }
  }
};

export default textInputValidationRules;
