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
//const IS_TEST_MODE = true;

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
    title: "พี่รหัสเรียนคณะ/สาขาอะไร?",
    answer: "วิศวกรรมคอมพิวเตอร์",
    altAnswers: ["วิศวะคอม", "computer engineering"],
    hint: "พี่รหัสเล่นกีตาร์เป็น และเคยเข้าวงดนตรีของมหาลัย"
  },


  {
    title: "สีที่พี่รหัสชอบที่สุดคือสีอะไร?",
    answer: "สีฟ้า",
    altAnswers: ["ฟ้า", "blue"],
    hint: "พี่รหัสมีสัตว์เลี้ยงเป็นแมว ชื่อคล้ายขนม"
  },


  {
    title: "พี่รหัสเป็นคนจังหวัดอะไร?",
    answer: "เชียงใหม่",
    altAnswers: ["cm", "chiang mai"],
    hint: "พี่รหัสตื่นเช้ามาก ชอบไปวิ่งตอนตี 5 ทุกวัน"
  },

  
  {
    title: "งานอดิเรกอันดับ 1 ของพี่รหัสคืออะไร?",
    answer: "ถ่ายรูป",
    altAnswers: ["photography", "การถ่ายภาพ"],
    hint: "🎉 ปลดครบทุกใบ้แล้ว! เจอกันได้ที่โต๊ะสีฟ้าตรงโรงอาหารตอนเที่ยง มารับของจริงกันเลย!"
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
        ${q.desc ? `<p class="hh-q-desc">${q.desc}</p>` : ''}
        <div class="hh-feedback right">ตอบถูกแล้ว ✓</div>
        <div class="hh-hint-box"><b>คำใบ้ที่ได้รับ</b>${q.hint}</div>
        <a class="hh-btn" href="${nextHref}">${nextLabel}</a>
      </div>`;
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
    return;
  }

  // ปลดล็อกแล้ว ยังไม่เคยตอบ -> โชว์ฟอร์มคำถาม
  cardWrap.innerHTML = `
    <div class="hh-card">
      <p class="hh-eyebrow">คำถามที่ ${index} จาก ${QUESTIONS.length}</p>
      <p class="hh-q-title">${q.title}</p>
      ${q.code ? `<pre class="hh-q-code"><code>${q.code}</code></pre>` : ''}
      ${q.desc ? `<p class="hh-q-desc">${q.desc}</p>` : ''}
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

// ฟังก์ชันป้องกันการใช้งาน DevTools เพื่อไม่ให้แอบดูคำตอบ/คำใบ้
(function preventDevTools() {
  // 1. ห้ามคลิกขวา (Context Menu)
  document.addEventListener('contextmenu', e => e.preventDefault());

  // 2. ห้ามกดปุ่มลัดสำหรับเปิด DevTools หรือดู Source Code
  document.addEventListener('keydown', e => {
    let showWarning = false;
    // ปิดการใช้ F12
    if (e.key === 'F12') {
      e.preventDefault();
      showWarning = true;
    }
    // ปิด Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (Inspect)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) {
      e.preventDefault();
      showWarning = true;
    }
    // ปิด Ctrl+U (ดู Source Code)
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
      e.preventDefault();
      showWarning = true;
    }
    // ปิด Ctrl+S (บันทึกหน้าเว็บ)
    if (e.ctrlKey && (e.key === 'S' || e.key === 's')) {
      e.preventDefault();
      showWarning = true;
    }

    if (showWarning) {
      alert("ฮันแน่! พี่ไม่อนุณาตินะจ๊ะ");
    }
  });

  // 3. ใช้ลูป Debugger ขัดขวางคอนโซล (หากเปิด DevTools หน้าเว็บจะค้าง/ติด debugger ทันที)
  setInterval(() => {
    (function() {}).constructor('debugger')();
  }, 100);
})();
// 123