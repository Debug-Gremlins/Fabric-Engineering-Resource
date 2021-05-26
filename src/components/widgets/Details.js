import React from "react";
import DetailsDataI from "../customs/DetailsCompI";
import DetailsDataII from "../customs/DetailsCompII";

function Details() {
  return (
    <div>
      <section className="details">
        <div className="container-fluid">
          <DetailsDataI
            clsName="bg_sec_1 col"
            detailsTitle="Learning that goes beyond digital"
            detailsParagraph="
                   Clothing is one of the primary needs of humans just after food
                and shelter. In modern time, textiles are not restricted to
                necessity but a statement of fashion. With the requirement of
                variation in design, a career in Textile Engineering and
                designing is increasing tremendously. Experts and professionals
                in the textile industry work with the aim to manufacture the
                best quality and durable textiles which satisfy human desires
                and needs."
            detailsBtn="Learn More"
            detailsLink="https://www.thomasnet.com/articles/top-suppliers/textile-manufacturing-companies/"
          />

          <DetailsDataII
            detailsTitle="Programs tailored just for your team"
            detailsParagraph="Textile engineering deals with all fiber, textile and apparel
                  processes, products and machinery. If you wish to take your
                  passions further in the textile industry, find and compare
                  degrees on educations.com today."
            detailsBtn="Learn More"
            detailsLink="https://www.thomasnet.com/articles/top-suppliers/textile-manufacturing-companies/"
            clsName="bg_sec_2 col"
          />

          <DetailsDataI
            clsName="bg_sec_3 col"
            detailsTitle="A role in the creative canon"
            detailsParagraph="
                  Our core fabric engineering capabilities, and in-house
                  production of wovens, integrate manufacturing with research
                  and lab verification, advanced laminating, and proprietary
                  fabric bonding."
            detailsBtn="Learn More"
            detailsLink="https://www.thomasnet.com/articles/top-suppliers/textile-manufacturing-companies/"
          />

          <DetailsDataII
            detailsTitle="Take control of your program"
            detailsParagraph="The U.S. textile industry is a nearly $70 billion sector when
                  measured by the value of industry shipments. It remains one of
                  the biggest parts of the manufacturing industry and is one of
                  the largest markets in the world by export value: $23 billion
                  in 2018. A textile is a flexible material made up of a network
                  of natural or artificial fibers such as yarn or thread."
            detailsBtn="See How"
            detailsLink="https://www.thomasnet.com/articles/top-suppliers/textile-manufacturing-companies/"
            clsName="bg_sec_4 col"
          />

          <DetailsDataI
            clsName="bg_sec_5 col"
            detailsTitle="Engagement that matters"
            detailsParagraph="
                 
                The attire you are wearing or using is a part of the textile. Or
                we can take examples of towels we use every day. That is a part
                of the textile too. And many more objects around us are part of
                the textile.Textile engineering is about designing and
                developing the process to make fabrics.In fact, you cannot think
                of a day without textiles."
            detailsBtn="Read More"
            detailsLink="https://www.thomasnet.com/articles/top-suppliers/textile-manufacturing-companies/"
          />
        </div>
      </section>
    </div>
  );
}

export default Details;
