import CMS from "netlify-cms";
import GalleryPreview from "./js/cms/gallery-preview";

CMS.registerPreviewStyle("/main.css");
CMS.registerPreviewTemplate("gallery", GalleryPreview);
