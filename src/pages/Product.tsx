import React from "react";

export const Product = () => {
  return (
    <div>
      {/* SECTION PRODUK */}
      <section className="bg-white">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            {/* Wines */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Wines
                </h3>
              </a>
            </div>

            {/* Gin + Whiskey + Vodka */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src="https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Gin
                </h3>
              </a>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Whiskey
                  </h3>
                </a>
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Vodka
                  </h3>
                </a>
              </div>
            </div>

            {/* Brandy */}
            <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://images.unsplash.com/photo-1693680501357-a342180f1946?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Brandy
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION IMAGE CARDS */}
      <section className="flex flex-col gap-10 w-full justify-center mt-10 bg-white">
        <h1 className="text-2xl text-center font-sans uppercase font-bold text-gray-700">
          Image Cards
        </h1>
        <p className="text-center">
          Each of the cards have texts descriptions, which get displayed when
          you hover the images. Just some dummy texts.
        </p>
        <section className="flex flex-wrap gap-10 w-full justify-center items-center">
          {[1, 2, 3].map((item, index) => {
            const images = [
              "https://cdn.pixabay.com/photo/2020/02/23/15/09/woman-4873600_960_720.jpg",
              "https://cdn.pixabay.com/photo/2020/09/20/16/27/model-5587623_960_720.jpg",
              "https://cdn.pixabay.com/photo/2019/12/10/13/31/woman-4685862_960_720.jpg",
            ];
            return (
              <div key={index} className="relative group w-80">
                <span className="flex flex-col justify-center items-center">
                  <img
                    src={images[index]}
                    alt={`Sample ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <h1 className="-mt-10 text-xl font-bold bg-black text-white w-full py-2 text-center">
                    HOVER THE IMAGE {index + 1}
                  </h1>
                </span>
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 text-center font-sans">
                  <h2 className="text-xl font-bold text-gray-100">
                    JUST BEFORE TAKE-OFF
                  </h2>
                  <p className="text-gray-50 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit autem quaerat explicabo, voluptatum, assumenda placeat
                    reiciendis aliquid itaque voluptates facere odit laboriosam,
                    exercitationem aperiam labore dolorem quasi quia minima.
                  </p>
                </div>
              </div>
            );
          })}
        </section>
      </section>
    </div>
  );
};
