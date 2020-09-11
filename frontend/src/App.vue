<template>
  <div id="app">
    <label class="tadaluuu" for="input0">Nick name</label>

    <input type="text" name="properties[Nick name]" id="input0" />

    <label class="tadaluuu" for="input1">Kid name</label>

    <input type="text" name="properties[Kid name]" id="input1" />

    <label class="tadaluuu" for="input2">Select</label>

    <select name="properties[Select]">
      <option value="Chelsea">Chelsea</option>

      <option value="Arsenal">Arsenal</option>

      <option value="Manchester United">Manchester United</option>

      <option value="Liverpool">Liverpool</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    console.log(process.argv);
  },
};
</script>
<style>
.tadaluuu {
  color: blue;
}
</style>