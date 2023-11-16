export type ModalName = 'Job' | 'Work' | 'EmailSuccess' | null
export type Modal = {
  name: ModalName
  payload: any
}