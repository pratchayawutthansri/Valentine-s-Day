/**
 * Valentine's Day Card — Interactive Card Deck Game
 * เลือกเปิดการ์ดความรักจากสำรับ 12 แบบ 💕
 */

// =====================================================
// ข้อมูลการ์ดทั้ง 12 แบบ (คงเดิมทุกประการ)
// =====================================================
const cardCollection = [
    {
        envelopeEmoji: '💌',
        envelopeLabel: 'For You',
        corners: ['🌸', '🌷', '🌷', '🌸'],
        emojiTop: '🌹',
        title: 'Happy Valentine\'s Day',
        divider: '💗',
        message: 'สุขสันต์วันวาเลนไทน์นะ 🥰<br>' +
            'ขอให้วันนี้เป็นวันที่<strong>เต็มไปด้วยรัก</strong><br>' +
            'ไม่ว่าจะอยู่ที่ไหน ขอให้มีความสุข<br>' +
            'และรู้ไว้ว่า... <strong>คุณเป็นคนพิเศษเสมอ</strong> 💕',
        signature: 'With Love ❤️',
        emojiBottom: ['🌸', '💖', '🌸'],
        bgColor: '',
        accentColor: ''
    },
    {
        envelopeEmoji: '🧸',
        envelopeLabel: 'Hug Me',
        corners: ['🎀', '💝', '💝', '🎀'],
        emojiTop: '🤗',
        title: 'Sending Hugs!',
        divider: '🧸',
        message: 'ส่งกอดอุ่นๆ ให้นะ 🤗<br>' +
            'ถึงจะ<strong>ไม่ได้อยู่ใกล้กัน</strong><br>' +
            'แต่หัวใจอยู่ข้างเธอเสมอนะ<br>' +
            '<strong>กอดแน่นๆ จากใจ</strong> 💕',
        signature: 'Hugs & Kisses 💋',
        emojiBottom: ['🎀', '🧸', '🎀'],
        bgColor: 'linear-gradient(145deg, #fff8e1 0%, #ffe0b2 100%)',
        accentColor: '#ff8f00'
    },
    {
        envelopeEmoji: '🍫',
        envelopeLabel: 'Sweet Love',
        corners: ['🍬', '🍭', '🍭', '🍬'],
        emojiTop: '🍫',
        title: 'You\'re So Sweet!',
        divider: '🍩',
        message: 'เธอหวานกว่าช็อกโกแลตอีก 🍫<br>' +
            'มีเธออยู่ข้างๆ <strong>ชีวิตก็หวานขึ้น</strong><br>' +
            'ขอบคุณที่ทำให้ทุกวัน<br>' +
            '<strong>อร่อยเหมือนขนมหวาน</strong> 🧁',
        signature: 'Your Sweetie 🍬',
        emojiBottom: ['🍰', '🍫', '🍰'],
        bgColor: 'linear-gradient(145deg, #efebe9 0%, #d7ccc8 100%)',
        accentColor: '#6d4c41'
    },
    {
        envelopeEmoji: '🌙',
        envelopeLabel: 'My Star',
        corners: ['⭐', '🌟', '🌟', '⭐'],
        emojiTop: '🌙',
        title: 'You Light Up My World',
        divider: '✨',
        message: 'เธอเป็นดวงดาวที่สว่างที่สุด 🌟<br>' +
            'ในคืนที่<strong>มืดมิดที่สุด</strong><br>' +
            'เธอทำให้โลกของฉัน<br>' +
            '<strong>สว่างไสวเสมอ</strong> ✨',
        signature: 'Your Moonlight 🌙',
        emojiBottom: ['⭐', '🌙', '⭐'],
        bgColor: 'linear-gradient(145deg, #e8eaf6 0%, #c5cae9 100%)',
        accentColor: '#3f51b5'
    },
    {
        envelopeEmoji: '🌻',
        envelopeLabel: 'Sunshine',
        corners: ['☀️', '🌼', '🌼', '☀️'],
        emojiTop: '🌻',
        title: 'You Are My Sunshine',
        divider: '☀️',
        message: 'เธอเป็นแสงแดดของฉัน 🌞<br>' +
            'ทำให้<strong>ทุกวันสดใส</strong><br>' +
            'ยิ้มของเธอทำให้ฉัน<br>' +
            '<strong>อบอุ่นหัวใจทุกครั้ง</strong> 🌈',
        signature: 'Your Sunshine ☀️',
        emojiBottom: ['🌼', '🌻', '🌼'],
        bgColor: 'linear-gradient(145deg, #fffde7 0%, #fff9c4 100%)',
        accentColor: '#f9a825'
    },
    {
        envelopeEmoji: '☕',
        envelopeLabel: 'My Cup',
        corners: ['🫖', '🧁', '🧁', '🫖'],
        emojiTop: '☕',
        title: 'You Warm My Heart',
        divider: '🫖',
        message: 'เธอเหมือนกาแฟยามเช้า ☕<br>' +
            'ที่<strong>ปลุกหัวใจให้ตื่น</strong>ทุกวัน<br>' +
            'ขอให้เราอบอุ่นด้วยกัน<br>' +
            '<strong>ไปนานๆ นะ</strong> 🥰',
        signature: 'With Warmth ☕',
        emojiBottom: ['🧁', '☕', '🧁'],
        bgColor: 'linear-gradient(145deg, #fbe9e7 0%, #ffccbc 100%)',
        accentColor: '#bf360c'
    },
    {
        envelopeEmoji: '🦋',
        envelopeLabel: 'Dream',
        corners: ['🌺', '🦋', '🦋', '🌺'],
        emojiTop: '🦋',
        title: 'You Give Me Butterflies',
        divider: '🌺',
        message: 'ทุกครั้งที่เจอเธอ 🦋<br>' +
            'ผีเสื้อในท้อง<strong>ก็บินว่อนไปหมด</strong><br>' +
            'หัวใจเต้นแรง ใจสั่น<br>' +
            '<strong>because of you ทำให้ตื่นเต้น</strong> 💓',
        signature: 'Yours Flutter 🦋',
        emojiBottom: ['🌺', '🦋', '🌺'],
        bgColor: 'linear-gradient(145deg, #f3e5f5 0%, #e1bee7 100%)',
        accentColor: '#9c27b0'
    },
    {
        envelopeEmoji: '🐰',
        envelopeLabel: 'Bunny',
        corners: ['🥕', '🐾', '🐾', '🥕'],
        emojiTop: '🐰',
        title: 'Some Bunny Loves You!',
        divider: '🐾',
        message: 'รู้มั้ย… มีกระต่ายตัวหนึ่ง 🐰<br>' +
            'ที่<strong>รักเธอมากๆ</strong> เลย<br>' +
            'อยากกระโดดไปกอดเธอ<br>' +
            '<strong>แบบไม่ยอมปล่อย</strong> 🥰',
        signature: 'Your Bunny 🐰',
        emojiBottom: ['🥕', '🐰', '🥕'],
        bgColor: 'linear-gradient(145deg, #fce4ec 0%, #f8bbd0 100%)',
        accentColor: '#ec407a'
    },
    {
        envelopeEmoji: '❤️',
        envelopeLabel: 'Love',
        corners: ['♥', '♥', '♥', '♥'],
        emojiTop: '❤️',
        title: 'I Love You',
        divider: '❤️',
        message: 'ไม่ต้องมีคำพูดมากมาย 💭<br>' +
            'แค่อยากบอกว่า...<br>' +
            '<strong>รักเธอนะ</strong><br>' +
            'วันนี้ พรุ่งนี้ <strong>และตลอดไป</strong> ❤️',
        signature: 'Always & Forever ♾️',
        emojiBottom: ['❤️', '❤️', '❤️'],
        bgColor: 'linear-gradient(145deg, #ffffff 0%, #ffebee 100%)',
        accentColor: '#c62828'
    },
    {
        envelopeEmoji: '🌈',
        envelopeLabel: 'Rainbow',
        corners: ['🎨', '🎈', '🎈', '🎨'],
        emojiTop: '🌈',
        title: 'You Color My World',
        divider: '🎨',
        message: 'เธอทำให้โลกฉันมีสีสัน 🎨<br>' +
            'เหมือน<strong>สายรุ้งหลังฝน</strong><br>' +
            'ทุกสีสวยงาม ทุกวันสดใส<br>' +
            '<strong>เพราะมีเธออยู่ข้างกัน</strong> 🌈',
        signature: 'Colorfully Yours 🎨',
        emojiBottom: ['🎈', '🌈', '🎈'],
        bgColor: 'linear-gradient(145deg, #e8f5e9 0%, #c8e6c9 100%)',
        accentColor: '#2e7d32'
    },
    {
        envelopeEmoji: '👑',
        envelopeLabel: 'My Queen',
        corners: ['💎', '👑', '👑', '💎'],
        emojiTop: '👑',
        title: 'You\'re My Everything',
        divider: '💎',
        message: 'ในสายตาฉัน 👑<br>' +
            'เธอเป็น<strong>ราชินีของหัวใจ</strong><br>' +
            'สวยงาม เปล่งประกาย<br>' +
            '<strong>ล้ำค่ากว่าเพชรใดๆ</strong> 💎',
        signature: 'Your King 👑',
        emojiBottom: ['💎', '👑', '💎'],
        bgColor: 'linear-gradient(145deg, #fff8e1 0%, #ffecb3 100%)',
        accentColor: '#ff8f00'
    },
    {
        envelopeEmoji: '😜',
        envelopeLabel: 'Hey You!',
        corners: ['🎉', '🎊', '🎊', '🎉'],
        emojiTop: '😘',
        title: 'Guess What?',
        divider: '💘',
        message: 'รู้มั้ย… ฉันจะบอกอะไร 🤫<br>' +
            'มาใกล้ๆ หน่อยสิ...<br>' +
            'ใกล้อีก...<br>' +
            '<strong>จุ๊บบบ!</strong> 😘💕',
        signature: 'Mwah! 💋',
        emojiBottom: ['🎉', '😘', '🎉'],
        bgColor: 'linear-gradient(145deg, #fce4ec 0%, #f8bbd0 100%)',
        accentColor: '#d81b60'
    },
    {
        // การ์ดที่ 13: แมวเหมียวขี้อ้อน
        envelopeEmoji: '🐱',
        envelopeLabel: 'My Kitty',
        corners: ['🐾', '🐱', '🐱', '🐾'],
        emojiTop: '🐱',
        title: 'Purr-fect Together!',
        divider: '🐾',
        message: 'เธอเหมือนลูกแมวขี้อ้อน 🐱<br>' +
            'ชอบมาคลอเคลียให้ใจสั่น<br>' +
            'อยู่ด้วยกันแล้ว<strong>มีความสุขที่สุด</strong><br>' +
            'ขออ้อนเธอแบบนี้<strong>ไปนานๆ นะ</strong> 💕',
        signature: 'Your Kitty 🐾',
        emojiBottom: ['🐾', '🐱', '🐾'],
        bgColor: 'linear-gradient(145deg, #fff3e0 0%, #ffe0b2 100%)',
        accentColor: '#e65100'
    },
    {
        // การ์ดที่ 14: คำอธิษฐานดวงดาว
        envelopeEmoji: '🌠',
        envelopeLabel: 'Make a Wish',
        corners: ['✨', '🌠', '🌠', '✨'],
        emojiTop: '🌠',
        title: 'My Wish Come True',
        divider: '✨',
        message: 'เมื่อก่อนเวลาเห็นดาวตก 🌠<br>' +
            'ฉันจะชอบ<strong>อธิษฐานขอพร</strong><br>' +
            'แต่ตอนนี้ไม่ต้องขออะไรแล้ว<br>' +
            'เพราะ<strong>ฉันมีเธออยู่ข้างๆ แล้ว</strong> 🥰',
        signature: 'Your Dreamer 🌠',
        emojiBottom: ['✨', '🌠', '✨'],
        bgColor: 'linear-gradient(145deg, #f3e5f5 0%, #e1bee7 100%)',
        accentColor: '#7b1fa2'
    },
    {
        // การ์ดที่ 15: เสียงเพลงแทนใจ
        envelopeEmoji: '🎵',
        envelopeLabel: 'My Melody',
        corners: ['🎶', '🎵', '🎵', '🎶'],
        emojiTop: '🎧',
        title: 'My Favorite Song',
        divider: '🎵',
        message: 'เหมือนมีเสียงเพลงในหัวใจ 🎶<br>' +
            'ทุกครั้งที่<strong>คิดถึงใบหน้าเธอ</strong><br>' +
            'เธอคือทำนองเพลงโปรดที่ฉัน<br>' +
            '<strong>อยากฟังซ้ำๆ ทุกวันไม่มีเบื่อ</strong> 🎧',
        signature: 'Your Melody 🎶',
        emojiBottom: ['🎶', '🎵', '🎶'],
        bgColor: 'linear-gradient(145deg, #e0f2f1 0%, #b2dfdb 100%)',
        accentColor: '#004d40'
    },
    {
        // การ์ดที่ 16: น้ำผึ้งแสนหวาน
        envelopeEmoji: '🍯',
        envelopeLabel: 'Honey Bee',
        corners: ['🐝', '🌻', '🌻', '🐝'],
        emojiTop: '🐝',
        title: 'Bee Mine!',
        divider: '🍯',
        message: 'เธอหวานเหมือนน้ำผึ้ง 🍯<br>' +
            'ทำตัวติดกันเหมือน<strong>ผึ้งตอมดอกไม้</strong><br>' +
            'ขอบคุณที่เข้ามาเติมความหวาน<br>' +
            'ให้โลกใบนี้<strong>น่าอยู่ขึ้นเยอะเลย</strong> 🐝',
        signature: 'Your Honey 🍯',
        emojiBottom: ['🐝', '🍯', '🐝'],
        bgColor: 'linear-gradient(145deg, #fffde7 0%, #fff9c4 100%)',
        accentColor: '#f57f17'
    },
    {
        // การ์ดที่ 17: หมาน้อยแสนซน
        envelopeEmoji: '🐶',
        envelopeLabel: 'Puppy Love',
        corners: ['🐾', '🐶', '🐶', '🐾'],
        emojiTop: '🐶',
        title: 'Crazy About You!',
        divider: '🐾',
        message: 'เธอรู้มั้ย... ฉันเหมือนลูกหมาตัวนึง 🐶<br>' +
            'ที่เห็นเธอทีไร<strong>ก็หางกระดิกดึ๋งๆ</strong><br>' +
            'ดีใจทุกครั้งที่ได้เจอหน้าเธอ<br>' +
            '<strong>รักและซื่อสัตย์กับเธอที่สุดนะ</strong> 🥰',
        signature: 'Your Puppy 🐾',
        emojiBottom: ['🐾', '🐶', '🐾'],
        bgColor: 'linear-gradient(145deg, #efebe9 0%, #d7ccc8 100%)',
        accentColor: '#5d4037'
    },
    {
        // การ์ดที่ 18: ผ้าห่มอุ่นๆ ยามหนาว
        envelopeEmoji: '☁️',
        envelopeLabel: 'Cozy Warmth',
        corners: ['❄️', '☁️', '☁️', '❄️'],
        emojiTop: '🛌',
        title: 'My Cozy Escape',
        divider: '☁️',
        message: 'เธอเหมือนผ้าห่มอุ่นๆ ☁️<br>' +
            'ในค่ำคืนที่<strong>หนาวเย็นและเหนื่อยล้า</strong><br>' +
            'ขอแค่ได้ซุกกอดอุ่นๆ จากเธอ<br>' +
            '<strong>ก็หายเหนื่อยเป็นปลิดทิ้งแล้ว</strong> 🧸',
        signature: 'Your Blanket ☁️',
        emojiBottom: ['❄️', '☁️', '❄️'],
        bgColor: 'linear-gradient(145deg, #e1f5fe 0%, #b3e5fc 100%)',
        accentColor: '#0288d1'
    },
    {
        // การ์ดที่ 19: เชอร์รี่คู่รัก
        envelopeEmoji: '🍒',
        envelopeLabel: 'Cherry Pair',
        corners: ['🌱', '🍒', '🍒', '🌱'],
        emojiTop: '🍒',
        title: 'We\'re a Perfect Pair!',
        divider: '🍒',
        message: 'เราเกิดมาคู่กันเหมือนเชอร์รี่ 🍒<br>' +
            'ที่ต้องอยู่เป็นกิ่งคู่<strong>ไม่เคยห่างกัน</strong><br>' +
            'ขาดเธอไปฉันก็เหงาแย่เลย<br>' +
            '<strong>มาตัวติดกันแบบนี้ตลอดไปนะ</strong> 💕',
        signature: 'Your Cherry 🍒',
        emojiBottom: ['🌱', '🍒', '🌱'],
        bgColor: 'linear-gradient(145deg, #ffebee 0%, #ffcdd2 100%)',
        accentColor: '#d32f2f'
    },
    {
        // การ์ดที่ 20: คุกกี้เสี่ยงทายโชคดี
        envelopeEmoji: '🥠',
        envelopeLabel: 'Lucky Charm',
        corners: ['🍀', '🥠', '🥠', '🍀'],
        emojiTop: '🍀',
        title: 'Lucky To Have You!',
        divider: '🥠',
        message: 'ฉันต้องทำบุญด้วยอะไรมานะ 🍀<br>' +
            'ถึงได้มีแฟน<strong>น่ารักและแสนดีขนาดนี้</strong><br>' +
            'เธอคือความโชคดีที่สุดในชีวิต<br>' +
            '<strong>ขอบคุณที่เข้ามาในโลกของฉันนะ</strong> 🥰',
        signature: 'Your Lucky Charm 🍀',
        emojiBottom: ['🍀', '🥠', '🍀'],
        bgColor: 'linear-gradient(145deg, #fff9c4 0%, #fff59d 100%)',
        accentColor: '#fbc02d'
    }
];

