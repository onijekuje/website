import RestaurantCard from "@/components/guide/restaurantCard";
import Header from "@/components/header/Header";
import moment from "moment";

export default function GuidePage({ params }) {
  const restaurants = [
    {
      name: "Abeke Rooftop ",
      address:
        "Soho Rooftop, 6a Ogbunike St, Lekki Phase 1, Lagos 105102, Lagos",
      googleMapsLink: "https://maps.app.goo.gl/KUicKRNYR9uhqtu87",
      budgetPerPerson: "40,000",
      waitTime: "average",
      openingHours: "12:00 PM - 11:00 PM",
      parking: "Limited",
      customerService: "excellent",
      instagramLink:
        "https://www.instagram.com/abeke_rooftop?igsh=dDRic29lam54a3Zm",
      ambience: "4/5",
      food: "4/5",
      note: `Starting off the list, Abeke is a Yoruba themed rooftop spot that has remained one of our go-to spots for local food in an upscale setting. You might not have as wide a variety of options across tribes as you would find at other spots, but Abeke does a pretty good job with their soups and also some nostalgic meals like their take on ewa aganyin with toasted agege bread. They also have a Nigerian brunch menu every weekend and while the space is decent, on a really busy day, you might struggle to get a seat.`,
      proTip: `Try their ishekushe martini or adigun and pair it with their seafood okro or asun penne pasta. 
      If you want something a bit more niche and cultural, their abule rice with smoked fish is a great pick`,
      proTipAuthor: "Gideon",
    },
    {
      name: "Ajoje",
      address: "Private",
      googleMapsLink: "NA",
      budgetPerPerson: "100,000",
      parking: "Average",
      waitTime: "Fast",
      openingHours: "Reservations only",
      customerService: "Excellent",
      ambience: "5/5",
      food: "5/5",
      instagramLink: "https://www.instagram.com/ajojelagos",
      note: `Ajoje- meaning to share is one of the most wholesome experiences you will find in Lagos. Their bread and butter is private dinings with your groups where Chef Kewa’s ever changing menu has some of the most innovative and delicious Afro-fusion meals you will find in the city. 
        The portions are huge as well and Ajoje is more than just a dining experience, it is an invitation into the heart of Nigerian hospitality with their wooden homely ambience. For those who do not want to go private, you can choose either their social brunch or dinner.
      `,
      proTip: `It is expensive, but ideally, book this out with your group rather than going for the singles 
      - you get the full experience that way. If you do want a singles ticket, keep an eye out for that monthly or join their waiting list. Do note 50% payment is required upon booking confirmation`,
      proTipAuthor: "Mofe",
    },

    {
      name: "Akerele Suya",
      address: "Akerele St, Surulere, Lagos 101241, Lagos",
      googleMapsLink: "https://maps.app.goo.gl/YFiWpyxBhiXsmYTw8",
      budgetPerPerson: "4,000",
      parking: "Average",
      waitTime: "Average",
      openingHours: "12pm to 11pm daily",
      customerService: "Average",
      ambience: "N/A",
      food: "5/5",
      instagramLink: "NA",
      note: "Our best suya spot in the city and one of two suya spots on this list. From their iconic sign to the large crowds, you see why this place is a fav in the city. On a slow day, their customer service is pretty good but when things get hectic, they enter their strict business mode and just chop away robotically which…isn’t really a bad thing to be fair.\nMid afternoon is a decent time to check them out if you are hoping to dodge the crowds.",
      proTip:
        "There’s a shop right next to the suya stand that sells drinks and beer. If you are not in a rush, you can pull out a couple of chairs with your group, kick back and relax. Fight the temptation to stand up and order more suya though.",
      proTipAuthor: "Uju",
    },

    {
      name: "Amala Yahoo",
      address:
        "Bosun Anifowoshe St, Olakunle Ajibade St, off Olakunle Rd, Ojota, Lagos",
      budgetPerPerson: "3,000",
      googleMapsLink: "https://maps.app.goo.gl/EBCoyyEn7wFqTYPb8",
      parking: "Limited",
      waitTime: "Fast",
      openingHours: "8am to 7pm (closed Sundays)",
      customerService: "Average",
      ambience: "N/A (It’s actually a zero but it’s an amala spot so hey)",
      food: "4.5/5",
      instagramLink: "NA",
      note: "A place so iconic it has its own bus stop (kinda) and with a name that’s a vibe. Amala Yahoo has been around for decades and even though we don’t eat it much (as evidenced by the lack of amala spots on the page) we have it on good record this is one of the goated amala places in Lagos.\n\nPrepare yourself for the shanty scenery though as you will eat in an uncompleted building with iffy customer service and that’s being generous. If you can get past that, there’s a banger here.",
      proTip:
        "Take-out is an easier way to go than eating there and don’t leave without trying their ogufe.",
      proTipAuthor: "Femi",
    },

    {
      name: "Atije Experience",
      address: "14F Obi Achebe Drive, Edgewater Estate, Lagos",
      budgetPerPerson: "85,000",
      googleMapsLink: "https://maps.app.goo.gl/dBZiLokMgHbuRmHN7",
      parking: "Good",
      waitTime: "Fast",
      openingHours: "Reservations only",
      customerService: "Excellent",
      ambience: "4/5",
      food: "5/5",
      instagramLink: "https://www.instagram.com/atijeexperience",
      note: ` Atije- meaning how we eat is a private five course culinary experience with wine and juice pairing. 
      This is just as intimate an experience as Ajoje albeit with smaller but just as tasty portions of good.
       The menu here is largely African themed with Chef Moyo and co drawing strong inspiration from their native roots.
       You also get pretty much unlimited drinks of your choice be it wine or juice and there’s a fun moment in the middle when you cleanse your palate- no spoilers. They now have four slots every month but tickets go out pretty fast.`,
      proTip:
        "While better enjoyed with a partner or a group, it is a lot easier to go alone here. The smaller space encourages interaction and after having a glass or two of wine (wink wink), everyone loosens up. Ajoje’s dates for December (Anfani) are the 13th and 14th.",
      proTipAuthor: "Dese",
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
      instagramLink: "NA",
      note: "Basilico is one of those real OGs before IG. It’s Pizzeriah’s brother so we won’t bother including them on the list as you can easily get pizzas from them here as they are basically in the same compound (side note- their pizzas are pretty good). The building is a bit dated and it’s like more of an old house than anything.\n\nWhy we slid Basilico in? Their pasta prices are a couple of thousand under-priced compared to their peers and in terms of quality, they knock out most places in Lagos when it comes to anything Italian. They also have a pool you can dip in if you feel like.",
      proTip:
        "You can’t get it wrong with their arrabbiata, carbonara or alla marinara and if you even want to go skinny dipping, there’s a pool.",
      proTipAuthor: "Femi",
    },
    {
      name: "B2B Lagos",
      address: "7b Karimu Kotun St, Victoria Island, Lagos 106104, Lagos",
      budgetPerPerson: "35,000",
      googleMapsLink: "https://maps.app.goo.gl/drfYeU5QXc1Y6PUv6",
      parking: "Average",
      waitTime: "Fast",
      openingHours: "24/7",
      customerService: "Good",
      ambience: "4/5",
      food: "3.5/5",
      instagramLink: "https://www.instagram.com/b2blagos?igsh=cHRqMzAyeW9jdnM=",
      note: `Breakfast to Breakfast Lagos perfectly encapsulates what we mean by this list being a guide 
      rather than a top 50. Will it get into our top 50 restaurants in Lagos? Probably not but that’s not taking anything away from what they offer. B2B for us is the best 
    (and only?) 24/7 diner in Lagos and that in itself is a huge win.
    When we say 24/7, we definitely mean it. You can walk in literally anytime of the day and be attended to. 
    For the late night crawlers, that’s golden. Their wait time is also super impressive- whatever time they tell you the food will come out, it will come out sooner. It also holds a special place in our hearts for being the place we shot our favourite Onijekuje video.
    `,
      proTip:
        "My go-to here still remains their croissant sandwich paired with their strawberry, banana and mango smoothie- always a bussin’ combo. Their sandwiches are generally fair but their jollof is so constantly amazingly bad that you actually wonder if it’s the same person making the meals ",
      proTipAuthor: "Uju",
    },
    {
      name: "Beezus Kitchen’s K-BBQ Night",
      address: "Private location",
      budgetPerPerson: "95,000",
      googleMapsLink: "NA",
      parking: "Good",
      waitTime: "Fast",
      openingHours: "Reservations only",
      customerService: "Excellent",
      ambience: "4/5",
      food: "5/5",
      instagramLink:
        "https://www.instagram.com/beezuskitchen?igsh=MTlkN2g4dXQ4bG95NA==",
      note: `Another private dining experience, you might say? Absolutely, we are suckers for these in Lagos because we know how hard it is to pull them off and we are always in awe of the minds behind these. If you are a lover of Korean food, this is one of the best places in Lagos to be. 
          You start off with a cocktail hour with some interesting options like their zobotini before running through seven courses of meat ranging from ribeye to pork ribs, brisket and more. Oh, by the way, you cook your food yourself although you are well guided every step of the way.
        Chef B also has this cute soju o'clock where at random, everyone has to take a soju shot. All in all, it’s a wonderful bonding experience and they typically hold it once a month. Again, as with other private dining experiences on this list, tickets get sold out fast so keep an eye out. 
      `,
      proTip:
        "Cozy up to one of the K-BBQ Night veterans- they are always there. You can mess up your meat pretty quickly as Chef B can’t be everywhere at once. You also get a bit of a discount when you book for a group of four or more.",
      proTipAuthor: "Dese",
    },
    {
      name: "Buttermilk",
      address: "Plot 124 T. F. Kuboye Rd, Oniru, Lagos 106104, Lagos",
      budgetPerPerson: "35,000",
      googleMapsLink: "https://maps.app.goo.gl/XXycfBCm2ro438HV8",
      parking: "Limited",
      waitTime: "Average",
      openingHours: "9am to 9pm daily",
      customerService: "Excellent",
      ambience: "4/5",
      food: "4/5",
      instagramLink:
        "https://www.instagram.com/buttermilk.ng?igsh=MW96YTVxMmM0eWVmaA==",
      note: `Buttermilk last year underwent a renovation that we loved- changing from the Barbie pink to a more minimalist mature theme. They do have some weak spots like their pasta but we feel they really hit the mark on their breakfast and brunch options.
      For us, they still have the best pancakes we have ever had in Lagos and service is always professional and prompt. Added bonus is they have a Tacos Tuesday package where you get a nice discount on cocktails and tacos. Also, their burgers aren’t half bad either`,
      proTip:
        "Their cinnamon swirl pancakes are a 10/10- an absolute banger. This alone should be enough to bring you here. The triple chocolate waffle milkshake pairs very well with it for a filling meal.",
      proTipAuthor: "Gideon",
    },
    {
      name: "Chinatown Restaurant",
      address:
        "Mega Plaza, 14B Idowu Martins St, Victoria Island, Lagos 106104, Lagos",
      budgetPerPerson: "15,000",
      googleMapsLink: "https://maps.app.goo.gl/idLb9Npe559h2m998",
      parking: "Good",
      waitTime: "Average",
      openingHours: "10:30am to 10:30pm",
      customerService: "Good",
      ambience: "3/5",
      food: "5/5",
      instagramLink: "NA",
      note: `The fact they do not have a properly functional Instagram or Tik Tok already tells you these are old school folks. Chinatown has been around for decades and they have been feeding souls since thy kingdom come. 
    There’s not much here in terms of an ambience and it’s a small spot that gets really tight when there’s a large crowd…which happens a bit too often for our liking. That said, the quality of the food combined with the size of the portions makes for a scintillating combo.
      `,
      proTip:
        "Their chicken in sweet and sour sauce paired with their special fried rice is fricking delicious. The chicken in oyster sauce is also quietly as underrated as their dumplings.",
      proTipAuthor: "Mofe",
    },
    {
      name: "Dani Lagos",
      address:
        "House 1 Plot 1501 Itirin Court I, Off Bishop Aboyade Cole St, Eti-Osa, Victoria Island, Lagos",
      budgetPerPerson: "100,000",
      googleMapsLink: "https://maps.app.goo.gl/PuohnBYZXrKR6tqw8",
      parking: "Excellent",
      waitTime: "Fast",
      openingHours: "3pm to 11pm daily",
      customerService: "Excellent",
      ambience: "4.5/5",
      food: "5/5",
      instagramLink:
        "https://www.instagram.com/dani.restaurant?igsh=MXAweHJkOXo5bWhoOA==",
      note: `Located on the fifth floor of one of the most pricey hotels in Lagos ( The Delborough), Dani ticks off most of the boxes you will expect to be delivered from a premium spot. Parking is not a problem as the valet takes care of that at no cost and considering how many spots in Lagos have parking issues, well done to them for that.
      Whether it is the DeGrenne cutlery or the crisp and premium marbling used, Dani just does a lot right when it comes to high end dining. Their menu was curated by a three star Michelin chef and the meals are largely excellent. They also have a premium Jazz night every Friday. The dress code here is strictly corporate though so keep that in mind.
      `,
      proTip:
        "Their risotto is head and shoulders the best we have had in Lagos and their short ribs and black cod fish are favs. If you would prefer an all day cafe, their sister spot called The Piano is on the ground floor and they are just as good.",
      proTipAuthor: "Uju",
    },
    {
      name: "Deba’s Creamery",
      address: "7b Wole Ariyo St, off Admiralty Way, Lekki Phase 1, Lagos",
      budgetPerPerson: "7,000",
      googleMapsLink: "https://maps.app.goo.gl/RMrPnfmjrEv9bjwLA",
      parking: "Average",
      waitTime: "Fast",
      openingHours: "9am to 9pm (open 11am on Sunday)",
      customerService: "Good",
      ambience: "3/5",
      food: "4/5",
      instagramLink:
        "https://www.instagram.com/debascreamery?igsh=eDQyamY3NGFkNnNw",
      note: `So we had space for only one ice cream slot and while we probably felt that pound for pound, Hans and Rene have the best ice cream in Lagos, Deba’s aren’t too far behind and give you a wider variety. Also, Hans and Rene have some very weird picture policy, which for an ice cream spot…like really, what are we doing here.
      From popsicles to banana bread to waffles to milkshakes, Deba’s hit on most of their items and they also experiment a lot which we admire. They also have this interesting cake in a can concept that’s a lot more hype than actual quality but hey, can’t fault them for trying something different.
      `,
      proTip:
        "Combine their warm and tasty banana bread with some scoops of ice cream. If you are unsure of what to order, ask Yinka for recommendations.",
      proTipAuthor: "Femi",
    },
    {
      name: "Dough Pizza Bar",
      address: "17B Musa Yar' Adua St, Victoria Island, Lagos 106104, Lagos",
      budgetPerPerson: "50,000",
      googleMapsLink: "https://maps.app.goo.gl/Ys5oQ4Sc2LoWZac1A",
      parking: "Bad",
      waitTime: "Fast",
      openingHours: "5pm to 10pm daily (strictly by reservation)",
      customerService: "Good",
      ambience: "4/5",
      food: "5/5",
      instagramLink:
        "https://www.instagram.com/doughpizzabar?igsh=MWdkNDVuOHNxYnExaQ==",
      note: `Over a year in and Dough Pizza, with their cozy and dimly lit intimate space, remains our best pizza spot in the city and maybe even of all time. For the older gen, it’s run by the kids of the famous Double Four pizza spot back in the day so you already know you are genetically covered.
Their hot salami is the stuff of legends and constantly their most sold out item- for us, it is the best pizza in Lagos and you must not leave without trying it. The parking here unfortunately is a bit of a problem due to ‘street police’ charging for a spot but to end on a positive note, they’ve expanded their menu a bit with some wine and cocktails.
`,
      proTip:
        "If you prefer your pizza halal, it might be a bit of a struggle here to get the best stuff. You can try out their nduja and no matter what you get, pair it with their frose. Also, if he is around, ask for Ali. He will finish off the pizza making process at your table and you can get those sweet shots for the gram.",
      proTipAuthor: "Dese",
    },
    {
      name: "Dulce Cafe and Bakery",
      address:
        "Behind Slashpoint supermarket, 15 Glover Rd, Ikoyi, Lagos 106104, Lagos",
      budgetPerPerson: "30,000",
      googleMapsLink: "https://maps.app.goo.gl/7YSRUu5wKEwBs2EQ7",
      parking: "Good",
      waitTime: "Fast",
      openingHours: "9am to 9pm (10am to 6pm on Mondays)",
      customerService: "Excellent",
      ambience: "4/5",
      food: "4.5/5",
      instagramLink:
        "https://www.instagram.com/dani.restaurant?igsh=MXAweHJkOXo5bWhoOA==",
      note: `Dulce Cafe has been one of our favs since Kajal (the owner) had a mom and pop shop selling pastries. They have now become a full on restaurant and we love the open space ambience here. It feels very free and loose, like a place you can just hang out with a date with no pressure. 
      Their pastries are up there with any in Lagos and their coffee options are also very solid. We feel the further you stretch away from their core (e.g. ordering some pasta), it starts getting a bit weaker. That said, they still get the majority of their dishes absolutely right. 
      Dulce have also expanded their previously cramped up indoor space making this a great spot for groups`,
      proTip:
        "Don’t leave without getting the cinnamon rolls or chicken pesto sandwich. They also have an unlimited cocktail deal Wed–Fri (5pm–8pm).",
      proTipAuthor: "Gideon",
    },
    {
      name: "Elysium Beach Club",
      address:
        "Elysium jetty End of, Foreshore Rd, Victoria Island, Lagos 106104, Lagos",
      budgetPerPerson: "100,000",
      googleMapsLink: "https://maps.app.goo.gl/BTStvjwPJUTtWEXY7",
      parking: "Excellent",
      waitTime: "Average",
      openingHours: "1pm to 1am (closed Mon & Tue, strictly by reservation)",
      customerService: "Excellent",
      ambience: "4/5",
      food: "5/5",
      instagramLink:
        "https://www.instagram.com/elysium_beach_club?igsh=MWFwY2RmeDY3eGNjbg==",
      note: `So we weren’t sure whether or not to include this as it is not a typical restaurant per se. However, the food being sold inside Elysium Beach Club remains a low-key banger somehow. We can’t really recommend anything because the menu changes every couple of weeks but we can assure you that when it comes to taste, Chef Kemi’s got you.
      Elysium is currently a members only club and it will set you back a cool 2,000 dollars if that interests you. You can’t really walk in so it’s much preferable if you reserve to save yourself the hassle.
      `,
      proTip:
        "The view and vibe at Elysium Beach Club is a lot better at sunset so you are going to be in better stead going late and if it’s still on the menu, try their Elysium Spic. They also have a bunch of pop ups this December.",
      proTipAuthor: "Mofe",
    },
    {
      name: "Fired and Iced",
      address: "Plot 28, 77 Admiralty Way, Lekki Phase I, Lagos",
      budgetPerPerson: "40,000",
      googleMapsLink: "https://maps.app.goo.gl/6mtB2xhLivHZipVf9",
      parking: "Average",
      waitTime: "Average",
      openingHours: "6pm to 1am (Wednesday to Sunday) ",
      customerService: "Excellent",
      ambience: "4/5",
      food: "4/5",
      instagramLink:
        "https://www.instagram.com/firedandicedlagos?igsh=ZG42bDYyZzM0cjJn",
      note: `Run by one of the best chefs in Lagos, it’s no surprise Imoteda’s Fired and Iced makes the list. It’s an upscale grills joint with a cozy indoor and a vibrant outdoor setting, most especially at night. You can check out their live band sessions on Friday or karaoke on Wednesday night.
      True to the name, every dish on the menu is literally fired up with a grill and every drink is iced out more than Game wearing a Jesus piece. It’s always been a big theme for Imoteda owned spots to push meals that can be shared by large groups and Fired and Iced is no different.  They also have live bands every Friday and karaoke
      `,
      proTip:
        "We definitely recommend the pork ribs and Imoteda’s bowl with mashed potatoes and if you get the Lisa cocktail, it pairs perfectly with the chef’s signature dish.",
      proTipAuthor: "Gideon",
    },
    {
      name: "Firewood Jollof",
      address: "10 Admiralty Way, Lekki Phase 1, Lagos 105102, Lagos",
      budgetPerPerson: "5,000",
      googleMapsLink: "https://maps.app.goo.gl/xLiMEn6mYS86vX3SA",
      parking: "Limited",
      waitTime: "Average",
      openingHours: "9am to 10pm (10am to 7pm on Sundays)",
      customerService: "Average",
      ambience: "2.5/5",
      food: "5/5",
      instagramLink:
        "https://www.instagram.com/firewoodricenigeria?igsh=NXR0bGppOXAyajdl",
      note: `True to their name, FJ are a top tier spot selling proper smokey jollof. You will struggle to find any better in the city although they do have their fair share of issues. The ambience is given an average score but that’s no fault of theirs. Their goal is to give you a setting that’s decent enough to just guzzle down the jollof.
        It was a close call between them and Kaza rice and while Kaza offer a wider variety we think FJ are easily the kings of jollof in Lagos. Their customer service though can certainly go up a notch; actually a couple of notches. That said, it could just be a case of knowing how good their shit is and saying we don’t care, you will love us either way and we kind of respect that.`,
      proTip:
        "If possible, come to their store and eat there or have it as take out. Ordering through delivery apps is playing a serious game of jollof roulette with your food whether it’s extremely slow delivery or a missing or wrong item.",
      proTipAuthor: "Femi",
    },
    {
      name: "Forno Lagos",
      address: "9 Otunba Adedoyin Ogungbe Crescent, Lekki Phase 1",
      budgetPerPerson: "30,000",
      googleMapsLink: "https://maps.app.goo.gl/NUZrCZeFXj1fLbDDA",
      parking: "Excellent",
      waitTime: "Fast",
      openingHours: "12pm to 10pm (close 12am on weekends) ",
      customerService: "Excellent",
      ambience: "4/5",
      food: "4.5/5",
      instagramLink:
        "https://www.instagram.com/forno.ng?igsh=MTh0amlkN3NoYWt5bQ==",
      note: `Our second favourite pizza spot in town, you already know any place run by The Smith Sisters is going to deliver, most especially with the cocktails. Forno is a gorgeous spot that might as well be from a scene in the Godfather with the greenery complementing the minimalist theme. 
    They are also one of the few spots on here with valet parking so you don’t have to rack your brain about that as you head down. To be honest, given the decent pricing, Forno is a quiet sweet option for a first date with no pressure on either party and if you see more red flags than a Ruger song, your pocket doesn’t take a huge hit
    `,
      proTip:
        "Their hot honey diavola is just a smidge below the hot salami at Dough Bar and their spiked drinks get you just right on the edge without tilting you over so a great pick for those who just want a buzz. But the real gems are their wood fired sandwiches.",
      proTipAuthor: "Dese",
    },
    {
      name: "Griddle and Roast",
      address:
        "9b Prince Adelowo Adedeji St, off Admiralty Way, Lekki Phase 1, Lagos 100001, Lagos",
      budgetPerPerson: "30,000",
      googleMapsLink: "https://maps.app.goo.gl/DRXdy3oSubtZGUhE7",
      parking: "Good",
      waitTime: "Average",
      openingHours: "12pm to 10pm daily (closed Mondays)",
      customerService: "Good",
      ambience: "3/5",
      food: "4/5",
      instagramLink:
        "https://www.instagram.com/griddleandroast?igsh=MW4yZHEwazIwdHhkOQ==",
      note: `Despite being smack dab in the middle here, Griddle and Roast was actually one of the later entries as we felt we hadn’t catered enough to the grills side. There’s not much in terms of an ambience here- it’s really just a small spot with a couple of couches that’s semi-closed from the elements.
      Griddle and Roast though have some absolute lip-smacking bbq options and we are not sure there are too many places that do it as well as them on the island. You won’t usually see a large crowd here so the few seats aren’t a huge problem.
      `,
      proTip:
        "Try to get their farmhouse platter- if anything for the mini burgers it comes with- absolutely delightful. Their grilled catfish is also massive and very well seasoned.",
      proTipAuthor: "Uju",
    },
    {
      name: "HSE Gourmet",
      address: "25 Babatope Bejide Cres, Lekki Phase 1, Lagos 106104, Lagos",
      budgetPerPerson: "30,000",
      googleMapsLink: "https://maps.app.goo.gl/SAJiR5sVyVqvGQDq7",
      parking: "Limited",
      waitTime: "Average",
      openingHours: "10am to 10pm daily",
      customerService: "Good",
      ambience: "3.5/5",
      food: "4.5/5",
      instagramLink:
        "https://www.instagram.com/hsegourmet?igsh=MXUxOGdlb2o2NGJvZg==",
      note: `We dare say that you haven’t started exploring the Lagos food scene if you haven’t been to HSE Gourmet. Offering gourmet style comfort food, HSE is another chef-owned spot run by Chef Nkesi who is one of the best in the game in Lagos. Their cocktails are priced similarly to Grey Matter, seemingly a few thousand cheaper than typical.
      The food is made with love and you can taste the effort in the detail Chef Nkesi has put in. On Mondays, between 10am and 4pm, they also offer takeout only options. Also, on Thursdays, they have a pasta and sangria night between 4pm and 10pm where all pasta goes for 10,000 and a pitcher of sangria goes for 6,500
      `,
      proTip:
        "Not too many meals miss the spot here if any. If we could pick a couple of the top hits, their salmon and lasagna will definitely be up there. They also have a meal of the month which tends to be something different but you have to specifically request for that.",
      proTipAuthor: "Mofe",
    },

    {
      name: "Ile Mimu",
      address: "Private",
      budgetPerPerson: "Private",
      googleMapsLink: "NA",
      parking: "Good",
      waitTime: "Fast",
      openingHours: "NA",
      customerService: "Good",
      ambience: "4/5",
      food: "4/5",
      instagramLink:
        "https://www.instagram.com/ile_mimu?igsh=MWtncG9nMXZhc2EzcA==",
      note: `Ile Mimu might just be the strangest spot on the list. Meaning house of Mimu, it is a secret Yoruba themed rooftop bar with a killer view. The decor of this place is like a shrine - something straight out of Death and the King’s Horseman stage play with pieces inspired by the founder’s travels.
      Here’s the catch - not only is it reservation only, reserving does not necessarily get you in. It’s a quasi social club where they kind of deem you worthy or not or you get in by being invited by someone already in. If you do get in though, the traditional themed drinks like their ogogoro are amazing and the food ain’t half bad either.
  `,
      proTip:
        " In keeping with the theme of this spot, the pro-tip shall stay silent to complete the strangeness. We shall allow you to explore this adventure all by yourself…if you get in. Just remember whatever happens in Mimu stays in Mimu.",
      proTipAuthor: "Dese",
    },

    {
      name: "Ile Iyan",
      address: "4a Wole Olateju Crescent, Lekki Phase I",
      budgetPerPerson: "20,000",
      googleMapsLink: "https://maps.app.goo.gl/cx3pnbFoquNsDhtGA",
      parking: "Average",
      waitTime: "Slow",
      openingHours: "10am to 9pm daily (open 12pm Sundays)",
      customerService: "Good",
      ambience: "3/5",
      food: "4/5",
      instagramLink:
        "https://www.instagram.com/ileiyan_ng?igsh=MWI2NzQ1Mzl0MDFqYw==",
      note: ` The true home of pounded yam in Lagos, Ile Iyan is one of the best spots to get authentic Yoruba food and experience in the city. From the waiters being decked out in cultural attire to their dancers, pyrotechnics and horses on their famous Faaji Sundays, they deliver in every way.
      With their newly opened larger space, the claustrophobes no longer have to clench their buttholes when they make their way down although their wait time still remains infuriating on occasion. They do still have their older location in Lekki open if anyone wants to walk down.
      `,
      proTip:
        "Their Faaji Sunday is nice and all but if the razzmatazz doesn’t appeal to you, it is likely you will get better service on a weekday. Ile Iyan quietly is also one of the few places in Lagos where you can get top tier black soup. Their Olowo Eko Combo with egusi/efo riro is  pricey at 18,000 but it is stacked with protein and good value for money.",
      proTipAuthor: "Femi",
    },
    {
      name: "Ite",
      address: "8 The Providence St, Lekki Phase 1,Lekki 106104, Lagos",
      budgetPerPerson: "30,000",
      googleMapsLink: "https://maps.app.goo.gl/rDviyKJijQtn9uXy6",
      parking: "Good",
      waitTime: "Slow",
      openingHours: "11am to 10pm daily",
      customerService: "Good",
      ambience: "4/5",
      food: "4/5",
      instagramLink: "https://www.instagram.com/my.ite?igsh=ZTg1MnEybnh4cHRs",
      note: `If you can get beyond their laughably long and ridiculous wait time, My Ite is one of the best places to get local food in Lagos with a nice variety. The ambience here gives native vibes and with the artworks all around you, it feels very contemporary. Their portion sizes like most of the native spots on this list are very generous.`,
      proTip:
        "Their seafood okro is probably the best in Lagos for us and it’s a large ass bowl that two can share. You can also try their nkwobi or catfish peppersoup and you are unlikely to be disappointed.",
      proTipAuthor: "Mofe",
    },

    {
      name: "Jamski",
      address: "8A Ologun Agbaje St, Victoria Island, Lagos 106104, Lagos",
      budgetPerPerson: "15,000",
      googleMapsLink: "https://maps.app.goo.gl/Udb3hoB5dSuYzpJu9",
      parking: "Limited",
      waitTime: "Average",
      openingHours: "12pm to 9pm (closed Mondays)",
      customerService: "Excellent",
      ambience: "4/5",
      food: "4/5",
      instagramLink:
        "https://www.instagram.com/jamski_nigeria?igsh=ZHh1eXB3bHBuN2hr",
      note: `To our knowledge and we might be wrong, Jamski is the only place to get Jamaican food in Lagos, well at least as a dine-in spot. Family owned and with food that is made with love, one thing that Jamski constantly do is keep their price point at a level that a lot of people can cope with - with 15,000 naira, you are definitely eating good here.
Their customer service is legendary here and the ambience is filled with some many cute touches you will think you have been teleported to Kingston.
`,
      proTip:
        "Wagwan. Since we know it is already on your mind to ask, the answer is no, you cannot smoke here. You can however try their patties and brown stew oxtail- so good!",
      proTipAuthor: "Gideon",
    },
    {
      name: "Kaly",
      address:
        "No.1 Building, 7th Floor, 1 Akin Adesola Street off Ahmadu Bello way Number One, Victoria Island, Lagos",
      budgetPerPerson: "100,000",
      googleMapsLink: "https://maps.app.goo.gl/3862MLMLbVKwtSjLA",
      parking: "Good",
      waitTime: "Fast",
      openingHours: "12pm to 12am daily",
      customerService: "Excellent",
      ambience: "5/5",
      food: "4.5/5",
      instagramLink:
        "https://www.instagram.com/kalyexperience?igsh=MWNnc3NqbGN1OWJ6Yw==",
      note: `There are some many good upscale restaurants that splash a lot of money on their interior and have good food but Kaly does enough of everything right to get in. Their customer service is truly remarkable and one of the best out there in the city. 
Their rooftop view is lovely and the food does not lag far behind as well. Yes, it is pricey but it is worth it. We tried to give you as many varied experiences as possible on this list but a number of restaurants will get in simply because they execute at a high level the key deliverables of a good dining out experience and Kaly is one of those.
`,
      proTip:
        "Kaly excel with their steak options- it’s a tough one but our fav is probably their ribeye. They also have a business lunch available on weekdays till 4pm which comes with two courses and is priced at 59,000 so you can save a little bit with that.",
      proTipAuthor: "Uju",
    },
    {
      name: "Lagos Trivia Night by Awe Lagos",
      address:
        "Pop Landmark, Plot 3 & 4 Water Corporation Dr, Eti-Osa, Lagos 106104, Lagos",
      budgetPerPerson:
        "13,500 (solo - early bird) 105,000 (team of 8 - early bird)",
      googleMapsLink: "https://maps.app.goo.gl/eJ9GkQ3kFFA6eyUQ8",
      parking: "Excellent",
      waitTime: "Average",
      openingHours: "N/A",
      customerService: "Good",
      ambience: "4/5",
      food: "4/5",
      instagramLink: "https://www.instagram.com/lagostrivianight/?hl=en",
      note: `The best trivia experience in Lagos at the moment curated by Awe Lagos, Trivia Night has become not just an event but a culture in the city. The rules are simple -  you grab your squad, go (probably) fail a lot of questions, try to win a few prices and have a hell of a time.
The venue rotates every now and then as it’s gotten bigger and bigger but right now, it’s  held at Pop Landmark so you have a wide space and a nice array of food vendors to try from. We much prefer the choices here compared to some other prior mid locations (we won’t name names)
`,
      proTip:
        "There is always a movie section which everyone faffs for some reason so make sure you take a strong cinephile with you. The next LTN dates are the 13th and 28th of December; also, no cheating on the day, drop your phones, yes we are talking to you",
      proTipAuthor: "Uju",
    },
    {
      name: "Mako",
      address: "36 Ademola St, Ikoyi, Lagos 106104, Lagos",
      budgetPerPerson: "100,000",
      googleMapsLink: "N/A",
      parking: "Excellent",
      waitTime: "Fast",
      openingHours: "12pm to 3am (closed Mondays and Tuesdays)",
      customerService: "Excellent",
      ambience: "4.5/5",
      food: "4.5/5",
      instagramLink: "https://www.instagram.com/makolagos/?hl=en",
      note: `Arguably the most popular members only club in Lagos right now and at 4,000 dollars a pop for the membership, definitely the most expensive out there right now. Beyond that eye popping fee, Mako is a pretty minimalist themed spot with a sweet view of the Lagos coastline. 
You can get in either by being a member or knowing a member (which really isn’t the hardest thing in the world). If you can find your way there, their pizza options are truly some of the best in town. Their parties are also some of the best you will find in the city with some under the radar DJs that never miss.  
`,
      proTip:
        "Their salami and margherita pizza options are our top picks. Mako is also one of a dying breed of spots where you actually get to hear the voice of the person across you on the table when talking",
      proTipAuthor: "Dese",
    },

    {
      name: "Mama Toyin Foods",
      address: "47 Arolowun street, Onipanu, Ikeja 102215, Lagos",
      budgetPerPerson: "3,000",
      googleMapsLink: "https://maps.app.goo.gl/yTZtdJuFLrQqAa4N8",
      parking: "Limited",
      waitTime: "Average",
      openingHours: "12pm to 9pm (closed Mondays)",
      customerService: "Good",
      ambience: "N/A",
      food: "4/5",
      instagramLink: "NA",
      note: ` The most popular amala spot in Lagos by some decent margin. If you haven’t seen this spot on your favourite content creator’s page, have they even started? And no, we don’t count, thanks and God bless. 
It’s run by the aforementioned Mama Toyin who has been at this game for a number of decades. You will be sure to see her serving there on most days. Service can be slow as the crowds here are usually heavy due to its popularity and the space itself like most amala spots is kind of small but when you get to the food, it’s pretty good…allegedly.
`,
      proTip:
        "Everyone goes for other forms of protein but no one ever really goes for the catfish which is typically huge.",
      proTipAuthor: "Community",
    },
    {
      name: "Memories of Ethiopia",
      address:
        "Green House, 15 Oba Adeyinka Oyekan Ave, Victoria Island, Lagos 106104, Lagos",
      budgetPerPerson: "25,000",
      googleMapsLink: "https://maps.app.goo.gl/X8FUcKgiApgvgUh28",
      parking: "Good",
      waitTime: "Fast",
      openingHours: "4pm to 8pm (Tuesdays and Saturdays only)",
      customerService: "Good",
      ambience: "3.5/5",
      food: "4/5",
      instagramLink:
        "https://www.instagram.com/memoriesofethiopia?igsh=MWF3cm90cjN2bDF4Yw==",
      note: `Memories of Ethiopia is run by the very pleasant Sahara and serves some top tier Ethiopian options. IT only runs twice a week and it’s located inside the cozy Green House which is actually a private spot but you get access if you want to go for MoE. 
There’s also a large screen in the Green House court so if you come here on a football day, you can just kick back, have some nice Ethiopian food and watch Arsenal fail to win the league once more.
`,
      proTip:
        "Their large mixed platter is the best value for money and for those who are always looking for vegan options, there are vegetarian platters here you can check out. Their bunna (traditional Ethiopian coffee) is also a wonderful eye opener.",
      proTipAuthor: "Mofe",
    },
    {
      name: "Milk and Honey / Gather House",
      address: "1, Macpherson Avenue, Ikoyi",
      googleMapsLink: "https://maps.app.goo.gl/omvWcNY1eypgJi2V9",
      budgetPerPerson: "15,000",
      googleMapsLink: "https://maps.app.goo.gl/tJY9W4B4EJLjm4n5A",
      parking: "Limited",
      waitTime: "Average",
      openingHours: "7am to 8pm",
      customerService: "Good",
      ambience: "4.5/5",
      food: "5/5",
      instagramLink:
        "https://www.instagram.com/milkandhoneylagos?igsh=MXg5b2k4dWF6NjFmcw==",
      note: `Run by the awesome Chef Livvy, Milk and Honey is currently our best place to get pastries and probably milkshakes in the city. The quality of products is absolutely top-tier and you should definitely get on the hype train.
      They have a larger, open space that's soothing for the mind.
    From their lotus biscoff to their caramel milkshakes, the richness and creaminess is divine. We also decided to include Gather House here as it is another place to get Milk and Honey products in a chic setting.
    `,
      proTip:
        "When in Milk and Honey, don’t leave without trying their caramel or biscoff milkshakes but honestly pretty much everything on this menu is too good. Gather House also has a bunch of events this month and their usual supper club on the 18th.",
      proTipAuthor: "Gideon",
    },
    {
      name: "Nahous - Bar 77",
      address:
        "Federal Palce Hostel, 6-8 Ahmadu Bello Way, Victoria Island, Lagos",
      googleMapsLink: "https://maps.app.goo.gl/J9dKcLsZ4ZGfJ7iM7",
      budgetPerPerson: "40,000",

      parking: "Excellent",
      waitTime: "Average",
      openingHours: "5pm to 12pm (Wednesday to Sunday) ",
      customerService: "Excellent",
      ambience: "4/5",
      food: "4.5/5",
      instagramLink: "https://www.instagram.com/thenahous/?hl=en",
      note: `Run by the Billionaire chef, Chef Eros, Bar 77 by Nahous is no longer such a secret and underground place as compared to when they first launched but they are still very much worth your time. 
There’s also an art gallery upstairs where you can swing by and pretend you understand the depths of emotion invoked by the pieces. The vibe downstairs is always contagious, kind of like a rebel’s hangout and instead of large plates, they have smaller bites which fits the bar theme
`,
      proTip:
        "Their drink menu is small but mighty - try their garri infused garricolada or hibiscus based zobotni. Pair either of them with the ewa aganyin and agege assembly and thank us later.",
      proTipAuthor: "Uju",
    },

    {
      name: "Nok Lagos",
      address: "12A Akin Olugbade Street, Victoria Island, Lagos 106104, Lagos",
      budgetPerPerson: "40,000",
      googleMapsLink: "https://maps.app.goo.gl/KvtNz2FMPgTsE2nV7",
      parking: "Good",
      waitTime: "Average",
      openingHours: "12pm to 11pm (closed Mondays)",
      customerService: "Excellent",
      ambience: "4/5",
      food: "4.5/5",
      instagramLink:
        "https://www.instagram.com/nokbyalara?igsh=MTlmYno0am50aHhldg==",
      note: `Of course there is no way we can make such a list without including the most expensive and bougie amala in Lagos but beyond their 24,000 naira a plate abula, Nok has a lot more to them. One thing we feel is underrated about Nok is their airy beautiful garden with colourful umbrellas. At night, this is a pretty nice place to just kick back and chill. 
Their December calendar is also super packed with almost an event every other day so you’ll definitely find something for you and your crew and if you are asking, the answer is yes, their abula lives up to the reputation.
`,
      proTip:
        "While their amala gets all the rave, Nok have quietly expanded their menu a fair bit and now have an outdoor grill menu as well as a dedicated brunch menu. It’s also one of the few places you can get great shakshouka in Lagos.",
      proTipAuthor: "Dese",
    },
    {
      name: "Ofada Boy",
      address: "1 Mba St, Surulere, Lagos 101241, Lagos",
      budgetPerPerson: "15,000",
      googleMapsLink: "https://maps.app.goo.gl/V6vwGz7XgKGZm9VP8",
      parking: "Bad",
      waitTime: "Average",
      openingHours: "11am to 9pm daily",
      customerService: "Good",
      ambience: "4/5",
      food: "4/5",
      instagramLink:
        "https://www.instagram.com/ofadaboy?igsh=MW0ybWJ0dWc4eDVoMw==",
      note: `For us, Ofada Boy still remains one of the safest places to go on the mainland and have a decent experience. They are popularly known for their top notch ofada dishes (I mean it’s literally in the name). The vibe here is very Afro-centric whether it’s the decor, food presentation in leaves or waiters attire.
      One weird thing we have constantly noticed is their plantain is usually hard- why that is so? We have no idea, but you won’t have too many major complaints aside from that in terms of food.
      `,
      proTip:
        "Many native spots in Lagos surprisingly do not do well with palm wine but that’s usually one of their high points. Get the seafood okro too if you can.",
      proTipAuthor: "Gideon",
    },
    {
      name: "Rapa Nui",
      address: "256 Etim Inyang Cres, Victoria Island, Lagos 106104, Lagos",
      budgetPerPerson: "25,000",
      googleMapsLink: "https://maps.app.goo.gl/TFyg396HobgGv571A",
      parking: "Average",
      waitTime: "Fast",
      openingHours: "12pm to 11:30pm (close 10pm on Sundays)  ",
      customerService: "Good",
      ambience: "4/5",
      food: "4/5",
      instagramLink: "https://www.instagram.com/rapa_nui_lagos/?hl=en",
      note: `The real ones remember Rapa Nui at The Good Beach and while you might not get that beautiful beachside view anymore in their new location, you still get most of the good things that come along with any Chef Dulhade run project. 
It’s a Poylnesian inspired dining spot with fairly decent value and great tasting food and they also did a pretty fair job recreating some of the ambience they had in the old spot. Unfortunately, our favourite order of the super affordable ocean and garden platter is off the menu but Rapa Nui still remains one of the best seafood spots in the city.
`,
      proTip:
        "Your order should go thus - fish croquettes as a  starter, pork ribs for mains and then finish off with some tres leches; that still keeps you around the 30,000 mark.",
      proTipAuthor: "Mofe",
    },
    {
      name: "Rhodes BBQ Smokehouse",
      address: "29 Oyeleke Street, Oregun, Ikeja 101233, Lagos",
      budgetPerPerson: "20,000",
      googleMapsLink: "https://maps.app.goo.gl/4sfDfNsa9dhM9zH68",
      parking: "Bad",
      waitTime: "Average",
      openingHours: "1pm to 10pm (closed Mondays)",
      customerService: "Good",
      ambience: "3/5",
      food: "4.5/5",
      instagramLink:
        "https://www.instagram.com/rhodesbbq?igsh=OGF3d2EzMnpyd3Ny",
      note: `Are those complaints we hear from our mainland people because it’s been a while since you saw a mainland spot on this list- or well, a non street food mainland spot (with the ass ambience in most, what’s the difference really?). 
Rhodes is a traditional Southern Style American BBQ spot owned by Koye Rhodes who has been in the grills game maybe longer than any of us writing this has been alive. From banging ribs to burgers to tasty chicken, Rhodes is also one of the more affordable spots on the mainland and in Lagos generally, for the quality you get.
`,
      proTip:
        "Their double beef burger is quite good but for some reason, it’s rarely ever available. What is more available is their ribs and their St Louis styled variant falls off the bone and is super tasty. They don’t have a very wide variety of halal options but they have enough to make you happy if that’s what you need. ",
      proTipAuthor: "Dese",
    },
    {
      name: "RSVP",
      address: "9 Eletu Ogabi St, Victoria Island, Lagos 101001, Lagos",
      budgetPerPerson: "100,000",
      googleMapsLink: "https://maps.app.goo.gl/Xysvzsbh3WEuZA4e6",
      parking: "Limited",
      waitTime: "Fast",
      openingHours: "11am to 11:30pm daily",
      customerService: "Excellent",
      ambience: "4/5",
      food: "4/5",
      instagramLink:
        "https://www.instagram.com/rsvp.lagos?igsh=eTdrN2xqdTEyZHo5",
      note: `Just like Kaly, RSVP does a lot of what should be done to make a dining experience memorable. They are an American styled restaurant and bar with a patio and pool that has been in the game for over a decade. 
      Similar to Salmas, the poolside is a pretty chill place to eat at but the spaces get taken pretty fast. RSVP is notoriously bad for pictures and videos if you are a content creator and you need to make videos in the evening. They dim the lights quite a bit inside but if you just want regular pictures, you will be fine.
      PS- Initial versions of the guide had us foregoing Slow because they are owned by the same group but a particular team member who shall not be named started tossing Cheese balls at us till we gave in. 
      `,
      proTip:
        "Their salmon fillet  and chicken roast are two proper top tier mains. Also, the dessert options they have here are very strong- try out their miso creme brulee or blueberry cheesecake.",
      proTipAuthor: "Femi",
    },
    {
      name: "Salma’s Authentic Lebanese Cuisine",
      address: "20/24 Ozumba Mbadiwe Ave, Victoria Island, Lagos 106104, Lagos",
      budgetPerPerson: "50,000",
      googleMapsLink: "https://maps.app.goo.gl/85TjBps4P913kVqV7",
      parking: "Good",
      waitTime: "Fast",
      openingHours: "11:30am to 10:30pm",
      customerService: "Excellent",
      ambience: "5/5",
      food: "4.5/5",
      instagramLink:
        "https://www.instagram.com/salmaslagos?igsh=MXA0aGw5MzdhaHVhdA==",
      note: `We are not too sure if there are a lot of restaurants on this list that get high marks in basically everything but when you go to Salma’s and continually see a heavy crowd there, you understand why. 
They are one of the OG spots in Lagos and for good reason. Whether it’s their gorgeous terrace view that is a beauty to sit by at night or their top notch Mediterranean offering or their very knowledgeable waiters, Salmas is always packed, especially at night.
`,
      proTip:
        "The terrace is literally one of the prettiest places to eat in Lagos and it’s the best place to eat in the restaurant. You need to reserve either the day before or early in the day or you won’t get a seat. Don’t believe me? Oya nah, no wahala, try to go there with your group without reservation first. Also, their shisha, while good, is nowhere worth the hype it gets.",
      proTipAuthor: "Dese",
    },
    {
      name: "Salt and Social",
      address: "2a Admiralty Wy, Lekki Phase 1, Lagos 105102, Lagos",
      budgetPerPerson: "35,000",
      googleMapsLink: "https://maps.app.goo.gl/S9rvoPq3PXNAkcRo9",
      parking: "Good",
      waitTime: "Fast",
      openingHours: "12am to 2am",
      customerService: "Good",
      ambience: "4/5",
      food: "4/5",
      instagramLink:
        "https://www.instagram.com/s.a.l.t.s.o.c.i.a.l?igsh=MWZ2Y3pqdnV1YXN1YQ==",
      note: `Salt and Social is such a great place to come for drinks and just socialise and their food is pretty damn good too. They are a pub cum communal space that open till pretty late serving as a wonderful spot for pre-drinks and late night food. The space here feels pretty artsy- like one for creatives.
Their burgers and dessert options are so good and their bartenders always put on a show when it comes to making drinks. For what it’s worth, S and S were the first spot we saw in Lagos that started with the trendy enclosed burger gimmick…which for the record, we absolutely love.
`,
      proTip:
        "Their drinks are pretty fire here and our fav is the gold mine- just prepare for your hands to get a bit sticky. If you are looking for a happy hour deal, check in between 5pm and 8pm and for food, their burgers are top-tier. On most Sundays after church, Uncle PJ also comes around to host one of the littest day parties in Lagos.",
      proTipAuthor: "Dese",
    },
    {
      name: "Shark House 101",
      address: "Aaron mall St, 12 Olubunmi Owa St, Lekki Phase 1, Lekki",
      budgetPerPerson: "40,000",
      googleMapsLink: "https://maps.app.goo.gl/XZaRBRNXA86fQdik6",
      parking: "Limited",
      waitTime: "Average",
      openingHours: "12pm to 11pm daily",
      customerService: "Good",
      ambience: "3/5",
      food: "3.5/5",
      instagramLink:
        "https://www.instagram.com/thesharkexpress?igsh=emNnZmN5MGdxaDhi",
      note: `If you are looking for a wide range of seafood options, Shark House is definitely one of the best places to check out. It was a neck and neck contest between Shark House and Ejanla for the seafood choice but the wider variety at SH just nudged us in their direction. 
      The ambience here feels like you are very much at sea- as if you’ve been transported to Bikini Bottom and they have some loaded seafood boils and platters here. The wait time here can also be a bit of an issue at times.
      While we do wonder about the actual quality of the seafood options at times, the quantity and variety on offer here probably makes up for it and there are not too many spots that can beat that in Lagos.
      `,
      proTip:
        "Just skip their drinks in entirety- you are likely to be disappointed. Their loaded seafood platter though- that can feed about six people so that feels like a mini steal.",
      proTipAuthor: "Uju",
    },
    {
      name: "Shiro",
      address: "Block XVI 3 & 4 Victoria Island Oniru Estate, Eti-Osa, Lagos",
      budgetPerPerson: "80,000",
      googleMapsLink: "https://maps.app.goo.gl/ayEcQPBrYunHwfnC8",
      parking: "Good",
      waitTime: "Average",
      openingHours: "12pm to 1am (close 10pm Mondays)",
      customerService: "Good",
      ambience: "5/5",
      food: "4.5/5",
      instagramLink:
        "https://www.instagram.com/shirolagos?igsh=MXE1eDJyOWptY3JieA==",
      note: `Another proper OG before IG and a reason why we did this guide- because clearly., we do not give the OGs enough love. Their ambience is gorgeous and something we love about Shiro is how much space there is to dine, although when the crowd. 
They are also one of the few places we know where you can get a full on teppanyaki experience. While this list might be a bit Asian heavy already, we feel we just cannot leave Shiro out of this. Also, their wine collection is pretty damn impressive.
`,
      proTip:
        "Shiro has a Sunday brunch where currently, you can get unlimited food with alcoholic drinks for 52,500. Their shisha is also one of the best you will find in Lagos.",
      proTipAuthor: "Femi",
    },
    {
      name: "Sip and Cook at 22b",
      address: "22b Olawale Cole Onitiri Ave, Eti-Osa, Lekki 106104, Lagos",
      budgetPerPerson: "50,000",
      googleMapsLink: "https://maps.app.goo.gl/qHqqcx1d3R5K9Qh87",
      parking: "Limited",
      waitTime: "Fast",
      openingHours: "N/A",
      customerService: "Good",
      ambience: "4/5",
      food: "4/5",
      instagramLink: "https://www.instagram.com/abcat22b?igsh=cmZtaWpxdDd0aTho",
      note: `Anu Bello’s Sip and Cook which she hosts at 22b is probably, for us, the most interesting and unique dining experience in Lagos. Think of a sip and paint experience but this time with cooking food instead of painting. You get to make your own food while drinking copious amounts of alcohol.
The possible options to cook range from pasta to Nigerian food and you get to play several trivia games with your group which really we found was just an excuse to drink some more. There’s also a gallery you can check out before going up to eat. 
`,
      proTip:
        "While you can get a single ticket, it is much better to go as a group. The Sip and Cook is a great bonding experience be it family or that friend outing that finally left the group chat. You can also get a bottle of their locally made hibiscus mix that can serve over 20 people.",
      proTipAuthor: "Dese",
    },
    {
      name: "Six Fifteen Bar and Events",
      address: "3, nkoroh joe street, via, Oki Ln, Mende, Lagos 100211",
      budgetPerPerson: "25,000",
      googleMapsLink: "https://maps.app.goo.gl/AwEp9j4nJFjErNQP7",
      parking: "Limited",
      waitTime: "Slow",
      openingHours: "12pm to 12am daily",
      customerService: "Average",
      ambience: "3/5",
      food: "4/5",
      instagramLink:
        "https://www.instagram.com/sixfifteen_bar?igsh=Znk2dzF3MjY1dTdv",
      note: `Ah, the good ol’ Six Fifteen. We remember the days when we could go to Six Fifteen and it was a sleepy joint that was only known by a handful of people around Maryland. Then we did a spotlight video and the rest is history.
Anyway, if you can get over the horrible road to get there, insanely long wait time and iffy customer service, 615 is a proper gem. They have some of the best peppersoups you will find in the city and their portions are super generous as well. They have renovated a bit recently so the space is starting to be a bit modern.
`,
      proTip:
        "Their large chicken pepper soup paired with rice can easily feed four people. Tack on some isiewu and a couple of drinks and you will go home with your bellies almost beyond breaking point. The catfish pepper soup is also pretty lit. Also, once again, you are very much advised to call ahead of time to place your order before getting there.",
      proTipAuthor: "Uju",
    },

    {
      name: "Slow Lagos",
      address: "2 Musa Yar' Adua Street, Victoria Island",
      budgetPerPerson: "80,000",
      googleMapsLink: "https://maps.app.goo.gl/Qe8a3Qp3V1xngUo28",
      parking: "Excellent",
      waitTime: "Fast",
      openingHours: "10:00am to 12:00am daily ",
      customerService: "Excellent",
      ambience: "4.5/5",
      food: "4.5/5",
      instagramLink:
        "https://www.instagram.com/slowlagos?igsh=NWt2Znk1eDhnYTBy",
      note: `It can be easy to forget some of the blue chip spots in the city and to be fair, we do accept this list is biased towards unique and more frisky spots and experiences. Slow Lagos though deserves to break that theme. They are one of a handful of spots in the city that does everything at a high level and most importantly, they do it consistently.
      From their Amazon themed lush interior to the top tier cocktails that are also surprisingly generous to the efficient and knowledgeable staff, Slow is a tropical brasserie you can go to again and again and spend your big bucks and not regret it.
      `,
      proTip:
        "Unknown to many, they do have breakfast options for those who do not want to go all out and that starts at 8am. Their chicken serving is also a nice money saver and can feed two to three people - be prepared to wait though, it takes 45 minutes to make",
      proTipAuthor: "Gideon",
    },

    {
      name: "Sushiholic Lagos",
      address: "Block 26, Delakes Mall, 8 Admiralty Wy, Lekki 105102, Lagos",
      googleMapsLink: "https://maps.app.goo.gl/np3FMyyZrdEqLA8L9",
      budgetPerPerson: "50,000",
      googleMapsLink: "https://maps.app.goo.gl/np3FMyyZrdEqLA8L9",
      parking: "Good",
      waitTime: "Fast",
      openingHours: "12:00pm to 10:30pm daily",
      customerService: "Good",
      ambience: "3.5/5",
      food: "5/5",
      instagramLink:
        "https://www.instagram.com/sushi.bbqholic.lagos?igsh=aXNpdG82YnNheWpn",
      note: `This was such a tough one, not because of what got in but what we left off. We had space for one more Asian spot on the mainland and we had to edge out Sora, Izanagi and Fusion - three very solid spots. Sushiholic however, in our eyes, just have such a high level of food quality that we felt we could not drop them.
It’s a small ish spot and while cute, not necessarily the most banging in terms of ambience but it does feel serene. The sushi here is divine- always fresh and delicious and aside from that, they also have very good desserts and their bbq options are out of this world.
`,
      proTip:
        "Anything sushi here is outstanding but their short rib sandwich is still so underrated as well as their Jack Daniels burger. Then finish off with their creme brulee.",
      proTipAuthor: "Mofe",
    },
    {
      name: "The Ona Lagos",
      address: "1701 Violet Yough Close, Victoria Island, 106104, Lagos",
      budgetPerPerson: "80,000",
      googleMapsLink: "https://maps.app.goo.gl/dpE7D2CTHkCPSRGk7",
      parking: "Good",
      waitTime: "Fast",
      openingHours: "12:30pm to 11:00pm (closed Wednesdays)",
      customerService: "Excellent",
      ambience: "4.5/5",
      food: "4/5",
      instagramLink:
        "https://www.instagram.com/theonalagos?igsh=MWhjam90Z291anhocA==",
      note: `A chef owned restaurant that loves playing around with native meals and celebrates African ingredients on the list? Hmm, wonder where we have seen that one before. Ona Lagos is run by Chef Obehi and one thing you should know is this is a very experimental spot.The ambience here is on point and the food, while very different from what you might be used to, is in our opinion, wonderful. 
      Do note portion sizes here are a bit small and the meals are very unique and maybe not what the typical person is used to. If you can get past that, there’s an abundance of culinary joy to be experienced here. They also have a rooftop bar that’s worth checking out.They have a Bao Bun Tuesdays where you get some discounts as well as a Sunday roast.
      `,
      proTip:
        "You should be seriously questioned if you ever leave here without trying their bao buns - that might be what they are most known for to be honest. Also their smoked antelope and prosciutto or their gbegiri ravioli is a proper hit.",
      proTipAuthor: "Dese",
    },
    {
      name: "The Rustic Deck Bar and Bistro",
      address:
        "Lekki Waterside Hotel, Plot 2B Wole Olateju Cres, Lekki Phase 1, Lekki 23401, Lagos",
      budgetPerPerson: "30,000",
      googleMapsLink: "https://maps.app.goo.gl/xT4jzjwv7J7PvcBJA",
      parking: "Good",
      waitTime: "Average",
      openingHours: "11:00am to 11:00pm (closed Tuesdays)",
      customerService: "Excellent",
      ambience: "4/5",
      food: "5/5",
      instagramLink:
        "https://www.instagram.com/therusticdeckbarandbistro?igsh=MXVlaTV6ZDZvM3l4eQ==",
      note: `Our best spot of 2024, the Rustic Deck is a quiet cozy spot located in Lekki Waterside Hotel. We love the ambience here with the dim lights, rustic vibes (surprise surprise) and a nice view of the Lekki-Ikoyi link bridge which is quietly a stunner for pictures if you get the angles right.
      Rustic have a lot of interesting and unique Afro-fusion meals and although they have a somewhat limited menu, pretty much every item here is a proper banger. Somehow, they are still underrated and not properly known, we kind of hope it stays that way. Their drinks are probably the weakest aspect of the restaurant.
      `,
      proTip:
        "Their chicken lollipops are sensational. We have had them time and time again and without fail, they deliver. The kilishi pasta bowl with slow cooked rabbit is currently our best dish to get in Lagos and while their drinks are hit or miss, the hibiscus ocean is a fav",
      proTipAuthor: "Dese",
    },

    {
      name: "Wakame Asian Kitchen and Lounge",
      address:
        "Marriott Hotel Ikeja, 122 Joel Ogunnaike St, Ikeja GRA, Lagos 100271, Lagos",
      budgetPerPerson: "50,000",
      googleMapsLink: "https://maps.app.goo.gl/w4wzYz9cQ4kaNBZn6",
      parking: "Good",
      waitTime: "Slow",
      openingHours: "12:00pm to 4:00pm, then 6:00pm to 10:00pm daily",
      customerService: "Good",
      ambience: "4/5",
      food: "4/5",
      instagramLink:
        "https://www.instagram.com/wakamelagos?igsh=MTAwcmR3eHdrazBpaw==",
      note: "We had to make sure we had a couple of places on here for mainland representation and Wakame couldn’t be left off. Located in Marriott (as well as some other gems), they have a pretty ambience and some great Asian food. Do note that food prep is fairly slow here but hey, maybe take some fire pictures while you are chilling. ",
      proTip:
        "Wakame also have an open kitchen buffet experience every Sunday and if you go for the 49,000 option, you get two cocktails with it and the buffet has a pretty nice variety.",
      proTipAuthor: "Mofe",
    },
    {
      name: "White Garden Chinese Restaurant",
      address: "34 Balarabe Musa Crescent, Victoria Island",
      budgetPerPerson: "40,000",
      googleMapsLink: "https://maps.app.goo.gl/3sjQGzrQuNpcRge58",
      parking: "Good",
      waitTime: "Fast",
      openingHours: "11:00am to 10:00am daily",
      customerService: "Good",
      ambience: "3/5",
      food: "5/5",
      instagramLink: "NA",
      note: `A very late addition and one of the few places on the list we have not been to at least once but White Garden got the rare Eat Drink and Foodie in Lagos rubber stamp so you already know you are in safe hands. They are one of the few places that offer a top-tier hotspot experience in the city.
      With a sauce bar that deserves its place in the Lagos House of Assembly and a spot great for groups, you can forgive their often slightly confused waiters who don’t always seem so sure of what exactly is sold but to be fair, they do make up for it with their over-exuberant enthusiasm
    `,
      proTip:
        "Their dual flavoured ying yang spot is pretty highly rated and the claypot duck, black bean short ribs, and yanzong fried rice are a must try. Also, shout out to them for their generous portions for real.",
      proTipAuthor: "Community",
    },
    {
      name: "Zanzan Suya at Lagos Polo Club",
      address: "1 Polo Rd, Ikoyi, Lagos 106104, Lagos",
      budgetPerPerson: "4,000",
      googleMapsLink: "https://maps.app.goo.gl/eqzqYnApURMfR7Lo8",
      parking: "Limited",
      waitTime: "Fast",
      openingHours: "9:00am to 12:00am daily",
      customerService: "Excellent",
      ambience: "N/A",
      food: "5/5",
      instagramLink: "NA",
      note: `The suya spot for the elites of Lagos, Zanzan suya has been around for a bit and they offer a proper masterclass in top tier suya. Located in Lagos Polo Club, you do not necessarily need to be a member to buy the suya. Just let them know at the gate what you are there for.
That said, if you are already close to one of the most prestigious and historic clubs in the city, why not consider signing up? 
`,
      proTip:
        "Everything is good here but their gizzard and chicken suya- we feel this is on another level.",
      proTipAuthor: "Gideon",
    },
    {
      name: "ZaZa Restaurant and Lounge",
      address:
        "Hartleys, 19 Agoro Odiyan St, Victoria Island, Lagos 106104, Lagos",
      budgetPerPerson: "100,000",
      googleMapsLink: "https://maps.app.goo.gl/58ujfteQew1Vy2zo6",
      parking: "Good",
      waitTime: "Fast",
      openingHours: "7:00pm to 2:00am (closed Monday and Tuesday)",
      customerService: "Excellent",
      ambience: "5/5",
      food: "4.5/5",
      instagramLink: "https://www.instagram.com/zazalagos/?hl=en",
      note: `With this, we feel like we strayed a bit from our core ethos but hey, if there’s a time to do that, it should be Detty December. Zaza just edged our Boho Lagos on here but both are amazing options anyway. With the former, you get some of the most premium nightlife you will experience in the city and Zaza has a way of just doing it sleekly unlike some other spots in the city where it can come off as tacky. They also have a long list of big artists coming through this month so it’s sure to be a hell of a time.`,
      proTip:
        "Their new glow-up is really amazing from unbelievable performances to champagne in the toilet (you did not read that wrongly); but we will leave you to explore the rest without spoilers.",
      proTipAuthor: "Gideon",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="max-w-2xl mx-auto p-4 space-y-8">
        <div className="flex flex-col items-center justify-between p-4">
          <h1 className="text-black text-3xl font-bold mb-5">
            A Johnny-Just-Come guide to eating out in Lagos
          </h1>
          <div className="gap-1 w-full mb-5">
            <p className="text-gray-700 text-xs w-full bg">
              Last updated : {moment("2025-12-11").format("MMM D, YYYY")}
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed mb-10">
            If you are stuck with the pain in the arse that is finding a place
            to go eat in Lagos with time ticking away relentlessly, you are in
            the right place. The Onijekuje Team has come together to give you a
            Johnny Just Come guide to eating out in Lagos and this is also so
            you all would let our DMs rest.Here are 50 experiences we feel
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
              food={restaurant.food}
              note={restaurant.note}
              proTip={restaurant.proTip}
              proTipAuthor={restaurant.proTipAuthor}
              instagramLink={restaurant.instagramLink}
              parking={restaurant.parking}
            />
          ))}
          <p className="text-gray-600 leading-relaxed mt-10">
            So hope this list helps and rest assured when it comes to finding
            the best places to eat in Lagos, Onijekuje dey for you. If you are
            looking for something a bit more specific, be sure to ask our
            AI-powered recommendation chatbot{" "}
            <span className="font-bold ">
              <a href="https://imani.onijekuje.com/" className="underline">
                Imani
              </a>
            </span>{" "}
            here.
          </p>
        </div>
      </div>
    </div>
  );
}
