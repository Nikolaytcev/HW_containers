export class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)){
            return new Error("Этот персонаж уже есть в команде!")
        }
        else {
            this.members.add(character);
            return this.members;
        }
    }

    addAll(characters) {
        characters.forEach(character => {
            this.members.add(character)
        });
        return this.members;
    }

    toArray() {
        return [...this.members]
    }
} 