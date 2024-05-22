const getCropedImageUrl = (url: string) => {
  const target = "media/";
  if(url == null) return "";

  let index = url.indexOf(target) + target.length;

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCropedImageUrl;
