// Xử lý đăng nhập
const loginScreen = document.getElementById('loginScreen');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const appWrapper = document.getElementById('appWrapper');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = loginForm.username.value.trim();
  const password = loginForm.password.value.trim();

  if (username === 'funkaka123' && password === '1Minhtao') {
    // Đăng nhập thành công, ẩn màn hình login, hiện app
    loginScreen.style.display = 'none';
    appWrapper.style.display = 'block';
  } else {
    loginError.textContent = 'Tài khoản hoặc mật khẩu không đúng!';
  }
});

// Hiển thị / ẩn mật khẩu khi nhấn icon con mắt
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type');
  if(type === 'password') {
    passwordInput.setAttribute('type', 'text');
    togglePassword.textContent = '🙈';
  } else {
    passwordInput.setAttribute('type', 'password');
    togglePassword.textContent = '👁️';
  }
});

// Chuyển tab
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
      t.setAttribute('tabindex', '-1');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    tab.setAttribute('tabindex', '0');

    const id = tab.getAttribute('aria-controls');
    tabContents.forEach(c => {
      c.classList.remove('active');
      if (c.id === id) c.classList.add('active');
    });
  });
});

// Hàm tạo dãy mã ẩn 10 ký tự chữ hoa và số
function generateRandomCode(length = 10) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for(let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Xử lý Tab 1 START
const checkCodeForm = document.getElementById('checkCodeForm');
const phoneInput = document.getElementById('phoneInput');
const portInput = document.getElementById('portInput');
const accountInput = document.getElementById('accountInput');
const checkCodeResult = document.getElementById('checkCodeResult');

checkCodeForm.addEventListener('submit', () => {
  const phone = phoneInput.value.trim();
  const port = portInput.value.trim();
  const account = accountInput.value.trim();

  if (!/^0\d{9}$/.test(phone)) {
    checkCodeResult.textContent = 'Số điện thoại không hợp lệ! (bắt đầu bằng 0 và đủ 10 số)';
    return;
  }
  if (port.length < 3 || /[^a-zA-Z0-9]/.test(port)) {
    checkCodeResult.textContent = 'Cổng game phải có ít nhất 3 ký tự, không dấu, chỉ chữ và số.';
    return;
  }
  if (account.length < 4 || /[^a-zA-Z0-9]/.test(account)) {
    checkCodeResult.textContent = 'Tài khoản game phải có ít nhất 4 ký tự, không dấu, gồm chữ và số.';
    return;
  }

  let countdown = 5;
  checkCodeResult.textContent = `Đang xử lý... ${countdown}s`;

  const intervalId = setInterval(() => {
    countdown--;
    if(countdown > 0) {
      checkCodeResult.textContent = `Đang xử lý... ${countdown}s`;
    } else {
      clearInterval(intervalId);
      if (port.toUpperCase() === 'UU88') {
        checkCodeResult.innerHTML = `
          <div class="blinking-code" style="font-weight:bold; font-size:1.4rem; letter-spacing: 3px;">
            TÀI KHOẢN KHÔNG CHỨA MÃ ẨN
          </div>
        `;
      } else {
        const hiddenCode = generateRandomCode();
        checkCodeResult.innerHTML = `
          <div style="display:flex; align-items:center; gap:8px; color:#ff0000; font-weight:bold; font-size:1.2rem; letter-spacing: 1.5px;">
            <span>CẢNH BÁO</span>
            <span style="font-size:1.4rem;">💀</span>
          </div>
          <div style="color:#ff0000; font-weight:bold; font-size:1.1rem; margin-top: 6px; letter-spacing: 2px;">
            TÀI KHOẢN CHỨA MÃ ẨN
          </div>
          <div class="blinking-code" style="margin-top: 12px; font-size: 1.4rem; letter-spacing: 4px;">
            ${hiddenCode}
          </div>
        `;
      }
    }
  }, 1000);
});

// Xử lý Tab 2 START
const deleteCodeForm = document.getElementById('deleteCodeForm');
const phoneInputDel = document.getElementById('phoneInputDel');
const portInputDel = document.getElementById('portInputDel');
const accountInputDel = document.getElementById('accountInputDel');
const deleteCodeResult = document.getElementById('deleteCodeResult');

deleteCodeForm.addEventListener('submit', () => {
  const phone = phoneInputDel.value.trim();
  const port = portInputDel.value.trim();
  const account = accountInputDel.value.trim();

  if (!/^0\d{9}$/.test(phone)) {
    deleteCodeResult.textContent = 'Số điện thoại không hợp lệ! (bắt đầu bằng 0 và đủ 10 số)';
    return;
  }
  if (port.length < 3 || /[^a-zA-Z0-9]/.test(port)) {
    deleteCodeResult.textContent = 'Cổng game phải có ít nhất 3 ký tự, không dấu, chỉ chữ và số.';
    return;
  }
  if (account.length < 4 || /[^a-zA-Z0-9]/.test(account)) {
    deleteCodeResult.textContent = 'Tài khoản game phải có ít nhất 4 ký tự, không dấu, gồm chữ và số.';
    return;
  }

  let countdown = 5;
  deleteCodeResult.textContent = `Đang xử lý... ${countdown}s`;

  const intervalId = setInterval(() => {
    countdown--;
    if(countdown > 0) {
      deleteCodeResult.textContent = `Đang xử lý... ${countdown}s`;
    } else {
      clearInterval(intervalId);
      if (port.toUpperCase() === 'UU88') {
        deleteCodeResult.innerHTML = `
          <strong style="color:#00ff00;">
            THÔNG BÁO,<br>
            TÀI KHOẢN KHÔNG CHỨA MÃ ẨN
          </strong>
        `;
      } else {
        deleteCodeResult.innerHTML = `
          <div style="display:flex; align-items:center; gap:8px; color:#ff0000; font-weight:bold; font-size:1.2rem; letter-spacing: 1.5px;">
            <span>CẢNH BÁO</span>
            <span style="font-size:1.4rem;">💀</span>
          </div>
          <div style="color:#ff0000; font-weight:bold; font-size:1.1rem; margin-top: 6px; letter-spacing: 2px;">
            KHÔNG THỂ XOÁ MÃ ẨN
          </div>
        `;
      }
    }
  }, 1000);
});

// Xử lý Tab 3 START
const gameForm = document.getElementById('gameForm');
const gameInput = document.getElementById('gameInput');
const resultBox = document.getElementById('resultBox');

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

gameForm.addEventListener('submit', () => {
  const gameCode = gameInput.value.trim();
  if (!gameCode) {
    resultBox.textContent = 'Vui lòng nhập cổng game!';
    return;
  }

  let countdown = 5;
  resultBox.textContent = `Đang xử lý... ${countdown}s`;

  const intervalId = setInterval(() => {
    countdown--;
    if (countdown > 0) {
      resultBox.textContent = `Đang xử lý... ${countdown}s`;
    } else {
      clearInterval(intervalId);
      if (gameCode.toUpperCase() === 'UU88') {
        const uyTin = randomIntFromInterval(95, 100);
        resultBox.innerHTML = `
          Vị trí : <strong>ABC VIP</strong><br>
          % Uy tín : <strong>${uyTin}%</strong><br>
          % Mã ẩn : <strong>0%</strong>
        `;
      } else {
        const uyTin = randomIntFromInterval(30, 50);
        const maAn = randomIntFromInterval(75, 99);
        resultBox.innerHTML = `
          Vị trí : <strong>Cambodia</strong><br>
          % Uy tín : <strong>${uyTin}%</strong><br>
          % Mã ẩn : <strong>${maAn}%</strong>
        `;
      }
    }
  }, 1000);
});

// Ma trận hiệu ứng
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const letters = 'アァイィウヴエカガキギクグケゲコゴサザシジスズセゼソゾタダチッヂヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 14;
const columns = Math.floor(width / fontSize);
const drops = new Array(columns).fill(1);

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = '#00ff00';
  ctx.font = fontSize + 'px monospace';
  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > height && Math.random() > 0.975) {
      drops[i] = 0;
    }
  }
}
setInterval(draw, 50);

window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});
