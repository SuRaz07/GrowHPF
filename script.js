// ══════════════ DATA ══════════════
const D = [
  {id:'O',name:'Observing',code:'PCAREIA',col:'#534AB7',bg:'#EEEDFE',bdr:'#AFA9EC',txt:'#3C3489',prog:80,
   desc:'Foundation of human interaction — gathering information through perceptual and cognitive lenses.',
   subs:[
    {n:'Perceptual',d:'Gathering sensory information from the environment.',gd:[1,1,0,0,0]},
    {n:'Continuous',d:'Maintaining sustained attention to evolving changes.',gd:[0,1,0,0,0]},
    {n:'Analytical',d:'Breaking down observations to detect patterns.',gd:[0,1,0,0,0]},
    {n:'Reflective',d:'Looking back at past observations for deeper insights.',gd:[0,1,1,0,1]},
    {n:'External',d:'Awareness and attention to the outside world.',gd:[1,1,1,1,1]},
    {n:'Internal',d:'Awareness of self — thoughts, feelings, and states.',gd:[1,1,1,0,1]},
    {n:'Active',d:'Engaged and intentional focused attention.',gd:[1,1,0,1,0]}
   ]},
  {id:'U',name:'Understanding',code:'CECIARI',col:'#0F6E56',bg:'#E1F5EE',bdr:'#5DCAA5',txt:'#085041',prog:75,
   desc:'Transforms observations into meaning — bridging raw knowledge with deep insight.',
   subs:[
    {n:'Conceptual',d:'Forming mental frameworks, categories, and ideas.',gd:[0,1,0,0,0]},
    {n:'Empathetic',d:"Recognising and sharing others' feelings and perspectives.",gd:[0,1,1,1,1]},
    {n:'Contextual',d:'Interpreting information within its broader environment.',gd:[1,1,1,1,0]},
    {n:'Intuitive',d:'Relying on instincts and subconscious insights.',gd:[1,1,1,0,1]},
    {n:'Adaptive',d:'Adjusting understanding to new and changing circumstances.',gd:[1,1,1,1,1]},
    {n:'Reflective',d:'Revisiting ideas repeatedly to refine and deepen them.',gd:[0,1,1,0,1]},
    {n:'Interdisciplinary',d:'Connecting knowledge across multiple fields.',gd:[1,1,0,1,1]}
   ]},
  {id:'T',name:'Thinking',code:'LCCASAH',col:'#BA7517',bg:'#FAEEDA',bdr:'#EF9F27',txt:'#633806',prog:68,
   desc:'Generating and evaluating ideas — the engine of innovation and problem-solving.',
   subs:[
    {n:'Logical',d:'Following structured, step-by-step reasoning.',gd:[0,1,0,0,0]},
    {n:'Creative',d:'Imagining novel ideas, connections, and solutions.',gd:[1,1,1,1,1]},
    {n:'Critical',d:'Questioning and evaluating ideas systematically.',gd:[0,1,0,0,0]},
    {n:'Abstract',d:'Dealing with concepts and ideas beyond the tangible.',gd:[0,1,0,0,1]},
    {n:'System',d:'Seeing relationships within interconnected systems.',gd:[1,1,0,1,0]},
    {n:'Analytical',d:'Breaking complex problems into manageable parts.',gd:[0,1,0,0,0]},
    {n:'Holistic',d:'Integrating multiple perspectives for a comprehensive view.',gd:[1,1,1,1,1]}
   ]},
  {id:'D',name:'Deciding',code:'RIICETS',col:'#185FA5',bg:'#E6F1FB',bdr:'#85B7EB',txt:'#0C447C',prog:55,
   desc:'Converting understanding and thinking into actionable choices.',
   subs:[
    {n:'Rational',d:'Weighing logic, data, and evidence carefully.',gd:[0,1,0,0,0]},
    {n:'Intuitive',d:'Trusting instincts and subconscious knowing.',gd:[1,1,1,1,1]},
    {n:'Informed',d:'Considering all relevant information before deciding.',gd:[1,1,0,1,0]},
    {n:'Collaborative',d:'Reaching decisions through teamwork and dialogue.',gd:[0,1,1,1,1]},
    {n:'Ethical',d:'Aligning decisions with moral principles and values.',gd:[1,1,1,1,1]},
    {n:'Timely',d:'Making decisions at the right moment.',gd:[1,1,0,0,0]},
    {n:'Strategic',d:'Ensuring decisions support long-term goals.',gd:[1,1,1,1,0]}
   ]},
  {id:'P',name:'Performing',code:'ECCASSE',col:'#3B6D11',bg:'#EAF3DE',bdr:'#97C459',txt:'#27500A',prog:62,
   desc:'Tangible execution of decisions — shaping real-world actions and results.',
   subs:[
    {n:'Efficient',d:'Achieving goals with minimal wasted time and resources.',gd:[1,1,0,0,0]},
    {n:'Creative',d:'Innovating and bringing fresh approaches while acting.',gd:[1,1,1,1,1]},
    {n:'Collaborative',d:'Working effectively and harmoniously with others.',gd:[0,1,1,1,1]},
    {n:'Adaptive',d:'Responding dynamically and flexibly to change.',gd:[1,1,1,1,1]},
    {n:'Skillful',d:'Executing tasks with precision and mastery.',gd:[1,1,0,1,0]},
    {n:'Strategic',d:'Ensuring every action aligns with broader vision.',gd:[1,1,1,1,0]},
    {n:'Ethical',d:'Acting with integrity, respect, and moral responsibility.',gd:[1,1,1,1,1]}
   ]},
  {id:'E',name:'Experiencing',code:'SCESCLT',col:'#993556',bg:'#FBEAF0',bdr:'#ED93B1',txt:'#72243E',prog:71,
   desc:'The feedback loop from actions — shaping personal growth and future understanding.',
   subs:[
    {n:'Sensory',d:'Gaining embodied knowledge through the five senses.',gd:[1,0,0,0,0]},
    {n:'Cognitive',d:'Learning from outcomes and intellectual engagement.',gd:[0,1,0,1,1]},
    {n:'Emotional',d:'Processing and integrating feelings evoked by events.',gd:[0,0,1,1,1]},
    {n:'Social',d:'Interacting with and growing within communities.',gd:[1,1,1,1,1]},
    {n:'Cultural',d:'Understanding and honouring shared traditions and values.',gd:[1,1,1,1,1]},
    {n:'Learning',d:'Deliberately acquiring new knowledge and skills.',gd:[1,1,1,1,1]},
    {n:'Transformative',d:'Profound changes that permanently redefine one\'s worldview.',gd:[1,1,1,1,1]}
   ]},
  {id:'R',name:'Repeating',code:'IRACSHP',col:'#5F5E5A',bg:'#F1EFE8',bdr:'#B4B2A9',txt:'#444441',prog:58,
   desc:'Ensuring refinement and continuous improvement — sustaining development across spacetime.',
   subs:[
    {n:'Iterative',d:'Refining through cycles of trial and error.',gd:[1,1,0,0,0]},
    {n:'Reflective',d:'Revisiting past efforts to extract deeper lessons.',gd:[1,1,1,1,1]},
    {n:'Adaptive',d:'Evolving processes to meet changing conditions.',gd:[1,1,1,1,1]},
    {n:'Continuous',d:'Maintaining consistent practice and effort over time.',gd:[1,1,0,1,0]},
    {n:'Strategic',d:'Prioritising repeated actions for long-term growth.',gd:[1,1,1,1,0]},
    {n:'Habitual',d:'Establishing productive and purposeful daily routines.',gd:[1,0,1,0,0]},
    {n:'Purposeful',d:'Ensuring every cycle contributes to overall objectives.',gd:[1,1,1,1,1]}
   ]}
];

