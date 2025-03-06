
import { BlogPosts } from "@/types/blog";
import { maintenanceGuide } from "./maintenance-guide";
import { inspectionGuide } from "./inspection-guide";
import { metalRoofing } from "./metal-roofing";
import { maintenanceTips } from "./maintenance-tips";

export const blogPosts: BlogPosts = {
  'eugene-roof-maintenance-guide': maintenanceGuide,
  'professional-roof-inspection-guide': inspectionGuide,
  'metal-roofing-benefits-considerations': metalRoofing,
  'essential-roof-maintenance-tips': maintenanceTips
};

export default blogPosts;
