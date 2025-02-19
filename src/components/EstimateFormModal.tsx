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

// ... (other imports and interfaces)

const EstimateFormModal = ({ isOpen, onClose }: EstimateFormModalProps) => {
  // ... (other state variables and functions)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/send-email', { // Your server endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send the form data
      });

      if (!response.ok) { // Check for HTTP errors (status not in 200-299 range)
        const errorData = await response.json(); // Try to get error details from the server
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`); // Throw an error
      }

      const data = await response.json(); // If response is ok, parse JSON

      if (data.message === 'Email sent successfully') {
        toast({
          title: "Request Submitted Successfully",
          description: "Thank you for your submission. We'll be in touch soon!",
        });
        onClose();
        navigate('/');
      } else {
        // Handle unexpected success/failure messages from the server
        toast({
          title: "Error",
          description: data.error || "An unexpected error occurred.", // Show server or default error
          variant: "destructive", // Make it a red error toast
        });
        console.error("Server Error:", data.error);
      }

    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "An error occurred. Please try again later.",
        variant: "destructive",
      });
      console.error('Fetch Error:', error);
    }
  };

  // ... (rest of the component code)
};

export default EstimateFormModal;
