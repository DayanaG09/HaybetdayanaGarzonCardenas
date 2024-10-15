import React from "react";

function Cart(cart) {
  console.log(cart);
  return (
    <div class="mt-8">
      <button
        style={{ margin: "10px" }}
        onClick={cart.onBack}
        type="button"
        class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
      >
        Volver
      </button>
      <div class="flow-root">
        <ul role="list" class="-my-6 divide-y divide-gray-200">
          {cart.cart.map((element) => (
            <li class="flex py-6">
              <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src=""
                  alt=""
                  class="h-full w-full object-cover object-center"
                />
              </div>

              <div class="ml-4 flex flex-1 flex-col">
                <div>
                  <div class="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <a href="#">{element.name}</a>
                    </h3>
                    <p class="ml-4">$ {element.price}</p>
                  </div>
                </div>
                <div class="flex flex-1 items-end justify-between text-sm">
                  <div class="flex">
                    <button
                      type="button"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cart;
