
import React, { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useNavigate } from 'react-router-dom';

interface HubspotFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

declare global {
  interface Window {
    hbspt?: any;
  }
}

const HubspotFormModal = ({ isOpen, onClose }: HubspotFormModalProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      // Load HubSpot form script
      const script = document.createElement('script');
      script.src = 'https://js-na2.hsforms.net/forms/embed/241947693.js';
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: "na2",
            portalId: "241947693",
            formId: "901bfc23-c204-4af1-bf61-d8c9db934a94",
            target: "#hubspotFormContainer",
            onFormSubmitted: () => {
              setTimeout(() => {
                onClose();
                navigate('/');
              }, 1500);
            }
          });
        }
      };

      return () => {
        document.body.removeChild(script);
        const formContainer = document.getElementById('hubspotFormContainer');
        if (formContainer) {
          formContainer.innerHTML = '';
        }
      };
    }
  }, [isOpen, navigate, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Get Your Free Estimate</DialogTitle>
        </DialogHeader>
        <div id="hubspotFormContainer" className="mt-4"></div>
      </DialogContent>
    </Dialog>
  );
};

export default HubspotFormModal;
