import { VueXolasUIMixin } from '../../lib';

export default {
  name: 'XuiTableFooter',
  mixins: [VueXolasUIMixin],
  props: {
    fullWidth: Boolean,
  },
  render() {
    const ElementType = this.getElementType('tfoot');
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(this.fullWidth && 'full-width')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiTable',
  },
};
