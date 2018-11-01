function Deck (cards) {
  this.cards = cards;
}

const rider_waite_cards =
[
  {
    name:'The Fool',
    number: 0,
    img: '../img/deck/00_Fool.jpg',
    orientation: [],
    meta_upright: `Beginnings, innocence, spontaneity, a free spirit`,
    meta_reversed: `Holding back, recklessness, risk-taking`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/fool/`
  },
  {
    name:'The Magician',
    number: 1,
    img: '../img/deck/01_Magician.jpg',
    orientation: [],
    meta_upright: `Manifestation, resourcefulness, power, inspired action`,
    meta_reversed: `Manipulation, poor planning, untapped talents`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/magician/`
  },
  {
    name: 'The High Priestess',
    number: 2,
    img: `../img/deck/02_High_Priestess`,
    orientation: [],
    meta_upright: `Intuition, sacred knowledge, divine feminine, the subconscious mind`,
    meta_reversed: `Secrets, disconnected from intuition, withdrawal and silence`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/high-priestess/`
  },
  {
    name: 'The Empress',
    number: 3,
    img: `../img/deck/03_Empress.jpg`,
    orientation: [],
    meta_upright: `Femininity, beauty, nature, nurturing, abundance`,
    meta_reversed: `Creative block, dependence on others`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/empress/`
  },
  {
    name: 'The Emperor',
    number: 4,
    img: `../img/deck/04_Emperor.jpg`,
    orientation: [],
    meta_upright: `Authority, establishment, structure, a father figure`,
    meta_reversed: `Domination, excessive control, lack of discipline, inflexibility`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/emperor/`
  },
  {
    name: 'The Hierophant',
    number: 5,
    img: `../img/deck/05_Hierophant.jpg`,
    orientation: [],
    meta_upright: `Spiritual wisdom, religious beliefs, conformity, tradition, institutions`,
    meta_reversed: `Personal beliefs, freedom, challenging the status quo`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/hierophant/`
  },
  {
    name: `The Lovers`,
    number: 6,
    img: `../img/deck/06_Lovers.jpg`,
    orientation: [],
    meta_upright: `Love, harmony, relationships, values alignment, choices`,
    meta_reversed: `Self-love, disharmony, imbalance, misalignment of values`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/lovers/`
  },
  {
    name: `The Chariot`,
    number: 7,
    img: `../img/deck/07_Chariot.jpg`,
    orientation: [],
    meta_upright: `Control, willpower, success, action, determination`,
    meta_reversed: `Self-discipline, opposition, lack of direction`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/chariot/`
  },
  {
    name: `Strength`,
    number: 8,
    img: `../img/deck/08_Strength.jpg`,
    orientation: [],
    meta_upright: `Strength, courage, persuasion, influence, compassion`,
    meta_reversed: `Inner strength, self-doubt, low energy, raw emotion.`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/strength/`
  },
  {
    name: `The Hermit`,
    number: 9,
    img: `../img/deck/09_Hermit.jpg`,
    orientation: [],
    meta_upright: `Soul-searching, introspection, being alone, inner guidance`,
    meta_reversed: `Isolation, loneliness, withdrawal`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/hermit/`
  },
  {
    name: `The Wheel of Fortune`,
    number: 10,
    img: `../img/deck/10_Wheel_of_Fortune.jpg`,
    orientation: [],
    meta_upright: `Good luck, karma, life cycles, destiny, a turning point`,
    meta_reversed: `Bad luck, resistance to change, breaking cycles`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/wheel-of-fortune/`
  },
  {
    name: `Justice`,
    number: 11,
    img: `../img/deck/11_Justice.jpg`,
    orientation: [],
    meta_upright: `Justice, fairness, truth, cause and effect, law`,
    meta_reversed: `Unfairness, lack of accountability, dishonesty`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/justice/`
  },
  {
    name: `The Hanged Man`,
    number: 12,
    img: `../img/deck/12_Hanged_Man.jpg`,
    orientation: [],
    meta_upright: `Pause, surrender, letting go, new perspectives`,
    meta_reversed: `Delays, resistance, stalling, indecision`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/hanged-man/`
  },
  {
    name: `Death`,
    number: 13,
    img: `../img/deck/13_Death.jpg`,
    orientation: [],
    meta_upright: `Endings, change, transformation, transition`,
    meta_reversed: `Resistance to change, personal transformation, inner purging`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/death/`
  },
  {
    name: `Temperance`,
    number: 14,
    img: `../img/deck/14_Temperance.jpg`,
    orientation: [],
    meta_upright: `Balance, moderation, patience, purpose`,
    meta_reversed: `Imbalance, excess, self-healing, re-alignment`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/temperance/`
  },
  {
    name: `The Devil`,
    number: 15,
    img: `../img/deck/15_Devil.jpg`,
    orientation: [],
    meta_upright: `Shadow self, attachment, addiction, restriction, sexuality`,
    meta_reversed: `Releasing limiting beliefs, exploring dark thoughts, detachment`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/devil/`
  },
  {
    name: `The Tower`,
    number: 16,
    img: `../img/deck/16_Tower.jpg`,
    orientation: [],
    meta_upright: `Sudden change, upheaval, chaos, revelation, awakening`,
    meta_reversed: `Personal transformation, fear of change, averting disaster`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/tower/`
  },
  {
    name: `The Star`,
    number: 17,
    img: `../img/deck/17_Star.jpg`,
    orientation: [],
    meta_upright: `Hope, faith, purpose, renewal, spirituality`,
    meta_reversed: `Lack of faith, despair, self-trust, disconnection`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/star/`
  },
  {
    name: `The Moon`,
    number: 18,
    img: `../img/deck/18_Moon.jpg`,
    orientation: [],
    meta_upright: `Illusion, fear, anxiety, subconscious, intuition`,
    meta_reversed: `Release of fear, repressed emotion, inner confusion`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/moon/`
  },
  {
    name: `The Sun`,
    number: 19,
    img: `../img/deck/19_Sun.jpg`,
    orientation: [],
    meta_upright: `Positivity, fun, warmth, success, vitality`,
    meta_reversed: `Inner child, feeling down, overly optimistic`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/sun/`
  },
  {
    name: `Judgement`,
    number: 20,
    img: `../img/deck/20_Judgement.jpg`,
    orientation: [],
    meta_upright: `Judgement, rebirth, inner calling, absolution`,
    meta_reversed: `Self-doubt, inner critic, ignoring the call`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/judgement/`
  },
  {
    name: `The World`,
    number: 21,
    img: `../img/deck/21_World.jpg`,
    orientation: [],
    meta_upright: `Completion, integration, accomplishment, travel`,
    meta_reversed: `Seeking personal closure, short-cuts, delays`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/major-arcana/world/`
  },
  {
    name: `The Ace of Wands`,
    number: 22,
    img: `../img/deck/22_Ace_of_Wands.jpg`,
    orientation: [],
    meta_upright: `Inspiration, power, creation, beginnings, potential`,
    meta_reversed: `Delays, lack of motivation, weighed down`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/ace-of-wands/`
  },
  {
    name: `The Two of Wands`,
    number: 23,
    img: `../img/deck/23_Two_of_Wands.jpg`,
    orientation: [],
    meta_upright: `Future planning, progress, decisions, discovery`,
    meta_reversed: `Fear of unknown, lack of planning`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/two-of-wands/`
  },
  {
    name: `The Three of Wands`,
    number: 24,
    img: `../img/deck/24_Three_of_Wands.jpg`,
    orientation: [],
    meta_upright: `Preparation, foresight, enterprise, expansion`,
    meta_reversed: `Lack of foresight, delays, obstacles to long-term goals`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/three-of-wands/`
  },
  {
    name: `The Four of Wands`,
    number: 25,
    img: `../img/deck/25_Four_of_Wands.jpg`,
    orientation: [],
    meta_upright: `Celebration, harmony, marriage, home, community`,
    meta_reversed: `Breakdown in communication, transition`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/four-of-wands/`
  },
  {
    name: `The Five of Wands`,
    number: 26,
    img: `../img/deck/26_Five_of_Wands.jpg`,
    orientation: [],
    meta_upright: `Disagreement, competition, strife, tension, conflict`,
    meta_reversed: `Conflict avoidance, increased focus on goals`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/five-of-wands/`
  },
  {
    name: `The Six of Wands`,
    number: 27,
    img: `../img/deck/27_Six_of_Wands.jpg`,
    orientation: [],
    meta_upright: `Public recognition, victory, progress, self-confidence`,
    meta_reversed: `Egotism, disrepute, lack of confidence, fall from grace`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/six-of-wands/`
  },
  {
    name: `The Seven of Wands`,
    number: 28,
    img: `../img/deck/28_Seven_of_Wands.jpg`,
    orientation: [],
    meta_upright: `Challenge, competition, perseverance`,
    meta_reversed: `Giving up, overwhelmed, overly protective`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/seven-of-wands/`
  },
  {
    name: `The Eight of Wands`,
    number: 29,
    img: `../img/deck/29_Eight_of_Wands.jpg`,
    orientation: [],
    meta_upright: `Speed, action, air travel, movement, swift change`,
    meta_reversed: `Delays, frustration, holding off`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/eight-of-wands/`
  },
  {
    name: `The Nine of Wands`,
    number: 30,
    img: `../img/deck/30_Nine_of_Wands.jpg`,
    orientation: [],
    meta_upright: `Courage, persistence, test of faith, resilience`,
    meta_reversed: `On edge, defensive, hesitant, paranoia`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/nine-of-wands/`
  },
  {
    name: `The Ten of Wands`,
    number: 31,
    img: `../img/deck/31_Ten_of_Wands.jpg`,
    orientation: [],
    meta_upright: `Burden, responsibility, hard work, stress, achievement`,
    meta_reversed: `Taking on too much, avoiding responsibility`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/ten-of-wands/`
  },
  {
    name: `The Page of Wands`,
    number: 32,
    img: `../img/deck/32_Page_of_Wands.jpg`,
    orientation: [],
    meta_upright: `Enthusiasm, exploration, discovery, free spirit`,
    meta_reversed: `Setbacks to new ideas, pessimism, lack of direction`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/page-of-wands/`
  },
  {
    name: `The Knight of Wands`,
    number: 33,
    img: `../img/deck/33_Knight_of_Wands.jpg`,
    orientation: [],
    meta_upright: `Energy, passion, lust, action, adventure, impulsiveness`,
    meta_reversed: `Haste, scattered energy, delays, frustration`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/knight-of-wands/`
  },
  {
    name: `The Queen of Wands`,
    number: 34,
    img: `../img/deck/34_Queen_of_Wands.jpg`,
    orientation: [],
    meta_upright: `Exuberance, warmth, vibrancy, determination`,
    meta_reversed: `Shrinking violet, aggressive, demanding`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/queen-of-wands/`
  },
  {
    name: `The King of Wands`,
    number: 35,
    img: `../img/deck/35_King_of_Wands.jpg`,
    orientation: [],
    meta_upright: `Natural-born leader, vision, entrepreneur, honour`,
    meta_reversed: `Impulsiveness, haste, ruthless, high expectations`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-wands/king-of-wands/`
  },
  {
    name: `The Ace of Pentacles`,
    number: 36,
    img: `../img/deck/36_Ace_of_Pentacles.jpg`,
    orientation: [],
    meta_upright: `A new financial or career opportunity, manifestation, abundance`,
    meta_reversed: `Lost opportunity, lack of planning and foresight`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/ace-of-pentacles/`
  },
  {
    name: `The Two of Pentacles `,
    number: 37,
    img: `../img/deck/37_Two_of_Pentacles.jpg`,
    orientation: [],
    meta_upright: `Multiple priorities, time management, prioritisation, adaptability`,
    meta_reversed: `Over-committed, disorganisation, reprioritisation`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/two-of-pentacles/`
  },
  {
    name: `The Three of Pentacles`,
    number: 38,
    img: `../img/deck/38_Three_of_Pentacles.jpg`,
    orientation: [],
    meta_upright: `Teamwork, collaboration, learning, implementation`,
    meta_reversed: `Disharmony, misalignment, working alone`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/three-of-pentacles/`
  },
  {
    name: `The Four of Pentacles`,
    number: 39,
    img: `../img/deck/39_Four_of_Pentacles.jpg`,
    orientation: [],
    meta_upright: `Saving money, security, conservatism, scarcity, control`,
    meta_reversed: `Over-spending, greed, self-protection`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/four-of-pentacles/`
  },
  {
    name: `The Five of Pentacles`,
    number: 40,
    img: `../img/deck/40_Five_of_Pentacles.jpg`,
    orientation: [],
    meta_upright: `Financial loss, poverty, lack mindset, isolation, worry`,
    meta_reversed: `Recovery from financial loss, spiritual poverty`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/five-of-pentacles/`
  },
  {
    name: `The Six of Pentacles`,
    number: 41,
    img: `../img/deck/41_Six_of_Pentacles.jpg`,
    orientation: [],
    meta_upright: `Giving, receiving, sharing wealth, generosity, charity`,
    meta_reversed: `Self-care, unpaid debts, one-sided charity`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/six-of-pentacles/`
  },
  {
    name: `The Seven of Pentacles`,
    number: 42,
    img: `../img/deck/42_Seven_of_Pentacles.jpg`,
    orientation: [],
    meta_upright: `Long-term view, sustainable results, perseverance, investment`,
    meta_reversed: `Lack of long-term vision, limited success or reward`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/seven-of-pentacles/`
  },
  {
    name: `The Eight of Pentacles`,
    number: 43,
    img: `../img/deck/43_Eight_of_Pentacles.jpg`,
    orientation: [],
    meta_upright: `Apprenticeship, repetitive tasks, mastery, skill development`,
    meta_reversed: `Self-development, perfectionism, misdirected activity`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/eight-of-pentacles/`
  },
  {
    name: `The Nine of Pentacles`,
    number: 44,
    img: `../img/deck/44_Nine_of_Pentacles.jpg`,
    orientation: [],
    meta_upright: `Abundance, luxury, self-sufficiency, financial independence`,
    meta_reversed: `Self-worth, over-investment in work, hustling`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/nine-of-pentacles/`
  },
  {
    name: `The Ten of Pentacles`,
    number: 45,
    img: `../img/deck/45_Ten_of_Pentacles.jpg`,
    orientation: [],
    meta_upright: `Wealth, financial security, family, long-term success, contribution`,
    meta_reversed: `The dark side of wealth, financial failure or loss`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/ten-of-pentacles/`
  },
  {
    name: `The Page of Pentacles`,
    number: 46,
    img: `../img/deck/46_Page_of_Pentacles.jpg`,
    orientation: [],
    meta_upright: `Manifestation, financial opportunity, skill development`,
    meta_reversed: `Lack of progress, procrastination, learn from failure`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/page-of-pentacles/`
  },
  {
    name: `The Knight of Pentacles`,
    number: 47,
    img: `../img/deck/47_Knight_of_Pentacles.jpg`,
    orientation: [],
    meta_upright: `Hard work, productivity, routine, conservatism`,
    meta_reversed: `Self-discipline, boredom, feeling ‘stuck’, perfectionism`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/knight-of-pentacles/`
  },
  {
    name: `The Queen of Pentacles`,
    number: 48,
    img: `../img/deck/48_Queen_of_Pentacles.jpg`,
    orientation: [],
    meta_upright: `Nurturing, practical, providing financially, a working parent`,
    meta_reversed: `Financial independence, self-care, work-home conflict`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/queen-of-pentacles/`
  },
  {
    name: `The King of Pentacles`,
    number: 49,
    img: `../img/deck/49_King_of_Pentacles.jpg`,
    orientation: [],
    meta_upright: `Wealth, business, leadership, security, discipline, abundance`,
    meta_reversed: `Financially inept, obsessed with wealth and status, stubborn`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-pentacles/king-of-pentacles/`
  },
  {
    name: `The Ace of Cups`,
    number: 50,
    img: `../img/deck/50_Ace_of_Cups.jpg`,
    orientation: [],
    meta_upright: `Love, new relationships, compassion, creativity`,
    meta_reversed: `Self-love, intuition, repressed emotions`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/ace-of-cups/`
  },
  {
    name: `The Two of Cups`,
    number: 51,
    img: `../img/deck/51_Two_of_Cups.jpg`,
    orientation: [],
    meta_upright: `Unified love, partnership, mutual attraction`,
    meta_reversed: `Self-love, break-ups, disharmony, distrust`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/two-of-cups/`
  },
  {
    name: `The Three of Cups`,
    number: 52,
    img: `../img/deck/52_Three_of_Cups.jpg`,
    orientation: [],
    meta_upright: `Celebration, friendship, creativity, collaborations`,
    meta_reversed: `Independence, alone time, hardcore partying, ‘three’s a crowd’`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/three-of-cups/`
  },
  {
    name: `The Four of Cups`,
    number: 53,
    img: `../img/deck/53_Four_of_Cups.jpg`,
    orientation: [],
    meta_upright: `Meditation, contemplation, apathy, reevaluation`,
    meta_reversed: `Retreat, withdrawal, checking in for alignment`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/four-of-cups/`
  },
  {
    name: `The Five of Cups`,
    number: 54,
    img: `../img/deck/54_Five_of_Cups.jpg`,
    orientation: [],
    meta_upright: `Regret, failure, disappointment, pessimism`,
    meta_reversed: `Personal setbacks, self-forgiveness, moving on`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/five-of-cups/`
  },
  {
    name: `The Six of Cups`,
    number: 55,
    img: `../img/deck/55_Six_of_Cups.jpg`,
    orientation: [],
    meta_upright: `Revisiting the past, childhood memories, innocence, joy`,
    meta_reversed: `Living in the past, forgiveness, lacking playfulness`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/six-of-cups/`
  },
  {
    name: `The Seven of Cups`,
    number: 56,
    img: `../img/deck/56_Seven_of_Cups.jpg`,
    orientation: [],
    meta_upright: `Opportunities, choices, wishful thinking, illusion`,
    meta_reversed: `Alignment, personal values, overwhelmed by choices`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/seven-of-cups/`
  },
  {
    name: `The Eight of Cups`,
    number: 57,
    img: `../img/deck/57_Eight_of_Cups.jpg`,
    orientation: [],
    meta_upright: `Disappointment, abandonment, withdrawal, escapism`,
    meta_reversed: `Trying one more time, indecision, aimless drifting, walking away.`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/eight-of-cups/`
  },
  {
    name: `The Nine of Cups`,
    number: 58,
    img: `../img/deck/58_Nine_of_Cups.jpg`,
    orientation: [],
    meta_upright: `Contentment, satisfaction, gratitude, wish come true`,
    meta_reversed: `Inner happiness, materialism, dissatisfaction, indulgence`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/nine-of-cups/`
  },
  {
    name: `The Ten of Cups`,
    number: 59,
    img: `../img/deck/59_Ten_of_Cups.jpg`,
    orientation: [],
    meta_upright: `Divine love, blissful relationships, harmony, alignment`,
    meta_reversed: `Disconnection, misaligned values, struggling relationships`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/ten-of-cups/`
  },
  {
    name: `The Page of Cups`,
    number: 60,
    img: `../img/deck/60_Page_of_Cups.jpg`,
    orientation: [],
    meta_upright: `Creative opportunities, intuitive messages, curiosity, possibility`,
    meta_reversed: `New ideas, doubting intuition, creative blocks, emotional immaturity`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/page-of-cups/`
  },
  {
    name: `The Knight of Cups`,
    number: 61,
    img: `../img/deck/61_Knight_of_Cups.jpg`,
    orientation: [],
    meta_upright: `Creativity, romance, charm, imagination, beauty`,
    meta_reversed: `Overactive imagination, unrealistic, jealous, moody`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/knight-of-cups/`
  },
  {
    name: `The Queen of Cups`,
    number: 62,
    img: `../img/deck/62_Queen_of_Cups.jpg`,
    orientation: [],
    meta_upright: `Compassionate, caring, emotional stable, intuitive, in flow`,
    meta_reversed: `Inner feelings, self-care, self-love, co-dependency`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/queen-of-cups/`
  },
  {
    name: `The King of Cups`,
    number: 63,
    img: `../img/deck/63_King_of_Cups.jpg`,
    orientation: [],
    meta_upright: `Emotionally balanced, compassionate, diplomatic`,
    meta_reversed: `Self-compassion, inner feelings, moodiness, emotional manipulative`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-cups/king-of-cups/`
  },
  {
    name: `The Ace of Swords`,
    number: 64,
    img: `../img/deck/64_Ace_of_Swords.jpg`,
    orientation:[],
    meta_upright: `Raw power, victory, break-throughs, mental clarity`,
    meta_reversed: `Confusion, chaos, lack of clarity`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/ace-of-swords/`
  },
  {
    name: `The Two of Swords`,
    number: 65,
    img: `../img/deck/65_Two_of_Swords.jpg`,
    orientation:[],
    meta_upright: `Indecision, choices, truce, stalemate, blocked emotions`,
    meta_reversed: `Indecision, confusion, information overload`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/two-of-swords/`
  },
  {
    name: `The Three of Swords`,
    number: 66,
    img: `../img/deck/66_Three_of_Swords.jpg`,
    orientation:[],
    meta_upright: `Painful separation, sorrow heartbreak, grief, rejection`,
    meta_reversed: `Releasing pain, optimism, forgiveness`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/three-of-swords/`
  },
  {
    name: `The Four of Swords`,
    number: 67,
    img: `../img/deck/67_Four_of_Swords.jpg`,
    orientation:[],
    meta_upright: `Contemplation, recuperation, passivity, relaxation, rest`,
    meta_reversed: `Restlessness, burn-out, lack of progress`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/four-of-swords/`
  },
  {
    name: `The Five of Swords`,
    number: 68,
    img: `../img/deck/68_Five_of_Swords.jpg`,
    orientation:[],
    meta_upright: `Conflict, tension, loss, defeat, win at all costs, betrayal`,
    meta_reversed: `Open to change, past resentment`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/five-of-swords/`
  },
  {
    name: `The Six of Swords`,
    number: 69,
    img: `../img/deck/69_Six_of_Swords.jpg`,
    orientation:[],
    meta_upright: `Regretful but necessary transition, rite of passage`,
    meta_reversed: `Cannot move on, carrying baggage`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/six-of-swords/`
  },
  {
    name: `The Seven of Swords`,
    number: 70,
    img: `../img/deck/70_Seven_of_Swords.jpg`,
    orientation:[],
    meta_upright: `Betrayal, deception, getting away with something, stealth`,
    meta_reversed: `Mental challenges, breaking free`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/seven-of-swords/`
  },
  {
    name: `The Eight of Swords`,
    number: 71,
    img: `../img/deck/71_Eight_of_Swords.jpg`,
    orientation:[],
    meta_upright: `Isolation, self-imposed restriction, imprisonment`,
    meta_reversed: ` Open to new perspectives, release`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/eight-of-swords/`
  },
  {
    name: `The Nine of Swords`,
    number: 72,
    img: `../img/deck/72_Nine_of_Swords.jpg`,
    orientation:[],
    meta_upright: `Depression, nightmares, intense anxiety, despair`,
    meta_reversed: `Hopelessness, severe depression, torment`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/nine-of-swords/`
  },
  {
    name: `The Ten of Swords`,
    number: 73,
    img: `../img/deck/73_Ten_of_Swords.jpg`,
    orientation:[],
    meta_upright: `Back-stabbed, defeat, crisis, betrayal, endings, loss`,
    meta_reversed: `Recovery, regeneration, fear of ruin, inevitable end`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/ten-of-swords/`
  },
  {
    name: `The Page of Swords`,
    number: 74,
    img: `../img/deck/74_Page_of_Swords.jpg`,
    orientation:[],
    meta_upright: `Talkative, curious, mentally restless, energetic`,
    meta_reversed: `All talk and no action, haste, undelivered promises`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/page-of-swords/`
  },
  {
    name: `The Knight of Swords`,
    number: 75,
    img: `../img/deck/75_Knight_of_Swords.jpg`,
    orientation:[],
    meta_upright: `Opinionated, hasty, action-oriented, communicative`,
    meta_reversed: `Scattered thought, disregard for consequences`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/knight-of-swords/`
  },
  {
    name: `The Queen of Swords`,
    number: 76,
    img: `../img/deck/76_Queen_of_Swords.jpg`,
    orientation:[],
    meta_upright: `Quick thinker, organised, perceptive, independent`,
    meta_reversed: `Overly-emotional, bitchy, cold-hearted`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/queen-of-swords/`
  },
  {
    name: `The King of Swords`,
    number: 77,
    img: `../img/deck/77_King_of_Swords.jpg`,
    orientation:[],
    meta_upright: `Clear thinking, intellectual power, authority, truth`,
    meta_reversed: `Manipulative, tyrannical, abusive`,
    meta_more_info_link: `https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/king-of-swords/`
  }
]

$(function() {
  let currentDeck = new Deck(rider_waite_cards);
  console.log(currentDeck.cards[4]);
});
