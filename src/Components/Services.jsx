"use client";

import { Leaf, Truck, Building2, ListTree, Sprout } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Sprout size={32} className="text-green-600" />,
      title: "Wholesale & Retail Supply",
      desc: "Premium saplings, vermicompost, cocopeat, and gardening tools for individuals, nurseries, and farms.",
    },
    {
      icon: <ListTree size={32} className="text-green-600" />,
      title: "Customized Bulk Orders",
      desc: "Bulk plant and compost supply tailored for farms, institutions, and corporate green initiatives.",
    },
    {
      icon: <Truck size={32} className="text-green-600" />,
      title: "Doorstep Delivery",
      desc: "Fast and reliable delivery of saplings, compost, and gardening essentials across your region.",
    },
    {
      icon: <Leaf size={32} className="text-green-600" />,
      title: "Plant Selection Support",
      desc: "Expert guidance to help you choose the right plants and compost for your soil and climate.",
    },
    {
      icon: <Building2 size={32} className="text-green-600" />,
      title: "Corporate & Institutional Supply",
      desc: "Supplying corporates, NGOs, and schools with plants and compost for plantation drives and CSR projects.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-700">
          🌱 Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
