<template lang="html">
  <div id="app">
    <xui-dropdown
      button
      class="icon"
      floating
      icon="world"
      labeled
      :options="languages"
      search
      text="Select Language"
      v-model="current"
    />
  </div>
</template>

<script>
export default {
  name: 'DropdownExample',
  data() {
    return {
      current: null,
      languages: [
        { key: 'Arabic', text: 'Arabic', value: 'Arabic' },
        { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
        { key: 'Danish', text: 'Danish', value: 'Danish' },
        { key: 'Dutch', text: 'Dutch', value: 'Dutch' },
        { key: 'English', text: 'English', value: 'English' },
        { key: 'French', text: 'French', value: 'French' },
        { key: 'German', text: 'German', value: 'German' },
        { key: 'Greek', text: 'Greek', value: 'Greek' },
        { key: 'Hungarian', text: 'Hungarian', value: 'Hungarian' },
        { key: 'Italian', text: 'Italian', value: 'Italian' },
        { key: 'Japanese', text: 'Japanese', value: 'Japanese' },
        { key: 'Korean', text: 'Korean', value: 'Korean' },
        { key: 'Lithuanian', text: 'Lithuanian', value: 'Lithuanian' },
        { key: 'Persian', text: 'Persian', value: 'Persian' },
        { key: 'Polish', text: 'Polish', value: 'Polish' },
        { key: 'Portuguese', text: 'Portuguese', value: 'Portuguese' },
        { key: 'Russian', text: 'Russian', value: 'Russian' },
        { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
        { key: 'Swedish', text: 'Swedish', value: 'Swedish' },
        { key: 'Turkish', text: 'Turkish', value: 'Turkish' },
        { key: 'Vietnamese', text: 'Vietnamese', value: 'Vietnamese' },
      ],
    };
  },
};
</script>
