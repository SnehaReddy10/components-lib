import { useState } from 'react';

const UploadImage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imagePreview] = useState<string | null>('');

  return (
    <div className="bg-blue-100 w-full h-full text-xxs flex flex-col justify-center items-center">
      <div className="flex flex-col gap-3 w-[30%] bg-white text-black px-3 py-4 rounded-md">
        <h4 className="font-bold tracking-tighter">Upload Photo</h4>
        <div className="flex flex-col gap-2 border-[2px] border-dotted justify-center items-center p-2">
          <img
            src="/assets/icons/upload.png"
            alt="upload-image"
            className="w-10 h-10"
          />
          <div className="flex flex-col font-semibold gap-1 items-center tracking-tighter">
            <div className="flex">
              Drop your image here or
              <span className="text-purple-500 font-bold">
                <span className="text-purple-500 relative">
                  <input
                    type="file"
                    onChange={(e) => {
                      const files = e.target.files;
                      if (files) {
                        setFile(files[0]);
                      }
                    }}
                    className="opacity-0 absolute top-0 left-0"
                  />
                  <p className="abolute top-0 left-0 ml-[0.125rem]">browse</p>
                </span>
              </span>
            </div>
            <p className="text-gray-400 text-xxxs">PNG, JPG, JPEG</p>
          </div>
        </div>
      </div>
      {file && (
        <div className="flex gap-2 w-[30%] bg-white text-black m-1">
          <div className="flex gap-2 items-center w-full border-[1px] border-gray-300 m-1 p-[3px] rounded-sm">
            {imagePreview && (
              <img src={imagePreview} alt="" className="w-12 h-12" />
            )}
            <div className="w-full flex flex-col gap-1">
              <p>{file.name}</p>
              <div className="flex justify-between text-gray-400 text-xxxs font-semibold">
                <p>{(file.size / 1048576).toFixed(2)} MB</p>
                <div className="flex gap-1">
                  <img
                    src="/assets/icons/pause-button.png"
                    alt="pause-button"
                    className="w-3 h-3"
                  />
                  <img
                    src="/assets/icons/check.png"
                    alt="check"
                    className="w-3 h-3"
                  />
                </div>
              </div>
              <div className="h-1 w-full bg-gray-300 rounded-sm">
                <div className={`h-1 w-[30%] bg-purple-500 rounded-sm`}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
