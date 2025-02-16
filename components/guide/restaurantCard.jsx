import React from "react";
import {
  Bookmark,
  MoreHorizontal,
  MapPin,
  Timer,
  Coins,
  HandPlatter,
  Banknote,
  CookingPot,
  Hourglass,
  AudioLines,
  Speech,
  Instagram,
} from "lucide-react";

const RestaurantCard = ({
  name,
  address,
  googlemapsLink,
  budgetPerPerson,
  waitTime,
  customerService,
  openingHours,
  ambience,
  food,
  note,
  proTip,
  proTipAuthor,
  instagramLink,
}) => {
  return (
    <div className="border-b border-gray-200 pb-6 mt-4">
      {/* Title & Actions */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-black">{name}</h2>
      </div>

      {/* Location */}
      <div className="flex items-center text-gray-600 text-sm mt-1">
        <MapPin className="w-4 h-4 mr-1" />
        <span>
          <a
            className={`${
              googlemapsLink === "NA"
                ? ""
                : "cursor-pointer underline  text-blue-400"
            }`}
            href={googlemapsLink === "NA" ? "#" : googlemapsLink}
          >
            {address}
          </a>
        </span>
      </div>

      {/* Pricing & Cuisine */}
      <div className="flex items-center text-gray-500 text-sm mt-2">
        <Banknote className="w-4 h-4 mr-1" />
        {/* <span>₦{budgetPerPerson} per person</span> */}
        <span>{budgetPerPerson} per person</span>
      </div>

      <div className="flex flex-wrap items-center text-gray-500 text-sm mt-2 gap-2">
        <div className="flex items-center">
          <Hourglass className="w-4 h-4 mr-1" />
          <span>wait time: {waitTime}</span>
        </div>
        <div className="flex items-center">
          <HandPlatter className="w-4 h-4 mr-1" />
          <span>customer service: {customerService}</span>
        </div>
      </div>
      <div className="flex flex-wrap items-center text-gray-500 text-sm mt-2 gap-2">
        <div className="flex items-center">
          <Timer className="w-4 h-4 mr-1" />
          <span>opening hours: {openingHours}</span>
        </div>
        <div className="flex items-center">
          <Instagram className="w-4 h-4 mr-1" />
          {instagramLink === "NA" ? (
            "N/A"
          ) : (
            <a
              href={instagramLink}
              className="text-purple-500 underline cursor-pointer"
            >
              Instagram
            </a>
          )}
        </div>
      </div>

      <div className="flex items-center text-gray-500 text-sm mt-2 space-x-4">
        <div className="flex items-center">
          <CookingPot className="w-4 h-4 mr-1" />
          <span>Food {food}</span>
        </div>
        <div className="flex items-center">
          <AudioLines className="w-4 h-4 mr-1" />
          <span>Ambience: {ambience}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700  mt-3">{note}</p>

      <p className="text-gray-700 text-sm mt-3">
        <span>
          "{proTip}" - {proTipAuthor}'s pro tip 🤫
        </span>
      </p>
    </div>
  );
};

export default RestaurantCard;
