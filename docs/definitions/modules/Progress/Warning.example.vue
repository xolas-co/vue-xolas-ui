<template lang="html">
  <div>
    <xui-progress
      state="warning"
      :percent="100"
      progress
      label="Your file didn't meet the minimum resolution requirements."
    />
  </div>
</template>

<script>
export default {
  name: 'WarningProgressExample',
};
</script>
