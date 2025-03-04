
import { BlogPosts } from "@/types/blog";
import { professionalRoofInspection } from "./professional-roof-inspection";
import { metalRoofingBenefits } from "./metal-roofing-benefits";
import { maintenanceTips } from "./maintenance-tips";
import { roofInspectionGuide } from "./roof-inspection-guide";
import { metalRoofingInstallation } from "./metal-roofing-installation";
import { preventativeMaintenance } from "./preventative-maintenance";

export const blogPosts: BlogPosts = {
  'professional-roof-inspection-guide': professionalRoofInspection,
  'metal-roofing-benefits-considerations': metalRoofingBenefits,
  'essential-roof-maintenance-tips': maintenanceTips,
  'understanding-roof-inspections-eugene': roofInspectionGuide,
  'metal-roofing-installation-process': metalRoofingInstallation,
  'preventative-maintenance-guide': preventativeMaintenance
};

export * from "./professional-roof-inspection";
export * from "./metal-roofing-benefits";
export * from "./maintenance-tips";
export * from "./roof-inspection-guide";
export * from "./metal-roofing-installation";
export * from "./preventative-maintenance";
