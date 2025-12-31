const text = document.getElementById('rotatingText');
const content = text.innerText;
text.innerText = '';
for (let i = 0; i < content.length; i++) {
    const span = document.createElement('span');
    span.innerText = content[i];
    span.style.position = 'absolute';
    span.style.left = '50%';
    span.style.transformOrigin = '0 135px';
    span.style.transform = `rotate(${i * (360 / content.length)}deg)`;
    text.appendChild(span);
}

let isEnglish = true;
function toggleLanguage() {
    const msg = document.getElementById('loveMessage');
    if (isEnglish) {
        msg.innerText = "بحبك كثير كثير وبموت فيكي، وبعرف اني كثير مقصر بس بحبك وبدي اضل احبك للابد واقضي كل سنيني وايامي وحياتي معك.. بحب عيونك وبحب دلعك وبحب نجاحاتك وبحب كلشي فيكي، كلشي فيكي بجنن بطريقة مميزة وحلوة كثير.";
        msg.style.direction = "rtl";
    } else {
        msg.innerText = "I love you so, so much, and I’m crazy about you. I know I’ve been falling short lately, but I love you and I want to keep loving you forever, spending all my years, days, and my entire life with you. I love your eyes, your coziness, your success, and everything about you. Everything in you is stunning in a very special and beautiful way.";
        msg.style.direction = "ltr";
    }
    isEnglish = !isEnglish;
}

function celebrate() {
    createFirework();
}

function createFirework() {
    const container = document.getElementById('fireworks-container');
    for (let i = 0; i < 30; i++) {
        const f = document.createElement('div');
        f.innerText = "💖";
        f.style.position = 'absolute';
        f.style.left = Math.random() * 100 + 'vw';
        f.style.top = Math.random() * 100 + 'vh';
        f.style.animation = 'fadeOut 3s forwards';
        container.appendChild(f);
        setTimeout(() => f.remove(), 3000);
    }
}
