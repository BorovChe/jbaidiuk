import MyLifeImageItem from "../MyLifeImageItem";

import { myLifeImages } from "@/data/myLifeImages";

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
