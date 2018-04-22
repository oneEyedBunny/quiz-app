const universal_questions = [
  {
    question: 'Where should I apply conditioner in my hair?',
    answers: ['Roots','Ends','Roots & Ends'],
    correct_answer: 'Roots & Ends',
    incorrect_response: 'You should always apply conditioner all over to nourish your scalp and ends',
    id: universal,
    image: "images/shampoo.jpg",
  } ,
    question: 'If I have a cowlick in my bangs, what should I do?',
    answers: ['Use lots of palmade to smooth it','Blowdry my bangs both directions', 'Get rid of the bangs'],
    correct_answer: 'Blowdry my bangs both directions',
    incorrect_response:'',
    id: universal,
  } ,
    question: 'What product is best for messy/tossled styles?',
    answers: ['Sea salt spray in dry hair','Gel in wet hair', 'Oil in dry hair'],
    correct_answer: 'Sea salt spray in dry hair',
    incorrect_response: 'You should spray some sea salt in your hair',
    id: universal,
  } ,
    question: 'If I see white flakes in my hair, what is it?',
    answers: ['Dandruff','Dry scalp', 'An allergic reaction'],
    correct_answer: 'Dry scalp',
    incorrect_response:'Dandruff is a waxy sheet, this is just dry scalp. Go get some moisturizing conditioner and massage it into your scalp',
    id: universal,
  }
];

const short_questions = [
  {
    question: 'How often should I get my haircut?',
    answers: ['Every 3-4 weeks','Every 4-6 weeks','Every 7-10 weeks'],
    correct_answer: 'Every 4-6 weeks',
    incorrect_response:'In order to maintain the look of your short cut, you need to trim it ever 4-6 weeks',
    id: short,
  } ,
    question: 'If I have a cowlick, what should I do?',
    answers: ['Put tons of product in it to weigh it down','Cut it right where the curve of cowlick is', 'Leave it long enough so the weight pulls it down'],
    correct_answer: 'Leave it long enough so the weight pulls it down',
    incorrect_response:'Leaving it longer is typically best',
    id: short,
  } ,
    question: 'What product is best to give good hold?',
    answers: ['Palmade on dry hair','Hairspray on dry hair','Gel in wet hair'],
    correct_answer: 'Palmade on dry hair',
    incorrect_response:"Skip the gel and hairspray, it's soooo 90's. Palamdes come in strong hold",
    id: short,
  }
];

const long_questions = [
  {
    question: 'How often should I get my haircut?',
    answers: ['Every 7-10 weeks','Every 10-14 weeks', "Twice a year"],
    correct_answer: 'Every 10-14 weeks',
    incorrect_response:'Long hair still needs regular trims to get ride of breakage from split ends, come in every 10-14 weeks',
    id: long,
  } ,
    question: 'What product is best for tameing staticy flyaways and frizz?',
    answers: ['Oil based cream on dry hair','hairspray on dry hair', 'anti-humidity cream on wet hair'],
    correct_answer: 'anti-humidity cream on wet hair',
    incorrect_response:'Anti-humidity hair creams applied to wet hair and blowdried in will provide the longest coverage',
    id: long,
  } ,
    question: "Is it ok to brush my hair when it's wet?",
    answers: ["Yes if you're using a fine tooth comb","Yes if it's a wide tooth comb", "Yes if it's a brush with lots of brissles"],
    correct_answer: "Yes if it's a wide tooth comb",
    incorrect_response:"Yes, but make sure you're using a wide tooth. Fine tooth combs and brushes with lots of brissles can tear your hair",
    id: long,
  }
];
const straight_questions = [
  {
    question: 'How often should I wash my hair?',
    answers: ['Every day','Every other day', 'Twice a week'],
    correct_answer: 'Every other day',
    incorrect_response:'Your hair will overproduce oil if you overwash it, so stick to every other day',
    id: straight,
  } ,
    question: 'If my hair is lacking volume, what product is best to use?',
    answers: ['Palmaide for finishing','Mousse while blowdrying', 'Texture dust on dry hair'],
    correct_answer: 'Texture dust on dry hair',
    incorrect_response:'Texture dust is a great way to give volume that can be reactivated throughout the day',
    id: straight,
  } ,
    question: 'What type of shampoo/conditioner are best for my hair?',
    answers: ['Lightweight moisturizing','Volumizing', 'Clarifying'],
    correct_answer: 'Lightweight moisturizing',
    incorrect_response:'Lighweight moisturizing will avoid weighing your hair down',
    id: straight,
  }
];
const curly_questions = [
  {
    question: 'How often should I wash my hair?',
    answers: ['Every day','Every other day', 'Twice a week'],
    correct_answer: 'Twice a week',
    incorrect_response:'Curly hair is prone to dryness, so only wash it twice a week',
    id: curly,
  } ,
    question: 'What type of shampoo/conditioner are best for my hair?',
    answers: ['Heavy moisturizing','Clarifying', "Elasticity building"],
    correct_answer: 'Heavy moisturizing',
    incorrect_response:'Curly hair has an open cuticle and is prone to dryness, combat with a heavy moisturizing product',
    id: curly,
  } ,
    question: 'What should I do to get rid of my pizza wedge shaped hair?',
    answers: ['Use a heavy leave in conditioner','Get a haircut with both internal and external layers', 'Grow it out longer'],
    correct_answer: 'Get a haircut with both internal and external layers',
    incorrect_response:"Layers layers layers, it's the only way to avoid that bulky wedge",
    id: curly,
  }
];
