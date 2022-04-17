const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const obj = params => {
  let objeto = {};
  params.filter(item => {
    if (objeto[item]) {
      objeto[item]++;
    } else {
      objeto[item] = 1;
    }
  });
  return objeto;
};
console.log(obj(alphabet));