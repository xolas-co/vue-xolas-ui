<template>
  <div is="xui-container">
    <h1>Vue Xolas UI feature status</h1>
    <xui-table v-for="feature in features" :key="feature.name">
      <thead>
        <tr>
          <th>
            {{ s(feature.name) }}
          </th>
          <th>
            <xui-progress
              indicating
              :percent="getFeaturePercent(feature)"
              progress
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="component in feature.components" :key="component.name">
          <td>{{ s(component.name) }}</td>
          <td width="20%">
            <xui-progress
              indicating
              :percent="getPercent(component)"
              size="tiny"
            />
          </td>
        </tr>
      </tbody>
    </xui-table>
  </div>
</template>

<script>
import startCase from 'lodash/startCase';
import features from './compatibility.json';

export default {
  name: 'Features',
  data() {
    return { features };
  },
  methods: {
    getPercent(component) {
      let total = 0;
      let implemented = 0;
      try {
        component.definitions.forEach(definition => {
          definition.examples.forEach(example => {
            total += 1;
            if (example.implemented) {
              implemented += 1;
            }
          });
        });
      } catch (e) {
        console.log(component.name);
      } // eslint-disable-line
      return parseInt(100 * (implemented / total), 10);
    },
    getFeaturePercent(feature) {
      return parseInt(
        feature.components.reduce(
          (sum, component) => sum + this.getPercent(component),
          0,
        ) / feature.components.length,
        10,
      );
    },
    s: startCase,
  },
};
</script>
