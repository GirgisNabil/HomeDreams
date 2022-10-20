import React from "react";
import SectionHeader from "../components/SectionHeader";

function Services() {
  return (
    <div className="pt-56 lg:px-96 ">
      <SectionHeader
        header="Explore Our Services"
        paragraph=" projects
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, possimus nihil 
expedita adipisci quia voluptates omnis maxime unde fugit nostrum cum, eius inventore magni ex"
      />
      <main className="flex flex-col lg:flex-row py-28 gap-7 justify-center">
        <div className="services-menu">
          <p>Service one</p>
          <p>Service two</p>

          <p>Service three</p>
          <p>Service four</p>
          <p>Service five</p>
          <p>Service six</p>
          <p>Service seven</p>
          <p>Service eight</p>
        </div>

        <div className="">
          <img src="./1.jpg" alt="" />
          <h1 className="text-3xl pt-20">House Cleaning</h1>
          <p className="text-gray-700 py-7">
            Our cleaning system sets us apart. Our customers keep coming back to
            us, because we provide services that work and keep their homes and
            apartments clean, right down to the little details. This extensive
            cleaning system, which we call our Detail-Clean Rotation System,
            which has been proven to be effective in more than five million
            cleans!
          </p>

          <h1 className="text-2xl">
            How does our apartment cleaning program work?
          </h1>

          <p className="text-gray-700 py-7">
            We start with a thorough detail-clean throughout your house over the
            course of the first two cleans. On the first clean, our maid service
            will thoroughly clean your apartment, with special attention on your
            kitchen and bathrooms. On the second session, we'll clean your
            entire apartment, but this time we'll provide detail-clean services
            in your sleeping and living areas. We'll continue to maintain this
            detail-clean level throughout your home throughout our next visits
            by providing deep cleaning services on a rotating basis.
          </p>

          <p className="py-7">
            Every time we clean, we'll provide services that include the
            following:
          </p>

          <ul>
            <li className="py-5">
              <h1>Bathrooms</h1>
              <p>
                Cobwebs removed, dusting, floors cleaned, toilets cleaned,
                mirrors / chrome fixtures cleaned, shower doors cleaned, tile
                walls, bathtub / showers cleaned
              </p>
            </li>
            <li>
              <h1>Sleeping Areas</h1>
              <p>
                Surfaces hand wiped, floors cleaned, general dusting, cobwebs
                removed, doors and door frames spot cleaned
              </p>
            </li>
            <li>
              <h1>Living Areas</h1>
              <p>
                Surfaces hand wiped, cobwebs removed, doors and door frames spot
                cleaned, general dusting, floors cleaned
              </p>
            </li>
            <li>
              <h1>Kitchen</h1>
              <p>
                Countertops cleaned, outside of range hood cleaned, top and
                front of range cleaned, drip pans / glass top surfaces wiped,
                sinks cleaned and chrome shined, fronts of all appliances
                cleaned, general dusting, cobwebs removed, microwave wiped out,
                doors and door frames spot cleaned
              </p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Services;
