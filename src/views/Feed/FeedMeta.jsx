import { VueXolasUIMixin } from '../../lib';
import { FeedLike } from './';

export default {
  name: 'XuiFeedMeta',
  mixins: [VueXolasUIMixin],
  description: 'A feed can contain a meta',
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content',
    },
    like: {
      type: String,
      description: 'Shorthand for XuiFeedLike',
    },
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('meta')}
      >
        {this.$slots.default || [
          this.like && <FeedLike content={this.like} />,
          this.content,
        ]}
      </ElementType>
    );
  },
  meta: {
    parent: 'XuiFeed',
  },
};
