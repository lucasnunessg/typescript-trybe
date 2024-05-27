function printPersonalInfo (data: {name: string, birthday: number}) {
  console.log(`Olá, ${data.name}, seu aniversário é em ${data.birthday}`);
};

printPersonalInfo({ name: 'Lucas', birthday: 1999 });

const evenNumbers: number[] = [1,5,6,7]
const vowel: string[] = ['a', 'e', 'i', 'o', 'u']
const booleanValues: boolean[] = [true, false];

evenNumbers.push(9)
// evenNumbers.push('9') não funciona

function printId(id: number | string) {
  console.log(`Seu id é: ${id}`)
}

printId(10)
printId('10')

type personalInfo = { 
  name: string,
  birthday: number
};

function personalInfos (data: personalInfo) {
  console.log(` Olá ${data.name} seu aniversário é ${data.birthday}`)
};

personalInfos({ name:'Lucas', birthday: 1999 });