
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export const useScrollTop = () => {
  const navigate = useNavigate();

  const scrollToTopAndNavigate = useCallback((path: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  }, [navigate]);

  return scrollToTopAndNavigate;
};
