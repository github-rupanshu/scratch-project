import React from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea({catMotionState}) {
  return (
    <div id="cat-container"className="inline-flex flex-row flex-wrap h-full overflow-y-auto p-2 min-w-full">
      <CatSprite catMotionState={catMotionState}/>
    </div>
  );
}
