import React, { useEffect } from "react";
import "./loaderImage.css";
import useStorage from "../../../customHooks/useStorage";

export const LoaderImage = ({ file, setFile, setLoading }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
      setLoading(false);
    }
  }, [url, setFile, setLoading]);

  console.log(url, "soy url load");
  let r = Math.round(progress);

  return (
    <div className="loader">
      <h3 className="loader__title">
        {" "}
        {progress === 100 ? "Image ready" : ` Uploading... ${r} %`}
      </h3>
    </div>
  );
};
