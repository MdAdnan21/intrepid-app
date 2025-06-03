"use client";
import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Image from "next/image";
import TouristNavbar from "../components/common/TouristNavbar";
import TravelDeals from "./_components/TravelDeals";
import OurTrips from "./_components/OurTrips";
import TripReviews from "./_components/TripReviews";
import ArticleCarousel from "./_components/ArticleCarousel";
import GlanceTrips from "./_components/GlanceTrips";
import FAQS from "./_components/FAQS";
import Video from "./_components/YouTubeVideoPlayer";
import YouTubeVideoPlayer from "./_components/YouTubeVideoPlayer";
import TravelGroup from "./_components/TravelGroup";
import Footer from "./_components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("traveldeals"); // State to keep track of the active section

  // Create refs for each section
  const travelDealsRef = useRef(null);
  const ourTripsRef = useRef(null);
  const tripReviewsRef = useRef(null);
  const articleCarouselRef = useRef(null);
  const glanceTripsRef = useRef(null);
  const faqsRef = useRef(null);

  useEffect(() => {
    const sections = [
      { id: "traveldeals", ref: travelDealsRef },
      { id: "ourtrips", ref: ourTripsRef },
      { id: "tripreviews", ref: tripReviewsRef },
      { id: "articlecarousel", ref: articleCarouselRef },
      { id: "glancetrips", ref: glanceTripsRef },
      { id: "faqs", ref: faqsRef },
    ];

    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: "-50% 0px -50% 0px", // Adjust this to make the active section change when it's roughly in the middle of the viewport
      threshold: 0, // No threshold needed when using rootMargin
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe each section
    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    // Clean up observer on component unmount
    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []); // Run once on mount

  return (
    <div>
      <Navbar />
      {/* Added pt-32 to account for both fixed Navbars (assuming Navbar is h-16 and TouristNavbar is h-16, total 128px) */}
      <div className="mt-5 pt-32">
        {" "}
        {/* Adjusted margin-top and added padding-top */}
        <h1 className="text-5xl font-semibold text-center">
          India tours & holidays
        </h1>
        <Image
          src="/images/Intrepid-Travel.webp"
          alt="hero"
          width={1000}
          height={1000}
          className="w-full h-full mt-3"
        />
      </div>
      <section className="mt-20  max-w-3xl mx-auto px-4 text-start tracking-wider">
        <h2 className="text-2xl mb-4">A feast for the senses</h2>
        <p className="text-gray-700 mb-4">
          From morning calls of local chai wallahs to the whir of rattling
          rickshaws, the feel of centuries old stone or a soft and supple silk,
          the sing of spice from your morning thali and the hues of a new
          age-old city – India is an immersive experience like no other.
        </p>
        <p className="text-gray-700">
          Whether the diversity of{" "}
          <span className="text-[#a71f50] underline cursor-pointer">Delhi</span>
          , the majesty of the Taj Mahal and the relics of{" "}
          <span className="text-[#a71f50] underline cursor-pointer">
            Rajasthan’s
          </span>{" "}
          Maharaj past have you venturing north to the{" "}
          <span className="text-[#a71f50] underline cursor-pointer">
            Golden Triangle
          </span>
          , or if the allure of{" "}
          <span className="text-[#a71f50] underline cursor-pointer">
            Southern India’s
          </span>{" "}
          simple life sees you journeying south – you’re sure to be
          wholeheartedly charmed by the cultural masterpiece that is India.
          Don’t believe us? Experience it for yourself.
        </p>
      </section>
      <div>
        <TouristNavbar activeSection={activeSection} />{" "}
        {/* Pass activeSection to TouristNavbar */}
      </div>
      {/* Assign refs to each section */}
      <section id="traveldeals" ref={travelDealsRef} className="pt-24 px-6">
        <TravelDeals />
      </section>
      <section id="ourtrips" ref={ourTripsRef} className="mb-6 px-6">
        <OurTrips />
      </section>
      <section id="tripreviews" ref={tripReviewsRef} className="mb-6">
        <TripReviews />
      </section>
      <section id="articlecarousel" ref={articleCarouselRef} className="mb-6">
        <ArticleCarousel />
      </section>
      <section id="glancetrips" ref={glanceTripsRef} className="mb-6">
        <GlanceTrips />
      </section>
      <section id="faqs" ref={faqsRef} className="mb-6">
        <FAQS />
      </section>
      <section id="video" ref={faqsRef} className="mb-6">
        <YouTubeVideoPlayer />
      </section>
      <div>
        <TravelGroup />
        <Footer />
      </div>
    </div>
  );
}
