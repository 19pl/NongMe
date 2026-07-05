/*
  ตามล่าใบ้พี่รหัส — ตรรกะกลางที่ใช้ร่วมกันทุกหน้า

  แก้ไขคำถาม/คำตอบ/คำใบ้ได้ที่ QUESTIONS ด้านล่างนี้ (แก้ไฟล์นี้ไฟล์เดียว มีผลกับทุกหน้า)
  - answer: คำตอบหลักที่ถูกต้อง
  - altAnswers: คำตอบสำรองที่นับว่าถูกด้วย
  - hint: ข้อความคำใบ้ที่จะได้รับเมื่อตอบถูก

  กติกาเวลา: ตอบถูกข้อไหนแล้ว คำถามข้อถัดไปจะปลดล็อกหลังเที่ยงคืน (เวลาเครื่องของน้องรหัส)
  ของวันถัดไปเท่านั้น ต่อให้ตอบถูกตอนไหนของวันก็ตาม
*/

// ตั้งค่าโหมดทดสอบ (true = ปิดระบบคูลดาวน์สำหรับทดสอบ, false = เปิดคูลดาวน์วันละข้อปกติเมื่อใช้งานจริง)
const IS_TEST_MODE = true;

// รายการคำถามทั้งหมด
const QUESTIONS = [
  {
    title: "แก้ code ง่ายๆ (python)",
    code: `x = 60
y = 7

result = "T" if x + y == 67 else "F"

print(result)`,
    desc: "จากโค้ดด้านบน ผลลัพธ์ที่แสดงบนหน้าจอ (output) คืออะไร?",
    answer: "T",
    altAnswers: ["t"],
    hint: "ตัวอักษรที่น้องกรอกไปก่อนหน้านี้ มีอยู่ในชื่อพี่ด้วยนะ อิอิ"
  },


  {
    title: "จงหาค่าของลิมิตต่อไปนี้",
    desc: `
      <div class="hh-math-grid">
        <div style="display: inline-flex; align-items: center; justify-content: center; font-size: 28px; font-weight: 500;">
          <div style="display: inline-flex; flex-direction: column; align-items: center; margin-right: 5px; line-height: 1.1;">
            <span style="font-size: 22px; color: #777;">lim</span>
            <span style="font-size: 13px; color: #333; margin-top: 2px;">n &rarr; &infin;</span>
          </div>
          <span style="font-size: 36px; font-weight: 300; margin-right: 2px;">(</span>
          <div style="display: inline-flex; flex-direction: column; align-items: center; line-height: 1.1; margin: 0 2px;">
            <span style="border-bottom: 2px solid var(--ink); padding: 0 4px; font-size: 24px;">1</span>
            <span style="font-size: 24px;">n</span>
          </div>
          <span style="font-size: 36px; font-weight: 300; margin-left: 2px; position: relative;">
            )
            <span style="font-size: 15px; position: absolute; top: -14px; left: 10px; display: inline-flex; flex-direction: column; align-items: center; line-height: 1.1;">
              <span style="border-bottom: 1.5px solid var(--ink); padding: 0 2px;">1</span>
              <span>n</span>
            </span>
          </span>
        </div>
      </div>
    `,
    answer: "1",
    altAnswers: ["หนึ่ง"],
    hint: "คำตอบที่น้องตอบถูกไปเป็นลำดับตัวอักษร ของตัวที่อยู่ในชื่อพี่นะ (เช่น c=3 d=4 o=15)"
  },


  {
    title: "จงหาคำตอบจากโจทย์ต่อไปนี้",
    desc: `
      <div class="hh-math-grid">
        <div style="font-size: 20px; margin-bottom: 15px; font-weight: 500;">
          y = c &nbsp;&nbsp;; เมื่อ c เป็นค่าคงที่
        </div>
        <div style="display: inline-flex; align-items: center; justify-content: center; font-size: 26px; font-weight: 500;">
          <div style="display: inline-flex; flex-direction: column; align-items: center; line-height: 1.1; margin-right: 8px;">
            <span style="border-bottom: 2px solid var(--ink); padding: 0 4px;">d(y)</span>
            <span>dx</span>
          </div>
          <span>= ?</span>
        </div>
      </div>
    `,
    answer: "0",
    altAnswers: ["ศูนย์"],
    hint: "พี่ชอบแมวมากๆ"
  },


  {
    title: "จงหาความต้านทานรวมระหว่างขั้ว A และ B",
    desc: `
      <div class="hh-math-grid" style="padding-top: 15px; padding-bottom: 15px;">
        <svg viewBox="0 0 380 185" width="100%" height="185" style="overflow: visible; stroke: var(--ink); fill: none; stroke-width: 2; font-family: 'Sarabun', sans-serif;">
          <!-- ขั้วต่อ A และ B -->
          <circle cx="50" cy="40" r="4" fill="var(--ink)" stroke="none" />
          <text x="32" y="45" font-size="16" font-weight="bold" fill="var(--ink)" stroke="none">A</text>
          
          <circle cx="50" cy="150" r="4" fill="var(--ink)" stroke="none" />
          <text x="32" y="155" font-size="16" font-weight="bold" fill="var(--ink)" stroke="none">B</text>
          
          <!-- R1 -->
          <path d="M 50,40 h 15 l 2.5,-6 l 5,12 l 5,-12 l 5,12 l 5,-12 l 5,12 l 2.5,-6 h 15" />
          <text x="80" y="24" font-size="12" fill="var(--ink)" stroke="none" text-anchor="middle">R₁ = 10 &Omega;</text>
          <line x1="110" y1="40" x2="140" y2="40" />
          
          <!-- R2 -->
          <line x1="140" y1="40" x2="140" y2="55" />
          <path d="M 140,55 v 15 l -6,2.5 l 12,5 l -12,5 l 12,5 l -12,5 l 12,5 l -6,2.5 v 15" />
          <text x="128" y="89" font-size="12" fill="var(--ink)" stroke="none" text-anchor="end">R₂ = 15 &Omega;</text>
          <line x1="140" y1="115" x2="140" y2="150" />
          
          <!-- R3 -->
          <path d="M 140,40 h 15 l 2.5,-6 l 5,12 l 5,-12 l 5,12 l 5,-12 l 5,12 l 2.5,-6 h 15" />
          <text x="170" y="24" font-size="12" fill="var(--ink)" stroke="none" text-anchor="middle">R₃ = 5 &Omega;</text>
          <line x1="200" y1="40" x2="240" y2="40" />
          
          <!-- R4 -->
          <line x1="240" y1="40" x2="240" y2="55" />
          <path d="M 240,55 v 15 l -6,2.5 l 12,5 l -12,5 l 12,5 l -12,5 l 12,5 l -6,2.5 v 15" />
          <text x="228" y="89" font-size="12" fill="var(--ink)" stroke="none" text-anchor="end">R₄ = 20 &Omega;</text>
          <line x1="240" y1="115" x2="240" y2="150" />
          
          <!-- R5 -->
          <line x1="240" y1="40" x2="310" y2="40" />
          <line x1="310" y1="40" x2="310" y2="55" />
          <path d="M 310,55 v 15 l -6,2.5 l 12,5 l -12,5 l 12,5 l -12,5 l 12,5 l -6,2.5 v 15" />
          <text x="322" y="89" font-size="12" fill="var(--ink)" stroke="none" text-anchor="start">R₅ = 20 &Omega;</text>
          <line x1="310" y1="115" x2="310" y2="150" />
          
          <!-- เส้นด้านล่างร่วม -->
          <line x1="50" y1="150" x2="310" y2="150" />
          
          <!-- จุดต่อ (Junction dots) -->
          <circle cx="140" cy="40" r="3" fill="var(--ink)" stroke="none" />
          <circle cx="140" cy="150" r="3" fill="var(--ink)" stroke="none" />
          <circle cx="240" cy="40" r="3" fill="var(--ink)" stroke="none" />
          <circle cx="240" cy="150" r="3" fill="var(--ink)" stroke="none" />
        </svg>
        <div style="font-size: 24px; margin-top: 15px; font-weight: bold; font-family: 'Chonburi', cursive;">R<sub>AB</sub> = ?</div>
      </div>
    `,
    answer: "17.5",
    altAnswers: ["17.5 โอห์ม", "17.5โอห์ม", "17.5 ohm", "17.5 ohms"],
    hint: "พี่เป็นผู้ชาย...(ปีที่แล้วพี่เคยได้คำใบ้นี้มา ปีนี้พี่ขอแชร์ให้น้อง พี่ไม่ยอมเจอคนเดียวหรอก555)"
  },

  
  {
    title: "20 + 20 + 20 + 7 = ?",
    answer: "67",
    altAnswers: ["67", "หกสิบเจ็ด"],
    hint: "🎉 ปลดครบทุกใบ้แล้ว! ชื่อไอจีพี่เบิ้ล123 อิอิ"
  }
];

