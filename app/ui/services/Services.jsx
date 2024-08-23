"use client";

import { useState } from "react";
import { FaTruck, FaWarehouse } from "react-icons/fa6";
import { GrUserWorker, GrUserExpert } from "react-icons/gr";

import ExpertHelp from "./ExpertHelp";
import HireWorkers from "./HireWorkers";
import Warehouse from "./Warehouse";
import RentTruck from "./RentTruck";
import Image from "next/image";

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const handleClick = (service) => {
    setActiveService(service);
  };

  return (
    <div id="services-section" className="services-container">
      <h2 className="text-3xl font-semibold mb-10">Services</h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 w-full">
        <div
          className={`relative service-btn rent-truck ${
            activeService === "rentTruck" ? "selected" : ""
          }`}
          onClick={() => handleClick("rentTruck")}
        >
          <div className="z-20 flex flex-col items-center justify-center pointer-events-none">
            <FaTruck className="mb-2 icon" />
            {/* named it icon class here */}
            <p>Rent a truck</p>
          </div>
          <div className="absolute inset-0 bg-black opacity-50 hover:opacity-30 transition-opacity duration-300 z-10"></div>
          <Image fill src="/truck.jpg" className="object-cover" />
        </div>

        <div
          className={`relative service-btn hire-workers ${
            activeService === "hireWorkers" ? "selected" : ""
          }`}
          onClick={() => handleClick("hireWorkers")}
        >
          <div className="z-20 flex flex-col items-center justify-center pointer-events-none">
            <GrUserWorker className="mb-2 icon" />
            <p>Hire workers</p>
          </div>
          <div className="absolute inset-0 bg-black opacity-50 hover:opacity-30 transition-opacity duration-300 z-10"></div>
          <Image fill src="/workers.jpg" className="object-cover" />
        </div>

        <div
          className={`relative service-btn expert-help ${
            activeService === "expertHelp" ? "selected" : ""
          }`}
          onClick={() => handleClick("expertHelp")}
        >
          <div className="z-20 flex flex-col items-center justify-center pointer-events-none">
            <GrUserExpert className="mb-2 icon" />
            <p>Expert help</p>
          </div>
          <div className="absolute inset-0 bg-black opacity-50 hover:opacity-30 transition-opacity duration-300 z-10"></div>
          <Image fill src="/expert.jpg" className="object-cover" />
        </div>

        <div
          className={`relative service-btn warehouse ${
            activeService === "warehouse" ? "selected" : ""
          }`}
          onClick={() => handleClick("warehouse")}
        >
          <div className="z-20 flex flex-col items-center justify-center pointer-events-none">
            <FaWarehouse className="mb-2 icon" />
            <p>Storage</p>
          </div>
          <div className="absolute inset-0 bg-black opacity-50 hover:opacity-30 transition-opacity duration-300 z-10"></div>
          <Image fill src="/warehouse.jpg" className="object-cover" />
        </div>
      </div>

      {/* Display the selected service component */}
      <div>
        {activeService === "warehouse" && <Warehouse />}
        {activeService === "rentTruck" && <RentTruck />}
        {activeService === "hireWorkers" && <HireWorkers />}
        {activeService === "expertHelp" && <ExpertHelp />}
      </div>
    </div>
  );
}
