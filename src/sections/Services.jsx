import ServiceCard from "../components/ServiceCard";
import { services } from "../constant";

function Services() {
  return (
    <section
      id=""
      className="flex justify-between items-center max-container flx-wrap gap-9"
    >
      {
        services.map((items)=>(
          <ServiceCard
          key={items.label}
          {...items}
          />
        ))
      }
    </section>
  );
}

export default Services;
