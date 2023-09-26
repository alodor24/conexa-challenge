import { EndpointEnum } from "@/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaginationState {
  url: string;
}

const initialState: PaginationState = {
  url: `${process.env.NEXT_PUBLIC_BASE_URL}/${EndpointEnum.CHARACTER}`,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPaginationUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
  },
});

export const { setPaginationUrl } = paginationSlice.actions;
export default paginationSlice.reducer;
