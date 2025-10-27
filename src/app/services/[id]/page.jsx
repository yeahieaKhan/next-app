import React from "react";

function ServicesDetails({ params }) {
  const id = params.id;

  const services = [
    {
      id: 1,
      name: "Web Development",
      category: "IT & Software",
      description:
        "Build responsive and high-performance websites using modern technologies like React, Node.js, and MongoDB.",
      price: 500,
    },
    {
      id: 2,
      name: "Graphic Design",
      category: "Design & Branding",
      description:
        "Creative logo, banner, and brand design that make your business stand out.",
      price: 200,
    },
    {
      id: 3,
      name: "Digital Marketing",
      category: "Marketing",
      description:
        "Boost your brand’s online visibility with SEO, SEM, and social media marketing strategies.",
      price: 300,
    },
    {
      id: 4,
      name: "Mobile App Development",
      category: "IT & Software",
      description:
        "Custom iOS and Android apps designed with modern UI and smooth performance.",
      price: 800,
    },
    {
      id: 5,
      name: "Video Editing",
      category: "Media & Production",
      description:
        "Professional video editing for YouTube, ads, and social media using Adobe Premiere Pro and After Effects.",
      price: 150,
    },
    {
      id: 6,
      name: "Content Writing",
      category: "Writing & Translation",
      description:
        "High-quality blog, article, and web content writing tailored to your brand voice.",
      price: 100,
    },
    {
      id: 7,
      name: "UI/UX Design",
      category: "Design & Branding",
      description:
        "Design intuitive and user-friendly interfaces that enhance user experience.",
      price: 350,
    },
    {
      id: 8,
      name: "Cybersecurity Audit",
      category: "IT & Security",
      description:
        "Comprehensive security assessments to identify and fix system vulnerabilities.",
      price: 600,
    },
  ];

  const singleData = services.find((data) => data.id == id);

  return (
    <div>
      <h2>Services details</h2>
      <h2>id = {id}</h2>
      <h2>id = {singleData.name}</h2>
    </div>
  );
}

export default ServicesDetails;
