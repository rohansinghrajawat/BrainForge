/* ============================================================
   ICONS
   ============================================================ */
const I = {
  logo:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 6v6c0 5 3.4 9.2 8 10 4.6-.8 8-5 8-10V6l-8-4z"/><path d="m9 12 2 2 4-4"/></svg>',
  dashboard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>',
  video:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 10 6-3v10l-6-3z"/></svg>',
  note:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></svg>',
  syllabus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  test:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m7 14 4-4 4 4 5-6"/></svg>',
  doubt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.5 8.5 0 0 1 12.5 3 8.4 8.4 0 0 1 21 11.5z"/></svg>',
  attendance:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="m9 16 2 2 4-4"/></svg>',
  profile:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2"/></svg>',
  settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>',
  sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
  menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  chevronDown:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  chevronRight:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  chevronLeft:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
  arrowRight:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
  arrowLeft:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
  eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
  eyeOff:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.9 4.2A10.9 10.9 0 0 1 12 4c6.5 0 10 7 10 7a17.8 17.8 0 0 1-2.2 3.2M6.6 6.6A17.8 17.8 0 0 0 2 11s3.5 7 10 7a10.8 10.8 0 0 0 4.2-.8"/><path d="M14.1 14.1a3 3 0 1 1-4.2-4.2"/><path d="m2 2 20 20"/></svg>',
  play:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  download:'<svg viewBox="0 0 24 24" fill="none" height="24px" width="24px" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>',
  flag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/></svg>',
  info:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/></svg>',
  users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2M17 4a4 4 0 0 1 0 8M22 21v-2a5 5 0 0 0-3-4.6"/></svg>',
  book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  megaphone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3zM11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none"  height="24px" width="24px" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none"  height="24px" width="24px" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 6v6c0 5 3.4 9.2 8 10 4.6-.8 8-5 8-10V6l-8-4z"/></svg>',
  send:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></svg>',
  layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 10 6-10 6L2 8z"/><path d="m2 16 10 6 10-6M2 12l10 6 10-6"/></svg>',
  target:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',
  calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/></svg>',
  edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4z"/></svg>',
  trending:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 17 6-6 4 4 8-8"/><path d="M21 7v6h-6"/></svg>'
};

/* ============================================================
   UTILITIES
   ============================================================ */
