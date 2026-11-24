"use client";
const whatsapp = "https://wa.me/919363299103";


const tours = [
  {
    title: "Tamil Nadu Temple Tours",
    description: "Explore Pancha Boothasthalam, Arupadai Veedu, Navagraha and Divyadesam temple tours.",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=900",
    link: whatsapp,
  },
  {
    title: "Pilgrimage Tour Packages",
    description: "Experience sacred journeys across India, including Varanasi, Ayodhya, Rameswaram and other holy destinations.",
    image: "https://images.pexels.com/photos/23914402/pexels-photo-23914402.jpeg",
    link: whatsapp,
  },
  {
    title: "Kerala Holiday Packages",
    description: "Discover Munnar, Alleppey backwaters, Thekkady and beautiful Kerala destinations.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900",
    link: whatsapp,
  },
  {
    title: "Tamil Nadu Hill Stations",
    description: "Enjoy refreshing holidays in Ooty, Kodaikanal, Yercaud and Coonoor.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=900",
    link: whatsapp,
  },
  {
    title: "Domestic Tour Packages",
    description: "Explore India's beautiful destinations, heritage cities and memorable holidays.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=900",
    link: whatsapp,
  },
  {
    title: "International Tour Packages",
    description: "Discover exciting international destinations and unforgettable experiences.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900",
    link: whatsapp,
  },
  {
    title: "Desert Tour Packages",
    description: "Discover the golden deserts, royal forts, camel safaris and cultural heritage of Rajasthan.",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=900",
    link: whatsapp,
  },
  {
    title: "Family & Honeymoon Holidays",
    description: "Create special memories with personalized family and romantic holiday packages.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=900",
    link: whatsapp,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      
<header className="flex flex-wrap items-center justify-between gap-5 bg-white px-6 py-4 shadow-md md:px-12">
  <a href="#home">
    <img
      src="/logo.jpg"
      alt="Discovery Odyssey Travel Group"
      className="h-16 w-auto object-contain"
    />
  </a>

  <nav className="flex flex-wrap items-center gap-6 text-sm font-semibold text-slate-700">
    <a href="#home" className="transition hover:text-emerald-700">Home</a>
    <a href="#tours" className="transition hover:text-emerald-700">Tour Packages</a>

<a href="/car-rental" className="transition hover:text-emerald-700">
  Car Rental
</a>

    <a href="#about" className="transition hover:text-emerald-700">About Us</a>
    <a href="#enquiry" className="transition hover:text-emerald-700">Contact</a>

    <a
      href="https://wa.me/919363299103"
      target="_blank"
      rel="noreferrer"
      className="rounded-full bg-emerald-700 px-6 py-3 font-bold text-white transition hover:bg-amber-500 hover:text-slate-900"
    >
      Plan Your Trip
    </a>
  </nav>
</header>


      
<section
  id="home"
  className="flex min-h-[600px] items-center bg-cover bg-center px-6 py-24 text-white md:px-16"
  style={{
    backgroundImage:
      "linear-gradient(90deg, rgba(0,0,0,.75), rgba(0,0,0,.25)), url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1800')",
  }}
>
  <div className="max-w-3xl">
    <p className="mb-5 font-bold uppercase tracking-[0.3em] text-amber-300">
      Your Trusted Travel Partner Worldwide
    </p>

    <h2 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
      Explore the World.
      <span className="block text-amber-300">Create Memories.</span>
    </h2>

    <p className="mb-9 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
  Every Journey Has a Beautiful Destination.
  
  Discover extraordinary travel experiences with Discovery
  Odyssey Travel Group.
</p>

    <div className="flex flex-wrap gap-4">
      <a
        href="#tours"
        className="rounded-full bg-amber-400 px-8 py-4 font-bold text-slate-900 transition hover:bg-amber-300"
      >
        Explore Packages →
      </a>

      <a
        href="#enquiry"
        className="rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-slate-900"
      >
        Contact Us
      </a>
    </div>
  </div>
</section>

<section id="tours" className="bg-slate-50 px-6 py-20 md:px-12">
  <div className="mx-auto max-w-7xl">
    <div className="mb-12 text-center">
      <p className="font-bold uppercase tracking-[0.25em] text-emerald-700">
        Discover Your Next Adventure
      </p>
      <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-5xl">
        Explore Our Tour Packages
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-slate-600">
        From spiritual journeys to exciting holidays, discover unforgettable
        experiences with Discovery Odyssey Travel Group.
      </p>
    </div>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {tours.map((tour, index) => (
        <article
          key={tour.title}
          className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <div className="relative overflow-hidden">
            <img
              src={tour.image}
              alt={tour.title}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold text-emerald-800 shadow">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="p-6">
            <h3 className="mb-3 text-xl font-extrabold text-slate-900">
              {tour.title}
            </h3>
            <p className="mb-6 min-h-16 text-sm leading-6 text-slate-600">
              {tour.description}
            </p>
            <a
              href={tour.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-amber-500 hover:text-slate-900"
            >
              Explore Packages <span>→</span>
            </a>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>


{/* CAR RENTAL PROMOTION */}
<section className="bg-white px-4 py-10 md:px-12 md:py-12">
  <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-slate-900 shadow-lg">
    <div className="grid items-center md:grid-cols-2">
      <div className="p-6 text-white md:p-10">
        <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
          Travel in Comfort
        </p>

        <h2 className="mt-3 text-2xl font-extrabold md:text-4xl">
          Car Rental - Luxury Experience
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
          From sedans and SUVs to Tempo Travellers, Luxury Urbania
          and spacious coaches, find the right vehicle for your journey.
        </p>

        <a
          href="/car-rental"
          className="mt-6 inline-block rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-amber-300"
        >
          Explore Car Rental →
        </a>
      </div>

      <div className="h-56 md:h-72">
        <img
          src="/vehicles/tempo-14.jpg"
          alt="Tempo Traveller rental"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </div>
</section>

      <section id="about" className="bg-emerald-50 px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold">Travel Beyond Expectations</h2>
          <p className="leading-8 text-slate-700">
            At Discovery Odyssey Travel Group, we believe every journey should
            be meaningful and memorable. From spiritual temple tours and
            relaxing holidays to memorable family vacations, we help you
            discover destinations with care and personal attention.
          </p>
        </div>
      </section>

<section className="bg-white px-6 py-20 md:px-12">
  <div className="mx-auto max-w-7xl text-center">
    <p className="font-bold uppercase tracking-[0.25em] text-emerald-700">
      Travel With Confidence
    </p>

    <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-5xl">
      Why Choose Discovery Odyssey?
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
      We make every journey comfortable, memorable and hassle-free.
    </p>

    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          icon: "🌍",
          title: "Customized Tours",
          description: "Travel experiences designed around your interests and budget.",
        },
        {
          icon: "🏨",
          title: "Quality Hotels",
          description: "Comfortable stays and carefully selected accommodation.",
        },
        {
          icon: "🚗",
          title: "Reliable Transport",
          description: "Convenient travel arrangements for a smooth journey.",
        },
        {
          icon: "🤝",
          title: "Personal Assistance",
          description: "Friendly support throughout your travel experience.",
        },
      ].map((item) => (
        <div key={item.title} className="rounded-3xl bg-slate-50 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
          <div className="text-5xl">{item.icon}</div>
          <h3 className="mt-5 text-xl font-bold text-slate-900">
            {item.title}
          </h3>
          <p className="mt-3 leading-7 text-slate-600">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      <section id="contact" className="px-6 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold">Let's Plan Your Next Journey</h2>
        <p className="mb-7 text-slate-600">
          Contact us to start planning your dream holiday.
        </p>
        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-full bg-emerald-700 px-8 py-4 font-bold text-white hover:bg-emerald-800"
        >
          Chat With Us on WhatsApp
        </a>
      </section>

{/* Office Location */}
<section id="location" className="bg-white px-6 py-20 md:px-12">
  <div className="mx-auto max-w-7xl">
    <div className="mb-10 text-center">
      <p className="font-bold uppercase tracking-widest text-emerald-700">
        Visit Our Office
      </p>

      <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
        Find Us on Google Maps
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-slate-600">
        We would be happy to assist you with your travel plans.
        Visit our office or contact us for assistance.
      </p>
    </div>

    <div className="overflow-hidden rounded-3xl shadow-lg">
      <iframe
        src="https://maps.google.com/maps?q=R1%20Marigold%20Plot%2C%20Abi%20Ave%20St%2C%20Srivari%20Nagar%2C%20Singaperumal%20Koil%2C%20Maraimalai%20Nagar%2C%20Tamil%20Nadu%20603204&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title="Discovery Odyssey Travel Group Office Location"
      />
    </div>

    <div className="mt-6 text-center">
      <a
        href="https://www.google.com/maps/search/?api=1&query=R1+Marigold+Plot%2C+Abi+Ave+St%2C+Srivari+Nagar%2C+Singaperumal+Koil%2C+Maraimalai+Nagar%2C+Tamil+Nadu+603204"
        target="_blank"
        rel="noreferrer"
        className="inline-block rounded-full bg-emerald-700 px-8 py-4 font-bold text-white transition hover:bg-amber-400 hover:text-slate-900"
      >
        Get Directions on Google Maps →
      </a>
    </div>
  </div>
</section>

<section id="enquiry" className="bg-emerald-50 px-6 py-20 md:px-12">
  <div className="mx-auto max-w-3xl">
    <div className="mb-10 text-center">
      <p className="font-bold uppercase tracking-widest text-emerald-700">
        Let's Plan Your Journey
      </p>
      <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
        Send Us Your Travel Enquiry
      </h2>
      <p className="mt-4 text-slate-600">
        Share your travel plans. Our team will be happy to assist you.
      </p>
    </div>

    <form
      className="space-y-5 rounded-3xl bg-white p-6 shadow-lg md:p-10"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const message = `Travel Enquiry\nName: ${data.get("name")}\nMobile: ${data.get("phone")}\nDestination: ${data.get("destination")}\nTravel Date: ${data.get("date")}\nTravellers: ${data.get("travellers")}\nMessage: ${data.get("message")}`;
        window.open(
          `https://wa.me/919363299103?text=${encodeURIComponent(message)}`,
          "_blank"
        );
      }}
    >
      <div>
        <label className="mb-2 block font-semibold text-slate-700">Your Name *</label>
        <input name="name" required placeholder="Enter your name" className="w-full rounded-xl border border-slate-300 p-3 text-slate-900" />
      </div>

      <div>
        <label className="mb-2 block font-semibold text-slate-700">Mobile / WhatsApp Number *</label>
        <input name="phone" type="tel" required placeholder="Enter your mobile number" className="w-full rounded-xl border border-slate-300 p-3 text-slate-900" />
      </div>

      <div>
        <label className="mb-2 block font-semibold text-slate-700">Destination Interested In *</label>
        <input name="destination" required placeholder="Example: Kerala, Tamil Nadu, Rajasthan" className="w-full rounded-xl border border-slate-300 p-3 text-slate-900" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block font-semibold text-slate-700">Travel Date</label>
          <input name="date" type="date" className="w-full rounded-xl border border-slate-300 p-3 text-slate-900" />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-700">Number of Travellers</label>
          <input name="travellers" type="number" min="1" placeholder="Example: 4" className="w-full rounded-xl border border-slate-300 p-3 text-slate-900" />
        </div>
      </div>

      <div>
        <label className="mb-2 block font-semibold text-slate-700">Your Requirements</label>
        <textarea name="message" rows={4} placeholder="Tell us about your travel plans..." className="w-full rounded-xl border border-slate-300 p-3 text-slate-900" />
      </div>

      <button type="submit" className="w-full rounded-full bg-emerald-700 px-6 py-4 font-bold text-white transition hover:bg-amber-500 hover:text-slate-900">
        Send Enquiry on WhatsApp
      </button>
    </form>
  </div>
</section>

  

<footer className="bg-slate-950 px-6 py-14 text-white md:px-12">
  <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">

    {/* Company Information */}
    <div>
      <img
        src="/logo.jpg"
        alt="Discovery Odyssey Travel Group"
        className="mb-5 h-20 w-auto rounded bg-white p-2 object-contain"
      />

      <h3 className="text-lg font-extrabold">
        DISCOVERY ODYSSEY TRAVEL GROUP
      </h3>

      <p className="mt-4 leading-7 text-slate-300">
        Your Trusted Travel Partner Worldwide.
        Every Journey Has a Beautiful Destination.
        Let us make your travel dreams come true.
      </p>

      {/* Social Media Links */}
      <div className="mt-6 flex gap-4">
        
<a
  href="https://www.instagram.com/discovery_odyssey_travel/"
  target="_blank"
  rel="noreferrer"
  aria-label="Instagram"
  className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white transition hover:scale-110"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-7 w-7"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
</a>


<a
  href="https://share.google/hNwp3v0rejsRNrQzh"
  target="_blank"
  rel="noreferrer"
  aria-label="Google Business Profile"
  className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className="h-8 w-8"
  >
    <path
      fill="#4285F4"
      d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.9 6.1-15Z"
    />
    <path
      fill="#34A853"
      d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 1.9-6.9 1.9-5.3 0-9.8-3.6-11.4-8.4H5.8v5.2A20 20 0 0 0 24 44Z"
    />
    <path
      fill="#FBBC05"
      d="M12.6 27.5a12 12 0 0 1 0-7v-5.2H5.8a20 20 0 0 0 0 17.4l6.8-5.2Z"
    />
    <path
      fill="#EA4335"
      d="M24 12.1c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 6.1 29.5 4 24 4A20 20 0 0 0 5.8 15.3l6.8 5.2c1.6-4.8 6.1-8.4 11.4-8.4Z"
    />
  </svg>
</a>

      </div>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="mb-5 text-xl font-bold text-amber-400">
        Quick Links
      </h3>

      <ul className="space-y-3 text-slate-300">
        <li><a href="#home" className="hover:text-amber-400">Home</a></li>
        <li><a href="#tours" className="hover:text-amber-400">Tour Packages</a></li>

<li>
  <a href="/car-rental" className="hover:text-amber-400">
    Car Rental
  </a>
</li>

        <li><a href="#about" className="hover:text-amber-400">About Us</a></li>
        <li><a href="#location" className="hover:text-amber-400">Our Location</a></li>
        <li><a href="#enquiry" className="hover:text-amber-400">Contact Us</a></li>
      </ul>
    </div>

    {/* Contact Information */}
    <div>
      <h3 className="mb-5 text-xl font-bold text-amber-400">
        Contact Us
      </h3>

      <div className="space-y-4 text-slate-300">

        <p>
          <span className="font-semibold text-white">Mobile / WhatsApp:</span>
          <br />
          <a
            href="https://wa.me/919363299103"
            target="_blank"
            rel="noreferrer"
            className="hover:text-amber-400"
          >
            +91 9363299103
          </a>
        </p>

        <p>
          <span className="font-semibold text-white">Email Address:</span>
          <br />
          <a
            href="mailto:discoveryodyssey.india@gmail.com"
            className="hover:text-amber-400"
          >
            discoveryodyssey.india@gmail.com
          </a>
        </p>

        <p>
          <span className="font-semibold text-white">Office Address:</span>
          <br />
          R1 Marigold Plot, Abi Ave St, Srivari Nagar,
          Singaperumal Koil, Maraimalai Nagar,
          Tamil Nadu – 603204, India.
        </p>

        <a
          href="#enquiry"
          className="inline-block rounded-full bg-emerald-700 px-6 py-3 font-bold text-white transition hover:bg-amber-400 hover:text-slate-900"
        >
          Send an Enquiry
        </a>

      </div>
    </div>

  </div>

  {/* Copyright */}
  <div className="mx-auto mt-12 max-w-7xl border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
    © 2026 Discovery Odyssey Travel Group. All rights reserved.
    <p className="mt-2">
      Discover the World. Create Memories.
    </p>
  </div>
</footer>

   <a
  href="https://wa.me/919363299103"
  target="_blank"
  rel="noreferrer"
  aria-label="Contact us on WhatsApp"
  className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110"
>
  <svg viewBox="0 0 32 32" className="h-9 w-9" fill="currentColor">
    <path d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 7L3.5 29l6.4-1.7c1.9 1 4 1.5 6.1 1.5 7.2 0 13-5.8 13-12.9S23.2 3 16 3zm0 23.5c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-3.8 1 1-3.7-.2-.4a10.5 10.5 0 1 1 8.8 4.8zm5.8-7.9c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.5 0-.6l-1-2.3c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.8s1.2 3.2 1.4 3.4c.2.2 2.4 3.7 5.9 5.1 2.2.9 3 .9 4.1.8.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.5z"/>
  </svg>
</a>
    </main>
  );
}