// หมวดหมู่การ์ดรักสำหรับจัดกลุ่มแท็บ
const categoryMap = {
    1: 'romantic', 2: 'cute', 3: 'cute', 4: 'romantic', 5: 'romantic',
    6: 'cute', 7: 'romantic', 8: 'cute', 9: 'romantic', 10: 'romantic',
    11: 'romantic', 12: 'cute', 13: 'cute', 14: 'fortune', 15: 'romantic',
    16: 'cute', 17: 'cute', 18: 'cute', 19: 'romantic', 20: 'fortune'
};

// กำหนด ID ถาวรและหมวดหมู่ให้กับการ์ดแต่ละใบสำหรับการทำงาน
cardCollection.forEach((card, index) => {
    card.originalId = index + 1;
    card.category = categoryMap[index + 1] || 'romantic';
});

// สำเนาของกองการ์ดสำหรับสลับลำดับ
let activeDeck = [...cardCollection];

// =====================================================
// DOM Elements
// =====================================================
const cardGrid = document.getElementById('cardGrid');
const cardModal = document.getElementById('cardModal');
const btnCloseModal = document.getElementById('btnCloseModal');
const btnShuffle = document.getElementById('btnShuffle');
const bgHearts = document.getElementById('bgHearts');
const sparkleBox = document.getElementById('sparkleContainer');

