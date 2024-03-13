/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
export default function Header({
  cart,
  totalPrice,
  handleAddToCart,
  removeToCart,
}) {
  return (
    <div className="flex justify-between items-center sticky top-0 py-4 border-b bg-white ">
      <div>
        <h1 className="text-lg font-bold">BOTTLES</h1>
      </div>
      <div className="flex items-center space-x-2">
        <Sheet>
          <SheetTrigger>Cart({cart.length || 0})</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="border-b text-center">
                <p>SHOPPING CART</p>
                <p>TOTAL : ${totalPrice}</p>
              </SheetTitle>
              <SheetDescription className="mt-4 overflow-y-auto h-screen">
                {!cart.length && (
                  <p className="text-center text-lg font-medium ">
                    Cart Is Empty!!
                  </p>
                )}
                {cart?.map((product) => {
                  return (
                    <div
                      key={product.id}
                      className="bg-white py-2 border mt-2 px-2"
                    >
                      <div>
                        <div>
                          <img className="w-10 h-10" src={product.img} alt="" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="">{product.name}</h5>
                            <p>${product?.price * product.quantity}</p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <button onClick={() => handleAddToCart(product)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                              </svg>
                            </button>
                            <p>{product?.quantity}</p>
                            <button onClick={() => removeToCart(product.id)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
