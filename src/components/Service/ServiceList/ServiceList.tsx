"use client";

import services from "@/data/services";
import ServiceAccordion from "../ServiceAccordion";
import { useState } from "react";

const ServiceList = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <ul className="mb-10">
      {services.map((item) => (
        <ServiceAccordion
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </ul>
  );
};

export default ServiceList;