// Modal Elements
const modalCard = document.getElementById('modalCard');
const modalWaxSeal = document.getElementById('modalWaxSeal');
const modalCardBack = document.getElementById('modalCardBack');
const btnShareCard = document.getElementById('btnShareCard');

// Modal Contents
const elModalEnvelopeLabel = document.getElementById('modalEnvelopeLabel');
const elModalCardEmojiTop = document.getElementById('modalCardEmojiTop');
const elModalCardTitle = document.getElementById('modalCardTitle');
const elModalCardDivider = document.getElementById('modalCardDivider');
const elModalCardMessage = document.getElementById('modalCardMessage');
const elModalCardSignature = document.getElementById('modalCardSignature');
const elModalCardEmojiBtm = document.getElementById('modalCardEmojiBottom');

// Customizer Elements
const btnCreateCustom = document.getElementById('btnCreateCustom');
const customizerModal = document.getElementById('customizerModal');
const btnCloseCustomizer = document.getElementById('btnCloseCustomizer');
const customCardForm = document.getElementById('customCardForm');
const inputEmoji = document.getElementById('inputEmoji');
const inputLabel = document.getElementById('inputLabel');
const inputTitle = document.getElementById('inputTitle');
const inputMessage = document.getElementById('inputMessage');
const inputSignature = document.getElementById('inputSignature');

