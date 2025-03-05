
import React from 'react';
import { Label } from '@/components/ui/label';

interface FormInputFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextArea?: boolean;
  placeholder?: string;
  rows?: number;
}

const FormInputField = ({
  id,
  name,
  label,
  type = 'text',
  required = false,
  value,
  onChange,
  isTextArea = false,
  placeholder,
  rows = 4
}: FormInputFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label} {required && '*'}</Label>
      {isTextArea ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          className="w-full p-2 border rounded-md"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          className="w-full p-2 border rounded-md"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default FormInputField;
