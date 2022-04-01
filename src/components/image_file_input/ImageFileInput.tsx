import React, { useRef } from "react";
import styles from "./ImageFileInput.module.css";
import AssetUploader from "../../service/asset_uploader/AssetUploader";

interface ImageFileInputProps {
  imageUploader: AssetUploader;
  name: string;
  onFileChange: (file: { name: string; url: string }) => void;
}

const ImageFileInput = ({ imageUploader, name, onFileChange }: ImageFileInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target?.files) {
      const uploaded = await imageUploader.upload(event.target?.files[0]);
      onFileChange({ name: uploaded.original_filename, url: uploaded.url });
    }
  };
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    inputRef.current?.click();
  };
  return (
    <div className={styles.container}>
      <input ref={inputRef} className={styles.input} type="file" accept="image/*" name="file" onChange={handleChange} />
      <button className={styles.button} onClick={handleButtonClick}>
        {name || "No file"}
      </button>
    </div>
  );
};

export default ImageFileInput;
