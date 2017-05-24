import CMS from "netlify-cms";
import FoodPreview from "./cms/food-preview";
import DrinkPreview from "./cms/drink-preview";
import GalleryPreview from "./cms/gallery-preview";

CMS.registerPreviewStyle("../css/main.css");
CMS.registerPreviewTemplate("food", FoodPreview);
CMS.registerPreviewTemplate("drinks", DrinkPreview);
CMS.registerPreviewTemplate("gallery", GalleryPreview);
