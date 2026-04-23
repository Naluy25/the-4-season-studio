import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type CartItem = {
  id: string;
  name: string;
  category: string;
  details: string; // user-written specifics
};

type CartContextValue = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "details">) => void;
  removeItem: (id: string) => void;
  updateDetails: (id: string, details: string) => void;
  clear: () => void;
  count: number;
  isCheckoutOpen: boolean;
  openCheckout: () => void;
  closeCheckout: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "fourseason_cart_v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const addItem: CartContextValue["addItem"] = (item) => {
    setItems((prev) => {
      if (prev.some((p) => p.id === item.id)) return prev;
      return [...prev, { ...item, details: "" }];
    });
  };

  const removeItem = (id: string) =>
    setItems((prev) => prev.filter((p) => p.id !== id));

  const updateDetails = (id: string, details: string) =>
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, details } : p)));

  const clear = () => setItems([]);

  const openCheckout = () => setIsCheckoutOpen(true);
  const closeCheckout = () => setIsCheckoutOpen(false);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateDetails,
        clear,
        count: items.length,
        isCheckoutOpen,
        openCheckout,
        closeCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
