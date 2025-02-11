
import React, { useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

interface EstimateFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EstimateFormModal = ({ isOpen, onClose }: EstimateFormModalProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Preload the script when component mounts
    const script = document.createElement('script');
    script.src = 'https://eugene-roofing-nw-llc.kit.com/110a6e0b5f/index.js';
    script.async = true;
    script.setAttribute('data-uid', '110a6e0b5f');
    script.id = 'estimate-form-script';
    
    // Add event listeners for form completion
    window.addEventListener('message', handleFormMessage);
    
    // Only append if script doesn't exist
    if (!document.getElementById('estimate-form-script')) {
      document.body.appendChild(script);
    }

    return () => {
      window.removeEventListener('message', handleFormMessage);
    };
  }, []);

  const handleFormMessage = (event: MessageEvent) => {
    // Check if the message is from our form
    if (event.data?.type === 'form_submission_success') {
      toast({
        title: "Form Submitted Successfully",
        description: "Thank you for your submission. We'll be in touch soon!",
      });
      onClose();
      navigate('/');
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
      navigate('/');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <div id="estimate-form-container" className="min-h-[400px]"></div>
      </DialogContent>
    </Dialog>
  );
};

export default EstimateFormModal;
