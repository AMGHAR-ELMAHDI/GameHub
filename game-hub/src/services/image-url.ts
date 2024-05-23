import noImage from "../assets/no-image-placeholder.webp";

const getCropedImageUrl = (url: string) => {
  const target = "media/";
  if (url == null) return noImage;

  let index = url.indexOf(target) + target.length;

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCropedImageUrl;
