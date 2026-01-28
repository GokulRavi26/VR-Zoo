// //src/config/animalConfig.js
export const animals = [
  /* ================= JAGUAR ================= */
  {
    id: "jaguar",
    name: {
      en: "Jaguar",
      ta: "ஜாகுவார்",
    },
    model: "/assets/jaguar.glb",
    image: "/assets/jaguar.jpg",
    sound: {
      en: "/assets/lion.mp3",
      ta: "/assets/lion.mp3",
    },
    position: [-20, 2, 23],
    rotation: [0, Math.PI / 2, 0],
    scale: 5,

    description: {
      en: "The jaguar is a powerful predator known for its strength.",
      ta: "ஜாகுவார் அதன் வலிமைக்காக அறியப்படும் சக்திவாய்ந்த வேட்டையாடி.",
    },

    facts: {
      diet: { en: "Carnivore", ta: "மாமிச உண்ணி" },
      habitat: { en: "Rainforests", ta: "மழைக்காடுகள்" },
      lifespan: { en: "12–15 years", ta: "12–15 ஆண்டுகள்" },
    },


    quiz: {
      en: [
        {
          question: "What does a jaguar eat?",
          options: ["Grass", "Meat", "Leaves", "Fruits"],
          answer: "Meat",
          explanation: "Jaguars hunt animals and eat meat.",
        },
        {
          question: "Where do jaguars live?",
          options: ["Rainforests", "Deserts", "Oceans", "Arctic"],
          answer: "Rainforests",
          explanation: "Jaguars mainly live in rainforests.",
        },
        {
          question: "Is a jaguar a carnivore or herbivore?",
          options: ["Herbivore", "Carnivore", "Omnivore", "Insectivore"],
          answer: "Carnivore",
          explanation: "Jaguars eat only meat, so they are carnivores.",
        },
        {
          question: "What is special about a jaguar?",
          options: [
            "It can fly",
            "It is very slow",
            "It is a strong swimmer",
            "It eats plants"
          ],
          answer: "It is a strong swimmer",
          explanation: "Jaguars are excellent swimmers among big cats.",
        },
      ],
      ta: [
        {
          question: "ஜாகுவார் என்ன உணவு உண்ணும்?",
          options: ["புல்", "இறைச்சி", "இலைகள்", "பழங்கள்"],
          answer: "இறைச்சி",
          explanation: "ஜாகுவார்கள் வேட்டையாடி இறைச்சி உண்ணும்.",
        },
        {
          question: "ஜாகுவார்கள் எங்கு வாழ்கின்றன?",
          options: ["மழைக்காடுகள்", "பாலைவனங்கள்", "கடல்கள்", "பனி பகுதி"],
          answer: "மழைக்காடுகள்",
          explanation: "ஜாகுவார்கள் பெரும்பாலும் மழைக்காடுகளில் வாழ்கின்றன.",
        },
        {
          question: "ஜாகுவார் எந்த வகை விலங்கு?",
          options: ["தாவர உண்ணி", "மாமிச உண்ணி", "எல்லாம் உண்ணி", "பூச்சி உண்ணி"],
          answer: "மாமிச உண்ணி",
          explanation: "ஜாகுவார்கள் இறைச்சி மட்டும் உண்ணும்.",
        },
        {
          question: "ஜாகுவாரின் சிறப்பு என்ன?",
          options: [
            "பறக்க முடியும்",
            "மிக மெதுவாக ஓடும்",
            "நன்றாக நீந்தும்",
            "புல் உண்ணும்"
          ],
          answer: "நன்றாக நீந்தும்",
          explanation: "ஜாகுவார்கள் நல்ல நீந்துபவர்கள்.",
        },
      ],
    }

  },

  /* ================= ELEPHANT ================= */
  {
    id: "elephant",
    name: { en: "Elephant", ta: "யானை" },
    model: "/assets/elephant.glb",
    image: "/assets/elephant.jpg",
    sound: {
      en: "/assets/lion.mp3",
      ta: "/assets/lion.mp3",
    },
    position: [-20, 4.5, 10],
    rotation: [0, -Math.PI / 9, 0],
    scale: 0.1,

    description: {
      en: "Elephants are the largest land animals on Earth.",
      ta: "யானைகள் பூமியில் வாழும் மிகப்பெரிய நில விலங்குகள்.",
    },

    facts: {
      diet: { en: "Herbivore", ta: "தாவர உண்ணி" },
      habitat: { en: "Forests & grasslands", ta: "காடுகள் மற்றும் புல்வெளிகள்" },
      lifespan: { en: "60–70 years", ta: "60–70 ஆண்டுகள்" },
    },

    quiz: {
      en: [
        {
          question: "What does an elephant eat?",
          options: ["Meat", "Grass", "Fish", "Insects"],
          answer: "Grass",
          explanation: "Elephants eat plants and grass.",
        },
        {
          question: "Is an elephant a herbivore or carnivore?",
          options: ["Carnivore", "Herbivore", "Omnivore", "Insectivore"],
          answer: "Herbivore",
          explanation: "Elephants eat only plants.",
        },
        {
          question: "Which body part does an elephant use to pick food?",
          options: ["Tail", "Trunk", "Legs", "Ears"],
          answer: "Trunk",
          explanation: "Elephants use their trunk to pick up food.",
        },
        {
          question: "Which animal is the largest land animal?",
          options: ["Lion", "Elephant", "Tiger", "Deer"],
          answer: "Elephant",
          explanation: "Elephants are the largest land animals.",
        },
      ],
      ta: [
        {
          question: "யானை என்ன உண்ணும்?",
          options: ["இறைச்சி", "புல்", "மீன்", "பூச்சிகள்"],
          answer: "புல்",
          explanation: "யானைகள் தாவர உண்ணிகள் ஆகும்.",
        },
        {
          question: "யானை எந்த வகை விலங்கு?",
          options: ["மாமிச உண்ணி", "தாவர உண்ணி", "எல்லாம் உண்ணி", "பூச்சி உண்ணி"],
          answer: "தாவர உண்ணி",
          explanation: "யானைகள் தாவரங்களை மட்டும் உண்ணும்.",
        },
        {
          question: "யானை உணவை எதனால் எடுக்கும்?",
          options: ["வால்", "தும்பிக்கை", "கால்", "காது"],
          answer: "தும்பிக்கை",
          explanation: "யானைகள் தும்பிக்கையால் உணவை எடுக்கும்.",
        },
        {
          question: "பூமியில் மிகப் பெரிய நில விலங்கு எது?",
          options: ["சிங்கம்", "யானை", "புலி", "மான்"],
          answer: "யானை",
          explanation: "யானைகள் மிகப் பெரிய நில விலங்குகள்.",
        },
      ],
    }

  },

  /* ================= LION ================= */
  {
    id: "lion",
    name: { en: "Lion", ta: "சிங்கம்" },
    model: "/assets/lion.glb",
    image: "/assets/lion.jpg",
    sound: {
      en: "/assets/lion.mp3",
      ta: "/assets/lion.mp3",
    },
    position: [35, 1.7, -8],
    rotation: [0, Math.PI, 0],
    scale: 5,

    description: {
      en: "The lion is known as the king of the jungle.",
      ta: "சிங்கம் காடின் அரசன் என்று அழைக்கப்படுகிறது.",
    },

    facts: {
      diet: { en: "Carnivore", ta: "மாமிச உண்ணி" },
      habitat: { en: "Savanna", ta: "சவானா புல்வெளி" },
      lifespan: { en: "10–14 years", ta: "10–14 ஆண்டுகள்" },
    },

    quiz: {
      en: [
        {
          question: "What does a lion eat?",
          options: ["Grass", "Meat", "Fruits", "Insects"],
          answer: "Meat",
          explanation: "Lions are carnivores and eat meat.",
        },
        {
          question: "Where do lions usually live?",
          options: ["Oceans", "Grasslands", "Snow regions", "Rivers"],
          answer: "Grasslands",
          explanation: "Lions live mainly in grasslands and savannas.",
        },
        {
          question: "Is a lion a herbivore or carnivore?",
          options: ["Herbivore", "Carnivore", "Omnivore", "Insectivore"],
          answer: "Carnivore",
          explanation: "Lions eat other animals.",
        },
        {
          question: "Which animal is called the King of the Jungle?",
          options: ["Elephant", "Lion", "Tiger", "Jaguar"],
          answer: "Lion",
          explanation: "The lion is known as the King of the Jungle.",
        },
      ],
      ta: [
        {
          question: "சிங்கம் என்ன உண்ணும்?",
          options: ["புல்", "இறைச்சி", "பழங்கள்", "பூச்சிகள்"],
          answer: "இறைச்சி",
          explanation: "சிங்கம் மாமிச உண்ணி ஆகும்.",
        },
        {
          question: "சிங்கங்கள் பொதுவாக எங்கு வாழ்கின்றன?",
          options: ["கடல்", "புல்வெளி", "பனி பகுதி", "ஆறு"],
          answer: "புல்வெளி",
          explanation: "சிங்கங்கள் பெரும்பாலும் புல்வெளிகளில் வாழ்கின்றன.",
        },
        {
          question: "சிங்கம் எந்த வகை விலங்கு?",
          options: ["தாவர உண்ணி", "மாமிச உண்ணி", "எல்லாம் உண்ணி", "பூச்சி உண்ணி"],
          answer: "மாமிச உண்ணி",
          explanation: "சிங்கங்கள் பிற விலங்குகளை உண்ணும்.",
        },
        {
          question: "‘காட்டின் அரசன்’ என அழைக்கப்படும் விலங்கு எது?",
          options: ["யானை", "சிங்கம்", "புலி", "ஜாகுவார்"],
          answer: "சிங்கம்",
          explanation: "சிங்கம் காட்டின் அரசன் என அழைக்கப்படுகிறது.",
        },
      ],
    }

  },


  /* ================= HIPPOPOTAMUS ================= */
  {
    id: "hippo",
    name: { en: "Hippopotamus", ta: "நீர்யானை" },
    model: "/assets/hippo.glb",
    image: "/assets/hippo.jpg",
    sound: { en: "/assets/lion.mp3", ta: "/assets/lion.mp3" },
    position: [30, 3, 12],
    rotation: [0, -Math.PI / 4, 0],
    scale: 1,

    description: {
      en: "Hippos spend most of their time in water.",
      ta: "நீர்யானைகள் பெரும்பாலும் தண்ணீரில் வாழ்கின்றன.",
    },

    facts: {
      diet: { en: "Herbivore", ta: "தாவர உண்ணி" },
      habitat: { en: "Rivers & lakes", ta: "ஆறுகள் மற்றும் ஏரிகள்" },
      lifespan: { en: "40–50 years", ta: "40–50 ஆண்டுகள்" },
    },

    quiz: {
      en: [
        {
          question: "Where do hippos live?",
          options: ["Water", "Desert", "Forest", "Snow"],
          answer: "Water",
          explanation: "Hippos live in rivers and lakes.",
        },
        {
          question: "What do hippos eat?",
          options: ["Grass", "Meat", "Fish", "Fruits"],
          answer: "Grass",
          explanation: "Hippos are herbivores.",
        },
        {
          question: "Are hippos good swimmers?",
          options: ["Yes", "No"],
          answer: "Yes",
          explanation: "Hippos are strong swimmers.",
        },
        {
          question: "Is hippo a herbivore?",
          options: ["Yes", "No"],
          answer: "Yes",
          explanation: "Hippos eat plants.",
        },
      ],
      ta: [
        {
          question: "நீர்யானைகள் எங்கு வாழ்கின்றன?",
          options: ["தண்ணீர்", "பாலைவனம்", "காடு", "பனி"],
          answer: "தண்ணீர்",
          explanation: "நீர்யானைகள் ஆறுகள் மற்றும் ஏரிகளில் வாழ்கின்றன.",
        },
        {
          question: "நீர்யானை என்ன உண்ணும்?",
          options: ["புல்", "இறைச்சி", "மீன்", "பழங்கள்"],
          answer: "புல்",
          explanation: "நீர்யானை தாவர உண்ணி.",
        },
        {
          question: "நீர்யானைகள் நல்ல நீச்சலாளர்களா?",
          options: ["ஆம்", "இல்லை"],
          answer: "ஆம்",
          explanation: "அவை சிறந்த நீச்சலாளர்கள்.",
        },
        {
          question: "நீர்யானை தாவர உண்ணியா?",
          options: ["ஆம்", "இல்லை"],
          answer: "ஆம்",
          explanation: "அவை தாவரங்களை உண்ணும்.",
        },
      ],
    },
  },

  /* ================= HYENA ================= */
  {
    id: "hyena",
    name: { en: "Hyena", ta: "கழுதைப்புலி" },
    model: "/assets/hyena.glb",
    image: "/assets/hyena.jpg",
    sound: { en: "/assets/lion.mp3", ta: "/assets/lion.mp3" },
    position: [25, 2, -32],
    rotation: [0, -Math.PI / 4, 0],
    scale: 1.3,

    description: {
      en: "Hyenas are known for their laughing sounds.",
      ta: "கழுதைப்புலிகள் சிரிப்பு போன்ற சத்தத்திற்கு பெயர் பெற்றவை.",
    },

    facts: {
      diet: { en: "Carnivore", ta: "மாமிச உண்ணி" },
      habitat: { en: "Savanna", ta: "சவானா" },
      lifespan: { en: "20–25 years", ta: "20–25 ஆண்டுகள்" },
    },

    quiz: {
      en: [
        {
          question: "What sound are hyenas famous for?",
          options: ["Laugh", "Roar", "Bark", "Chirp"],
          answer: "Laugh",
          explanation: "Hyenas make laughing sounds.",
        },
        {
          question: "What do hyenas eat?",
          options: ["Meat", "Grass", "Leaves", "Fruits"],
          answer: "Meat",
          explanation: "Hyenas are carnivores.",
        },
        {
          question: "Where do hyenas live?",
          options: ["Savanna", "Ocean", "Snow", "Forest"],
          answer: "Savanna",
          explanation: "They live in savannas.",
        },
        {
          question: "Are hyenas carnivores?",
          options: ["Yes", "No"],
          answer: "Yes",
          explanation: "They eat meat.",
        },
      ],
      ta: [
        {
          question: "கழுதைப்புலிகள் எதற்காக புகழ்பெற்றவை?",
          options: ["சிரிப்பு", "கர்ஜனை", "குரல்", "சிறகு சத்தம்"],
          answer: "சிரிப்பு",
          explanation: "அவை சிரிப்பு போன்ற சத்தம் செய்கின்றன.",
        },
        {
          question: "கழுதைப்புலி என்ன உண்ணும்?",
          options: ["இறைச்சி", "புல்", "இலைகள்", "பழங்கள்"],
          answer: "இறைச்சி",
          explanation: "அவை மாமிச உண்ணிகள்.",
        },
        {
          question: "கழுதைப்புலிகள் எங்கு வாழ்கின்றன?",
          options: ["சவானா", "கடல்", "பனி", "காடு"],
          answer: "சவானா",
          explanation: "அவை சவானாவில் வாழ்கின்றன.",
        },
        {
          question: "கழுதைப்புலி மாமிச உண்ணியா?",
          options: ["ஆம்", "இல்லை"],
          answer: "ஆம்",
          explanation: "அவை இறைச்சி உண்ணும்.",
        },
      ],
    },
  },

  /* ================= BLACK PANTHER ================= */
  {
    id: "blackpanther",
    name: { en: "Black Panther", ta: "கருப்புப் புலி" },
    model: "/assets/blackpanther.glb",
    image: "/assets/blackpanther.jpg",
    sound: { en: "/assets/lion.mp3", ta: "/assets/lion.mp3" },
    position: [-20, 2, -30],
    rotation: [0, Math.PI / 4, 0],
    scale: 4.5,

    description: {
      en: "Black panthers are stealthy and powerful predators.",
      ta: "கருப்புப் புலிகள் மறைவாக வேட்டையாடும் சக்திவாய்ந்த விலங்குகள்.",
    },

    facts: {
      diet: { en: "Carnivore", ta: "மாமிச உண்ணி" },
      habitat: { en: "Dense forests", ta: "அடர்ந்த காடுகள்" },
      lifespan: { en: "12–15 years", ta: "12–15 ஆண்டுகள்" },
    },

    quiz: {
      en: [
        {
          question: "What type of animal is a black panther?",
          options: ["Big Cat", "Dog", "Bear", "Deer"],
          answer: "Big Cat",
          explanation: "Black panther is a big cat.",
        },
        {
          question: "What do black panthers eat?",
          options: ["Meat", "Grass", "Fruits", "Leaves"],
          answer: "Meat",
          explanation: "They eat meat.",
        },
        {
          question: "Where do black panthers live?",
          options: ["Forests", "Oceans", "Snow", "Desert"],
          answer: "Forests",
          explanation: "They live in forests.",
        },
        {
          question: "Are black panthers carnivores?",
          options: ["Yes", "No"],
          answer: "Yes",
          explanation: "They eat meat.",
        },
      ],
      ta: [
        {
          question: "கருப்புப் புலி எந்த வகை விலங்கு?",
          options: ["பெரிய பூனை", "நாய்", "கரடி", "மான்"],
          answer: "பெரிய பூனை",
          explanation: "கருப்புப் புலி ஒரு பெரிய பூனை.",
        },
        {
          question: "கருப்புப் புலி என்ன உண்ணும்?",
          options: ["இறைச்சி", "புல்", "பழங்கள்", "இலைகள்"],
          answer: "இறைச்சி",
          explanation: "அவை இறைச்சி உண்ணும்.",
        },
        {
          question: "கருப்புப் புலிகள் எங்கு வாழ்கின்றன?",
          options: ["காடுகள்", "கடல்", "பனி", "பாலைவனம்"],
          answer: "காடுகள்",
          explanation: "அவை காடுகளில் வாழ்கின்றன.",
        },
        {
          question: "கருப்புப் புலி மாமிச உண்ணியா?",
          options: ["ஆம்", "இல்லை"],
          answer: "ஆம்",
          explanation: "அவை மாமிச உண்ணிகள்.",
        },
      ],
    },
  },

  /* ================= ZEBRA ================= */
  {
    id: "zebra",
    name: { en: "Zebra", ta: "செப்ரா" },
    model: "/assets/zebra.glb",
    image: "/assets/zebra.jpg",
    sound: { en: "/assets/lion.mp3", ta: "/assets/lion.mp3" },
    position: [-5, 2.4, -30],
    rotation: [0, 0, 0],
    scale: 1,

    description: {
      en: "Zebras are known for black and white stripes.",
      ta: "செப்ராக்கள் கருப்பு மற்றும் வெள்ளை கோடுகளுக்காக அறியப்படுகின்றன.",
    },

    facts: {
      diet: { en: "Herbivore", ta: "தாவர உண்ணி" },
      habitat: { en: "Grasslands", ta: "புல்வெளிகள்" },
      lifespan: { en: "20–25 years", ta: "20–25 ஆண்டுகள்" },
    },

    quiz: {
      en: [
        {
          question: "What do zebras eat?",
          options: ["Grass", "Meat", "Fish", "Fruits"],
          answer: "Grass",
          explanation: "Zebras eat grass.",
        },
        {
          question: "What is special about zebras?",
          options: ["Stripes", "Spots", "Horns", "Wings"],
          answer: "Stripes",
          explanation: "They have stripes.",
        },
        {
          question: "Where do zebras live?",
          options: ["Grasslands", "Oceans", "Snow", "Forest"],
          answer: "Grasslands",
          explanation: "They live in grasslands.",
        },
        {
          question: "Are zebras herbivores?",
          options: ["Yes", "No"],
          answer: "Yes",
          explanation: "They eat plants.",
        },
      ],
      ta: [
        {
          question: "செப்ரா என்ன உண்ணும்?",
          options: ["புல்", "இறைச்சி", "மீன்", "பழங்கள்"],
          answer: "புல்",
          explanation: "செப்ராக்கள் புல் உண்ணும்.",
        },
        {
          question: "செப்ராவின் சிறப்பு என்ன?",
          options: ["கோடுகள்", "புள்ளிகள்", "கொம்புகள்", "இறக்கைகள்"],
          answer: "கோடுகள்",
          explanation: "அவைகளுக்கு கோடுகள் உள்ளன.",
        },
        {
          question: "செப்ரா எங்கு வாழ்கிறது?",
          options: ["புல்வெளிகள்", "கடல்", "பனி", "காடு"],
          answer: "புல்வெளிகள்",
          explanation: "அவை புல்வெளிகளில் வாழ்கின்றன.",
        },
        {
          question: "செப்ரா தாவர உண்ணியா?",
          options: ["ஆம்", "இல்லை"],
          answer: "ஆம்",
          explanation: "அவை தாவரங்களை உண்ணும்.",
        },
      ],
    },
  },

//  ================= BIRD =================

  {
    id: "bird",
    name: { en: "Bird", ta: "பறவை" },
    model: "/assets/bird.glb",
    image: "/assets/bird.jpg",
    sound: { en: "/assets/lion.mp3", ta: "/assets/lion.mp3" },

    position: [-20, 2, -10],
    rotation: [0, -Math.PI / 0.5, 0],
    scale: 0.1,

    description: {
      en: "Birds are animals with feathers and wings that can fly.",
      ta: "பறவைகள் இறகுகளும் இறக்கைகளும் கொண்ட விலங்குகள்.",
    },

    facts: {
      diet: { en: "Omnivore", ta: "எல்லா உணவும் உண்ணி" },
      habitat: { en: "Trees & forests", ta: "மரங்கள் மற்றும் காடுகள்" },
      lifespan: { en: "5–20 years", ta: "5–20 ஆண்டுகள்" },
    },

    quiz: {
      en: [
        {
          question: "What helps birds to fly?",
          options: ["Wings", "Legs", "Teeth", "Tail"],
          answer: "Wings",
          explanation: "Birds fly using wings.",
        },
        {
          question: "What covers a bird’s body?",
          options: ["Fur", "Scales", "Feathers", "Skin"],
          answer: "Feathers",
          explanation: "Birds have feathers.",
        },
        {
          question: "Where do birds live?",
          options: ["Trees", "Water", "Underground", "Desert"],
          answer: "Trees",
          explanation: "Most birds live on trees.",
        },
        {
          question: "Do birds lay eggs?",
          options: ["Yes", "No"],
          answer: "Yes",
          explanation: "Birds reproduce by laying eggs.",
        },
      ],
      ta: [
        {
          question: "பறவைகள் பறக்க உதவுவது எது?",
          options: ["இறக்கைகள்", "கால்கள்", "பற்கள்", "வால்"],
          answer: "இறக்கைகள்",
          explanation: "பறவைகள் இறக்கைகளால் பறக்கின்றன.",
        },
        {
          question: "பறவையின் உடலை மூடுவது எது?",
          options: ["மயிர்", "அளவுகள்", "இறகுகள்", "தோல்"],
          answer: "இறகுகள்",
          explanation: "பறவைகளுக்கு இறகுகள் உள்ளன.",
        },
        {
          question: "பறவைகள் எங்கு வாழ்கின்றன?",
          options: ["மரங்கள்", "நீர்", "பூமிக்குள்", "பாலைவனம்"],
          answer: "மரங்கள்",
          explanation: "பல பறவைகள் மரங்களில் வாழ்கின்றன.",
        },
        {
          question: "பறவைகள் முட்டை இடுமா?",
          options: ["ஆம்", "இல்லை"],
          answer: "ஆம்",
          explanation: "பறவைகள் முட்டை இடும்.",
        },
      ],
    },
  },

  {
    id: "snake",
    name: { en: "Snake", ta: "பாம்பு" },
    model: "/assets/snake.glb",
    image: "/assets/snake.jpg",
    sound: { en: "/assets/lion.mp3", ta: "/assets/lion.mp3" },

    position: [33, 0.1, -20],
    rotation: [0, -Math.PI /1, 0],
    scale: 0.06,

    description: {
      en: "Snakes are legless reptiles that crawl on the ground.",
      ta: "பாம்புகள் கால்கள் இல்லாத সরிச்ருப்கள்.",
    },

    facts: {
      diet: { en: "Carnivore", ta: "மாமிச உண்ணி" },
      habitat: { en: "Forests & deserts", ta: "காடுகள் மற்றும் பாலைவனங்கள்" },
      lifespan: { en: "15–30 years", ta: "15–30 ஆண்டுகள்" },
    },

    quiz: {
      en: [
        {
          question: "Do snakes have legs?",
          options: ["Yes", "No"],
          answer: "No",
          explanation: "Snakes do not have legs.",
        },
        {
          question: "What covers a snake’s body?",
          options: ["Fur", "Scales", "Feathers", "Skin"],
          answer: "Scales",
          explanation: "Snakes have scales.",
        },
        {
          question: "What do snakes eat?",
          options: ["Grass", "Meat", "Fruits", "Leaves"],
          answer: "Meat",
          explanation: "Snakes eat animals.",
        },
        {
          question: "Are snakes reptiles?",
          options: ["Yes", "No"],
          answer: "Yes",
          explanation: "Snakes belong to reptiles.",
        },
      ],
      ta: [
        {
          question: "பாம்புகளுக்கு கால்கள் உள்ளதா?",
          options: ["ஆம்", "இல்லை"],
          answer: "இல்லை",
          explanation: "பாம்புகளுக்கு கால்கள் இல்லை.",
        },
        {
          question: "பாம்பின் உடலை மூடுவது எது?",
          options: ["மயிர்", "அளவுகள்", "இறகுகள்", "தோல்"],
          answer: "அளவுகள்",
          explanation: "பாம்புகளுக்கு அளவுகள் உள்ளன.",
        },
        {
          question: "பாம்பு என்ன உண்ணும்?",
          options: ["புல்", "இறைச்சி", "பழங்கள்", "இலைகள்"],
          answer: "இறைச்சி",
          explanation: "பாம்பு மாமிச உண்ணி.",
        },
        {
          question: "பாம்புகள் சரிச்ருப்களா?",
          options: ["ஆம்", "இல்லை"],
          answer: "ஆம்",
          explanation: "பாம்புகள் சரிச்ருப வகையை சேர்ந்தவை.",
        },
      ],
    },
  },
  {
    id: "rhino",
    name: { en: "Rhinoceros", ta: "காண்டாமிருகம்" },
    model: "/assets/rhino.glb",
    image: "/assets/rhino.jpg",
    sound: { en: "/assets/lion.mp3", ta: "/assets/lion.mp3" },

    position: [10, 1.7, -32],
    rotation: [0, -Math.PI / 19, 0],
    scale: 1.5,

    description: {
      en: "Rhinos are large animals with thick skin and horns.",
      ta: "காண்டாமிருகங்கள் தடித்த தோல் மற்றும் கொம்பு கொண்ட விலங்குகள்.",
    },

    facts: {
      diet: { en: "Herbivore", ta: "தாவர உண்ணி" },
      habitat: { en: "Grasslands", ta: "புல்வெளிகள்" },
      lifespan: { en: "35–50 years", ta: "35–50 ஆண்டுகள்" },
    },

    quiz: {
      en: [
        {
          question: "What is special about a rhino?",
          options: ["Horn", "Wings", "Tail", "Stripes"],
          answer: "Horn",
          explanation: "Rhinos have horns.",
        },
        {
          question: "What do rhinos eat?",
          options: ["Meat", "Grass", "Fish", "Insects"],
          answer: "Grass",
          explanation: "Rhinos eat plants.",
        },
        {
          question: "Is a rhino a herbivore?",
          options: ["Yes", "No"],
          answer: "Yes",
          explanation: "Rhinos eat plants.",
        },
        {
          question: "Where do rhinos live?",
          options: ["Grasslands", "Ocean", "Snow", "Mountains"],
          answer: "Grasslands",
          explanation: "Rhinos live in grasslands.",
        },
      ],
      ta: [
        {
          question: "காண்டாமிருகத்தின் சிறப்பு என்ன?",
          options: ["கொம்பு", "இறக்கைகள்", "வால்", "கோடுகள்"],
          answer: "கொம்பு",
          explanation: "காண்டாமிருகத்திற்கு கொம்பு உள்ளது.",
        },
        {
          question: "காண்டாமிருகம் என்ன உண்ணும்?",
          options: ["இறைச்சி", "புல்", "மீன்", "பூச்சிகள்"],
          answer: "புல்",
          explanation: "அவை தாவர உண்ணிகள்.",
        },
        {
          question: "காண்டாமிருகம் தாவர உண்ணியா?",
          options: ["ஆம்", "இல்லை"],
          answer: "ஆம்",
          explanation: "அவை தாவரங்களை உண்ணும்.",
        },
        {
          question: "காண்டாமிருகங்கள் எங்கு வாழ்கின்றன?",
          options: ["புல்வெளிகள்", "கடல்", "பனி", "மலை"],
          answer: "புல்வெளிகள்",
          explanation: "அவை புல்வெளிகளில் வாழ்கின்றன.",
        },
      ],
    },
  }

];