// Music Player Elements
const btnMusicToggle = document.getElementById('btnMusicToggle');
const bgmAudio = document.getElementById('bgmAudio');

// State Variables
let isFlipped = false;       // สถานะการพลิกการ์ดใน Modal
let isAnimating = false;    // ล็อคเพื่อป้องกันคลิกซ้อน (Debounce)
let activeCardId = null;    // เก็บ ID ของการ์ดที่กำลังเปิดอยู่เพื่อทำลิงก์แชร์
let activeCustomCardB64 = null; // เก็บข้อมูลการ์ดกำหนดเองสำหรับการแชร์ต่อ
let activeCategory = 'all'; // เก็บแท็บหมวดหมู่ปัจจุบันที่คัดเลือกอยู่
let isMusicPlaying = false; // สถานะเครื่องเล่นเพลงประกอบ

// =====================================================
// ฟังก์ชันสลับลำดับการ์ด (Fisher-Yates Shuffle)
// =====================================================
function shuffleDeckData() {
    for (let i = activeDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [activeDeck[i], activeDeck[j]] = [activeDeck[j], activeDeck[i]];
    }
}

// =====================================================
// การแสดงผลสำรับการ์ดบนตาราง (Grid)
// =====================================================
const paperStyles = ['paper-kraft', 'paper-grid', 'paper-lined', 'paper-white'];
const fasteners = ['fastener-tape', 'fastener-pin', 'fastener-clip'];

