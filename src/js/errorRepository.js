export class ErrorRepository {
    constructor() {
        this.errorMap = new Map();
        this.fillMap();
    }

    fillMap() {
        const errors = ['Ошибка в имени.',
                        'Такой персонаж не существует.',
                        'Ошибка, такой тип персонажа не существует.',
                        ]
        errors.forEach((error, idx) => this.errorMap.set(idx+1, error))
    }

    translate(code) {
        if (this.errorMap.get(code) == undefined) {
            return "Unknown error"
        } 
        else {return this.errorMap.get(code)}
    }
}