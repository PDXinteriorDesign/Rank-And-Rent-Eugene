
import { BlogPosts } from '@/types/blog';
import { professionalRoofInspection } from './professional-roof-inspection';
import { metalRoofingBenefits } from './metal-roofing-benefits';
import { essentialMaintenanceTips } from './essential-maintenance-tips';
import { understandingInspections } from './understanding-inspections';
import { metalRoofingInstallation } from './metal-roofing-installation';
import { preventativeMaintenance } from './preventative-maintenance';

export const blogPosts: BlogPosts = {
  'professional-roof-inspection-guide': professionalRoofInspection,
  'metal-roofing-benefits-considerations': metalRoofingBenefits,
  'essential-roof-maintenance-tips': essentialMaintenanceTips,
  'understanding-roof-inspections-eugene': understandingInspections,
  'metal-roofing-installation-process': metalRoofingInstallation,
  'preventative-maintenance-guide': preventativeMaintenance
};

export * from './professional-roof-inspection';
export * from './metal-roofing-benefits';
export * from './essential-maintenance-tips';
export * from './understanding-inspections';
export * from './metal-roofing-installation';
export * from './preventative-maintenance';
