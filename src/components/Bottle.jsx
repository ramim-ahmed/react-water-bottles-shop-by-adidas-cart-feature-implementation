/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

export default function Bottle({ bottle, handleAddToCart }) {
  const { img, name, seller, price } = bottle;
  return (
    <div className="w-60 border p-2 rounded">
      <div>
        <img className="rounded" src={img} alt="" />
      </div>
      <p className="text-sm">{seller}</p>
      <div>
        <p>{name}</p>
        <div className="flex items-center justify-between">
          <p>${price}</p>
          <button onClick={() => handleAddToCart(bottle)} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 hover:text-indigo-700"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