const GDL = ['Sensory','Cognitive','Emotional','Social','Spiritual'];
const GDC = ['#534AB7','#0F6E56','#854F0B','#185FA5','#993556'];
const GDB = ['#EEEDFE','#E1F5EE','#FAEEDA','#E6F1FB','#FBEAF0'];
const SCORES = [72,85,61,78,54];

const DM = [[0,1,0,1,0,1,1],[1,0,1,1,0,1,1],[1,1,0,1,0,0,1],[0,1,0,0,1,0,1],[0,0,1,0,0,1,0],[1,0,0,0,0,0,1],[1,1,0,0,0,1,0]];

const GOALS = [
  {id:1,title:'Launch Digital Agency',category:'business',
   desc:'Transition from freelance designer to running a full digital agency with clients, team, and systems.',
   progress:38,timeline:'12 months',
   domains:['O','U','T','D','P','R'],
   steps:[
    {status:'done',title:'Observe the market landscape',detail:'Research 20 competitors, identify your niche, map client pain points.',domain:'Observing'},
    {status:'done',title:'Understand your unique value',detail:'Define your service stack, pricing model, and brand positioning.',domain:'Understanding'},
    {status:'done',title:'Think through your business model',detail:'Map revenue streams, cost structure, and 12-month projections.',domain:'Thinking'},
    {status:'active',title:'Decide your first 3 clients',detail:'Reach out to 10 warm contacts, set discovery calls, close first retainer.',domain:'Deciding'},
    {status:'todo',title:'Perform — build systems and deliver',detail:'Set up project management, onboarding, and delivery workflows.',domain:'Performing'},
    {status:'todo',title:'Experience and gather feedback',detail:'Complete first 2 projects, collect testimonials, refine process.',domain:'Experiencing'},
    {status:'todo',title:'Repeat and scale',detail:'Systematise everything, hire first employee, target month 3 revenue.',domain:'Repeating'}
   ]},
  {id:2,title:'Improve GPA to 3.9',category:'education',
   desc:'Currently at 3.5 GPA. Target 3.9 before final exams by applying HPF-guided study strategies.',
   progress:55,timeline:'3 months',
   domains:['O','U','T','D','R'],
   steps:[
    {status:'done',title:'Observe your study patterns',detail:'Track where you lose marks, which subjects need most attention.',domain:'Observing'},
    {status:'done',title:'Understand concepts, not just facts',detail:'Use conceptual and interdisciplinary understanding for deeper retention.',domain:'Understanding'},
    {status:'done',title:'Think with logical and creative frameworks',detail:'Use spaced repetition, mind maps, and active recall techniques.',domain:'Thinking'},
    {status:'active',title:'Decide your study schedule',detail:'Block 4 hours daily per subject. Commit to your weakest areas first.',domain:'Deciding'},
    {status:'todo',title:'Perform consistently',detail:'Complete practice papers under exam conditions every week.',domain:'Performing'},
    {status:'todo',title:'Repeat with reflection',detail:'Review every test, identify gaps, adjust approach iteratively.',domain:'Repeating'}
   ]},
  {id:3,title:'Master Time Management',category:'personal',
   desc:'Stop feeling overwhelmed. Build a system that gives every hour a purpose aligned with HPF domains.',
   progress:20,timeline:'1 month',
   domains:['O','T','D','P','R'],
   steps:[
    {status:'done',title:'Observe how you currently spend time',detail:'Time-audit for 7 days. Log every activity in 30-min blocks.',domain:'Observing'},
    {status:'active',title:'Think through priority frameworks',detail:'Apply 80/20, time-blocking, and the Decide matrix to your tasks.',domain:'Thinking'},
    {status:'todo',title:'Decide your weekly structure',detail:'Design your ideal week with domain-aligned time blocks.',domain:'Deciding'},
    {status:'todo',title:'Perform your new system for 14 days',detail:'Execute the new schedule with accountability check-ins.',domain:'Performing'},
    {status:'todo',title:'Repeat and refine habitually',detail:'Review weekly, adjust, build habitual and purposeful routines.',domain:'Repeating'}
   ]},
  {id:4,title:'Grow as a Creative Leader',category:'career',
   desc:'Move from individual contributor to creative director — lead teams, shape strategy, mentor others.',
   progress:15,timeline:'6 months',
   domains:['O','U','T','D','P','E','R'],
   steps:[
    {status:'active',title:'Observe leadership styles around you',detail:'Study 3 leaders you admire. What do they do differently?',domain:'Observing'},
    {status:'todo',title:'Understand team dynamics',detail:'Study empathetic and collaborative understanding of team needs.',domain:'Understanding'},
    {status:'todo',title:'Think strategically about creative direction',detail:'Develop your creative philosophy and leadership voice.',domain:'Thinking'},
    {status:'todo',title:'Decide to take on leadership opportunities',detail:'Volunteer to lead projects, mentor junior designers.',domain:'Deciding'},
    {status:'todo',title:'Perform as a leader',detail:'Run your first team project with full accountability.',domain:'Performing'}
   ]}
];

