"use client";

import { mdiWeb } from "@mdi/js";
import Icon from "@mdi/react";

export default function RequestFree() {
  return (
    <button
      className="z-50 fixed bottom-4 right-4 flex justify-center items-center
     gap-2 w-[230px] h-[44px] shadow-lg rounded-full mt-3 bg-[#6877c9] text-lg font-merriweather text-whileWhite"
    >
      <Icon
        path={mdiWeb}
        title="User Profile"
        size={1}
        horizontal
        vertical
        rotate={180}
        color="#fff5d7"
      />
      Request a Free Demo
    </button>
  );
}
