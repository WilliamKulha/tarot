//Business Logic

//Function to populate modal with clicked card information.
$(document).on("click",".drawn_card", function () {
   let clicked = $(this).attr('id');
   console.log(clicked);
   $('.card_name_here').html(drawnCards[clicked].name);
   $('.img_here').html(`<img class="modal_card" src=${drawnCards[clicked].img} alt="${drawnCards[clicked].name}">`)
   if (drawnCards[clicked].orientation === 1) {
     $(`.img_here img`).addClass('flipped')
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
  }
  rider_waite_cards.splice(currentCardNumber, 1);
}

checkIfAllDrawn = function() {
  if (drawnCards.length === spread) {
    $(`#deck_area`).slideUp();
  } else {
    return false
  }
}

let hideAndShow = function() {
  $(`#spread_choice`).slideUp();
  $(`#deck_area`).slideDown();
}


const rider_waite_cards =
[
  {
    name:'The Fool',
    number: 0,
    img: 'img/deck/00_Fool.jpg',
    orientation: [],
    meta_description: `The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner's luck, improvisation and believing in the universe.`,
    meta_upright: `Beginnings, innocence, spontaneity, a free spirit`,
    meta_reversed: `Holding back, recklessness, risk-taking`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/fool/`
  },
  {
    name:'The Magician',
    number: 1,
    img: 'img/deck/01_Magician.jpg',
    orientation: [],
    meta_description: `When the Magician appears in a spread, it points to the talents, capabilities and resources at the querent's disposal to succeed. The message is to tap into one's full potential rather than holding back, especially when there is a need to transform something.`,
    meta_upright: `Manifestation, resourcefulness, power, inspired action`,
    meta_reversed: `Manipulation, poor planning, untapped talents`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/magician/`
  },
  {
    name: 'The High Priestess',
    number: 2,
    img: `img/deck/02_High_Priestess.jpg`,
    orientation: [],
    meta_description: `High Priestess is a card of mystery, stillness and passivity. This card suggests that it is time to retreat and reflect upon the situation and trust your inner instincts to guide you through it. Things around you are not what they appear to be right now.`,
    meta_upright: `Intuition, sacred knowledge, divine feminine, the subconscious mind`,
    meta_reversed: `Secrets, disconnected from intuition, withdrawal and silence`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/high-priestess/`
  },
  {
    name: 'The Empress',
    number: 3,
    img: `img/deck/03_Empress.jpg`,
    orientation: [],
    meta_description: `The Empress is traditionally associated with maternal influence, it is the card if you are hoping to start a family. She can represent the creation of life, romance, art, or new business.`,
    meta_upright: `Femininity, beauty, nature, nurturing, abundance`,
    meta_reversed: `Creative block, dependence on others`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/empress/`
  },
  {
    name: 'The Emperor',
    number: 4,
    img: `img/deck/04_Emperor.jpg`,
    orientation: [],
    meta_description: `This card is suggestive of stability and security in life. You are on top of things and everything in under your control. It is your hard work, discipline and self control that have bought you this far. It means that you are in charge of your life now setting up your own rules and boundaries.`,
    meta_upright: `Authority, establishment, structure, a father figure`,
    meta_reversed: `Domination, excessive control, lack of discipline, inflexibility`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/emperor/`
  },
  {
    name: 'The Hierophant',
    number: 5,
    img: `img/deck/05_Hierophant.jpg`,
    orientation: [],
    meta_description: `Hierophant stands for tradition and convention. It can represent marriage in an arranged setup. It can also mean a teacher or counsellor who will help in learning / education of the querent.`,
    meta_upright: `Spiritual wisdom, religious beliefs, conformity, tradition, institutions`,
    meta_reversed: `Personal beliefs, freedom, challenging the status quo`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/hierophant/`
  },
  {
    name: `The Lovers`,
    number: 6,
    img: `img/deck/06_Lovers.jpg`,
    orientation: [],
    meta_description: `The Lovers represent relationships and choices. Its appearance in a spread indicates some decision about an existing relationship, a temptation of the heart, or a choice of potential partners. Often an aspect of the querent's life will have to be sacrificed; a bachelor(ette)'s lifestyle may be sacrificed and a relationship gained (or vice versa), or one potential partner may be chosen while another is turned down. Whatever the choice, it should not be made lightly, as the ramifications will be lasting.`,
    meta_upright: `Love, harmony, relationships, values alignment, choices`,
    meta_reversed: `Self-love, disharmony, imbalance, misalignment of values`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/lovers/`
  },
  {
    name: `The Chariot`,
    number: 7,
    img: `img/deck/07_Chariot.jpg`,
    orientation: [],
    meta_description: `The Chariot is a card about overcoming conflicts and moving forward in a positive direction. One needs to keep going on and through sheer hard work and commitment he will be victorious.`,
    meta_upright: `Control, willpower, success, action, determination`,
    meta_reversed: `Self-discipline, opposition, lack of direction`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/chariot/`
  },
  {
    name: `Strength`,
    number: 8,
    img: `img/deck/08_Strength.jpg`,
    orientation: [],
    meta_description: `Strength predicts the triumphant conclusion to a major life problem, situation or temptation through strength of character. It is a very happy card if you are fighting illness or recovering from injury.`,
    meta_upright: `Strength, courage, persuasion, influence, compassion`,
    meta_reversed: `Inner strength, self-doubt, low energy, raw emotion.`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/strength/`
  },
  {
    name: `The Hermit`,
    number: 9,
    img: `img/deck/09_Hermit.jpg`,
    orientation: [],
    meta_description: `The Hermit suggests that you are in a phase of introspection where you are drawing your attention inwards and looking for answers within. You are in need of a period of inner reflection, away from the current demands of your position.`,
    meta_upright: `Soul-searching, introspection, being alone, inner guidance`,
    meta_reversed: `Isolation, loneliness, withdrawal`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/hermit/`
  },
  {
    name: `The Wheel of Fortune`,
    number: 10,
    img: `img/deck/10_Wheel_of_Fortune.jpg`,
    orientation: [],
    meta_description: `A common aspect to most interpretations of this card within a reading is to introduce an element of change in the querent's life, such change being in station, position or fortune: such as the rich becoming poor, or the poor becoming rich.`,
    meta_upright: `Good luck, karma, life cycles, destiny, a turning point`,
    meta_reversed: `Bad luck, resistance to change, breaking cycles`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/wheel-of-fortune/`
  },
  {
    name: `Justice`,
    number: 11,
    img: `img/deck/11_Justice.jpg`,
    orientation: [],
    meta_description: `The Justice card indicates that the fairest decision will be made. Justice is the sword that cuts through a situation, and will not be swayed by outer beauty when deciding what is fair and just.`,
    meta_upright: `Justice, fairness, truth, cause and effect, law`,
    meta_reversed: `Unfairness, lack of accountability, dishonesty`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/justice/`
  },
  {
    name: `The Hanged Man`,
    number: 12,
    img: `img/deck/12_Hanged_Man.jpg`,
    orientation: [],
    meta_description: `The Hanged Man is the card that suggests ultimate surrender, sacrifice, or being suspended in time.`,
    meta_upright: `Pause, surrender, letting go, new perspectives`,
    meta_reversed: `Delays, resistance, stalling, indecision`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/hanged-man/`
  },
  {
    name: `Death`,
    number: 13,
    img: `img/deck/13_Death.jpg`,
    orientation: [],
    meta_description: `Unlikely that this card actually represents a physical death. Typically it implies an end, possibly of a relationship or interest, and therefore implies an increased sense of self-awareness.`,
    meta_upright: `Endings, change, transformation, transition`,
    meta_reversed: `Resistance to change, personal transformation, inner purging`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/death/`
  },
  {
    name: `Temperance`,
    number: 14,
    img: `img/deck/14_Temperance.jpg`,
    orientation: [],
    meta_description: `This card indicates that you should learn to bring about balance, patience and moderation in your life. You should take the middle road, avoiding extremes and maintain a sense of calm.`,
    meta_upright: `Balance, moderation, patience, purpose`,
    meta_reversed: `Imbalance, excess, self-healing, re-alignment`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/temperance/`
  },
  {
    name: `The Devil`,
    number: 15,
    img: `img/deck/15_Devil.jpg`,
    orientation: [],
    meta_description: `It represents being seduced by the material world and physical pleasures. Also living in fear, domination and bondage, being caged by an overabundance of luxury, discretion should be used in personal and business matters.`,
    meta_upright: `Shadow self, attachment, addiction, restriction, sexuality`,
    meta_reversed: `Releasing limiting beliefs, exploring dark thoughts, detachment`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/devil/`
  },
  {
    name: `The Tower`,
    number: 16,
    img: `img/deck/16_Tower.jpg`,
    orientation: [],
    meta_description: `The Tower is commonly interpreted as meaning danger, crisis, destruction, and liberation. It is associated with sudden unforseen change.`,
    meta_upright: `Sudden change, upheaval, chaos, revelation, awakening`,
    meta_reversed: `Personal transformation, fear of change, averting disaster`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/tower/`
  },
  {
    name: `The Star`,
    number: 17,
    img: `img/deck/17_Star.jpg`,
    orientation: [],
    meta_description: `When the Star card appears, you are likely to find yourself feeling inspired. It brings renewed hope and faith and a sense that you are truly blessed by the universe at this time.`,
    meta_upright: `Hope, faith, purpose, renewal, spirituality`,
    meta_reversed: `Lack of faith, despair, self-trust, disconnection`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/star/`
  },
  {
    name: `The Moon`,
    number: 18,
    img: `img/deck/18_Moon.jpg`,
    orientation: [],
    meta_description: `The Moon is a card of illusion and deception, and therefore often suggests a time when something is not as it appears to be. Perhaps a misunderstanding on your part, or a truth you cannot admit to yourself.`,
    meta_upright: `Illusion, fear, anxiety, subconscious, intuition`,
    meta_reversed: `Release of fear, repressed emotion, inner confusion`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/moon/`
  },
  {
    name: `The Sun`,
    number: 19,
    img: `img/deck/19_Sun.jpg`,
    orientation: [],
    meta_description: `The card portends good fortune, happiness, joy and harmony. It represents the universe coming together and agreeing with your path and aiding forward movement into something greater.`,
    meta_upright: `Positivity, fun, warmth, success, vitality`,
    meta_reversed: `Inner child, feeling down, overly optimistic`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/sun/`
  },
  {
    name: `Judgement`,
    number: 20,
    img: `img/deck/20_Judgement.jpg`,
    orientation: [],
    meta_description: `This card is referred to as a time of resurrection and awakening, a time when a period of our life comes to an absolute end making way for dynamic new beginnings.`,
    meta_upright: `Judgement, rebirth, inner calling, absolution`,
    meta_reversed: `Self-doubt, inner critic, ignoring the call`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/judgement/`
  },
  {
    name: `The World`,
    number: 21,
    img: `img/deck/21_World.jpg`,
    orientation: [],
    meta_description: `The World represents an ending to a cycle of life, a pause in life before the next big cycle beginning with the fool. It is an indicator of a major and inexorable change, of tectonic breadth.`,
    meta_upright: `Completion, integration, accomplishment, travel`,
    meta_reversed: `Seeking personal closure, short-cuts, delays`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/world/`
  },
  {
    name: `The Ace of Wands`,
    number: 22,
    img: `img/deck/22_Ace_of_Wands.jpg`,
    orientation: [],
    meta_description: `This card represents a propitious new beginning or a turn for the better. When this card appears, our optimism should be used as a guide to our dreams.`,
    meta_upright: `Inspiration, power, creation, beginnings, potential`,
    meta_reversed: `Delays, lack of motivation, weighed down`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/ace-of-wands/`
  },
  {
    name: `The Two of Wands`,
    number: 23,
    img: `img/deck/23_Two_of_Wands.jpg`,
    orientation: [],
    meta_description: `The Two of Wands is a close relative of it's preceding card, the Ace of Wands. Here, instead of focusing on your unbridled enthusiasm for a new pursuit, a focus on careful consideration and planning is called for.`,
    meta_upright: `Future planning, progress, decisions, discovery`,
    meta_reversed: `Fear of unknown, lack of planning`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/two-of-wands/`
  },
  {
    name: `The Three of Wands`,
    number: 24,
    img: `img/deck/24_Three_of_Wands.jpg`,
    orientation: [],
    meta_description: `The card indicates that the planning we've made for our future is considerate and serious. The serious time we've spent in preparation suggests a solid foundation for the future.`,
    meta_upright: `Preparation, foresight, enterprise, expansion`,
    meta_reversed: `Lack of foresight, delays, obstacles to long-term goals`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/three-of-wands/`
  },
  {
    name: `The Four of Wands`,
    number: 25,
    img: `img/deck/25_Four_of_Wands.jpg`,
    orientation: [],
    meta_description: `The Four of Wands heralds celebration. While it relates mostly to the smaller things in life, this card should help remind us to enjoy the small victories and harmonies in life.`,
    meta_upright: `Celebration, harmony, marriage, home, community`,
    meta_reversed: `Breakdown in communication, transition`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/four-of-wands/`
  },
  {
    name: `The Five of Wands`,
    number: 26,
    img: `img/deck/26_Five_of_Wands.jpg`,
    orientation: [],
    meta_description: `This card alludes to conflict in our lives, whether it be the conflict of competition or the feeling that nothing is going our way. When we draw the Five of Wands, we should remember conflicts are better addressed quickly and that patience working through them removes a great deal of the stress they cause.`,
    meta_upright: `Disagreement, competition, strife, tension, conflict`,
    meta_reversed: `Conflict avoidance, increased focus on goals`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/five-of-wands/`
  },
  {
    name: `The Six of Wands`,
    number: 27,
    img: `img/deck/27_Six_of_Wands.jpg`,
    orientation: [],
    meta_description: `The minor counterpart of the Chariot, the Six of Wands augurs public recognition for hard work and acheiving our gaols.`,
    meta_upright: `Public recognition, victory, progress, self-confidence`,
    meta_reversed: `Egotism, disrepute, lack of confidence, fall from grace`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/six-of-wands/`
  },
  {
    name: `The Seven of Wands`,
    number: 28,
    img: `img/deck/28_Seven_of_Wands.jpg`,
    orientation: [],
    meta_description: `The meaning of the Seven of Wands is clear in its depiction: taking a stand. Thought not all stands are worth taking, and we should be careful to reflect on whether we've chosen the right hill to die on.`,
    meta_upright: `Challenge, competition, perseverance`,
    meta_reversed: `Giving up, overwhelmed, overly protective`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/seven-of-wands/`
  },
  {
    name: `The Eight of Wands`,
    number: 29,
    img: `img/deck/29_Eight_of_Wands.jpg`,
    orientation: [],
    meta_description: `Often, the Eight of Wands is a sign that we are ready to confront the challenges facing us. It also may indicate that important news may soon arrive.`,
    meta_upright: `Speed, action, air travel, movement, swift change`,
    meta_reversed: `Delays, frustration, holding off`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/eight-of-wands/`
  },
  {
    name: `The Nine of Wands`,
    number: 30,
    img: `img/deck/30_Nine_of_Wands.jpg`,
    orientation: [],
    meta_description: `The character in the card's portrait cuts a weary figure, and the meaning of the card derives from both of this word's meanings. We should be careful in our approach to problems, but also feel what strength there is in <i>stamina</i> when facing our troubles.`,
    meta_upright: `Courage, persistence, test of faith, resilience`,
    meta_reversed: `On edge, defensive, hesitant, paranoia`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/nine-of-wands/`
  },
  {
    name: `The Ten of Wands`,
    number: 31,
    img: `img/deck/31_Ten_of_Wands.jpg`,
    orientation: [],
    meta_description: `The Ten of Wands is all about responsibility. The figure in the card's portrait struggles with a heavy load, indicating that we may be trying to do too much. It might also indicate that soon we will assume more responsibility than we are used to.`,
    meta_upright: `Burden, responsibility, hard work, stress, achievement`,
    meta_reversed: `Taking on too much, avoiding responsibility`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/ten-of-wands/`
  },
  {
    name: `The Page of Wands`,
    number: 32,
    img: `img/deck/32_Page_of_Wands.jpg`,
    orientation: [],
    meta_description: `The Page of Wands is the harbinger of unencumbered passions, the spark in us that leads to creative explosions, and child-like wonder in the face of new ideas. This card should give us courage in pursuing long-debated creative ideas, and permission to be at our most whimiscal.`,
    meta_upright: `Enthusiasm, exploration, discovery, free spirit`,
    meta_reversed: `Setbacks to new ideas, pessimism, lack of direction`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/page-of-wands/`
  },
  {
    name: `The Knight of Wands`,
    number: 33,
    img: `img/deck/33_Knight_of_Wands.jpg`,
    orientation: [],
    meta_description: `THe Knight of Wands is cocky and adventerous, but there is always a time and place for boldness. We should consider whether we are rushing in our pursuits, and if our unbridled confidence is helping or harming us.`,
    meta_upright: `Energy, passion, lust, action, adventure, impulsiveness`,
    meta_reversed: `Haste, scattered energy, delays, frustration`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/knight-of-wands/`
  },
  {
    name: `The Queen of Wands`,
    number: 34,
    img: `img/deck/34_Queen_of_Wands.jpg`,
    orientation: [],
    meta_description: `This Queen is suffused with all the enchantment of the suit of wands. She asks us to emulate her, bringing her belief, grace, charm, and steadfastness to the inward aspects of our own lives.`,
    meta_upright: `Exuberance, warmth, vibrancy, determination`,
    meta_reversed: `Shrinking violet, aggressive, demanding`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/queen-of-wands/`
  },
  {
    name: `The King of Wands`,
    number: 35,
    img: `img/deck/35_King_of_Wands.jpg`,
    orientation: [],
    meta_description: `This King is suffused with creative vigor and drama. He asks us to emulate him, bringing his confidence, belief, and assuredness to our pursuits in life.`,
    meta_upright: `Natural-born leader, vision, entrepreneur, honour`,
    meta_reversed: `Impulsiveness, haste, ruthless, high expectations`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/king-of-wands/`
  },
  {
    name: `The Ace of Pentacles`,
    number: 36,
    img: `img/deck/36_Ace_of_Pentacles.jpg`,
    orientation: [],
    meta_description: `This card show prosperity and comfortable material conditions, but whether these are of advantage to the possessor will depend on whether the card is reversed or not. -A.E. Waite`,
    meta_upright: `A new financial or career opportunity, manifestation, abundance`,
    meta_reversed: `Lost opportunity, lack of planning and foresight`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/ace-of-pentacles/`
  },
  {
    name: `The Two of Pentacles `,
    number: 37,
    img: `img/deck/37_Two_of_Pentacles.jpg`,
    orientation: [],
    meta_description: `On the one hand it is a card of fun, recreation and its connections, which is the subject of the design; but it is read also as news and messages in writing, as obstacles, agitation, trouble, embroilment. -A.E. Waite `,
    meta_upright: `Multiple priorities, time management, prioritisation, adaptability`,
    meta_reversed: `Over-committed, disorganisation, reprioritisation`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/two-of-pentacles/`
  },
  {
    name: `The Three of Pentacles`,
    number: 38,
    img: `img/deck/38_Three_of_Pentacles.jpg`,
    orientation: [],
    meta_description: `Métier, trade, skilled labour; usually, however, regarded as a card of nobility, aristocracy, renown, glory.  -A.E. Waite`,
    meta_upright: `Teamwork, collaboration, learning, implementation`,
    meta_reversed: `Disharmony, misalignment, working alone`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/three-of-pentacles/`
  },
  {
    name: `The Four of Pentacles`,
    number: 39,
    img: `img/deck/39_Four_of_Pentacles.jpg`,
    orientation: [],
    meta_description: `This card suggest the surety of possessions, cleaving to that which one has, gift, legacy, inheritance.  -A.E. Waite`,
    meta_upright: `Saving money, security, conservatism, scarcity, control`,
    meta_reversed: `Over-spending, greed, self-protection`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/four-of-pentacles/`
  },
  {
    name: `The Five of Pentacles`,
    number: 40,
    img: `img/deck/40_Five_of_Pentacles.jpg`,
    orientation: [],
    meta_description: `This card foretells material trouble above all, whether in the form illustrated--that is, destitution--or otherwise. For some cartomancists, it is a card of love and lovers-wife, husband, friend, mistress; also concordance, affinities. These alternatives cannot be harmonized.  -A.E. Waite`,
    meta_upright: `Financial loss, poverty, lack mindset, isolation, worry`,
    meta_reversed: `Recovery from financial loss, spiritual poverty`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/five-of-pentacles/`
  },
  {
    name: `The Six of Pentacles`,
    number: 41,
    img: `img/deck/41_Six_of_Pentacles.jpg`,
    orientation: [],
    meta_description: `The Six of Pentacles represents presents, gifts, and gratification. Another account says the card calls for attention, vigilance, or that now is the accepted time, but especially present prosperity  -A.E. Waite`,
    meta_upright: `Giving, receiving, sharing wealth, generosity, charity`,
    meta_reversed: `Self-care, unpaid debts, one-sided charity`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/six-of-pentacles/`
  },
  {
    name: `The Seven of Pentacles`,
    number: 42,
    img: `img/deck/42_Seven_of_Pentacles.jpg`,
    orientation: [],
    meta_description: `A young man, leaning on his staff, looks intently at seven pentacles attached to a clump of greenery on his right; one would say that these were his treasures and that his heart was there. The meanings in this card are exceedingly contradictory; in the main, it is a card of money, business, barter; but one reading gives altercation, quarrels--and another innocence, ingenuity, and purgation.  -A.E. Waite `,
    meta_upright: `Long-term view, sustainable results, perseverance, investment`,
    meta_reversed: `Lack of long-term vision, limited success or reward`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/seven-of-pentacles/`
  },
  {
    name: `The Eight of Pentacles`,
    number: 43,
    img: `img/deck/43_Eight_of_Pentacles.jpg`,
    orientation: [],
    meta_description: `The man at work depicted in the card represents a kind of gain different from most of the Pentacle suit. Here, the man toils at his craft, not for financial benefit (though it may come!) but for love of the craft and pursuit of mastery. We should see this card as an encouraging sign in our worklives or personal creative pursuits.`,
    meta_upright: `Apprenticeship, repetitive tasks, mastery, skill development`,
    meta_reversed: `Self-development, perfectionism, misdirected activity`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/eight-of-pentacles/`
  },
  {
    name: `The Nine of Pentacles`,
    number: 44,
    img: `img/deck/44_Nine_of_Pentacles.jpg`,
    orientation: [],
    meta_description: `The Nine of Pentacles augurs a good turn after a period of intensely hard work. A great financial boon may be coming, or it might just be that respite may soon be ours.`,
    meta_upright: `Abundance, luxury, self-sufficiency, financial independence`,
    meta_reversed: `Self-worth, over-investment in work, hustling`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/nine-of-pentacles/`
  },
  {
    name: `The Ten of Pentacles`,
    number: 45,
    img: `img/deck/45_Ten_of_Pentacles.jpg`,
    orientation: [],
    meta_description: `The Ten of Pentacles indicates great stability in our financial and emotional lives. We should never forget, as the card shows us, that this stability is never the work of one person alone, but of a community, familial and otherwise.`,
    meta_upright: `Wealth, financial security, family, long-term success, contribution`,
    meta_reversed: `The dark side of wealth, financial failure or loss`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/ten-of-pentacles/`
  },
  {
    name: `The Page of Pentacles`,
    number: 46,
    img: `img/deck/46_Page_of_Pentacles.jpg`,
    orientation: [],
    meta_description: `This Page brings tidings of our abilities to experience financial stability, wealth, and stability--all the promise of the Pentacles suit. `,
    meta_upright: `Manifestation, financial opportunity, skill development`,
    meta_reversed: `Lack of progress, procrastination, learn from failure`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/page-of-pentacles/`
  },
  {
    name: `The Knight of Pentacles`,
    number: 47,
    img: `img/deck/47_Knight_of_Pentacles.jpg`,
    orientation: [],
    meta_description: `As with all Knights, the Knight of Pentacles represents a Janian prospect. He invites us to examine the differences between diligent work and grinding, prudence and depravation. Which is more accurate in describing our lives and actions?`,
    meta_upright: `Hard work, productivity, routine, conservatism`,
    meta_reversed: `Self-discipline, boredom, feeling ‘stuck’, perfectionism`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/knight-of-pentacles/`
  },
  {
    name: `The Queen of Pentacles`,
    number: 48,
    img: `img/deck/48_Queen_of_Pentacles.jpg`,
    orientation: [],
    meta_description: ``,
    meta_upright: `Nurturing, practical, providing financially, a working parent`,
    meta_reversed: `Financial independence, self-care, work-home conflict`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/queen-of-pentacles/`
  },
  {
    name: `The King of Pentacles`,
    number: 49,
    img: `img/deck/49_King_of_Pentacles.jpg`,
    orientation: [],
    meta_description: ``,
    meta_upright: `Wealth, business, leadership, security, discipline, abundance`,
    meta_reversed: `Financially inept, obsessed with wealth and status, stubborn`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/king-of-pentacles/`
  },
  {
    name: `The Ace of Cups`,
    number: 50,
    img: `img/deck/50_Ace_of_Cups.jpg`,
    orientation: [],
    meta_description: ``,
    meta_upright: `Love, new relationships, compassion, creativity`,
    meta_reversed: `Self-love, intuition, repressed emotions`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/ace-of-cups/`
  },
  {
    name: `The Two of Cups`,
    number: 51,
    img: `img/deck/51_Two_of_Cups.jpg`,
    orientation: [],
    meta_description:``,
    meta_upright: `Unified love, partnership, mutual attraction`,
    meta_reversed: `Self-love, break-ups, disharmony, distrust`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/two-of-cups/`
  },
  {
    name: `The Three of Cups`,
    number: 52,
    img: `img/deck/52_Three_of_Cups.jpg`,
    orientation: [],
    meta_description: ``,
    meta_upright: `Celebration, friendship, creativity, collaborations`,
    meta_reversed: `Independence, alone time, hardcore partying, ‘three’s a crowd’`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/three-of-cups/`
  },
  {
    name: `The Four of Cups`,
    number: 53,
    img: `img/deck/53_Four_of_Cups.jpg`,
    orientation: [],
    meta_description: ``,
    meta_upright: `Meditation, contemplation, apathy, reevaluation`,
    meta_reversed: `Retreat, withdrawal, checking in for alignment`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/four-of-cups/`
  },
  {
    name: `The Five of Cups`,
    number: 54,
    img: `img/deck/54_Five_of_Cups.jpg`,
    orientation: [],
    meta_description: ``,
    meta_upright: `Regret, failure, disappointment, pessimism`,
    meta_reversed: `Personal setbacks, self-forgiveness, moving on`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/five-of-cups/`
  },
  {
    name: `The Six of Cups`,
    number: 55,
    img: `img/deck/55_Six_of_Cups.jpg`,
    orientation: [],
    meta_description: ``,
    meta_upright: `Revisiting the past, childhood memories, innocence, joy`,
    meta_reversed: `Living in the past, forgiveness, lacking playfulness`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/six-of-cups/`
  },
  {
    name: `The Seven of Cups`,
    number: 56,
    img: `img/deck/56_Seven_of_Cups.jpg`,
    orientation: [],
    meta_description: ``,
    meta_upright: `Opportunities, choices, wishful thinking, illusion`,
    meta_reversed: `Alignment, personal values, overwhelmed by choices`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/seven-of-cups/`
  },
  {
    name: `The Eight of Cups`,
    number: 57,
    img: `img/deck/57_Eight_of_Cups.jpg`,
    orientation: [],
    meta_description: ``,
    meta_upright: `Disappointment, abandonment, withdrawal, escapism`,
    meta_reversed: `Trying one more time, indecision, aimless drifting, walking away.`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/eight-of-cups/`
  },
  {
    name: `The Nine of Cups`,
    number: 58,
    img: `img/deck/58_Nine_of_Cups.jpg`,
    orientation: [],
    meta_description: ``,
    meta_upright: `Contentment, satisfaction, gratitude, wish come true`,
    meta_reversed: `Inner happiness, materialism, dissatisfaction, indulgence`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/nine-of-cups/`
  },
  {
    name: `The Ten of Cups`,
    number: 59,
    img: `img/deck/59_Ten_of_Cups.jpg`,
    orientation: [],
    meta_description: ``,
    meta_upright: `Divine love, blissful relationships, harmony, alignment`,
    meta_reversed: `Disconnection, misaligned values, struggling relationships`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/ten-of-cups/`
  },
  {
    name: `The Page of Cups`,
    number: 60,
    img: `img/deck/60_Page_of_Cups.jpg`,
    orientation: [],
    meta_description: ``,
    meta_upright: `Creative opportunities, intuitive messages, curiosity, possibility`,
    meta_reversed: `New ideas, doubting intuition, creative blocks, emotional immaturity`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/page-of-cups/`
  },
  {
    name: `The Knight of Cups`,
    number: 61,
    img: `img/deck/61_Knight_of_Cups.jpg`,
    orientation: [],
    meta_description: ``,
    meta_upright: `Creativity, romance, charm, imagination, beauty`,
    meta_reversed: `Overactive imagination, unrealistic, jealous, moody`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/knight-of-cups/`
  },
  {
    name: `The Queen of Cups`,
    number: 62,
    img: `img/deck/62_Queen_of_Cups.jpg`,
    orientation: [],
    meta_description: ``,
    meta_upright: `Compassionate, caring, emotional stable, intuitive, in flow`,
    meta_reversed: `Inner feelings, self-care, self-love, co-dependency`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/queen-of-cups/`
  },
  {
    name: `The King of Cups`,
    number: 63,
    img: `img/deck/63_King_of_Cups.jpg`,
    orientation: [],
    meta_description: ``,
    meta_upright: `Emotionally balanced, compassionate, diplomatic`,
    meta_reversed: `Self-compassion, inner feelings, moodiness, emotional manipulative`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/king-of-cups/`
  },
  {
    name: `The Ace of Swords`,
    number: 64,
    img: `img/deck/64_Ace_of_Swords.jpg`,
    orientation:[],
    meta_description: ``,
    meta_upright: `Raw power, victory, break-throughs, mental clarity`,
    meta_reversed: `Confusion, chaos, lack of clarity`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/ace-of-swords/`
  },
  {
    name: `The Two of Swords`,
    number: 65,
    img: `img/deck/65_Two_of_Swords.jpg`,
    orientation:[],
    meta_description: ``,
    meta_upright: `Indecision, choices, truce, stalemate, blocked emotions`,
    meta_reversed: `Indecision, confusion, information overload`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/two-of-swords/`
  },
  {
    name: `The Three of Swords`,
    number: 66,
    img: `img/deck/66_Three_of_Swords.jpg`,
    orientation:[],
    meta_description: ``,
    meta_upright: `Painful separation, sorrow heartbreak, grief, rejection`,
    meta_reversed: `Releasing pain, optimism, forgiveness`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/three-of-swords/`
  },
  {
    name: `The Four of Swords`,
    number: 67,
    img: `img/deck/67_Four_of_Swords.jpg`,
    orientation:[],
    meta_description: ``,
    meta_upright: `Contemplation, recuperation, passivity, relaxation, rest`,
    meta_reversed: `Restlessness, burn-out, lack of progress`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/four-of-swords/`
  },
  {
    name: `The Five of Swords`,
    number: 68,
    img: `img/deck/68_Five_of_Swords.jpg`,
    orientation:[],
    meta_description: ``,
    meta_upright: `Conflict, tension, loss, defeat, win at all costs, betrayal`,
    meta_reversed: `Open to change, past resentment`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/five-of-swords/`
  },
  {
    name: `The Six of Swords`,
    number: 69,
    img: `img/deck/69_Six_of_Swords.jpg`,
    orientation:[],
    meta_description: ``,
    meta_upright: `Regretful but necessary transition, rite of passage`,
    meta_reversed: `Cannot move on, carrying baggage`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/six-of-swords/`
  },
  {
    name: `The Seven of Swords`,
    number: 70,
    img: `img/deck/70_Seven_of_Swords.jpg`,
    orientation:[],
    meta_description: ``,
    meta_upright: `Betrayal, deception, getting away with something, stealth`,
    meta_reversed: `Mental challenges, breaking free`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/seven-of-swords/`
  },
  {
    name: `The Eight of Swords`,
    number: 71,
    img: `img/deck/71_Eight_of_Swords.jpg`,
    orientation:[],
    meta_description: ``,
    meta_upright: `Isolation, self-imposed restriction, imprisonment`,
    meta_reversed: ` Open to new perspectives, release`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/eight-of-swords/`
  },
  {
    name: `The Nine of Swords`,
    number: 72,
    img: `img/deck/72_Nine_of_Swords.jpg`,
    orientation:[],
    meta_description: ``,
    meta_upright: `Depression, nightmares, intense anxiety, despair`,
    meta_reversed: `Hopelessness, severe depression, torment`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/nine-of-swords/`
  },
  {
    name: `The Ten of Swords`,
    number: 73,
    img: `img/deck/73_Ten_of_Swords.jpg`,
    orientation:[],
    meta_description: ``,
    meta_upright: `Back-stabbed, defeat, crisis, betrayal, endings, loss`,
    meta_reversed: `Recovery, regeneration, fear of ruin, inevitable end`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/ten-of-swords/`
  },
  {
    name: `The Page of Swords`,
    number: 74,
    img: `img/deck/74_Page_of_Swords.jpg`,
    orientation:[],
    meta_description: ``,
    meta_upright: `Talkative, curious, mentally restless, energetic`,
    meta_reversed: `All talk and no action, haste, undelivered promises`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/page-of-swords/`
  },
  {
    name: `The Knight of Swords`,
    number: 75,
    img: `img/deck/75_Knight_of_Swords.jpg`,
    orientation:[],
    meta_description: ``,
    meta_upright: `Opinionated, hasty, action-oriented, communicative`,
    meta_reversed: `Scattered thought, disregard for consequences`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/knight-of-swords/`
  },
  {
    name: `The Queen of Swords`,
    number: 76,
    img: `img/deck/76_Queen_of_Swords.jpg`,
    orientation:[],
    meta_description: ``,
    meta_upright: `Quick thinker, organised, perceptive, independent`,
    meta_reversed: `Overly-emotional, bitchy, cold-hearted`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/queen-of-swords/`
  },
  {
    name: `The King of Swords`,
    number: 77,
    img: `img/deck/77_King_of_Swords.jpg`,
    orientation:[],
    meta_description: ``,
    meta_upright: `Clear thinking, intellectual power, authority, truth`,
    meta_reversed: `Manipulative, tyrannical, abusive`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/king-of-swords/`
  }
]
const spread_position_description = [
  {
    name: `true_love`,
    position_descriptions: [`Your and your feelings`, `Your partner and their feelings`, `What connects the two of you`, `What keeps your relationship together`, `The issues you need to address`, `Will it work?`]
  },
  {
    name: `rule_of_three`,
    position_descriptions: [`The past`, `The present`, `The future`]
  },
  {
    name: `success`,
    position_descriptions: [`The heart of the problem at hand`, `Your present challenge`, `Underlying problems you should keep in mind`, `What can help you`, `What you need to do to increase your chance of success`]
  }
]


let spread = 0;
let drawnCards = [];

//User Logic

$(function() {
  console.log(spread_position_description[0].position_descriptions[1])
  $('#three').click(function() {
    spread = 3;
    hideAndShow();
    $('#rule_of_three').show();
    $(`#deckDraw`).click(function() {
      drawThree();
      checkIfAllDrawn();
    });
  });
  $('#true_love').click(function() {
    spread = 6;
    hideAndShow();
    $('#true_love_spread').show();
    $(`#deckDraw`).click(function() {
      drawTrueLove();
      checkIfAllDrawn();
    });
  });
  $(`#success`).click(function() {
    spread = 5;
    hideAndShow();
    $('#success_spread').show();
    $(`#deckDraw`).click(function() {
      drawSuccess();
      checkIfAllDrawn();
    });
  });
});
