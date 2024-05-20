import {VanillaFormAssociatedMixin} from '../../exports/mixins/vanilla-form-associated-mixin.js'

export class BaseElement extends VanillaFormAssociatedMixin(HTMLElement) {
  static validators = []
}
