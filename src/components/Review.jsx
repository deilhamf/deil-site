/**
 * @copyright 2024 deil
 * @license Apache-2.0
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import ReviewCard from "./ReviewCard";

const reviews = [
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "fufufafa",
    imgSrc: "/images/people-1.jpg",
    company: "PixelForge",
  },
  {
    content: "Vestibulum ut pharetra nibh, non tristique sapien.",
    name: "khabib nurmagomedov",
    imgSrc: "/images/people-2.jpg",
    company: "NexaWave",
  },
  {
    content: "Sed id nunc vel augue hendrerit consectetur ac non diam.",
    name: "dostoevsky",
    imgSrc: "/images/people-3.jpg",
    company: "CodeCraft",
  },
  {
    content: "Duis nisl eros, vehicula et fringilla eu, tincidunt nec odio.",
    name: "walter white",
    imgSrc: "/images/people-4.jpg",
    company: "BrightWeb",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus, lorem ut efficitur iaculis, ante mauris tristique libero, ut sagittis quam odio eu felis.",
    name: "ewing hd",
    imgSrc: "/images/people-5.jpg",
    company: "TechMosaic",
  },
  {
    content: "Nullam sagittis libero vel ipsum ultricies ullamcorper.",
    name: "kaesangp",
    imgSrc: "/images/people-6.jpg",
    company: "Skyline Digital",
  },
];

const Review = () => {
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        start: "-200% 80%",
        end: "400% 80%",
        scrub: true,
        markers: false,
      },
      x: "-1000",
    });
  });

  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">What My Fellas Say</h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              imgSrc={imgSrc}
              name={name}
              company={company}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
