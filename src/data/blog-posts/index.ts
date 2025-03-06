
import { BlogPosts } from "@/types/blog";
import { maintenanceGuide } from "./maintenance-guide";
import { inspectionGuide } from "./inspection-guide";
import { metalRoofing } from "./metal-roofing";
import { maintenanceTips } from "./maintenance-tips";

export const blogPosts: BlogPosts = {
  'eugene-roof-maintenance': maintenanceGuide,
  'professional-inspection': inspectionGuide,
  'metal-roofing-guide': metalRoofing,
  'essential-maintenance-tips': maintenanceTips
};

export default blogPosts;
