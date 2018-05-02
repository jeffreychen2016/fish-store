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

// Add fish to "Basket"
const moveToCart = (e) => {
  // it will move the element to the destination, no need to delete the old element
  const fishCard = $(e.target).closest('.fish');
  // console.log('fishcard',fishCard);
  $('#snagged').append(fishCard);
  $(e.target).text('Remove From Cart').removeClass('add').addClass('remove');
  // attach event again after click the add-to-cart button for remove-from-cart functionality
  // $(e.target).on('click', removeFromCart); Version-1
};

// Remove fish from "Basket"
const removeFromCart = (e) => {
  // it will move the element to the destination, no need to delete the old element
  const fishCard = $(e.target).closest('.fish');
  // console.log('fishcard',fishCard);
  $('#available').append(fishCard);
  $(e.target).text('Add To Cart').removeClass('remove').addClass('add');;
  // $(e.target).on('click', moveToCart); Version-1
};

const bindEvents = () => {
  // attach the event to body, and listen to specific class (.remove/.add).
  $('body').on('click','.remove',removeFromCart);
  $('body').on('click','.add',moveToCart);
  // $('button.add').on('click',moveToCart); Version-1
  $('#show-sale').click(() => {
    changeButtonText();
    filterFish();
  });
};

module.exports = bindEvents;
