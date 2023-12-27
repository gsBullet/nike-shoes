import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constant";

function Hero() {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row 
      flex-col justify-center gap-10 min-h-screen max-container"
    >
      <div
        className="relative xl:w-2/5 flex justify-center 
      flex-col items-start w-full max-lg:padding-x pt-28"
      >
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 fort-palanquin text-8xl max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className=" text-coral-red inline-block mt-3">Nike </span>
          Shoes
        </h1>
        <p
          className="font-montserrat text-slate-gray text-lg
         leading-8 mt-6 mb-14 sm:max-w-sm"
        >
          Discover Stylis Nike Arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-20">
          {statistics.map((item) => (
            <div key={item.label}>
              <p className="text-4xl font-palanquin font-bold">{item.value} </p>
              <p className=" leading-7 font-montserrat text-slate-gray">
                {item.label}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative flex-1 flex justify-center 
      items-center xl:min-h-screen
       max-xl:py-40 bg-primary bg-hero 
       bg-cover bg-center"
      >
        <img
          src={bigShoe1}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div>
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
              imgURL={shoe}
              changeBigShoeImage= {()=>{}}
              bigShoeImg = ""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
