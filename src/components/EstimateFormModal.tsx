import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from '@/components/ui/label';

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
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <input
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full p-2 border rounded-md"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <input
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full p-2 border rounded-md"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full p-2 border rounded-md"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="w-full p-2 border rounded-md"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectType">Project Type *</Label>
              <Select
                value={formData.projectType}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectDetails">Project Details</Label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                rows={4}
                className="w-full p-2 border rounded-md"
                value={formData.projectDetails}
                onChange={handleChange}
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="streetAddress">Street Address</Label>
              <input
                id="streetAddress"
                name="streetAddress"
                className="w-full p-2 border rounded-md"
                value={formData.streetAddress}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <input
                  id="city"
                  name="city"
                  className="w-full p-2 border rounded-md"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State/Province</Label>
                <input
                  id="state"
                  name="state"
                  className="w-full p-2 border rounded-md"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="zipCode">Postal / Zip Code</Label>
              <input
                id="zipCode"
                name="zipCode"
                className="w-full p-2 border rounded-md"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </div>

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