function renderCardGrid() {
    // กรองการ์ดตามหมวดหมู่ที่เลือก
    const filteredDeck = activeDeck.filter(card => activeCategory === 'all' || card.category === activeCategory);
    
    // ดึงโครงสร้างซองจดหมายการ์ดเปล่าทั้ง 20 ใบจาก HTML
    const cards = cardGrid.querySelectorAll('.grid-card');
    
    // ซ่อนโครงสร้างการ์ดส่วนเกินที่ไม่ได้ระบุข้อมูลในฟิลเตอร์ปัจจุบัน
    cards.forEach(c => {
        c.style.display = 'none';
        c.onclick = null;
        c.onkeydown = null;
    });

    filteredDeck.forEach((card, index) => {
        const cardElement = cards[index];
        if (!cardElement) return;
        
        cardElement.style.display = 'flex';

        // ตั้งค่ารูปแบบกระดาษและตัวยึดให้ยึดโยงถาวรกับ originalId (เพื่อไม่ให้ลวดลายสลับมั่วเวลาเปลี่ยนแท็บ)
        const styleIndex = card.originalId ? card.originalId : index;
        const paperClass = card.paperStyle ? card.paperStyle : paperStyles[styleIndex % paperStyles.length];
        const fastenerClass = card.fastenerStyle ? card.fastenerStyle : fasteners[styleIndex % fasteners.length];
        
        cardElement.className = `grid-card ${paperClass}`;
        cardElement.setAttribute('role', 'button');
        cardElement.setAttribute('tabindex', '0');
        cardElement.setAttribute('aria-label', `เปิดซองจดหมายธีม ${card.envelopeLabel}`);
        cardElement.dataset.index = index;

        cardElement.innerHTML = `
            <div class="${fastenerClass} fastener" aria-hidden="true"></div>
            <div class="grid-card-emoji" aria-hidden="true">${card.envelopeEmoji}</div>
            <div class="grid-card-label">${card.envelopeLabel}</div>
            <div class="grid-card-hint">และส่งต่อเลย &gt;</div>
        `;

        // ตั้งค่า Event Handlers (ใช้ onclick เพื่อเคลียร์ข้อมูลเดิมทุกครั้ง)
        cardElement.onclick = () => openModalByCard(card);
        cardElement.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModalByCard(card);
            }
        };
    });
}

