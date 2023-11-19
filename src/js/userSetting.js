export class Setting {
    allSetting = {'theme': ['dark', 'light', 'gray'],
                  'music': ['trance', 'pop', 'rock', 'chillout', 'off'],
                  'difficulty': ['easy', 'normal', 'hard', 'nightmare']};
    constructor() {
        this.defaultSetting = new Map();
        
        this.defaultSetting.set('theme', this.allSetting['theme'][0])
                           .set('music', this.allSetting['music'][0])
                           .set('difficulty', this.allSetting['difficulty'][0])
        this.userSetting = new Map();
    }

    setUserSetting(settings) {
        settings.forEach(setting => {
            if (this.allSetting[Object.keys(setting)[0]].includes(Object.values(setting)[0])) {
                this.userSetting.set(Object.keys(setting)[0], Object.values(setting)[0]);
            }
            else {
                this.userSetting.set(Object.keys(setting)[0], this.defaultSetting.get(Object.keys(setting)[0]));
            }
        });
    }

    settings(settings) {
        this.setUserSetting(settings);
        for (let setting of this.userSetting) {
            this.defaultSetting.set(setting[0], setting[1])
        }
        return this.defaultSetting;
    }

}