import { VueXolasUIMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'XuiRail',
  mixins: [VueXolasUIMixin],
  props: {
    attached: Boolean,
    dividing: Boolean,
    internal: Boolean,
    position: Enum(['left', 'right']),
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.dividing && 'dividing',
          this.attached && 'attached',
          this.internal && 'internal',
          this.position,
          'rail',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
