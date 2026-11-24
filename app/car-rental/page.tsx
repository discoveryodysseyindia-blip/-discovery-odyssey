
"use client";

import { useState } from "react";

const whatsapp = "https://wa.me/919363299103";

const vehicles = [
  { name: "Sedan", seats: "Comfortable car", category: "Cars", image: "/vehicles/sedan.jpg" },
  { name: "MUV", seats: "Family travel", category: "SUVs", image: "/vehicles/muv.jpg" },
  { name: "Innova Crysta", seats: "Premium MUV", category: "SUVs", image: "/vehicles/crysta.jpg" },
  { name: "Innova Hycross", seats: "Premium MUV", category: "SUVs", image: "/vehicles/hycross.jpg" },
  { name: "Tempo Traveller", seats: "08 Seater", category: "Tempo", image: "/vehicles/tempo-08.jpg" },
  { name: "Tempo Traveller", seats: "11 Seater", category: "Tempo", image: "/vehicles/tempo-11.jpg" },
  { name: "Tempo Traveller", seats: "14 Seater", category: "Tempo", image: "/vehicles/tempo-14.jpg" },
  { name: "Maharaja Tempo Traveller", seats: "08 Seater", category: "Tempo", image: "/vehicles/maharaja-08.jpg" },
  { name: "Luxury Urbania", seats: "08 Seater", category: "Urbania", image: "/vehicles/urbania-08.jpg" },
  { name: "Luxury Urbania", seats: "12 Seater", category: "Urbania", image: "/vehicles/urbania-12.jpg" },
  { name: "Mini Coach", seats: "18 Seater", category: "Coaches", image: "/vehicles/mini-coach-18.jpg" },
  { name: "Mini Coach", seats: "22 Seater", category: "Coaches", image: "/vehicles/mini-coach-22.jpg" },
  { name: "Mini Coach", seats: "25 Seater", category: "Coaches", image: "/vehicles/mini-coach-25.jpg" },
  { name: "Large Coach", seats: "30 Seater", category: "Coaches", image: "/vehicles/large-coach-30.jpg" },
  { name: "Large Coach", seats: "35 Seater", category: "Coaches", image: "/vehicles/large-coach-35.jpg" },
  { name: "Large Coach", seats: "40 Seater", category: "Coaches", image: "/vehicles/large-coach-40.jpg" },
  { name: "Volvo Coach", seats: "49 Seater", category: "Coaches", image: "/vehicles/volvo-49.jpg" },
];

const categories = ["All", "Cars", "SUVs", "Tempo", "Urbania", "Coaches"];

