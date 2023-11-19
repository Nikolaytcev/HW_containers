export class Character {
    constructor(name, type) {
        try {
            if (name.length < 2 || name.length > 10) {
                throw new Error("Ошибка! Имя не соответствует условию: длина имени больше 2, но меньше 10 символов");
            }
            else {
                this.name = name;
            }
            if (!["Bowman", "Magician", "Daemon", "Swordsman", "Undead", "Zombie"].includes(type)) {
                throw new Error("Ошибка! Несуществующий персонаж");
            }
            else {
                this.type = type;
            }
        }
        catch (error) {
            return error;
        }
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
    }

    levelUp() {
        try {
            if (this.health > 0) {
                this.level++;
                this.attack *= 1.2;
                this.defence *= 1.2;
                this.health = 100;
                return this;
            }
            else {
                throw new Error("нельзя повысить левел умершего");
            }
        }
        catch (e) {
            return e
        }
    }

    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100);
        }
    }
}