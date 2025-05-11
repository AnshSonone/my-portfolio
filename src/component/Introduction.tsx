

function Introduction() {
  return (
    <div className=" lg:flex justify-evenly items-center animate-fade-down">
      <div className="text-center lg:text-start ">
        <div className="">
          <h2 className="text-blue-300 font-bold text-4xl">Hey,</h2>
          <span className="text-white text-2xl my-4 font-bold">
            This is Ansh Sonone 
          </span>
        </div>
        <div className="text-white text-xl my-4 text-center lg:text-start">
          <p className="">
            Aspiring full-stack developer with a passion for building scalable,
          </p>
          <p className="">
            efficient web applications. Driven by curiosity and a love for
            technology,
          </p>
          <p className="">
            Ansh is honing his expertise in JavaScript frameworks and modern
            development practices.
          </p>
        </div>
      </div>

      <div className=" flex justify-center my-16 backdrop-sepia-100">
        <img
          className="w-[40vh] lg:w-[15rem] lg:h-[16rem] rounded-md"
          src="https://res.cloudinary.com/da25rozpm/image/upload/v1746957935/IMG_20240901_233727_lir5lh.jpg"
        />
      </div>
    </div>
  );
}

export default Introduction;
