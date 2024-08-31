import React from "react";

function Products({ onProductSelect }) {
  var productsListOrigin = [
    {
      id: 1,
      name: "Bolso A",
      price: 49.99,
      imageUrl: "img/mochila.jpg",
      coloresImg: [
        { id: 1, img: "../img/mochila.jpg", color: "#77dd77" },
        { id: 2, img: "../img/mochila.jpg", color: "#84b6f4" },
      ],
    },
    {
      id: 2,
      name: "Bolso B",
      price: 59.99,
      imageUrl: "img/bolsoViajero.png",
      coloresImg: [
        { id: 1, img: "url", color: "#fdcae1" },
        { id: 2, img: "url", color: "#fdfd96" },
      ],
    },
  ];

  return (
    <div>
      <div style={{ margin: "10px" }}>
        <h1>Lista de productos</h1>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 contenedor-list-general">
          {productsListOrigin.map((element) => (
            <div className="group relative" key={element.id}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={element.imageUrl}
                  alt=""
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <button onClick={() => onProductSelect(element)}>
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      {element.name}
                    </button>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {element.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