const INSIGHTS = [
  {col:'#854F0B',title:'Emotional growth needs attention (61)',text:'Your emotional dimension is your lowest score. Focus on Reflective Observing and Empathetic Understanding subdomains this week.',tag:'Observing → Understanding'},
  {col:'#993556',title:'Spiritual dimension is lagging (54)',text:'Practise Purposeful Repeating and Holistic Thinking daily. Even 10 minutes of reflective journaling will move this needle significantly.',tag:'Thinking → Repeating'},
  {col:'#0F6E56',title:'Leverage your cognitive strength (85)',text:'You are cognitively strong. Channel this into your Deciding domain — you have the clarity, now make bold, strategic decisions faster.',tag:'Understanding → Deciding'},
  {col:'#185FA5',title:'Social engagement is solid (78)',text:'Push social further by activating Collaborative Performing. Share your work more openly — seek feedback, build in public.',tag:'Performing → Experiencing'}
];

const GUIDE_CONTENT = {
  business: {
    title: 'Designer → Digital Agency Founder',
    desc: 'You have design skills. Now you need business acumen, systems thinking, and the courage to decide and perform. HPF maps your exact journey:',
    steps: [
      {domain:'O',title:'Observe the market',detail:'Spend 2 weeks doing nothing but market research. Interview 5 potential clients. Observe your competition closely. Use Analytical and External Observing subdomains.'},
      {domain:'U',title:'Understand your niche',detail:'You cannot serve everyone. Use Contextual and Adaptive Understanding to define exactly what type of clients you serve best and why you are the right person.'},
      {domain:'T',title:'Think through your model',detail:'Use System Thinking to map your business model. Use Creative Thinking to differentiate your offer. Use Logical Thinking to build your pricing.'},
      {domain:'D',title:'Decide and commit',detail:'Stop overthinking. Use Strategic and Informed Deciding to commit to your first 3 target clients, your pricing, and your launch date.'},
      {domain:'P',title:'Perform relentlessly',detail:'Execute with Efficient and Skillful Performing. Build your portfolio. Reach out to 10 people. Deliver exceptional work for your first client.'},
      {domain:'E',title:'Experience and learn',detail:'Every project is data. Use Learning and Cognitive Experiencing to capture what works and what does not after each engagement.'},
      {domain:'R',title:'Repeat and scale',detail:'Use Habitual and Strategic Repeating to build systems. Systematise your process so it runs without you being in every decision.'}
    ]
  },
  student: {
    title: 'From 3.5 GPA to 3.9 — The HPF Study System',
    desc: 'The difference between 3.5 and 3.9 is not intelligence. It is system, strategy, and the right mental frameworks. HPF shows you exactly how:',
    steps: [
      {domain:'O',title:'Observe your weak patterns',detail:'For 3 days, track every study session. Where do you lose attention? Which subjects drain you fastest? Use Analytical Observing to find the pattern.'},
      {domain:'U',title:'Understand concepts deeply',detail:'Stop memorising. Use Conceptual and Interdisciplinary Understanding to link topics across subjects. Ask "why" before you ask "what".'},
      {domain:'T',title:'Think like an examiner',detail:'Use Critical Thinking to anticipate questions. Use Abstract Thinking for theory-heavy subjects. Use System Thinking for subjects with interconnected concepts.'},
      {domain:'D',title:'Decide your study schedule',detail:'Use Rational and Timely Deciding to design a daily schedule. Commit to 4 hours of deep work per day with zero distractions.'},
      {domain:'P',title:'Perform under exam conditions',detail:'Practice papers weekly. Use Efficient and Skillful Performing. Time yourself strictly. Simulate the exam environment every Saturday.'},
      {domain:'R',title:'Repeat with reflection',detail:'After every test, use Reflective and Iterative Repeating. Ask: What did I get wrong? Why? What will I change? Adjust and go again.'}
    ]
  },
  time: {
    title: 'Time Management Through HPF',
    desc: 'You do not have a time problem. You have a decision and system problem. HPF gives you a framework to observe, decide, and build powerful habits:',
    steps: [
      {domain:'O',title:'Audit your current time',detail:'For 7 days, log every 30-minute block of your day. Use Perceptual and Continuous Observing. Be ruthlessly honest. Where is the time actually going?'},
      {domain:'U',title:'Understand your time drains',detail:'Use Reflective Understanding to identify patterns. What triggers distraction? What tasks expand to fill time? When is your energy highest?'},
      {domain:'T',title:'Think about your ideal week',detail:'Use System and Holistic Thinking to design your ideal weekly structure. Map domains to time blocks — creative work in high-energy hours, admin in low-energy hours.'},
      {domain:'D',title:'Decide your system and protect it',detail:'Use Timely and Strategic Deciding to set hard boundaries. Decide your start time, your deep work blocks, your off-limits hours.'},
      {domain:'P',title:'Perform the system for 14 days',detail:'Execute without negotiating with yourself. Use Efficient and Habitual Performing. The first 14 days build the groove.'},
      {domain:'R',title:'Repeat, refine, and make it habitual',detail:'Use Habitual and Purposeful Repeating. Review every Sunday. What slipped? Why? Adjust one thing at a time.'}
    ]
  },
  career: {
    title: 'Career Acceleration Through HPF',
    desc: 'Career growth is not luck — it is the result of deliberate observing, strategic deciding, and consistent performing. Here is your HPF roadmap:',
    steps: [
      {domain:'O',title:'Observe where opportunities are',detail:'Use External and Active Observing. Study the industry. Watch what skills are in demand. Identify the gap between where you are and where you want to be.'},
      {domain:'U',title:'Understand your strengths and gaps',detail:'Use Internal Observing and Reflective Understanding. What are your top 3 skills? Where do you consistently fall short? Be honest.'},
      {domain:'T',title:'Think about your career strategy',detail:'Use Strategic and System Thinking. Where do you want to be in 3 years? Map the skills, network, and experiences needed.'},
      {domain:'D',title:'Decide boldly',detail:'Use Rational and Timely Deciding. Apply for the stretch role. Reach out to the mentor. Invest in the course. Stop waiting for the perfect moment.'},
      {domain:'P',title:'Perform visibly',detail:'Use Skillful and Creative Performing. Do exceptional work. Share it. Make your contribution impossible to ignore.'},
      {domain:'R',title:'Repeat with strategic habits',detail:'Use Strategic and Continuous Repeating. Build daily habits that compound. 1% better every day is 37x better in a year.'}
    ]
  },
  health: {
    title: 'Health & Wellness With HPF',
    desc: 'Health is not a destination — it is a cycle of observing your body, understanding it, and performing consistently. HPF makes it a system:',
    steps: [
      {domain:'O',title:'Observe your body signals',detail:'Use Perceptual and Internal Observing. What does your body tell you after eating, sleeping, exercising? Start a 7-day body log.'},
      {domain:'U',title:'Understand what works for your body',detail:'Use Adaptive and Intuitive Understanding. Everyone is different. Learn what sleep schedule, food, and movement pattern actually works for you.'},
      {domain:'T',title:'Think about a sustainable routine',detail:'Use Holistic Thinking. Do not chase extremes. Design a routine you can maintain for 6 months, not 6 days.'},
      {domain:'D',title:'Decide your non-negotiables',detail:'Use Ethical and Strategic Deciding. What 3 health habits are non-negotiable? Commit to them before adding anything else.'},
      {domain:'P',title:'Perform consistently, not perfectly',detail:'Use Continuous and Adaptive Performing. Show up even on bad days. Progress beats perfection every time.'},
      {domain:'R',title:'Repeat and make health habitual',detail:'Use Habitual Repeating. The goal is to make healthy choices automatic — not effortful decisions every day.'}
    ]
  },
  relationship: {
    title: 'Deeper Relationships Through HPF',
    desc: 'Meaningful relationships are built through the HPF cycle — observing others, understanding them deeply, and performing with empathy:',
    steps: [
      {domain:'O',title:'Observe people before reacting',detail:'Use Active and External Observing. Before responding, observe fully. Notice tone, body language, the unspoken. Most conflict begins with reactive listening.'},
      {domain:'U',title:'Understand before being understood',detail:'Use Empathetic and Contextual Understanding. What is the other person experiencing? What is their context? This is the foundation of every meaningful bond.'},
      {domain:'T',title:'Think about what you truly want',detail:'Use Reflective and Abstract Thinking. What do you want from your relationships? What are you contributing? Are you reactive or intentional?'},
      {domain:'D',title:'Decide to show up consistently',detail:'Use Collaborative and Ethical Deciding. Relationships thrive on reliability. Decide to be present, honest, and consistent.'},
      {domain:'P',title:'Perform with empathy and skill',detail:'Use Collaborative and Ethical Performing. Act on your care. Show up. Apologise when wrong. Celebrate others genuinely.'},
      {domain:'R',title:'Repeat — relationships need maintenance',detail:'Use Reflective and Purposeful Repeating. Regularly check in with important people. Relationships that are not tended fade.'}
    ]
  }
};

