function Team() {
  return (
    <body className="bg-white">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Meet Our Talented Team
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              We're a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Team member"
                  className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      href="#"
                      className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800">Alex Morgan</h3>
                <p className="text-indigo-600 font-medium">CEO & Founder</p>
                <p className="text-gray-600 mt-2">
                  Visionary leader with 15+ years of experience in tech
                  innovation.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Team member"
                  className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      href="#"
                      className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800">
                  Sarah Johnson
                </h3>
                <p className="text-indigo-600 font-medium">
                  Chief Design Officer
                </p>
                <p className="text-gray-600 mt-2">
                  Award-winning designer with a passion for creating beautiful,
                  functional interfaces.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Team member"
                  className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      href="#"
                      className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800">
                  Michael Chen
                </h3>
                <p className="text-indigo-600 font-medium">CTO</p>
                <p className="text-gray-600 mt-2">
                  Tech genius with expertise in AI and machine learning
                  technologies.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Team member"
                  className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      href="#"
                      className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800">
                  Emily Rodriguez
                </h3>
                <p className="text-indigo-600 font-medium">
                  Marketing Director
                </p>
                <p className="text-gray-600 mt-2">
                  Creative strategist who excels at building and promoting
                  brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Team;
