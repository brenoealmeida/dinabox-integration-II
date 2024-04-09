const categories = [
  'Ferragens e acessórios',
  'Fitas',
  'Ferragens BLUM',
  'Terceirizados',
  'Vidraçaria',
  'Rafix',
  'Porta de Alumínio',
  'Perfis e Puxadores',
  'Trilhos'
]

function modulesProcessor(modules) {
  const { parts, inputs } = modules;


}

function jointSystemProcessor(data) {
  const result = data.map((component) => {
    
  })
}

function componentsProcessor(components) {
  return Object.values(components)
    .flatMap(elem => elem.category_data)
      .map((e) => ({
          name: e.name,
          category: e.parent[0].category_name,
          qt: e.parent[0].qt,
          dimension: e.parent[0].dimension,
          width: e.parent[0].width,
        })
      )
}


function dataToShoppingList (data) {
  const jointSystem = data.holes;
  const modules = data.woodwork;
  const components = data.components ? data.components.data : null;
  const project_name = data.project_description;
  const customer_name = data.project_customer_name;

  const teste = componentsProcessor(components);
  console.log(teste);

}



export default dataToShoppingList;