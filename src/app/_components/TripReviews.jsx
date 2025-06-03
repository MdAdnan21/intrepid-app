"use client";

import { Label } from "@/src/components/ui/label";
import { Checkbox } from "@/src/components/ui/checkbox";
import { Star } from "lucide-react";
import { useState } from "react";

const ratingData = [
  { stars: 5, count: 3738 },
  { stars: 4, count: 288 },
  { stars: 3, count: 36 },
  { stars: 2, count: 13 },
  { stars: 1, count: 3 },
];

const maxRatingCount = Math.max(...ratingData.map((item) => item.count));

const reviews = [
  {
    name: "Heather",
    date: "May 2025",
    title: "INDIA'S GOLDEN TRIANGLE",
    content:
      "The Golden Triangle is a fantastic “introduction to India” trip. Excellent value for money and extremely well guided, this trip covers old Delhi, Jaipur and the Taj Mahal with many other additional sights and experiences included. In many ways the Taj Mahal is likely to...",
    fullContent:
      "This trip covers old Delhi, Jaipur and the Taj Mahal with many other additional sights and experiences included. In many ways the Taj Mahal is likely to be...",
    rating: 5,
  },
  {
    name: "Christopher",
    date: "May 2025",
    title: "INDIA'S GOLDEN TRIANGLE",
    content:
      "This was a great way to see so much, so quickly and yet, seemingly in an unhurried way. A fantastic combination of historic, iconic and terrific.",
    rating: 5,
  },
  {
    name: "Lisa",
    date: "May 2025",
    title: "INDIA'S GOLDEN TRIANGLE",
    content:
      "What a delight this tour of Delhi, Jaipur, Lotwara and Agra was! I highly recommend this and if you have concerns about long drives, safe roads put them aside! Our leader Karni was just the best and made our diverse group of 6 people happy and comfortable and",
    rating: 5,
  },
];

export default function TripReviews() {
  const [selectedStars, setSelectedStars] = useState([]);

  const toggleRating = (star) => {
    setSelectedStars((prev) =>
      prev.includes(star) ? prev.filter((s) => s !== star) : [...prev, star]
    );
  };

  const filteredReviews =
    selectedStars.length === 0
      ? reviews
      : reviews.filter((review) => selectedStars.includes(review.rating));

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold tracking-tight">
          India tour reviews
        </h1>
        <div className="flex justify-center items-center gap-2 mt-4 text-lg font-medium">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-yellow-400 stroke-yellow-400"
              />
            ))}
          <span className="text-foreground font-semibold">
            4.9 · 4078 reviews
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar */}
        <aside className="lg:w-1/4 w-full">
          <h2 className="text-lg font-semibold mb-4">Filter by rating</h2>
          <div className="space-y-4">
            {ratingData.map((item) => (
              <div key={item.stars} className="flex items-center gap-3">
                <Checkbox
                  id={`star-${item.stars}`}
                  checked={selectedStars.includes(item.stars)}
                  onCheckedChange={() => toggleRating(item.stars)}
                />
                <Label
                  htmlFor={`star-${item.stars}`}
                  className="flex-1 flex items-center text-sm"
                >
                  <span className="min-w-[60px]">{item.stars} Star</span>
                  <div className="flex-grow mx-2">
                    <div className="bg-muted h-2 w-full rounded-full overflow-hidden">
                      <div
                        className="bg-yellow-400 h-2"
                        style={{
                          width: `${(item.count / maxRatingCount) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground min-w-[30px] text-right">
                    {item.count}
                  </span>
                </Label>
              </div>
            ))}
          </div>
        </aside>

        {/* Reviews */}
        <section className="flex-1 space-y-10">
          {filteredReviews.map((review, index) => (
            <div
              key={index}
              className="border-b pb-6 last:border-b-0 space-y-2"
            >
              <div className="flex items-center gap-1 text-yellow-400">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 stroke-yellow-400"
                    />
                  ))}
              </div>
              <h3 className="font-bold text-lg uppercase tracking-tight">
                {review.title}
              </h3>
              <p className="font-medium text-muted-foreground">
                {review.name} · Traveled {review.date}
              </p>
              <p className="text-base leading-relaxed">{review.content}</p>
              {review.fullContent && (
                <>
                  <p className="text-primary underline cursor-pointer hover:opacity-80 transition">
                    Read more
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Review submitted 12 May 2025
                  </p>
                </>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
