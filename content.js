const divination_data = {
  "tarot": [
    {
      "id": 0,
      "name": "The Fool",
      "visual_anatomy": "The Fool is depicted as a young man standing on the edge of a precipice, unconcerned with the danger. He gazes upward toward the sky. He carries a small knapsack on a wand over his shoulder and holds a white rose in his left hand. A small white dog bounds at his heels. The sun shines brightly behind him, and distant snow-capped mountains loom in the background. He wears a tunic with a complex floral pattern.",
      "symbolic_meaning": "The precipice represents the leap of faith into the unknown. The white rose symbolizes purity and innocence. The dog represents loyalty and protection, or a warning of the journey's risks. The knapsack contains his past experiences, which he carries lightly. The mountains signify the spiritual heights he is destined to climb.",
      "upright_interpretation": "New beginnings, innocence, spontaneity, a free spirit, and a leap of faith. It encourages embracing the unknown with an open heart.",
      "reversed_interpretation": "Recklessness, risk-taking, inconsideration, and holding back. It may suggest that a leap of faith is being taken without due care or that fear is preventing a necessary start."
    },
    {
      "id": 1,
      "name": "The Magician",
      "visual_anatomy": "One arm points to the heavens, the other to the earth. Objects of the four suits rest on a table. Above him is an infinity symbol; around his waist is an Ouroboros. Surrounded by lilies and roses.",
      "symbolic_meaning": "Connection between divine and material. Mastery over elements (Wands, Cups, Swords, Pentacles). Eternal energy and cycles of creation.",
      "upright_interpretation": "Manifestation, resourcefulness, power, inspired action.",
      "reversed_interpretation": "Manipulation, poor planning, untapped talents."
    },
    {
      "id": 2,
      "name": "The High Priestess",
      "visual_anatomy": "She sits between two pillars, one black (B) and one white (J). She wears a blue robe with a cross on her chest and a horned crown with a full moon. A pomegranate-patterned veil hangs behind her. At her feet is a crescent moon, and she holds a scroll with 'TORA' written on it.",
      "symbolic_meaning": "The pillars represent the duality of nature (Boaz and Jachin). The pomegranate veil signifies the hidden mysteries of the subconscious. The Tora scroll represents hidden knowledge. The moon symbols connect her to intuition and the feminine cycle.",
      "upright_interpretation": "Intuition, sacred knowledge, divine feminine, the subconscious mind.",
      "reversed_interpretation": "Secrets, disconnected from intuition, withdrawal and silence."
    },
    {
      "id": 3,
      "name": "The Empress",
      "visual_anatomy": "A regal woman sits on a throne of cushions in a lush field. She wears a crown of twelve stars and a gown patterned with pomegranates. A shield with the symbol of Venus rests nearby. In the background is a forest and a flowing river.",
      "symbolic_meaning": "The twelve stars represent the zodiac and the months. Pomegranates signify fertility and abundance. Venus shield represents love and beauty. The forest and river symbolize the life-giving force of nature.",
      "upright_interpretation": "Femininity, beauty, nature, nurturing, abundance.",
      "reversed_interpretation": "Creative block, dependence on others, smothering."
    },
    {
      "id": 4,
      "name": "The Emperor",
      "visual_anatomy": "A stern man sits on a stone throne adorned with four ram heads. He wears red robes over steel armor, holding an ankh scepter and an orb. The background is a barren, mountainous landscape with a thin stream.",
      "symbolic_meaning": "Ram heads represent Ares and leadership. The stone throne signifies stability and unyielding power. Armor suggests readiness for battle and protection. Ankh represents life and authority over it.",
      "upright_interpretation": "Authority, establishment, structure, a father figure.",
      "reversed_interpretation": "Tyranny, rigidity, coldness, lack of discipline."
    },
    {
      "id": 5,
      "name": "The Hierophant",
      "visual_anatomy": "A religious figure sits between two grey pillars, wearing a three-tiered crown and red robes. He holds a triple cross scepter and makes a sign of benediction. Two initiates kneel before him, and crossed keys lie at his feet.",
      "symbolic_meaning": "The pillars represent the institutionalized nature of faith. The triple crown and scepter signify power over three worlds. The crossed keys represent the opening of sacred mysteries. The initiates symbolize the transfer of traditional knowledge.",
      "upright_interpretation": "Spiritual wisdom, religious beliefs, conformity, tradition, institutions.",
      "reversed_interpretation": "Personal beliefs, freedom, challenging the status quo."
    },
    {
      "id": 6,
      "name": "The Lovers",
      "visual_anatomy": "A man and woman stand beneath a large angel (Raphael) in a garden. Behind the woman is the Tree of Knowledge with a serpent; behind the man is the Tree of Life with twelve flames. A mountain rises between them under a bright sun.",
      "symbolic_meaning": "The angel represents healing and cosmic union. Fruit and serpent signify the temptation of the material world. Twelve flames represent the zodiac. The mountain represents the challenge of a higher path through union.",
      "upright_interpretation": "Love, harmony, partnerships, relationships, values alignment, choices.",
      "reversed_interpretation": "Self-love, disharmony, imbalance, misalignment of values."
    },
    {
      "id": 7,
      "name": "The Chariot",
      "visual_anatomy": "A warrior stands in a chariot pulled by two sphinxes, one black and one white. He wears armor with crescent moons and a star crown. The canopy is blue with white stars. He holds a wand but no reins.",
      "symbolic_meaning": "The black and white sphinxes represent opposing forces that must be balanced. The lack of reins suggests control through willpower and spiritual strength. Starry canopy links him to the celestial heavens.",
      "upright_interpretation": "Control, will power, victory, assertion, determination.",
      "reversed_interpretation": "Lack of control, lack of direction, aggression."
    },
    {
      "id": 8,
      "name": "Strength",
      "visual_anatomy": "A woman gently closes the jaws of a lion. She wears an infinity symbol above her head and a white robe adorned with flowers. The background is a golden yellow, and distant mountains are visible.",
      "symbolic_meaning": "The lion represents primal passions and animal instincts. The woman's gentle touch signifies the power of compassion and inner strength over brute force. The infinity symbol shows her connection to spiritual endurance.",
      "upright_interpretation": "Strength, courage, persuasion, influence, compassion.",
      "reversed_interpretation": "Self-doubt, lack of self-discipline, weakness, insecurity."
    },
    {
      "id": 9,
      "name": "The Hermit",
      "visual_anatomy": "A lone figure in a grey cloak stands on a snowy mountain peak at night. He holds a lantern containing a six-pointed star (Seal of Solomon) and leans on a wooden staff.",
      "symbolic_meaning": "The lantern represents the light of wisdom shared with the world. The snowy peak signifies spiritual isolation and detachment. The staff represents the support of his own knowledge on the spiritual path.",
      "upright_interpretation": "Soul-searching, introspection, being alone, inner guidance.",
      "reversed_interpretation": "Isolation, loneliness, withdrawal from society."
    },
    {
      "id": 10,
      "name": "Wheel of Fortune",
      "visual_anatomy": "A giant wheel with Hebrew letters (TARO/ROTA) and alchemical symbols sits in the center. Four winged creatures (Angel, Eagle, Lion, Bull) read books in the corners. A sphinx sits atop the wheel, a snake descends, and Anubis ascends.",
      "symbolic_meaning": "The wheel represents the cyclical nature of life. The creatures signify the four fixed signs of the zodiac (Aquarius, Scorpio, Leo, Taurus). The sphinx is the balance point. Anubis and the snake show the rise and fall of destiny.",
      "upright_interpretation": "Good luck, karma, life cycles, destiny, a turning point.",
      "reversed_interpretation": "Bad luck, resistance to change, breaking cycles."
    },
    {
      "id": 11,
      "name": "Justice",
      "visual_anatomy": "A figure sits between two grey pillars, wearing a red robe and a crown with a green square jewel. They hold a golden scale in the left hand and a double-edged sword in the right. A purple veil is draped behind them.",
      "symbolic_meaning": "Scale represents balance and fairness. The double-edged sword signifies that every action has a consequence and that logic cuts through deception. The square jewel represents law and structure.",
      "upright_interpretation": "Justice, fairness, truth, cause and effect, law.",
      "reversed_interpretation": "Unfairness, lack of accountability, dishonesty."
    },
    {
      "id": 12,
      "name": "The Hanged Man",
      "visual_anatomy": "A man hangs upside down by one foot from a living wooden cross (the World Tree). His free leg is tucked behind the other. He wears blue leggings and a yellow tunic, with a radiant halo around his head. He appears calm.",
      "symbolic_meaning": "The inverted position suggests a new perspective. The halo indicates spiritual enlightenment and the peace found in sacrifice. The living wood signifies growth even in stagnation.",
      "upright_interpretation": "Pause, surrender, letting go, new perspectives.",
      "reversed_interpretation": "Delays, resistance, stalling, indecision."
    },
    {
      "id": 13,
      "name": "Death",
      "visual_anatomy": "A skeleton in black armor rides a white horse, holding a black flag with a white rose (Mystic Rose). A king lies dead beneath the horse, while a child, a girl, and a priest plead with the rider. In the background, the sun sets between two towers.",
      "symbolic_meaning": "Death as a skeleton is the great equalizer. The white rose represents rebirth and purification. The weeping child and priest show mortality's reach across age and faith. The sun behind towers symbolizes the gate to a new state.",
      "upright_interpretation": "Endings, change, transformation, transition.",
      "reversed_interpretation": "Resistance to change, personal transformation, inner purging."
    },
    {
      "id": 14,
      "name": "Temperance",
      "visual_anatomy": "A winged angel (Michael) with a sun on his brow stands with one foot on a rock and one in a stream. He pours water (or essence) between two golden cups. Iris flowers grow at the water's edge, and a path leads to a distant mountain with a glowing crown.",
      "symbolic_meaning": "Pouring liquid represents the mixing of opposing forces to create harmony. Footing on both land and water shows the balance between the material and the subconscious. The path to the crown signifies a spiritual goal reached through moderation.",
      "upright_interpretation": "Balance, moderation, patience, purpose.",
      "reversed_interpretation": "Imbalance, excess, self-healing, re-alignment."
    },
    {
      "id": 15,
      "name": "The Devil",
      "visual_anatomy": "A horned satyr-like figure sits on a black stone pedestal. A man and a woman are chained to the pedestal; they have horns and tails. The Devil raises a hand in a mock benediction and holds a torch pointing down.",
      "symbolic_meaning": "The chains are loose, suggesting that the bondage is voluntary or psychological. The tails represent animal instincts. The inverted torch signifies the destruction of higher thought through material obsession.",
      "upright_interpretation": "Shadow self, attachment, addiction, restriction, sexuality.",
      "reversed_interpretation": "Releasing beliefs, exploring dark thoughts, detachment."
    },
    {
      "id": 16,
      "name": "The Tower",
      "visual_anatomy": "A tall stone tower built on a craggy mountain is struck by lightning. Flames erupt from the windows. Two figures fall head-first from the heights. The crown atop the tower is being blasted off. Many golden sparks (yods) fill the air.",
      "symbolic_meaning": "Lightning is a sudden flash of truth or crisis. The falling crown represents the collapse of the ego or false structures. The falling figures show the suddenness of change that affects everyone regardless of status.",
      "upright_interpretation": "Sudden change, upheaval, chaos, revelation, awakening.",
      "reversed_interpretation": "Personal transformation, fear of change, averaging a disaster."
    },
    {
      "id": 17,
      "name": "The Star",
      "visual_anatomy": "A naked woman kneels by a pool of water under a large yellow star surrounded by seven smaller white stars. She pours water from two jugs—one into the pool and one onto the grassy earth. A small bird sits on a distant branch.",
      "symbolic_meaning": "Nakedness represents vulnerability and truth. The stars signify hope and cosmic connection. Pouring water into both pool and land shows the nourishment of both spirit and material life. The bird represents the return of the soul.",
      "upright_interpretation": "Hope, faith, purpose, renewal, spirituality.",
      "reversed_interpretation": "Lack of faith, despair, self-trust, disconnection."
    },
    {
      "id": 18,
      "name": "The Moon",
      "visual_anatomy": "A large full moon with a face is centered between two towers. A narrow path leads from a pool in the foreground toward the mountains. A lobster crawls from the water; a dog and a wolf howl at the moon. Drops of golden dew fall from the sky.",
      "symbolic_meaning": "The lobster represents the emergence of the deep subconscious. The dog and wolf represent the tamed and wild aspects of the mind. The towers mark the entrance to the unknown. The moon suggests a world of illusion and dreams.",
      "upright_interpretation": "Illusion, fear, anxiety, subconscious, intuition.",
      "reversed_interpretation": "Release of fear, repressed emotion, inner confusion."
    },
    {
      "id": 19,
      "name": "The Sun",
      "visual_anatomy": "A naked child rides a white horse, holding a large red banner. Four sunflowers grow tall over a stone wall in the background. A large, radiant sun with a face shines brightly, filling the sky with straight and wavy rays.",
      "symbolic_meaning": "The child represents innocence and the joy of the pure spirit. The white horse is strength and purity. Sunflowers signify abundance and the following of light. The sun is the ultimate source of life and clarity.",
      "upright_interpretation": "Positivity, fun, warmth, success, vitality.",
      "reversed_interpretation": "Inner child, feeling down, overly optimistic."
    },
    {
      "id": 20,
      "name": "Judgement",
      "visual_anatomy": "An angel (Gabriel) blows a golden trumpet from the clouds. Figures (men, women, children) rise from their coffins in the sea, reaching toward the sky in joy. Snowy mountains are in the background.",
      "symbolic_meaning": "The trumpet call signifies a spiritual awakening or a moment of reckoning. Rising from coffins represents the shedding of the past and the rebirth into a higher state of being. The sea shows the depth of human emotion being transcended.",
      "upright_interpretation": "Judgement, rebirth, inner calling, absolution.",
      "reversed_interpretation": "Self-doubt, inner critic, ignoring the call."
    },
    {
      "id": 21,
      "name": "The World",
      "visual_anatomy": "A woman wrapped in a light purple veil dances in the center of a giant laurel wreath. She holds two wands. In the four corners are the same creatures from the Wheel of Fortune (Angel, Eagle, Bull, Lion) peering through the clouds.",
      "symbolic_meaning": "The laurel wreath symbolizes success and completion. The dancing figure represents the harmony of movement. The four creatures represent the unity of all elements and the mastery of the physical world.",
      "upright_interpretation": "Completion, integration, accomplishment, travel.",
      "reversed_interpretation": "Seeking closure, short-cuts, delays."
    },
    {
      "id": 22,
      "name": "Ace of Wands",
      "visual_anatomy": "A hand emerges from a cloud holding a sprouting wooden wand. In the background is a castle on a hill.",
      "symbolic_meaning": "New growth, inspiration, the seed of potential.",
      "upright_interpretation": "Inspiration, new opportunities, growth.",
      "reversed_interpretation": "Delays, lack of inspiration, hesitation."
    },
    {
      "id": 23,
      "name": "Two of Wands",
      "visual_anatomy": "A man stands on a castle wall holding a small globe in one hand and a wand in the other.",
      "symbolic_meaning": "Global vision, planning for the future, expansion.",
      "upright_interpretation": "Future planning, progress, discovery.",
      "reversed_interpretation": "Fear of unknown, lack of planning."
    },
    {
      "id": 24,
      "name": "Three of Wands",
      "visual_anatomy": "A man looks out over the sea where ships sail. Three wands are planted in the ground.",
      "symbolic_meaning": "Waiting for results, trade, foresight.",
      "upright_interpretation": "Expansion, foresight, overseas opportunities.",
      "reversed_interpretation": "Playing it safe, lack of foresight."
    },
    {
      "id": 25,
      "name": "Four of Wands",
      "visual_anatomy": "Four wands form a canopy with a lush garland. People dance in the background.",
      "symbolic_meaning": "Celebration, home, stability.",
      "upright_interpretation": "Celebration, harmony, homecoming.",
      "reversed_interpretation": "Lack of harmony, transition, tension."
    },
    {
      "id": 26,
      "name": "Five of Wands",
      "visual_anatomy": "Five youths engage in a mock battle with wands.",
      "symbolic_meaning": "Competition, struggle, clashing views.",
      "upright_interpretation": "Competition, conflict, diversity.",
      "reversed_interpretation": "Avoiding conflict, apathy, harmony."
    },
    {
      "id": 27,
      "name": "Six of Wands",
      "visual_anatomy": "A rider with a laurel wreath on his head and wand rides through a crowd.",
      "symbolic_meaning": "Victory, public acclaim, success.",
      "upright_interpretation": "Success, public recognition, progress.",
      "reversed_interpretation": "Lack of recognition, fall from grace."
    },
    {
      "id": 28,
      "name": "Seven of Wands",
      "visual_anatomy": "A man stands on a hill, defending himself against six wands from below.",
      "symbolic_meaning": "Defense, persistence, protecting territory.",
      "upright_interpretation": "Perseverance, defense, maintaining control.",
      "reversed_interpretation": "Exhaustion, giving in, being overwhelmed."
    },
    {
      "id": 29,
      "name": "Eight of Wands",
      "visual_anatomy": "Eight wands fly through the air in unison.",
      "symbolic_meaning": "Speed, swift action, communication.",
      "upright_interpretation": "Speed, action, fast change.",
      "reversed_interpretation": "Delays, frustration, waiting."
    },
    {
      "id": 30,
      "name": "Nine of Wands",
      "visual_anatomy": "An injured man leans on a wand, with eight others behind him like a fence.",
      "symbolic_meaning": "Boundary, resilience, final push.",
      "upright_interpretation": "Resilience, boundaries, persistence.",
      "reversed_interpretation": "Defensiveness, paranoia, exhaustion."
    },
    {
      "id": 31,
      "name": "Ten of Wands",
      "visual_anatomy": "A man struggles to carry ten wands toward a distant town.",
      "symbolic_meaning": "Burdens, responsibility, hard work.",
      "upright_interpretation": "Burden, responsibility, completion.",
      "reversed_interpretation": "Doing it all, delegation, burnout."
    },
    {
      "id": 32,
      "name": "Page of Wands",
      "visual_anatomy": "A youth in a patterned tunic gazes at a sprouting wand.",
      "symbolic_meaning": "Messenger, exploration, curiosity.",
      "upright_interpretation": "Inspiration, ideas, discovery.",
      "reversed_interpretation": "Lack of ideas, setbacks, redirection."
    },
    {
      "id": 33,
      "name": "Knight of Wands",
      "visual_anatomy": "A knight on a charging horse, wearing armor with salamander patterns.",
      "symbolic_meaning": "Action, adventure, passion.",
      "upright_interpretation": "Energy, passion, action, adventure.",
      "reversed_interpretation": "Passion project, impulsiveness, haste."
    },
    {
      "id": 34,
      "name": "Queen of Wands",
      "visual_anatomy": "A queen sits on a throne with lions and sunflowers, holding a wand and a black cat.",
      "symbolic_meaning": "Command, charisma, vitality.",
      "upright_interpretation": "Courage, confidence, independence.",
      "reversed_interpretation": "Self-confidence, narcissism, jealousy."
    },
    {
      "id": 35,
      "name": "King of Wands",
      "visual_anatomy": "A king on a throne with salamander patterns, holding a wand.",
      "symbolic_meaning": "Leadership, vision, mastery.",
      "upright_interpretation": "Natural-born leader, vision, entrepreneur.",
      "reversed_interpretation": "Impulsiveness, high expectations, ruthlessness."
    },
    {
      "id": 36,
      "name": "Ace of Cups",
      "visual_anatomy": "A hand holds a cup from which five streams of water flow into a pool with lilies. A dove drops a wafer.",
      "symbolic_meaning": "Emotional beginnings, purity, spiritual flow.",
      "upright_interpretation": "Love, new relationships, intuition.",
      "reversed_interpretation": "Self-love, intuition, suppressed emotions."
    },
    {
      "id": 37,
      "name": "Two of Cups",
      "visual_anatomy": "A man and woman exchange cups. A caduceus with a lion's head floats above.",
      "symbolic_meaning": "Union, partnership, balance.",
      "upright_interpretation": "Unified love, partnership, attraction.",
      "reversed_interpretation": "Self-love, disharmony, break-up."
    },
    {
      "id": 38,
      "name": "Three of Cups",
      "visual_anatomy": "Three women dance together while raising cups.",
      "symbolic_meaning": "Celebration, friendship, community.",
      "upright_interpretation": "Celebration, friendship, creativity.",
      "reversed_interpretation": "Independence, alone time, three's a crowd."
    },
    {
      "id": 39,
      "name": "Four of Cups",
      "visual_anatomy": "A man sits under a tree, ignoring three cups while a hand offers a fourth.",
      "symbolic_meaning": "Apathy, contemplation, missed chances.",
      "upright_interpretation": "Apathy, contemplation, disconnectedness.",
      "reversed_interpretation": "Clarity, awareness, choosing happiness."
    },
    {
      "id": 40,
      "name": "Five of Cups",
      "visual_anatomy": "A cloaked figure mourns over three spilled cups, with two full ones behind.",
      "symbolic_meaning": "Loss, regret, focus on the negative.",
      "upright_interpretation": "Regret, failure, disappointment.",
      "reversed_interpretation": "Personal healing, moving on, acceptance."
    },
    {
      "id": 41,
      "name": "Six of Cups",
      "visual_anatomy": "Children in a garden exchange cups filled with white flowers.",
      "symbolic_meaning": "Nostalgia, childhood, innocence.",
      "upright_interpretation": "Nostalgia, memories, innocence.",
      "reversed_interpretation": "Living in the past, moving on, independence."
    },
    {
      "id": 42,
      "name": "Seven of Cups",
      "visual_anatomy": "A figure gazes at seven cups in the clouds, each containing a different item.",
      "symbolic_meaning": "Choices, illusion, wishful thinking.",
      "upright_interpretation": "Searching for purpose, choices, fantasies.",
      "reversed_interpretation": "Alignment, clarity, commitment."
    },
    {
      "id": 43,
      "name": "Eight of Cups",
      "visual_anatomy": "A figure walks away from eight stacked cups toward mountains at night.",
      "symbolic_meaning": "Departure, seeking more, transition.",
      "upright_interpretation": "Disillusionment, abandonment, withdrawal.",
      "reversed_interpretation": "Trying one last time, indecision, aimless drifting."
    },
    {
      "id": 44,
      "name": "Nine of Cups",
      "visual_anatomy": "A man sits with arms crossed in front of nine cups on a table.",
      "symbolic_meaning": "Satisfaction, gratitude, wishes fulfilled.",
      "upright_interpretation": "Gratefulness, satisfaction, luxury.",
      "reversed_interpretation": "Lack of inner joy, smugness, materialism."
    },
    {
      "id": 45,
      "name": "Ten of Cups",
      "visual_anatomy": "A family stands under a rainbow with ten cups. A house is in the background.",
      "symbolic_meaning": "Happiness, family, emotional fulfillment.",
      "upright_interpretation": "Divine love, blissful relationships, harmony.",
      "reversed_interpretation": "Disconnection, struggling relationships, disharmony."
    },
    {
      "id": 46,
      "name": "Page of Cups",
      "visual_anatomy": "A youth holds a cup with a fish popping out.",
      "symbolic_meaning": "Curiosity, new feelings, surprises.",
      "upright_interpretation": "Creative opportunities, intuitive messages.",
      "reversed_interpretation": "New ideas, doubting intuition, creative blocks."
    },
    {
      "id": 47,
      "name": "Knight of Cups",
      "visual_anatomy": "A knight on a peaceful horse, holding a cup.",
      "symbolic_meaning": "Romance, messenger of emotion, dreams.",
      "upright_interpretation": "Creativity, romance, charm, imagination.",
      "reversed_interpretation": "Overactive imagination, unrealistic, jealousy."
    },
    {
      "id": 48,
      "name": "Queen of Cups",
      "visual_anatomy": "A queen gazes at an elaborate, closed cup by the sea.",
      "symbolic_meaning": "Intuition, compassion, emotional stability.",
      "upright_interpretation": "Compassionate, caring, emotionally stable.",
      "reversed_interpretation": "Self-care, self-love, co-dependency."
    },
    {
      "id": 49,
      "name": "King of Cups",
      "visual_anatomy": "A king sits on a throne floating on the sea, holding a cup.",
      "symbolic_meaning": "Emotional mastery, balance, calmness.",
      "upright_interpretation": "Emotionally balanced, compassionate, diplomatic.",
      "reversed_interpretation": "Self-compassion, inner feelings, moodiness."
    },
    {
      "id": 50,
      "name": "Ace of Swords",
      "visual_anatomy": "A hand holds a sword with a crown and laurel. Mountains are in the background.",
      "symbolic_meaning": "Clarity, breakthrough, victory.",
      "upright_interpretation": "Breakthrough, clarity, sharp mind.",
      "reversed_interpretation": "Confusion, chaos, lack of clarity."
    },
    {
      "id": 51,
      "name": "Two of Swords",
      "visual_anatomy": "A woman is blindfolded, holding two crossed swords by the sea.",
      "symbolic_meaning": "Indecision, stalemate, blocked emotions.",
      "upright_interpretation": "Difficult choices, stalemate, stalemate.",
      "reversed_interpretation": "Indecision, confusion, information overload."
    },
    {
      "id": 52,
      "name": "Three of Swords",
      "visual_anatomy": "A heart pierced by three swords in a storm.",
      "symbolic_meaning": "Heartbreak, pain, emotional sorrow.",
      "upright_interpretation": "Heartbreak, emotional pain, sorrow.",
      "reversed_interpretation": "Healing, forgiveness, optimism."
    },
    {
      "id": 53,
      "name": "Four of Swords",
      "visual_anatomy": "A knight lies in repose in a church with three swords on the wall and one beneath him.",
      "symbolic_meaning": "Rest, recovery, meditation.",
      "upright_interpretation": "Rest, recovery, contemplation.",
      "reversed_interpretation": "Exhaustion, burnout, stagnation."
    },
    {
      "id": 54,
      "name": "Five of Swords",
      "visual_anatomy": "A man holds three swords while two others walk away in defeat.",
      "symbolic_meaning": "Conflict, win at any cost, discord.",
      "upright_interpretation": "Conflict, disagreement, competition.",
      "reversed_interpretation": "Reconciliation, making amends, past resentment."
    },
    {
      "id": 55,
      "name": "Six of Swords",
      "visual_anatomy": "A figure rows a boat across water with six swords standing in it.",
      "symbolic_meaning": "Transition, leaving behind, calm waters.",
      "upright_interpretation": "Transition, rite of passage, release.",
      "reversed_interpretation": "Emotional baggage, unresolved issues."
    },
    {
      "id": 56,
      "name": "Seven of Swords",
      "visual_anatomy": "A man sneaks away from a camp carrying five swords, leaving two behind.",
      "symbolic_meaning": "Deception, strategy, stealth.",
      "upright_interpretation": "Betrayal, deception, getting away with it.",
      "reversed_interpretation": "Self-deceit, confession, outing secrets."
    },
    {
      "id": 57,
      "name": "Eight of Swords",
      "visual_anatomy": "A blindfolded woman is bound and surrounded by eight swords in a marsh.",
      "symbolic_meaning": "Limitation, feeling trapped, restriction.",
      "upright_interpretation": "Self-imposed restriction, imprisonment.",
      "reversed_interpretation": "Self-acceptance, new perspective, freedom."
    },
    {
      "id": 58,
      "name": "Nine of Swords",
      "visual_anatomy": "A person sits up in bed, face in hands, with nine swords on the wall behind.",
      "symbolic_meaning": "Anxiety, nightmares, mental anguish.",
      "upright_interpretation": "Anxiety, worry, nightmares.",
      "reversed_interpretation": "Inner turmoil, secrets, release of fear."
    },
    {
      "id": 59,
      "name": "Ten of Swords",
      "visual_anatomy": "A man lies face down with ten swords in his back under a dark sky.",
      "symbolic_meaning": "Defeat, betrayal, rock bottom.",
      "upright_interpretation": "Backstabbing, betrayal, rock bottom.",
      "reversed_interpretation": "Recovery, regeneration, resisting the end."
    },
    {
      "id": 60,
      "name": "Page of Swords",
      "visual_anatomy": "A youth stands with a sword in a windy landscape.",
      "symbolic_meaning": "Curiosity, truth, communication.",
      "upright_interpretation": "New ideas, curiosity, thirst for knowledge.",
      "reversed_interpretation": "Self-expression, all talk no action, haste."
    },
    {
      "id": 61,
      "name": "Knight of Swords",
      "visual_anatomy": "A knight on a charging horse, sword drawn.",
      "symbolic_meaning": "Action, fast-paced change, ambition.",
      "upright_interpretation": "Action, impulsive, ambitious.",
      "reversed_interpretation": "Unfocused, restless, burnout."
    },
    {
      "id": 62,
      "name": "Queen of Swords",
      "visual_anatomy": "A queen on a throne, holding a sword and pointing ahead.",
      "symbolic_meaning": "Intellect, independence, clarity.",
      "upright_interpretation": "Complexity, independent, objective.",
      "reversed_interpretation": "Overly-emotional, cold-hearted, cruel."
    },
    {
      "id": 63,
      "name": "King of Swords",
      "visual_anatomy": "A king on a throne with a sword, looking straight ahead.",
      "symbolic_meaning": "Authority, logic, truth.",
      "upright_interpretation": "Intellectual power, authority, truth.",
      "reversed_interpretation": "Quiet power, manipulation, cruelty."
    },
    {
      "id": 64,
      "name": "Ace of Pentacles",
      "visual_anatomy": "A hand holds a golden pentacle over a garden.",
      "symbolic_meaning": "Opportunity, abundance, prosperity.",
      "upright_interpretation": "Discovery, manifest, abundance.",
      "reversed_interpretation": "Lost opportunity, lack of planning."
    },
    {
      "id": 65,
      "name": "Two of Pentacles",
      "visual_anatomy": "A man juggles two pentacles connected by an infinity loop.",
      "symbolic_meaning": "Balance, adaptability, priorities.",
      "upright_interpretation": "Balance, priorities, time management.",
      "reversed_interpretation": "Disorganization, over-committed."
    },
    {
      "id": 66,
      "name": "Three of Pentacles",
      "visual_anatomy": "An artisan works in a cathedral with two others.",
      "symbolic_meaning": "Collaboration, teamwork, craftsmanship.",
      "upright_interpretation": "Teamwork, collaboration, learning.",
      "reversed_interpretation": "Lack of teamwork, disorganization."
    },
    {
      "id": 67,
      "name": "Four of Pentacles",
      "visual_anatomy": "A man holds onto four pentacles tightly.",
      "symbolic_meaning": "Security, control, frugality.",
      "upright_interpretation": "Conservation, security, frugality.",
      "reversed_interpretation": "Greed, stinginess, possessiveness."
    },
    {
      "id": 68,
      "name": "Five of Pentacles",
      "visual_anatomy": "Two paupers walk in snow past a glowing stained-glass window.",
      "symbolic_meaning": "Poverty, isolation, hardship.",
      "upright_interpretation": "Poverty, financial loss, isolation.",
      "reversed_interpretation": "Recovery from loss, spiritual growth."
    },
    {
      "id": 69,
      "name": "Six of Pentacles",
      "visual_anatomy": "A wealthy man gives coins to two beggars while holding scales.",
      "symbolic_meaning": "Generosity, charity, balance of power.",
      "upright_interpretation": "Generosity, charity, sharing wealth.",
      "reversed_interpretation": "Debt, selfishness, one-sidedness."
    },
    {
      "id": 70,
      "name": "Seven of Pentacles",
      "visual_anatomy": "A gardener rests, looking at his growing vines with seven pentacles.",
      "symbolic_meaning": "Patience, investment, hard work.",
      "upright_interpretation": "Long-term view, sustainable results.",
      "reversed_interpretation": "Short-term focus, lack of reward."
    },
    {
      "id": 71,
      "name": "Eight of Pentacles",
      "visual_anatomy": "An artisan diligently carves pentacles.",
      "symbolic_meaning": "Apprenticeship, mastery, diligence.",
      "upright_interpretation": "Apprenticeship, repetitive effort, mastery.",
      "reversed_interpretation": "Self-perfection, uninspired, laziness."
    },
    {
      "id": 72,
      "name": "Nine of Pentacles",
      "visual_anatomy": "A woman in a lush vineyard with a hooded bird on her hand.",
      "symbolic_meaning": "Abundance, independence, luxury.",
      "upright_interpretation": "Financial independence, luxury, profit.",
      "reversed_interpretation": "Over-spending, dependency, social status."
    },
    {
      "id": 73,
      "name": "Ten of Pentacles",
      "visual_anatomy": "An old man, family, and dogs in a city courtyard with ten pentacles.",
      "symbolic_meaning": "Legacy, family, wealth.",
      "upright_interpretation": "Wealth, inheritance, family, tradition.",
      "reversed_interpretation": "Financial failure, family conflict."
    },
    {
      "id": 74,
      "name": "Page of Pentacles",
      "visual_anatomy": "A youth gazes at a pentacle in a field.",
      "symbolic_meaning": "Ambition, study, manifestation.",
      "upright_interpretation": "Manifestation, financial opportunity.",
      "reversed_interpretation": "Lack of progress, procrastination."
    },
    {
      "id": 75,
      "name": "Knight of Pentacles",
      "visual_anatomy": "A knight on a slow-moving horse, holding a pentacle.",
      "symbolic_meaning": "Reliability, routine, hard work.",
      "upright_interpretation": "Hard work, productivity, routine.",
      "reversed_interpretation": "Self-discipline, boredom, stagnation."
    },
    {
      "id": 76,
      "name": "Queen of Pentacles",
      "visual_anatomy": "A queen on a throne with rabbits and flowers, holding a pentacle.",
      "symbolic_meaning": "Nurturing, practical, security.",
      "upright_interpretation": "Practical, homely, security.",
      "reversed_interpretation": "Self-care, work-home imbalance."
    },
    {
      "id": 77,
      "name": "King of Pentacles",
      "visual_anatomy": "A king on a throne with bulls and grapes, holding a pentacle.",
      "symbolic_meaning": "Wealth, success, security.",
      "upright_interpretation": "Wealth, business, leadership.",
      "reversed_interpretation": "Greed, indulgence, sensuality."
    }
  ],
  "runes": [
    {
      "id": 0,
      "name": "Fehu",
      "stave_anatomy": "Vertical stave with two diagonal up-branches.",
      "nature_symbolism": "Cattle/Wealth, mobile prosperity.",
      "upright_meaning": "Success, wealth, creative energy.",
      "merkstav_meaning": "Loss, greed, blockage."
    },
    {
      "id": 1,
      "name": "Uruz",
      "stave_anatomy": "Stave like an inverted 'U' or ox horns.",
      "nature_symbolism": "Aurochs, primal strength, health.",
      "upright_meaning": "Strength, speed, vital energy.",
      "merkstav_meaning": "Weakness, sickness, missed chances."
    },
    {
      "id": 2,
      "name": "Thurisaz",
      "stave_anatomy": "Stave with a sharp thorn or hammer head.",
      "nature_symbolism": "Thorn, Giant, protection/conflict.",
      "upright_meaning": "Reactive force, protection, conflict.",
      "merkstav_meaning": "Defenselessness, compulsion."
    },
    {
      "id": 3,
      "name": "Ansuz",
      "stave_anatomy": "Vertical stave with two downward diagonal branches.",
      "nature_symbolism": "Breath, God, communication.",
      "upright_meaning": "Wisdom, communication, inspiration.",
      "merkstav_meaning": "Misunderstanding, delusion."
    },
    {
      "id": 4,
      "name": "Raidho",
      "stave_anatomy": "Stave shaped like an 'R' or a wheel.",
      "nature_symbolism": "Wagon, journey, path.",
      "upright_meaning": "Travel, rhythm, movement, law.",
      "merkstav_meaning": "Crisis, stagnation, injustice."
    },
    {
      "id": 5,
      "name": "Kenaz",
      "stave_anatomy": "Stave like a 'greater than' sign or torch.",
      "nature_symbolism": "Torch, fire, knowledge.",
      "upright_meaning": "Vision, revelation, creativity, fire.",
      "merkstav_meaning": "Lack of vision, hidden things, disease."
    },
    {
      "id": 6,
      "name": "Gebo",
      "stave_anatomy": "Stave shaped like an 'X'.",
      "nature_symbolism": "Gift, exchange, partnership.",
      "upright_meaning": "Gifts, partnership, sacrifice.",
      "merkstav_meaning": "Greed, loneliness, imbalance."
    },
    {
      "id": 7,
      "name": "Wunjo",
      "stave_anatomy": "Stave like a 'P', representing a flag.",
      "nature_symbolism": "Joy, comfort, harmony.",
      "upright_meaning": "Joy, pleasure, fellowship.",
      "merkstav_meaning": "Sorrow, strife, alienation."
    },
    {
      "id": 8,
      "name": "Hagalaz",
      "stave_anatomy": "Vertical staves connected by a diagonal.",
      "nature_symbolism": "Hail, destruction, disruption.",
      "upright_meaning": "Disruption, natural forces, crisis.",
      "merkstav_meaning": "Passive endurance, slow change."
    },
    {
      "id": 9,
      "name": "Nauthiz",
      "stave_anatomy": "Vertical stave with a cross-diagonal.",
      "nature_symbolism": "Need, distress, constraint.",
      "upright_meaning": "Necessity, restriction, endurance.",
      "merkstav_meaning": "Laxness, deprivation, poverty."
    },
    {
      "id": 10,
      "name": "Isa",
      "stave_anatomy": "Single vertical stave.",
      "nature_symbolism": "Ice, stillness, stagnation.",
      "upright_meaning": "Stillness, block, psychological freeze.",
      "merkstav_meaning": "Ego-mania, blindness, treachery."
    },
    {
      "id": 11,
      "name": "Jera",
      "stave_anatomy": "Two nested angled staves.",
      "nature_symbolism": "Year, harvest, cycles.",
      "upright_meaning": "Harvest, patience, good results.",
      "merkstav_meaning": "Sudden setbacks, bad timing."
    },
    {
      "id": 12,
      "name": "Eihwaz",
      "stave_anatomy": "Stave with hooks at both ends.",
      "nature_symbolism": "Yew tree, death/rebirth, cosmic pillar.",
      "upright_meaning": "Endurance, protection, change.",
      "merkstav_meaning": "Confusion, weakness, transition."
    },
    {
      "id": 13,
      "name": "Perthro",
      "stave_anatomy": "Stave like a 'cup' or 'die-box' on its side.",
      "nature_symbolism": "Dice cup, lot, hidden things.",
      "upright_meaning": "Fate, secrets, hidden things.",
      "merkstav_meaning": "Uncertainty, loneliness, gambling."
    },
    {
      "id": 14,
      "name": "Algiz",
      "stave_anatomy": "Vertical stave with three up-branches.",
      "nature_symbolism": "Elk, protection, sanctuary.",
      "upright_meaning": "Protection, connection with divine.",
      "merkstav_meaning": "Hidden danger, vulnerability."
    },
    {
      "id": 15,
      "name": "Sowilo",
      "stave_anatomy": "Lightning bolt shape.",
      "nature_symbolism": "Sun, success, victory.",
      "upright_meaning": "Vitality, success, wholeness.",
      "merkstav_meaning": "False goals, over-exertion."
    },
    {
      "id": 16,
      "name": "Tiwaz",
      "stave_anatomy": "Upward arrow shape.",
      "nature_symbolism": "Tyr (God), justice, victory.",
      "upright_meaning": "Honor, justice, leadership.",
      "merkstav_meaning": "Lack of leadership, over-analysis."
    },
    {
      "id": 17,
      "name": "Berkano",
      "stave_anatomy": "Stave like a 'B'.",
      "nature_symbolism": "Birch, growth, new life.",
      "upright_meaning": "Growth, rebirth, fertility.",
      "merkstav_meaning": "Stunted growth, domestic trouble."
    },
    {
      "id": 18,
      "name": "Ehwaz",
      "stave_anatomy": "Stave like an 'M' or two horses.",
      "nature_symbolism": "Horse, partnership, trust.",
      "upright_meaning": "Movement, trust, loyalty.",
      "merkstav_meaning": "Restlessness, distrust, betrayal."
    },
    {
      "id": 19,
      "name": "Mannaz",
      "stave_anatomy": "Stave like an 'M' with internal cross.",
      "nature_symbolism": "Humanity, self, consciousness.",
      "upright_meaning": "Self, society, intelligence.",
      "merkstav_meaning": "Isolation, depression, ego."
    },
    {
      "id": 20,
      "name": "Laguz",
      "stave_anatomy": "Stave with a hook pointing down.",
      "nature_symbolism": "Water, ocean, intuition.",
      "upright_meaning": "Flow, intuition, subconscious.",
      "merkstav_meaning": "Confusion, lack of flow, madness."
    },
    {
      "id": 21,
      "name": "Ingwaz",
      "stave_anatomy": "Diamond shape.",
      "nature_symbolism": "Ing (God), fertility, storehouse.",
      "upright_meaning": "Internal growth, peace, potential.",
      "merkstav_meaning": "Impotence, work without gain."
    },
    {
      "id": 22,
      "name": "Dagaz",
      "stave_anatomy": "Stave like an 'X' or hourglass.",
      "nature_symbolism": "Day, dawn, awakening.",
      "upright_meaning": "Breakthrough, clarity, dawn.",
      "merkstav_meaning": "Blindness, sleep, end of cycle."
    },
    {
      "id": 23,
      "name": "Othala",
      "stave_anatomy": "Enclosed loop with two tails.",
      "nature_symbolism": "Ancestral land, inheritance.",
      "upright_meaning": "Inheritance, heritage, home.",
      "merkstav_meaning": "Homelessness, loss of legacy."
    }
  ]
};