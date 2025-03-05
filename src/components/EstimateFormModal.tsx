
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import { Button } from '@/components/ui/button';
import FormInputField from './estimate/FormInputField';
import ProjectTypeSelect from './estimate/ProjectTypeSelect';
import AddressFields from './estimate/AddressFields';

interface EstimateFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectDetails: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  projectType: string;
}

const EstimateFormModal = ({ isOpen, onClose }: EstimateFormModalProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectDetails: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    projectType: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      projectType: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      toast({
        title: "Request Submitted Successfully",
        description: "Thank you for your submission. We'll be in touch soon!",
      });

      onClose();
      navigate('/');
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Get a Free Estimate</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormInputField
                id="firstName"
                name="firstName"
                label="First Name"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
              <FormInputField
                id="lastName"
                name="lastName"
                label="Last Name"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <FormInputField
              id="email"
              name="email"
              type="email"
              label="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <FormInputField
              id="phone"
              name="phone"
              type="tel"
              label="Phone"
              required
              value={formData.phone}
              onChange={handleChange}
            />

            <ProjectTypeSelect
              value={formData.projectType}
              onChange={handleSelectChange}
            />

            <FormInputField
              id="projectDetails"
              name="projectDetails"
              label="Project Details"
              value={formData.projectDetails}
              onChange={handleChange}
              isTextArea
              placeholder="Tell us about your project..."
            />

            <AddressFields
              formData={formData}
              onChange={handleChange}
            />

            <div className="flex justify-end space-x-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">Submit Request</Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EstimateFormModal;
