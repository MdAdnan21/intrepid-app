"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { FiChevronDown } from "react-icons/fi";

export default function IndiaTrips() {
  const [visibleTrips, setVisibleTrips] = useState(6);

  const handleShowMore = () => {
    setVisibleTrips((prev) => prev + 6);
  };

  return (
    <div className="px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-medium mb-5">Our India Trips</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trips.slice(0, visibleTrips).map((trip, index) => (
          <Card
            key={index}
            className="rounded-2xl shadow-xl overflow-hidden relative"
          >
            {/* ✅ Trip Image & Favorite Button */}
            <div className="relative h-64">
              <Image
                src={trip.img}
                alt={trip.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                <Heart className="h-5 w-5 text-gray-700" />
              </div>
            </div>

            {/* ✅ Trip Details */}
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{trip.title}</h2>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <span className="mr-2">⏱</span> {trip.duration}
              </div>
              <span className="text-xs bg-gray-200 rounded-full px-3 py-1 text-gray-700">
                {trip.type}
              </span>
              <hr className="my-4" />
              <div className="text-sm text-gray-600 text-end">
                From{" "}
                <span className="text-black font-semibold">
                  USD {trip.price}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ✅ "Show More Trips" Button */}
      {visibleTrips < trips.length && (
        <div className="flex justify-center mt-6">
          <Button
            onClick={handleShowMore}
            className="w-1/4 rounded-lg py-6 bg-black text-white"
          >
            <span className="text-lg"> Show More Trips </span>
            <FiChevronDown size={24} />
          </Button>
        </div>
      )}
    </div>
  );
}

/* ✅ Trips Data */
export const trips = [
  {
    title: "India's Golden Triangle",
    duration: "8 days",
    type: "Original",
    price: "$788",
    img: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt24300b2f4bbdeb64/6809bca466577be6bbada0cb/HHSN_2025.gif?branch=prd&width=1240&quality=75&format=pjpg&auto=webp",
  },
  {
    title: "Classic Rajasthan",
    duration: "15 days",
    type: "Original",
    price: "$1,344",
    img: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt1dc4b40687e69d66/6765f2b478b4026131b2f285/hhsc_2025.gif?branch=prd&width=1240&quality=75&format=pjpg&auto=webp",
  },
  {
    title: "Indian Getaway",
    duration: "11 days",
    type: "Basix",
    price: "$580",
    img: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt2a2cec80f946f314/64f76a4170664175ad69a09f/hhri_2023.gif?branch=prd&width=1240&quality=75&format=pjpg&auto=webp",
  },
  {
    title: "Rajasthan Experience",
    duration: "15 days",
    type: "Comfort",
    price: "$2,124",
    img: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt76e4759bd11ef267/680abfbc55393f582b3470d7/HHKR_2025.gif?branch=prd&width=1240&quality=75&format=pjpg&auto=webp",
  },
  {
    title: "Premium India In Depth",
    duration: "14 days",
    type: "Premium",
    price: "$3,116",
    img: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blte843e71b6415359a/6337b561aa860b4b24202bf4/hhpr_2022.jpg?branch=prd&width=1240&quality=75&format=pjpg&auto=webp",
  },
  {
    title: "Tailor-Made Trips",
    duration: "Custom",
    type: "Exclusive",
    price: "Custom Pricing",
    img: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/bltb78607ed18fcfa5d/tailor-made-card-image.jpg?width=800&quality=75&format=pjpg&auto=webp",
  },
  {
    title: "Southern India",
    duration: "15 days",
    type: "Original",
    price: "$1,662",
    img: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt901668022f934fc1/66d7dcd232237bb2412c1c33/hhss_2025.gif?branch=prd&width=1240&quality=75&format=pjpg&auto=webp",
  },
  {
    title: "Mountains & Mystics of India",
    duration: "13 days",
    type: "Original",
    price: "$1,462",
    img: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt467c108bdf871af1/63374afac5abd93f01d6518d/hhsf_2020.gif?branch=prd&width=2560&quality=75&format=pjpg&auto=webp",
  },
  {
    title: "Premium South India",
    duration: "13 days",
    type: "Premium",
    price: "$2,754",
    img: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt98b0345e6ef9048f/6337b5ba7080e15b663375f2/hhps_2022.jpg?branch=prd&width=1240&quality=75&format=pjpg&auto=webp",
  },
  {
    title: "India Safari",
    duration: "12 days",
    type: "Original",
    price: "$2,461",
    img: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/bltfd9810aa00f8858e/66de2de43c42c3559b36dbb2/HHSW_2025.gif?branch=prd&width=1240&quality=75&format=pjpg&auto=webp",
  },
  {
    title: "Delhi to Kathmandu",
    duration: "15 days",
    type: "Original",
    price: "$1,616",
    img: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/bltfcd1c8004b3d3748/680abc6766c2d2c96a6b8a9d/HHSK_2025.gif?branch=prd&width=1240&quality=75&format=pjpg&auto=webp",
  },
  {
    title: "Northern India Family Holiday",
    duration: "10 days",
    type: "Original",
    price: "$1,080",
    img: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt35c98259edd3efa0/6337475879819f55e245e9e7/HHFI_MAP_2022.gif?branch=prd&width=1240&quality=75&format=pjpg&auto=webp",
  },
  {
    title: "North India Revealed",
    duration: "22 days",
    type: "Basix",
    price: "$956",
    img: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/bltfe5e2625309cfa29/675a5e9a10024402b0f1ca90/hhrr_2025-2.gif?branch=prd&width=1240&quality=75&format=pjpg&auto=webp",
  },
  {
    title: "India: Women's Expedition",
    duration: "13 days",
    type: "Original",
    price: "$1,462",
    img: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt25400b754072f7d9/66e10d74f803316694473461/HHSL_2025.gif?branch=prd&width=1240&quality=75&format=pjpg&auto=webp",
  },
  {
    title: "Premium India",
    duration: "11 days",
    type: "Premium",
    price: "$3,018",
    img: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt5a204dcdd4ce367c/66d946824258fb6e882fdbe1/hhpg_2025.gif?branch=prd&width=1240&quality=75&format=pjpg&auto=webp",
  },
  {
    title: "India Real Food Adventure",
    duration: "15 days",
    type: "Original",
    price: "$2,261",
    img: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt10d8c799f27e9562/6336e735d4ba00607ff6f6b4/hhzm_2020.gif?branch=prd&width=2560&quality=75&format=pjpg&auto=webp",
  },
  {
    title: "North India Highlights",
    duration: "10 days",
    type: "Comfort",
    price: "$1,384",
    img: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt2efd9c2e866392b1/67737a7975469c7faad73e7a/HHKH_2025-3.gif?branch=prd&width=1240&quality=75&format=pjpg&auto=webp",
  },
  {
    title: "South India Revealed",
    duration: "16 days",
    type: "Basix",
    price: "$1,008",
    img: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt6d90ab7a85a7711e/63374aeacadf405032d1a2c0/hhrs_2019.gif?branch=prd&width=2560&quality=75&format=pjpg&auto=webp",
  },
  {
    title: "Premium India And Sri Lanka",
    duration: "19 days",
    type: "Premium",
    price: "$5,831",
    img: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt132ba0cd8e85dba3/66da92e556e00aeab6b81ca1/HPPGC-2025.gif?branch=prd&width=1240&quality=75&format=pjpg&auto=webp",
  },
  {
    title: "Delhi to Goa",
    duration: "15 days",
    type: "Basix",
    price: "$952",
    img: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt161cea94769813d4/63374ad644738d4f84f13732/hhrg_2020.gif?branch=prd&width=2560&quality=75&format=pjpg&auto=webp",
  },
  {
    title: "Highlights of India & Nepal",
    duration: "19 days",
    type: "Original",
    price: "$2,348",
    img: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt5c36077f38c1a34b/6337b386d3236c3efac9e373/hhsec_2019.gif?branch=prd&width=2560&quality=75&format=pjpg&auto=webp",
  },
  {
    title: "Premium India & Nepal",
    duration: "19 days",
    type: "Premium",
    price: "$5,364",
    img: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/bltbf5a15ff51426793/66da7c94c388336d3ae8d3ff/hhphc_2025.gif?branch=prd&width=1240&quality=75&format=pjpg&auto=webp",
  },
  {
    title: "Real Delhi to Kathmandu",
    duration: "13 days",
    type: "Basix",
    price: "$806",
    img: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt40cf54eff6a7587b/64cafb8146dd7abe49ab996d/HHYK_2024.gif?branch=prd&width=1240&quality=75&format=pjpg&auto=webp",
  },
];