// =====================================================
// โหมด Modal: เปิด/ปิดการ์ดความรัก
// =====================================================
function openModalByCard(card) {
    if (isAnimating) return;
    isAnimating = true;

    // บันทึก ID หรือ Base64 สำหรับจัดแชร์ส่งต่อตามประเภทการ์ด
    if (card.isCustom) {
        activeCardId = null;
        activeCustomCardB64 = encodeCardData(card);
    } else {
        activeCardId = card.originalId;
        activeCustomCardB64 = null;
    }

    // 1. อัปเดตข้อมูลการ์ดลงในฟอร์ม Modal
    elModalEnvelopeLabel.textContent = card.envelopeLabel;
    elModalCardEmojiTop.textContent = card.emojiTop;
    elModalCardTitle.textContent = card.title;
    elModalCardDivider.textContent = card.divider;
    elModalCardMessage.innerHTML = card.message;
    elModalCardSignature.textContent = card.signature;
    elModalCardEmojiBtm.innerHTML = card.emojiBottom
        .map(e => `<span aria-hidden="true">${e}</span>`)
        .join('');

    // รีเซ็ตข้อความปุ่มแชร์ส่งต่อเป็นค่าตั้งต้น
    const shareTextEl = btnShareCard.querySelector('.share-btn-text');
    if (shareTextEl) {
        shareTextEl.textContent = 'คัดลอกลิงก์เพื่อส่งต่อการ์ดนี้ 🔗';
    }

    // ตั้งค่าลวดลายกระดาษด้านในให้ตรงกับการ์ดที่กดเลือก
    const styleIndex = card.originalId ? card.originalId : 99;
    const paperClass = card.paperStyle ? card.paperStyle : paperStyles[styleIndex % paperStyles.length];
    
    modalCardBack.className = 'modal-card-back';
    modalCardBack.classList.add(paperClass);

    // ปรับแต่งสีหัวข้อตามการ์ด
    if (card.accentColor) {
        elModalCardTitle.style.color = card.accentColor;
        elModalEnvelopeLabel.style.color = card.accentColor;
    } else {
        elModalCardTitle.style.color = 'var(--text-cocoa)';
        elModalEnvelopeLabel.style.color = 'var(--text-cocoa)';
    }

    // 2. เคลียร์สถานะการพลิกเดิม
    isFlipped = false;
    modalCard.classList.remove('flipped');
    modalWaxSeal.classList.remove('cracked');

    // 3. แสดง Modal ขึ้นมาแบบซูม
    cardModal.classList.add('active');
    cardModal.setAttribute('aria-hidden', 'false');
    cardModal.focus();

    setTimeout(() => {
        isAnimating = false;
    }, 500);
}

function flipCardReveal() {
    if (isAnimating || isFlipped) return;
    isAnimating = true;
    isFlipped = true;

    // 1. สติกเกอร์กระโดดแตกตัวเลือนหาย
    modalWaxSeal.classList.add('cracked');

    // 2. พลิกหมุนตัวการ์ดใน Z space 3D (Y-axis)
    setTimeout(() => {
        modalCard.classList.add('flipped');

        // 3. ทริกเกอร์เอฟเฟกต์เฉลิมฉลองเมื่อหมุนมาเห็นข้อความด้านหลัง
        setTimeout(() => {
            createSparkles();
            createConfettiHearts();
            isAnimating = false;
        }, 300);
    }, 250);
}

function closeModal() {
    if (isAnimating) return;
    isAnimating = true;

    cardModal.classList.remove('active');
    cardModal.setAttribute('aria-hidden', 'true');

    setTimeout(() => {
        // รีเซ็ตการหมุนการ์ดหลังหน้าต่างปิดตัวลงแล้ว
        modalCard.classList.remove('flipped');
        modalWaxSeal.classList.remove('cracked');
        isFlipped = false;
        isAnimating = false;
    }, 500);
}

// =====================================================
// การสับและแจกไพ่ใหม่ (Shuffle Animation)
// =====================================================
function shuffleDeck() {
    if (isAnimating) return;
    isAnimating = true;

    // ล้างและสับตำแหน่งข้อมูลการ์ด
    shuffleDeckData();

    // เพิ่มเอฟเฟกต์อนิเมชันสับไพ่
    cardGrid.classList.add('shuffling');

    setTimeout(() => {
        renderCardGrid();
        setTimeout(() => {
            cardGrid.classList.remove('shuffling');
            isAnimating = false;
        }, 500);
    }, 300);
}

// =====================================================
// เอฟเฟกต์: ฟองสบู่สะท้อนแสงและหัวใจพาสเทลลอยพื้นหลัง
// =====================================================
function createAmbientParticles() {
    for (let i = 0; i < 4; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'floating-bubble';
        bubble.setAttribute('aria-hidden', 'true');
        const size = Math.random() * 20 + 12;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.animationDuration = (Math.random() * 12 + 10) + 's';
        bubble.style.animationDelay = (Math.random() * 8) + 's';
        bgHearts.appendChild(bubble);
    }

    for (let i = 0; i < 4; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.setAttribute('aria-hidden', 'true');
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 10 + 8) + 's';
        heart.style.animationDelay = (Math.random() * 8) + 's';
        bgHearts.appendChild(heart);
    }
}

// =====================================================
// เอฟเฟกต์: ประกายดาวสีพาสเทลพุ่งกระจาย (Sparkle Burst)
// =====================================================
function createSparkles() {
    const count = 12;
    const rect = modalCard.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2 + window.scrollX;
    const centerY = rect.top + rect.height / 2 + window.scrollY;

    for (let i = 0; i < count; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.setAttribute('aria-hidden', 'true');

        sparkle.style.left = centerX + 'px';
        sparkle.style.top = centerY + 'px';

        const angle = (Math.PI * 2 / count) * i;
        const dist = Math.random() * 140 + 80;
        const tx = Math.cos(angle) * dist;
        const ty = Math.sin(angle) * dist;

        sparkle.style.setProperty('--tx', `${tx}px`);
        sparkle.style.setProperty('--ty', `${ty}px`);

        sparkleBox.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 1400);
    }
}

