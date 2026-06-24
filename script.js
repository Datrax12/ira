function switchStep(oldStepId, newStepId) {
    const oldStep = document.getElementById(oldStepId);
    const newStep = document.getElementById(newStepId);

    // Fade out lama
    oldStep.classList.remove('visible');
    oldStep.classList.add('hidden');

    // Tunggu animasi selesai (0.5s) lalu munculkan baru
    setTimeout(() => {
        oldStep.style.display = 'none';
        newStep.style.display = 'block';
        // Force reflow agar animasi berjalan
        newStep.offsetHeight; 
        newStep.classList.remove('hidden');
        newStep.classList.add('visible');
    }, 500);
}

function showForm() { switchStep('step-1', 'step-2'); }

function showTicket() {
    document.getElementById('res-nama').innerText = document.getElementById('nama').value;
    document.getElementById('res-acara').innerText = document.getElementById('acara').value;
    switchStep('step-2', 'step-3');
}

// Fungsi pindah step
function nextStep(currentId, nextId) {
    document.getElementById(currentId).classList.replace('visible', 'hidden');
    setTimeout(() => {
        document.getElementById(nextId).style.display = 'block';
        document.getElementById(nextId).classList.replace('hidden', 'visible');
    }, 600);
}

// Fungsi tombol penolakan yang menghindar
function moveButton() {
    const btn = document.getElementById('btn-no');
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    
    btn.style.position = 'absolute';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}