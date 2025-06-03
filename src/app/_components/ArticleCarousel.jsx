"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const articles = [
  {
    title: "Where to go in 2025 for sun lovers – a month-by-month guide",
    date: "17 JAN 2025",
    image: "/images/tripimg.jpg",
  },
  {
    title: "Where to go in 2025 based on your star sign",
    date: "15 JAN 2025",
    image: "/images/starsign.jpg",
  },
  {
    title: "7 new trips and experiences for 18 to 35s",
    date: "04 DEC 2024",
    image: "/images/spaintrip.jpg",
  },
  {
    title: "13 new adventures in Asia",
    date: "03 DEC 2024",
    image: "/images/natureasia.jpg",
  },
  {
    title: "7 new incredible camping spots for 2025",
    date: "03 DEC 2024",
    image: "/images/spots.jpg",
  },
  {
    title: "Let’s eat: culinary experiences around the world",
    date: "01 DEC 2024",
    image: "/images/globefood.jpg",
  },
  {
    title: "14 wild and wonderful places to stay in 2025",
    date: "01 DEC 2024",
    image: "/images/nationalpark.jpg",
  },
  {
    title: "From solo adventurer to family explorer, this traveller shares",
    date: "03 DEC 2024",
    image: "/images/adventures.jpg",
  },
];

export default function ArticleCarousel() {
  const articleRef = useRef(null);
  const youMightLikeRef = useRef(null);

  const [articleScroll, setArticleScroll] = useState({
    atStart: true,
    atEnd: false,
  });
  const [youMightScroll, setYouMightScroll] = useState({
    atStart: true,
    atEnd: false,
  });

  const checkScroll = (ref, setState) => {
    if (!ref.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = ref.current;
    setState({
      atStart: scrollLeft <= 10,
      atEnd: scrollLeft + clientWidth >= scrollWidth - 10,
    });
  };

  const scrollByCards = (ref, cardWidth, cardsToScroll, setState) => {
    if (!ref.current) return;
    ref.current.scrollBy({
      left: cardWidth * cardsToScroll,
      behavior: "smooth",
    });
    setTimeout(() => checkScroll(ref, setState), 300);
  };

  useEffect(() => {
    checkScroll(articleRef, setArticleScroll);
    checkScroll(youMightLikeRef, setYouMightScroll);
  }, []);

  return (
    <>
      {/* === Article Carousel === */}
      <section className="bg-white py-10 px-3">
        <div className="container mx-auto px-4 relative max-w-7xl">
          <h2 className="text-4xl mb-10 px-2">
            Get inspired on The Good Times
          </h2>
          <div className="relative">
            <div
              ref={articleRef}
              className="flex gap-4 overflow-x-auto px-4 scroll-smooth"
              onScroll={() => checkScroll(articleRef, setArticleScroll)}
            >
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="min-w-[280px] max-w-xs border border-primary rounded bg-white shadow-sm flex-shrink-0"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-t"
                  />
                  <div className="p-4">
                    <p className="font-medium text-base">{article.title}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {article.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            {!articleScroll.atStart && (
              <button
                onClick={() =>
                  scrollByCards(articleRef, 296, -4, setArticleScroll)
                } // 280px + 16px gap
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-primary p-2 rounded-full shadow hover:bg-primary hover:text-white transition"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            {!articleScroll.atEnd && (
              <button
                onClick={() =>
                  scrollByCards(articleRef, 296, 4, setArticleScroll)
                }
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-primary p-2 rounded-full shadow hover:bg-primary hover:text-white transition"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* === Popular Local Regions === */}
      <section className="container mx-auto px-4 mt-20 max-w-7xl">
        <h2 className="text-3xl font-semibold mb-4 px-5">
          Popular Local Regions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-evenly p-5">
          {[
            { title: "South India", image: "/images/southimg.webp" },
            { title: "Rajasthan", image: "/images/rajasthani.webp" },
            {
              title: "The Golden Triangle",
              image: "/images/trianglegolden.webp",
            },
          ].map((region, i) => (
            <div key={i} className="border rounded shadow bg-white">
              <img
                src={region.image}
                alt={region.title}
                className="w-full h-60 object-cover rounded-t"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{region.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === You Might Also Like Carousel === */}
      <section className="container mx-auto px-4 mt-20 relative">
        <h2 className="text-3xl font-semibold mb-8 px-24">
          You might also like
        </h2>
        <div className="relative">
          <div
            ref={youMightLikeRef}
            className="flex gap-4 justify-center overflow-x-auto px-4 scroll-smooth scrollbar-hide"
            onScroll={() => checkScroll(youMightLikeRef, setYouMightScroll)}
          >
            {[
              { title: "Pakistan", image: "/images/pakisthan.webp" },
              { title: "Sri Lanka", image: "/images/srilanka.webp" },
              { title: "Tibet", image: "/images/tibet.webp" },
              { title: "Nepal", image: "/images/nepalimg.webp" },
              { title: "China", image: "/images/china.webp" },
              { title: "Malaysia", image: "/images/malaysia.webp" },
            ].map((item, index) => (
              <div
                key={index}
                className="min-w-[200px] max-w-[200px] border border-primary rounded shadow bg-white flex-shrink-0"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-t"
                />
                <div className="p-3">
                  <h4 className="font-semibold text-base">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          {!youMightScroll.atStart && (
            <button
              onClick={() =>
                scrollByCards(youMightLikeRef, 216, -4, setYouMightScroll)
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-primary p-2 rounded-full shadow hover:bg-primary hover:text-white transition"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          {!youMightScroll.atEnd && (
            <button
              onClick={() =>
                scrollByCards(youMightLikeRef, 216, 4, setYouMightScroll)
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-primary p-2 rounded-full shadow hover:bg-primary hover:text-white transition"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </section>
    </>
  );
}
