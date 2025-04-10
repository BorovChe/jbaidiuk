import MyLifeImageItem from "./my-life-image-item";
import myLifeImages from "@/data/my-life-images.json";

const MyLifeImageList = () => {
  return (
    <ul className="flex flex-wrap gap-[14px] justify-center lg:gap-4">
      {myLifeImages.map((src, i) => (
        <MyLifeImageItem path={src} key={i} />
      ))}
    </ul>
  );
};

export default MyLifeImageList;