const TASKS = [
  {done:true,text:'Morning observation — 10-min journaling of external/internal state',badge:'Observing',bc:'#EEEDFE',btc:'#3C3489'},
  {done:true,text:'Review competitor digital agencies — market research block',badge:'Understanding',bc:'#E1F5EE',btc:'#085041'},
  {done:true,text:'Study system thinking framework for business model mapping',badge:'Thinking',bc:'#FAEEDA',btc:'#633806'},
  {done:false,text:'Reach out to 3 warm contacts for discovery calls',badge:'Deciding',bc:'#E6F1FB',btc:'#0C447C'},
  {done:false,text:'Build agency proposal template for first client',badge:'Performing',bc:'#EAF3DE',btc:'#27500A'},
  {done:false,text:'Evening reflection — log what I experienced today',badge:'Experiencing',bc:'#FBEAF0',btc:'#72243E'}
];

const JOURNAL_ENTRIES = [
  {date:'2026-04-18',color:'#534AB7',text:'Deep observation session — noticed I\'ve been reacting to emails instead of responding. Switching to 2 email checks per day.'},
  {date:'2026-04-17',color:'#0F6E56',text:'Spoke to a potential client today. Used contextual understanding — really listened to their pain points instead of pitching immediately.'},
  {date:'2026-04-16',color:'#BA7517',text:'Spent 2 hours with system thinking for my agency model. The revenue streams are clearer now. Creative thinking unlocked a referral programme idea.'},
  {date:'2026-04-15',color:'#185FA5',text:'Made a big decision — decided to niche down to e-commerce brands only. Terrifying and exciting. Strategic deciding in action.'},
  {date:'2026-04-14',color:'#3B6D11',text:'First proposal sent. Efficient performing — done in 90 minutes with the template. No overthinking.'},
  {date:'2026-04-13',color:'#993556',text:'Transformative experience — mentor call changed how I think about pricing. I was massively undervaluing my work.'}
];

