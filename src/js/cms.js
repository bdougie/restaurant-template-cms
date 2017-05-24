import CMS from "netlify-cms";
import FoodPreview from "./cms/food-preview";

CMS.registerPreviewStyle("../css/main.css");
CMS.registerPreviewTemplate("food", FoodPreview);
CMS.registerPreviewTemplate("gallery", GalleryPreview);
