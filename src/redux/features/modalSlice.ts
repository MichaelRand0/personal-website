import { Modal, ModalName } from "$models/Modal"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IState {
  currentModal: Modal | null
}

const initialState: IState = {
  currentModal: {
    name: "Job",
    payload: {
      date: {
        simpleDate: '2022-2023',
        from: 'Май 2022',
        to: 'Апрель 2023'
      },
      position: "Фронтенд-разработчик",
      company: "ООО Профискетч",
      description:
        "Разработка личного кабинета для онлайн-редактора BIM чертежей, разработка лэндингов, разработка онлайн-документации.",
      logo: "/img/profi.png",
    },
  },
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
