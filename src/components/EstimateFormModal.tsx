
import React, { useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface EstimateFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EstimateFormModal = ({ isOpen, onClose }: EstimateFormModalProps) => {
  useEffect(() => {
    // Load the external script when the modal is opened
    if (isOpen) {
      const script = document.createElement('script');
      script.src = 'https://eugene-roofing-nw-llc.kit.com/110a6e0b5f/index.js';
      script.async = true;
      script.setAttribute('data-uid', '110a6e0b5f');
      document.body.appendChild(script);

      return () => {
        // Cleanup script when modal is closed
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <div id="estimate-form-container" className="min-h-[400px]"></div>
      </DialogContent>
    </Dialog>
  );
};

export default EstimateFormModal;
