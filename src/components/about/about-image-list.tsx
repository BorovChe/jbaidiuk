import aboutImages from "@/data/about-images.json";
import AboutImageItem from "./about-image-item";

const AboutImagesList = () => {
  return (
    <ul className="flex flex-wrap gap-[14px] items-start content-center	 justify-center lg:max-w-[520px]">
      {aboutImages.map((src, i) => (
        <AboutImageItem key={i} path={src} />
      ))}
    </ul>
  );
};

export default AboutImagesList;
