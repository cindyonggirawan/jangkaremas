import hero from "/hero.mov";
import whatWeDo from "/whatwedo.svg";
import whatWeDo1 from "/whatwedo1.jpg";
import whatWeDo2 from "/whatwedo2.jpg";
import whatWeDo3 from "/whatwedo3.jpg";
import { useState, useEffect } from "react";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col justify-between text-white overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={hero}
          autoPlay
          muted
          loop
          playsInline
        ></video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Navbar */}
        <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-16">
          <h1 className="text-lg font-medium tracking-wide text-white">
            Jangkar Emas
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden space-x-10 text-sm md:flex">
            <a href="/jangkaremas/index.html" className="hover:text-[#1b2238]">
              Home
            </a>
            <a
              href="/jangkaremas/catalog.html"
              className="hover:text-[#1b2238]"
            >
              Catalog
            </a>
            <a
              href="/jangkaremas/index.html#contactus"
              className="hover:text-[#1b2238]"
            >
              Contact
            </a>
          </nav>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-20 flex flex-col items-center justify-center space-y-10 bg-black/50 backdrop-blur-md text-lg text-white transition-all duration-500 ease-out transform ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0 pointer-events-none"
          }`}
          onClick={(e) => e.target === e.currentTarget && setIsMenuOpen(false)} // close on backdrop click
        >
          <a
            href="/jangkaremas/index.html"
            className="hover:text-[#1b2238]"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/jangkaremas/catalog.html"
            className="hover:text-[#1b2238]"
            onClick={() => setIsMenuOpen(false)}
          >
            Catalog
          </a>
          <a
            href="/jangkaremas/index.html#contactus"
            className="hover:text-[#1b2238]"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>

          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex max-w-5xl flex-1 flex-col justify-center px-6 md:px-16">
          <h2 className="mb-8 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            Leading as No.1 Indonesia’s
            <br className="hidden sm:block" />
            Fish Export Worldwide,
            <br className="hidden sm:block" />
            Freshness You Can Taste
          </h2>
          <div className="mb-12 grid grid-cols-1 gap-6 text-sm sm:grid-cols-3 sm:text-base">
            <p>
              Premium Seafood
              <br />
              You Can Trust
            </p>
            <p>
              Sourced Locally
              <br />
              From Sorong
            </p>
            <p>
              Delivered Globally
              <br />
              To The World
            </p>
          </div>
          <a
            href="#whatwedo"
            className="inline-flex w-max items-center rounded-full bg-white px-6 py-3 font-medium text-[#242E49] transition hover:bg-gray-300"
          >
            <span>What we do</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* Bottom Padding */}
        <div className="pb-8 md:pb-12"></div>
      </section>

      {/* ABOUT US (two-column: label left, big paragraph anchored right) */}
      <section
        id="aboutus"
        className="bg-white px-6 py-16 text-[#242E49] md:px-16"
      >
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[0.5fr_3.5fr]">
          {/* Left narrow column: label */}
          <h3 className="text-left text-sm font-medium text-[#242E49] md:text-base">
            About Us
          </h3>

          {/* Right wide column: big paragraph anchored to the right */}
          <p className="ml-auto text-right text-2xl leading-tight font-semibold text-[#242E49] sm:text-3xl md:text-4xl lg:text-5xl">
            At Jangkar Emas, we believe in sustainable seafood and inclusive
            growth. We support local Papuan fishermen while providing quality
            fish to customers in Indonesia and around the world. Our logistics
            partnerships ensure every shipment arrives fresh and safe.
          </p>
        </div>
      </section>

      {/* WHAT WE DO (fixed: heading position, no shadows, big image radii) */}
      <section
        id="whatwedo"
        className="bg-white px-6 py-16 text-[#242E49] md:px-16"
      >
        <div className="mb-6 flex flex-col gap-10 md:mb-12 md:flex-row md:items-center md:justify-between">
          {/* Left Title Group */}
          <div>
            <h3 className="mb-3 text-left text-sm font-medium text-[#242E49] md:text-base">
              What We Do
            </h3>
            <p className="text-2xl leading-tight font-semibold text-[#242E49] sm:text-3xl md:text-4xl lg:text-5xl">
              Markets Fresh and Frozen
              <br />
              Fish across the Globe
            </p>
          </div>

          {/* Right Info Group */}
          <div className="hidden max-w-xs flex-col items-center text-center md:flex md:items-end md:text-right">
            <img
              src={whatWeDo}
              alt="whatwedo"
              className="mb-3 h-8 w-8 text-gray-500"
            />
            <p className="text-sm leading-relaxed text-gray-500">
              Jangkar Emas has been delivering
              <br />
              fish from Sorong to domestic and
              <br />
              international markets.
            </p>
          </div>
        </div>

        {/* Card Images */}
        {/* Images grid: NO shadow on cards; images have large corner radius */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 (image only + title below) */}
          <div>
            <div className="overflow-hidden rounded-xl">
              <img src={whatWeDo1} className="block h-64 w-full object-cover" />
            </div>
            <h4 className="mt-4 text-xl font-semibold text-[#242E49] md:text-2xl">
              🐟 Catching the Best from Indonesia’s Waters
            </h4>
            <span className="mt-3 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">
              Catch
            </span>
          </div>

          {/* Card 2 */}
          <div>
            <div className="overflow-hidden rounded-xl">
              <img src={whatWeDo2} className="block h-64 w-full object-cover" />
            </div>
            <h4 className="mt-4 text-xl font-semibold text-[#242E49] md:text-2xl">
              ✈️ Delivering with Trusted Logistics Providers
            </h4>
            <span className="mt-3 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">
              Deliver
            </span>
          </div>

          {/* Card 3 */}
          <div>
            <div className="overflow-hidden rounded-xl">
              <img src={whatWeDo3} className="block h-64 w-full object-cover" />
            </div>
            <h4 className="mt-4 text-xl font-semibold text-[#242E49] md:text-2xl">
              🌿 Empowering Coastal & Local Fishing Communities
            </h4>
            <span className="mt-3 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">
              Empower
            </span>
          </div>
        </div>
      </section>

      {/* OUR COMMITMENT SECTION */}
      <section
        id="ourcommitment"
        className="bg-gray-50 px-6 py-16 text-[#242E49] md:px-16"
      >
        <div className="md:flex md:items-center md:gap-12">
          {/* Left Section */}
          <div className="mb-12 md:mb-0 md:w-1/2">
            <h3 className="mb-3 text-left text-sm font-medium text-[#242E49] md:text-base">
              Our Commitment
            </h3>
            <p className="mb-8 text-2xl leading-tight font-semibold text-[#242E49] sm:text-3xl md:text-4xl lg:text-5xl">
              Trusted by 12+ countries across Asia, Europe & the Middle East
            </p>
            <p className="text-base leading-relaxed text-gray-500">
              Since 2015, Jangkar Emas has built a reputation for reliability,
              quality, and ethical sourcing. Backed by a decade of experience,
              we’ve connected Indonesian fisheries to the world while investing
              in the people behind every catch. These numbers reflect our
              dedication, not just to seafood, but to sustainability, community,
              and global trust.
            </p>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-2 gap-10 text-center md:w-1/2">
            {/* Box 1 */}
            <div>
              <p className="mb-2 text-5xl font-bold text-[#242E49] sm:text-6xl">
                10+
              </p>
              <p className="text-sm leading-relaxed text-gray-500">
                years of experience
              </p>
            </div>

            {/* Box 2 */}
            <div>
              <p className="mb-2 text-5xl font-bold text-[#242E49] sm:text-6xl">
                50+
              </p>
              <p className="text-sm leading-relaxed text-gray-500">
                local fishermen in Papua
              </p>
            </div>

            {/* Box 3 */}
            <div>
              <p className="mb-2 text-5xl font-bold text-[#242E49] sm:text-6xl">
                1000+
              </p>
              <p className="text-sm leading-relaxed text-gray-500">
                tons of fish delivered annually
              </p>
            </div>

            {/* Box 4 */}
            <div>
              <p className="mb-2 text-5xl font-bold text-[#242E49] sm:text-6xl">
                98%
              </p>
              <p className="text-sm leading-relaxed text-gray-500">
                on-time delivery rate
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="ourproject"
        className="bg-white px-6 py-16 text-[#242E49] md:px-16"
      >
        <div className="mb-6 md:mb-12">
          <h3 className="mb-3 text-left text-sm font-medium text-[#242E49] md:text-base">
            Our Projects
          </h3>
          <p className="text-2xl leading-tight font-semibold text-[#242E49] sm:text-3xl md:text-4xl lg:text-5xl">
            See What We’ve Been Working On
          </p>
        </div>

        {/* Container for tablet & mobile */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:hidden">
          {/* 6 images stacked for tablet & mobile */}
          <div className="relative h-64 overflow-hidden rounded-xl">
            <img
              src="https://picsum.photos/800/600"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute bottom-4 left-4 text-xl font-semibold text-white md:text-2xl">
              🌍 International Export Expansion
            </div>
          </div>

          <div className="relative h-64 overflow-hidden rounded-xl">
            <img
              src="https://picsum.photos/800/601"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute bottom-4 left-4 text-xl font-semibold text-white md:text-2xl">
              ❄️ Cold Chain Logistics Partnership
            </div>
          </div>

          <div className="relative h-64 overflow-hidden rounded-xl">
            <img
              src="https://picsum.photos/800/602"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute bottom-4 left-4 text-xl font-semibold text-white md:text-2xl">
              🚤 Papuan Fishermen Development Program
            </div>
          </div>

          <div className="relative h-64 overflow-hidden rounded-xl">
            <img
              src="https://picsum.photos/800/603"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute bottom-4 left-4 text-xl font-semibold text-white md:text-2xl">
              🧊 Frozen Facility Optimization (Sorong Hub)
            </div>
          </div>

          <div className="relative h-64 overflow-hidden rounded-xl">
            <img
              src="https://picsum.photos/800/604"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute bottom-4 left-4 text-xl font-semibold text-white md:text-2xl">
              🌱 Sustainable Catch & Traceability Initiative
            </div>
          </div>

          <div className="relative h-64 overflow-hidden rounded-xl">
            <img
              src="https://picsum.photos/800/605"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute bottom-4 left-4 text-xl font-semibold text-white md:text-2xl">
              ✈️ Air Freight Fresh Fish Program
            </div>
          </div>
        </div>

        {/* Desktop: two separate grids for custom column ratios */}
        <div className="mb-6 hidden gap-6 lg:grid lg:grid-cols-[1fr_1.5fr_2.5fr]">
          <div className="relative h-64 overflow-hidden rounded-xl">
            <img
              src="https://picsum.photos/800/600"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute bottom-4 left-4 text-xl font-semibold text-white md:text-2xl">
              🌍 International Export Expansion
            </div>
          </div>

          <div className="relative h-64 overflow-hidden rounded-xl">
            <img
              src="https://picsum.photos/800/601"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute bottom-4 left-4 text-xl font-semibold text-white md:text-2xl">
              ❄️ Cold Chain Logistics Partnership
            </div>
          </div>

          <div className="relative h-64 overflow-hidden rounded-xl">
            <img
              src="https://picsum.photos/800/602"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute bottom-4 left-4 text-xl font-semibold text-white md:text-2xl">
              🚤 Papuan Fishermen Development Program
            </div>
          </div>
        </div>

        <div className="hidden gap-6 lg:grid lg:grid-cols-[2.5fr_1.5fr_1fr]">
          <div className="relative h-64 overflow-hidden rounded-xl">
            <img
              src="https://picsum.photos/800/603"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute bottom-4 left-4 text-xl font-semibold text-white md:text-2xl">
              🧊 Frozen Facility Optimization (Sorong Hub)
            </div>
          </div>

          <div className="relative h-64 overflow-hidden rounded-xl">
            <img
              src="https://picsum.photos/800/604"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute bottom-4 left-4 text-xl font-semibold text-white md:text-2xl">
              🌱 Sustainable Catch & Traceability Initiative
            </div>
          </div>

          <div className="relative h-64 overflow-hidden rounded-xl">
            <img
              src="https://picsum.photos/800/605"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute bottom-4 left-4 text-xl font-semibold text-white md:text-2xl">
              ✈️ Air Freight Fresh Fish Program
            </div>
          </div>
        </div>
      </section>

      <section
        id="ourvalues"
        className="bg-white px-6 py-16 text-[#242E49] md:px-16"
      >
        <div className="grid items-center md:grid-cols-2 md:gap-12">
          {/* Left Image */}
          <div className="mb-6 h-full w-full md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
              className="h-32 w-full rounded-2xl object-cover object-center md:h-full"
            />
          </div>

          {/* Right Content */}
          <div className="flex h-full flex-col justify-center">
            <h3 className="mb-3 text-left text-sm font-medium text-[#242E49] md:text-base">
              Our Values
            </h3>
            <p className="mb-8 text-2xl leading-tight font-semibold text-[#242E49] sm:text-3xl md:text-4xl lg:text-5xl">
              The Principles Behind Every Catch
            </p>

            {/* Icon Grid */}
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              {/* Item 1 */}
              <div>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-blue-600"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12m-19.5 0l8.954 8.955c.44.439 1.152.439 1.591 0L21.75 12m-19.5 0h19.5"
                    />
                  </svg>
                </div>
                <p className="mb-2 text-lg font-semibold text-[#242E49]">
                  Transparency
                </p>
                <p className="text-base text-gray-500">
                  We ensure clear, honest, and traceable processes from sea to
                  shipment.
                </p>
              </div>

              {/* Item 2 */}
              <div>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-blue-600"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12m-19.5 0l8.954 8.955c.44.439 1.152.439 1.591 0L21.75 12m-19.5 0h19.5"
                    />
                  </svg>
                </div>
                <p className="mb-2 text-lg font-semibold text-[#242E49]">
                  Efficiency
                </p>
                <p className="text-base text-gray-500">
                  We deliver fresh and frozen fish quickly, reliably, and
                  cost-effectively.
                </p>
              </div>

              {/* Item 3 */}
              <div>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-blue-600"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12m-19.5 0l8.954 8.955c.44.439 1.152.439 1.591 0L21.75 12m-19.5 0h19.5"
                    />
                  </svg>
                </div>
                <p className="mb-2 text-lg font-semibold text-[#242E49]">
                  Respect
                </p>
                <p className="text-base text-gray-500">
                  We value our partners, empower local fishermen, and protect
                  the ocean.
                </p>
              </div>

              {/* Item 4 */}
              <div>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-blue-600"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12m-19.5 0l8.954 8.955c.44.439 1.152.439 1.591 0L21.75 12m-19.5 0h19.5"
                    />
                  </svg>
                </div>
                <p className="mb-2 text-lg font-semibold text-[#242E49]">
                  Passion
                </p>
                <p className="text-base text-gray-500">
                  We are committed to delivering exceptional seafood with
                  integrity and care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="quote"
        className="bg-gray-50 px-6 py-16 text-[#242E49] md:px-16"
      >
        <div className="grid grid-cols-1 items-center md:grid-cols-[65fr_35fr] md:gap-12">
          {/* Quote Section */}
          <div className="flex flex-col justify-between">
            {/* Quote */}
            <blockquote className="text-left text-xl font-semibold text-[#242E49] italic md:text-2xl">
              <span className="mb-4 block font-serif text-6xl text-gray-500">
                “
              </span>
              We built Jangkar Emas not just to sell seafood, but to create
              lasting value for local communities, deliver honest quality to the
              world, and do it all with respect for the ocean that sustains us.
            </blockquote>

            {/* Signature */}
            <div className="mt-8 text-right">
              <p className="mb-2 font-[cursive] text-3xl text-gray-400 md:text-4xl">
                Elon Musk
              </p>
              <p className="text-sm tracking-wide text-gray-500">
                Founder & CEO at Jangkar Emas
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="hidden h-full w-full md:flex md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
              className="h-auto w-full rounded-2xl object-cover object-center md:h-full"
            />
          </div>
        </div>
      </section>

      <section
        id="ourvideo"
        className="bg-white px-6 py-16 text-[#242E49] md:px-16"
      >
        <div className="mb-6 md:mb-12">
          <h3 className="mb-3 text-left text-sm font-medium text-[#242E49] md:text-base">
            Our Video
          </h3>
          <p className="text-2xl leading-tight font-semibold text-[#242E49] sm:text-3xl md:text-4xl lg:text-5xl">
            Check Out Our Latest Highlight
          </p>
        </div>

        <div className="flex justify-center">
          <div style={{ width: "325px" }}>
            <div className="flex flex-col p-3 gap-3 rounded-t-[0.5rem] border border-gray-200 border-b-0">
              <div className="flex items-center gap-3">
                <img
                  src="https://picsum.photos/800/605"
                  alt="Profile picture"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col">
                  <a
                    className="text-sm font-semibold text-[#242E49]"
                    target="_blank"
                    title="@jangkaremas.id"
                    href="https://www.tiktok.com/@jangkaremas.id?refer=embed"
                  >
                    @jangkaremas.id
                  </a>
                  <p className="text-xs text-gray-500">
                    June 12<sup>th</sup> 2025
                  </p>
                </div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Tiktok_icon.svg/96px-Tiktok_icon.svg.png?20240827133148"
                  className="ml-auto w-5 h-5"
                />
              </div>

              <p className="text-sm text-[#242E49] flex flex-wrap gap-x-1">
                sound on
                <a
                  title="supplier"
                  target="_blank"
                  href="https://www.tiktok.com/tag/supplier?refer=embed"
                >
                  #supplier
                </a>
                <a
                  title="frozenfish"
                  target="_blank"
                  href="https://www.tiktok.com/tag/frozenfish?refer=embed"
                >
                  #frozenfish
                </a>
                <a
                  title="frozenfishfood"
                  target="_blank"
                  href="https://www.tiktok.com/tag/frozenfishfood?refer=embed"
                >
                  #frozenfishfood
                </a>
                <a
                  title="wholefish"
                  target="_blank"
                  href="https://www.tiktok.com/tag/wholefish?refer=embed"
                >
                  #wholefish
                </a>
                <a
                  title="tuna"
                  target="_blank"
                  href="https://www.tiktok.com/tag/tuna?refer=embed"
                >
                  #tuna
                </a>
                <a
                  title="kakapmerah"
                  target="_blank"
                  href="https://www.tiktok.com/tag/kakapmerah?refer=embed"
                >
                  #kakapmerah
                </a>
                <a
                  title="anggoli"
                  target="_blank"
                  href="https://www.tiktok.com/tag/anggoli?refer=embed"
                >
                  #anggoli
                </a>
                <a
                  title="kerapu"
                  target="_blank"
                  href="https://www.tiktok.com/tag/kerapu?refer=embed"
                >
                  #kerapu
                </a>
                <a
                  title="eksporikan"
                  target="_blank"
                  href="https://www.tiktok.com/tag/eksporikan?refer=embed"
                >
                  #eksporikan
                </a>
                <a
                  title="exportfish"
                  target="_blank"
                  href="https://www.tiktok.com/tag/exportfish?refer=embed"
                >
                  #exportfish
                </a>
                <a
                  title="fishexporter"
                  target="_blank"
                  href="https://www.tiktok.com/tag/fishexporter?refer=embed"
                >
                  #fishexporter
                </a>
                <a
                  title="eksportirindonesia"
                  target="_blank"
                  href="https://www.tiktok.com/tag/eksportirindonesia?refer=embed"
                >
                  #eksportirindonesia
                </a>
                <a
                  title="lautpapua"
                  target="_blank"
                  href="https://www.tiktok.com/tag/lautpapua?refer=embed"
                >
                  #lautpapua
                </a>
                <a
                  title="eksporpemula"
                  target="_blank"
                  href="https://www.tiktok.com/tag/eksporpemula?refer=embed"
                >
                  #eksporpemula
                </a>
                <a
                  title="eksporhasillaut"
                  target="_blank"
                  href="https://www.tiktok.com/tag/eksporhasillaut?refer=embed"
                >
                  #eksporhasillaut
                </a>
                <a
                  title="eksporikan"
                  target="_blank"
                  href="https://www.tiktok.com/tag/eksporikan?refer=embed"
                >
                  #eksporikan
                </a>
                <a
                  title="supplierikan"
                  target="_blank"
                  href="https://www.tiktok.com/tag/supplierikan?refer=embed"
                >
                  #supplierikan
                </a>
                <a
                  title="ikanindonesia"
                  target="_blank"
                  href="https://www.tiktok.com/tag/ikanindonesia?refer=embed"
                >
                  #ikanindonesia
                </a>
              </p>
            </div>

            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@jangkaremas.id/video/7514912319411883320"
              data-video-id="7514912319411883320"
              style={{ width: "325px", margin: 0 }}
            >
              <section></section>
            </blockquote>
          </div>
          <script async src="https://www.tiktok.com/embed.js"></script>
        </div>
      </section>

      <section
        id="contactus"
        className="bg-white px-6 py-16 text-[#242E49] md:px-16"
      >
        <div className="mb-6 md:mb-12">
          <h3 className="mb-3 text-left text-sm font-medium text-[#242E49] md:text-base">
            Contact Us
          </h3>
          <p className="text-2xl leading-tight font-semibold text-[#242E49] sm:text-3xl md:text-4xl lg:text-5xl">
            Get In Touch with Our Team
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="flex flex-col items-start rounded-2xl border border-gray-200 bg-white p-6">
            {/* Icon square: white bg + border */}
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white">
              {/* SVG stroke uses currentColor; class sets it blue */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-blue-600"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12m-19.5 0l8.954 8.955c.44.439 1.152.439 1.591 0L21.75 12m-19.5 0h19.5"
                />
              </svg>
            </div>

            <h3 className="mb-2 text-lg font-semibold text-[#242E49]">Phone</h3>
            <p className="text-sm leading-relaxed text-blue-600">
              +62 123-456-7890
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-start rounded-2xl border border-gray-200 bg-white p-6">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-blue-600"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12m-19.5 0l8.954 8.955c.44.439 1.152.439 1.591 0L21.75 12m-19.5 0h19.5"
                />
              </svg>
            </div>

            <h3 className="mb-2 text-lg font-semibold text-[#242E49]">
              Whatsapp
            </h3>
            <p className="text-sm leading-relaxed text-blue-600">
              +62 123-456-7890
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-start rounded-2xl border border-gray-200 bg-white p-6">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-blue-600"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12m-19.5 0l8.954 8.955c.44.439 1.152.439 1.591 0L21.75 12m-19.5 0h19.5"
                />
              </svg>
            </div>

            <h3 className="mb-2 text-lg font-semibold text-[#242E49]">Email</h3>
            <p className="text-sm leading-relaxed text-blue-600">
              jangkaremas@mail.id
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-start rounded-2xl border border-gray-200 bg-white p-6">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-blue-600"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12m-19.5 0l8.954 8.955c.44.439 1.152.439 1.591 0L21.75 12m-19.5 0h19.5"
                />
              </svg>
            </div>

            <h3 className="mb-2 text-lg font-semibold text-[#242E49]">
              Main Address
            </h3>
            <p className="text-sm leading-relaxed text-blue-600">
              Sorong City, West Papua
            </p>
          </div>
        </div>
      </section>

      <div className="h-96 w-full overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.910695139303!2d-74.01027892401362!3d40.72009667139315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598e03853d0d%3A0x5a8f5790707e0bdb!2sSoHo%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sid!4v1728640000000!5m2!1sen!2sid"
          className="h-full w-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <footer className="mt-auto w-full bg-[#262E49] px-6 py-4 text-left text-white md:px-16">
        <p className="text-sm">
          &copy; 2025 Jangkar Emas. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Home;
