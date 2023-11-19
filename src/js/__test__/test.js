import { Team } from "../team";
import { Character } from "../character";
import { ErrorRepository } from "../errorRepository";
import { Setting } from "../userSetting";

const character = new Character('Mark', 'Undead');
const team = new Team();
let set = new Set();
set.add(character);

test.each([
  [character, set],
  [character, new Error("Этот персонаж уже есть в команде!")]
])(
  (`test add function`), (char, answer) => {
      expect(team.add(char)).toEqual(answer);
  })

  let allCharacters = new Set();
  const char1 = new Character('Mark', 'Undead');
  const char2 = new Character('Legolas', 'Bowman');
  const char3 = new Character('Said', 'Swordsman');
  let characters = [char1, char2, char3];
  characters.forEach(char => allCharacters.add(char));

  test('test addAll function', () => {
    expect(new Team().addAll([char1, char2, char3, char2])).toEqual(allCharacters);
  })

  test('test toArray function', () => {
    let newTeam = new Team();
    newTeam.addAll([char1, char2, char3, char2]);
    expect(newTeam.toArray()).toEqual([...allCharacters])
  })

  test.each([
    [1, "Ошибка в имени."],
    [2, "Такой персонаж не существует."],
    [3, "Ошибка, такой тип персонажа не существует."],
    [4, "Unknown error"]
  ])(
    (`test translate function`), (error, typeOfError) => {
        expect(new ErrorRepository().translate(error)).toEqual(typeOfError);
    })


//  test('testing userSetting', () => {
//   const setting = [{'theme': 'gray'}, {'music': 'pop'}]
//   const answer = new Map().set('theme', 'gray')
//                           .set('music', 'pop')
//                           .set('difficulty', 'easy');     
//   expect(new Setting().settings(setting)).toEqual(answer)
//  })

 test.each([
            [[{'theme': 'gray'}, {'music': 'pop'}], new Map().set('theme', 'gray').set('music', 'pop').set('difficulty', 'easy')],
            [[{'theme': 'blue'}, {'music': 'pop'}, {'difficulty': 'hard'}], new Map().set('theme', 'dark').set('music', 'pop').set('difficulty', 'hard')],
            [[{'music': 'country'}], new Map().set('theme', 'dark').set('music', 'trance').set('difficulty', 'easy')] 
 ])(
  ('testing userSetting'), (setting, answer) => {
    expect(new Setting().settings(setting)).toEqual(answer)
  }
 )


