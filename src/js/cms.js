import CMS from "netlify-cms";
import GalleryPreview from "./cms/gallery-preview";

CMS.registerPreviewStyle("/main.css");
CMS.registerPreviewTemplate("gallery", GalleryPreview);