const STORAGE_KEY = 'hhProgress';

// โหลดสถานะการเล่นจาก localStorage
function hhLoadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw) return JSON.parse(raw);
  }catch(e){}
  return { correctCount: 0, answeredDates: [] };
}
// บันทึกสถานะการเล่นลง localStorage
function hhSaveState(state){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
// คืนค่าวันที่ปัจจุบันในรูปแบบ YYYY-MM-DD
function hhTodayStr(){
  // รูปแบบ YYYY-MM-DD ตามเวลาเครื่อง เทียบกันตรงๆ ได้เลย
  return new Date().toLocaleDateString('sv-SE');
}
// รีเซ็ตสถานะการเล่นทั้งหมด
function hhResetState(){
  localStorage.removeItem(STORAGE_KEY);
}
// ปรับรูปแบบสตริงให้เป็นรูปแบบมาตรฐานเพื่อเปรียบเทียบ
function hhNormalize(s){
  return (s || '').trim().toLowerCase().replace(/\s+/g, '');
}

// index คือเลขข้อแบบ 1..5
// ตรวจสอบว่าข้อถัดไปถูกปลดล็อกแล้วหรือยัง
function hhIsUnlocked(index, state){
  if (IS_TEST_MODE) return true; // ถ้าอยู่ในโหมดทดสอบ จะไม่มีการจำกัดคูลดาวน์ (เล่นได้ต่อเนื่องเลย)
  if(index === 1) return true;
  const prevDate = state.answeredDates[index - 2]; // วันที่ตอบถูกข้อก่อนหน้า
  if(!prevDate) return false;
  return hhTodayStr() > prevDate;
}

// คำนวณมิลลิวินาทีจนถึงเที่ยงคืนถัดไป
function hhMsUntilMidnight(){
  const now = new Date();
  const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
  return next.getTime() - now.getTime();
}
// แปลงมิลลิวินาทีเป็นสตริงนับถอยหลังรูปแบบ HH ชม. MM นาที SS วิ
function hhFormatCountdown(ms){
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  return `${String(h).padStart(2,'0')} ชม. ${String(m).padStart(2,'0')} นาที ${String(s).padStart(2,'0')} วิ`;
}

// สร้างแถบจุดความคืบหน้าด้านบนของทุกหน้า พร้อมลิงก์ไปยังข้อที่ปลดแล้ว
// สร้างแถบแสดงความคืบหน้าที่ด้านบนของหน้า
function hhRenderTrack(container, activeIndex, state){
  container.innerHTML = '';
  for(let i = 1; i <= QUESTIONS.length; i++){
    let cls = 'locked';
    let href = null;
    if(i <= state.correctCount){ cls = 'done'; href = `q${i}.html`; }
    if(i === activeIndex){ cls += ' current'; href = null; }
    const el = document.createElement(href ? 'a' : 'div');
    el.className = 'hh-pin ' + cls;
    el.textContent = (i <= state.correctCount) ? '✓' : String(i);
    if(href) el.href = href;
    container.appendChild(el);
  }
}

// ฟังก์ชันเรียกทำงาน KaTeX เพื่อจัดรูปแบบคณิตศาสตร์ (ถ้ามีการโหลดไฟล์ KaTeX มาในหน้าเว็บ)
function hhTriggerMathRender() {
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(document.body, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false},
        {left: '\\(', right: '\\)', display: false},
        {left: '\\[', right: '\\]', display: true}
      ]
    });
  }
}

