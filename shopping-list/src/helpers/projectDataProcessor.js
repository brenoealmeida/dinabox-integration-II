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
  return modules.flatMap(element => element.inputs)
    .map((hardware) => ({
      name: hardware.name,
      category: hardware.category_name,
      qt: hardware.qt,
      dimension: hardware.dimensions,
      width: null,
    }))
}



function jointSystemProcessor(joints) {
  return joints.map((joint) => ({
    name: joint.name,
    category: "Sistemas de Fixação",
    qt: joint.qt,
    dimension: null,
    width: null,
  }))
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
  const jointSystem = data.holes ? data.holes : [];
  const modules = data.woodwork;
  const components = data.components ? data.components.data : [];
  const project_name = data.project_description;
  const customer_name = data.project_customer_name;

  const componentsList = componentsProcessor(components);
  const jointsList = jointSystemProcessor(jointSystem);
  const modulesList = modulesProcessor(modules);

  const shoppingList = [...componentsList, ...jointsList, ...modulesList];
  
  return {
    project_name,
    customer_name,
    shoppingList,
  }
}



export default dataToShoppingList;