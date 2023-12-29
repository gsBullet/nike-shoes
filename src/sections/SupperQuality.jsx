import { shoe8 } from "../assets/images";
import Button from "../components/Button";

function SupperQuality() {
  return (
    <section
      id="supperQuality"
      className="flex 
    justify-between items-center max-lg:flex-col w-full max-container gap-10"
    >
      <div className="details">
        <h2 className="text-4xl capitalize font-bold lg:max-w-lg font-palanquin">
          We provide you
          <span className="text-coral-red mt-3 inline-block mx-1">Supper</span>
          <span className="text-coral-red"> Quality </span> shoes
        </h2>
        <p className="mt-6 text-info sm:max-w-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
          culpa quam, ipsum, animi facilis deserunt possimus eos, sunt harum
          aperiam eaque repellat totam qui molestias quos a nulla error tempora.
        </p>
        <p className="mt-6 text-info sm:max-w-sm">
          Atque ducimus fuga autem laboriosam incidunt, quisquam labore sed! Ab?
        </p>
        <div className="mt-10">
          <Button label="view details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center ">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
}

export default SupperQuality;