// เรียกใช้ในแต่ละหน้า q1.html..q5.html โดยส่งเลขข้อ (1..5) เข้ามา
// เริ่มต้นหน้าแสดงคำถามตามดัชนีที่ระบุ
function hhInitQuestionPage(index){
  const state = hhLoadState();
  const trackEl = document.getElementById('hhTrack');
  const cardWrap = document.getElementById('hhCardWrap');

  // ยังไม่ถึงคิวข้อนี้ (ยังไม่ได้ตอบข้อก่อนหน้า) -> เด้งไปข้อที่ควรเล่น
  if(index - 1 > state.correctCount){
    window.location.href = `q${state.correctCount + 1}.html`;
    return;
  }

  hhRenderTrack(trackEl, index, state);

  const q = QUESTIONS[index - 1];
  const isLast = index === QUESTIONS.length;
  const nextHref = isLast ? 'hints.html' : `q${index + 1}.html`;
  const nextLabel = isLast ? 'ดูคลังคำใบ้ทั้งหมด' : 'ไปคำถามถัดไป';

  // ตอบข้อนี้ถูกไปแล้ว -> โชว์คำใบ้ + ปุ่มไปต่อ
  if(index <= state.correctCount){
    cardWrap.innerHTML = `
      <div class="hh-card">
        <p class="hh-eyebrow">คำถามที่ ${index} จาก ${QUESTIONS.length}</p>
        <p class="hh-q-title">${q.title}</p>
        ${q.code ? `<pre class="hh-q-code"><code>${q.code}</code></pre>` : ''}
        ${q.desc ? `<div class="hh-q-desc">${q.desc}</div>` : ''}
        <div class="hh-feedback right">ตอบถูกแล้ว ✓</div>
        <div class="hh-hint-box"><b>คำใบ้ที่ได้รับ</b>${q.hint}</div>
        <a class="hh-btn" href="${nextHref}">${nextLabel}</a>
      </div>`;
    hhTriggerMathRender();
    return;
  }

  // ยังไม่ปลดล็อกวันนี้ -> โชว์นับถอยหลังถึงเที่ยงคืน
  if(!hhIsUnlocked(index, state)){
    cardWrap.innerHTML = `
      <div class="hh-card">
        <div class="hh-locked-wrap">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" style="margin:0 auto 10px;display:block;">
            <rect x="5" y="11" width="14" height="9" rx="2" stroke="#5c4a35" stroke-width="2"/>
            <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="#5c4a35" stroke-width="2"/>
            <circle cx="12" cy="15.5" r="1.4" fill="#5c4a35"/>
          </svg>
          <p class="hh-eyebrow">คำถามนี้ยังไม่ปลดล็อก</p>
          <p class="hh-q-title">ปลดล็อกหลังเที่ยงคืนนะ</p>
          <div class="hh-countdown" id="hhCountdown">--:--:--</div>
        </div>
      </div>`;
    const cd = document.getElementById('hhCountdown');
    const tick = () => { cd.textContent = hhFormatCountdown(hhMsUntilMidnight()); };
    tick();
    setInterval(tick, 1000);
    hhTriggerMathRender();
    return;
  }

  // ปลดล็อกแล้ว ยังไม่เคยตอบ -> โชว์ฟอร์มคำถาม
  cardWrap.innerHTML = `
    <div class="hh-card">
      <p class="hh-eyebrow">คำถามที่ ${index} จาก ${QUESTIONS.length}</p>
      <p class="hh-q-title">${q.title}</p>
      ${q.code ? `<pre class="hh-q-code"><code>${q.code}</code></pre>` : ''}
      ${q.desc ? `<div class="hh-q-desc">${q.desc}</div>` : ''}
      <input class="hh-input" id="hhAnswerInput" type="text" placeholder="พิมพ์คำตอบตรงนี้..." autocomplete="off" />
      <button class="hh-btn" id="hhSubmitBtn">ส่งคำตอบ</button>
      <div class="hh-feedback" id="hhFeedback"></div>
      <div id="hhHintReveal"></div>
    </div>`;

  const input = document.getElementById('hhAnswerInput');
  const btn = document.getElementById('hhSubmitBtn');
  const feedback = document.getElementById('hhFeedback');

  function submit(){
    const val = hhNormalize(input.value);
    if(!val){
      feedback.textContent = 'พิมพ์คำตอบก่อนนะ';
      feedback.className = 'hh-feedback wrong';
      return;
    }
    const accepted = [q.answer, ...(q.altAnswers || [])].map(hhNormalize);
    if(accepted.includes(val)){
      feedback.textContent = 'ถูกต้อง! ปลดคำใบ้แล้ว 🎉';
      feedback.className = 'hh-feedback right';
      btn.disabled = true;
      input.disabled = true;
      state.correctCount = index;
      state.answeredDates[index - 1] = hhTodayStr();
      hhSaveState(state);
      hhRenderTrack(trackEl, index, state);
      document.getElementById('hhHintReveal').innerHTML = `
        <div class="hh-hint-box"><b>คำใบ้ที่ได้รับ</b>${q.hint}</div>
        <a class="hh-btn" href="${nextHref}">${nextLabel}</a>`;
    } else {
      feedback.textContent = 'ยังไม่ถูก ลองอีกครั้งนะ';
      feedback.className = 'hh-feedback wrong';
    }
  }
  btn.addEventListener('click', submit);
  input.addEventListener('keydown', e => { if(e.key === 'Enter') submit(); });
  hhTriggerMathRender();
}

