<template>
  <div class="col-sm">
    <h5 @click="emitSelectCharacter">Name: {{ character.name }} ({{ character.race }})</h5>
    <div class="row">
      <div class="col">
        <span
          data-toggle="tooltip"
          data-placement="right"
          :title="statTooltip(character.stats.Mobility)"
          >Mobility: {{ character.stats.Mobility }}</span
        >
      </div>
    </div>
    <div class="row">
      <div class="col">
        <span
          data-toggle="tooltip"
          data-placement="right"
          :title="statTooltip(character.stats.Resilience)"
          >Resilience: {{ character.stats.Resilience }}</span
        >
      </div>
    </div>
    <div class="row">
      <div class="col">
        <span
          data-toggle="tooltip"
          data-placement="right"
          :title="statTooltip(character.stats.Recuperation)"
          >Recuperation: {{ character.stats.Recuperation }}</span
        >
      </div>
    </div>
    <div class="row">
      <div class="col">
        <span
          data-toggle="tooltip"
          data-placement="right"
          :title="statTooltip(character.stats.Discipline)"
          >Discipline: {{ character.stats.Discipline }}</span
        >
      </div>
    </div>
    <div class="row">
      <div class="col">
        <span
          data-toggle="tooltip"
          data-placement="right"
          :title="statTooltip(character.stats.Intelect)"
          >Intelect: {{ character.stats.Intelect }}</span
        >
      </div>
    </div>
    <div class="row">
      <div class="col">
        <span
          data-toggle="tooltip"
          data-placement="right"
          :title="statTooltip(character.stats.Strength)"
          >Strength: {{ character.stats.Strength }}</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['character', 'index'],
  data() {
    return {};
  },
  mounted() {
    this.BootstrapInits();
  },
  methods: {
    statTooltip(stat) {
      if (stat < 30) return "this sucks";
      else if (stat < 70) return "meh...";
      else return "wow!";
    },

    BootstrapInits() {
    },
    
    emitSelectCharacter() {
      this.$emit('click', { character: this.character, index: this.index });
    }
  },
};
</script>