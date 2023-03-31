import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./features/viewSlice";

export const store = configureStore({
  reducer: {
    grid: viewReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
