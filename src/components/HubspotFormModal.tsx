
import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let scriptElement: HTMLScriptElement | null = null;
    
    const loadForm = () => {
      if (isOpen && window.hbspt) {
        try {
          window.hbspt.forms.create({
            region: "na2",
            portalId: "241947693",
            formId: "901bfc23-c204-4af1-bf61-d8c9db934a94",
            target: "#hubspotFormContainer",
            onFormReady: () => {
              setIsLoading(false);
              setError(null);
            },
            onFormSubmitted: () => {
              setTimeout(() => {
                onClose();
                navigate('/');
              }, 1500);
            }
          });
        } catch (err) {
          setError('Failed to load form. Please try again.');
          setIsLoading(false);
          console.error('HubSpot form creation error:', err);
        }
      }
    };

    if (isOpen) {
      setIsLoading(true);
      setError(null);
      
      // Check if script already exists
      const existingScript = document.querySelector('script[src*="hsforms"]');
      
      if (!existingScript) {
        scriptElement = document.createElement('script');
        scriptElement.src = 'https://js-na2.hsforms.net/forms/embed/v2.js';
        scriptElement.async = true;
        scriptElement.defer = true;
        
        scriptElement.addEventListener('load', loadForm);
        scriptElement.addEventListener('error', () => {
          setError('Failed to load form. Please try again.');
          setIsLoading(false);
        });
        
        document.body.appendChild(scriptElement);
      } else {
        // If script exists, try to load form directly
        loadForm();
      }
    }

    return () => {
      if (scriptElement) {
        scriptElement.removeEventListener('load', loadForm);
        // Only remove the script if we're closing the modal
        if (!isOpen) {
          scriptElement.remove();
        }
      }
      // Clear the form container when modal closes
      if (!isOpen) {
        const formContainer = document.getElementById('hubspotFormContainer');
        if (formContainer) {
          formContainer.innerHTML = '';
        }
      }
    };
  }, [isOpen, navigate, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Get Your Free Estimate</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          {isLoading && (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}
          {error && (
            <div className="text-red-500 text-center py-4">{error}</div>
          )}
          <div id="hubspotFormContainer" className={isLoading ? 'hidden' : ''}></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HubspotFormModal;