// ══════════════ INIT BUILDERS ══════════════
function buildGD5(containerId){
  const c=document.getElementById(containerId);
  if(!c)return; c.innerHTML='';
  GDL.forEach((g,i)=>{
    const el=document.createElement('div'); el.className='gd-score-card';
    el.innerHTML=`<div class="gd-score-label">${g}</div><div class="gd-score-num" style="color:${GDC[i]}">${SCORES[i]}</div><div class="gd-score-bar"><div class="gd-score-fill" style="width:${SCORES[i]}%;background:${GDC[i]}"></div></div>`;
    c.appendChild(el);
  });
}

function buildCycle(){
  const bar=document.getElementById('cycle-bar');
  const labs=document.getElementById('cycle-labs');
  if(!bar)return;
  bar.innerHTML=''; labs.innerHTML='';
  D.forEach((d,i)=>{
    const nd=document.createElement('div');
    nd.style.cssText=`width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:500;flex-shrink:0;cursor:pointer;border:1px solid ${i<3?d.bdr:'rgba(15,14,12,0.12)'};background:${i<3?d.bg:'#f5f2ed'};color:${i<3?d.txt:'#888780'}`;
    nd.textContent=d.id;
    nd.onclick=()=>{
      document.getElementById('cycle-detail').innerHTML=`<strong style="color:${d.col}">${d.name} (${d.code})</strong> — ${d.desc}`;
    };
    bar.appendChild(nd);
    if(i<6){const ln=document.createElement('div');ln.style.cssText=`flex:1;height:1.5px;background:${i<2?d.bg:'rgba(15,14,12,0.08)'}`;bar.appendChild(ln);}
    const lb=document.createElement('div');lb.style.cssText='font-size:9px;color:#888780;text-align:center';lb.textContent=d.name.substring(0,3);
    labs.appendChild(lb);
  });
}

