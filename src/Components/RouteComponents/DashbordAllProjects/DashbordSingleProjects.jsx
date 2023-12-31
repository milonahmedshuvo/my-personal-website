import React from "react";
import { toast } from "react-hot-toast";

const DashbordSingleProjects = ({ project, refetch }) => {
  const {
    categori,
    title,
    image,
    clientLink,
    serverLink,
    liveLink,
    technology,
    drescription,
    _id,
  } = project;

  const handleProjectId = (id) => {
    console.log(id);

    fetch(`https://my-personal-website-flax-beta.vercel.app/project?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Succesful Delete !");
        refetch();
      })
      .catch((err) => {
        console.log(err);
        toast.error("not Delete !");
      });
  };

  return (
    <div className="px-3 py-2 bg-[#3A2B71] rounded ">
      <div>
        <h1 className="text-3xl text-center font-bold">{title}</h1>
        <p className="text-2xl text-center my-4">{categori}</p>
      </div>


      <div className="w-full h-52 overflow-hidden  relative">
        <img
          src={image}
          alt="Hover Image"
          className="w-full h-auto transform transition-transform duration-1000 ease-linear hover:-translate-y-1/2"
        />
      </div>

      <div className="mt-5">
        {technology?.split(" ").map((el, i) => (
          <span className="border border-blue-300 px-2 mx-1 rounded-lg" key={i}>
            {el}{" "}
          </span>
        ))}
      </div>

      <div className="mt-10 mb-3 flex justify-center  ">
        <button
          className="bg-blue-400 px-2 py-1 text-white "
          onClick={() => handleProjectId(_id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DashbordSingleProjects;
