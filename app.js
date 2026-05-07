/**
 * The Quantum Diviner - Core Engine
 */

const CONFIG = {
    ANU_API_URL: 'https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8',
    API_KEY: null // User can fill this if needed
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
        const response = await fetch(`${CONFIG.ANU_API_URL}&length=${length}`, { timeout: 5000 });
        if (!response.ok) throw new Error('API unreachable');
        const data = await response.json();
        UI.entropyLabel.innerText = "Source: ANU Quantum Random Number Lab";
        return data.data;
    } catch (e) {
        console.warn("Quantum API failed, falling back to Web Crypto API.", e);
        const array = new Uint8Array(length);
        window.crypto.getRandomValues(array);
        UI.entropyLabel.innerText = "Source: Local Kernel Entropy Pool (SecureRandom)";
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
    const data = type === 'tarot' ? divination_data.tarot : divination_data.runes;
    const maxIndex = data.length;
    
    // Use the seed to get index and orientation
    const index = seed % maxIndex;
    const isReversed = (seed >> 7) === 1; // Use bit 7 for boolean

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
        
        <div class="result-section">
            <h3>${visualKey}</h3>
            <p>${visualContent}</p>
        </div>

        <div class="result-section">
            <h3>${symbolKey}</h3>
            <p>${symbolContent}</p>
        </div>

        <div class="result-section">
            <h3>Interpretation</h3>
            <p>${interpretation}</p>
        </div>
    `;
    
    UI.revealContainer.scrollIntoView({ behavior: 'smooth' });
}

async function drawAstroDice() {
    // Show rolling animation
    Object.values(UI.diceVisuals).forEach(el => el.classList.add('rolling'));
    
    const seeds = await getQuantumEntropy(3);
    
    // Stop animation
    Object.values(UI.diceVisuals).forEach(el => el.classList.remove('rolling'));

    const planet = divination_data.astrodice.planets[seeds[0] % 12];
    const sign = divination_data.astrodice.signs[seeds[1] % 12];
    const house = divination_data.astrodice.houses[seeds[2] % 12];

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
                <div class="result-section">
                    <h3>Anatomy</h3>
                    <p>${planet.anatomy}</p>
                </div>
                <div class="result-section">
                    <h3>Meaning</h3>
                    <p>${planet.meaning}</p>
                </div>
            </div>

            <div class="astro-die-result">
                <h4>${sign.symbol} ${sign.name}</h4>
                <div class="result-section">
                    <h3>Anatomy</h3>
                    <p>${sign.anatomy}</p>
                </div>
                <div class="result-section">
                    <h3>Meaning</h3>
                    <p>${sign.meaning}</p>
                </div>
            </div>

            <div class="astro-die-result">
                <h4>${house.symbol} ${house.name}</h4>
                <div class="result-section">
                    <h3>Anatomy</h3>
                    <p>${house.anatomy}</p>
                </div>
                <div class="result-section">
                    <h3>Meaning</h3>
                    <p>${house.meaning}</p>
                </div>
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
