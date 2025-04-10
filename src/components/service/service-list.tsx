"use client";

import services from "@/data/services.json";

import ServiceAccordion from "./service-accordion";
import { useState } from "react";

const ServiceList = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <ul className="mb-10">
      {services.map((item) => (
        <ServiceAccordion
          key={item.id}
          {...item}
          openId={openId}
          setOpenId={setOpenId}
        />
      ))}
    </ul>
  );
};

export default ServiceList;
