let spread = 1;
let drawnCards = [];

$(function() {
    let currentCardNumber = Math.floor((Math.random() * 77) + 0);
    drawnCards.push(rider_waite_cards[currentCardNumber]);
    const currentCard = rider_waite_cards[currentCardNumber];
    console.log(currentCard)
    $('.card_image_here').append(`<img src="${currentCard.img}" id="${(drawnCards.length - 1)}" class="drawn_card" alt="${currentCard.name}" data-toggle="modal" data-target="#explanationModal">`);   
    $('.card_title_here').text(`${currentCard.name}`)
})

$(document).on("click",".drawn_card", function () {
    let clicked = $(this).attr('id');
    $('.card_name_here').html(drawnCards[clicked].name);
    $('.img_here').html(`<img class="drawn_card" src=${drawnCards[clicked].img} alt="${drawnCards[clicked].name}">`)
    if (drawnCards[clicked].orientation === 1) {
      $(`modal_body`).find().children('img').addClass('flipped')
    }
    $('.reversed_meaning_here').text(drawnCards[clicked].meta_reversed);
    $('.upright_meaning_here').text(drawnCards[clicked].meta_upright);
    $('.meta_description_here').text(drawnCards[clicked].meta_description);
    $('.more_info_link_here').html(`<a class="btn btn-info" href="${drawnCards[clicked].meta_more_info_link}" target="_blank">Learn More</a>`)
 });
 