function buildDashGoals(){
  const c=document.getElementById('dash-goals');
  if(!c)return; c.innerHTML='';
  GOALS.slice(0,3).forEach(g=>{
    const el=document.createElement('div');
    el.style.cssText='padding:10px 0;border-bottom:0.5px solid rgba(15,14,12,0.08)';
    const catColors={business:'#EEEDFE',education:'#E1F5EE',personal:'#EAF3DE',career:'#E6F1FB'};
    const catText={business:'#3C3489',education:'#085041',personal:'#27500A',career:'#0C447C'};
    el.innerHTML=`
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
        <div style="font-size:13px;font-weight:500">${g.title}</div>
        <span style="font-size:11px;font-weight:500;color:${catText[g.category]||'#3C3489'}">${g.progress}%</span>
      </div>
      <div style="height:4px;background:#ede9e0;border-radius:2px;overflow:hidden">
        <div style="width:${g.progress}%;height:4px;background:${catText[g.category]||'#534AB7'};border-radius:2px"></div>
      </div>`;
    el.style.cursor='pointer';
    el.onclick=()=>nav('goals',null);
    c.appendChild(el);
  });
}

function buildTasks(){
  const c=document.getElementById('today-tasks');
  if(!c)return; c.innerHTML='';
  TASKS.forEach((t,i)=>{
    const el=document.createElement('div'); el.className='task-item';
    el.innerHTML=`
      <div class="task-cb ${t.done?'checked':''}" onclick="toggleTask(this,${i})"></div>
      <div style="flex:1">
        <div class="task-text ${t.done?'done':''}" id="tt-${i}">${t.text}</div>
        <span class="task-badge" style="background:${t.bc};color:${t.btc};margin-top:4px;display:inline-block">${t.badge}</span>
      </div>`;
    c.appendChild(el);
  });
}

function toggleTask(el,i){
  el.classList.toggle('checked');
  document.getElementById('tt-'+i).classList.toggle('done');
}

function buildGoalsList(filter){
  const c=document.getElementById('goals-list');
  if(!c)return; c.innerHTML='';
  const filtered=filter&&filter!=='all'?GOALS.filter(g=>g.category===filter):GOALS;
  filtered.forEach(g=>{
    const catColor={business:['#EEEDFE','#3C3489'],education:['#E1F5EE','#085041'],personal:['#EAF3DE','#27500A'],career:['#E6F1FB','#0C447C']};
    const [bg,tc]=catColor[g.category]||['#EEEDFE','#3C3489'];
    const el=document.createElement('div'); el.className='goal-card';
    el.innerHTML=`
      <div class="goal-tag" style="background:${bg};color:${tc}">${g.category.toUpperCase()}</div>
      <div class="goal-title">${g.title}</div>
      <div class="goal-desc">${g.desc}</div>
      <div class="goal-progress-label"><span style="font-size:12px;color:#5F5E5A">Progress</span><span style="font-size:12px;font-weight:500">${g.progress}%</span></div>
      <div class="goal-bar"><div class="goal-fill" style="width:${g.progress}%;background:${tc}"></div></div>
      <div style="margin-bottom:14px">
        <div style="font-size:11px;color:#888780;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.8px">HPF Roadmap Steps</div>
        ${g.steps.map((s,si)=>`
          <div class="step-card">
            <div class="step-num ${s.status==='done'?'step-done':s.status==='active'?'step-active':'step-todo'}">${si+1}</div>
            <div class="step-content">
              <div class="step-title">${s.title}</div>
              <div class="step-detail">${s.detail}</div>
              <div class="step-domain" style="color:${D.find(d=>d.name===s.domain)?.col||'#888780'}">${s.domain}</div>
            </div>
          </div>`).join('')}
      </div>
      <div class="goal-domains">${g.domains.map(id=>{const dom=D.find(d=>d.id===id);return`<span class="domain-pill" style="background:${dom.bg};color:${dom.txt}">${dom.name}</span>`}).join('')}</div>`;
    c.appendChild(el);
  });
}

function filterGoals(cat,btn){
  document.querySelectorAll('#goals .tab-row .tab').forEach(t=>t.classList.remove('on'));
  btn.classList.add('on');
  buildGoalsList(cat);
}

function buildW6(){
  const g=document.getElementById('w6-fields');
  if(!g)return; g.innerHTML='';
  const ws=[
    {q:'What',l:'Your focus today',ph:'e.g. Agency proposal, Study session, Morning routine'},
    {q:'Where',l:'Context & place',ph:'e.g. Home office, University library'},
    {q:'When',l:'Time & phase',ph:'e.g. Morning deep work, 9am–12pm'},
    {q:'Who',l:'People involved',ph:'e.g. Solo, With team, Client call'},
    {q:'Why',l:'Your intention',ph:'e.g. To close first client, To improve GPA'},
    {q:'How',l:'Your approach',ph:'e.g. Focused blocks, Pomodoro, Collaborative'}
  ];
  ws.forEach(w=>{
    const el=document.createElement('div'); el.className='w6-card';
    el.innerHTML=`<div class="w6-q">${w.q}</div><div class="w6-label">${w.l}</div><input class="w6-inp" placeholder="${w.ph}">`;
    g.appendChild(el);
  });
}

