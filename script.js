// Mobile menu toggle
function toggleMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('open');
}

// Contact form handler
function handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const successMsg = document.getElementById('formSuccess');
    const inputs = form.querySelectorAll('input, textarea, select');
    let allFilled = true;
    inputs.forEach(inp => {
        if (inp.hasAttribute('required') && !inp.value.trim()) {
            allFilled = false;
            inp.style.borderColor = '#FF6B6B';
            setTimeout(() => { inp.style.borderColor = '#e8e0d5'; }, 1500);
        }
    });
    if (!allFilled) return;
    successMsg.style.display = 'block';
    successMsg.style.animation = 'fadeSlideIn 0.5s ease-out';
    form.reset();
    setTimeout(() => { successMsg.style.display = 'none'; }, 4000);
}

// Gallery popup (works on any page with gallery items)
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            const label = this.querySelector('.gallery-label')?.textContent || 'this moment';
            const emoji = this.querySelector('.gallery-emoji')?.textContent || '🌟';
            const popup = document.createElement('div');
            popup.style.cssText = `
                position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
                background: white; padding: 30px 40px; border-radius: 20px; z-index: 9999;
                box-shadow: 0 20px 50px rgba(0,0,0,0.3); text-align: center;
                font-size: 1.5rem; font-weight: 700; animation: fadeSlideIn 0.3s ease-out;
                cursor: pointer; border: 3px dashed #FFD93D;
            `;
            popup.innerHTML = `${emoji} <br> ${label} <br><small style="color:#888;">Click to close</small>`;
            popup.addEventListener('click', () => popup.remove());
            document.body.appendChild(popup);
            setTimeout(() => { if (document.body.contains(popup)) popup.remove(); }, 3000);
        });
    });
});