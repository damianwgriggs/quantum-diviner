/**
 * The Quantum Diviner - Core Engine
 */

const CONFIG = {
    ANU_API_URL: 'https://qrng.anu.edu.au/API/jsonI.php?type=uint8',
    API_KEY: null 
};

// Internal Data for AstroDice (Backup)
const ASTRODICE_DATA = {
    "planets": [
        { "name": "Sun", "symbol": "☉", "anatomy": "A gold-rimmed circle with a singular, perfect dot.", "meaning": "The core identity and vital life force." },
        { "name": "Moon", "symbol": "☽", "anatomy": "A silver crescent, curved like a protective cradle.", "meaning": "Emotions, the subconscious, and intuition." },
        { "name": "Mercury", "symbol": "☿", "anatomy": "A circle topped with a crescent 'antenna'.", "meaning": "Communication, intellect, and travel." },
        { "name": "Venus", "symbol": "♀", "anatomy": "A circle of spirit atop the cross of matter.", "meaning": "Love, beauty, and harmony." },
        { "name": "Mars", "symbol": "♂", "anatomy": "A circle with an outward-pointing arrow.", "meaning": "Action, courage, and desire." },
        { "name": "Jupiter", "symbol": "♃", "anatomy": "A crescent rising above a cross.", "meaning": "Luck, growth, and expansion." },
        { "name": "Saturn", "symbol": "♄", "anatomy": "A cross of matter above the crescent of soul.", "meaning": "Discipline, structure, and karma." },
        { "name": "Uranus", "symbol": "♅", "anatomy": "A cross centered within a circle with crescents.", "meaning": "Innovation, rebellion, and change." },
        { "name": "Neptune", "symbol": "♆", "anatomy": "A three-pronged trident.", "meaning": "Dreams, illusion, and spirituality." },
        { "name": "Pluto", "symbol": "♇", "anatomy": "A crescent holding a circle of spirit.", "meaning": "Power, transformation, and rebirth." },
        { "name": "North Node", "symbol": "☊", "anatomy": "Two small circles connected facing upward.", "meaning": "Destiny and spiritual growth." },
        { "name": "South Node", "symbol": "☋", "anatomy": "Two small circles connected facing downward.", "meaning": "Karmic baggage and past habits." }
    ],
    "signs": [
        { "name": "Aries", "symbol": "♈", "anatomy": "Horns of a ram pushing through the earth.", "meaning": "Initiative and courage." },
        { "name": "Taurus", "symbol": "♉", "anatomy": "Head and horns of a bull.", "meaning": "Stability and sensuality." },
        { "name": "Gemini", "symbol": "♊", "anatomy": "Two vertical pillars.", "meaning": "Duality and curiosity." },
        { "name": "Cancer", "symbol": "♋", "anatomy": "Interlocking crab claws.", "meaning": "Nurturing and sensitivity." },
        { "name": "Leo", "symbol": "♌", "anatomy": "The mane of a lion.", "meaning": "Creativity and leadership." },
        { "name": "Virgo", "symbol": "♍", "anatomy": "An 'm' with an inward loop.", "meaning": "Analysis and detail." },
        { "name": "Libra", "symbol": "♎", "anatomy": "Balanced beam of a scale.", "meaning": "Diplomacy and justice." },
        { "name": "Scorpio", "symbol": "♏", "anatomy": "Outward-pointing barbed tail.", "meaning": "Intensity and passion." },
        { "name": "Sagittarius", "symbol": "♐", "anatomy": "An arrow pointing upward.", "meaning": "Adventure and philosophy." },
        { "name": "Capricorn", "symbol": "♑", "anatomy": "Goat's head and fish's tail.", "meaning": "Ambition and structure." },
        { "name": "Aquarius", "symbol": "♒", "anatomy": "Two parallel zigzag lines.", "meaning": "Originality and humanity." },
        { "name": "Pisces", "symbol": "♓", "anatomy": "Two fish tied together.", "meaning": "Empathy and mysticism." }
    ],
    "houses": [
        { "name": "1st House", "symbol": "I", "anatomy": "Foundational pillar of the self.", "meaning": "Self-image and identity." },
        { "name": "2nd House", "symbol": "II", "anatomy": "Two pillars of accumulation.", "meaning": "Finances and values." },
        { "name": "3rd House", "symbol": "III", "anatomy": "Three pillars of thought.", "meaning": "Communication and siblings." },
        { "name": "4th House", "symbol": "IV", "anatomy": "Four pillars of the home.", "meaning": "Home and family." },
        { "name": "5th House", "symbol": "V", "anatomy": "A V-shape of creation.", "meaning": "Creativity and romance." },
        { "name": "6th House", "symbol": "VI", "anatomy": "Six lines of daily rhythm.", "meaning": "Health and service." },
        { "name": "7th House", "symbol": "VII", "anatomy": "Horizontal line of meeting.", "meaning": "Partnerships and marriage." },
        { "name": "8th House", "symbol": "VIII", "anatomy": "Infinity symbol on its side.", "meaning": "Transformation and intimacy." },
        { "name": "9th House", "symbol": "IX", "anatomy": "Arrow pointing toward truth.", "meaning": "Philosophy and travel." },
        { "name": "10th House", "symbol": "X", "anatomy": "Pinnacle of the public eye.", "meaning": "Career and reputation." },
        { "name": "11th House", "symbol": "XI", "anatomy": "Network of connecting lines.", "meaning": "Friends and aspirations." },
        { "name": "12th House", "symbol": "XII", "anatomy": "Ethereal border of the cycle.", "meaning": "Subconscious and mysteries." }
    ]
};

