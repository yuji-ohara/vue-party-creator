<template>
    <div v-if="!selectedCharacter" class="row">
        <div class="col">
            <h5>Select a character</h5>
        </div>
    </div>
    <div v-else class="row">
        <div class="col">
            <img :src="require(`@/assets/characters${characterIndex}.png`)" />
        </div>
        <div class="col">
            <div class="row">
                <div class="col">
                    <h4>{{ selectedCharacter.name }} ({{ selectedCharacter.race }})</h4>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <span>Mobility: {{ selectedCharacter.stats.Mobility }}</span>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <span>Resilience: {{ selectedCharacter.stats.Resilience }}</span>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <span>Recuperation: {{ selectedCharacter.stats.Recuperation }}</span>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <span>Discipline: {{ selectedCharacter.stats.Discipline }}</span>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <span>Intelect: {{ selectedCharacter.stats.Intelect }}</span>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <span>Strength: {{ selectedCharacter.stats.Strength }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CharacterEditor',
    props: { 
        selectedCharacter: Object,
        characterIndex: Number
    },
    data() {
        return {

        }
    }
}
</script>