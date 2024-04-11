function mergeElements (list) {
  const result = {}

  list.forEach((item) => {
    const name = item.name;
    if (result[name]) {
      result[name].qt += item.qt;
    } else {
      result[name] = { ...item };
    }
  })

  return Object.values(result);
}

export default mergeElements;