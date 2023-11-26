import { ReleventPostSchema } from "@/type/postType";
import React from "react";

export default function SimilarePostDialog({
  relevent,
  setopen,
}: {
  relevent: ReleventPostSchema | undefined;
  setopen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex justify-center ">
      <div className=" relative w-full h-full max-w-[1200px] max-h-[500px] mt-9 overflow-clip p-5 bg-white rounded-md shadow-lg border">
        <div
          onClick={() => setopen(false)}
          className="bg-black rounded-full absolute top-3 
        right-3 text-white h-8 w-8 flex justify-center items-center cursor-pointer"
        >
          X
        </div>
        <div className="flex justify-center text-xl mb-5 items-center w-full text-left">
          Choose a Post you Interested In?
        </div>
        <div className=" flex justify-center items-center gap-5 ">
          {relevent &&
            relevent?.map((ele, idx) => (
              <div
                key={idx}
                className="bg-gray-200 border p-3 overflow-clip shadow rounded-sm"
              >
                <div className="max-h-[100px] overflow-clip">
                  {ele.postContent}
                </div>
                <div>
                  {ele?.videoUrl === undefined || ele?.videoUrl === "" ? (
                    ele.imgUrl === "" || ele.imgUrl === undefined ? null : (
                      <div className="mb-3 flex max-w-[450px]  justify-center rounded-sm">
                        <img
                          className="rounded-sm w-full h-full "
                          style={{
                            objectFit: "cover",
                            width: "500px",
                            height: "300px",
                          }}
                          loading="lazy"
                          decoding="async"
                          src={ele.imgUrl}
                          alt="test"
                        />
                      </div>
                    )
                  ) : (
                    <div className=" w-full h-full max-h-[300px] max-w-[500px] rounded-sm">
                      {" "}
                      <video
                        width={"500px"}
                        height={"300px"}
                        src={ele.videoUrl}
                      ></video>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
