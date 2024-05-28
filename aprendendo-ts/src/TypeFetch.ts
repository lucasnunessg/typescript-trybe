import axios from 'axios';

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

async function fetchApi<TypeAxios>(endpoint: string): Promise <TypeAxios> {
  const { data } = await axios.get<TypeAxios>(`http://localhost:3001/${endpoint}`);
  return data;
}

fetchApi<Bread>('breads')
fetchApi<Flour>('flours')