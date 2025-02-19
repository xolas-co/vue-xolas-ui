import { VueXolasUIMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'XuiItemContent',
  mixins: [VueXolasUIMixin],
  description: 'An item can contain content',
  props: {
    verticalAlign: Enum.VerticalAlign({
      description: 'Content can specify its vertical alignment',
    }),
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        class={this.classes(
          this.verticalAlign && `${this.verticalAlign} aligned`,
          'content',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiItem',
  },
};
