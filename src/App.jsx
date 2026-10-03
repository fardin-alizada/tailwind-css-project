const projects = [
  {
    id: 1,
    year: "2026",
    title: "TrailType",
    description: "Modern design inspired by the great outdoors.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },

  {
    id: 2,
    year: "2026",
    title: "The Spark Sessions",
    description: "A podcast for creators chasing meaningful work.",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc"
  },

  {
    id: 3,
    year: "2025",
    title: "Into the Wild",
    description: "A raw journey through nature's extremes.",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5"
  }
];


const posts = [
  {
    id: 1,
    date: "Jul 2025",
    title: "How I built my Framer template empire",
  },
  {
    id: 2,
    date: "Jun 2025",
    title: "My journey from $0 to $10K MRR",
  },
  {
    id: 3,
    date: "Jun 2025",
    title: "Is vibe coding here to stay?",
  },
  {
    id: 4,
    date: "May 2025",
    title: "Don't complain, create!",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-16">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-500">
          LW
        </div>

        {/* Desktop Menu */}
        <div className="hidden gap-8 md:flex">
          <a href="#" className="hover:text-orange-500 transition">
            About
          </a>

          <a href="#" className="hover:text-orange-500 transition">
            Work
          </a>

          <a href="#" className="hover:text-orange-500 transition">
            Blog
          </a>

          <a href="#" className="hover:text-orange-500 transition">
            Contact
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          <span className="hidden md:block text-xl">𝕏</span>
          <span className="hidden md:block text-xl">in</span>

          <button className="text-xl">
            ☼
          </button>

          {/* Mobile Menu */}
          <button className="text-2xl md:hidden">
            ☰
          </button>
        </div>
      </nav>


      {/* Main */}
      <main className="px-6 pt-24 md:px-12 md:pt-32 lg:px-16 lg:pt-40">

        {/* Name + Location */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <div>
            <h1 className="text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
              Luke Williams
            </h1>

            <p className="mt-5 text-lg font-semibold md:text-xl">
              Founder – Matrix Designs
            </p>
          </div>


          {/* Location */}
          <div className="flex items-center gap-2 text-lg font-semibold md:mb-2">
            <span>📍</span>
            <span>New York</span>
          </div>

        </div>


        {/* Description */}
        <section className="mt-16 max-w-5xl space-y-8 text-lg leading-relaxed text-gray-200 md:mt-24 md:text-xl">

          <p>
            Hi there! I'm an adventurer based in New York, with a
            background in the entertainment industry. These days,
            I'm driven by a love for creativity and innovation,
            constantly exploring new ways to connect ideas and
            build something meaningful.
          </p>

          <p>
            When I'm not immersed in my projects, you'll find me
            outdoors – scaling rock faces, hiking scenic trails,
            and embracing the energy of nature. Life is all about
            climbing to new heights, both literally and figuratively!
          </p>

        </section>

        {/* Latest Projects */}

<section className="mt-24 px-6 md:px-12 lg:px-16">

  {/* Section Header */}

  <div className="flex items-center justify-between border-b border-gray-600 pb-4">

    <h2 className="text-2xl font-bold md:text-3xl">
      Latest Projects
    </h2>

    <a
      href="#"
      className="text-sm font-medium hover:text-orange-500 transition"
    >
      View all
    </a>

  </div>


  {/* Projects Grid */}

  <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

    {projects.map((project) => (

      <div key={project.id} className="group cursor-pointer">

        {/* Image */}

        <div className="relative overflow-hidden rounded-lg">

          <img
            src={project.image}
            alt={project.title}
            className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
          />

          {/* Year */}

          <span className="absolute left-5 top-3 text-5xl font-light text-white">
            {project.year}
          </span>

        </div>


        {/* Project Information */}

        <div className="mt-3">

          <h3 className="text-xl font-bold">
            {project.title}
          </h3>

          <p className="mt-2 text-gray-300 leading-relaxed">
            {project.description}
          </p>

        </div>

      </div>

    ))}

  </div>

</section>

{/* latest posts */}
<section className="mt-24 px-6 md:px-12 lg:px-16">

  {/* Header */}
  <div className="flex items-center justify-between border-b border-orange-500 pb-4">

    <h2 className="text-2xl font-bold md:text-3xl">
      Latest Posts
    </h2>

    <a
      href="#"
      className="text-sm font-medium transition hover:text-orange-500"
    >
      View all
    </a>

  </div>


  {/* Posts */}
  <div>

    {posts.map((post) => (

      <article
        key={post.id}
        className="grid grid-cols-1 gap-2 border-b border-gray-600 py-5 transition hover:text-orange-500 sm:grid-cols-[100px_1fr] sm:gap-8"
      >

        {/* Date */}
        <span className="text-sm text-gray-300 sm:text-base">
          {post.date}
        </span>


        {/* Title */}
        <h3 className="text-lg font-semibold md:text-xl">
          {post.title}
        </h3>

      </article>

    ))}

  </div>

</section>

{/* contact */}
<section className="mx-6 mt-20 border border-gray-700 p-5 md:mx-12 md:p-8 lg:mx-16">
  
  <div className="flex flex-col gap-6 md:flex-row md:items-center">

    {/* Image */}
    <img
      src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
      alt="Mountain adventure"
      className="h-40 w-full rounded-md object-cover md:h-40 md:w-52"
    />

    {/* Content */}
    <div className="flex-1">

      <h2 className="text-2xl font-bold md:text-3xl">
        Subscribe to my Newsletter
      </h2>

      {/* Form */}
      <form className="mt-5 flex flex-col gap-3 sm:flex-row">

        <input
          type="email"
          placeholder="name@email.com"
          className="w-full rounded-md border border-gray-600 bg-transparent px-3 py-3 outline-none placeholder:text-gray-400 focus:border-orange-500"
        />

        <button
          type="submit"
          className="rounded-md bg-white px-5 py-3 text-black transition hover:bg-orange-500 hover:text-white"
        >
          Subscribe
        </button>

      </form>

      <p className="mt-3 text-sm leading-relaxed text-gray-300">
        Sign up to stay updated about my latest work and adventures.
        <i> No Spam, No BS. Promise!</i>
      </p>

    </div>

  </div>

</section>

{/* footer of the page */}
<footer className="mx-6 mt-10 border-t border-gray-600 px-0 py-6 md:mx-12 lg:mx-16">

  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

    {/* Copyright */}
    <p className="text-sm text-gray-300">
      © Luke Williams | 2026
    </p>


    {/* Navigation */}
    <nav className="flex flex-wrap gap-5 text-sm">

      <a
        href="#"
        className="text-orange-500 transition hover:text-white"
      >
        Home
      </a>

      <a
        href="#"
        className="transition hover:text-orange-500"
      >
        About
      </a>

      <a
        href="#"
        className="transition hover:text-orange-500"
      >
        Work
      </a>

      <a
        href="#"
        className="transition hover:text-orange-500"
      >
        Blog
      </a>

      <a
        href="#"
        className="transition hover:text-orange-500"
      >
        Contact
      </a>

    </nav>

  </div>

</footer>

      </main>
    </div>
  );
}



export default App;