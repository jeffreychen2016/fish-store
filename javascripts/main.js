// Filter fish that are "on sale"
const filterFish = () => {
  $('#available .fish').not('.on-sale').toggle();
};

const changeButtonText = () => {
  $('#show-sale').text((i,text) => {
    let returnText = '';
    if (text === 'Show Sale Fish') {
      returnText = 'Show All';
    } else {
      returnText = 'Show Sale Fish';
    };
    return returnText;
  });
};


$('#show-sale').click(() => {
  changeButtonText();
  filterFish();
});


// Add fish to "Basket"
const moveToCart = (e) => {
  // it will move the element to the destination, no need to delete the old element
  let fishCard = $(e.target).closest('.fish');
  // console.log('fishcard',fishCard);
  $('#snagged').append(fishCard);
};

$('button.add').click(moveToCart);