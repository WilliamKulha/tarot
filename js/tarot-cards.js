//Business Logic

//Redirect for clicking the header
let goHome = function() {
  window.location.href = "splash.html";
}

//Function to populate modal with clicked card information.
$(document).on("click",".drawn_card", function () {
   let clicked = $(this).attr('id');
   $('.card_name_here').html(drawnCards[clicked].name);
   $('.img_here').html(`<img class="modal_card" src=${drawnCards[clicked].img} alt="${drawnCards[clicked].name}">`)
   console.log(drawnCards[clicked].orientation)
   if (drawnCards[clicked].orientation[0] === 1) {
     $(`.img_here>img`).addClass('flipped')
   }
   $('.reversed_meaning_here').text(drawnCards[clicked].meta_reversed);
   $('.upright_meaning_here').text(drawnCards[clicked].meta_upright);
   $('.meta_description_here').text(drawnCards[clicked].meta_description);
   $('.more_info_link_here').html(`<a class="btn btn-info" href="${drawnCards[clicked].meta_more_info_link}" target="_blank">Learn More</a>`)
});


let determineOrientation = function(cardNumber) {
  let orientation = Math.round((Math.random() * 1) + 0);
  if (orientation === 1) {
    rider_waite_cards[cardNumber].orientation.push(1)
  } else {
    rider_waite_cards[cardNumber].orientation.push(0)
  }
}

let drawThree = function() {
  let currentCardNumber = Math.floor((Math.random() * 77) + 0);
  determineOrientation(currentCardNumber);
  drawnCards.push(rider_waite_cards[currentCardNumber]);
  if (drawnCards.length <= spread) {
    $(`#rule_of_three`).find(`.${drawnCards.length}`).append(`<img src=${rider_waite_cards[currentCardNumber].img} id="${drawnCards.length - 1}" class="drawn_card" alt="${rider_waite_cards[currentCardNumber].name}" data-toggle="modal" data-target="#explanationModal">`)
    if (rider_waite_cards[currentCardNumber].orientation[0] !== 0) {
      $(`#rule_of_three`).find(`.${drawnCards.length}`).children('img').addClass('flipped')
    }
  $(`#rule_of_three`).find(`.${drawnCards.length}_description`).text(spread_position_description[1].position_descriptions[drawnCards.length -1])
  }
  rider_waite_cards.splice(currentCardNumber, 1);
}

let drawTrueLove = function() {
  let currentCardNumber = Math.floor((Math.random() * 77) + 0);
  determineOrientation(currentCardNumber);
  drawnCards.push(rider_waite_cards[currentCardNumber]);
  if (drawnCards.length <= spread) {
    $(`#true_love_spread`).find(`.${drawnCards.length}`).append(`<img src=${rider_waite_cards[currentCardNumber].img} id="${drawnCards.length - 1}" class="drawn_card" alt="${rider_waite_cards[currentCardNumber].name}" data-toggle="modal" data-target="#explanationModal">`)
    if (rider_waite_cards[currentCardNumber].orientation[0] !== 0) {
      $(`#true_love_spread`).find(`.${drawnCards.length}`).children('img').addClass('flipped')
    }
    $(`#true_love_spread`).find(`.${drawnCards.length}_description`).text(spread_position_description[0].position_descriptions[drawnCards.length -1])
  }
  rider_waite_cards.splice(currentCardNumber, 1);
}

let drawSuccess = function() {
  let currentCardNumber = Math.floor((Math.random() * 77) + 0);
  determineOrientation(currentCardNumber);
  drawnCards.push(rider_waite_cards[currentCardNumber]);
  if (drawnCards.length <= spread) {
    $(`#success_spread`).find(`.${drawnCards.length}`).append(`<img src=${rider_waite_cards[currentCardNumber].img} id="${drawnCards.length - 1}" class="drawn_card" alt="${rider_waite_cards[currentCardNumber].name}" data-toggle="modal" data-target="#explanationModal">`)
    if (rider_waite_cards[currentCardNumber].orientation[0] !== 0) {
      $(`#success_spread`).find(`.${drawnCards.length}`).children('img').addClass('flipped')
    }
  $(`#success_spread`).find(`.${drawnCards.length}_description`).text(spread_position_description[2].position_descriptions[drawnCards.length -1])
  }
  rider_waite_cards.splice(currentCardNumber, 1);
}

checkIfAllDrawn = function() {
  if (drawnCards.length === spread) {
    $(`#deck_here`).slideUp();
    $(`.new_reading_button`).show();
  } else {
    return false
  }
}

let hideAndShow = function() {
  $(`#spread_selection`).slideUp();
  $(`#deck_here`).show();
  $(`.spread_display`).slideDown();
}

let spread = 0;
let drawnCards = [];

//User Logic

$(function() {
  console.log(spread_position_description[0].position_descriptions[1])
  $('.rule_of_three').click(function() {
    spread = 3;
    hideAndShow();
    $('#rule_of_three').show();
    $(`#deckDraw`).click(function() {
      drawThree();
      checkIfAllDrawn();
    });
  });
  $('.true_love').click(function() {
    spread = 6;
    hideAndShow();
    $(`#rule_of_three`).hide();
    $('#true_love_spread').show();
    $(`#deckDraw`).click(function() {
      drawTrueLove();
      checkIfAllDrawn();
    });
  });
  $(`.success`).click(function() {
    spread = 5;
    hideAndShow();
    $(`#rule_of_three`).hide();
    $(`#true_love_spread`).hide();
    $('#success_spread').show();
    $(`#deckDraw`).click(function() {
      drawSuccess();
      checkIfAllDrawn();
    });
  });
});
