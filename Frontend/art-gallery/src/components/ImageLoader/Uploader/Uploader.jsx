import React, { useState } from "react";
import { LoaderImage } from "./LoaderImage";
import { DragImage } from "./DragImage";
import "./uploader.scss";

export const Uploader = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  return (
    <div>
      <section className="uploader">
        {loading ? (
          <LoaderImage file={file} setFile={setFile} setLoading={setLoading} />
        ) : (
          <DragImage setMedia={setFile} setLoading={setLoading} />
        )}
      </section>
    </div>
  );
};
