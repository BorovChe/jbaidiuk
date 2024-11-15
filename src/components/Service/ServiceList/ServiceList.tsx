import services from "@/data/services.json";
import ServiceItem from "../ServiceItem";

const ServiceList = () => {
  return (
    <ul className="mb-10">
      {services.map(({ id, title, duration, price }) => (
        <ServiceItem key={id} title={title} duration={duration} price={price} />
      ))}
    </ul>
  );
};

export default ServiceList;
