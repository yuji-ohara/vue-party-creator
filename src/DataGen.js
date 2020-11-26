import { nameByRace } from 'fantasy-name-generator';
import { v4 as uuidv4 } from 'uuid';

export default class DataGen {
    constructor() {
        this.Races = {
            AsArray: ['angel',
                'cavePerson',
                'darkelf',
                'darkelf',
                'demon',
                'dragon',
                'drow',
                'dwarf',
                'elf',
                'fairy',
                'gnome',
                'goblin',
                'halfdemon',
                'halfling',
                'highelf',
                'highfairy',
                'human',
                'ogre',
                'orc'],
            Angel: 'angel',
            CavePerson: 'cavePerson',
            Darkelf: 'darkelf',
            Demon: 'demon',
            Dragon: 'dragon',
            Drow: 'drow',
            Dwarf: 'dwarf',
            Elf: 'elf',
            Fairy: 'fairy',
            Gnome: 'gnome',
            Goblin: 'goblin',
            Halfdemon: 'halfdemon',
            Halfling: 'halfling',
            Highelf: 'highelf',
            Highfairy: 'highfairy',
            Human: 'human',
            Ogre: 'ogre',
            Orc: 'orc'
        }
    }

    RandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    RandomStats() {
        let stats = {
            Mobility: this.RandomInt(10, 100),
            Resilience: this.RandomInt(10, 100),
            Recuperation: this.RandomInt(10, 100),
            Discipline: this.RandomInt(10, 100),
            Intelect: this.RandomInt(10, 100),
            Strength: this.RandomInt(10, 100)
        };
        return stats;
    }

    RandomRace() {
        return this.Races.AsArray[Math.floor(Math.random() * this.Races.AsArray.length)];
    }

    GenerateCharacter() {
        let id = uuidv4();
        let race = 'human'; //this.RandomRace();
        let name = nameByRace(race);
        let stats = this.RandomStats();
        return { id, name, race, stats };
    }

    GenerateParty(numMembers) {
        var party = [];

        for (var i = 0; i < numMembers; i++) {
            party.push(this.GenerateCharacter());
        }

        return party;
    }
}