const $  = (s, c=document) => c.querySelector(s);
const $$ = (s, c=document) => [...c.querySelectorAll(s)];
const esc = s => String(s==null?'':s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function toast(msg, type='success'){
  const root = $('#toast-root');
  if(!root) return;
  const t = document.createElement('div');
  t.className = 'toast toast-'+type;
  const icon = type==='error' ? I.x : type==='info' ? I.info : I.check;
  t.innerHTML = icon + '<span>'+esc(msg)+'</span>';
  root.appendChild(t);
  requestAnimationFrame(()=>t.classList.add('show'));
  setTimeout(()=>{ t.classList.remove('show'); setTimeout(()=>t.remove(),350); }, 3200);
}
function showModal(html){
  const root = $('#modal-root');
  root.innerHTML = '<div class="modal-backdrop">'+html+'</div>';
  root.querySelector('.modal-backdrop').addEventListener('click', e=>{
    if(e.target.classList.contains('modal-backdrop')) closeModal();
  });
}
function closeModal(){ $('#modal-root').innerHTML=''; }
function confirmModal(title, body, onConfirm, danger){
  showModal(
    '<div class="modal" role="dialog" aria-modal="true">'+
      '<h3>'+esc(title)+'</h3>'+
      '<p>'+esc(body)+'</p>'+
      '<div class="modal-actions">'+
        '<button class="btn btn-ghost" data-close>Cancel</button>'+
        '<button class="btn '+(danger?'btn-danger':'btn-primary')+'" data-confirm>Confirm</button>'+
      '</div>'+
    '</div>'
  );
  $('[data-close]').onclick = closeModal;
  $('[data-confirm]').onclick = ()=>{ closeModal(); onConfirm(); };
}

/* ============================================================
   STATE
   ============================================================ */
const KEYS = { theme:'bf_theme' };

const state = {
  theme: localStorage.getItem(KEYS.theme) || 'light',
  user: null,   // <--- Supabase will populate this
  testTimer: null,
  activeTestId: null,
};

function safeParse(v){ try{ return v ? JSON.parse(v) : null; }catch(e){ return null; } }
function currentUser(){ return state.user; }
function isStudent(){ return !!(state.user && state.user.role === 'student'); }
function isAdmin(){ return !!(state.user && state.user.role === 'admin'); }

function applyTheme(){
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem(KEYS.theme, state.theme);
}
function toggleTheme(){
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  applyTheme();
  $$('.theme-toggle').forEach(b => b.innerHTML = state.theme==='light' ? I.moon : I.sun);
}
applyTheme();

async function logout(){
  try { await signOut(); } catch (e) { /* ignore */ }
  state.user = null;
  if(state.testTimer){ clearInterval(state.testTimer); state.testTimer = null; state.activeTestId = null; }
  toast('Logged out.', 'info');
  location.hash = '#/';
}

/* ============================================================
   MOCK DATA
   ============================================================ */
const FACULTY = {
  sharma:{ name:'Dr. Aarav Sharma', email:'aarav.sharma@brainforge.edu', title:'Associate Professor', dept:'Computer Science', office:'Block A - 210', phone:'+91 98100 12345', bio:'PhD in VLSI Design with 12+ years of teaching experience in digital systems and logic design.' },
  iyer:{ name:'Prof. Meera Iyer', email:'meera.iyer@brainforge.edu', title:'Assistant Professor', dept:'Software Engineering', office:'Block B - 114', phone:'+91 98100 23456', bio:'Specializes in software architecture, agile practices, and design patterns.' },
  kapoor:{ name:'Dr. Rohan Kapoor', email:'rohan.kapoor@brainforge.edu', title:'Professor', dept:'Artificial Intelligence', office:'Block C - 301', phone:'+91 98100 34567', bio:'Researcher in applied ML and AI tooling, author of 30+ peer-reviewed papers.' },
  nair:{ name:'Prof. Sneha Nair', email:'sneha.nair@brainforge.edu', title:'Assistant Professor', dept:'Computer Science', office:'Block A - 122', phone:'+91 98100 45678', bio:'Python educator and competitive programming mentor.' },
  menon:{ name:'Dr. Kabir Menon', email:'kabir.menon@brainforge.edu', title:'Associate Professor', dept:'Mathematics', office:'Block D - 208', phone:'+91 98100 56789', bio:'Linear algebra and optimization researcher with a passion for clean explanations.' },
  rao:{ name:'Prof. Tanvi Rao', email:'tanvi.rao@brainforge.edu', title:'Assistant Professor', dept:'Systems', office:'Block B - 210', phone:'+91 98100 67890', bio:'Linux, DevOps and cloud-native infrastructure practitioner.' },
  joshi:{ name:'Dr. Pooja Joshi', email:'pooja.joshi@brainforge.edu', title:'Professor', dept:'Humanities', office:'Block E - 101', phone:'+91 98100 78901', bio:'Communication skills, technical writing and professional ethics.' },
  verma:{ name:'Ms. Nisha Verma', email:'nisha.verma@brainforge.edu', title:'Language Instructor', dept:'Language Lab', office:'Block E - 004', phone:'+91 98100 89012', bio:'Language lab coordinator with expertise in English for professional contexts.' }
};

const SUBJECTS = [
  { id:'dld', name:'Digital Logic Design', code:'CS201', facultyId:'sharma', progress:68, nextTest:'2025-06-15', credits:4, hue:215,
    overview:'Digital Logic Design introduces the fundamentals of digital circuits — Boolean algebra, combinational and sequential logic, and the practical design of digital systems.',
    syllabus:[
      { module:'Module 1', title:'Number Systems & Boolean Algebra', topics:['Binary, octal, hexadecimal','Boolean laws & identities','Canonical & standard forms','Karnaugh map simplification'] },
      { module:'Module 2', title:'Combinational Circuits', topics:['Half & full adders','Multiplexers & demultiplexers','Decoders & encoders','Comparators'] },
      { module:'Module 3', title:'Sequential Circuits', topics:['SR, JK, D & T flip-flops','Registers','Synchronous & asynchronous counters','State machines'] },
      { module:'Module 4', title:'Memory & Programmable Logic', topics:['ROM & RAM','PLA & PAL','Introduction to FPGA','Memory addressing'] }
    ],
    notes:[
      { title:'Unit 1 — Boolean Algebra & K-Maps', type:'PDF', size:'2.4 MB', pages:42, updated:'2 days ago' },
      { title:'Unit 2 — Combinational Logic Design', type:'PDF', size:'3.1 MB', pages:56, updated:'5 days ago' },
      { title:'Unit 3 — Flip-Flops & Counters', type:'PDF', size:'1.9 MB', pages:38, updated:'1 week ago' },
      { title:'Problem Set — Karnaugh Maps', type:'PDF', size:'0.8 MB', pages:18, updated:'3 days ago' },
      { title:'Formula Sheet — Full Semester', type:'PDF', size:'0.4 MB', pages:6, updated:'2 weeks ago' }
    ],
    lectures:[
      { title:'Introduction to Digital Systems', duration:'48:12', date:'Jun 01', watched:true },
      { title:'Boolean Algebra Essentials', duration:'52:40', date:'Jun 03', watched:true },
      { title:'Karnaugh Map Simplification', duration:'41:05', date:'Jun 05', watched:true },
      { title:'Adders & Subtractors', duration:'37:18', date:'Jun 07', watched:false },
      { title:'Multiplexers and Decoders', duration:'44:52', date:'Jun 09', watched:false },
      { title:'Flip-Flops Deep Dive', duration:'55:22', date:'Jun 11', watched:false }
    ],
    attendance:{ present:43, total:50, history:[
      {date:'Jun 02',status:'present'},{date:'Jun 04',status:'present'},{date:'Jun 06',status:'absent'},{date:'Jun 09',status:'present'},{date:'Jun 11',status:'present'},{date:'Jun 13',status:'late'},{date:'Jun 16',status:'present'},{date:'Jun 18',status:'present'},{date:'Jun 20',status:'present'},{date:'Jun 23',status:'absent'},{date:'Jun 25',status:'present'},{date:'Jun 27',status:'present'}
    ]}
  },
  { id:'sdd', name:'Software Design and Development', code:'CS202', facultyId:'iyer', progress:54, nextTest:'2025-06-18', credits:4, hue:245,
    overview:'Software Design and Development covers the software lifecycle, design patterns, architecture, testing and modern development practices.',
    syllabus:[
      { module:'Module 1', title:'Software Lifecycle & Requirements', topics:['SDLC models','Requirement elicitation','User stories & use cases','SRS documents'] },
      { module:'Module 2', title:'Design Principles & Patterns', topics:['SOLID principles','Creational, structural, behavioral patterns','UML diagrams'] },
      { module:'Module 3', title:'Architecture & Testing', topics:['Layered architecture','Microservices','Unit & integration testing','TDD'] },
      { module:'Module 4', title:'Version Control & DevOps', topics:['Git workflows','CI/CD pipelines','Code review practices'] }
    ],
    notes:[
      { title:'Unit 1 — Requirements Engineering', type:'PDF', size:'2.0 MB', pages:34, updated:'4 days ago' },
      { title:'Unit 2 — Design Patterns Catalog', type:'PDF', size:'3.4 MB', pages:60, updated:'6 days ago' },
      { title:'Unit 3 — Testing Strategies', type:'PDF', size:'1.6 MB', pages:28, updated:'1 week ago' }
    ],
    lectures:[
      { title:'SDLC Models Overview', duration:'46:10', date:'Jun 02', watched:true },
      { title:'SOLID Principles in Practice', duration:'51:05', date:'Jun 05', watched:true },
      { title:'Design Patterns Introduction', duration:'49:30', date:'Jun 08', watched:false },
      { title:'Testing Pyramid Explained', duration:'38:22', date:'Jun 12', watched:false }
    ],
    attendance:{ present:38, total:46, history:[
      {date:'Jun 03',status:'present'},{date:'Jun 05',status:'present'},{date:'Jun 07',status:'present'},{date:'Jun 10',status:'absent'},{date:'Jun 12',status:'present'},{date:'Jun 14',status:'present'},{date:'Jun 17',status:'late'},{date:'Jun 19',status:'present'}
    ]}
  },
  { id:'ai', name:'AI Landscape and Tools', code:'CS203', facultyId:'kapoor', progress:72, nextTest:'2025-06-20', credits:3, hue:280,
    overview:'A survey of modern artificial intelligence — core concepts, practical tools, and hands-on workflows with large language models and ML pipelines.',
    syllabus:[
      { module:'Module 1', title:'Foundations of AI', topics:['History of AI','Search & problem solving','Knowledge representation'] },
      { module:'Module 2', title:'Machine Learning Basics', topics:['Supervised learning','Unsupervised learning','Model evaluation'] },
      { module:'Module 3', title:'Modern AI Tools', topics:['LLM APIs','Prompt engineering','Vector databases','RAG'] },
      { module:'Module 4', title:'Applied AI Ethics', topics:['Bias & fairness','Privacy','Responsible deployment'] }
    ],
    notes:[
      { title:'Unit 1 — AI Foundations', type:'PDF', size:'2.2 MB', pages:40, updated:'1 day ago' },
      { title:'Unit 2 — ML Crash Course', type:'PDF', size:'3.0 MB', pages:52, updated:'3 days ago' },
      { title:'LLM Toolchain Cheat Sheet', type:'PDF', size:'0.6 MB', pages:8, updated:'2 days ago' }
    ],
    lectures:[
      { title:'What is AI? A Modern Tour', duration:'44:00', date:'Jun 01', watched:true },
      { title:'Supervised Learning Intuition', duration:'50:12', date:'Jun 04', watched:true },
      { title:'Prompting Patterns that Work', duration:'38:44', date:'Jun 06', watched:true },
      { title:'Building a RAG Pipeline', duration:'52:18', date:'Jun 10', watched:false }
    ],
    attendance:{ present:36, total:42, history:[
      {date:'Jun 02',status:'present'},{date:'Jun 04',status:'present'},{date:'Jun 06',status:'present'},{date:'Jun 09',status:'present'},{date:'Jun 11',status:'absent'},{date:'Jun 13',status:'present'},{date:'Jun 16',status:'present'}
    ]}
  },
  { id:'py', name:'Python Programming and Problem Solving', code:'CS204', facultyId:'nair', progress:81, nextTest:'2025-06-12', credits:4, hue:150,
    overview:'Hands-on Python programming with a problem-solving mindset — data structures, algorithms, and clean idiomatic code.',
    syllabus:[
      { module:'Module 1', title:'Python Fundamentals', topics:['Syntax & data types','Control flow','Functions','Modules'] },
      { module:'Module 2', title:'Data Structures', topics:['Lists, tuples, dicts, sets','Comprehensions','Iterators & generators'] },
      { module:'Module 3', title:'Problem Solving Patterns', topics:['Two pointers','Sliding window','Recursion','Dynamic programming basics'] },
      { module:'Module 4', title:'Pythonic Engineering', topics:['OOP in Python','Testing with pytest','Type hints','Project structure'] }
    ],
    notes:[
      { title:'Python Syntax Quick Reference', type:'PDF', size:'1.2 MB', pages:24, updated:'1 day ago' },
      { title:'Data Structures Deep Dive', type:'PDF', size:'2.6 MB', pages:48, updated:'4 days ago' },
      { title:'150 Practice Problems', type:'PDF', size:'1.8 MB', pages:62, updated:'1 week ago' }
    ],
    lectures:[
      { title:'Python Setup & First Programs', duration:'35:20', date:'Jun 02', watched:true },
      { title:'Lists, Tuples & Comprehensions', duration:'47:15', date:'Jun 05', watched:true },
      { title:'Recursion Made Easy', duration:'42:30', date:'Jun 08', watched:true },
      { title:'Dynamic Programming Basics', duration:'54:00', date:'Jun 11', watched:false }
    ],
    attendance:{ present:47, total:50, history:[
      {date:'Jun 02',status:'present'},{date:'Jun 04',status:'present'},{date:'Jun 06',status:'present'},{date:'Jun 09',status:'present'},{date:'Jun 11',status:'present'},{date:'Jun 13',status:'present'},{date:'Jun 16',status:'late'},{date:'Jun 18',status:'present'}
    ]}
  },
  { id:'la', name:'Linear Algebra', code:'MA201', facultyId:'menon', progress:60, nextTest:'2025-06-16', credits:4, hue:20,
    overview:'Vectors, matrices, linear transformations, eigenvalues and their applications to computing and data science.',
    syllabus:[
      { module:'Module 1', title:'Vector Spaces', topics:['Vectors','Linear independence','Basis & dimension'] },
      { module:'Module 2', title:'Matrices & Transformations', topics:['Matrix operations','Determinants','Inverse','Rank'] },
      { module:'Module 3', title:'Eigenvalues & Eigenvectors', topics:['Characteristic polynomials','Diagonalization','Spectral theorem'] },
      { module:'Module 4', title:'Applications', topics:['SVD','PCA','Least squares'] }
    ],
    notes:[
      { title:'Unit 1 — Vector Spaces', type:'PDF', size:'1.9 MB', pages:36, updated:'2 days ago' },
      { title:'Unit 2 — Matrix Algebra', type:'PDF', size:'2.4 MB', pages:44, updated:'5 days ago' },
      { title:'Eigenvalue Problems Solved', type:'PDF', size:'1.1 MB', pages:22, updated:'4 days ago' }
    ],
    lectures:[
      { title:'Vectors from Scratch', duration:'40:12', date:'Jun 01', watched:true },
      { title:'Matrices as Transformations', duration:'45:30', date:'Jun 04', watched:true },
      { title:'Determinants Intuition', duration:'36:48', date:'Jun 07', watched:false },
      { title:'Eigenvalues Explained', duration:'48:15', date:'Jun 10', watched:false }
    ],
    attendance:{ present:34, total:44, history:[
      {date:'Jun 03',status:'present'},{date:'Jun 05',status:'absent'},{date:'Jun 07',status:'present'},{date:'Jun 10',status:'present'},{date:'Jun 12',status:'present'},{date:'Jun 14',status:'absent'},{date:'Jun 17',status:'present'}
    ]}
  },
  { id:'ld', name:'Linux and DevOps', code:'CS205', facultyId:'rao', progress:45, nextTest:'2025-06-22', credits:3, hue:190,
    overview:'Master the Linux command line and modern DevOps tooling — shell scripting, containers, and CI/CD workflows.',
    syllabus:[
      { module:'Module 1', title:'Linux Fundamentals', topics:['Filesystem & permissions','Processes','Package managers','Networking basics'] },
      { module:'Module 2', title:'Shell Scripting', topics:['Bash basics','Loops & conditionals','Text processing tools'] },
      { module:'Module 3', title:'Containers & Orchestration', topics:['Docker basics','Docker Compose','Kubernetes overview'] },
      { module:'Module 4', title:'CI/CD Pipelines', topics:['GitOps','GitHub Actions','Deployment strategies'] }
    ],
    notes:[
      { title:'Linux Command Cheat Sheet', type:'PDF', size:'0.9 MB', pages:16, updated:'3 days ago' },
      { title:'Docker Essentials', type:'PDF', size:'2.1 MB', pages:38, updated:'6 days ago' }
    ],
    lectures:[
      { title:'Linux Filesystem Tour', duration:'39:22', date:'Jun 02', watched:true },
      { title:'Permissions & Users', duration:'43:00', date:'Jun 05', watched:false },
      { title:'Docker in 40 Minutes', duration:'41:15', date:'Jun 09', watched:false }
    ],
    attendance:{ present:26, total:40, history:[
      {date:'Jun 03',status:'present'},{date:'Jun 06',status:'absent'},{date:'Jun 08',status:'present'},{date:'Jun 11',status:'absent'},{date:'Jun 13',status:'present'},{date:'Jun 15',status:'present'}
    ]}
  },
  { id:'sp', name:'Semester Proficiency', code:'UC101', facultyId:'joshi', progress:90, nextTest:'2025-06-25', credits:2, hue:340,
    overview:'A holistic program that ties together core subjects with communication, ethics, and professional skills.',
    syllabus:[
      { module:'Module 1', title:'Communication Skills', topics:['Technical writing','Presentation skills','Email etiquette'] },
      { module:'Module 2', title:'Professional Ethics', topics:['Academic integrity','Workplace ethics','Case discussions'] },
      { module:'Module 3', title:'Interview Preparation', topics:['DSA revision','Project storytelling','HR rounds'] }
    ],
    notes:[
      { title:'Interview Preparation Guide', type:'PDF', size:'1.4 MB', pages:28, updated:'2 days ago' },
      { title:'Technical Writing Templates', type:'PDF', size:'0.7 MB', pages:14, updated:'1 week ago' }
    ],
    lectures:[
      { title:'Communicating Under Pressure', duration:'37:00', date:'Jun 03', watched:true },
      { title:'Storytelling for Interviews', duration:'42:18', date:'Jun 07', watched:true }
    ],
    attendance:{ present:22, total:24, history:[
      {date:'Jun 04',status:'present'},{date:'Jun 08',status:'present'},{date:'Jun 11',status:'present'},{date:'Jun 15',status:'present'}
    ]}
  },
  { id:'ll', name:'Language Lab', code:'UC102', facultyId:'verma', progress:35, nextTest:'2025-06-28', credits:1, hue:120,
    overview:'Practical language lab sessions for English fluency, pronunciation, and professional communication.',
    syllabus:[
      { module:'Module 1', title:'Pronunciation & Listening', topics:['Phonetics','Listening exercises','Accent neutralisation'] },
      { module:'Module 2', title:'Group Discussions', topics:['Structure of GD','Speaking strategies','Practice sessions'] },
      { module:'Module 3', title:'Presentations', topics:['Designing slides','Delivery','Q&A handling'] }
    ],
    notes:[
      { title:'Pronunciation Practice Guide', type:'PDF', size:'0.6 MB', pages:12, updated:'4 days ago' }
    ],
    lectures:[
      { title:'English Sounds Overview', duration:'34:00', date:'Jun 05', watched:true },
      { title:'Group Discussion Practice', duration:'40:00', date:'Jun 09', watched:false }
    ],
    attendance:{ present:12, total:20, history:[
      {date:'Jun 06',status:'present'},{date:'Jun 10',status:'absent'},{date:'Jun 13',status:'present'},{date:'Jun 17',status:'present'}
    ]}
  }
];

const QUESTIONS = {
  'dld-mock-1':{ subjectId:'dld', title:'Mock Test 1 — Digital Logic Fundamentals', duration:30, questions:[
    { id:'q1', topic:'Logic Gates', text:'Which of the following is known as a universal gate?',
      options:['AND','OR','NAND','XOR'], correct:2 },
    { id:'q2', topic:'Number Systems', text:'The binary equivalent of decimal 10 is:',
      options:['1001','1010','1100','1110'], correct:1 },
    { id:'q3', topic:'Boolean Algebra', text:'Simplify: A + A′B',
      options:['A + B','AB','A′ + B','A'], correct:0 },
    { id:'q4', topic:'Combinational Logic', text:'A 2-to-4 decoder has how many outputs?',
      options:['2','3','4','8'], correct:2 },
    { id:'q5', topic:'Sequential Logic', text:'Which flip-flop has a single data input and one clock input?',
      options:['SR','JK','D','T'], correct:2 },
    { id:'q6', topic:'Combinational Logic', text:'The number of half adders required to build a full adder is:',
      options:['1','2','3','4'], correct:1 },
    { id:'q7', topic:'Boolean Algebra', text:'Which of these is NOT a valid Boolean identity?',
      options:['A + A = A','A · A = A','A + A′ = 1','A · A′ = 1'], correct:3 },
    { id:'q8', topic:'Number Systems', text:'The Gray code of binary 1011 is:',
      options:['1101','1110','1001','1010'], correct:1 },
    { id:'q9', topic:'Combinational Logic', text:'A multiplexer with 4 select lines can handle how many inputs?',
      options:['4','8','16','32'], correct:2 },
    { id:'q10', topic:'Logic Gates', text:'The output of an XOR gate when both inputs are 1 is:',
      options:['0','1','High-Z','Undefined'], correct:0 }
  ]},
  'dld-mock-2':{ subjectId:'dld', title:'Mock Test 2 — Sequential Logic', duration:30, questions:[
    { id:'q1', topic:'Sequential Logic', text:'A D flip-flop can be converted into a T flip-flop by:', options:['Connecting D to Q′','Connecting D to Q','Connecting D to clock','Leaving D floating'], correct:0 },
    { id:'q2', topic:'Sequential Logic', text:'A 4-bit ripple counter can count up to:', options:['8','15','16','32'], correct:1 },
    { id:'q3', topic:'Memory', text:'Which memory is volatile?', options:['ROM','Flash','RAM','EEPROM'], correct:2 },
    { id:'q4', topic:'Sequential Logic', text:'The maximum number of states in a 3-bit synchronous counter is:', options:['3','6','8','9'], correct:2 },
    { id:'q5', topic:'Logic Gates', text:'The output of an AND gate is 1 only when:', options:['Any input is 1','All inputs are 1','All inputs are 0','Inputs are different'], correct:1 }
  ]}
};

SUBJECTS.forEach(s=>{
  if(!Object.keys(QUESTIONS).some(k=>QUESTIONS[k].subjectId===s.id)){
    const id = s.id+'-mock-1';
    QUESTIONS[id] = {
      subjectId: s.id,
      title: 'Mock Test 1 — '+s.name,
      duration: 20,
      questions: [
        { id:'q1', topic:'Fundamentals', text:'Which statement best describes the core focus of "'+s.name+'"?', options:['An unrelated elective','A core course of this semester','An optional workshop','A research seminar'], correct:1 },
        { id:'q2', topic:'Fundamentals', text:'The primary benefit of studying this subject is:', options:['Entertainment','Foundational understanding of the domain','Memorising facts','Passing time'], correct:1 },
        { id:'q3', topic:'Practice', text:'Which of the following is a good study practice?', options:['Cramming the night before','Regular revision and practice','Skipping notes','Avoiding doubts'], correct:1 },
        { id:'q4', topic:'Practice', text:'The best time to ask a doubt is:', options:['Never','As soon as it arises','After the exam','Only before the final'], correct:1 },
        { id:'q5', topic:'Application', text:'Understanding this subject mainly helps you:', options:['Nothing useful','Build deeper problem-solving skills','Only pass exams','Avoid work'], correct:1 }
      ]
    };
  }
});

const DOUBTS = [
  { id:1, subjectId:'dld', title:'Why is NAND called a universal gate?', body:'I understand that NAND can implement any other gate, but I want a clear example showing AND, OR, and NOT built using only NAND.', status:'answered', replies:[
    { author:'Dr. Aarav Sharma', time:'2 hours ago', text:'Great question. NOT is NAND with both inputs tied. AND = NAND followed by NOT. OR = invert both inputs then NAND — using De Morgan.' }
  ], time:'3 hours ago' },
  { id:2, subjectId:'py', title:'Recursion vs iteration — when to prefer recursion?', body:'In problems like tree traversals, recursion feels natural. But is there any rule of thumb?', status:'answered', replies:[
    { author:'Prof. Sneha Nair', time:'1 day ago', text:'Prefer recursion when the problem has a naturally recursive structure (trees, divide-and-conquer). Prefer iteration for performance-critical and stack-sensitive code.' }
  ], time:'2 days ago' },
  { id:3, subjectId:'la', title:'Geometric meaning of eigenvalues?', body:'Can someone explain eigenvalues with a visual intuition?', status:'open', replies:[], time:'5 hours ago' },
  { id:4, subjectId:'ai', title:'What is RAG in the context of LLMs?', body:'I have heard the term RAG many times. What does it actually do?', status:'open', replies:[], time:'1 day ago' },
  { id:5, subjectId:'ld', title:'Docker vs virtual machines — what is the real difference?', body:'Is it just about size, or is there something deeper?', status:'open', replies:[], time:'2 days ago' }
];

const STUDENTS = [
  { name:'Aarav Mehta', email:'aarav.mehta@student.brainforge.edu', year:'2nd Year', batch:'CS-2024', attendance:92, status:'active' },
  { name:'Diya Kapoor', email:'diya.kapoor@student.brainforge.edu', year:'2nd Year', batch:'CS-2024', attendance:88, status:'active' },
  { name:'Kabir Singh', email:'kabir.singh@student.brainforge.edu', year:'3rd Year', batch:'CS-2023', attendance:76, status:'active' },
  { name:'Meera Iyer', email:'meera.iyer@student.brainforge.edu', year:'1st Year', batch:'CS-2025', attendance:95, status:'active' },
  { name:'Rohan Verma', email:'rohan.verma@student.brainforge.edu', year:'2nd Year', batch:'CS-2024', attendance:64, status:'low' }
];

const getSubject = id => SUBJECTS.find(s=>s.id===id);
const getFaculty = id => FACULTY[id];
function initials(name){ return String(name||'?').split(' ').map(w=>w[0]).filter(Boolean).slice(0,2).join('').toUpperCase() || '?'; }
function pct(x,y){ return y ? Math.round(x/y*100) : 0; }
function fmtDate(d){ return new Date(d).toLocaleDateString('en-US',{month:'short',day:'numeric'}); }
function calcOverallAttendance(){
  let p=0,t=0;
  SUBJECTS.forEach(s=>{ p+=s.attendance.present; t+=s.attendance.total; });
  return pct(p,t);
}
function avgProgress(){
  return Math.round(SUBJECTS.reduce((a,s)=>a+s.progress,0)/SUBJECTS.length);
}
function totalTests(){ return Object.keys(QUESTIONS).length; }

function getResults(){ return safeParse(localStorage.getItem('bf_results')) || {}; }
function saveResult(testId, result){
  const r = getResults(); r[testId] = result;
  localStorage.setItem('bf_results', JSON.stringify(r));
}

/* ============================================================
   LANDING
   ============================================================ */
function renderLanding(){
  return landingNav() + '<main>'+heroSection()+featureSection('lectures')+featureSection('notes')+featureSection('syllabus')+featureSection('tests')+featureSection('analysis')+featureSection('doubts')+finalCTA()+'</main>' + landingFooter();
}

function landingNav(){
  return '<header class="nav"><div class="nav-inner">'+
    '<a href="#/" class="logo"><span class="logo-mark">B</span>BrainForge</a>'+
    '<nav class="nav-links"><a href="#features">Features</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a></nav>'+
    '<div class="nav-actions">'+
      '<button class="theme-toggle" aria-label="Toggle theme" data-theme-toggle>'+(state.theme==='light'?I.moon:I.sun)+'</button>'+
      '<a href="#/login" class="btn btn-ghost btn-sm hide-sm">Login</a>'+
      '<a href="#/signup" class="btn btn-primary btn-sm"><span>Sign Up</span></a>'+
      '<a href="#/admin-login" class="btn btn-ghost btn-sm hide-sm">Admin</a>'+
      '<button class="nav-burger" aria-label="Open menu">'+I.menu+'</button>'+
    '</div></div></header>';
}

function heroSection(){
  return '<section class="hero"><div class="container"><div class="hero-grid">'+
    '<div class="reveal">'+
      '<span class="eyebrow">Trusted academic learning platform</span>'+
      '<h1 class="h1">A calmer way to <span class="grad">learn, practise, and excel</span>.</h1>'+
      '<p class="lead">BrainForge brings your lectures, notes, syllabus, mock tests, attendance and doubts into one clean workspace — so you can focus on what actually moves your grade.</p>'+
      '<div class="hero-cta"><a href="#/signup" class="btn btn-primary btn-lg">'+I.arrowRight+' Get started free</a><a href="#/login" class="btn btn-ghost btn-lg">'+I.play+' Sign in</a></div>'+
      '<div class="hero-stats"><div class="hero-stat"><div class="num">8</div><div class="lbl">Subjects covered</div></div><div class="hero-stat"><div class="num">2k+</div><div class="lbl">Practice questions</div></div><div class="hero-stat"><div class="num">94%</div><div class="lbl">Student satisfaction</div></div></div>'+
      '<div class="trust"><div class="dots"><span style="background:#2563eb">A</span><span style="background:#059669">D</span><span style="background:#7c3aed">K</span><span style="background:#f59e0b">M</span></div>Loved by students across 20+ campuses</div>'+
    '</div>'+
    '<div class="reveal"><div class="mock" aria-hidden="true">'+
      '<div class="mock-top"><span class="mock-dot" style="background:#ef4444"></span><span class="mock-dot" style="background:#f59e0b"></span><span class="mock-dot" style="background:#10b981"></span><div class="mock-search"></div></div>'+
      '<div class="mock-grid">'+
        '<div class="mock-card"><div class="tiny muted">Digital Logic</div><div class="bar fill" style="width:68%"></div></div>'+
        '<div class="mock-card"><div class="tiny muted">Python</div><div class="bar fill" style="width:81%"></div></div>'+
        '<div class="mock-card"><div class="tiny muted">AI Landscape</div><div class="bar fill" style="width:72%"></div></div>'+
        '<div class="mock-card"><div class="tiny muted">Linear Algebra</div><div class="bar fill" style="width:60%"></div></div>'+
      '</div>'+
      '<div class="mock-chart"><div class="col" style="height:55%"></div><div class="col" style="height:70%"></div><div class="col alt" style="height:45%"></div><div class="col" style="height:85%"></div><div class="col" style="height:60%"></div><div class="col alt" style="height:78%"></div><div class="col" style="height:95%"></div></div>'+
    '</div></div>'+
  '</div></div></section>';
}

function featureSection(kind){
  const data = {
    lectures:{
      badge:'Recorded Lectures', icon:I.video,
      title:'Lecture recordings that respect your time.',
      text:'Every class is recorded and organised by subject and topic. Pick up exactly where you left off, or skip ahead to the part you actually need.',
      points:['Auto-sorted by subject & topic','Resume from where you left off','Watch history and completion tracking'],
      visual:'<div class="video-frame"><div class="play">'+I.play+'</div><div class="strip"><div class="bar"></div><span class="tiny" style="color:#fff;opacity:.85">12:34 / 48:12</span></div></div>'+
        '<div class="mt-3"><div class="doc"><div class="doc-icon" style="width:34px;height:40px">▶</div><div class="doc-info"><div class="t">Karnaugh Map Simplification</div><div class="s">41:05 · Watched</div></div></div></div>'
    },
    notes:{
      badge:'Lecture Notes', icon:I.note,
      title:'Notes you can actually find when you need them.',
      text:'Every lecture has clean, downloadable notes. Search across all subjects, and keep a tidy personal library instead of screenshots.',
      points:['One-click view & download','Searchable by topic','Formula sheets & practice sets'],
      visual:'<div class="doc"><div class="doc-icon">PDF</div><div class="doc-info"><div class="t">Unit 1 — Boolean Algebra</div><div class="s">42 pages · 2.4 MB</div></div>'+I.download+'</div>'+
        '<div class="doc mt-2"><div class="doc-icon">PDF</div><div class="doc-info"><div class="t">Problem Set — K-Maps</div><div class="s">18 pages · 0.8 MB</div></div>'+I.download+'</div>'+
        '<div class="doc mt-2"><div class="doc-icon">PDF</div><div class="doc-info"><div class="t">Formula Sheet — Full Semester</div><div class="s">6 pages · 0.4 MB</div></div>'+I.download+'</div>'
    },
    syllabus:{
      badge:'Syllabus Tracking', icon:I.syllabus,
      title:'Know exactly how much is left — for every subject.',
      text:'The full syllabus is broken into modules and topics. Mark things as done and get a live picture of your progress, subject by subject.',
      points:['Module-wise breakdown','Live progress tracking','Every subject in one view'],
      visual:'<div class="card-flat">'+
        '<div class="syll-row"><span class="syll-check">'+I.check+'</span><span class="small">Number Systems & Boolean Algebra</span></div>'+
        '<div class="syll-row"><span class="syll-check">'+I.check+'</span><span class="small">Combinational Circuits</span></div>'+
        '<div class="syll-row"><span class="syll-check pending">'+I.check+'</span><span class="small muted">Sequential Circuits</span></div>'+
        '<div class="syll-row"><span class="syll-check pending">'+I.check+'</span><span class="small muted">Memory & Programmable Logic</span></div>'+
        '<div class="progress mt-3"><div class="progress-fill" style="width:50%"></div></div>'+
        '<div class="row-between mt-1"><span class="tiny muted">2 of 4 modules complete</span><span class="tiny" style="color:var(--primary);font-weight:700">50%</span></div>'+
      '</div>'
    },
    tests:{
      badge:'Mock Tests', icon:I.test,
      title:'Practice that feels like the real thing.',
      text:'Timed mock tests with a question palette, mark-for-review, and auto-save. Everything a real exam expects, without the stress.',
      points:['Timer & auto-submit','Question palette & review flags','Auto-save on every action'],
      visual:'<div class="row-between mb-2"><span class="tiny muted">Question 3 of 10</span><span class="badge badge-amber">'+I.clock+' 24:11</span></div>'+
        '<div class="palette mb-3">'+
          '<div class="q done">1</div><div class="q done">2</div><div class="q cur">3</div><div class="q">4</div><div class="q mark">5</div>'+
          '<div class="q">6</div><div class="q">7</div><div class="q">8</div><div class="q">9</div><div class="q">10</div>'+
        '</div>'+
        '<div class="small" style="font-weight:600">Which is a universal gate?</div>'+
        '<div class="option mt-2" style="padding:10px 12px"><span class="k">A</span><span class="t small">AND</span></div>'+
        '<div class="option mt-1" style="padding:10px 12px"><span class="k">B</span><span class="t small">OR</span></div>'+
        '<div class="option selected mt-1" style="padding:10px 12px"><span class="k">C</span><span class="t small">NAND</span></div>'
    },
    analysis:{
      badge:'Test Analysis', icon:I.chart,
      title:'Turn every test into a clear next step.',
      text:'See your score, accuracy, and time — then dive into topic-wise breakdowns and a question-by-question review that actually teaches you.',
      points:['Topic-wise performance','Question-level review','Visual, honest feedback'],
      visual:'<div class="analysis-chart">'+
        '<div class="col" style="height:70%" data-l="Algebra"></div>'+
        '<div class="col alt" style="height:45%" data-l="Circuits"></div>'+
        '<div class="col" style="height:90%" data-l="Gates"></div>'+
        '<div class="col alt" style="height:60%" data-l="Seq."></div>'+
        '<div class="col" style="height:80%" data-l="Memory"></div>'+
      '</div>'+
      '<div style="height:22px"></div>'+
      '<div class="row-between"><span class="small muted">Accuracy</span><span class="small" style="color:var(--secondary);font-weight:700">78%</span></div>'+
      '<div class="progress mt-1"><div class="progress-fill green" style="width:78%"></div></div>'
    },
    doubts:{
      badge:'Doubts & Support', icon:I.doubt,
      title:'Ask, get answered, and move on.',
      text:'Post a doubt, tag it to a subject, and follow it through to a clear answer from faculty. No more WhatsApp scrolls.',
      points:['Subject-tagged doubts','Faculty replies','Open / answered tracking'],
      visual:'<div class="doubt-card"><div class="doubt-avatar">AS</div><div style="flex:1;min-width:0">'+
        '<div class="small" style="font-weight:600">Why is NAND universal?</div>'+
        '<div class="tiny muted" style="margin-top:3px">Digital Logic Design · 3 hours ago</div>'+
        '<div class="reply mt-2" style="font-size:.8rem;padding:9px">NOT is NAND with both inputs tied. AND = NAND + NOT. OR = invert both, then NAND — using De Morgan\'s theorem.</div>'+
      '</div></div>'+
      '<div class="doubt-card"><div class="doubt-avatar">SK</div><div style="flex:1;min-width:0">'+
        '<div class="small" style="font-weight:600">Recursion vs iteration — when?</div>'+
        '<div class="tiny muted" style="margin-top:3px">Python Programming · 1 day ago</div>'+
        '<div class="row mt-2"><span class="badge badge-green">'+I.check+' Answered</span></div>'+
      '</div></div>'
    }
  }[kind];

  const reverse = ['notes','tests','doubts'].includes(kind);
  return '<section class="section '+(reverse?'section-alt':'')+'" id="'+kind+'"><div class="container"><div class="feature '+(reverse?'reverse':'')+'">'+
    '<div class="reveal">'+
      '<span class="feature-badge">'+data.icon+data.badge+'</span>'+
      '<h2 class="h2">'+data.title+'</h2>'+
      '<p>'+data.text+'</p>'+
      '<ul class="feature-list">'+data.points.map(p=>'<li><span class="tick">'+I.check+'</span><span>'+p+'</span></li>').join('')+'</ul>'+
    '</div>'+
    '<div class="feature-visual reveal"><div class="visual-card subtle">'+data.visual+'</div></div>'+
  '</div></div></section>';
}

function finalCTA(){
  return '<section class="section" id="pricing"><div class="container"><div class="cta-final reveal">'+
    '<h2 class="h2">Ready to make this semester calmer?</h2>'+
    '<p>Join thousands of students using BrainForge to learn consistently, practice deliberately, and walk into exams with clarity.</p>'+
    '<div class="row" style="justify-content:center;gap:12px;flex-wrap:wrap">'+
      '<a href="#/signup" class="btn btn-lg btn-ghost" style="background:#fff;color:#1d4ed8;border-color:#fff">Create free account '+I.arrowRight+'</a>'+
      '<a href="#/login" class="btn btn-lg btn-ghost">Sign in</a>'+
    '</div>'+
  '</div></div></section>';
}

function landingFooter(){
  return '<footer class="footer"><div class="container">'+
    '<div class="footer-grid">'+
      '<div><a href="#/" class="logo mb-2"><span class="logo-mark">B</span>BrainForge</a>'+
        '<p class="small muted" style="max-width:280px">A calm, professional learning platform for students — lectures, notes, syllabus, tests, and insights in one place.</p>'+
        '<div class="footer-contact mt-3">'+I.mail+' hello@brainforge.edu<br>'+I.phone+' +91 90000 00000</div>'+
      '</div>'+
      '<div><h4>Product</h4><ul><li><a href="#lectures">Lectures</a></li><li><a href="#notes">Notes</a></li><li><a href="#tests">Mock Tests</a></li><li><a href="#analysis">Analysis</a></li></ul></div>'+
      '<div><h4>Company</h4><ul><li><a href="#">About</a></li><li><a href="#">Careers</a></li><li><a href="#">Contact</a></li><li><a href="#">Blog</a></li></ul></div>'+
      '<div><h4>Legal</h4><ul><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms of Service</a></li><li><a href="#">Cookie Policy</a></li><li><a href="#">Accessibility</a></li></ul></div>'+
    '</div>'+
    '<div class="footer-bottom"><span>© '+new Date().getFullYear()+' BrainForge. All rights reserved.</span><span>Made for learners, with care.</span></div>'+
  '</div></footer>';
}

/* ============================================================
   AUTH
   ============================================================ */
function renderAuth(page){
  const isAdminPage = page === 'admin-login';
  const isSignup = page === 'signup';
  const title = isAdminPage ? 'Administrator Login' : isSignup ? 'Create your account' : 'Welcome back';
  const subtitle = isAdminPage ? 'Sign in to the BrainForge admin console.' : isSignup ? 'Get started with your free BrainForge account.' : 'Sign in to continue your learning journey.';
  return '<div class="auth-wrap"><aside class="auth-aside">'+
    '<a href="#/" class="logo" style="color:#fff"><span class="logo-mark">B</span>BrainForge</a>'+
    '<h2>'+(isAdminPage ? 'Administer with clarity.' : isSignup ? 'Build a smarter semester.' : 'Welcome back to focus.')+'</h2>'+
    '<p>'+(isAdminPage ? 'Manage students, faculty, subjects, tests and announcements from a single, focused console.' : 'A calm, professional workspace that keeps your lectures, notes, syllabus and progress in one place.')+'</p>'+
    '<ul class="auth-features">'+
      (isAdminPage
        ? ['Manage students & faculty','Publish announcements','Track engagement and analytics']
        : ['8 subjects, one dashboard','Timed mock tests & analysis','Ask subject-tagged doubts','Track attendance & progress']
      ).map(f=>'<li><span class="tick">'+I.check+'</span>'+f+'</li>').join('')+
    '</ul>'+
    '<div class="mt-4 small" style="color:rgba(255,255,255,.7)">'+(isAdminPage?'Secure admin access · BrainForge':'Trusted by 20+ campuses')+'</div>'+
  '</aside><main class="auth-main"><div class="auth-box">'+
    '<a href="#/" class="back">'+I.arrowLeft+' Back to home</a>'+
    '<h1>'+title+'</h1><p class="sub">'+subtitle+'</p>'+
    '<div class="role-switch">'+
      '<a href="#/login" class="'+(page==='login'?'active':'')+'">Student</a>'+
      '<a href="#/signup" class="'+(page==='signup'?'active':'')+'">Sign Up</a>'+
      '<a href="#/admin-login" class="'+(page==='admin-login'?'active':'')+'">Admin</a>'+
    '</div>'+
    '<form id="authForm" novalidate>'+
      (isSignup ? '<div class="field"><label for="name">Full name</label><div class="input-wrap"><input class="input" id="name" name="name" type="text" placeholder="Aarav Mehta" autocomplete="name"></div><div class="field-error">Please enter your name.</div></div>' : '')+
      '<div class="field"><label for="email">'+(isAdminPage?'Admin email':'Email address')+'</label><div class="input-wrap"><input class="input" id="email" name="email" type="email" placeholder="'+(isAdminPage?'admin@brainforge.edu':'you@example.com')+'" autocomplete="email"></div><div class="field-error">Please enter a valid email address.</div></div>'+
      '<div class="field"><label for="password">Password</label><div class="input-wrap"><input class="input" id="password" name="password" type="password" placeholder="••••••••" autocomplete="'+(isSignup?'new-password':'current-password')+'"><button type="button" class="input-icon-btn" id="togglePw" aria-label="Show password">'+I.eye+'</button></div><div class="field-error">Password must be at least 6 characters.</div></div>'+
      (isSignup ? '<div class="field"><label for="confirm">Confirm password</label><div class="input-wrap"><input class="input" id="confirm" name="confirm" type="password" placeholder="••••••••" autocomplete="new-password"></div><div class="field-error">Passwords do not match.</div></div>' : '')+
      (!isSignup ? '<div class="form-row"><label class="checkbox"><input type="checkbox" id="remember" checked> Remember me</label><a class="link" data-forgot>Forgot password?</a></div>' : '<div class="form-row"><label class="checkbox"><input type="checkbox" id="terms"> I agree to the Terms & Privacy Policy</label></div>')+
      '<button type="submit" class="btn btn-primary btn-block btn-lg">'+(isSignup?'Create account':'Sign in')+' '+I.arrowRight+'</button>'+
    '</form>'+
    (isAdminPage ? '<p class="small muted text-center mt-3">Student? <a href="#/login" class="link">Sign in here</a></p>' :
      isSignup ? '<p class="small muted text-center mt-3">Already have an account? <a href="#/login" class="link">Sign in</a></p>' :
      '<p class="small muted text-center mt-3">New to BrainForge? <a href="#/signup" class="link">Create an account</a></p>')+
    (!isAdminPage && !isSignup ? '<div class="auth-divider">or</div><a href="#/admin-login" class="btn btn-ghost btn-block">'+I.shield+' Administrator Login</a>' : '')+
  '</div></main></div>';
}

async function initAuthForm(page){
  const form = $('#authForm');
  if (!form) return;

  const toggle = $('#togglePw');
  if (toggle) toggle.addEventListener('click', () => {
    const pw = $('#password');
    const on = pw.type === 'password';
    pw.type = on ? 'text' : 'password';
    toggle.innerHTML = on ? I.eyeOff : I.eye;
  });

  const forgot = $('[data-forgot]');
  if (forgot) forgot.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = $('#email').value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast('Enter your email first, then click "Forgot password".', 'error');
      $('#email').focus();
      return;
    }
    try {
      await requestPasswordReset(email);
      toast('Password reset email sent. Check your inbox.', 'success');
    } catch (err) {
      toast(friendlyError(err), 'error');
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email    = $('#email');
    const password = $('#password');
    const name     = page === 'signup' ? $('#name')    : null;
    const confirm  = page === 'signup' ? $('#confirm') : null;
    const submitBtn = form.querySelector('button[type="submit"]');
    let ok = true;

    const setErr = (el, bad) => {
      if (!el) return;
      const f = el.closest('.field');
      if (f) f.classList.toggle('invalid', bad);
      if (bad) ok = false;
    };

    setErr(email, !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()));
    if (name)    setErr(name, !name.value.trim());
    setErr(password, password.value.length < 6);
    if (confirm) setErr(confirm, confirm.value !== password.value || !confirm.value);

    if (!ok) return;

    const originalLabel = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Please wait…';

    try {
      if (page === 'signup'){
        const res = await signUp({
          name: name.value.trim(),
          email: email.value.trim(),
          password: password.value,
        });
        if (res.session){
          state.user = res.user;
          toast('Welcome to BrainForge, ' + res.user.name.split(' ')[0] + '!');
          location.hash = '#/dashboard';
        } else {
          toast('Account created. Check your email to confirm, then sign in.', 'info');
          setTimeout(() => { location.hash = '#/login'; }, 1400);
        }
      }
      else if (page === 'admin-login'){
        const user = await adminSignIn({
          email: email.value.trim(),
          password: password.value,
        });
        state.user = user;
        toast('Admin signed in.');
        location.hash = '#/admin';
      }
      else {
        const user = await signIn({
          email: email.value.trim(),
          password: password.value,
        });
        state.user = user;
        toast('Welcome back, ' + user.name.split(' ')[0] + '!');
        location.hash = user.role === 'admin' ? '#/admin' : '#/dashboard';
      }
    } catch (err) {
      toast(friendlyError(err), 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalLabel;
    }
  });
}
/* ============================================================
   RESET PASSWORD
   ============================================================ */