const UI = {
    sections: document.querySelectorAll('.tab-content'),
    navItems: document.querySelectorAll('.nav-item'),
    contentArea: document.getElementById('content-area'),
    drawActions: document.getElementById('draw-actions'),
    revealContainer: document.getElementById('reveal-container'),
    cardDisplay: document.getElementById('card-display'),
    resetBtn: document.getElementById('reset-button'),
    entropyLabel: document.getElementById('entropy-source'),
    drawTarotBtn: document.getElementById('draw-tarot'),
    drawRuneBtn: document.getElementById('draw-rune'),
    drawAstroDiceBtn: document.getElementById('draw-astrodice'),
    diceVisuals: {
        planet: document.getElementById('planet-die'),
        sign: document.getElementById('sign-die'),
        house: document.getElementById('house-die')
    }
};

/**
 * Entropy Engine
 */
async function getQuantumEntropy(length = 1) {
    try {
        const url = `${CONFIG.ANU_API_URL}&length=${length}`;
        const response = await fetch(url, { timeout: 3000 });
        if (!response.ok) throw new Error('API Error');
        const data = await response.json();
        UI.entropyLabel.innerText = "Source: ANU Quantum Random Number Lab";
        return data.data;
    } catch (e) {
        console.warn("Quantum API failed, using SecureRandom fallback.", e);
        const array = new Uint8Array(length);
        window.crypto.getRandomValues(array);
        UI.entropyLabel.innerText = "Source: SecureRandom (Kernel Entropy)";
        return Array.from(array);
    }
}

/**
 * Draw Logic
 */
async function performDraw(type) {
    if (type === 'astrodice') {
        return drawAstroDice();
    }
    
    const seeds = await getQuantumEntropy(1);
    const seed = seeds[0];
    
    // Safety check for data load
    if (typeof divination_data === 'undefined') {
        alert("Divination database is still loading. Please wait a moment and try again.");
        return;
    }

    const data = type === 'tarot' ? divination_data.tarot : divination_data.runes;
    const maxIndex = data.length;
    const index = seed % maxIndex;
    const isReversed = (seed >> 7) === 1;

    renderResult(data[index], isReversed, type);
}

