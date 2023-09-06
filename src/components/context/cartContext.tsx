import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { IProduct } from 'src/pages/detail/detail.type';
import { getLocalStorage, setLocalStorage } from 'src/utils';

interface CartContextType {
  cartQuantity: number;
  cartQuantityDetail: number;
  cartItems: IProduct[];
  addToCart: (item: IProduct) => void;
  updateCartItemQuantity: (productId: number, change: number) => void;
  updateQuantityDetail: (productId: number, change: number) => void;
  remove: (productId: number) => void;
}
interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartItems, setCartItem] = useState<IProduct[]>([])
  const [cartQuantityDetail, setCartQuantityDetail] = useState(1);

  // ADD SP
  const addToCart = (item: IProduct) => {
   
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id)

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex] = { ...cartItems[existingItemIndex], quantity: cartItems[existingItemIndex].quantity + 1 };
      setCartItem(updatedCartItems);
      setCartQuantityDetail(cartQuantityDetail+1)
      
    } else {
      setCartItem([...cartItems, { ...item, quantity: cartQuantityDetail }]);
    }
    saveCartToLocalStorage(cartItems)
  };
  // Cập nhật số lượng sản phẩm khi nhấn nút tăng giảm trong CARTS
  const updateCartItemQuantity = (idProduct: number, currentQuantity: number) => {
    const updatedCartItems = cartItems.map((item) => {
      if (idProduct === item.id) {
        const newQuantity = item.quantity + currentQuantity
          return { ...item, quantity: newQuantity }
      }
      return item
    })

    setCartItem(updatedCartItems);
    setCartQuantity(cartQuantity + currentQuantity);
    saveCartToLocalStorage(updatedCartItems)
  }

  // Cập nhật số lượng sản phẩm khi nhấn nút tăng giảm trong DETAIL
  const updateQuantityDetail = (idProduct: number, currentQuantity: number) => {
    const updatedCartItems = cartItems.map((item) => {
      if (idProduct === item.id) {
        const newQuantity = item.quantity + currentQuantity
        return { ...item, quantity: newQuantity }
      }
      return item
    })
      
    setCartItem(updatedCartItems);
    setCartQuantityDetail(cartQuantityDetail + currentQuantity);
    saveCartToLocalStorage(updatedCartItems)
  }


  // Remove 
  const remove = (idProduct: number) => {
    const newCart = cartItems.filter((sp) => sp.id !== idProduct)
    const newQuantity = newCart.reduce((total, item) => total + item.quantity, 0)
    setCartItem(newCart)
    setCartQuantity(newQuantity)
    saveCartToLocalStorage(newCart)
  }

  // save cart
  function saveCartToLocalStorage(cartItems: IProduct[]) {
    setLocalStorage('cart', cartItems)
  }
  // get cart
  useEffect(() => {
    const cartItemsFromStorage = getLocalStorage('cart');
    if (cartItemsFromStorage) {
      setCartItem(cartItemsFromStorage);
    }
  }, []);
  

  const contextValue: CartContextType = {
    cartQuantity,
    cartQuantityDetail,
    cartItems,
    addToCart,
    updateCartItemQuantity,
    updateQuantityDetail,
    remove,
  
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};


