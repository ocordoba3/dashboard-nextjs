import { CartCounter } from "@/shopping-cart/components";

export const metadata = {
  title: "Shopping Cart",
  description: "A simple counter",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center p-4 w-full h-full">
      <span>Productos del carrito</span>
      <CartCounter value={35} />
    </div>
  );
}
