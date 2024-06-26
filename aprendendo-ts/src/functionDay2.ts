// -  Faça a função addProducts se tornar genérica para funcionar com quaisquer tipos de listas de produtos, não só listas de strings.

// function addProducts(products: string[], newProduct: string): string[] {
//   return [...products, newProduct];
// }
// 
// type Bread = {
  // name: string,
  // ingredients: string[],
  // gluten: boolean,
// };

// type Flour = {
 //  brand: string,
 //  description: string,
 //  gluten: boolean,
// };

// const breads: Bread[] = [];
// const flours: Flour[] = [];

// const newBread: Bread = {
//   name: "Pão de banana",
  // ingredients: ['farinha de aveia sem glúten', 'bananas maduras', 'nozes', 'ovos', 'mel'],
 //  gluten: false,
// };

// const newFlour: Flour = {
 //  brand: "Dona Benta",
 //  description: "Farinha de trigo enriquecida com ferro e ácido fólico.",
 //  gluten: true,
// };

// const bread = addProducts(breads, newBread); // Error: Argument of type 'Bread[]' is not assignable to parameter of type 'string[]'.
// const flour = addProducts(flours, newFlour); // Error: Argument of type 'Flour[]' is not assignable to parameter of type 'string[]'.

// console.log('bread', bread);
// console.log('flour', flour);

function addProducts<TypeProduct>(products: TypeProduct[], newProduct: TypeProduct): TypeProduct[] {
  return [...products, newProduct];
}

type Bread = {
  name: string,
  ingredients: string[],
  gluten: boolean,
};

type Flour = {
  brand: string,
  description: string,
  gluten: boolean,
};

const breads: Bread[] = [];
const flours: Flour[] = [];

const newBread: Bread = {
  name: "Pão de banana",
  ingredients: ['farinha de aveia sem glúten', 'bananas maduras', 'nozes', 'ovos', 'mel'],
  gluten: false,
};

const newFlour: Flour = {
  brand: "Dona Benta",
  description: "Farinha de trigo enriquecida com ferro e ácido fólico.",
  gluten: true,
};

const bread = addProducts<Bread>(breads, newBread); // Error: Argument of type 'Bread[]' is not assignable to parameter of type 'string[]'.
const flour = addProducts<Flour>(flours, newFlour); // Error: Argument of type 'Flour[]' is not assignable to parameter of type 'string[]'.

console.log('bread', bread);
console.log('flour', flour);