// =====================================================
// เอฟเฟกต์: ฟองสบู่และหัวใจลอยพุ่งขึ้นมาจากขอบการ์ดเมื่อเปิดเผย (GPU-Accelerated)
// =====================================================
function createConfettiHearts() {
    const count = 8;
    const rect = modalCard.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2 + window.scrollX;
    const centerY = rect.top + rect.height / 2 + window.scrollY;

    for (let i = 0; i < count; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'floating-bubble';
        bubble.setAttribute('aria-hidden', 'true');
        
        const size = Math.random() * 16 + 10;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        bubble.style.left = (centerX + (Math.random() * 140 - 70)) + 'px';
        bubble.style.top = (centerY + (Math.random() * 160 - 80)) + 'px';
        
        bubble.style.animation = 'bubbleReveal 1.8s ease-out forwards';
        document.body.appendChild(bubble);

        setTimeout(() => bubble.remove(), 1800);
    }

    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.setAttribute('aria-hidden', 'true');
        
        heart.style.left = (centerX + (Math.random() * 140 - 70)) + 'px';
        heart.style.top = (centerY + (Math.random() * 160 - 80)) + 'px';
        
        heart.style.animation = 'heartReveal 1.8s ease-out forwards';
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 1800);
    }
}

// =====================================================
// แทรกแอนิเมชัน GPU-Accelerated (translate3d) ใน JS
// =====================================================
const revealStyles = document.createElement('style');
revealStyles.innerHTML = `
    @keyframes bubbleReveal {
        0% { opacity: 0; transform: translate3d(0, 40px, 0) scale(0.5); }
        25% { opacity: 0.85; }
        100% { opacity: 0; transform: translate3d(15px, -140px, 0) scale(1.2); }
    }
    @keyframes heartReveal {
        0% { opacity: 0; transform: translate3d(0, 40px, 0) scale(0.5) rotate(-45deg); }
        25% { opacity: 0.85; }
        100% { opacity: 0; transform: translate3d(-15px, -140px, 0) scale(1.1) rotate(45deg); }
    }
`;
document.head.appendChild(revealStyles);

// =====================================================
// ฟังก์ชันเข้ารหัส/ถอดรหัสข้อความสำหรับลิงก์แชร์การ์ดคัสตอม (Base64 UTF-8)
// =====================================================
function encodeCardData(card) {
    try {
        const jsonStr = JSON.stringify(card);
        // ใช้ encodeURIComponent + unescape เพื่อไม่ให้ภาษาไทยใน Base64 เสียหาย
        return btoa(unescape(encodeURIComponent(jsonStr)));
    } catch (e) {
        console.error("Failed to encode card: ", e);
        return null;
    }
}

function decodeCardData(base64Str) {
    try {
        const jsonStr = decodeURIComponent(escape(atob(base64Str)));
        return JSON.parse(jsonStr);
    } catch (e) {
        console.error("Failed to decode card: ", e);
        return null;
    }
}

// =====================================================
// ฟังก์ชันคัดลอกลิงก์แชร์การ์ดความรัก (Share Link)
// =====================================================
function handleShareClick() {
    let shareUrl = '';
    
    if (activeCustomCardB64) {
        shareUrl = `${window.location.origin}${window.location.pathname}?custom=${activeCustomCardB64}`;
    } else if (activeCardId) {
        shareUrl = `${window.location.origin}${window.location.pathname}?card=${activeCardId}`;
    } else {
        return;
    }
    
    navigator.clipboard.writeText(shareUrl).then(() => {
        const shareTextEl = btnShareCard.querySelector('.share-btn-text');
        if (shareTextEl) {
            shareTextEl.textContent = 'คัดลอกสำเร็จ! 💕';
        }
    }).catch(err => {
        console.error('Failed to copy share link: ', err);
        alert(`คัดลอกลิงก์นี้เพื่อส่งให้เพื่อนได้เลยค่ะ:
${shareUrl}`);
    });
}

// ตรวจสอบพารามิเตอร์แชร์การ์ดใน URL เมื่อหน้าเว็บโหลดเสร็จ
function checkSharedCard() {
    const urlParams = new URLSearchParams(window.location.search);
    const cardParam = urlParams.get('card');
    const customParam = urlParams.get('custom');
    
    // 1. กรณีเปิดด้วยการ์ดกำหนดเอง (Custom Card Link)
    if (customParam) {
        const decodedCard = decodeCardData(customParam);
        if (decodedCard) {
            // มาร์กให้เป็นการ์ดพิเศษ
            decodedCard.originalId = 99; 
            
            // นำการ์ดพิเศษมาต่อหน้าแถวสุดของสำรับบอร์ด
            activeDeck.unshift(decodedCard);
            renderCardGrid();
            
            setTimeout(() => {
                openModalByCard(decodedCard);
            }, 600);
        }
    } 
    // 2. กรณีเปิดด้วยการ์ดมาตรฐาน (Standard Card Link)
    else if (cardParam) {
        const targetId = parseInt(cardParam, 10);
        const deckIndex = activeDeck.findIndex(c => c.originalId === targetId);
        if (deckIndex !== -1) {
            setTimeout(() => {
                openModalByCard(activeDeck[deckIndex]);
            }, 600);
        }
    }
}

