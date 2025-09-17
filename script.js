// 你的专属秘密暗号，可以修改
const CORRECT_PASSWORD = "loveyousister";

// 检查密码函数
function checkPassword() {
    const input = document.getElementById('password-input').value;
    const errorMessage = document.getElementById('error-message');
    
    if (input === CORRECT_PASSWORD) {
        // 密码正确
        const passwordContainer = document.getElementById('password-container');
        const mainContent = document.getElementById('main-content');
        
        // 隐藏密码界面，显示主内容
        passwordContainer.style.opacity = '0';
        setTimeout(() => {
            passwordContainer.classList.add('hidden');
            mainContent.classList.remove('hidden');
            setTimeout(() => {
                mainContent.style.opacity = '1';
                mainContent.style.transform = 'scale(1)';
            }, 50);
        }, 500);

        // 播放背景音乐
        const music = document.getElementById('bg-music');
        music.play();
        
    } else {
        // 密码错误
        errorMessage.textContent = "暗号不对哦，再想想！";
        const passwordInput = document.getElementById('password-input');
        passwordInput.classList.add('error-shake');
        setTimeout(() => {
            passwordInput.classList.remove('error-shake');
        }, 500);
    }
}

// 显示礼物消息的函数
let currentMessage = null;
function showMessage(giftId) {
    const messageId = giftId + '-message';
    const messageElement = document.getElementById(messageId);

    // 如果有正在显示的消息，先隐藏它
    if (currentMessage && currentMessage !== messageElement) {
        currentMessage.classList.add('hidden');
    }

    // 切换当前点击的消息的显示状态
    if (messageElement.classList.contains('hidden')) {
        messageElement.classList.remove('hidden');
        currentMessage = messageElement;
    } else {
        messageElement.classList.add('hidden');
        currentMessage = null;
    }
}

// 播放五彩纸屑的函数
function playConfetti() {
    confetti({
        particleCount: 150,
        spread: 180,
        origin: { y: 0.6 }
    });
}

// 额外添加一个效果：让密码输入框的抖动更明显
const style = document.createElement('style');
style.innerHTML = `
.error-shake {
    animation: shake 0.5s;
}
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
}
`;
document.head.appendChild(style);