function renderResult(item, isReversed, type) {
    UI.drawActions.classList.add('hidden');
    UI.revealContainer.classList.remove('hidden');
    
    const orientationText = type === 'tarot' 
        ? (isReversed ? 'Reversed' : 'Upright')
        : (isReversed ? 'Merkstav' : 'Upright');

    const interpretation = isReversed 
        ? (type === 'tarot' ? item.reversed_interpretation : item.merkstav_meaning)
        : (type === 'tarot' ? item.upright_interpretation : item.upright_meaning);

    const visualKey = type === 'tarot' ? 'Visual Anatomy' : 'Stave Anatomy';
    const visualContent = type === 'tarot' ? item.visual_anatomy : item.stave_anatomy;
    
    const symbolKey = type === 'tarot' ? 'Symbolic Meaning' : 'Nature Symbolism';
    const symbolContent = type === 'tarot' ? item.symbolic_meaning : item.nature_symbolism;

    UI.cardDisplay.innerHTML = `
        <div class="result-header">
            <h2 class="result-name serif">${item.name}</h2>
            <span class="result-orientation">${orientationText}</span>
        </div>
        <div class="result-section"><h3>${visualKey}</h3><p>${visualContent}</p></div>
        <div class="result-section"><h3>${symbolKey}</h3><p>${symbolContent}</p></div>
        <div class="result-section"><h3>Interpretation</h3><p>${interpretation}</p></div>
    `;
    UI.revealContainer.scrollIntoView({ behavior: 'smooth' });
}

async function drawAstroDice() {
    Object.values(UI.diceVisuals).forEach(el => el.classList.add('rolling'));
    const seeds = await getQuantumEntropy(3);
    Object.values(UI.diceVisuals).forEach(el => el.classList.remove('rolling'));

    // Check for global data, fallback to local
    let source = ASTRODICE_DATA;
    if (typeof divination_data !== 'undefined' && divination_data.astrodice) {
        source = divination_data.astrodice;
    }

    const planet = source.planets[seeds[0] % 12];
    const sign = source.signs[seeds[1] % 12];
    const house = source.houses[seeds[2] % 12];

    UI.diceVisuals.planet.innerText = planet.symbol;
    UI.diceVisuals.sign.innerText = sign.symbol;
    UI.diceVisuals.house.innerText = house.symbol;

    renderAstroResult(planet, sign, house);
}

function renderAstroResult(planet, sign, house) {
    UI.drawActions.classList.add('hidden');
    UI.revealContainer.classList.remove('hidden');

    UI.cardDisplay.innerHTML = `
        <div class="result-header">
            <h2 class="result-name serif">Celestial Casting</h2>
            <span class="result-orientation">AstroDice</span>
        </div>
        <div class="astro-result-grid">
            <div class="astro-die-result">
                <h4>${planet.symbol} ${planet.name}</h4>
                <div class="result-section"><h3>Anatomy</h3><p>${planet.anatomy}</p></div>
                <div class="result-section"><h3>Meaning</h3><p>${planet.meaning}</p></div>
            </div>
            <div class="astro-die-result">
                <h4>${sign.symbol} ${sign.name}</h4>
                <div class="result-section"><h3>Anatomy</h3><p>${sign.anatomy}</p></div>
                <div class="result-section"><h3>Meaning</h3><p>${sign.meaning}</p></div>
            </div>
            <div class="astro-die-result">
                <h4>${house.symbol} ${house.name}</h4>
                <div class="result-section"><h3>Anatomy</h3><p>${house.anatomy}</p></div>
                <div class="result-section"><h3>Meaning</h3><p>${house.meaning}</p></div>
            </div>
        </div>
    `;
    UI.revealContainer.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Tab Navigation
 */
UI.navItems.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');
        UI.navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        UI.sections.forEach(s => s.classList.remove('active'));
        document.getElementById(target).classList.add('active');
        resetUI();
    });
});

function resetUI() {
    UI.drawActions.classList.remove('hidden');
    UI.revealContainer.classList.add('hidden');
    UI.cardDisplay.innerHTML = '';
}

/**
 * Event Listeners
 */
UI.drawTarotBtn.addEventListener('click', () => performDraw('tarot'));
UI.drawRuneBtn.addEventListener('click', () => performDraw('runes'));
UI.drawAstroDiceBtn.addEventListener('click', () => performDraw('astrodice'));
UI.resetBtn.addEventListener('click', resetUI);

// Initialize
window.addEventListener('load', () => {
    console.log("The Quantum Diviner Initialized.");
    UI.entropyLabel.innerText = "Source: Quantum Ready";
});
