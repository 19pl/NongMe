

// ตั้งค่าโหมดทดสอบ (true = ปิดระบบคูลดาวน์สำหรับทดสอบ, false = เปิดคูลดาวน์วันละข้อปกติเมื่อใช้งานจริง)
const IS_TEST_MODE = false;

// รายการคำถามทั้งหมด
const QUESTIONS = [
  {
    title: "แก้ code ง่ายๆ (python)",
    code: `x = 60
y = 7

result = "T" if x + y == 67 else "F"

print(result)`,
    desc: "จากโค้ดด้านบน ผลลัพธ์ที่แสดงบนหน้าจอ (output) คืออะไร?",
    answerHashes: ["c3f557903248f7ddf7bf487e1a6cfc3d7f55321a1484c8bf07f2affeebe5ac88"],
    hintCipher: [{"iv":"0940be5bc58d48c3e3fe430a","ct":"e06b0165071459a18089336e72fdcd982c303dc2bf784c5aef349e6f7af702dc77cefdcb09c9b00577654ea7205c77263b98c6ef8dbeaa6b0b33c87328b26f257526275760c67ded2987942f3d2b40a3cb2b8a433a2aafcd6e50de37cd66c1f5d96969c86dfde783336363bcd8c84cffb24d8e7e58d2b897bfe8d27e248b8b0c6208257364c8a21c372c72ef337046a1925f93f1d447bebec83229fa1e7084ef5154c4adef994e95761ed4f216dd5dc4d7b9355e0a916dad12891f5004"}]
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
    answerHashes: ["e6efe0c73f377bcf53b21e84a76e1652be7c53758da0ba79c87ef469e71fc1bb", "07a7cef7fbdb035ab8246abe1036b2b3aebc76090430dbd3461ae71f0be0c8f1"],
    hintCipher: [{"iv":"c6287c329c10421bc4b0669d","ct":"be615436e97983a2f98a6ea4167ad8419d909c81b50338c18000a7db9d58b74750c140a37d41fee759611cab935064249a825d3104d45b88490c7b94feb921b4985368c2e23711dbb62bfd68125dbc2d7bb721c310d6ebc0816765f947bb96d5a8b31df6f752cbeb86b3cbe063458b081e234dd1ecc1dfac45a745333479d982aab3f49724db1641d2accc8f3b20dec4bd3e65609a3fc9195d4c2f2b4d0975859256ff79d5dd3bca93a37f838880dfae0446384bd15af9fd95137541c15b5d8d58190e0d4a414673675ee213b1056d91c8581ce887c11b8ec9903df532daab11920937d2"},{"iv":"73269ded1b1a265944649eed","ct":"9ad6982d850079da4721446a2261e04c4777ae624e45087b6a9ef979840606d9ca31884bfc2fdaafe2ade73c42cce27c7af5845409c84b5e7abee3ea0c9c132759dbfdc43693ae7cc853ac82395e98f4055e0cea8e396d73fe990c71ea41e26e26459681b74d19885a2c78fe7a7d6f4831c91024ea15c3ea8a6e216e96751e63e1635573f28cdc5c788fa281829032c4387097fe2a6d0329debff135ceaba3d5da73e161f3da11e9ca2f525b459acfc866f9a58639aed11d18d8fe7dde266c53d52dc92a7847c747811e3341b3f1b9100e8382923df7169282709c0d65d1314185bf0946"}]
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
    answerHashes: ["8ba05cc1fc18dedde18881b8e205eb25141f56a4a87657e419d9f14403c71894", "d40488bcf90cdf9e38ab05fb37c068ec1d7533a79668941993fabad4dc21c9bb"],
    hintCipher: [{"iv":"6af7ba036d53a8ce2287cd6a","ct":"056a8bb72439666ab4e22e877fc900dd0776c27805adeae59181f026fdcdeb65242776eed5e276a5bdfba41691fd7765982bd1193d12e6"},{"iv":"969ff99b36db752a90384328","ct":"491522d3b2c8ea3e79d98845752e4c6f720317e96e1f42ad583e839a05a2bf6de0a2c2e80f11ecb4066b849148de562a54fa8370f54840"}]
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
    answerHashes: ["bfa224c56f6fe19f4095cab9f72ff5d9e58f13c914f887874653dd5ced2c07f9", "b2e862e0ef198ac940acb469425ab551b9682b5fc65e55d46f8929bce1d4c208", "be521f5b369aa9e00eb439f0d3a47fb6f41910c3b573e71246e826bc1c2795e1", "110cc34071919d26d4a6af43e0f1b091dab3cc59c0189064c60eab6cb4b3a4a2"],
    hintCipher: [{"iv":"c6a408851390b85881a14775","ct":"969dab94cd8cd7b53cfcfedbd658b56ec05c7298cc84c4bbf29368fbc13700e879c507815c10635e26a3dd0e0f27b68e98efd14b7188e6984a0d2981d9fcf642f72021408cc89619864a6a35a95c695dc79e6ee3dd44e0e624116dc4cf5c4cda5650e7a9a70376f5687987862e6acfc40da223356fcaf912acbba17e0d4ffa3c4b9a038cec00cec5e3cf81bb8dd897799818d7bec56e43dd5198debaf174499dc101978bb41b2f81486abf16597dcee77c736967abf690f5316d98160f1563e07d4a562b49a6415f325a1427a20c0331c8e6cb119bcd87a09156d0839a569ba90b5deb9baa53e280fb208327763ed9a4d5ed87f78fd2fc5bfde6c43391d4f4833d6367d51389452fa0048a94266ee09801eb53c930a07e425e"},{"iv":"880e95e5173bfa468d47381f","ct":"3db0b98121e9931fb21b5baeee37c806cc408217a4b1bddbbc2bb1e1fde608fbeb894dd317cb7aa2d5b63f6a772fae11a226f601a1047ffde5b52e0a9ff4053791a59d7d801c82df88cecefaaf73cd96ca5970e9a22a21759f757149b4e1e5253b3d9275710155b263497b521153c69ec0a3e6ebc20ea1dae3f832bb8c2499679baaf1ba6c8333482ea872b184b3b10b59d935b045a5f5f61cad1bcb161557e7fd0b637119df3ecd009b4ccbb06a36372ed0949ea49cc5859ec8863eb6dfcef8cbe1e17b48855a629600f721dbc354d41ae9e43a1bd314a718811187ef2f17b53136024a5cd423f86324e9ddb46c158fe73c43ef0638b1f5fe7cdb064c266efb62cc84407cfa2202c3459090f3d2adb6f1e83b107f1defac88"},{"iv":"ab9172ff0ec0a39237f73983","ct":"8b8ac015e0d5969e036a1889499c68fb2f186c981efc891a193773a7ef49cf1d8acd679192778f094ab3d17104cd3f85ab652228e5d32078bfe5d6769e0789f89ecbc78556fe143797b254115819c5c2ff38ce5714b08f5ec645fdf01c9ff79dc5b84cf2fead4de43de6b9906dac66cfa0f19f44f8538090f9e923d266db0d3ff574300815890bdb57bf5d8a3defd8a2a3205ee3e496471b41fbbfa26a175324c16b118e62e418e7c7c3138a262d3ab28ecf2300b206c419477b893e9e0325600b378024f660521d73d10458ef9ee9e115771c728977e8f1862534483f937b8944021a9f8a07371240b3e49a6a032074e6a03eb3948e5a94439c20f5ed1e018b25629a0c9e93c1fa101e02fd4a6c14e35bee29ee3fb7395233"},{"iv":"b65f8ff44fb3fb3ac5715e31","ct":"d5802853821cd96062b251958e131b096cb003c408be7575ba9c5ce8e027d9a08c6e75c75aa2b232150c1834c8b58e1ae75900eea45f434fda710670b04c4f3e3998ab1e897f1a720d4f974022ec4ec2ee0320dbd2c30480382376d492c6ce9f7eb111aab78838c27941dbc7d270b2435b8f36e06505159dc539f10f749a22b9af9f3a5ecbee8de5ec31ecd03e5150323341a8e0896ceda76399ffa37cafe5a31c51ec5e4bcb12cd73a86df9b560cc36eb9b2d718688ae669c07a954c17bd4b6f63315b516904e25a35c61986b125a4e11059a2853c2b4527ccce0618bda1286fafb7efe771ca01d224f137e1f47af00fd7b1c28568d6b1c7a9ba181d33579b628635d1b3019fc98aa666e7c4173a424904a364e8f03a1fa2a"}]
  },

  
  {
    title: "20 + 20 + 20 + 7 = ?",
    answerHashes: ["fac884ba9d8c191f03683c8b564b01c62843bb6e3d78c11f576ba7eac5668854", "9714b3b1a799a6d2c96a91a928e4d88a64fccf3879c7491a927c9aaaa753e88c"],
    hintCipher: [{"iv":"52ac45b0efb8778cb5017f75","ct":"4d67a33bdced07eeb5642c5050e9e8ce834a7ff11d7a1c8dcfed98e2f828076cc367ec4e63d0ea5ad4ad5c1f6c8f8c595e62c5a421d6ae7e44757259b56dcac75b898d8381cc34b4191ad51e524372d56243525f7b9671a28e60c492cfccf0b53513314a414afd41f1fe828c2afb0176c379010b42ba259e1e09017f480a02ad25c44b22cdfbb2"},{"iv":"44c95092c1e671d937be9274","ct":"db147cfbe666e9620b9a3c7de2a46c0e5df9c455cfe3a2ed1f3b7497244add5d94838f387263936e613997fa4f50ec29cc6ed99cda60396eebe1f34ca66ce288e9956ec84a9a7fdc0ea6a325b6d0e73f5b3314ebe6e0731030731f25742b357e2d5d570a566c61023c29ecb0e916b1b4c581526a1b84b4823279f75aa36d35b478a5ecda7754eb"}]
  }
];

