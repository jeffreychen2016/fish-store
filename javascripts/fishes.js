const loadFishes = (successFunction, errorFunciton) => {
  $.get('../db/fishes.json')
    .done(successFunction)
    .fail(errorFunciton);

};

module.exports = loadFishes;
