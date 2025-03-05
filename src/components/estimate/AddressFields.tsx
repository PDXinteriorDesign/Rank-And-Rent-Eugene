
import React from 'react';
import FormInputField from './FormInputField';

interface AddressFieldsProps {
  formData: {
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddressFields = ({ formData, onChange }: AddressFieldsProps) => {
  return (
    <>
      <FormInputField
        id="streetAddress"
        name="streetAddress"
        label="Street Address"
        value={formData.streetAddress}
        onChange={onChange}
      />
      <div className="grid grid-cols-2 gap-4">
        <FormInputField
          id="city"
          name="city"
          label="City"
          value={formData.city}
          onChange={onChange}
        />
        <FormInputField
          id="state"
          name="state"
          label="State/Province"
          value={formData.state}
          onChange={onChange}
        />
      </div>
      <FormInputField
        id="zipCode"
        name="zipCode"
        label="Postal / Zip Code"
        value={formData.zipCode}
        onChange={onChange}
      />
    </>
  );
};

export default AddressFields;
