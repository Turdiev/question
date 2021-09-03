<template>
  <button
    class="button"
    :class="color ? color : 'default'"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: ["label", "color"],
};
</script>

<style>
.button {
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}

.default {
  background: #fff;
  border: 2px solid #000;
}

.primary {
  background: #0000ff;
  border: 2px solid #000;
}

.secondary {
  background: #d2691e;
  border: 2px solid #000;
}
</style>