// =====================================================
// ฟังก์ชันเครื่องเล่นเพลง (Music Player Controllers)
// =====================================================
function toggleMusic() {
    if (isMusicPlaying) {
        bgmAudio.pause();
        btnMusicToggle.classList.remove('playing');
        btnMusicToggle.setAttribute('aria-pressed', 'false');
        isMusicPlaying = false;
    } else {
        bgmAudio.play().then(() => {
            btnMusicToggle.classList.add('playing');
            btnMusicToggle.setAttribute('aria-pressed', 'true');
            isMusicPlaying = true;
        }).catch(err => {
            console.error("Audio play blocked by browser: ", err);
        });
    }
}

// =====================================================
// หน้าต่างเขียนการ์ดกำหนดเอง (Customizer Modal Controllers)
// =====================================================
function openCustomizer() {
    if (isAnimating) return;
    customizerModal.classList.add('active');
    customizerModal.setAttribute('aria-hidden', 'false');
    customizerModal.focus();
}

function closeCustomizer() {
    customizerModal.classList.remove('active');
    customizerModal.setAttribute('aria-hidden', 'true');
}

// =====================================================
// Event Listeners
// =====================================================

// กดสติกเกอร์รูปหัวใจเพื่อพลิกเปิดข้อความ
modalWaxSeal.addEventListener('click', (e) => {
    e.stopPropagation();
    flipCardReveal();
});

modalWaxSeal.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        flipCardReveal();
    }
});

// กดการ์ดด้านหน้าตรงอื่นก็ช่วยทริกเกอร์พลิกเปิดเช่นกัน
modalCard.addEventListener('click', (e) => {
    if (!isFlipped && !e.target.closest('.modal-card-back')) {
        flipCardReveal();
    }
});

// กดปุ่มคัดลอกลิงก์เพื่อส่งต่อ
btnShareCard.addEventListener('click', handleShareClick);

// ปิดหน้าต่างการ์ดผ่านปุ่ม Close
btnCloseModal.addEventListener('click', closeModal);

// ปิดเมื่อแตะพื้นหลัง Overlay เบลอๆ ด้านนอกตัวการ์ด
cardModal.addEventListener('click', (e) => {
    if (e.target === cardModal) {
        closeModal();
    }
});

// ปิดด้วยปุ่ม Escape บนคีย์บอร์ด
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (cardModal.classList.contains('active')) {
            closeModal();
        }
        if (customizerModal && customizerModal.classList.contains('active')) {
            closeCustomizer();
        }
    }
});

// แท็บหมวดหมู่การ์ดรัก
const tabButtons = document.querySelectorAll('.tab-btn');
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (isAnimating) return;
        
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        activeCategory = btn.dataset.category;
        renderCardGrid();
    });
});

// เครื่องเล่นเพลงประกอบ
btnMusicToggle.addEventListener('click', toggleMusic);

// เปิด/ปิดหน้าต่างเขียนการ์ดเอง
if (btnCreateCustom) btnCreateCustom.addEventListener('click', openCustomizer);
if (btnCloseCustomizer) btnCloseCustomizer.addEventListener('click', closeCustomizer);

if (customizerModal) {
    customizerModal.addEventListener('click', (e) => {
        if (e.target === customizerModal) {
            closeCustomizer();
        }
    });
}

// จัดการส่งฟอร์มเขียนการ์ดกำหนดเอง
if (customCardForm) {
    customCardForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const selectedPaper = document.querySelector('input[name="inputPaper"]:checked').value;
        const selectedFastener = document.querySelector('input[name="inputFastener"]:checked').value;

        // สร้างข้อมูลการ์ดใหม่
        const newCard = {
            isCustom: true,
            envelopeEmoji: inputEmoji.value,
            envelopeLabel: inputLabel.value,
            emojiTop: inputEmoji.value,
            title: inputTitle.value,
            divider: '💗',
            message: inputMessage.value.replace(/\n/g, '<br>'), // รักษาระยะเคาะบรรทัด
            signature: inputSignature.value,
            emojiBottom: [inputEmoji.value, '💖', inputEmoji.value],
            paperStyle: selectedPaper,
            fastenerStyle: selectedFastener
        };

        const b64 = encodeCardData(newCard);
        if (b64) {
            const shareUrl = `${window.location.origin}${window.location.pathname}?custom=${b64}`;
            
            navigator.clipboard.writeText(shareUrl).then(() => {
                alert("สร้างการ์ดของคุณสำเร็จ! 💖 และคัดลอกลิงก์สำหรับส่งต่อลงคลิปบอร์ดแล้วค่ะ ส่งลิงก์นี้ให้คนพิเศษของคุณเปิดอ่านได้เลย!");
                closeCustomizer();
                customCardForm.reset();
            }).catch(err => {
                console.error("Failed to copy link: ", err);
                prompt("ระบบสร้างลิงก์การ์ดเสร็จแล้ว คัดลอกลิงก์ด้านล่างเพื่อส่งต่อได้เลยค่ะ:", shareUrl);
            });
        }
    });
}

// สับไพ่
btnShuffle.addEventListener('click', shuffleDeck);

// =====================================================
// Initialization
// =====================================================
createAmbientParticles();
renderCardGrid();
checkSharedCard();
