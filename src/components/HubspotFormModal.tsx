
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
    let attempts = 0;
    const maxAttempts = 3;
    
    const loadForm = () => {
      if (!window.hbspt && attempts < maxAttempts) {
        attempts++;
        setTimeout(loadForm, 500);
        return;
      }

      if (!window.hbspt) {
        setError('Failed to initialize form. Please refresh the page.');
        setIsLoading(false);
        return;
      }

      try {
        const container = document.getElementById('hubspotFormContainer');
        if (container) {
          container.innerHTML = '';
        }

        window.hbspt.forms.create({
          target: '#hubspotFormContainer',
          region: "na1",
          portalId: "241947693",
          formId: "901bfc23-c204-4af1-bf61-d8c9db934a94",
          onFormSubmitted: () => {
            setTimeout(() => {
              onClose();
              navigate('/');
            }, 1500);
          },
          onFormReady: () => {
            setIsLoading(false);
            setError(null);
          },
          onFormError: (error: any) => {
            console.error('Form error:', error);
            setError('There was an error loading the form. Please try again.');
            setIsLoading(false);
          }
        });
      } catch (err) {
        console.error('HubSpot form creation error:', err);
        setError('Failed to load form. Please try again.');
        setIsLoading(false);
      }
    };

    if (isOpen) {
      setIsLoading(true);
      setError(null);
      attempts = 0;

      const existingScript = document.querySelector('script[src*="hsforms"]');
      
      if (!existingScript) {
        scriptElement = document.createElement('script');
        scriptElement.src = 'https://js.hsforms.net/forms/v2.js';
        scriptElement.async = true;
        scriptElement.defer = true;
        
        scriptElement.addEventListener('load', () => {
          setTimeout(loadForm, 100);
        });
        
        scriptElement.addEventListener('error', () => {
          setError('Failed to load form resources. Please try again.');
          setIsLoading(false);
        });
        
        document.body.appendChild(scriptElement);
      } else {
        setTimeout(loadForm, 100);
      }
    }

    return () => {
      if (scriptElement) {
        scriptElement.remove();
      }
      const container = document.getElementById('hubspotFormContainer');
      if (container) {
        container.innerHTML = '';
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
