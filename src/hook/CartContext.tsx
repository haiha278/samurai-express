import { stat } from "fs";
import { createContext, useReducer, useContext, ReactNode } from "react";
import { useEffect } from "react";
// Định nghĩa kiểu cho Item
interface Item {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity?: number; // Cho phép quantity nếu món ăn đã được thêm vào nhiều lần
}

// Định nghĩa kiểu cho CartState
interface CartState {
  items: Item[];
}

// Định nghĩa các hành động (actions)
type CartAction =
  | { type: "ADD_ITEM"; payload: Item }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "CLEAR_CART" };

// Trạng thái ban đầu của giỏ hàng
const initialState: CartState = {
  items: [],
};

// Reducer function để quản lý các hành động của giỏ hàng
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: (item.quantity || 1) + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "CLEAR_CART":
      return { ...state, items: [] };

    default:
      return state;
  }
};

// Tạo context cho giỏ hàng
const CartContext = createContext<
  | {
      cart: CartState;
      addItemToCart: (item: Item) => void;
      removeItemFromCart: (id: number) => void;
      clearCart: () => void;
    }
  | undefined
>(undefined);

// Cart provider để bao bọc toàn bộ ứng dụng
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItemToCart = (item: Item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItemFromCart = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const totalPriceOfEachItem = (item: Item) => {
    return item.price * (item.quantity || 1);
  };

  const totalPriceOfAllItem = () => {
    const totalPrice = state.items.reduce(
      (total, item) => total + totalPriceOfEachItem(item),
      0
    );
    return totalPrice;
  };

  useEffect(() => {
    console.log("Cart State Updated:", state.items);
    console.log("Total:", totalPriceOfAllItem());
  }, [state.items]); // Sử dụng useEffect để theo dõi thay đổi trong state.items

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addItemToCart,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook để sử dụng CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