function buildDomainRatings(){
  const c=document.getElementById('domain-ratings');
  if(!c)return; c.innerHTML='';
  D.forEach((d,di)=>{
    const row=document.createElement('div'); row.className='rating-row-item';
    const stars=Array.from({length:5},(_,si)=>`<div class="rstar star ${si<3?'on':''}" onclick="rateDomain(${di},${si})">${si+1}</div>`).join('');
    row.innerHTML=`<div class="rr-dot" style="background:${d.col}"></div><div class="rr-name">${d.name}</div><div class="rr-stars">${stars}</div><div class="rr-val" id="dv${di}">3</div>`;
    c.appendChild(row);
  });
}

function rateDomain(di,si){
  const stars=document.querySelectorAll(`.rstar[onclick^="rateDomain(${di}"]`);
  stars.forEach((s,i)=>s.classList.toggle('on',i<=si));
  document.getElementById('dv'+di).textContent=si+1;
}

function buildJournal(){
  const c=document.getElementById('journal-timeline');
  if(!c)return; c.innerHTML='';
  JOURNAL_ENTRIES.forEach(e=>{
    const el=document.createElement('div'); el.className='tl-item';
    el.innerHTML=`<div class="tl-dot" style="background:${e.color}"></div><div class="tl-date">${e.date}</div><div class="tl-text">${e.text}</div>`;
    c.appendChild(el);
  });
}

function buildInsights(){
  buildGD5('ins-gd5');
  const c=document.getElementById('insights-list');
  if(!c)return; c.innerHTML='';
  INSIGHTS.forEach(it=>{
    const el=document.createElement('div'); el.className='insight-card';
    el.innerHTML=`<div class="insight-accent" style="background:${it.col}"></div><div><div class="insight-title">${it.title}</div><div class="insight-text">${it.text}</div><div class="insight-tag">${it.tag}</div></div>`;
    c.appendChild(el);
  });

  const rg=document.getElementById('rec-sds');
  if(!rg)return; rg.innerHTML='';
  const recs=[
    {di:0,sn:'Reflective',why:'Builds emotional self-awareness'},
    {di:1,sn:'Empathetic',why:'Develops compassion and connection'},
    {di:2,sn:'Holistic',why:'Strengthens spiritual perspective'},
    {di:6,sn:'Purposeful',why:'Aligns action to meaning'},
    {di:3,sn:'Strategic',why:'Channels your cognitive strength'},
    {di:5,sn:'Transformative',why:'Deepens all 5 growth dimensions'}
  ];
  recs.forEach(r=>{
    const d=D[r.di];
    const el=document.createElement('div');
    el.style.cssText=`background:${d.bg};border:0.5px solid ${d.bdr};border-radius:10px;padding:12px 14px`;
    el.innerHTML=`<div style="font-size:10px;font-weight:500;color:${d.txt};margin-bottom:4px">${d.name}</div><div style="font-size:13px;font-weight:500;color:${d.txt};margin-bottom:4px">${r.sn}</div><div style="font-size:11px;color:${d.col}">${r.why}</div>`;
    rg.appendChild(el);
  });
}

function buildExploreDomains(){
  const c=document.getElementById('exp-domain-cards');
  if(!c)return; c.innerHTML='';
  D.forEach((d,i)=>{
    const el=document.createElement('div'); el.className='domain-card';
    el.innerHTML=`<div class="domain-id" style="background:${d.bg};color:${d.txt}">${d.id}</div><div class="domain-name">${d.name}</div><div class="domain-code">${d.code}</div><div class="domain-bar"><div class="domain-fill" style="width:${d.prog}%;background:${d.col}"></div></div><div class="domain-score" style="color:${d.col}">${d.prog}%</div>`;
    el.onclick=()=>showExpandDomain(i,el);
    c.appendChild(el);
  });
}

let selExpCard=null;
function showExpandDomain(i,card){
  if(selExpCard){selExpCard.classList.remove('active-domain');}
  card.classList.add('active-domain');
  selExpCard=card;
  const d=D[i];
  const detail=document.getElementById('exp-detail');
  detail.innerHTML=`
    <div class="sd-expand">
      <div class="sd-expand-header">
        <div class="domain-id" style="background:${d.bg};color:${d.txt};width:40px;height:40px;border-radius:10px;font-size:15px">${d.id}</div>
        <div style="flex:1">
          <div style="font-size:16px;font-weight:500;margin-bottom:2px">${d.name} (${d.code})</div>
          <div style="font-size:12px;color:#5F5E5A">${d.desc}</div>
        </div>
        <span class="tag" style="background:${d.bg};color:${d.txt}">7 subdomains</span>
      </div>
      <div class="sd-grid">
        ${d.subs.map(s=>`
          <div class="sd-item">
            <div class="sd-item-name">${s.n}</div>
            <div class="sd-item-def">${s.d}</div>
            <div class="gd-dots">${GDL.map((g,gi)=>`<div class="gd-dot" title="${g}" style="${s.gd[gi]?'background:'+GDC[gi]:'background:#ede9e0'}"></div>`).join('')}</div>
            <div style="display:flex;gap:4px;margin-top:4px;flex-wrap:wrap">${GDL.map((g,gi)=>s.gd[gi]?`<span style="font-size:9px;background:${GDB[gi]};color:${GDC[gi]};padding:1px 5px;border-radius:8px">${g.substring(0,3)}</span>`:'').join('')}</div>
          </div>`).join('')}
      </div>
    </div>`;
  detail.scrollIntoView({behavior:'smooth',block:'nearest'});
}