const STORAGE_KEY = 'hhProgress';

// โหลดสถานะการเล่นจาก localStorage
function hhLoadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw){
      const parsed = JSON.parse(raw);
      if(!parsed.hintsPlain) parsed.hintsPlain = [];
      return parsed;
    }
  }catch(e){}
  return { correctCount: 0, answeredDates: [], hintsPlain: [] };
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
// แปลง ArrayBuffer/Uint8Array เป็น hex string
function hhToHex(buf){
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}
// แปลง hex string กลับเป็น Uint8Array
function hhFromHex(hex){
  const bytes = new Uint8Array(hex.length / 2);
  for(let i = 0; i < bytes.length; i++) bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
  return bytes;
}
// คำนวณ SHA-256 hash แบบแยกวัตถุประสงค์ (purpose) เพื่อไม่ให้ hash สำหรับตรวจคำตอบ
// (ที่เก็บไว้ในไฟล์แบบเปิดเผย) ถูกนำไปคำนวณย้อนเป็นกุญแจถอดรหัสคำใบ้ได้
function hhHashFor(purpose, val){
  return crypto.subtle.digest('SHA-256', new TextEncoder().encode(purpose + ':' + val));
}
// ถอดรหัสคำใบ้ด้วยคำตอบที่ถูกต้อง (val ต้องเป็นคำตอบที่ผ่านการตรวจแล้วว่าถูก)
async function hhDecryptHint(entry, val){
  const keyBuf = await hhHashFor('key', val);
  const key = await crypto.subtle.importKey('raw', keyBuf, 'AES-GCM', false, ['decrypt']);
  const plain = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: hhFromHex(entry.iv) }, key, hhFromHex(entry.ct)
  );
  return new TextDecoder().decode(plain);
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
    const hintText = state.hintsPlain[index - 1] || 'ตอบถูกแล้ว แต่ไม่พบคำใบ้ที่ถอดรหัสไว้ (อาจเล่นข้ามอุปกรณ์/ล้างข้อมูลเบราว์เซอร์) กด "รีเซ็ต" แล้วตอบข้อนี้ใหม่เพื่อรับคำใบ้อีกครั้ง';
    cardWrap.innerHTML = `
      <div class="hh-card">
        <p class="hh-eyebrow">คำถามที่ ${index} จาก ${QUESTIONS.length}</p>
        <p class="hh-q-title">${q.title}</p>
        ${q.code ? `<pre class="hh-q-code"><code>${q.code}</code></pre>` : ''}
        ${q.desc ? `<div class="hh-q-desc">${q.desc}</div>` : ''}
        <div class="hh-feedback right">ตอบถูกแล้ว ✓</div>
        <div class="hh-hint-box"><b>คำใบ้ที่ได้รับ</b>${hintText}</div>
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

  async function submit(){
    const val = hhNormalize(input.value);
    if(!val){
      feedback.textContent = 'พิมพ์คำตอบก่อนนะ';
      feedback.className = 'hh-feedback wrong';
      return;
    }
    btn.disabled = true;
    const valHash = hhToHex(await hhHashFor('verify', val));
    const matchIdx = (q.answerHashes || []).indexOf(valHash);
    btn.disabled = false;
    if(matchIdx !== -1){
      let hintText = '(ไม่สามารถถอดรหัสคำใบ้ได้)';
      try{
        hintText = await hhDecryptHint(q.hintCipher[matchIdx], val);
      }catch(e){}
      feedback.textContent = 'ถูกต้อง! ปลดคำใบ้แล้ว 🎉';
      feedback.className = 'hh-feedback right';
      btn.disabled = true;
      input.disabled = true;
      state.correctCount = index;
      state.answeredDates[index - 1] = hhTodayStr();
      state.hintsPlain[index - 1] = hintText;
      hhSaveState(state);
      hhRenderTrack(trackEl, index, state);
      document.getElementById('hhHintReveal').innerHTML = `
        <div class="hh-hint-box"><b>คำใบ้ที่ได้รับ</b>${hintText}</div>
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

// ฟังก์ชันป้องกันการใช้งาน DevTools และการก๊อปปี้ข้อความ
(function preventCheating() {

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

  // 4. ห้ามกดปุ่มลัดสำหรับเปิด DevTools หรือดู Source Code
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

    if (cheatingAttempt) {
      showWarningBanner();
    }
  });

  // 5. ใช้ลูป Debugger ขัดขวางคอนโซล (หากเปิด DevTools หน้าเว็บจะค้าง/ติด debugger ทันที)
  setInterval(() => {
    (function() {}).constructor('debugger')();
  }, 100);
})();