const p = console.log;
const newObjet = {};

exports.Arguments = function argumentar(argumento) {
  argumento.forEach((val, index) => {
    if (val.charAt(0) == "-") {
      const newVal = val.slice(2);
      newObjet[newVal] = argumento[index + 1];
      return newObjet;
    }
  });
  return p(newObjet);
};