function buildMatrix(){
  const w=document.getElementById('matrix-table');
  if(!w)return;
  let h='<table class="matrix-tbl"><thead><tr><th>From/To</th>';
  D.forEach(d=>h+=`<th>${d.id}</th>`);
  h+='</tr></thead><tbody>';
  D.forEach((d,i)=>{
    h+=`<tr><td class="rh">${d.id} ${d.name}</td>`;
    DM[i].forEach(v=>h+=`<td>${v?`<span class="m1">1</span>`:`<span class="m0">·</span>`}</td>`);
    h+='</tr>';
  });
  h+='</tbody></table>';
  w.innerHTML=h;

  const sdw=document.getElementById('sd-matrix-table');
  if(!sdw)return;
  let sh='<table class="matrix-tbl"><thead><tr><th>Subdomain</th><th>Domain</th>';
  GDL.forEach(g=>sh+=`<th>${g.substring(0,3)}</th>`);
  sh+='</tr></thead><tbody>';
  D.forEach(d=>d.subs.forEach(s=>{
    sh+=`<tr><td style="text-align:left;font-weight:500">${s.n}</td><td style="text-align:left;color:#888780">${d.name}</td>`;
    s.gd.forEach((v,gi)=>sh+=`<td>${v?`<span style="color:${GDC[gi]};font-weight:500;font-size:13px">✓</span>`:`<span style="color:rgba(15,14,12,0.15)">·</span>`}</td>`);
    sh+='</tr>';
  }));
  sh+='</tbody></table>';
  sdw.innerHTML=sh;
}

function buildGuide(sit){
  const g=GUIDE_CONTENT[sit||'business'];
  const c=document.getElementById('guide-content');
  if(!c)return;
  c.innerHTML=`
    <div class="card" style="margin-bottom:20px">
      <div style="font-size:18px;font-weight:500;font-family:'Playfair Display',serif;margin-bottom:6px">${g.title}</div>
      <div style="font-size:13px;color:#5F5E5A;line-height:1.7;margin-bottom:20px">${g.desc}</div>
      ${g.steps.map((s,i)=>{
        const dom=D.find(d=>d.id===s.domain);
        return`<div class="step-card">
          <div style="width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:500;background:${dom.bg};color:${dom.txt};flex-shrink:0">${s.domain}</div>
          <div>
            <div style="font-size:13px;font-weight:500;margin-bottom:3px">${s.title}</div>
            <div style="font-size:12px;color:#5F5E5A;line-height:1.6">${s.detail}</div>
            <div style="font-size:10px;color:${dom.col};margin-top:4px;font-weight:500">${dom.name} — ${dom.code}</div>
          </div>
        </div>`;
      }).join('')}
    </div>
    <button class="btn btn-primary" onclick="openModal()">Start tracking this goal</button>`;
}

let currentSit='business';
function selectSit(sit,btn){
  document.querySelectorAll('#guide .cat-btn').forEach(b=>b.classList.remove('sel'));
  btn.classList.add('sel');
  currentSit=sit;
  buildGuide(sit);
}

// ══════════════ NAV ══════════════
function nav(id,btn){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if(btn)btn.classList.add('active');

  if(id==='goals')buildGoalsList('all');
  if(id==='insights')buildInsights();
  if(id==='explore')buildExploreDomains();
  if(id==='matrix')buildMatrix();
  if(id==='guide')buildGuide(currentSit);
  if(id==='journal')buildJournal();
}

// ══════════════ MODAL ══════════════
function openModal(){
  document.getElementById('modal').classList.add('open');
  document.querySelectorAll('#modal-cats .cat-btn').forEach(btn=>{
    btn.onclick=()=>{
      document.querySelectorAll('#modal-cats .cat-btn').forEach(b=>b.classList.remove('sel'));
      btn.classList.add('sel');
    };
  });
}
function closeModal(){ document.getElementById('modal').classList.remove('open'); }
function saveGoal(){
  const title=document.getElementById('goal-title-inp').value||'New Goal';
  alert(`Goal "${title}" created! Your HPF roadmap has been generated. Navigate to My Goals to see your personalised step-by-step plan.`);
  closeModal();
  nav('goals',null);
}
document.getElementById('modal').onclick=function(e){if(e.target===this)closeModal();};

// ══════════════ INIT ══════════════
buildGD5('dash-gd5');
buildCycle();
buildDashGoals();
buildTasks();
buildW6();
buildDomainRatings();
buildGuide('business');
