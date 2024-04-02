export type Tile = {
  key: string;
  label: string;
  isCore: boolean;
  noImage?: boolean;
};

const initialTiles: Array<Tile> = [
  { key: "let-it-go", label: "let it go", isCore: false },
  { key: "fold", label: "fold", isCore: false },
  { key: "sponge", label: "sponge", isCore: false },
  { key: "soap", label: "soap", isCore: false },
  { key: "shampoo", label: "shampoo", isCore: false },
  { key: "towel", label: "towel", isCore: false },
  { key: "house", label: "house", isCore: false },
  { key: "circle", label: "circle", isCore: false },
  { key: "triangle", label: "triangle", isCore: false },
  { key: "bridge", label: "bridge", isCore: false },
  { key: "brown", label: "brown", isCore: false },
  { key: "film", label: "film", isCore: false },
  { key: "tv", label: "tv", isCore: false },
  { key: "watch", label: "watch", isCore: false },
  { key: "cartoon", label: "cartoon", isCore: false },
  { key: "silly", label: "silly", isCore: false },
  { key: "choose", label: "choose", isCore: false },
  { key: "bed", label: "bed", isCore: false },
  { key: "hungry", label: "hungry", isCore: false },
  { key: "food", label: "food", isCore: false },
  { key: "tired", label: "tired", isCore: false },
  { key: "change", label: "change", isCore: false },
  { key: "clothes", label: "clothes", isCore: false },
  { key: "love", label: "love", isCore: false },
  { key: "nappy", label: "nappy", isCore: false },
  { key: "lose", label: "lose", isCore: false },
  { key: "listen", label: "listen", isCore: false },
  { key: "song", label: "song (track)", isCore: false },
  { key: "selfie", label: "selfie", isCore: false },
  { key: "delete", label: "delete", isCore: false },
  { key: "concealer", label: "concealer", isCore: false },
  { key: "embarrassing", label: "embarrassing", isCore: false },
  { key: "horn-goes-beep", label: "horn goes beep", isCore: false },
  { key: "wipers-go-swish", label: "wipers go swish", isCore: false },
  { key: "game", label: "game", isCore: false },

  { key: "tie-knot", label: "tie knot", isCore: false },
  { key: "throw", label: "throw", isCore: false },
  { key: "more", label: "more (again)", isCore: true },
  { key: "look", label: "look (see)", isCore: true },
  { key: "stop", label: "stop (finish)", isCore: true },
  { key: "go", label: "go", isCore: true },
  { key: "balloons", label: "balloon(s)", isCore: false },
  { key: "blow", label: "blow", isCore: false },
  { key: "like", label: "like", isCore: true },
  { key: "uh-oh", label: "oh no!", isCore: true },
  { key: "want", label: "want", isCore: true },
  { key: "different", label: "different", isCore: true },
  { key: "help", label: "help", isCore: true },
  { key: "no", label: "not (no)", isCore: true },
  { key: "wash", label: "wash", isCore: false },
  { key: "cold", label: "cold", isCore: false },
  { key: "bath", label: "bath", isCore: false },
  { key: "splash", label: "splash", isCore: false },
  { key: "hot", label: "hot", isCore: false },
  { key: "water", label: "water", isCore: false },
  { key: "bath-toy", label: "bath toy", isCore: false },
  { key: "me", label: "I, me, my, mine", isCore: true },
  { key: "question", label: "question", isCore: true },
  { key: "red", label: "red", isCore: false },
  { key: "block", label: "block", isCore: false },
  { key: "you", label: "you, your(s)", isCore: true },
  { key: "this", label: "this, that", isCore: true },
  { key: "green", label: "green", isCore: false },
  { key: "tower", label: "tower", isCore: false },
  { key: "big", label: "big", isCore: true },
  { key: "lots", label: "lots (many)", isCore: true },
  { key: "blue", label: "blue", isCore: false },
  { key: "make", label: "make", isCore: false },
  { key: "wow", label: "wow!", isCore: true },
  { key: "knock-it-down", label: "knock it down", isCore: false },
  { key: "pretty", label: "pretty", isCore: false },
  { key: "up", label: "up", isCore: false },
  { key: "slow", label: "slow", isCore: false },
  { key: "fun", label: "fun", isCore: false },
  { key: "fast", label: "fast", isCore: false },
  { key: "pour", label: "pour", isCore: false },
  { key: "hold", label: "hold", isCore: false },
  { key: "bubble-mix", label: "bubble mix", isCore: false },
  { key: "bubble-wand", label: "bubble wand", isCore: false },
  { key: "little", label: "little", isCore: true },
  { key: "bubbles", label: "bubble(s)", isCore: false },
  { key: "catch", label: "catch", isCore: false },
  { key: "pop", label: "pop", isCore: false },
  { key: "funny", label: "funny", isCore: false },
  { key: "dont-like", label: "dont-like", isCore: true },
  { key: "sad", label: "sad", isCore: false },
  { key: "watch-tv", label: "watch-tv", isCore: false },
  { key: "program", label: "program", isCore: false },
  { key: "remote", label: "remote", isCore: false },
  { key: "yellow", label: "yellow", isCore: false },
  { key: "purple", label: "purple", isCore: false },
  { key: "we", label: "we, us ours", isCore: false },
  { key: "go-round-and-round", label: "Go round and round", isCore: false },
  { key: "turn", label: "Turn", isCore: false },
  { key: "they", label: "they, them, their(s)", isCore: false },
  { key: "play", label: "play", isCore: false },
  { key: "she", label: "she, her(s)", isCore: true },
  { key: "do", label: "do, does", isCore: false },
  { key: "good", label: "good", isCore: false },
  { key: "he", label: "he, his", isCore: true },
  { key: "it", label: "it", isCore: false },
  { key: "have", label: "have", isCore: false },
  { key: "bad", label: "bad (yucky)", isCore: false },
  { key: "can", label: "can", isCore: false },
  { key: "first", label: "first", isCore: false },
  { key: "next", label: "next", isCore: false },
  { key: "girl", label: "girl", isCore: false },
  { key: "boy", label: "boy", isCore: false },
  { key: "cat", label: "cat", isCore: false },
  { key: "monster", label: "monster", isCore: false },
  { key: "find", label: "find", isCore: false },
  { key: "city", label: "city", isCore: false },
  { key: "home", label: "home", isCore: false },
  { key: "scary", label: "scary", isCore: false },
  { key: "run", label: "run around", isCore: false },
  { key: "school", label: "school", isCore: false },
  { key: "forest", label: "forest", isCore: false },
  { key: "naughty", label: "naughty", isCore: false },
  { key: "magic-wand", label: "magic wand", isCore: false },
  { key: "treasure", label: "treasure", isCore: false },
  { key: "bottle", label: "bottle", isCore: false },
  { key: "change-clothes", label: "change clothes", isCore: false },
  { key: "dolly", label: "dolly", isCore: false },
  { key: "feed", label: "feed", isCore: false },
  { key: "hug", label: "hug", isCore: false },
  { key: "sleep", label: "sleep", isCore: false },
  { key: "dress", label: "dress", isCore: false },
  { key: "dressing-up", label: "dressing up", isCore: false },
  { key: "crown", label: "crown (tiara)", isCore: false },
  { key: "princess", label: "princess", isCore: false },
  { key: "put-on", label: "put on", isCore: false },
  { key: "necklace", label: "necklace", isCore: false },
  { key: "shoes", label: "shoes", isCore: false },
  { key: "take-off", label: "take off", isCore: false },
  { key: "handbag", label: "handbag", isCore: false },
  { key: "wand", label: "wand", isCore: false },
  { key: "mirror", label: "mirror", isCore: false },
  { key: "photo", label: "photo", isCore: false },
  { key: "kerplunk", label: "Kerplunk", isCore: false },
  { key: "kerplunk-stick", label: "stick", isCore: false },
  { key: "fall-over", label: "fall over", isCore: false },
  { key: "push", label: "push", isCore: false },
  { key: "marble", label: "marble", isCore: false },
  { key: "pull", label: "pull", isCore: false },
  { key: "win", label: "win", isCore: false },
  { key: "colour", label: "colour", isCore: false },
  { key: "make-up", label: "make up", isCore: false },
  { key: "eye-shadow", label: "eye shadow", isCore: false },
  { key: "mascara", label: "mascara", isCore: false },
  { key: "brush-hair", label: "brush hair", isCore: false },
  { key: "foundation", label: "foundation", isCore: false },
  { key: "great", label: "great", isCore: false },
  { key: "omg", label: "OMG", isCore: false },
  { key: "hair-clip", label: "hair clip", isCore: false },
  { key: "blusher", label: "blusher", isCore: false },
  { key: "nail-varnish", label: "nail varnish", isCore: false },
  { key: "lipstick", label: "lipstick", isCore: false },
  { key: "arm", label: "arm", isCore: false },
  { key: "mr-potato-head", label: "Mr Potato Head", isCore: false },
  { key: "mrs-potato-head", label: "Mrs Potato Head", isCore: false },
  { key: "hair", label: "hair", isCore: false },
  { key: "hat", label: "hat", isCore: false },
  { key: "eyes", label: "eyes", isCore: false },
  { key: "mouth", label: "mouth", isCore: false },
  { key: "teeth", label: "teeth", isCore: false },
  { key: "nose", label: "nose", isCore: false },
  { key: "ear", label: "ear", isCore: false },
  { key: "earring", label: "earring", isCore: false },
  { key: "happy", label: "happy", isCore: false },
  { key: "favourite", label: "favourite", isCore: false },
  { key: "sing-along", label: "sing along", isCore: false },
  { key: "dance", label: "dance", isCore: false },
  { key: "music", label: "music", isCore: false },
  { key: "old-macdonald", label: "Old MacDonald", isCore: false },
  { key: "cow", label: "cow", isCore: false },
  { key: "pig", label: "pig", isCore: false },
  { key: "sheep", label: "sheep", isCore: false },
  { key: "playlist", label: "playlist", isCore: false },
  { key: "read", label: "read", isCore: false },
  { key: "story-book", label: "story (book)", isCore: false },
  { key: "jump", label: "jump up and down", isCore: false },
  { key: "snakes-ladders", label: "snakes &\nladders", isCore: false },
  { key: "count", label: "count", isCore: false },
  { key: "ladder", label: "ladder", isCore: false },
  { key: "some", label: "some (few)", isCore: true },
  { key: "roll-dice", label: "roll dice", isCore: false },
  { key: "snake", label: "snake", isCore: false },
  { key: "move-my-piece", label: "move my\npiece", isCore: false },
  { key: "dont-know", label: "don't know", isCore: true },
  { key: "down", label: "down", isCore: false },
  { key: "cross", label: "cross", isCore: false },
  { key: "bus", label: "Wheels on the bus", isCore: false },
  { key: "bus-doors", label: "Doors open and shut", isCore: false },
  { key: "children", label: "Children bounce up and down", isCore: false },
  { key: "turn-page", label: "turn page", isCore: false },
  { key: "loud", label: "loud", isCore: false },
  { key: "quiet", label: "quiet", isCore: false },
  { key: "take-picture", label: "take picture", isCore: false },
  { key: "give", label: "give", isCore: false },
  { key: "show", label: "show", isCore: false },
  { key: "stick", label: "stick", isCore: false },
  { key: "cut", label: "cut", isCore: false },
  { key: "rubbish", label: "rubbish", isCore: false },
  { key: "stamp", label: "stamp", isCore: false },
  { key: "paint", label: "paint", isCore: false },
  { key: "picture", label: "picture", isCore: false },
  { key: "glue", label: "glue", isCore: false },
  { key: "glitter", label: "glitter", isCore: false },
  { key: "tape", label: "tape", isCore: false },
  { key: "paper", label: "paper", isCore: false },
  { key: "card", label: "card", isCore: false },
  { key: "felt-tips", label: "felt tips", isCore: false },
  { key: "crayons", label: "crayons", isCore: false },
];

export const TILES: Array<Tile> = initialTiles.flatMap((x) => {
  return [
    x,
    { key: `${x.key}-core`, label: x.label, isCore: true },
    { key: `${x.key}-non-core`, label: x.label, isCore: false },
  ];
});