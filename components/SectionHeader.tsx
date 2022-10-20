import React from "react";
interface props {
  header: string;
  paragraph: string;
}
function SectionHeader(props: props) {
  return (
    <section className="flex flex-col  lg:flex-row  items-start lg:justify-between lg:items-center border-b-2 pb-10 ">
      <h1 className="projects-h text-5xl pb-10   lg:text-8xl font-medium  lg:w-4/6">
        {props.header}
      </h1>
      <p className="text-xs text-slate-500 lg:w-2/6">{props.paragraph}</p>
    </section>
  );
}

export default SectionHeader;
