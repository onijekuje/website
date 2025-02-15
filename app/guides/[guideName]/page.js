import RestaurantCard from "@/components/guide/restaurantCard";
import Header from "@/components/header/Header";

export default function GuidePage({ params }) {
  const restaurants = [
    {
      name: "Abeke Rooftop ",
      address:
        "Soho Rooftop, 6a Ogbunike St, Lekki Phase 1, Lagos 105102, Lagos",
      googleMapsLink: "https://maps.app.goo.gl/KUicKRNYR9uhqtu87",
      budgetPerPerson: "35,000",
      waitTime: "average",
      openingHours: "12:00 PM - 11:00 PM",
      customerService: "excellent",
      instagramLink:
        "https://www.instagram.com/abeke_rooftop?igsh=dDRic29lam54a3Zm",
      ambience: "4/5",
      Food: "4/5",
      note: `Starting off the list, Abeke is a Yoruba themed rooftop spot with popular local meals 
      served in an upscale setting. You don’t have a wide variety of options across tribes, 
      but they do a pretty good job with their soups and also some nostalgic meals 
      like their take on ewa aganyin with toasted agege breadThey are pretty popular right now 
      and the space is decent but not large so on a really busy day, you might struggle to get a seat.
      It’s worth the trip regardless and they have paint and sips`,
      proTip: `The amala is nice but for the price, you might want a bit more protein in it. 
      Abeke’s drinks though- that is where shit is at. Try their ishekushe martini or adigun 
      and pair it with their seafood okro or asun penne pasta.`,
      proTipAuthor: "Mofe",
    },
    {
      name: "Ajoje",
      address: "Private",
      googleMapsLink: "NA",
      budgetPerPerson: "100,000",
      parking: "Average",
      waitTime: "Fast",
      openingHours: "N/A",
      customerService: "Excellent",
      ambience: "5/5",
      food: "5/5",
      instagramLink: "https://www.instagram.com/ajojelagos",
      note: `Ajoje- meaning to share is one of the most wholesome experiences you will find in Lagos.
       Their bread and butter is private dinings with your groups where Chef Kewa serves some of the most 
       innovative and delicious Afro-fusion meals you will find in the city.\n\n
       The portions are huge as well and Ajoje is more than just a dining experience, 
       it is an invitation into the heart of Nigerian hospitality with their wooden homely ambience.`,
      proTip: `It is expensive, but ideally, book this out with your group rather than going for the singles 
      - you get the full experience that way. It is difficult to get a singles ticket but yes, they do exist. Keep an eye out for that monthly.`,
      proTipAuthor: "Gideon",
    },
    {
      name: "Akerele Suya",
      address: "Akerele St, Surulere, Lagos 101241, Lagos",
      googleMapsLink: "https://maps.app.goo.gl/YFiWpyxBhiXsmYTw8",
      budgetPerPerson: "3,000",
      parking: "Average",
      waitTime: "Average",
      openingHours: "12pm to 11pm daily",
      customerService: "Average",
      ambience: "N/A",
      food: "5/5",
      instagramLink: "Na",
      tags: ["STREET FOOD", "SUYA"],
      note: "Our best suya spot in the city and one of two suya spots on this list. From their iconic sign to the large crowds, you see why this place is a fav in the city. On a slow day, their customer service is pretty good but when things get hectic, they enter their strict business mode and just chop away robotically which…isn’t really a bad thing to be fair.\nMid afternoon is a decent time to check them out if you are hoping to dodge the crowds.",
      proTip:
        "There’s a shop right next to the suya stand that sells drinks and beer. If you are not in a rush, you can pull out a couple of chairs with your group, kick back and relax. Fight the temptation to stand up and order more suya though.",
      proTipAuthor: "Dese",
    },

    {
      name: "Amala Yahoo",
      address:
        "Bosun Anifowoshe St, Olakunle Ajibade St, off Olakunle Rd, Ojota, Lagos",
      budgetPerPerson: "3,000",
      googleMapsLink: "https://maps.app.goo.gl/EBCoyyEn7wFqTYPb8",
      parking: "Average",
      waitTime: "Fast",
      openingHours: "8am to 7pm (closed Sundays)",
      customerService: "Average",
      ambience: "N/A",
      food: "5/5",
      instagramLink: "None",
      tags: ["STREET FOOD", "AMALA"],
      note: "A place so iconic it has its own bus stop (kinda) and with a name that’s a vibe. Amala Yahoo has been around for decades and even though we don’t eat it much (as evidenced by the lack of amala spots on the page) we have it on good record this is one of the goated amala places in Lagos.\n\nPrepare yourself for the shanty scenery though as you will eat in an uncompleted building with iffy customer service and that’s being generous. If you can get past that, there’s a banger here.",
      proTip:
        "Take-out is an easier way to go than eating there and don’t leave without trying their ogufe.",
      proTipAuthor: "Community",
    },

    {
      name: "Atije Experience",
      address: "Private",
      budgetPerPerson: "75,000",
      googleMapsLink: "NA",
      parking: "Good",
      waitTime: "Fast",
      openingHours: "N/A",
      customerService: "Excellent",
      ambience: "4/5",
      food: "5/5",
      instagramLink: "https://www.instagram.com/atijeexperience",
      note: ` Atije- meaning how we eat is a private five course culinary experience with wine and juice pairing. 
      This is just as intimate an experience as Ajoje albeit with smaller but just as tasty portions of good.
       The menu here is largely African themed with Chef Moyo and co drawing strong inspiration from their native roots.
       You also get pretty much unlimited drinks of your choice be it wine or juice and there’s a fun moment in the middle when you cleanse your palate- no spoilers. Typically, this holds twice a month, although sometimes they stretch it out to four, and tickets sell out pretty quickly so keep an eye for that.  
       `,
      proTip:
        "While better enjoyed with a partner or a group, it is a lot easier to go alone here. The smaller space encourages interaction and after having a glass or two of wine (wink wink), everyone loosens up.",
      proTipAuthor: "Mofe",
    },
    {
      name: "Basilico",
      address: "15 Musa Yar' Adua St, Victoria Island, Lagos 106104, Lagos",
      budgetPerPerson: "25,000",
      googleMapsLink: "https://maps.app.goo.gl/Hg8V32q9Sv2E2i2D9",
      parking: "Average",
      waitTime: "Fast",
      openingHours: "8am to 10pm daily",
      customerService: "Good",
      ambience: "3/5",
      food: "4/5",
      instagramLink: "None",
      note: "Basilico is one of those real OGs before IG. It’s Pizzeriah’s brother so we won’t bother including them on the list as you can easily get pizzas from them here as they are basically in the same compound (side note- their pizzas are pretty good). The building is a bit dated and it’s like more of an old house than anything.\n\nWhy we slid Basilico in? Their pasta prices are a couple of thousand under-priced compared to their peers and in terms of quality, they knock out most places in Lagos when it comes to anything Italian. They also have a pool you can dip in if you feel like.",
      proTip:
        "You can’t get it wrong with their arrabbiata, carbonara or alla marinara.",
      proTipAuthor: "Gideon",
    },
    {
      name: "B2B Lagos",
      address: "7b Karimu Kotun St, Victoria Island, Lagos 106104, Lagos",
      budgetPerPerson: "30,000",
      googleMapsLink: "https://maps.app.goo.gl/drfYeU5QXc1Y6PUv6",
      parking: "Good",
      waitTime: "Fast",
      openingHours: "24/7",
      customerService: "Good",
      ambience: "4/5",
      food: "3.5/5",
      instagramLink: "b2blagos",
      note: `Breakfast to Breakfast Lagos perfectly encapsulates what we mean by this list being a guide 
      rather than a top 50. Will it get into our top 50 restaurants in Lagos? Probably not but that’s not taking anything away from what they offer. B2B for us is the best 
    (and only?) 24/7 diner in Lagos and that in itself is a huge win.
    When we say 24/7, we definitely mean it. You can walk in literally anytime of the day and be attended to. 
    For the late night crawlers, that’s golden. Their wait time is also super impressive- whatever time they tell you the food will come out, it will come out sooner. It also holds a special place in our hearts for being the place we shot our favourite Onijekuje video.
    `,
      proTip:
        " My go-to here is their croissant sandwich and I pair it with their strawberry, banana and mango smoothie- always a bussin’ combo. Their sandwiches are generally fair but their jollof is so constantly amazingly bad that you actually wonder if it’s the same person making the meals.",
      proTipAuthor: "Dese",
    },
    {
      name: "Beezus Kitchen’s K-BBQ Night",
      address: "Private location",
      budgetPerPerson: "85,000",
      googleMapsLink: "None",
      parking: "Good",
      waitTime: "Fast",
      openingHours: "N/A",
      customerService: "Excellent",
      ambience: "4.5/5",
      food: "5/5",
      instagramLink: "beezuskitchen",
      note: `Another private dining experience, you might say? Absolutely, we are suckers for these in Lagos because we know how hard it is to pull them off and we are always in awe of the minds behind these. If you are a lover of Korean food, this is one of the best places in Lagos to be. 
          You start off with a cocktail hour with some interesting options like their zobotini before running through seven courses of meat ranging from ribeye to pork ribs, brisket and more. Oh, by the way, you cook your food yourself although you are well guided every step of the way.
        Chef B also has this cute soju o'clock where at random, everyone has to take a soju shot. All in all, it’s a wonderful bonding experience and they typically hold it once a month. Again, as with other private dining experiences on this list, tickets get sold out fast so keep an eye out. 
      `,
      proTip:
        "Cozy up to one of the K-BBQ Night veterans- they are always there. You can mess up your meat pretty quickly as Chef B can’t be everywhere at once. These Beezus egbon adugbos will help you out before shit hits the fan.",
      proTipAuthor: "Uju",
    },
    {
      name: "Buttermilk",
      address: "Plot 124 T. F. Kuboye Rd, Oniru, Lagos 106104, Lagos",
      budgetPerPerson: "35,000",
      googleMapsLink: "https://maps.app.goo.gl/XXycfBCm2ro438HV8",
      parking: "Average",
      waitTime: "Average",
      openingHours: "9am to 9pm daily",
      customerService: "Excellent",
      ambience: "4/5",
      food: "4/5",
      instagramLink: "buttermilk.ng",
      note: `Buttermilk last year underwent a renovation that we loved- changing from the Barbie pink to a more minimalist mature theme. They do have some weak spots like their pasta but we feel they really hit the mark on their breakfast and brunch options.
      For us, they have the best pancakes we have ever had in Lagos and service is always professional and prompt. Added bonus is they have a Tacos Tuesday package where you get a nice discount on cocktails and tacos. Also, their burgers aren’t half bad either`,
      proTip:
        "Their cinnamon swirl pancakes are a 10/10- an absolute banger. This alone should be enough to bring you here. The triple chocolate waffle milkshake pairs very well with it for a filling meal.",
      proTipAuthor: "Gideon",
    },
    {
      name: "Canvas Concept Space",
      address:
        "36 Rasheed Alaba Williams Street, Lekki Phase 1, Lekki 105102, Lagos",
      budgetPerPerson: "50,000",
      googleMapsLink: "https://maps.app.goo.gl/dtxDatza1S41Nxia6",
      parking: "Average",
      waitTime: "Average",
      openingHours: "Variable (call to reserve)",
      customerService: "Excellent",
      ambience: "4/5",
      food: "5/5",
      instagramLink: "canvas.cs",
      note: `Canvas Concept Space is a contemporary dining space focused on celebrating West African cuisine. They are a bit of a weird one with varied opening times and different menus- one for cocktail drinking, one for lunch and another for brunch. Also, you can walk in if you want something to have with their cocktails but you have to reserve for full on dining. Their quirkiness aside, Canvas is currently the best place to get drinks in Lagos.
      Their space is also pretty cozy and the food excellent. Just like Elysium (spoiler alert), they pride themselves in sourcing their ingredients locally from around the country. You will also find events being hosted here regularly and they cover private dining bookings as well.
      `,
      proTip:
        "Probably give them a call or send a DM on IG before going. They are pretty fluid with their rules. Their guinea fowl focaccia sandwich - divine.",
      proTipAuthor: "Mofe",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="max-w-2xl mx-auto p-4 space-y-8">
        <div className="flex flex-col items-center justify-between p-4">
          <h1 className="text-black text-3xl font-bold mb-5">
            A Johnny Just Come guide to eating out in Lagos
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed mb-10">
            If you are stuck with the pain in the arse that is finding a place
            to go eat in Lagos with time ticking away relentlessly, you are in
            the right place. The Onijekuje Team has come together to give you a
            Johnny Just Come guide to eating out in Lagos and this is also so
            you all would let our DMs rest. Here are 50 experiences we feel
            everyone in the city should try out. These are not necessarily the
            50 best places in Lagos- just varied experiences that every Lagosian
            or visitor should tick off before leaving. We also left some cute
            pro tips for you because when it comes to eating out in Lagos, if
            Onijekuje no dey for you, who go dey for you? Enjoy
          </p>
          {restaurants.map((restaurant, index) => (
            <RestaurantCard
              key={index}
              name={restaurant.name}
              address={restaurant.address}
              googlemapsLink={restaurant.googleMapsLink}
              budgetPerPerson={restaurant.budgetPerPerson}
              waitTime={restaurant.waitTime}
              customerService={restaurant.customerService}
              openingHours={restaurant.openingHours}
              ambience={restaurant.ambience}
              food={restaurant.Food}
              note={restaurant.note}
              proTip={restaurant.proTip}
              proTipAuthor={restaurant.proTipAuthor}
              instagramLink={restaurant.instagramLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
