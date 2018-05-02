const discount = 0.2;

const applySale = () => {
  // loop through each card (fishCard) that has class .on-sale
  // and then find the value (price) -- find: looks for descendant, and return JQuery object
  $('.on-sale').each((i, fishCard) => {
    const basePriceElem = $(fishCard).find('.price');
    const basePrice = basePriceElem.html() * 1;
    const newPrice = (basePrice * (1 - discount)).toFixed(2);
    basePriceElem.html(newPrice);
  });
};

module.exports = applySale;
