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


function dataToShoppingList (data) {
  const jointSystem = data.holes;
  const modules = data.woodwork;
  const extraComponents = data.components ? data.components.data : null;
  const project_name = data.project_description;
  const customer_name = data.project_customer_name;
}



export default dataToShoppingList;