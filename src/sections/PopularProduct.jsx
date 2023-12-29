import {products} from "../constant";
import PopularProductCard from "../components/PopularProductCard";

function PopularProduct() {
  return (
    <section id="PopularProduct" className="max-sm:mt-12 max-container">
      <div className="ppHeader">
        <h2
          className="mt-10 font-palanquin text-8xl
         max-sm:leading-[82] font-bold"
        >
          Our
          <span className="text-coral-red"> Popular </span> Products
        </h2>
      </div>
      <div className="ppParagraph">
        <p className="my-10 text-slate-gray font-montserrat">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
          tempora.
        </p>
      </div>
      <div
        className="mt-16 grid lg:grid-cols-4
       md:grid-cols-3 sm:grid-cols-2 grid-cols-1
       sm:gap-16 gap-6"
      >
        {products.map((element) => (
          <PopularProductCard key={element.name} {...element} />
        ))}
      </div>
    </section>
  );
}

export default PopularProduct;
