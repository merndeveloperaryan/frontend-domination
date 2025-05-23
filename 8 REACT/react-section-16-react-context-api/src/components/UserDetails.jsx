import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col justify-start items-center gap-5">
      <div>
        <h2 className="text-4xl text-cyan-400 font-black">Hello {id}</h2>
      </div>
      <div className="w-1/2 text-center ">
        <p className="text-teal-400 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magnam
          numquam tempora possimus. Ipsam error placeat neque facere hic veniam.
          Animi sed soluta ducimus, sequi velit adipisci provident blanditiis
          facere laboriosam, obcaecati eius porro cupiditate enim molestiae amet
          consequatur harum magnam ipsum cum nemo tempore nobis earum. Error
          accusantium obcaecati nam sed illo at dolorem facilis architecto
          dolores, quia natus corrupti consequuntur porro fugit eius sunt
          veritatis, velit sint excepturi tempora magni blanditiis a quas. Eaque
          beatae eveniet corporis id et nostrum placeat facere enim eius
          temporibus, earum exercitationem similique ducimus? Quidem perferendis
          reprehenderit a quas quasi dolorem molestias tempora?
        </p>
      </div>
      <button
        onClick={() => navigate("/user")}
        className="px-4 py-3 rounded bg-teal-100 text-sm text-teal-500"
      >
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;