function renderResetPassword(){
  return '<div class="auth-wrap" style="grid-template-columns:1fr"><main class="auth-main"><div class="auth-box">'+
    '<a href="#/" class="back">'+I.arrowLeft+' Back to home</a>'+
    '<h1>Set a new password</h1><p class="sub">Choose a new password for your account.</p>'+
    '<form id="resetForm" novalidate>'+
      '<div class="field"><label for="newPassword">New password</label><div class="input-wrap"><input class="input" id="newPassword" type="password" placeholder="••••••••"><button type="button" class="input-icon-btn" id="toggleResetPw">'+I.eye+'</button></div><div class="field-error">Password must be at least 6 characters.</div></div>'+
      '<div class="field"><label for="confirmPassword">Confirm new password</label><input class="input" id="confirmPassword" type="password" placeholder="••••••••"><div class="field-error">Passwords do not match.</div></div>'+
      '<button type="submit" class="btn btn-primary btn-block btn-lg">Update password '+I.arrowRight+'</button>'+
    '</form></div></main></div>';
}

function initResetPasswordForm(){
  const form = $('#resetForm');
  if (!form) return;

  const toggle = $('#toggleResetPw');
  if (toggle) toggle.addEventListener('click', () => {
    const pw = $('#newPassword');
    const on = pw.type === 'password';
    pw.type = on ? 'text' : 'password';
    toggle.innerHTML = on ? I.eyeOff : I.eye;
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const pw  = $('#newPassword');
    const cfm = $('#confirmPassword');
    let ok = true;
    const setErr = (el, bad) => { if(!el) return; el.closest('.field').classList.toggle('invalid', bad); if(bad) ok = false; };
    setErr(pw,  pw.value.length < 6);
    setErr(cfm, cfm.value !== pw.value || !cfm.value);
    if (!ok) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalLabel = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Updating…';

    try {
      await updatePassword(pw.value);
      toast('Password updated. You are now signed in.', 'success');
      location.hash = '#/dashboard';
    } catch (err) {
      toast(friendlyError(err), 'error');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalLabel;
    }
  });
}