export default function CarRentalPage() {
  const [filter, setFilter] = useState("All");

  const filteredVehicles =
    filter === "All"
      ? vehicles
      : vehicles.filter((vehicle) => vehicle.category === filter);

  function handleBooking(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const message = `CAR RENTAL ENQUIRY

Name: ${data.get("name")}
Mobile: ${data.get("phone")}
Vehicle: ${data.get("vehicle")}
Pickup Location: ${data.get("pickup")}
Destination: ${data.get("destination")}
Travel Date: ${data.get("date")}
Passengers: ${data.get("passengers")}
Trip Type: ${data.get("trip")}
Requirements: ${data.get("message")}`;

    window.open(
      `${whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HEADER */}
      <header className="flex flex-wrap items-center justify-between gap-5 bg-white px-6 py-4 shadow-md md:px-12">
        <a href="/">
          <img
            src="/logo.jpg"
            alt="Discovery Odyssey Travel Group"
            className="h-16 w-auto object-contain"
          />
        </a>

        <nav className="flex flex-wrap items-center gap-5 text-sm font-semibold">
          <a href="/" className="hover:text-emerald-700">Home</a>
          <a href="/#tours" className="hover:text-emerald-700">Tour Packages</a>
          <a href="/#about" className="hover:text-emerald-700">About Us</a>
          <a href="/#enquiry" className="hover:text-emerald-700">Contact</a>

          <a
            href="#booking"
            className="rounded-full bg-emerald-700 px-6 py-3 font-bold text-white hover:bg-amber-400 hover:text-slate-900"
          >
            Book a Vehicle
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        className="relative bg-cover bg-center px-6 py-28 text-white md:px-12"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(2,6,23,.88),rgba(2,6,23,.45)),url('/vehicles/volvo-49.jpg')",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-amber-300">
            Comfortable Journeys • Reliable Travel
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-7xl">
            Car Rental Services
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
            From comfortable family cars to luxury coaches,
            discover the perfect vehicle for your next journey
            with Discovery Odyssey Travel Group.
          </p>

          <a
            href="#vehicles"
            className="mt-8 inline-block rounded-full bg-amber-400 px-8 py-4 font-bold text-slate-900 hover:bg-amber-300"
          >
            Explore Vehicles →
          </a>
        </div>
      </section>

      {/* VEHICLE FLEET */}
      <section id="vehicles" className="bg-slate-50 px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <p className="font-bold uppercase tracking-widest text-emerald-700">
              Choose Your Ride
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
              Our Vehicle Fleet
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              From private cars to spacious coaches,
              find a vehicle for every journey.
            </p>
          </div>

          {/* FILTER BUTTONS */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-full px-6 py-3 font-semibold transition ${
                  filter === category
                    ? "bg-emerald-700 text-white shadow-lg"
                    : "bg-white text-slate-700 hover:bg-amber-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>


{/* VEHICLE CARDS */}
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {filteredVehicles.map((vehicle, index) => (
    <article
      key={vehicle.image}
      className="group overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-100 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Vehicle Image */}
      <div className="relative overflow-hidden bg-slate-100">
        <img
          src={vehicle.image}
          alt={`${vehicle.name} ${vehicle.seats}`}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-emerald-800 shadow-md">
          {vehicle.category}
        </span>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16">
          <p className="text-sm font-semibold text-white/90">
            {vehicle.seats}
          </p>
        </div>
      </div>

      {/* Vehicle Details */}
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
          Our Fleet · {String(index + 1).padStart(2, "0")}
        </p>

        <h3 className="mt-3 text-2xl font-extrabold text-slate-900">
          {vehicle.name}
        </h3>

        <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
          <span className="text-emerald-700">✓</span>
          Comfortable travel
        </div>

        <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
          <span className="text-emerald-700">✓</span>
          Suitable for trips & tours
        </div>

        <a
          href={`${whatsapp}?text=${encodeURIComponent(
            `Hello Discovery Odyssey Travel Group, I would like to enquire about ${vehicle.name} - ${vehicle.seats}. Please share availability and rental details.`
          )}`}
          target="_blank"
          rel="noreferrer"
          className="mt-6 flex w-full items-center justify-center rounded-xl bg-emerald-700 px-6 py-4 text-sm font-bold text-white transition hover:bg-amber-400 hover:text-slate-900"
        >
          Enquire on WhatsApp →
        </a>
      </div>
    </article>
 
  ))}
</div>

        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="bg-white px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl text-center">

          <p className="font-bold uppercase tracking-widest text-emerald-700">
            Travel With Confidence
          </p>

          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Why Choose Us?
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["🚘", "Wide Fleet", "Vehicles for individuals, families and large groups."],
              ["🤝", "Reliable Service", "Friendly assistance for your travel needs."],
              ["🗺️", "Multiple Destinations", "Travel across South India and beyond."],
              ["📱", "Easy Booking", "Quick booking enquiries through WhatsApp."],
            ].map((item) => (
              <div
                key={item[1]}
                className="rounded-3xl bg-slate-50 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="text-5xl">{item[0]}</div>

                <h3 className="mt-5 text-xl font-bold">
                  {item[1]}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item[2]}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="booking" className="bg-emerald-50 px-6 py-20 md:px-12">
        <div className="mx-auto max-w-3xl">

          <div className="mb-10 text-center">
            <p className="font-bold uppercase tracking-widest text-emerald-700">
              Book Your Journey
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Vehicle Booking Enquiry
            </h2>

            <p className="mt-4 text-slate-600">
              Fill in your journey details.
              Send your enquiry directly to our WhatsApp.
            </p>
          </div>

          <form
            onSubmit={handleBooking}
            className="space-y-5 rounded-3xl bg-white p-6 shadow-lg md:p-10"
          >

            <div>
              <label className="mb-2 block font-semibold">
                Your Name *
              </label>

              <input
                name="name"
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-300 p-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Mobile / WhatsApp Number *
              </label>

              <input
                name="phone"
                type="tel"
                required
                placeholder="Enter your mobile number"
                className="w-full rounded-xl border border-slate-300 p-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Select Vehicle *
              </label>

              <select
                name="vehicle"
                required
                defaultValue=""
                className="w-full rounded-xl border border-slate-300 p-3"
              >
                <option value="" disabled>Select a vehicle</option>

                {vehicles.map((vehicle) => (
                  <option
                    key={vehicle.image}
                    value={`${vehicle.name} - ${vehicle.seats}`}
                  >
                    {vehicle.name} - {vehicle.seats}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label className="mb-2 block font-semibold">
                  Pickup Location *
                </label>

                <input
                  name="pickup"
                  required
                  placeholder="Pickup location"
                  className="w-full rounded-xl border border-slate-300 p-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Destination *
                </label>

                <input
                  name="destination"
                  required
                  placeholder="Destination"
                  className="w-full rounded-xl border border-slate-300 p-3"
                />
              </div>

            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label className="mb-2 block font-semibold">
                  Travel Date *
                </label>

                <input
                  name="date"
                  type="date"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full rounded-xl border border-slate-300 p-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Number of Passengers *
                </label>

                <input
                  name="passengers"
                  type="number"
                  min="1"
                  required
                  placeholder="Passengers"
                  className="w-full rounded-xl border border-slate-300 p-3"
                />
              </div>

            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Trip Type
              </label>

              <select
                name="trip"
                className="w-full rounded-xl border border-slate-300 p-3"
              >
                <option>One Way</option>
                <option>Round Trip</option>
                <option>Local Rental</option>
                <option>Airport Transfer</option>
                <option>Multi-Day Tour</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Additional Requirements
              </label>

              <textarea
                name="message"
                rows={4}
                placeholder="Additional details, luggage, itinerary, etc."
                className="w-full rounded-xl border border-slate-300 p-3"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-emerald-700 px-6 py-4 font-bold text-white transition hover:bg-amber-400 hover:text-slate-900"
            >
              Send Booking Enquiry on WhatsApp →
            </button>

          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 px-6 py-12 text-center text-white">

        <img
          src="/logo.jpg"
          alt="Discovery Odyssey Travel Group"
          className="mx-auto mb-5 h-16 w-auto rounded bg-white p-2 object-contain"
        />

        <h3 className="font-extrabold">
          DISCOVERY ODYSSEY TRAVEL GROUP
        </h3>

        <p className="mt-3 text-slate-300">
          Your Trusted Travel Partner Worldwide.
        </p>

        <p className="mt-3 text-sm text-slate-400">
          Every Journey Has a Beautiful Destination.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-5 text-sm">

          <a href="/" className="hover:text-amber-400">
            Home
          </a>

          <a href="/#tours" className="hover:text-amber-400">
            Tour Packages
          </a>

          <a href="#vehicles" className="hover:text-amber-400">
            Vehicles
          </a>

          <a href="#booking" className="hover:text-amber-400">
            Booking
          </a>

        </div>

        <p className="mt-8 text-sm text-slate-400">
          © 2026 Discovery Odyssey Travel Group. All rights reserved.
        </p>

      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-2xl transition hover:scale-110"
      >
        ☎
      </a>

    </main>
  );
}
