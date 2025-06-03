"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/src/components/ui/alert-dialog";
import { useState } from "react";

export default function TravelDeals() {
  const [showAll, setShowAll] = useState(false);

  const trips = [
    {
      date: "08 Jun 2025",
      title: "India: Trekking in Ladakh",
      from: "DELHI",
      to: "DELHI",
      img: "/images/delhi.webp",
      days: 14,
      oldPrice: "$2,760",
      newPrice: "$2,208",
    },
    {
      date: "23 Jun 2025",
      title: "Real Rajasthan",
      from: "Delhi",
      to: "Delhi",
      img: "/images/rajasthan.webp",
      days: 16,
      oldPrice: "$750",
      newPrice: "$675",
    },
    {
      date: "24 Jun 2025",
      title: "Indian Getaway",
      from: "Delhi",
      to: "Delhi",
      img: "/images/indiagate.webp",
      days: 11,
      oldPrice: "$725",
      newPrice: "$580",
    },
    {
      date: "27 Jun 2025",
      title: "Classic Rajasthan",
      from: "Delhi",
      to: "Delhi",
      img: "/images/classicrajasthan.webp",
      days: 15,
      oldPrice: "$1,720",
      newPrice: "$1,376",
    },
    {
      date: "04 Jul 2025",
      title: "South India Revealed",
      from: "Trivandrum",
      to: "Goa",
      img: "/images/oursouth.webp",
      days: 16,
      oldPrice: "$1,260",
      newPrice: "$1,008",
    },
    {
      date: "05 Jul 2025",
      title: "Northern India Family Holiday",
      from: "Delhi",
      to: "Delhi",
      img: "/images/northindia.webp",
      days: 10,
      oldPrice: "$1,350",
      newPrice: "$1,080",
    },
    {
      date: "06 Jul 2025",
      title: "India: Trekking in Ladakh",
      from: "Delhi",
      to: "Delhi",
      img: "/images/ladakh.webp",
      days: 14,
      oldPrice: "$2,930",
      newPrice: "$2,344",
    },
    {
      date: "07 Jul 2025",
      title: "Highlights of India & Nepal",
      from: "Delhi",
      to: "Kathmandu",
      img: "/images/nepal.webp",
      days: 19,
      oldPrice: "$2,935",
      newPrice: "$2,348",
    },
    {
      date: "07 Jul 2025",
      title: "India's Golden Triangle",
      from: "Delhi",
      to: "Delhi",
      img: "/images/goldentriangle.webp",
      days: 8,
      oldPrice: "$1,015",
      newPrice: "$812",
    },
    {
      date: "13 Jul 2025",
      title: "Real Delhi to Kathmandu",
      from: "Delhi",
      to: "Kathmandu",
      img: "/images/kathmandu.webp",
      days: 13,
      oldPrice: "$905",
      newPrice: "$815",
    },
  ];

  const visibleTrips = showAll ? trips : trips.slice(0, 6);

  return (
    <div className="min-h-screen bg-white mt-5">
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl text-gray-800 mb-10 font-bold">
          Top India Travel Deals
        </h1>

        <div className="border border-gray-300 rounded-lg overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-7 gap-6 bg-gray-100 p-4 font-semibold text-gray-700 border-b border-gray-300">
            <div className="col-span-1">Departing</div>
            <div className="col-span-2">Trip</div>
            <div className="col-span-1">Route</div>
            <div className="col-span-1 text-center">Days</div>
            <div className="col-span-1 text-right">From USD</div>
          </div>

          {/* Trip rows */}
          {visibleTrips.map((trip, index) => (
            <div
              key={index}
              className="border-b border-gray-300 hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
            >
              <div className="grid grid-cols-7 gap-6 p-6 items-center">
                <div className="col-span-1 text-sm font-medium text-gray-600">
                  {trip.date}
                </div>

                <div className="col-span-2">
                  <div className="text-lg font-semibold text-gray-800">
                    {trip.title}
                  </div>
                  <div className="text-sm text-gray-500">
                    {trip.from} → {trip.to}
                  </div>
                </div>

                <div className="col-span-1">
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <img
                        src={trip.img}
                        alt={trip.title}
                        className="h-22 w-24 object-cover rounded-md"
                      />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>{trip.title}</AlertDialogTitle>
                        <AlertDialogDescription>
                          <img
                            src={trip.img}
                            alt={trip.title}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>

                <div className="col-span-1 text-center text-sm font-medium text-gray-700">
                  {trip.days} days
                </div>

                <div className="col-span-1 text-right">
                  <div className="text-gray-400 line-through text-sm">
                    {trip.oldPrice}
                  </div>
                  <div className="text-xl font-bold text-black">
                    {trip.newPrice}
                  </div>
                </div>

                <div className="col-span-1 text-right text-sm text-[#D97706] font-medium mt-1 hover:underline">
                  View trip →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {!showAll && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
            >
              View more trips
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
