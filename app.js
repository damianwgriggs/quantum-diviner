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
    drawRuneBtn: document.getElementById('draw-rune')
};

/**
 * Entropy Engine
 */
async function getQuantumEntropy() {
    try {
        const response = await fetch(CONFIG.ANU_API_URL, { timeout: 5000 });
        if (!response.ok) throw new Error('API unreachable');
        const data = await response.json();
        UI.entropyLabel.innerText = "Source: ANU Quantum Random Number Lab";
        return data.data[0];
    } catch (e) {
        console.warn("Quantum API failed, falling back to Web Crypto API.", e);
        const array = new Uint8Array(1);
        window.crypto.getRandomValues(array);
        UI.entropyLabel.innerText = "Source: Local Kernel Entropy Pool (SecureRandom)";
        return array[0];
    }
}

/**
 * Draw Logic
 */
async function performDraw(type) {
    const seed = await getQuantumEntropy();
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
UI.resetBtn.addEventListener('click', resetUI);

// Initialize
window.addEventListener('load', () => {
    console.log("The Quantum Diviner Initialized.");
    UI.entropyLabel.innerText = "Source: Quantum Ready";
});
