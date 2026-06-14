// Screen ko change karne ka function
function nextScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
    });
    document.getElementById('screen-' + screenId).classList.add('active');
    // Nayi screen pe hamesha top par le aayega
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Passcode Logic (Target Code: 5210)
let enteredCode = "";
const targetCode = "5210";
const dots = document.querySelectorAll('.passcode-dot');

function updateDots() {
    dots.forEach((dot, index) => {
        if(index < enteredCode.length) {
            dot.innerText = enteredCode[index];
        } else {
            dot.innerText = "";
        }
    });
}

function pressKey(num) {
    document.getElementById('error-msg').classList.add('hidden');
    
    if(enteredCode.length < 4) {
        enteredCode += num;
        updateDots();
    }
    
    if(enteredCode.length === 4) {
        if(enteredCode === targetCode) {
            // Sahi code par Next button show karega
            document.getElementById('next-btn-1').classList.remove('hidden-element');
            document.getElementById('next-btn-1').classList.add('show-element');
        } else {
            // Galat code par Error show karega aur box khali karega
            document.getElementById('error-msg').classList.remove('hidden');
            enteredCode = "";
            setTimeout(updateDots, 600);
        }
    }
}

// Delete / Backspace button function
function clearKey() {
    enteredCode = enteredCode.slice(0, -1);
    updateDots();
    // Agar number delete kar dia to next button wapis chupa do
    document.getElementById('next-btn-1').classList.add('hidden-element');
    document.getElementById('next-btn-1').classList.remove('show-element');
}

// Screen 3: "No" Button par chalne wala fun trick
function tryAgainAlert() {
    let msg = document.getElementById('try-again-msg');
    msg.classList.remove('hidden');
    
    // "No" button idhar udhar bhagega thora sa mazaq karne ke liye
    let noBtn = document.getElementById('no-btn');
    let randomX = Math.floor(Math.random() * 120) - 60;
    let randomY = Math.floor(Math.random() * 80) - 40;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    
    setTimeout(() => { 
        msg.classList.add('hidden'); 
    }, 2000);
}