function hhWireResetButton(btn){
  if(!btn) return;
  btn.addEventListener('click', () => {
    if(confirm('รีเซ็ตความคืบหน้าทั้งหมด? (ใช้สำหรับทดสอบเท่านั้น)')){
      hhResetState();
      window.location.href = 'q1.html';
    }
  });
}

// ฟังก์ชันป้องกันการใช้งาน DevTools, การก๊อปปี้ และการแคปหน้าจอเพื่อป้องกันการใช้ AI ช่วย
(function preventCheating() {
  // สร้างกล่องข้อความเตือนเมื่อพยายามโกง
  let warningBanner = document.getElementById('hhWarningBanner');
  if (!warningBanner) {
    warningBanner = document.createElement('div');
    warningBanner.className = 'hh-warning-banner';
    warningBanner.id = 'hhWarningBanner';
    warningBanner.textContent = 'ฮันแน่!!! ชะใช้AIช่วยอะดิ ไม่ไม่ให้หรอกนะ';
    document.body.appendChild(warningBanner);
  }

  let warningTimeout;
  function showWarningBanner() {
    warningBanner.classList.add('show');
    clearTimeout(warningTimeout);
    warningTimeout = setTimeout(() => {
      warningBanner.classList.remove('show');
    }, 4000);
  }

  // 1. ห้ามคลิกขวา (Context Menu)
  document.addEventListener('contextmenu', e => e.preventDefault());

  // 2. ห้ามคัดลอก (Copy & Cut)
  document.addEventListener('copy', e => {
    e.preventDefault();
    showWarningBanner();
  });
  document.addEventListener('cut', e => {
    e.preventDefault();
    showWarningBanner();
  });

  // 3. ป้องกันการลากและคลุมดำเริ่มต้น (ยกเว้นใน input)
  document.addEventListener('selectstart', e => {
    const activeEl = document.activeElement;
    if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) {
      return;
    }
    e.preventDefault();
  });

  // 4. ห้ามกดปุ่มลัดสำหรับเปิด DevTools, ดู Source Code, แคปภาพ หรือ Print หน้าจอ
  document.addEventListener('keydown', e => {
    let cheatingAttempt = false;

    // ปิด F12
    if (e.key === 'F12') {
      e.preventDefault();
      cheatingAttempt = true;
    }
    // ปิด Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (Inspect)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) {
      e.preventDefault();
      cheatingAttempt = true;
    }
    // ปิด Ctrl+U (ดู Source Code)
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
      e.preventDefault();
      cheatingAttempt = true;
    }
    // ปิด Ctrl+S (บันทึกหน้าเว็บ)
    if (e.ctrlKey && (e.key === 'S' || e.key === 's')) {
      e.preventDefault();
      cheatingAttempt = true;
    }
    // ปิด Windows + Shift + S หรือ Command + Shift + 4 (Snipping / Screenshot Shortcuts)
    if (e.metaKey && e.shiftKey && (e.key === 'S' || e.key === 's' || e.key === '4' || e.key === '3')) {
      cheatingAttempt = true;
    }
    // ปิด Ctrl + P (Print หน้าเว็บ)
    if (e.ctrlKey && (e.key === 'P' || e.key === 'p')) {
      e.preventDefault();
      cheatingAttempt = true;
    }
    // ปุ่ม PrintScreen
    if (e.key === 'PrintScreen') {
      cheatingAttempt = true;
    }

    if (cheatingAttempt) {
      showWarningBanner();
    }
  });

  // 5. ดักจับปุ่ม PrintScreen แบบ Keyup เพื่อล้าง Clipboard ป้องกันการเซฟภาพ
  document.addEventListener('keyup', e => {
    if (e.key === 'PrintScreen') {
      navigator.clipboard.writeText(''); // เคลียร์คลิปบอร์ด
      showWarningBanner();
    }
  });

  // 6. ดักจับก่อนหน้าการสั่ง Print (รวมถึงเซฟเป็น PDF) เพื่อซ่อนหน้าเว็บ
  window.addEventListener('beforeprint', () => {
    document.body.style.opacity = '0';
    showWarningBanner();
  });
  window.addEventListener('afterprint', () => {
    document.body.style.opacity = '1';
  });

  // 7. ป้องกันการแคปหน้าจอบน Desktop เท่านั้น (มือถือ focus หลุดบ่อยตามปกติ ไม่ apply)
  const isMobile = /Mobi|Android|iPhone|iPad|iPod|Touch/i.test(navigator.userAgent) || ('ontouchstart' in window);

  if (!isMobile) {
    // Polling ด้วย requestAnimationFrame เพื่อตรวจสอบ focus แบบ real-time
    // วิธีนี้เร็วกว่า event listener มาก ทำให้ overlay ขึ้นก่อนที่ภาพจะถูกแคปได้
    let blurDelay;
    (function pollFocus() {
      if (!document.hasFocus() || document.hidden) {
        // หน่วงเล็กน้อย 80ms เพื่อกันการหลุด focus จากการเปิด dialog หรือ alert
        blurDelay = blurDelay || setTimeout(() => {
          document.body.classList.add('hh-blurred');
        }, 80);
      } else {
        clearTimeout(blurDelay);
        blurDelay = null;
        document.body.classList.remove('hh-blurred');
      }
      requestAnimationFrame(pollFocus);
    })();

    // backup: blur/focus events
    window.addEventListener('blur', () => {
      blurDelay = blurDelay || setTimeout(() => {
        document.body.classList.add('hh-blurred');
      }, 80);
    });
    window.addEventListener('focus', () => {
      clearTimeout(blurDelay);
      blurDelay = null;
      document.body.classList.remove('hh-blurred');
    });
  }

  // ดักจับ visibilitychange (ใช้ได้ทั้ง desktop และ mobile)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) document.body.classList.add('hh-blurred');
    else document.body.classList.remove('hh-blurred');
  });

  // 8. ใช้ลูป Debugger ขัดขวางคอนโซล (หากเปิด DevTools หน้าเว็บจะค้าง/ติด debugger ทันที)
  setInterval(() => {
    (function() {}).constructor('debugger')();
  }, 100);
})();
// 123