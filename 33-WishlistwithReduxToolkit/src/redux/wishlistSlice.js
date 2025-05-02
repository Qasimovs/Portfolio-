import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.find(item => item.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
        toast.success("Məhsul istəyə əlavə olundu!");
      } else {
        toast.info("Bu məhsul artıq istək siyahısındadır.");
      }
    },
    removeFromWishlist: (state, action) => {
      const updated = state.filter(item => item.id !== action.payload);
      toast.warn("Məhsul istək siyahısından silindi.");
      return updated;
    },
    clearWishlist: () => {
      toast.error("Bütün istək məhsulları silindi.");
      return [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
