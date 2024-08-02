import React from 'react';
import Image from 'next/image';

const ImagePreset = ({ cover, open }: { cover: string; open: () => void }) => {
  return (
    <div>
      <div className="flex flex-col gap-4 my-4" onClick={open}>
        <label htmlFor="cover">Cover Picture</label>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src={cover || "/noCover.png"}
            alt=""
            width={48}
            height={32}
            className="w-12 h-8 rounded-md object-cover"
          />
          <span className="text-xs underline text-gray-600">
            Change
          </span>
        </div>
        <input type="hidden" name="cover" value={cover || ""} />
      </div>
    </div>
  );
};

export default ImagePreset;
