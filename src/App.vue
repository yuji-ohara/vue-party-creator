<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col">
        <h4>RPG Party Creator</h4>
        <div class="row">
          <div class="col" v-for="(character, index) in characters" :key="'character_' + character.id">
              <CharacterSheet :character="character" :index="index" @click="selectCharacter($event)" />
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col">
            <CharacterEditor :selectedCharacter="selectedCharacter" :characterIndex="selectedIndex" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CharacterSheet from './components/CharacterSheet.vue';
import CharacterEditor from './components/CharacterEditor.vue';
import DataGen from './DataGen';

export default {
  name: 'App',
  components: {
    CharacterSheet,
    CharacterEditor
  },
  data() {
    return {
      characters: [],
      selectedCharacter: null,
      selectedIndex: null,
      dataGen: null
    };
  },
  mounted() {
    this.dataGen = new DataGen();
    this.characters = this.dataGen.GenerateParty(4);
  },
  methods: {
    editCharacter(character) {
      console.log(character);
    },
    
    selectCharacter({ character, index }) {
      this.selectedCharacter = character;
      this.selectedIndex = index;
    }
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
