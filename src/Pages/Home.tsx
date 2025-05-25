import { useEffect } from "react";
import Introduction from "../component/Introduction";
import Certificate from "../component/Certificate";

const certificate = [
  {
    certifcateName: "Meta frontend web developer",
    certificate:
      "https://res.cloudinary.com/da25rozpm/image/upload/v1746955160/Metaweb_iarr7d.jpg",
    description: "Completion certificate from meta frontend web developer",
  },
  {
    certifcateName: "Havard cs50 web",
    certificate:
      "https://res.cloudinary.com/da25rozpm/image/upload/v1746955161/CS50web_rzmttr.jpg",
    description: "Completion certificate from havard cs50 fulstack development",
  },
];

function Home() {
  useEffect(() => {
    document.title = "Ansh sonone | Home";
  }, []);

  return (
    <div className="my-10 animate-fade-down animate-once">
      <Introduction />
      <div className="my-10 mx-2">
        <div className="text-white">
          <h2 className="font-bold text-4xl">
            <span className="text-blue-300 font-bold text-4xl">My</span> Journey
            so far
          </h2>
          <p className="text-xl my-4">
            Climbing the ladders of my life till i reach the top
          </p>
        </div>

        <div className="lg:flex justify-evenly my-18">
          <div className="my-20 lg:my-0">
            <div className="loader"></div>
          </div>
          <div className="text-white space-y-2">
            <h3 className="">
              Completed B.com with ( Computer Application ) in year ( 2024 )
            </h3>
            <h3 className="">Completed Class 12th in year (2021)</h3>
            <h3 className="">Completed Class 10th in year (2019)</h3>
          </div>
        </div>
      </div>
      <div className="text-white">
        <h2 className="font-bold text-4xl">
          <span className="text-blue-300 font-bold text-4xl">My</span>{" "}
          certificate
        </h2>
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 justify-items-center mx-2 space-y-4">
        {certificate.map((element, index) => (
          <div key={index}>
            <Certificate element={element} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