function studentShell(active, content){
  const u = currentUser();
  return '<div class="app-shell">'+
    '<aside class="sidebar" id="sidebar"><div class="sidebar-head"><a href="#/dashboard" class="logo"><span class="logo-mark">B</span>BrainForge</a></div>'+
      '<nav class="sidebar-nav">'+
        '<div class="nav-section-label">Learning</div>'+
        navItem('dashboard','Dashboard',active,I.dashboard)+
        navItem('lectures','Lectures',active,I.video)+
        navItem('notes','Notes',active,I.note)+
        navItem('syllabus','Syllabus',active,I.syllabus)+
        navItem('mock-tests','Mock Tests',active,I.test)+
        navItem('test-analysis','Test Analysis',active,I.chart)+
        '<div class="nav-section-label">Support</div>'+
        navItem('doubts','Doubts',active,I.doubt)+
        navItem('attendance','Attendance',active,I.attendance)+
        '<div class="nav-section-label">Account</div>'+
        navItem('profile','Profile',active,I.profile)+
        navItem('settings','Settings',active,I.settings)+
      '</nav>'+
      '<div class="sidebar-foot"><a href="#/logout" class="nav-item" style="color:var(--red-500)">'+I.logout+'<span>Logout</span></a></div>'+
    '</aside>'+
    '<div class="sidebar-backdrop" id="sidebarBackdrop"></div>'+
    '<div class="main-area">'+
      '<header class="topbar">'+
        '<button class="topbar-burger" id="topBurger" aria-label="Open menu">'+I.menu+'</button>'+
        '<div class="top-search">'+I.search+'<input type="search" placeholder="Search subjects, lectures, notes…" aria-label="Search"></div>'+
        '<div class="top-actions">'+
          '<button class="theme-toggle" data-theme-toggle aria-label="Toggle theme">'+(state.theme==='light'?I.moon:I.sun)+'</button>'+
          '<button class="icon-btn" aria-label="Notifications" data-notify>'+I.bell+'<span class="dot"></span></button>'+
          '<button class="profile-btn" id="profileBtn" aria-label="Profile menu"><div class="avatar">'+initials(u.name)+'</div><div class="hide-sm" style="text-align:left"><div class="nm">'+esc(u.name)+'</div><div class="rl">Student</div></div><span class="chev">'+I.chevronDown+'</span></button>'+
        '</div>'+
      '</header>'+
      '<main class="content">'+content+'</main>'+
    '</div>'+
  '</div>';
}

function adminShell(active, content){
  const u = currentUser();
  return '<div class="app-shell">'+
    '<aside class="sidebar" id="sidebar"><div class="sidebar-head"><a href="#/admin" class="logo"><span class="logo-mark" style="background:linear-gradient(135deg,#059669,#2563eb)">B</span>BrainForge</a><div class="tiny muted mt-1" style="padding-left:2px">Admin Console</div></div>'+
      '<nav class="sidebar-nav">'+
        '<div class="nav-section-label">Overview</div>'+
        navItemAdmin('admin','Overview',active,I.dashboard)+
        navItemAdmin('admin/students','Students',active,I.users)+
        navItemAdmin('admin/faculty','Faculty',active,I.profile)+
        navItemAdmin('admin/subjects','Subjects',active,I.book)+
        navItemAdmin('admin/content','Content',active,I.layers)+
        navItemAdmin('admin/tests','Tests',active,I.test)+
        navItemAdmin('admin/attendance','Attendance',active,I.attendance)+
        navItemAdmin('admin/announcements','Announcements',active,I.megaphone)+
        navItemAdmin('admin/analytics','Analytics',active,I.chart)+
      '</nav>'+
      '<div class="sidebar-foot"><a href="#/logout" class="nav-item" style="color:var(--red-500)">'+I.logout+'<span>Logout</span></a></div>'+
    '</aside>'+
    '<div class="sidebar-backdrop" id="sidebarBackdrop"></div>'+
    '<div class="main-area">'+
      '<header class="topbar">'+
        '<button class="topbar-burger" id="topBurger" aria-label="Open menu">'+I.menu+'</button>'+
        '<div class="top-search">'+I.search+'<input type="search" placeholder="Search students, faculty, subjects…" aria-label="Search"></div>'+
        '<div class="top-actions">'+
          '<button class="theme-toggle" data-theme-toggle aria-label="Toggle theme">'+(state.theme==='light'?I.moon:I.sun)+'</button>'+
          '<button class="icon-btn" aria-label="Notifications" data-notify>'+I.bell+'</button>'+
          '<button class="profile-btn"><div class="avatar" style="background:linear-gradient(135deg,#059669,#2563eb)">'+initials(u.name||'Admin')+'</div><div class="hide-sm" style="text-align:left"><div class="nm">'+esc(u.name||'Admin')+'</div><div class="rl">Administrator</div></div><span class="chev">'+I.chevronDown+'</span></button>'+
        '</div>'+
      '</header>'+
      '<main class="content">'+content+'</main>'+
    '</div>'+
  '</div>';
}

function navItem(id, label, active, icon){
  return '<a href="#/'+id+'" class="nav-item '+(active===id?'active':'')+'">'+icon+'<span>'+label+'</span></a>';
}
function navItemAdmin(path, label, active, icon){
  return '<a href="#/'+path+'" class="nav-item '+(active===path?'active':'')+'">'+icon+'<span>'+label+'</span></a>';
}

/* ============================================================
   STUDENT PAGES
   ============================================================ */
function renderStudent(parts){
  const page = parts[0] || 'dashboard';
  switch(page){
    case 'dashboard': return studentShell('dashboard', pageDashboard());
    case 'lectures':  return studentShell('lectures', pageLectures());
    case 'notes':     return studentShell('notes', pageNotes());
    case 'syllabus':  return studentShell('syllabus', pageSyllabus());
    case 'mock-tests':return studentShell('mock-tests', pageMockTests());
    case 'test-analysis': return studentShell('test-analysis', pageTestAnalysisList());
    case 'doubts':    return studentShell('doubts', pageDoubts());
    case 'attendance':return studentShell('attendance', pageAttendance());
    case 'profile':   return studentShell('profile', pageProfile());
    case 'settings':  return studentShell('settings', pageSettings());
    case 'subject':   return studentShell('dashboard', pageSubject(parts[1]));
    case 'test':      return pageTest(parts[1]);
    case 'analysis':  return studentShell('test-analysis', pageAnalysis(parts[1]));
    default:          return studentShell('dashboard', pageDashboard());
  }
}

function pageDashboard(){
  const u = currentUser();
  const results = getResults();
  return '<div class="page-head"><div><h1>Good to see you, '+esc(u.name.split(' ')[0])+'.</h1><p class="sub">Here\'s a snapshot of your learning across '+SUBJECTS.length+' subjects this semester.</p></div>'+
    '<div class="row"><a href="#/mock-tests" class="btn btn-ghost btn-sm">'+I.test+' Mock Tests</a><a href="#/attendance" class="btn btn-primary btn-sm">'+I.attendance+' Attendance</a></div></div>'+
    '<div class="grid-3 mb-4">'+
      statCard(I.book, 'Overall syllabus progress', avgProgress()+'%', 'across all subjects', 'blue')+
      statCard(I.target, 'Tests taken', Object.keys(results).length+' / '+totalTests(), 'mock tests completed', 'green')+
      statCard(I.attendance, 'Overall attendance', calcOverallAttendance()+'%', 'this semester', 'amber')+
    '</div>'+
    '<div class="row-between mb-3"><h2 class="h3">Your subjects</h2><span class="small muted">'+SUBJECTS.length+' subjects this semester</span></div>'+
    '<div class="subjects-grid">'+SUBJECTS.map(s=>subjectCard(s)).join('')+'</div>'+
    '<div class="row-between mt-6 mb-3"><h2 class="h3">Recent doubts</h2><a href="#/doubts" class="small link">View all →</a></div>'+
    '<div class="card">'+DOUBTS.slice(0,3).map(d=>{
      const subj = getSubject(d.subjectId);
      return '<div class="row-between" style="padding:12px 0;border-bottom:1px solid var(--border)"><div style="min-width:0"><div class="small" style="font-weight:600">'+esc(d.title)+'</div><div class="tiny muted mt-1">'+esc(subj?subj.name:'')+' · '+esc(d.time)+'</div></div><span class="badge '+(d.status==='answered'?'badge-green':'badge-amber')+'">'+(d.status==='answered'?'Answered':'Open')+'</span></div>';
    }).join('')+'</div>';
}

function statCard(icon, label, value, sub, tone){
  const bg = tone==='green' ? 'var(--secondary-tint)' : tone==='amber' ? 'var(--amber-50)' : 'var(--primary-tint)';
  const fg = tone==='green' ? 'var(--secondary)' : tone==='amber' ? 'var(--amber-600)' : 'var(--primary)';
  return '<div class="card">'+
    '<div class="row mb-2" style="gap:12px"><div style="width:42px;height:42px;border-radius:11px;display:grid;place-items:center;background:'+bg+';color:'+fg+'">'+icon+'</div><div class="small muted">'+label+'</div></div>'+
    '<div style="font-family:var(--font-head);font-size:1.7rem;font-weight:800">'+value+'</div>'+
    '<div class="tiny muted mt-1">'+sub+'</div>'+
  '</div>';
}

function subjectCard(s){
  const fac = getFaculty(s.facultyId);
  const hue = s.hue;
  const bgIcon = 'hsl('+hue+', 85%, 94%)';
  const fgIcon = 'hsl('+hue+', 70%, 40%)';
  return '<a href="#/subject/'+s.id+'" class="subject-card">'+
    '<div class="subj-top"><div class="subj-icon" style="background:'+bgIcon+';color:'+fgIcon+'">'+initials(s.name)+'</div><span class="badge badge-neutral">'+s.code+'</span></div>'+
    '<h3>'+esc(s.name)+'</h3>'+
    '<div class="faculty">'+I.profile+' '+esc(fac.name)+'</div>'+
    '<div class="meta"><span>Progress</span><span style="font-weight:700;color:var(--text)">'+s.progress+'%</span></div>'+
    '<div class="progress"><div class="progress-fill" style="width:'+s.progress+'%"></div></div>'+
    '<div class="meta" style="margin-top:14px;margin-bottom:0"><span>Next test</span><span>'+fmtDate(s.nextTest)+'</span></div>'+
    '<div class="actions"><span class="btn btn-ghost btn-sm">Open '+I.arrowRight+'</span></div>'+
  '</a>';
}

