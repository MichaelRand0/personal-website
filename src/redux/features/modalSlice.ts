import { Modal } from "$models/Modal"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IState {
  currentModal: Modal | null
}

const initialState: IState = {
  currentModal: null
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setCurrentModal(state, action: PayloadAction<Modal | null>) {
      state.currentModal = action.payload
    },
  },
})
