import { Modal, ModalName } from "$models/Modal"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import experience from "../../data/experience"

interface IState {
  currentModal: Modal | null
}

const initialState: IState = {
  currentModal: {
    name: "Job",
    payload: experience[0]
  }
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