function pageLectures(){
  return '<div class="page-head"><div><h1>Lectures</h1><p class="sub">All recorded lectures across your subjects, grouped and searchable.</p></div></div>'+
    SUBJECTS.map(s=>'<div class="mb-4"><div class="row-between mb-2"><h3 class="h3" style="font-size:1.05rem">'+esc(s.name)+'</h3><a href="#/subject/'+s.id+'" class="small link">Open subject →</a></div>'+
      s.lectures.map(l=>'<div class="list-item"><div class="li-icon green">'+I.play+'</div><div class="li-info"><div class="t">'+esc(l.title)+'</div><div class="s">'+l.duration+' · '+l.date+' '+(l.watched?'· Watched':'')+'</div></div><div class="li-actions"><button class="btn btn-ghost btn-sm" data-play>'+I.play+' Play</button></div></div>').join('')+
    '</div>').join('');
}

function pageNotes(){
  return '<div class="page-head"><div><h1>Lecture Notes</h1><p class="sub">View and download notes for every subject.</p></div></div>'+
    SUBJECTS.map(s=>'<div class="mb-4"><div class="row-between mb-2"><h3 class="h3" style="font-size:1.05rem">'+esc(s.name)+'</h3><a href="#/subject/'+s.id+'" class="small link">Open subject →</a></div>'+
      s.notes.map(n=>'<div class="list-item"><div class="li-icon">PDF</div><div class="li-info"><div class="t">'+esc(n.title)+'</div><div class="s">'+n.pages+' pages · '+n.size+' · Updated '+n.updated+'</div></div><div class="li-actions"><button class="btn btn-ghost btn-sm" data-view>'+I.eye+' View</button><button class="btn btn-ghost btn-sm" data-download>'+I.download+'</button></div></div>').join('')+
    '</div>').join('');
}

function pageSyllabus(){
  return '<div class="page-head"><div><h1>Syllabus Tracker</h1><p class="sub">See every module and topic across your subjects in one place.</p></div></div>'+
    SUBJECTS.map(s=>'<div class="card mb-3"><div class="row-between mb-3"><div><h3 class="h3" style="font-size:1.05rem">'+esc(s.name)+'</h3><div class="tiny muted mt-1">'+s.syllabus.length+' modules · '+s.progress+'% complete</div></div><a href="#/subject/'+s.id+'" class="btn btn-ghost btn-sm">Open '+I.arrowRight+'</a></div>'+
      '<div class="progress mb-2"><div class="progress-fill" style="width:'+s.progress+'%"></div></div>'+
      s.syllabus.map((m,i)=>'<div class="module '+(i===0?'open':'')+'"><div class="module-head" data-module-toggle><div class="module-num">'+(i+1)+'</div><div class="t"><h4>'+esc(m.title)+'</h4><div class="s">'+m.topics.length+' topics</div></div><span class="chev">'+I.chevronDown+'</span></div><div class="module-body"><ul>'+m.topics.map(t=>'<li>'+esc(t)+'</li>').join('')+'</ul></div></div>').join('')+
    '</div>').join('');
}

function pageMockTests(){
  const results = getResults();
  return '<div class="page-head"><div><h1>Mock Tests</h1><p class="sub">Timed practice tests with auto-save and detailed analysis.</p></div></div>'+
    SUBJECTS.map(s=>{
      const tests = Object.entries(QUESTIONS).filter(([id,q])=>q.subjectId===s.id);
      if(!tests.length) return '';
      return '<div class="mb-4"><div class="row-between mb-2"><h3 class="h3" style="font-size:1.05rem">'+esc(s.name)+'</h3><a href="#/subject/'+s.id+'" class="small link">Open subject →</a></div>'+
        tests.map(([id,q])=>{
          const done = results[id];
          return '<div class="test-card"><div class="tc-icon">'+I.test+'</div><div class="tc-info"><h4>'+esc(q.title)+'</h4><div class="s"><span>'+I.test+' '+q.questions.length+' questions</span><span>'+I.clock+' '+q.duration+' min</span>'+(done?'<span class="badge badge-green">'+I.check+' '+done.score+'/'+done.total+' · '+done.accuracy+'%</span>':'')+'</div></div>'+
            (done
              ? '<div class="li-actions"><a href="#/analysis/'+id+'" class="btn btn-ghost btn-sm">'+I.chart+' View analysis</a><a href="#/test/'+id+'" class="btn btn-primary btn-sm">Reattempt</a></div>'
              : '<a href="#/test/'+id+'" class="btn btn-primary btn-sm">'+I.play+' Start test</a>')+
          '</div>';
        }).join('')+
      '</div>';
    }).join('');
}

function pageTestAnalysisList(){
  const results = getResults();
  const ids = Object.keys(results);
  let body;
  if(ids.length === 0){
    body = emptyState(I.chart, 'No test attempts yet', 'Take a mock test to unlock detailed performance analysis.', '#/mock-tests', 'Browse mock tests');
  } else {
    body = ids.map(id=>{
      const r = results[id];
      const subj = getSubject(r.subjectId);
      return '<div class="test-card"><div class="tc-icon" style="background:var(--secondary-tint);color:var(--secondary)">'+I.chart+'</div><div class="tc-info"><h4>'+esc(r.title)+'</h4><div class="s"><span>'+esc(subj?subj.name:'')+'</span><span>'+I.check+' '+r.score+'/'+r.total+' correct</span><span>'+I.target+' '+r.accuracy+'% accuracy</span><span>'+I.clock+' '+r.timeTaken+'</span></div></div><a href="#/analysis/'+id+'" class="btn btn-primary btn-sm">'+I.chart+' View analysis</a></div>';
    }).join('');
  }
  return '<div class="page-head"><div><h1>Test Analysis</h1><p class="sub">Review your performance across every mock test you\'ve attempted.</p></div></div>'+body;
}

function emptyState(icon, title, text, cta, ctaLabel){
  return '<div class="card"><div class="empty">'+icon+'<h4>'+esc(title)+'</h4><p>'+esc(text)+'</p>'+(cta?'<a href="'+cta+'" class="btn btn-primary mt-3">'+esc(ctaLabel||'Continue')+'</a>':'')+'</div></div>';
}

function pageSubject(subjectId){
  const s = getSubject(subjectId);
  if(!s) return emptyState(I.info,'Subject not found','The subject you are looking for does not exist.','#/dashboard','Back to dashboard');
  const fac = getFaculty(s.facultyId);
  const hue = s.hue;
  const tab = (new URLSearchParams((location.hash.split('?')[1]||''))).get('tab') || 'overview';
  const tabs = ['overview','faculty','syllabus','notes','lectures','tests','attendance'];
  return '<div class="detail-hero"><div class="big-icon" style="background:hsl('+hue+', 85%, 94%);color:hsl('+hue+', 70%, 40%)">'+initials(s.name)+'</div>'+
    '<div style="flex:1;min-width:0"><div class="row mb-1"><span class="badge badge-neutral">'+s.code+'</span><span class="badge badge-blue">'+s.credits+' credits</span></div>'+
      '<h1>'+esc(s.name)+'</h1>'+
      '<div class="meta-row"><span>'+I.profile+' '+esc(fac.name)+'</span><span>'+I.calendar+' Next test: '+fmtDate(s.nextTest)+'</span><span>'+I.trending+' '+s.progress+'% complete</span></div>'+
    '</div>'+
    '<a href="#/dashboard" class="btn btn-ghost btn-sm">'+I.arrowLeft+' All subjects</a>'+
  '</div>'+
  '<div class="tabs">'+tabs.map(t=>'<a href="#/subject/'+s.id+'?tab='+t+'" class="tab '+(tab===t?'active':'')+'">'+(t.charAt(0).toUpperCase()+t.slice(1))+'</a>').join('')+'</div>'+
  renderSubjectTab(s, tab);
}

function renderSubjectTab(s, tab){
  const fac = getFaculty(s.facultyId);
  switch(tab){
    case 'faculty': return subjectFaculty(fac);
    case 'syllabus': return subjectSyllabus(s);
    case 'notes': return subjectNotes(s);
    case 'lectures': return subjectLectures(s);
    case 'tests': return subjectTests(s);
    case 'attendance': return subjectAttendance(s);
    default: return subjectOverview(s, fac);
  }
}

function subjectOverview(s, fac){
  const upcoming = s.lectures.find(l=>!l.watched);
  return '<div class="overview-grid">'+
    '<div class="card"><h3 class="h3" style="font-size:1.05rem;margin-bottom:10px">About this subject</h3>'+
      '<p class="small" style="color:var(--text-muted);line-height:1.7">'+esc(s.overview)+'</p>'+
      '<div class="grid-3 mt-4">'+
        '<div class="stat-mini"><div class="num">'+s.progress+'%</div><div class="lbl">Progress</div></div>'+
        '<div class="stat-mini"><div class="num">'+s.syllabus.length+'</div><div class="lbl">Modules</div></div>'+
        '<div class="stat-mini"><div class="num">'+s.lectures.length+'</div><div class="lbl">Lectures</div></div>'+
      '</div>'+
    '</div>'+
    '<div class="card"><h3 class="h3" style="font-size:1.05rem;margin-bottom:14px">Faculty</h3>'+
      '<div class="row" style="gap:14px"><div class="faculty-avatar" style="width:56px;height:56px;font-size:1.1rem;border-radius:14px">'+initials(fac.name)+'</div><div><div class="small" style="font-weight:700">'+esc(fac.name)+'</div><div class="tiny muted">'+esc(fac.title)+'</div></div></div>'+
      '<div class="faculty-contact mt-3"><span>'+I.mail+' '+esc(fac.email)+'</span><span>'+I.pin+' '+esc(fac.office)+'</span></div>'+
    '</div>'+
  '</div>'+
  '<div class="card mt-3">'+
    '<div class="row-between mb-2"><h3 class="h3" style="font-size:1.05rem">Upcoming</h3></div>'+
    '<div class="row-between" style="padding:12px 0;border-bottom:1px solid var(--border)"><div class="row"><span style="width:36px;height:36px;border-radius:9px;background:var(--primary-tint);color:var(--primary);display:grid;place-items:center">'+I.test+'</span><div><div class="small" style="font-weight:600">Next mock test</div><div class="tiny muted">'+fmtDate(s.nextTest)+'</div></div></div><a href="#/subject/'+s.id+'?tab=tests" class="btn btn-ghost btn-sm">View tests</a></div>'+
    '<div class="row-between" style="padding:12px 0"><div class="row"><span style="width:36px;height:36px;border-radius:9px;background:var(--secondary-tint);color:var(--secondary);display:grid;place-items:center">'+I.video+'</span><div><div class="small" style="font-weight:600">Continue lecture</div><div class="tiny muted">'+(upcoming?esc(upcoming.title):'All caught up')+'</div></div></div><a href="#/subject/'+s.id+'?tab=lectures" class="btn btn-ghost btn-sm">Watch</a></div>'+
  '</div>';
}

function subjectFaculty(fac){
  return '<div class="card"><div class="faculty-card">'+
    '<div class="faculty-avatar">'+initials(fac.name)+'</div>'+
    '<div class="faculty-info" style="flex:1;min-width:0">'+
      '<h3>'+esc(fac.name)+'</h3>'+
      '<div class="role">'+esc(fac.title)+' · '+esc(fac.dept)+'</div>'+
      '<p class="small" style="color:var(--text-muted);line-height:1.7;margin-bottom:14px">'+esc(fac.bio)+'</p>'+
      '<div class="faculty-contact"><span>'+I.mail+' '+esc(fac.email)+'</span><span>'+I.phone+' '+esc(fac.phone)+'</span><span>'+I.pin+' '+esc(fac.office)+'</span></div>'+
    '</div>'+
  '</div></div>';
}

function subjectSyllabus(s){
  return '<div class="card"><div class="row-between mb-3"><h3 class="h3" style="font-size:1.05rem">Syllabus · '+s.syllabus.length+' modules</h3><span class="badge badge-blue">'+s.progress+'% complete</span></div>'+
    '<div class="progress mb-3"><div class="progress-fill" style="width:'+s.progress+'%"></div></div>'+
    s.syllabus.map((m,i)=>'<div class="module '+(i===0?'open':'')+'"><div class="module-head" data-module-toggle><div class="module-num">'+(i+1)+'</div><div class="t"><h4>'+esc(m.title)+'</h4><div class="s">'+m.topics.length+' topics</div></div><span class="chev">'+I.chevronDown+'</span></div><div class="module-body"><ul>'+m.topics.map(t=>'<li>'+esc(t)+'</li>').join('')+'</ul></div></div>').join('')+
  '</div>';
}

function subjectNotes(s){
  return '<div class="card"><div class="row-between mb-3"><h3 class="h3" style="font-size:1.05rem">Lecture Notes · '+s.notes.length+'</h3></div>'+
    s.notes.map(n=>'<div class="list-item"><div class="li-icon">PDF</div><div class="li-info"><div class="t">'+esc(n.title)+'</div><div class="s">'+n.pages+' pages · '+n.size+' · Updated '+n.updated+'</div></div><div class="li-actions"><button class="btn btn-ghost btn-sm" data-view>'+I.eye+' View</button><button class="btn btn-ghost btn-sm" data-download>'+I.download+'</button></div></div>').join('')+
  '</div>';
}

function subjectLectures(s){
  const current = s.lectures[0];
  return '<div class="grid-2" style="grid-template-columns:1.4fr 1fr;gap:20px">'+
    '<div class="card card-flat" style="padding:0;overflow:hidden">'+
      '<div class="video-frame" style="border-radius:0"><div class="play">'+I.play+'</div><div class="strip"><div class="bar"></div><span class="tiny" style="color:#fff;opacity:.85">Video player (demo)</span></div></div>'+
      '<div style="padding:18px"><h3 class="h3" style="font-size:1.05rem">'+esc(current.title)+'</h3><div class="tiny muted mt-1">'+current.duration+' · '+current.date+' · '+esc(s.name)+'</div>'+
        '<div class="row mt-3" style="gap:8px"><button class="btn btn-primary btn-sm" data-play>'+I.play+' Play</button><button class="btn btn-ghost btn-sm" data-mark-watched>'+I.check+' Mark watched</button></div>'+
      '</div>'+
    '</div>'+
    '<div class="card"><h3 class="h3" style="font-size:1.05rem;margin-bottom:14px">All lectures</h3>'+
      s.lectures.map(l=>'<div class="list-item" style="margin-bottom:8px;padding:10px"><div class="li-icon '+(l.watched?'green':'')+'" style="width:34px;height:34px">'+I.play+'</div><div class="li-info"><div class="t small">'+esc(l.title)+'</div><div class="s">'+l.duration+' · '+l.date+'</div></div>'+(l.watched?'<span class="badge badge-green">'+I.check+'</span>':'')+'</div>').join('')+
    '</div>'+
  '</div>';
}

