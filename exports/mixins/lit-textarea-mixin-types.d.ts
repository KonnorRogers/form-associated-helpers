export type TextareaGetters = {
  get textLength (): HTMLTextAreaElement["textLength"]
  get selectionStart (): HTMLTextAreaElement["selectionStart"]
  get selectionEnd (): HTMLTextAreaElement["selectionEnd"]
  get isUserInvalid (): boolean
}