function subjectTests(s){
  const tests = Object.entries(QUESTIONS).filter(([id,q])=>q.subjectId===s.id);
  const results = getResults();
  return '<div class="card"><h3 class="h3" style="font-size:1.05rem;margin-bottom:14px">Available Mock Tests</h3>'+
    tests.map(([id,q])=>{
      const done = results[id];
      return '<div class="test-card"><div class="tc-icon">'+I.test+'</div><div class="tc-info"><h4>'+esc(q.title)+'</h4><div class="s"><span>'+I.test+' '+q.questions.length+' questions</span><span>'+I.clock+' '+q.duration+' min</span>'+(done?'<span class="badge badge-green">'+I.check+' '+done.score+'/'+done.total+' · '+done.accuracy+'%</span>':'')+'</div></div>'+
        (done
          ? '<div class="li-actions"><a href="#/analysis/'+id+'" class="btn btn-ghost btn-sm">'+I.chart+' Analysis</a><a href="#/test/'+id+'" class="btn btn-primary btn-sm">Reattempt</a></div>'
          : '<a href="#/test/'+id+'" class="btn btn-primary btn-sm">'+I.play+' Start</a>')+
      '</div>';
    }).join('')+
  '</div>';
}

function subjectAttendance(s){
  const a = s.attendance;
  const percent = pct(a.present, a.total);
  const circumference = 2 * Math.PI * 54;
  const dash = (percent/100) * circumference;
  const color = percent >= 85 ? 'var(--secondary)' : percent >= 75 ? 'var(--amber-500)' : 'var(--red-500)';
  return '<div class="card">'+
    '<div class="att-hero"><div class="att-ring">'+
      '<svg width="130" height="130" viewBox="0 0 130 130">'+
        '<circle cx="65" cy="65" r="54" fill="none" stroke="var(--bg-subtle)" stroke-width="12"/>'+
        '<circle cx="65" cy="65" r="54" fill="none" stroke="'+color+'" stroke-width="12" stroke-linecap="round" stroke-dasharray="'+dash+' '+circumference+'"/>'+
      '</svg>'+
      '<div class="lbl"><div class="v">'+percent+'%</div><div class="t">Attendance</div></div>'+
    '</div><div>'+
      '<h3 class="h3" style="font-size:1.05rem;margin-bottom:6px">'+(percent>=75?'You are on track':'Attention needed')+'</h3>'+
      '<p class="small" style="color:var(--text-muted)">You\'ve attended <strong>'+a.present+'</strong> out of <strong>'+a.total+'</strong> classes for '+esc(s.name)+'.</p>'+
      '<div class="grid-3 mt-3">'+
        '<div class="stat-mini"><div class="num" style="color:var(--secondary)">'+a.present+'</div><div class="lbl">Present</div></div>'+
        '<div class="stat-mini"><div class="num" style="color:var(--red-500)">'+(a.total-a.present)+'</div><div class="lbl">Absent</div></div>'+
        '<div class="stat-mini"><div class="num">'+a.total+'</div><div class="lbl">Total</div></div>'+
      '</div>'+
    '</div></div>'+
    '<h4 style="font-size:.95rem;margin:20px 0 10px">Recent attendance</h4>'+
    '<div class="att-history">'+a.history.map(h=>'<div class="att-day '+h.status+'"><div class="d">'+h.date+'</div><div class="s">'+h.status+'</div></div>').join('')+'</div>'+
  '</div>';
}

function pageDoubts(){
  return '<div class="page-head"><div><h1>Doubts</h1><p class="sub">Ask subject-tagged doubts and track their status.</p></div><button class="btn btn-primary btn-sm" id="newDoubtBtn">'+I.plus+' Ask a doubt</button></div>'+
    '<div id="doubtList">'+DOUBTS.map(d=>{
      const subj = getSubject(d.subjectId);
      return '<div class="doubt-item"><div class="doubt-head"><div style="min-width:0"><h4>'+esc(d.title)+'</h4><div class="tiny muted mt-1">'+esc(subj?subj.name:'')+' · '+esc(d.time)+'</div></div><span class="badge '+(d.status==='answered'?'badge-green':'badge-amber')+'">'+(d.status==='answered'?'Answered':'Open')+'</span></div>'+
        '<p class="small" style="color:var(--text-muted);line-height:1.6">'+esc(d.body)+'</p>'+
        d.replies.map(r=>'<div class="reply"><strong style="color:var(--text)">'+esc(r.author)+'</strong> · <span class="tiny muted">'+esc(r.time)+'</span><br>'+esc(r.text)+'</div>').join('')+
      '</div>';
    }).join('')+'</div>';
}

function openNewDoubt(){
  const opts = SUBJECTS.map(s=>'<option value="'+s.id+'">'+esc(s.name)+'</option>').join('');
  showModal('<div class="modal"><h3>Ask a doubt</h3><p>Tag a subject and describe your question. Faculty will reply soon.</p>'+
    '<div class="field"><label for="dSubj">Subject</label><select class="input" id="dSubj">'+opts+'</select></div>'+
    '<div class="field"><label for="dTitle">Title</label><input class="input" id="dTitle" placeholder="Short summary of your question"></div>'+
    '<div class="field"><label for="dBody">Details</label><textarea class="input" id="dBody" rows="4" placeholder="Describe your doubt in detail…" style="resize:vertical"></textarea></div>'+
    '<div class="modal-actions"><button class="btn btn-ghost" data-close>Cancel</button><button class="btn btn-primary" id="dSubmit">'+I.send+' Post doubt</button></div></div>');
  $('[data-close]').onclick = closeModal;
  $('#dSubmit').onclick = ()=>{
    const title = $('#dTitle').value.trim();
    const body = $('#dBody').value.trim();
    if(!title || !body){ toast('Please fill in both the title and details.','error'); return; }
    const subjId = $('#dSubj').value;
    DOUBTS.unshift({ id:Date.now(), subjectId:subjId, title, body, status:'open', replies:[], time:'Just now' });
    closeModal();
    toast('Doubt posted — faculty will reply soon.');
    render();
  };
}

function pageAttendance(){
  const overall = calcOverallAttendance();
  return '<div class="page-head"><div><h1>Attendance</h1><p class="sub">Overall attendance across all subjects, with subject-wise detail.</p></div></div>'+
    '<div class="card mb-4"><div class="row-between wrap" style="gap:20px">'+
      '<div><div class="small muted">Overall attendance</div><div style="font-family:var(--font-head);font-size:2.6rem;font-weight:800;line-height:1.1;margin-top:6px">'+overall+'%</div><div class="tiny muted mt-1">'+(overall>=85?'Excellent — keep it up!':overall>=75?'Fair — aim for 85%+':'Below safe threshold')+'</div></div>'+
      '<div style="flex:1;min-width:240px"><div class="progress" style="height:12px"><div class="progress-fill" style="width:'+overall+'%"></div></div></div>'+
    '</div></div>'+
    '<div class="row-between mb-3"><h2 class="h3">By subject</h2></div>'+
    SUBJECTS.map(s=>{
      const percent = pct(s.attendance.present, s.attendance.total);
      const fillStyle = 'width:'+percent+'%'+(percent<75?';background:var(--red-500)':percent>=85?';background:var(--secondary)':'');
      return '<div class="card mb-2"><div class="row-between wrap"><div class="row" style="gap:12px;min-width:0"><div style="width:40px;height:40px;border-radius:10px;display:grid;place-items:center;background:hsl('+s.hue+', 85%, 94%);color:hsl('+s.hue+', 70%, 40%);font-weight:700;font-size:.8rem">'+initials(s.name)+'</div><div style="min-width:0"><div class="small" style="font-weight:600">'+esc(s.name)+'</div><div class="tiny muted">'+s.attendance.present+'/'+s.attendance.total+' classes</div></div></div>'+
        '<div class="row" style="gap:16px;min-width:200px"><div class="progress" style="flex:1;min-width:120px"><div class="progress-fill" style="'+fillStyle+'"></div></div><span class="small" style="font-weight:700;color:'+(percent<75?'var(--red-500)':'var(--text)')+';min-width:44px;text-align:right">'+percent+'%</span></div>'+
      '</div></div>';
    }).join('');
}

function pageProfile(){
  const u = currentUser();
  return '<div class="page-head"><div><h1>Profile</h1><p class="sub">Your basic account information.</p></div></div>'+
    '<div class="profile-grid">'+
      '<div class="card profile-card"><div class="avatar-lg">'+initials(u.name)+'</div><h3 class="h3" style="font-size:1.15rem">'+esc(u.name)+'</h3><div class="small muted mt-1">'+esc(u.email)+'</div><div class="badge badge-blue mt-2">Student account</div><button class="btn btn-ghost btn-sm mt-3 btn-block" data-edit-profile>'+I.edit+' Edit profile</button></div>'+
      '<div>'+
        '<div class="card mb-3"><h3 class="h3" style="font-size:1rem;margin-bottom:16px">Academic summary</h3><div class="grid-3">'+
          '<div class="stat-mini"><div class="num">'+avgProgress()+'%</div><div class="lbl">Syllabus</div></div>'+
          '<div class="stat-mini"><div class="num">'+calcOverallAttendance()+'%</div><div class="lbl">Attendance</div></div>'+
          '<div class="stat-mini"><div class="num">'+Object.keys(getResults()).length+'</div><div class="lbl">Tests taken</div></div>'+
        '</div></div>'+
        '<div class="card"><h3 class="h3" style="font-size:1rem;margin-bottom:14px">Subjects enrolled</h3>'+SUBJECTS.map(s=>'<div class="row-between" style="padding:9px 0;border-bottom:1px solid var(--border)"><span class="small">'+esc(s.name)+'</span><span class="tiny muted">'+s.code+'</span></div>').join('')+'</div>'+
      '</div>'+
    '</div>';
}

function pageSettings(){
  return '<div class="page-head"><div><h1>Settings</h1><p class="sub">Preferences for your BrainForge account.</p></div></div>'+
    '<div class="card"><h3 class="h3" style="font-size:1rem;margin-bottom:6px">Appearance</h3>'+
      '<div class="setting-row"><div class="info"><h4>Dark mode</h4><div class="s">Switch between light and dark theme. Your choice is remembered.</div></div><button class="switch '+(state.theme==='dark'?'on':'')+'" data-switch-theme aria-label="Toggle dark mode"></button></div>'+
      '<div class="setting-row"><div class="info"><h4>Email notifications</h4><div class="s">Get notified about new lectures, tests, and replies.</div></div><button class="switch on" data-switch aria-label="Toggle email notifications"></button></div>'+
      '<div class="setting-row"><div class="info"><h4>Reduced motion</h4><div class="s">Minimise animations across the app.</div></div><button class="switch" data-switch aria-label="Toggle reduced motion"></button></div>'+
    '</div>'+
    '<div class="card mt-3"><h3 class="h3" style="font-size:1rem;margin-bottom:6px">Account</h3>'+
      '<div class="setting-row"><div class="info"><h4>Change password</h4><div class="s">Update your account password.</div></div><button class="btn btn-ghost btn-sm" data-change-pw>Change</button></div>'+
      '<div class="setting-row"><div class="info"><h4>Sign out everywhere</h4><div class="s">Sign out from all devices.</div></div><button class="btn btn-ghost btn-sm" data-logout>'+I.logout+' Sign out</button></div>'+
      '<div class="setting-row"><div class="info"><h4 style="color:var(--red-500)">Delete account</h4><div class="s">Permanently delete your BrainForge account.</div></div><button class="btn btn-ghost btn-sm" style="color:var(--red-500)" data-delete-acct>Delete</button></div>'+
    '</div>';
}

/* ============================================================
   TEST FLOW
   ============================================================ */
function pageTest(testId){
  const q = QUESTIONS[testId];
  if(!q) return '<div class="content">'+emptyState(I.info,'Test not found','This test could not be found.','#/mock-tests','Back to mock tests')+'</div>';
  const existing = getResults()[testId];
  const saved = safeParse(localStorage.getItem('bf_test_'+testId));

  if(saved && saved.inProgress && saved.startedAt){
    return testInterface(testId, q, saved);
  }

  return '<div class="test-shell">'+
    '<div class="test-top"><a href="#/mock-tests" class="btn btn-ghost btn-sm">'+I.arrowLeft+' Back</a><h3>'+esc(q.title)+'</h3></div>'+
    '<div style="flex:1;overflow-y:auto;padding:32px"><div class="card" style="max-width:640px;margin:0 auto">'+
      '<h2 class="h2" style="font-size:1.6rem;margin-bottom:10px">'+esc(q.title)+'</h2>'+
      '<p class="small muted">Before you begin, please review the instructions.</p>'+
      '<div class="grid-3 mt-4 mb-4"><div class="stat-mini"><div class="num">'+q.questions.length+'</div><div class="lbl">Questions</div></div><div class="stat-mini"><div class="num">'+q.duration+'m</div><div class="lbl">Duration</div></div><div class="stat-mini"><div class="num">'+q.questions.length+'</div><div class="lbl">Marks</div></div></div>'+
      '<ul style="display:flex;flex-direction:column;gap:10px;font-size:.9rem;color:var(--text-muted);margin-bottom:24px">'+
        '<li class="row" style="gap:9px">'+I.check+' Each correct answer gives 1 mark. No negative marking.</li>'+
        '<li class="row" style="gap:9px">'+I.check+' The timer auto-submits your test when it reaches zero.</li>'+
        '<li class="row" style="gap:9px">'+I.check+' Your answers auto-save as you go.</li>'+
        '<li class="row" style="gap:9px">'+I.check+' You can mark questions for review and revisit them.</li>'+
      '</ul>'+
      '<button class="btn btn-primary btn-lg btn-block" id="startTestBtn">'+I.play+' Start test</button>'+
      (existing?'<div class="text-center mt-3"><a href="#/analysis/'+testId+'" class="small link">You already attempted this test — view analysis</a></div>':'')+
    '</div></div>'+
  '</div>';
}

function startTest(testId){
  const q = QUESTIONS[testId];
  if(!q) return;
  const saved = {
    inProgress:true,
    startedAt: Date.now(),
    answers: {},
    marked: [],
    visited: [0],
    currentQ: 0,
    timeLeft: q.duration * 60
  };
  localStorage.setItem('bf_test_'+testId, JSON.stringify(saved));
  render();
}

function testInterface(testId, q, saved){
  const answers = saved.answers || {};
  const marked = saved.marked || [];
  const visited = saved.visited || [];
  const current = saved.currentQ || 0;
  const question = q.questions[current];
  const answeredCount = Object.keys(answers).length;
  const timeLeft = saved.timeLeft || 0;

  return '<div class="test-shell">'+
    '<div class="test-top">'+
      '<button class="palette-toggle-btn" id="paletteToggle" aria-label="Toggle palette">'+I.menu+'</button>'+
      '<h3>'+esc(q.title)+'</h3>'+
      '<div class="test-timer '+(timeLeft < 60 ? 'warn' : '')+'" id="testTimer">'+I.clock+' <span id="timerText">'+formatTime(timeLeft)+'</span></div>'+
      '<button class="btn btn-primary btn-sm" id="submitTestBtn">Submit test</button>'+
    '</div>'+
    '<div class="test-body">'+
      '<aside class="test-side" id="testSide">'+
        '<div class="row-between mb-2"><span class="small" style="font-weight:600">Question palette</span><span class="tiny muted">'+answeredCount+'/'+q.questions.length+' answered</span></div>'+
        '<div class="palette-lg">'+q.questions.map((qq,i)=>{
          const isAns = answers[qq.id] !== undefined;
          const isMark = marked.includes(qq.id);
          const isCur = i === current;
          return '<div class="q '+(isAns?'ans':'')+' '+(isMark?'mark':'')+' '+(isCur?'cur':'')+'" data-goto="'+i+'">'+(i+1)+'</div>';
        }).join('')+'</div>'+
        '<div class="legend">'+
          '<span><span class="sw ans"></span> Answered ('+answeredCount+')</span>'+
          '<span><span class="sw mark"></span> Marked for review ('+marked.length+')</span>'+
          '<span><span class="sw"></span> Not visited ('+(q.questions.length - visited.length)+')</span>'+
        '</div>'+
      '</aside>'+
      '<main class="test-main"><div class="question-box">'+
        '<div class="q-meta"><span>Question '+(current+1)+' of '+q.questions.length+'</span><span class="badge badge-neutral">'+esc(question.topic)+'</span></div>'+
        '<div class="q-text">'+esc(question.text)+'</div>'+
        '<div class="q-options">'+question.options.map((opt,idx)=>{
          const sel = answers[question.id] === idx;
          return '<label class="option '+(sel?'selected':'')+'" data-select="'+idx+'"><span class="k">'+String.fromCharCode(65+idx)+'</span><span class="t">'+esc(opt)+'</span></label>';
        }).join('')+'</div>'+
        '<div class="q-actions">'+
          '<button class="btn btn-ghost btn-sm" data-nav="prev" '+(current===0?'disabled':'')+'>'+I.chevronLeft+' Previous</button>'+
          '<button class="btn btn-ghost btn-sm" data-mark>'+I.flag+' '+(marked.includes(question.id) ? 'Unmark' : 'Mark for review')+'</button>'+
          '<span class="spacer"></span>'+
          '<button class="btn btn-primary btn-sm" data-nav="next" '+(current===q.questions.length-1?'disabled':'')+'>Save & Next '+I.chevronRight+'</button>'+
        '</div>'+
      '</div></main>'+
    '</div>'+
  '</div>';
}

function formatTime(sec){
  const m = Math.floor(sec/60), s = sec%60;
  return String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
}

function getTestState(testId){
  return safeParse(localStorage.getItem('bf_test_'+testId)) || {};
}
function saveTestState(testId, s){
  localStorage.setItem('bf_test_'+testId, JSON.stringify(s));
}
function selectOption(testId, qid, idx){
  const s = getTestState(testId);
  s.answers = s.answers || {};
  s.answers[qid] = idx;
  saveTestState(testId, s);
  render();
}
function toggleMark(testId, qid){
  const s = getTestState(testId);
  s.marked = s.marked || [];
  const i = s.marked.indexOf(qid);
  if(i>=0) s.marked.splice(i,1); else s.marked.push(qid);
  saveTestState(testId, s);
  render();
}
function goToQ(testId, idx){
  const s = getTestState(testId);
  s.currentQ = idx;
  s.visited = s.visited || [];
  if(!s.visited.includes(idx)) s.visited.push(idx);
  saveTestState(testId, s);
  render();
}
function toggleTestSide(){
  const side = $('#testSide');
  if(side) side.classList.toggle('open');
}
function confirmSubmit(testId){
  const s = getTestState(testId);
  const answered = Object.keys(s.answers||{}).length;
  const q = QUESTIONS[testId];
  const unanswered = q.questions.length - answered;
  confirmModal('Submit test?',
    'You have answered '+answered+' of '+q.questions.length+' questions.'+(unanswered>0?(' '+unanswered+' questions are unanswered.'):'')+' Once submitted, you cannot change your answers.',
    ()=>submitTest(testId), true);
}
function submitTest(testId){
  const s = getTestState(testId);
  const q = QUESTIONS[testId];
  if(!q) return;
  const answers = s.answers || {};
  let correct = 0, wrong = 0, unattempted = 0;
  const topicMap = {};
  q.questions.forEach(question=>{
    if(!topicMap[question.topic]) topicMap[question.topic] = { correct:0, total:0 };
    topicMap[question.topic].total++;
    const ans = answers[question.id];
    if(ans === undefined){ unattempted++; }
    else if(ans === question.correct){ correct++; topicMap[question.topic].correct++; }
    else { wrong++; }
  });
  const total = q.questions.length;
  const attempted = total - unattempted;
  const accuracy = attempted ? Math.round(correct/attempted*100) : 0;
  const elapsed = Math.max(0, q.duration*60 - (s.timeLeft || 0));
  const result = {
    testId, title:q.title, subjectId:q.subjectId,
    score:correct, total, correct, wrong, unattempted,
    accuracy, attempted,
    timeTaken: formatTime(elapsed),
    topics: topicMap,
    answers,
    questions: q.questions.map(question=>({ id:question.id, text:question.text, options:question.options, correct:question.correct, topic:question.topic, chosen: answers[question.id] })),
    submittedAt: Date.now()
  };
  saveResult(testId, result);
  localStorage.removeItem('bf_test_'+testId);
  if(state.testTimer){ clearInterval(state.testTimer); state.testTimer = null; }
  state.activeTestId = null;
  toast('Test submitted successfully.');
  location.hash = '#/analysis/'+testId;
}

function startTestTimer(testId){
  if(state.activeTestId === testId && state.testTimer) return;
  if(state.testTimer){ clearInterval(state.testTimer); state.testTimer = null; }
  state.activeTestId = testId;
  state.testTimer = setInterval(()=>{
    const s = getTestState(testId);
    if(!s.inProgress){ clearInterval(state.testTimer); state.testTimer = null; state.activeTestId = null; return; }
    s.timeLeft = Math.max(0, (s.timeLeft || 0) - 1);
    saveTestState(testId, s);
    const tEl = document.getElementById('timerText');
    const timerEl = document.getElementById('testTimer');
    if(tEl){ tEl.textContent = formatTime(s.timeLeft); }
    if(timerEl){ timerEl.classList.toggle('warn', s.timeLeft < 60); }
    if(s.timeLeft <= 0){
      clearInterval(state.testTimer); state.testTimer = null; state.activeTestId = null;
      toast('Time is up! Auto-submitting test.','info');
      submitTest(testId);
    }
  }, 1000);
}

/* ============================================================
   ANALYSIS
   ============================================================ */
function pageAnalysis(testId){
  const results = getResults();
  const r = results[testId];
  if(!r) return emptyState(I.chart,'No analysis available','This test has not been attempted yet.','#/mock-tests','Browse mock tests');
  const subj = getSubject(r.subjectId);
  const circumference = 2 * Math.PI * 45;

  const total = r.total || 1;
  const c = r.correct/total*circumference;
  const w = r.wrong/total*circumference;
  const donutSvg = '<svg width="130" height="130" viewBox="0 0 130 130" style="transform:rotate(-90deg)">'+
    '<circle cx="65" cy="65" r="45" fill="none" stroke="var(--bg-subtle)" stroke-width="14"/>'+
    '<circle cx="65" cy="65" r="45" fill="none" stroke="var(--secondary)" stroke-width="14" stroke-dasharray="'+c+' '+circumference+'"/>'+
    '<circle cx="65" cy="65" r="45" fill="none" stroke="var(--red-500)" stroke-width="14" stroke-dasharray="'+w+' '+circumference+'" stroke-dashoffset="'+(-c)+'"/>'+
  '</svg>';

  const topics = Object.entries(r.topics).map(([name,data])=>({ name:name, ...data }));

  return '<div class="page-head"><div><h1>Test Analysis</h1><p class="sub">'+esc(r.title)+' · '+esc(subj?subj.name:'')+'</p></div>'+
    '<div class="row"><a href="#/mock-tests" class="btn btn-ghost btn-sm">'+I.arrowLeft+' All tests</a><a href="#/test/'+r.testId+'" class="btn btn-primary btn-sm">'+I.play+' Reattempt</a></div></div>'+
    '<div class="result-grid">'+
      '<div class="result-stat blue"><div class="v">'+r.score+'/'+r.total+'</div><div class="l">Score</div></div>'+
      '<div class="result-stat green"><div class="v">'+r.accuracy+'%</div><div class="l">Accuracy</div></div>'+
      '<div class="result-stat amber"><div class="v">'+r.timeTaken+'</div><div class="l">Time taken</div></div>'+
      '<div class="result-stat red"><div class="v">'+r.wrong+'</div><div class="l">Incorrect</div></div>'+
    '</div>'+
    '<div class="analysis-2col">'+
      '<div class="card"><h3 class="h3" style="font-size:1rem;margin-bottom:8px">Answer breakdown</h3>'+
        '<div class="donut-wrap"><div style="position:relative">'+donutSvg+
          '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center"><div style="font-family:var(--font-head);font-size:1.4rem;font-weight:800">'+r.attempted+'/'+r.total+'</div><div class="tiny muted">attempted</div></div>'+
        '</div>'+
        '<div class="donut-legend">'+
          '<span><span class="dot" style="background:var(--secondary)"></span>Correct · '+r.correct+'</span>'+
          '<span><span class="dot" style="background:var(--red-500)"></span>Incorrect · '+r.wrong+'</span>'+
          '<span><span class="dot" style="background:var(--border-strong)"></span>Unattempted · '+r.unattempted+'</span>'+
        '</div></div>'+
      '</div>'+
      '<div class="card"><h3 class="h3" style="font-size:1rem;margin-bottom:14px">Topic-wise performance</h3>'+
        topics.map(t=>{
          const p = t.total ? Math.round(t.correct/t.total*100) : 0;
          const fillStyle = 'width:'+p+'%'+(p>=70?';background:var(--secondary)':';background:var(--amber-500)');
          return '<div class="topic-bar"><div class="tb-head"><span>'+esc(t.name)+'</span><span class="muted">'+t.correct+'/'+t.total+' · '+p+'%</span></div><div class="progress"><div class="progress-fill" style="'+fillStyle+'"></div></div></div>';
        }).join('')+
      '</div>'+
    '</div>'+
    '<div class="card"><h3 class="h3" style="font-size:1rem;margin-bottom:14px">Question review</h3>'+
      r.questions.map((q,i)=>{
        const chosen = q.chosen;
        const isCorrect = chosen === q.correct;
        const skipped = chosen === undefined;
        return '<div class="review-q"><div class="rq-head"><span class="num">Question '+(i+1)+'</span><span class="badge '+(skipped?'badge-neutral':isCorrect?'badge-green':'badge-red')+'">'+(skipped?'Skipped':isCorrect?'Correct':'Incorrect')+'</span></div>'+
          '<div class="rq-text">'+esc(q.text)+'</div>'+
          '<div class="rq-ans">'+
            '<span>Your answer: '+(chosen===undefined?'<em>Not attempted</em>':'<span class="'+(isCorrect?'good':'bad')+'">'+esc(q.options[chosen])+'</span>')+'</span>'+
            (!isCorrect?'<span>Correct answer: <span class="good">'+esc(q.options[q.correct])+'</span></span>':'')+
          '</div></div>';
      }).join('')+
    '</div>';
}

/* ============================================================
   ADMIN
   ============================================================ */
function renderAdmin(parts){
  const sub = parts[1] || '';
  const active = sub ? 'admin/'+sub : 'admin';
  let content;
  switch(sub){
    case 'students': content = adminStudents(); break;
    case 'faculty': content = adminFaculty(); break;
    case 'subjects': content = adminSubjects(); break;
    case 'content': content = adminContent(); break;
    case 'tests': content = adminTests(); break;
    case 'attendance': content = adminAttendance(); break;
    case 'announcements': content = adminAnnouncements(); break;
    case 'analytics': content = adminAnalytics(); break;
    default: content = adminOverview();
  }
  return adminShell(active, content);
}

function adminOverview(){
  return '<div class="page-head"><div><h1>Admin overview</h1><p class="sub">A quick look at the BrainForge platform.</p></div><button class="btn btn-primary btn-sm" data-new-announcement>'+I.megaphone+' New announcement</button></div>'+
    '<div class="admin-grid">'+
      '<div class="admin-stat"><div class="head"><div class="ico">'+I.users+'</div><div class="small muted">Total students</div></div><div class="v">248</div><div class="l">+12 this week</div></div>'+
      '<div class="admin-stat"><div class="head"><div class="ico green">'+I.profile+'</div><div class="small muted">Faculty</div></div><div class="v">18</div><div class="l">Across 5 departments</div></div>'+
      '<div class="admin-stat"><div class="head"><div class="ico">'+I.book+'</div><div class="small muted">Active subjects</div></div><div class="v">'+SUBJECTS.length+'</div><div class="l">This semester</div></div>'+
      '<div class="admin-stat"><div class="head"><div class="ico green">'+I.test+'</div><div class="small muted">Mock tests</div></div><div class="v">'+totalTests()+'</div><div class="l">Across all subjects</div></div>'+
    '</div>'+
    '<div class="grid-2">'+
      '<div class="card"><h3 class="h3" style="font-size:1rem;margin-bottom:14px">Recent students</h3><div class="table-wrap" style="border:none"><table class="data"><thead><tr><th>Student</th><th>Batch</th><th>Attendance</th></tr></thead><tbody>'+STUDENTS.slice(0,4).map(s=>'<tr><td>'+esc(s.name)+'</td><td>'+esc(s.batch)+'</td><td>'+s.attendance+'%</td></tr>').join('')+'</tbody></table></div></div>'+
      '<div class="card"><h3 class="h3" style="font-size:1rem;margin-bottom:14px">Recent activity</h3>'+
        ['New doubt posted in Digital Logic Design','Mock test published: Python Programming','Attendance updated for Linear Algebra','Announcement: Mid-semester schedule'].map(a=>'<div class="row-between" style="padding:10px 0;border-bottom:1px solid var(--border)"><span class="small">'+esc(a)+'</span><span class="tiny muted">just now</span></div>').join('')+
      '</div>'+
    '</div>';
}

function adminStudents(){
  return '<div class="page-head"><div><h1>Students</h1><p class="sub">Manage enrolled students.</p></div><button class="btn btn-primary btn-sm" data-add-student>'+I.plus+' Add student</button></div>'+
    '<div class="table-wrap"><table class="data"><thead><tr><th>Name</th><th>Email</th><th>Year</th><th>Batch</th><th>Attendance</th><th>Status</th><th></th></tr></thead><tbody>'+
      STUDENTS.map(s=>'<tr><td><div class="row" style="gap:9px"><div class="avatar" style="width:30px;height:30px;font-size:.72rem;border-radius:8px">'+initials(s.name)+'</div>'+esc(s.name)+'</div></td><td class="muted">'+esc(s.email)+'</td><td>'+esc(s.year)+'</td><td>'+esc(s.batch)+'</td><td>'+s.attendance+'%</td><td><span class="badge '+(s.status==='active'?'badge-green':'badge-amber')+'">'+s.status+'</span></td><td><button class="btn btn-ghost btn-sm" data-edit>'+I.edit+'</button></td></tr>').join('')+
    '</tbody></table></div>';
}

function adminFaculty(){
  return '<div class="page-head"><div><h1>Faculty</h1><p class="sub">Faculty members across departments.</p></div><button class="btn btn-primary btn-sm" data-add-faculty>'+I.plus+' Add faculty</button></div>'+
    '<div class="table-wrap"><table class="data"><thead><tr><th>Name</th><th>Department</th><th>Email</th><th>Office</th></tr></thead><tbody>'+
      Object.values(FACULTY).map(f=>'<tr><td><div class="row" style="gap:9px"><div class="avatar" style="width:30px;height:30px;font-size:.72rem;border-radius:8px">'+initials(f.name)+'</div>'+esc(f.name)+'</div></td><td>'+esc(f.dept)+'</td><td class="muted">'+esc(f.email)+'</td><td>'+esc(f.office)+'</td></tr>').join('')+
    '</tbody></table></div>';
}

function adminSubjects(){
  return '<div class="page-head"><div><h1>Subjects</h1><p class="sub">Manage subjects, faculty and syllabus.</p></div><button class="btn btn-primary btn-sm" data-add-subject>'+I.plus+' Add subject</button></div>'+
    '<div class="table-wrap"><table class="data"><thead><tr><th>Subject</th><th>Code</th><th>Faculty</th><th>Modules</th><th>Students</th><th></th></tr></thead><tbody>'+
      SUBJECTS.map(s=>'<tr><td>'+esc(s.name)+'</td><td>'+s.code+'</td><td>'+esc(getFaculty(s.facultyId).name)+'</td><td>'+s.syllabus.length+'</td><td>'+(30+Math.round(s.progress/3))+'</td><td><button class="btn btn-ghost btn-sm" data-edit>'+I.edit+'</button></td></tr>').join('')+
    '</tbody></table></div>';
}

function adminContent(){
  return '<div class="page-head"><div><h1>Content</h1><p class="sub">Manage notes and lectures.</p></div></div>'+
    '<div class="grid-2">'+
      '<div class="card"><h3 class="h3" style="font-size:1rem;margin-bottom:14px">Notes library</h3>'+SUBJECTS.slice(0,4).map(s=>'<div class="row-between" style="padding:10px 0;border-bottom:1px solid var(--border)"><div><div class="small" style="font-weight:600">'+esc(s.name)+'</div><div class="tiny muted">'+s.notes.length+' notes</div></div><button class="btn btn-ghost btn-sm" data-upload>'+I.plus+' Upload</button></div>').join('')+'</div>'+
      '<div class="card"><h3 class="h3" style="font-size:1rem;margin-bottom:14px">Lectures library</h3>'+SUBJECTS.slice(0,4).map(s=>'<div class="row-between" style="padding:10px 0;border-bottom:1px solid var(--border)"><div><div class="small" style="font-weight:600">'+esc(s.name)+'</div><div class="tiny muted">'+s.lectures.length+' lectures</div></div><button class="btn btn-ghost btn-sm" data-upload>'+I.plus+' Upload</button></div>').join('')+'</div>'+
    '</div>';
}

function adminTests(){
  return '<div class="page-head"><div><h1>Mock Tests</h1><p class="sub">Manage test creation and results.</p></div></div>'+
    '<div class="table-wrap"><table class="data"><thead><tr><th>Test</th><th>Subject</th><th>Questions</th><th>Duration</th><th>Attempts</th></tr></thead><tbody>'+
      Object.entries(QUESTIONS).map(([id,q])=>'<tr><td>'+esc(q.title)+'</td><td>'+esc((getSubject(q.subjectId)||{}).name||'')+'</td><td>'+q.questions.length+'</td><td>'+q.duration+' min</td><td>'+(Math.floor(Math.random()*180)+20)+'</td></tr>').join('')+
    '</tbody></table></div>';
}

function adminAttendance(){
  return '<div class="page-head"><div><h1>Attendance</h1><p class="sub">Overall student attendance across subjects.</p></div></div>'+
    SUBJECTS.map(s=>{
      const p = pct(s.attendance.present, s.attendance.total);
      const fillStyle = 'width:'+p+'%'+(p>=85?';background:var(--secondary)':p<75?';background:var(--red-500)':'');
      return '<div class="card mb-2"><div class="row-between"><div><div class="small" style="font-weight:600">'+esc(s.name)+'</div><div class="tiny muted">'+s.attendance.present+'/'+s.attendance.total+' classes</div></div><div class="row" style="gap:14px;min-width:200px"><div class="progress" style="flex:1;min-width:140px"><div class="progress-fill" style="'+fillStyle+'"></div></div><span class="small" style="font-weight:700">'+p+'%</span></div></div></div>';
    }).join('');
}

function adminAnnouncements(){
  return '<div class="page-head"><div><h1>Announcements</h1><p class="sub">Broadcast messages to students and faculty.</p></div><button class="btn btn-primary btn-sm" data-new-announcement>'+I.plus+' New announcement</button></div>'+
    '<div class="card">'+['Mid-semester exam schedule released','New mock tests added for Python Programming','Library hours extended during exams'].map((a,i)=>'<div class="row-between" style="padding:14px 0;border-bottom:1px solid var(--border)"><div class="row" style="gap:12px"><span style="width:36px;height:36px;border-radius:9px;background:var(--primary-tint);color:var(--primary);display:grid;place-items:center">'+I.megaphone+'</span><div><div class="small" style="font-weight:600">'+esc(a)+'</div><div class="tiny muted">Posted '+(i===0?'just now':i+' days ago')+'</div></div></div><button class="btn btn-ghost btn-sm" data-delete>'+I.trash+'</button></div>').join('')+'</div>';
}

function openAnnouncement(){
  showModal('<div class="modal"><h3>New announcement</h3><p>This will be sent to all students in your scope.</p>'+
    '<div class="field"><label>Title</label><input class="input" id="aTitle" placeholder="Announcement title"></div>'+
    '<div class="field"><label>Message</label><textarea class="input" id="aBody" rows="4" placeholder="Write your announcement…" style="resize:vertical"></textarea></div>'+
    '<div class="modal-actions"><button class="btn btn-ghost" data-close>Cancel</button><button class="btn btn-primary" id="aSubmit">'+I.send+' Publish</button></div></div>');
  $('[data-close]').onclick = closeModal;
  $('#aSubmit').onclick = ()=>{
    if(!$('#aTitle').value.trim()){ toast('Please enter a title.','error'); return; }
    closeModal(); toast('Announcement published.');
  };
}

function adminAnalytics(){
  return '<div class="page-head"><div><h1>Analytics</h1><p class="sub">Platform engagement and performance.</p></div></div>'+
    '<div class="admin-grid">'+
      '<div class="admin-stat"><div class="head"><div class="ico">'+I.trending+'</div><div class="small muted">Avg. score</div></div><div class="v">74%</div><div class="l">+4% vs last month</div></div>'+
      '<div class="admin-stat"><div class="head"><div class="ico green">'+I.target+'</div><div class="small muted">Avg. attendance</div></div><div class="v">'+calcOverallAttendance()+'%</div><div class="l">Stable</div></div>'+
      '<div class="admin-stat"><div class="head"><div class="ico">'+I.test+'</div><div class="small muted">Tests this week</div></div><div class="v">42</div><div class="l">Across 8 subjects</div></div>'+
      '<div class="admin-stat"><div class="head"><div class="ico green">'+I.doubt+'</div><div class="small muted">Open doubts</div></div><div class="v">'+DOUBTS.filter(d=>d.status==='open').length+'</div><div class="l">Awaiting reply</div></div>'+
    '</div>'+
    '<div class="card"><h3 class="h3" style="font-size:1rem;margin-bottom:14px">Subject engagement</h3>'+
      SUBJECTS.map(s=>'<div class="topic-bar"><div class="tb-head"><span>'+esc(s.name)+'</span><span class="muted">'+s.progress+'% avg. progress</span></div><div class="progress"><div class="progress-fill" style="width:'+s.progress+'%"></div></div></div>').join('')+
    '</div>';
}

/* ============================================================
   EVENT WIRING
   ============================================================ */
function initGlobalHandlers(){
  // Theme toggles
  $$('[data-theme-toggle]').forEach(btn=>{
    btn.addEventListener('click', toggleTheme);
  });

  // Sidebar drawer
  const topBurger = $('#topBurger');
  const sidebar = $('#sidebar');
  const backdrop = $('#sidebarBackdrop');
  if(topBurger && sidebar && backdrop){
    topBurger.addEventListener('click', ()=>{
      sidebar.classList.add('open');
      backdrop.classList.add('show');
    });
    backdrop.addEventListener('click', ()=>{
      sidebar.classList.remove('open');
      backdrop.classList.remove('show');
    });
  }

  // Profile menu
  const pb = $('#profileBtn');
  if(pb && isStudent()){
    pb.addEventListener('click', ()=>{
      const u = currentUser();
      showModal('<div class="modal"><h3>'+esc(u.name)+'</h3><p>'+esc(u.email)+'</p>'+
        '<div style="display:flex;flex-direction:column;gap:6px">'+
          '<a href="#/profile" class="btn btn-ghost btn-block" data-close>'+I.profile+' Profile</a>'+
          '<a href="#/settings" class="btn btn-ghost btn-block" data-close>'+I.settings+' Settings</a>'+
          '<a href="#/logout" class="btn btn-ghost btn-block" style="color:var(--red-500)">'+I.logout+' Logout</a>'+
        '</div></div>');
      $$('#modal-root [data-close]').forEach(el=>el.addEventListener('click', closeModal));
    });
  }

  // Notifications
  $$('[data-notify]').forEach(b=>b.addEventListener('click', ()=>toast('You are all caught up.','info')));

  // Module toggles
  $$('[data-module-toggle]').forEach(el=>{
    el.addEventListener('click', ()=>el.closest('.module').classList.toggle('open'));
  });

  // Settings switches
  $$('[data-switch-theme]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      toggleTheme();
      btn.classList.toggle('on', state.theme==='dark');
    });
  });
  $$('[data-switch]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      btn.classList.toggle('on');
      toast('Preference saved.','success');
    });
  });
  $$('[data-change-pw]').forEach(b=>b.addEventListener('click', ()=>toast('Password change flow coming soon.','info')));
  $$('[data-logout]').forEach(b=>b.addEventListener('click', logout));
  $$('[data-delete-acct]').forEach(b=>b.addEventListener('click', ()=>toast('Account deletion is disabled in demo.','error')));
  $$('[data-edit-profile]').forEach(b=>b.addEventListener('click', ()=>toast('Editing profile (demo)','info')));

  // Play / view / download buttons on non-test pages
  $$('[data-play]').forEach(b=>b.addEventListener('click', ()=>toast('Playing lecture (demo)','info')));
  $$('[data-view]').forEach(b=>b.addEventListener('click', ()=>toast('Opening note (demo)','info')));
  $$('[data-download]').forEach(b=>b.addEventListener('click', ()=>toast('Download started (demo)','success')));
  $$('[data-mark-watched]').forEach(b=>b.addEventListener('click', ()=>toast('Marked as watched','success')));

  // Admin buttons
  $$('[data-new-announcement]').forEach(b=>b.addEventListener('click', openAnnouncement));
  $$('[data-add-student],[data-add-faculty],[data-add-subject],[data-upload],[data-edit]').forEach(b=>b.addEventListener('click', ()=>toast('This action is a demo placeholder.','info')));
  $$('[data-delete]').forEach(b=>b.addEventListener('click', ()=>toast('Deleted (demo)','info')));

  // New doubt button
  const ndb = $('#newDoubtBtn');
  if(ndb) ndb.addEventListener('click', openNewDoubt);

  // Start test button
  const stb = $('#startTestBtn');
  if(stb){
    const testId = location.hash.split('/')[2];
    stb.addEventListener('click', ()=>startTest(testId));
  }

  // Test interface handlers
  const submitBtn = $('#submitTestBtn');
  if(submitBtn){
    const testId = location.hash.split('/')[2];
    submitBtn.addEventListener('click', ()=>confirmSubmit(testId));
  }
  const paletteToggle = $('#paletteToggle');
  if(paletteToggle) paletteToggle.addEventListener('click', toggleTestSide);

  const testId = location.hash.split('/')[2];
  if(testId && QUESTIONS[testId]){
    $$('[data-goto]').forEach(el=>{
      el.addEventListener('click', ()=>goToQ(testId, parseInt(el.dataset.goto,10)));
    });
    $$('[data-select]').forEach(el=>{
      el.addEventListener('click', ()=>{
        const s = getTestState(testId);
        const cur = (s.currentQ || 0);
        const q = QUESTIONS[testId].questions[cur];
        selectOption(testId, q.id, parseInt(el.dataset.select,10));
      });
    });
    $$('[data-mark]').forEach(el=>{
      el.addEventListener('click', ()=>{
        const s = getTestState(testId);
        const cur = (s.currentQ || 0);
        const q = QUESTIONS[testId].questions[cur];
        toggleMark(testId, q.id);
      });
    });
    $$('[data-nav]').forEach(el=>{
      el.addEventListener('click', ()=>{
        const s = getTestState(testId);
        const cur = s.currentQ || 0;
        const total = QUESTIONS[testId].questions.length;
        const next = el.dataset.nav === 'prev' ? Math.max(0, cur-1) : Math.min(total-1, cur+1);
        goToQ(testId, next);
      });
    });
  }

  // Scroll reveal
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('revealed'); io.unobserve(e.target); }
    });
  }, { threshold:0.12 });
  $$('.reveal').forEach(el=>io.observe(el));

  // Start test timer if we're rendering the test interface
  if(location.hash.indexOf('#/test/') === 0 && document.getElementById('testTimer')){
    if(testId && QUESTIONS[testId]) startTestTimer(testId);
  }
}

/* ============================================================
   ROUTER
   ============================================================ */
function render(){ route(); }

function route(){
  // 1. Catch password reset links from Supabase
  if (location.hash.includes('type=recovery')){
    try { history.replaceState(null, '', '#/reset-password'); } catch (e) {}
  }

  const rawHash = location.hash.slice(1) || '/';
  const qIdx = rawHash.indexOf('?');
  const pathPart = qIdx >= 0 ? rawHash.slice(0, qIdx) : rawHash;
  const parts = pathPart.split('/').filter(Boolean);
  const page = parts[0] || 'landing';

  // Reset test timer when leaving test page
  if(!location.hash.startsWith('#/test/')){
    if(state.testTimer){ clearInterval(state.testTimer); state.testTimer = null; }
    state.activeTestId = null;
  }

  const app = $('#app');
  if(!app) return;

  // 2. Password Reset Page
  if (page === 'reset-password'){
    app.innerHTML = renderResetPassword();
    initGlobalHandlers();
    initResetPasswordForm();
    window.scrollTo(0, 0);
    return;
  }

  // 3. Auth Pages (with "already logged in" redirect)
  if(page === 'login' || page === 'signup' || page === 'admin-login'){
    if (state.user){
      // If they are already logged in, don't show the login page
      location.hash = state.user.role === 'admin' ? '#/admin' : '#/dashboard';
      return;
    }
    app.innerHTML = renderAuth(page);
    initGlobalHandlers();
    initAuthForm(page);
    window.scrollTo(0,0);
    return;
  }

  // Logout
  if(page === 'logout'){ logout(); return; }

  // Admin pages
  if(page === 'admin'){
    if(isStudent()){ location.hash = '#/dashboard'; return; }
    if(!isAdmin()){ location.hash = '#/admin-login'; return; }
    app.innerHTML = renderAdmin(parts);
    initGlobalHandlers();
    window.scrollTo(0,0);
    return;
  }

  // Student pages
  const studentPages = ['dashboard','lectures','notes','syllabus','mock-tests','test-analysis','doubts','attendance','profile','settings','subject','test','analysis'];
  if(studentPages.indexOf(page) >= 0){
    if(isAdmin()){ location.hash = '#/admin'; return; }
    if(!isStudent()){ location.hash = '#/login'; return; }
    app.innerHTML = renderStudent(parts);
    initGlobalHandlers();
    window.scrollTo(0,0);
    return;
  }

  // Landing
  app.innerHTML = renderLanding();
  initGlobalHandlers();
}

/* ============================================================
   BOOT
   ============================================================ */
window.addEventListener('hashchange', route);

async function boot(){
  if (!location.hash){
    try { history.replaceState(null, '', '#/'); } catch (e) { location.hash = '#/'; }
  }

  try {
    state.user = await getSession();
    
    // ADD THIS IF-STATEMENT:
    if (typeof onAuthChange === 'function') {
      onAuthChange((event, user) => {
        state.user = user;
        if (event === 'SIGNED_OUT'){
          const page = location.hash.slice(1).split('/')[0];
          const protectedPages = [
            'dashboard','lectures','notes','syllabus','mock-tests',
            'test-analysis','doubts','attendance','profile','settings',
            'subject','test','analysis','admin'
          ];
          if (protectedPages.includes(page)) location.hash = '#/login';
        }
      });
    }
  } catch (e) {
    console.error("Auth failed to load:", e);
    state.user = null;
  }

  route();
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}