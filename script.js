function getActiveUserScope() {
  const email = (localStorage.getItem('Think GrowUserEmail') || '').trim().toLowerCase();
  if (!email) {
    return 'guest';
  }

  // Convert email to a stable, storage-safe scope segment.
  const normalized = email.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  return normalized || 'guest';
}

const ACTIVE_USER_SCOPE = getActiveUserScope();

const STORAGE_KEYS = {
  users: `Think Grow:${ACTIVE_USER_SCOPE}:userMetrics`,
  domains: `Think Grow:${ACTIVE_USER_SCOPE}:domainUsage`,
  goals: `Think Grow:${ACTIVE_USER_SCOPE}:goalAchievements`,
  checkins: `Think Grow:${ACTIVE_USER_SCOPE}:dailyCheckins`
};

const DOMAIN_META = [
  { key: 'observe', label: 'observe', abbrev: 'PCAREIA', color: '#ff7a59' },
  { key: 'understand', label: 'understand', abbrev: 'CECIARI', color: '#00a37a' },
  { key: 'Think', label: 'Think', abbrev: 'LCCASAH', color: '#ffb020' },
  { key: 'Decide', label: 'Decide', abbrev: 'RIICETS', color: '#2979ff' },
  { key: 'perfrom', label: 'perfrom', abbrev: 'ECCASSE', color: '#8b5cf6' },
  { key: 'Experience', label: 'Experience', abbrev: 'SCESCLT', color: '#ef4444' },
  { key: 'Repeat', label: 'Repeat', abbrev: 'IRACSHP', color: '#0ea5a4' }
];

const DOMAIN_DETAILS = {
  observe: {
    description: 'Foundation of human interaction — gathering information through perceptual and cognitive lenses. observe is the fundamental capability to notice, attend to, and make sense of what is happening in the world and within ourselves. It involves activating our senses, directing our attention, and becoming aware of subtle nuances in our environment and inner experience.',
    dimensions: [
      { level: 'Awareness', desc: 'Beginning to notice sensory input and environmental changes' },
      { level: 'understand', desc: 'Recognizing patterns and connections in observations' },
      { level: 'Application', desc: 'Using observations to inform daily decisions and interactions' },
      { level: 'Integration', desc: 'Integrating internal and external awareness into unified perception' },
      { level: 'Mastery', desc: 'Developing keen, nuanced perception across multiple contexts' }
    ],
    ways: [
      { way: 'Mindful Attention', desc: 'Practice focused attention on immediate sensory experience' },
      { way: 'Environmental Scanning', desc: 'Systematically observe your surroundings for details and patterns' },
      { way: 'Reflective Journaling', desc: 'Write down observations about situations and your reactions' },
      { way: 'Dialogue & Inquiry', desc: 'Ask curious questions to understand others\' perspectives' },
      { way: 'Perspective Shifts', desc: 'View situations from different angles and viewpoints' },
      { way: 'Deep Listening', desc: 'Hear not just words, but emotions and intentions behind them' }
    ],
    subdomains: [
      { name: 'Perceptual', desc: 'Gathering sensory information from the environment.' },
      { name: 'Continuous', desc: 'Maintaining sustained attention to evolving changes.' },
      { name: 'Analytical', desc: 'Breaking down observations to detect patterns.' },
      { name: 'Reflective', desc: 'Looking back at past observations for deeper insights.' },
      { name: 'External', desc: 'Awareness and attention to the outside world.' },
      { name: 'Internal', desc: 'Awareness of self — thoughts, feelings, and states.' },
      { name: 'Active', desc: 'Engaged and intentional focused attention.' }
    ]
  },
  understand: {
    description: 'Constructing meaningful interpretations — making sense of observations through frameworks and connections. understand is the bridge between observation and action. It involves interpreting what we perceive, connecting new information to existing knowledge, and building coherent mental models. understand allows us to see relationships, appreciate complexity, and develop wisdom.',
    dimensions: [
      { level: 'Awareness', desc: 'Recognizing that information has multiple possible meanings' },
      { level: 'understand', desc: 'Building initial mental models and frameworks' },
      { level: 'Application', desc: 'Using understand to explain situations to others' },
      { level: 'Integration', desc: 'Synthesizing multiple frameworks into personal wisdom' },
      { level: 'Mastery', desc: 'Deep, nuanced understand across domains and contexts' }
    ],
    ways: [
      { way: 'Systems Think', desc: 'Study how components interact within larger wholes' },
      { way: 'Analogical Reasoning', desc: 'Connect new concepts to familiar domains' },
      { way: 'Dialogue & Debate', desc: 'Explore multiple interpretations through discussion' },
      { way: 'Teaching Others', desc: 'Explain concepts to deepen your own understand' },
      { way: 'Experiential Learning', desc: 'Understand through direct experience and practice' },
      { way: 'Research & Reading', desc: 'Study diverse perspectives and expert frameworks' }
    ],
    subdomains: [
      { name: 'Contextual', desc: 'understand information within its broader context.' },
      { name: 'Systematic', desc: 'Grasping interconnections and cause-effect relationships.' },
      { name: 'Conceptual', desc: 'Building abstract mental models and theories.' },
      { name: 'Interpretive', desc: 'Drawing meaning from ambiguous or complex information.' },
      { name: 'Communicative', desc: 'understand through dialogue and explanation.' },
      { name: 'Intuitive', desc: 'Grasping concepts through felt sense and pattern recognition.' },
      { name: 'Analytical', desc: 'Breaking down concepts into constituent parts.' }
    ]
  },
  Think: {
    description: 'Cognitive processing — generating insights, solving problems, and creating mental frameworks. Think is the active manipulation of ideas, concepts, and information to create something new or solve complex problems. It ranges from logical deduction to creative ideation, from focused problem-solving to imaginative exploration. Think is how we generate possibilities and navigate uncertainty.',
    dimensions: [
      { level: 'Awareness', desc: 'Noticing your own Think patterns and biases' },
      { level: 'understand', desc: 'understand different types of Think and their uses' },
      { level: 'Application', desc: 'Using specific Think tools for problems' },
      { level: 'Integration', desc: 'Integrating multiple Think approaches flexibly' },
      { level: 'Mastery', desc: 'Generating innovative solutions and new frameworks' }
    ],
    ways: [
      { way: 'Critical Analysis', desc: 'Evaluate claims by examining evidence and logic' },
      { way: 'Creative Brainstorming', desc: 'Generate diverse ideas without judgment' },
      { way: 'Problem-Solving Frameworks', desc: 'Apply structured approaches to complex challenges' },
      { way: 'Thought Experiments', desc: 'Imagine scenarios to explore ideas and consequences' },
      { way: 'Collaborative Ideation', desc: 'Build ideas together with diverse perspectives' },
      { way: 'Reflective Practice', desc: 'Think about your Think to improve it' }
    ],
    subdomains: [
      { name: 'Critical', desc: 'Evaluating arguments and testing assumptions.' },
      { name: 'Creative', desc: 'Generating novel ideas and making unexpected connections.' },
      { name: 'Strategic', desc: 'Planning approaches and considering multiple pathways.' },
      { name: 'Logical', desc: 'Following reasoning and testing coherence.' },
      { name: 'Systemic', desc: 'Think about wholes and interconnected elements.' },
      { name: 'Abstract', desc: 'Manipulating concepts and exploring possibilities.' },
      { name: 'Practical', desc: 'Focusing on real-world application and constraints.' }
    ]
  },
  Decide: {
    description: 'Making judgments and choices — committing to actions aligned with values and goals. Decide is the crucial moment when we move from contemplation to commitment. It involves weighing options, considering values and consequences, and making choices that align with who we are and what we care about. Decide creates direction and momentum in life.',
    dimensions: [
      { level: 'Awareness', desc: 'Recognizing that a decision needs to be made' },
      { level: 'understand', desc: 'Clarifying options and understand consequences' },
      { level: 'Application', desc: 'Making decisions aligned with values and goals' },
      { level: 'Integration', desc: 'Decide with wisdom that integrates emotion and reason' },
      { level: 'Mastery', desc: 'Making clear decisions under uncertainty and complexity' }
    ],
    ways: [
      { way: 'Values Clarification', desc: 'Identify core values to guide decision-making' },
      { way: 'Pros & Cons Analysis', desc: 'Systematically evaluate options and tradeoffs' },
      { way: 'Consultation & Dialogue', desc: 'Seek input from trusted advisors and perspectives' },
      { way: 'Intuitive Sensing', desc: 'Notice and honor your gut feelings and instincts' },
      { way: 'Scenario Planning', desc: 'Consider multiple futures and prepare for them' },
      { way: 'Commitment Ritual', desc: 'Make decisions visible and mark the commitment' }
    ],
    subdomains: [
      { name: 'Values-Based', desc: 'Choosing based on personal and ethical principles.' },
      { name: 'Evidence-Based', desc: 'Decide informed by data and research.' },
      { name: 'Intuitive', desc: 'Trusting gut feelings and embodied knowing.' },
      { name: 'Collaborative', desc: 'Decide through dialogue and shared input.' },
      { name: 'Risk-Aware', desc: 'Considering consequences and preparing for uncertainty.' },
      { name: 'Committed', desc: 'Making firm choices and standing by them.' },
      { name: 'Adaptive', desc: 'Adjusting decisions as circumstances change.' }
    ]
  },
  perfrom: {
    description: 'Taking action — executing plans and implementing decisions with skill and intentionality. perfrom is where intention meets reality. It is the domain of action, execution, and bringing ideas into the world. perfrom involves developing skills, maintaining persistence, adapting to obstacles, and taking responsibility for results. It is how we make a difference.',
    dimensions: [
      { level: 'Awareness', desc: 'Recognizing the need for action and your capacity' },
      { level: 'understand', desc: 'understand what actions are needed and why' },
      { level: 'Application', desc: 'Taking skillful action toward meaningful goals' },
      { level: 'Integration', desc: 'Acting with alignment across body, mind, and values' },
      { level: 'Mastery', desc: 'perfrom at high levels with natural flow and efficiency' }
    ],
    ways: [
      { way: 'Skill Building', desc: 'Deliberately practice and develop specific competencies' },
      { way: 'Goal Setting', desc: 'Establish clear targets and track progress toward them' },
      { way: 'Iterative Practice', desc: 'Take action, learn from results, refine and repeat' },
      { way: 'Accountability Partnerships', desc: 'Support others in their performance and be supported' },
      { way: 'Resource Management', desc: 'Organize time, energy, and resources effectively' },
      { way: 'Celebration & Reflection', desc: 'Acknowledge progress and extract lessons from experience' }
    ],
    subdomains: [
      { name: 'Skilled', desc: 'perfrom with competence and mastery.' },
      { name: 'Intentional', desc: 'Acting with clear purpose and awareness.' },
      { name: 'Persistent', desc: 'Maintaining effort through challenges and setbacks.' },
      { name: 'Adaptive', desc: 'Adjusting actions based on feedback and changing conditions.' },
      { name: 'Collaborative', desc: 'Working effectively with others toward shared goals.' },
      { name: 'Responsible', desc: 'Taking accountability for outcomes and impact.' },
      { name: 'Energetic', desc: 'Acting with vitality, enthusiasm, and engagement.' }
    ]
  },
  Experience: {
    description: 'Sensing and feeling — engaging directly with the world and integrating the full spectrum of human experience. Experience is about being fully alive and present. It involves engaging our whole selves — body, emotions, intuition, and spirit — in direct contact with life. Experience brings richness, vitality, and authenticity to our existence.',
    dimensions: [
      { level: 'Awareness', desc: 'Noticing sensations, emotions, and feelings as they arise' },
      { level: 'understand', desc: 'understand the meaning and messages of experiences' },
      { level: 'Application', desc: 'Fully engaging in activities with presence and authenticity' },
      { level: 'Integration', desc: 'Integrating experiences into personal wisdom and meaning' },
      { level: 'Mastery', desc: 'Living fully, present, and authentic across all experiences' }
    ],
    ways: [
      { way: 'Sensory Immersion', desc: 'Fully engage the five senses in moments of beauty' },
      { way: 'Emotional Expression', desc: 'Allow and express genuine emotions and feelings' },
      { way: 'Creative Engagement', desc: 'Express yourself through art, music, movement' },
      { way: 'Nature Connection', desc: 'Spend time in nature and feel your connection' },
      { way: 'Relational Presence', desc: 'Be fully present and authentic with others' },
      { way: 'Spiritual Practice', desc: 'Engage with practices that connect you to meaning' }
    ],
    subdomains: [
      { name: 'Sensory', desc: 'Fully engaging the five senses in present moments.' },
      { name: 'Emotional', desc: 'Acknowledging and expressing feelings authentically.' },
      { name: 'Embodied', desc: 'Connecting with the body and physical presence.' },
      { name: 'Spiritual', desc: 'Connecting with purpose, meaning, and transcendence.' },
      { name: 'Social', desc: 'Engaging authentically with others and community.' },
      { name: 'Creative', desc: 'Expressing inner experiences through art and innovation.' },
      { name: 'Relational', desc: 'Experience deep connection with others and the world.' }
    ]
  },
  Repeat: {
    description: 'Consolidating learning — building habits, refining practices, and evolving through iteration. Repeat is the domain of growth through repetition and refinement. It involves building sustainable habits, learning from experience, and gradually developing mastery and wisdom. Repeat transforms temporary improvements into lasting capabilities.',
    dimensions: [
      { level: 'Awareness', desc: 'Noticing patterns in your learning and performance' },
      { level: 'understand', desc: 'understand how learning and habit formation work' },
      { level: 'Application', desc: 'Deliberately practicing and building new habits' },
      { level: 'Integration', desc: 'Integrating learning into your natural way of being' },
      { level: 'Mastery', desc: 'Continuous evolution and refinement toward mastery' }
    ],
    ways: [
      { way: 'Deliberate Practice', desc: 'Practice with focus on improvement and feedback' },
      { way: 'Habit Stacking', desc: 'Build new habits by attaching them to existing ones' },
      { way: 'Learning Loops', desc: 'Engage in cycles of action, reflection, and refinement' },
      { way: 'Community Learning', desc: 'Learn from and with others in your community' },
      { way: 'Documentation', desc: 'Track progress through journals, notes, and records' },
      { way: 'Mentorship', desc: 'Learn from experts and mentor others in turn' }
    ],
    subdomains: [
      { name: 'Iterative', desc: 'Improving through cycles of practice and feedback.' },
      { name: 'Habitual', desc: 'Building sustainable routines and automaticity.' },
      { name: 'Reflective', desc: 'Learning from experience and extracting lessons.' },
      { name: 'Cumulative', desc: 'Building on previous learning to reach new levels.' },
      { name: 'Adaptive', desc: 'Evolving practices as understand deepens.' },
      { name: 'Mastery', desc: 'Developing expertise through dedicated practice.' },
      { name: 'Transformative', desc: 'Using repetition to fundamentally change capabilities.' }
    ]
  }
};

const state = {
  totalUsers: 0,
  activeNow: 0,
  impactScore: 0,
  updatesToday: 0,
  usage: [],
  goalsTrend: [0, 0, 0, 0, 0, 0, 0],
  domainCounts: [],
  goalsAchieved: []
};

let goalsSectionControlsWired = false;
let currentViewName = 'dashboard';

function isAuthenticated() {
  return sessionStorage.getItem('Think GrowLoggedIn') === 'true' || localStorage.getItem('Think GrowLoggedIn') === 'true';
}

function logoutUser() {
  sessionStorage.removeItem('Think GrowLoggedIn');
  localStorage.removeItem('Think GrowLoggedIn');
  // After logout, send users back to the public landing page
  window.location.href = 'Landing%20page/landingpage.html';
}

function ensureAuthenticated() {
  if (!isAuthenticated()) {
    // Always require users to come via the landing page before signing in
    window.location.href = 'Landing%20page/landingpage.html';
    return false;
  }
  return true;
}

function parseJSON(raw, fallback) {
  try {
    if (!raw) {
      return fallback;
    }
    return JSON.parse(raw);
  } catch (error) {
    return fallback;
  }
}

function getTodayISODate() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${now.getFullYear()}-${month}-${day}`;
}

function showView(viewName) {
  currentViewName = viewName;
  const dashboardView = document.getElementById('view-dashboard');
  const checkinView = document.getElementById('view-checkin');
  const journalView = document.getElementById('view-journal');
  const insightsView = document.getElementById('view-insights');
  const exploreDomains = document.getElementById('view-explore-domains');
  const myGoalsView = document.getElementById('view-my-goals');
  const hpfGuideView = document.getElementById('view-hpf-guide');
  const profileView = document.getElementById('view-profile');
  if (!dashboardView || !checkinView || !journalView || !insightsView || !exploreDomains || !myGoalsView || !hpfGuideView || !profileView) {
    return;
  }

  dashboardView.classList.toggle('active', viewName === 'dashboard');
  checkinView.classList.toggle('active', viewName === 'checkin');
  journalView.classList.toggle('active', viewName === 'journal');
  insightsView.classList.toggle('active', viewName === 'insights');
  exploreDomains.classList.toggle('active', viewName === 'explore-domains');
  myGoalsView.classList.toggle('active', viewName === 'my-goals');
  hpfGuideView.classList.toggle('active', viewName === 'hpf-guide');
  profileView.classList.toggle('active', viewName === 'profile');
    const categoryMatrixView = document.getElementById('view-category-matrix');
    if (categoryMatrixView) {
      categoryMatrixView.classList.toggle('active', viewName === 'category-matrix');
    }
  
  if (viewName === 'journal') {
    renderJournal();
  }
  if (viewName === 'insights') {
    renderInsights();
  }
  if (viewName === 'explore-domains') {
    renderExploreDomains();
  }
  if (viewName === 'my-goals') {
    renderMyGoalsViewPage();
  }
  if (viewName === 'hpf-guide') {
    renderHPFGuideViewPage();
  }
  if (viewName === 'profile') {
    renderProfileView();
    if (viewName === 'category-matrix') {
      initializeCategoryMatrixView();
    }
  }
}

function getUserProfileData() {
  const usersData = parseJSON(localStorage.getItem(STORAGE_KEYS.users), {});
  const checkinsData = parseJSON(localStorage.getItem(STORAGE_KEYS.checkins), []);
  const goalsData = getStoredGoals();

  const savedName = localStorage.getItem('Think GrowUserName') || sessionStorage.getItem('Think GrowUserName');
  const savedEmail = localStorage.getItem('Think GrowUserEmail') || sessionStorage.getItem('Think GrowUserEmail');
  const name = (savedName || 'Ashok Upadhya').trim();
  const email = (savedEmail || 'No email saved').trim();
  const joined = checkinsData.length > 0 ? checkinsData[0].date : getTodayISODate();
  const completedGoals = goalsData.filter((goal) => goal.achieved).length;

  return {
    name,
    email,
    role: 'HPF Member',
    joined,
    totalUsers: Number(usersData.totalUsers) || 0,
    activeNow: Number(usersData.activeNow) || 0,
    updatesToday: Number(usersData.updatesToday) || 0,
    checkins: checkinsData.length,
    goalsTotal: goalsData.length,
    goalsCompleted: completedGoals
  };
}

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('') || 'HP';
}

function renderProfileView() {
  const profile = getUserProfileData();

  const sidebarAvatar = document.getElementById('sidebarAvatar');
  const sidebarUserName = document.getElementById('sidebarUserName');
  const sidebarUserLevel = document.getElementById('sidebarUserLevel');
  const profileAvatar = document.getElementById('profileAvatar');
  const profileName = document.getElementById('profileName');
  const profileEmail = document.getElementById('profileEmail');
  const profileRole = document.getElementById('profileRole');
  const profileJoined = document.getElementById('profileJoined');
  const detailsGrid = document.getElementById('profileDetailsGrid');
  const activityGrid = document.getElementById('profileActivityGrid');

  if (!profileAvatar || !profileName || !profileEmail || !profileRole || !profileJoined || !detailsGrid || !activityGrid) {
    return;
  }

  const initials = getInitials(profile.name);
  if (sidebarAvatar) {
    sidebarAvatar.textContent = initials;
  }
  if (sidebarUserName) {
    sidebarUserName.textContent = profile.name;
  }
  if (sidebarUserLevel) {
    sidebarUserLevel.textContent = profile.role;
  }

  profileAvatar.textContent = initials;
  profileName.textContent = profile.name;
  profileEmail.textContent = profile.email;
  profileRole.textContent = profile.role;
  profileJoined.textContent = `Joined: ${profile.joined}`;

  detailsGrid.innerHTML = `
    <div class="profile-detail-item"><span>Name</span><strong>${profile.name}</strong></div>
    <div class="profile-detail-item"><span>Email</span><strong>${profile.email}</strong></div>
    <div class="profile-detail-item"><span>Role</span><strong>${profile.role}</strong></div>
    <div class="profile-detail-item"><span>Joined</span><strong>${profile.joined}</strong></div>
    <div class="profile-detail-item"><span>Total Goals</span><strong>${formatNumber(profile.goalsTotal)}</strong></div>
    <div class="profile-detail-item"><span>Completed Goals</span><strong>${formatNumber(profile.goalsCompleted)}</strong></div>
  `;

  activityGrid.innerHTML = `
    <div class="profile-detail-item"><span>Total Users</span><strong>${formatNumber(profile.totalUsers)}</strong></div>
    <div class="profile-detail-item"><span>Active Now</span><strong>${formatNumber(profile.activeNow)}</strong></div>
    <div class="profile-detail-item"><span>Updates Today</span><strong>${formatNumber(profile.updatesToday)}</strong></div>
    <div class="profile-detail-item"><span>Check-ins Logged</span><strong>${formatNumber(profile.checkins)}</strong></div>
    <div class="profile-detail-item"><span>Goal Completion Rate</span><strong>${profile.goalsTotal === 0 ? '0%' : `${Math.round((profile.goalsCompleted / profile.goalsTotal) * 100)}%`}</strong></div>
    <div class="profile-detail-item"><span>Last Synced</span><strong>${new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit' }).format(new Date())}</strong></div>
  `;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function formatNumber(value) {
  return new Intl.NumberFormat('en-US').format(value || 0);
}

function updateTimestamp() {
  const el = document.getElementById('lastUpdated');
  if (!el) {
    return;
  }
  el.textContent = '';
}

function normalizeUsage(values) {
  const total = values.reduce((sum, item) => sum + item.value, 0);
  if (total === 0) {
    return [{ label: 'No usage', value: 100, color: '#cbd5e1', users: 0 }];
  }

  let allocated = 0;
  return values.map((item, index) => {
    if (index === values.length - 1) {
      return { ...item, value: 100 - allocated };
    }
    const pct = Math.round((item.value / total) * 100);
    allocated += pct;
    return { ...item, value: pct };
  });
}

function buildGoalsTrend(goals) {
  const days = [0, 0, 0, 0, 0, 0, 0];
  const now = new Date();
  goals.forEach((goal) => {
    if (!goal.achievedAt) {
      return;
    }
    const achievedDate = new Date(goal.achievedAt);
    if (Number.isNaN(achievedDate.getTime())) {
      return;
    }
    const dayDiff = Math.floor((now - achievedDate) / 86400000);
  const idx = dayDiff;
    if (idx >= 0 && idx <= 6) {
      days[idx] += 1;
    }
  });
  return days;
}

function createGoalId() {
  return `goal-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function normalizeGoalRecord(goal, index) {
  if (!goal || typeof goal !== 'object') {
    return null;
  }

  const title = typeof goal.title === 'string' ? goal.title.trim() : '';
  return {
    id: goal.id || `goal-${index}`,
    title,
    achieved: Boolean(goal.achieved),
    achievedAt: goal.achievedAt || null,
    createdAt: goal.createdAt || null
  };
}

function getStoredGoals() {
  const goalsData = parseJSON(localStorage.getItem(STORAGE_KEYS.goals), []);
  if (!Array.isArray(goalsData)) {
    return [];
  }

  let needsSave = false;
  const normalizedGoals = goalsData
    .map((goal, index) => {
      const normalized = normalizeGoalRecord(goal, index);
      if (!normalized) {
        needsSave = true;
        return null;
      }
      if (!goal.id || normalized.title !== goal.title || normalized.achieved !== Boolean(goal.achieved) || normalized.achievedAt !== (goal.achievedAt || null) || normalized.createdAt !== (goal.createdAt || null)) {
        needsSave = true;
      }
      return normalized;
    })
    .filter(Boolean);

  if (needsSave) {
    localStorage.setItem(STORAGE_KEYS.goals, JSON.stringify(normalizedGoals));
  }

  return normalizedGoals;
}

function saveGoals(goals) {
  localStorage.setItem(STORAGE_KEYS.goals, JSON.stringify(goals));
}

function createGoalRecord(title, achieved = false, achievedAt = null, createdAt = getTodayISODate()) {
  return {
    id: createGoalId(),
    title: title.trim(),
    achieved,
    achievedAt,
    createdAt
  };
}

function hydrateStateFromStorage() {
  const usersData = parseJSON(localStorage.getItem(STORAGE_KEYS.users), {});
  const domainsData = parseJSON(localStorage.getItem(STORAGE_KEYS.domains), {});
  const goalsData = parseJSON(localStorage.getItem(STORAGE_KEYS.goals), []);

  const domainCounts = DOMAIN_META.map((domain) => {
    const count = Number(domainsData[domain.key]) || 0;
    return {
      label: domain.label,
      count,
      color: domain.color
    };
  });

  const totalDomainEvents = domainCounts.reduce((sum, item) => sum + item.count, 0);
  const goalsAchieved = goalsData.filter((goal) => Boolean(goal && goal.achieved));

  state.totalUsers = Number(usersData.totalUsers) || 0;
  state.activeNow = Number(usersData.activeNow) || 0;
  state.updatesToday = Number(usersData.updatesToday) || totalDomainEvents;
  state.impactScore = totalDomainEvents === 0
    ? 0
    : clamp(Math.round((goalsAchieved.length / totalDomainEvents) * 100), 0, 100);

  state.domainCounts = domainCounts;
  state.goalsAchieved = goalsAchieved.slice(-6).reverse();
  state.goalsTrend = buildGoalsTrend(goalsAchieved);

  state.usage = normalizeUsage(
    domainCounts
      .filter((item) => item.count > 0)
      .map((item) => ({
        label: item.label,
        value: item.count,
        color: item.color,
        users: item.count
      }))
  );
}

function renderStats() {
  const totalUsersEl = document.getElementById('totalUsers');
  const activeNowEl = document.getElementById('activeNow');
  const impactScoreEl = document.getElementById('impactScore');
  const updatesTodayEl = document.getElementById('updatesToday');

  if (totalUsersEl) {
    totalUsersEl.textContent = formatNumber(state.totalUsers);
  }
  if (activeNowEl) {
    activeNowEl.textContent = formatNumber(state.activeNow);
  }
  if (impactScoreEl) {
    impactScoreEl.textContent = String(state.impactScore);
  }
  if (updatesTodayEl) {
    updatesTodayEl.textContent = formatNumber(state.updatesToday);
  }
}

function renderPie() {
  const pie = document.getElementById('usagePie');
  const legend = document.getElementById('usageLegend');
  if (!pie || !legend) {
    return;
  }

  let start = 0;
  const slices = state.usage.map((item) => {
    const end = start + item.value;
    const gradientPart = `${item.color} ${start}% ${end}%`;
    start = end;
    return gradientPart;
  });

  pie.style.background = `conic-gradient(${slices.join(', ')})`;

  legend.innerHTML = state.usage
    .map((item) => `
      <li class="rt-legend-item">
        <span class="rt-legend-dot" style="background:${item.color}"></span>
        <div>
          <p>${item.label}</p>
          <small>${item.value}% (${formatNumber(item.users)} events)</small>
        </div>
      </li>`)
    .join('');
}

function renderGoalBars() {
  const bars = document.getElementById('dailyBars');
  if (!bars) {
    return;
  }

  const maxCount = Math.max(...state.goalsTrend, 1);

  bars.innerHTML = state.goalsTrend
    .map((value, index) => {
      const heightPct = Math.round((value / maxCount) * 100);
      return `
        <div class="rt-bar-item">
          <div class="rt-bar-track">
            <div class="rt-bar-fill" style="height:${heightPct}%"></div>
          </div>
          <span>D${index + 1}</span>
        </div>`;
    })
    .join('');
}

function renderDomainUsageList() {
  const list = document.getElementById('domainUsageList');
  if (!list) {
    return;
  }

  list.innerHTML = state.domainCounts
    .map((item) => `
      <div class="rt-list-item">
        <span class="rt-list-key">
          <span class="rt-legend-dot" style="background:${item.color}"></span>
          ${item.label}
        </span>
        <strong>${formatNumber(item.count)}</strong>
      </div>`)
    .join('');
}

function renderGoalsAchievedList() {
  const list = document.getElementById('goalsAchievedList');
  if (!list) {
    return;
  }

  if (state.goalsAchieved.length === 0) {
    list.innerHTML = '<div class="rt-empty">0 tasks completed yet.</div>';
    return;
  }

  list.innerHTML = state.goalsAchieved
    .map((goal) => {
      const date = goal.achievedAt
        ? new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(new Date(goal.achievedAt))
        : 'No date';
      const title = goal.title || 'Untitled goal';
      return `
        <div class="rt-list-item">
          <span class="rt-list-key">${title}</span>
          <small>${date}</small>
        </div>`;
    })
    .join('');
}

function renderJournal() {
  const entriesList = document.getElementById('journalEntriesList');
  if (!entriesList) {
    return;
  }

  const checkinsData = parseJSON(localStorage.getItem(STORAGE_KEYS.checkins), []);

  if (checkinsData.length === 0) {
    entriesList.innerHTML = '<div class="rt-empty">No journal entries yet. Start by adding a daily check-in!</div>';
    return;
  }

const uniqueDailyEntries = [];
const seenDates = new Set();

[...checkinsData]
  .reverse()
  .forEach((entry) => {
    if (!seenDates.has(entry.date)) {
      seenDates.add(entry.date);
      uniqueDailyEntries.push(entry);
    }
  });
 entriesList.innerHTML = uniqueDailyEntries
    .map((entry) => {
      const dateObj = new Date(entry.date);
      const formattedDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'short'
      }).format(dateObj);

      const categoryBars = DOMAIN_META
        .map((domain) => {
          const value = Number(entry.domains[domain.key]) || 0;
          return `
            <div class="journal-entry-category">
              <span class="journal-category-label">${domain.key}</span>
              <div class="journal-category-bar">
                <div class="journal-category-fill" style="width: ${(value / 5) * 100}%; background-color: ${domain.color};"></div>
              </div>
              <span class="journal-category-value">${value}/5</span>
            </div>`;
        })
        .join('');

      const taskStatus = entry.goalAchieved
        ? '<span class="journal-task-completed">✓ Completed</span>'
        : '<span class="journal-task-pending">○ Pending</span>';

      const taskSection = entry.goalTitle || entry.goalAchieved
        ? `<div class="journal-task-section">
             <strong>Task:</strong> ${entry.goalTitle || 'Untitled'}
             ${taskStatus}
           </div>`
        : '';

      const notesSection = entry.notes
        ? `<div class="journal-notes-section">
             <strong>Notes:</strong>
             <p>${entry.notes}</p>
           </div>`
        : '';

      return `
        <article class="journal-entry-card">
          <div class="journal-entry-date">${formattedDate}</div>
          ${taskSection}
          <div class="journal-categories-section">
            <strong>Category Usage:</strong>
            <div class="journal-categories-grid">${categoryBars}</div>
          </div>
          ${notesSection}
        </article>`;
    })
    .join('');
}

function renderInsights() {
  const usersEl = document.getElementById('insightsTotalUsers');
  const activeEl = document.getElementById('insightsActiveNow');
  const updatesEl = document.getElementById('insightsUpdatesToday');
  const impactEl = document.getElementById('insightsImpactScore');
  const barsEl = document.getElementById('insightsBars');
  const categoryPerfEl = document.getElementById('insightsCategoryPerf');
  const topCategoriesEl = document.getElementById('insightsTopCategories');

  if (!usersEl || !activeEl || !updatesEl || !impactEl || !barsEl || !categoryPerfEl || !topCategoriesEl) {
    return;
  }

  hydrateStateFromStorage();

  // Update metrics
  usersEl.textContent = formatNumber(state.totalUsers);
  activeEl.textContent = formatNumber(state.activeNow);
  updatesEl.textContent = formatNumber(state.updatesToday);
  impactEl.textContent = String(state.impactScore) + '%';

  // Render 7-day trend bars
  const maxCount = Math.max(...state.goalsTrend, 1);
  barsEl.innerHTML = state.goalsTrend
    .map((value, index) => {
      const heightPct = Math.round((value / maxCount) * 100);
      return `
        <div class="rt-bar-item">
          <div class="rt-bar-track">
            <div class="rt-bar-fill" style="height:${heightPct}%"></div>
          </div>
          <span>D${index + 1}</span>
        </div>`;
    })
    .join('');

  // Render category performance with colored bars
  categoryPerfEl.innerHTML = state.domainCounts
    .map((item) => {
      const total = state.domainCounts.reduce((sum, d) => sum + d.count, 0);
      const widthPct = total === 0 ? 0 : Math.round((item.count / total) * 100);
      return `
        <div class="insights-perf-item">
          <div class="insights-perf-label">${item.label}</div>
          <div class="insights-perf-bar">
            <div class="insights-perf-fill" style="width: ${widthPct}%; background-color: ${item.color};"></div>
          </div>
          <span class="insights-perf-value">${item.count}</span>
        </div>`;
    })
    .join('');

  // Render top categories by count
  const sortedCategories = [...state.domainCounts].sort((a, b) => b.count - a.count);
  topCategoriesEl.innerHTML = sortedCategories.length === 0
    ? '<div class="rt-empty">No category data yet.</div>'
    : sortedCategories
        .map((item) => `
          <div class="rt-list-item">
            <span class="rt-list-key">
              <span class="rt-legend-dot" style="background:${item.color}"></span>
              ${item.label}
            </span>
            <strong>${formatNumber(item.count)}</strong>
          </div>`)
        .join('');
}

function renderExploreDomains() {
  const grid = document.getElementById('domainsGrid');
  if (!grid) {
    return;
  }

  hydrateStateFromStorage();

  grid.innerHTML = DOMAIN_META
    .map((domain) => {
      const count = state.domainCounts.find(d => d.label === domain.label)?.count || 0;
      const total = state.domainCounts.reduce((sum, d) => sum + d.count, 0);
      const percentage = total === 0 ? 0 : Math.round((count / total) * 100);
      const firstLetter = domain.key.charAt(0).toUpperCase();

      return `
        <article class="domain-card" onclick="showDomainDetail('${domain.key}')">
          <div class="domain-letter">${firstLetter}</div>
          <div class="domain-card-content">
            <h3>${domain.label}</h3>
            <p class="domain-abbrev">${domain.abbrev}</p>
            <div class="domain-progress">
              <div class="domain-progress-bar">
                <div class="domain-progress-fill" style="width: ${percentage}%; background-color: ${domain.color};"></div>
              </div>
              <span class="domain-progress-text">${percentage}%</span>
            </div>
          </div>
        </article>`;
    })
    .join('');
}

function showDomainDetail(domainKey) {
  const grid = document.getElementById('domainsGrid');
  const detail = document.getElementById('domainDetail');
  const header = document.getElementById('domainDetailHeader');
  const desc = document.getElementById('domainDetailDesc');
  const dimensions = document.getElementById('domainDimensions');
  const ways = document.getElementById('domainWays');
  const subdomains = document.getElementById('domainSubdomains');

  if (!grid || !detail || !header || !desc || !dimensions || !ways || !subdomains) {
    return;
  }

  const domain = DOMAIN_META.find(d => d.key === domainKey);
  const details = DOMAIN_DETAILS[domainKey];

  if (!domain || !details) {
    return;
  }

  const firstLetter = domain.key.charAt(0).toUpperCase();

  header.innerHTML = `
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 12px;">
      <div class="domain-letter-large" style="background-color: ${domain.color};">${firstLetter}</div>
      <div>
        <h2>${domain.label} (${domain.abbrev})</h2>
      </div>
    </div>`;

  desc.innerHTML = `<p>${details.description}</p>`;

  dimensions.innerHTML = `
    <div class="dimensions-list">
      ${details.dimensions
        .map(
          (dim, idx) => `
        <div class="dimension-item" style="border-left: 4px solid ${domain.color};">
          <div class="dimension-level">Level ${idx + 1}: ${dim.level}</div>
          <p>${dim.desc}</p>
        </div>`
        )
        .join('')}
    </div>`;

  ways.innerHTML = `
    <div class="ways-list">
      ${details.ways
        .map(
          (way) => `
        <div class="way-item">
          <div class="way-title">${way.way}</div>
          <p>${way.desc}</p>
        </div>`
        )
        .join('')}
    </div>`;

  subdomains.innerHTML = `
      ${details.subdomains
        .map(
          (sub) => `
        <div class="subdomain-item">
          <h4>${sub.name}</h4>
          <p>${sub.desc}</p>
        </div>`
        )
        .join('')}
    `;

  grid.style.display = 'none';
  detail.style.display = 'block';
}

function closeDomainDetail() {
  const grid = document.getElementById('domainsGrid');
  const detail = document.getElementById('domainDetail');

  if (grid && detail) {
    grid.style.display = 'grid';
    detail.style.display = 'none';
  }
}

function renderAll() {
  hydrateStateFromStorage();
  renderStats();
  renderPie();
  renderGoalBars();
  renderDomainUsageList();
  renderGoalsAchievedList();
  renderMyGoals();
  renderProfileView();
  if (currentViewName === 'my-goals') {
    renderMyGoalsViewPage();
  }
  updateTimestamp();
}

function renderMyGoals() {
  const container = document.getElementById('myGoalsContainer');
  if (!container) {
    return;
  }

  const allGoals = getStoredGoals();

  if (allGoals.length === 0) {
    container.innerHTML = `
      <div class="goals-empty-state">
        <p>No goals set yet. Add a goal in My Goals or log a completed task in Daily Check-in.</p>
      </div>`;
    return;
  }

  const completed = allGoals.filter(g => g.achieved);
  const pending = allGoals.filter(g => !g.achieved);

  container.innerHTML = `
    <div class="goals-summary">
      <div class="goals-stat">
        <span class="goals-stat-label">Total</span>
        <span class="goals-stat-value">${allGoals.length}</span>
      </div>
      <div class="goals-stat">
        <span class="goals-stat-label">Completed</span>
        <span class="goals-stat-value completed">${completed.length}</span>
      </div>
      <div class="goals-stat">
        <span class="goals-stat-label">Pending</span>
        <span class="goals-stat-value pending">${pending.length}</span>
      </div>
    </div>
    <div class="goals-list">
      ${pending.length > 0 ? `
        <div class="goals-group">
          <h5>Active Goals</h5>
          ${pending.slice(0, 3).map(goal => `
            <div class="goal-item active">
              <span class="goal-status">◇</span>
              <span class="goal-title">${goal.title || 'Untitled goal'}</span>
            </div>
          `).join('')}
          ${pending.length > 3 ? `<p class="goals-more">+${pending.length - 3} more</p>` : ''}
        </div>
      ` : ''}
      ${completed.length > 0 ? `
        <div class="goals-group">
          <h5>Recently Completed</h5>
          ${completed.slice(0, 3).map(goal => `
            <div class="goal-item completed">
              <span class="goal-status">✓</span>
              <span class="goal-title">${goal.title || 'Untitled goal'}</span>
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>`;
}

function renderMyGoalsViewPage() {
  const container = document.getElementById('myGoalsContainerMain');
  if (!container) {
    return;
  }

  const allGoals = getStoredGoals();

  if (allGoals.length === 0) {
    container.innerHTML = `
      <div class="goals-empty-state">
        <p>No goals set yet. Add your first goal above to start tracking progress.</p>
      </div>`;
    return;
  }

  const completed = allGoals.filter(g => g.achieved);
  const pending = allGoals.filter(g => !g.achieved);

  const renderGoalCard = (goal) => {
    const title = goal.title || 'Untitled goal';
    const statusText = goal.achieved ? 'Completed' : 'In progress';
    const dateText = goal.achievedAt
      ? `Completed ${new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(new Date(goal.achievedAt))}`
      : goal.createdAt
        ? `Created ${new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(new Date(goal.createdAt))}`
        : 'Track this goal until it is complete';

    return `
      <div class="goal-card ${goal.achieved ? 'completed' : 'active'}">
        <div class="goal-card-main">
          <div class="goal-card-heading">
            <span class="goal-status">${goal.achieved ? '✓' : '◇'}</span>
            <div>
              <h4 class="goal-card-title">${title}</h4>
              <p class="goal-card-meta">${statusText} · ${dateText}</p>
            </div>
          </div>
        </div>
        <div class="goal-card-actions">
          <button type="button" class="goal-action-btn" data-goal-action="toggle" data-goal-id="${goal.id}">${goal.achieved ? 'Reopen' : 'Mark complete'}</button>
          <button type="button" class="goal-action-btn secondary" data-goal-action="remove" data-goal-id="${goal.id}">Remove</button>
        </div>
      </div>`;
  };

  container.innerHTML = `
    <div class="goals-summary">
      <div class="goals-stat">
        <span class="goals-stat-label">Total</span>
        <span class="goals-stat-value">${allGoals.length}</span>
      </div>
      <div class="goals-stat">
        <span class="goals-stat-label">Completed</span>
        <span class="goals-stat-value completed">${completed.length}</span>
      </div>
      <div class="goals-stat">
        <span class="goals-stat-label">Pending</span>
        <span class="goals-stat-value pending">${pending.length}</span>
      </div>
    </div>
    <div class="goals-list">
      ${pending.length > 0 ? `
        <div class="goals-group">
          <h5>Active Goals</h5>
          ${pending.map(renderGoalCard).join('')}
        </div>
      ` : ''}
      ${completed.length > 0 ? `
        <div class="goals-group">
          <h5>Completed Goals</h5>
          ${completed.map(renderGoalCard).join('')}
        </div>
      ` : ''}
    </div>`;
}

function addGoalFromInput() {
  const goalInput = document.getElementById('newGoalInput');
  if (!goalInput) {
    return;
  }

  const title = goalInput.value.trim();
  if (!title) {
    goalInput.focus();
    return;
  }

  const goals = getStoredGoals();
  goals.push(createGoalRecord(title));
  saveGoals(goals);
  goalInput.value = '';
  renderAll();
  goalInput.focus();
}

function toggleGoalCompletion(goalId) {
  const goals = getStoredGoals();
  const goal = goals.find((item) => item.id === goalId);
  if (!goal) {
    return;
  }

  goal.achieved = !goal.achieved;
  goal.achievedAt = goal.achieved ? `${getTodayISODate()}T00:00:00Z` : null;
  saveGoals(goals);
  renderAll();
}

function removeGoal(goalId) {
  const goals = getStoredGoals().filter((goal) => goal.id !== goalId);
  saveGoals(goals);
  renderAll();
}

function handleGoalActionClick(event) {
  const button = event.target.closest('[data-goal-action]');
  if (!button) {
    return;
  }

  const goalId = button.getAttribute('data-goal-id');
  const goalAction = button.getAttribute('data-goal-action');
  if (!goalId || !goalAction) {
    return;
  }

  if (goalAction === 'toggle') {
    toggleGoalCompletion(goalId);
    return;
  }

  if (goalAction === 'remove') {
    removeGoal(goalId);
  }
}

function wireGoalSectionControls() {
  if (goalsSectionControlsWired) {
    return;
  }

  goalsSectionControlsWired = true;

  const addGoalButton = document.getElementById('addGoalButton');
  const goalInput = document.getElementById('newGoalInput');
  const goalContainer = document.getElementById('myGoalsContainerMain');

  if (addGoalButton) {
    addGoalButton.addEventListener('click', addGoalFromInput);
  }

  if (goalInput) {
    goalInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        addGoalFromInput();
      }
    });
  }

  if (goalContainer) {
    goalContainer.addEventListener('click', handleGoalActionClick);
  }
}

function renderHPFGuideViewPage() {
  const scenarioButtons = document.querySelectorAll('.scenario-btn');
  const roadmapContainer = document.getElementById('roadmapContainer');
  
  scenarioButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const scenario = btn.getAttribute('data-scenario');
      showScenarioRoadmap(scenario);
      
      // Update active state
      scenarioButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

function showScenarioRoadmap(scenario) {
  const roadmapContainer = document.getElementById('roadmapContainer');
  const roadmapTitle = document.getElementById('roadmapTitle');
  const roadmapIntro = document.getElementById('roadmapIntro');
  
  const scenarios = {
    business: {
      title: 'Designer → Digital Agency Founder',
      intro: 'You have design skills. Now you need business acumen, systems Think, and the courage to decide and perform.'
    },
    student: {
      title: 'Student → Academic Excellence',
      intro: 'Balancing coursework, projects, and personal growth requires strategic learning and consistent execution.'
    },
    time: {
      title: 'Chaos → Time Mastery',
      intro: 'Transform how you manage your time by observe patterns, understand priorities, and building sustainable routines.'
    },
    career: {
      title: 'Professional → Industry Leader',
      intro: 'Advance your career by developing strategic Think, decisive action, and continuous learning.'
    },
    health: {
      title: 'Struggle → Wellness Champion',
      intro: 'Build lasting health habits by understand your body, making informed decisions, and consistently perfrom.'
    },
    relationships: {
      title: 'Distant → Deeply Connected',
      intro: 'Transform relationships by observe emotional patterns, understand needs, and communicating authentically.'
    }
  };
  
  const selected = scenarios[scenario] || scenarios.business;
  roadmapTitle.textContent = selected.title;
  roadmapIntro.textContent = selected.intro;
  roadmapContainer.style.display = 'block';
  
  // Scroll to roadmap
  setTimeout(() => {
    roadmapContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

function startTrackingGoal() {
  showView('my-goals');
  
  setTimeout(() => {
    const goalInput = document.getElementById('newGoalInput');
    if (goalInput) {
      goalInput.focus();
      goalInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 300);
}

function buildCheckinDomainInputs() {
  const grid = document.getElementById('domainCheckinGrid');
  if (!grid) {
    return;
  }

  grid.innerHTML = DOMAIN_META.map((domain) => `
    <div class="w6-card">
      <div class="w6-q">Category</div>
      <div class="w6-label">${domain.label}</div>
      <input class="w6-inp" type="number" min="0" max="5" value="0" data-domain-input="${domain.key}">
    </div>
  `).join('');
}

function getCheckinDomainValues() {
  const values = {};
  DOMAIN_META.forEach((domain) => {
    const input = document.querySelector(`[data-domain-input="${domain.key}"]`);
    const raw = Number(input ? input.value : 0);
    values[domain.key] = clamp(Number.isFinite(raw) ? raw : 0, 0, 5);
  });
  return values;
}

function saveDailyCheckin() {
  const usersData = parseJSON(localStorage.getItem(STORAGE_KEYS.users), {});
  const domainsData = parseJSON(localStorage.getItem(STORAGE_KEYS.domains), {});
  const goalsData = parseJSON(localStorage.getItem(STORAGE_KEYS.goals), []);
  const checkinsData = parseJSON(localStorage.getItem(STORAGE_KEYS.checkins), []);

  const dateInput = document.getElementById('checkinDate');
  const goalTitleInput = document.getElementById('goalTitleInput');
  const goalAchievedInput = document.getElementById('goalAchievedInput');
  const notesInput = document.getElementById('checkinNotes');
  const status = document.getElementById('checkinStatus');

  const checkinDate = dateInput && dateInput.value ? dateInput.value : getTodayISODate();
  const goalTitle = goalTitleInput ? goalTitleInput.value.trim() : '';
  const goalAchieved = Boolean(goalAchievedInput && goalAchievedInput.checked);
  const notes = notesInput ? notesInput.value.trim() : '';
  const domainValues = getCheckinDomainValues();

  let totalActivity = 0;
  DOMAIN_META.forEach((domain) => {
    const value = Number(domainValues[domain.key]) || 0;
    domainsData[domain.key] = (Number(domainsData[domain.key]) || 0) + value;
    totalActivity += value;
  });

  usersData.totalUsers = Math.max(1, Number(usersData.totalUsers) || 0);
  usersData.activeNow = totalActivity > 0 ? 1 : 0;
  usersData.updatesToday = (Number(usersData.updatesToday) || 0) + totalActivity;

  if (goalTitle || goalAchieved) {
    goalsData.push(createGoalRecord(goalTitle || 'Untitled task', goalAchieved, goalAchieved ? `${checkinDate}T00:00:00Z` : null, checkinDate));
  }

  checkinsData.push({
    date: checkinDate,
    domains: domainValues,
    goalTitle,
    goalAchieved,
    notes
  });

  localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(usersData));
  localStorage.setItem(STORAGE_KEYS.domains, JSON.stringify(domainsData));
  localStorage.setItem(STORAGE_KEYS.goals, JSON.stringify(goalsData));
  localStorage.setItem(STORAGE_KEYS.checkins, JSON.stringify(checkinsData));

  if (status) {
    status.textContent = 'Daily check-in saved successfully.';
  }

  renderAll();
}

function toggleSidebar(forceOpen) {
  const shouldOpen = typeof forceOpen === 'boolean'
    ? forceOpen
    : !document.body.classList.contains('sidebar-open');
  document.body.classList.toggle('sidebar-open', shouldOpen);

  const toggleBtn = document.getElementById('mobile-nav-toggle');
  if (toggleBtn) {
    toggleBtn.setAttribute('aria-expanded', String(shouldOpen));
  }
}

function toggleDesktopSidebar(forceOpen) {
  if (window.innerWidth <= 900) {
    return;
  }

  const shouldOpen = typeof forceOpen === 'boolean'
    ? forceOpen
    : document.body.classList.contains('sidebar-desktop-closed');
  document.body.classList.toggle('sidebar-desktop-closed', !shouldOpen);

  const desktopToggle = document.getElementById('desktop-nav-toggle');
  if (desktopToggle) {
    desktopToggle.setAttribute('aria-expanded', String(shouldOpen));
  }
}

function wireSidebarNavState() {
  const items = document.querySelectorAll('.sidebar .nav-item');
  items.forEach((item) => {
    item.addEventListener('click', () => {
      const action = item.getAttribute('data-action');
      if (action === 'logout') {
        logoutUser();
        return;
      }

      items.forEach((node) => node.classList.remove('active'));
      item.classList.add('active');
      const viewName = item.getAttribute('data-view');
      if (viewName) {
        showView(viewName);
      }
      if (window.innerWidth <= 900) {
        toggleSidebar(false);
      }
    });
  });
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    toggleSidebar(false);
  }
  if (window.innerWidth <= 900) {
    document.body.classList.remove('sidebar-desktop-closed');
    const desktopToggle = document.getElementById('desktop-nav-toggle');
    if (desktopToggle) {
      desktopToggle.setAttribute('aria-expanded', 'true');
    }
  }
});

function startDashboard() {
  if (!ensureAuthenticated()) {
    return;
  }

  wireSidebarNavState();
  wireGoalSectionControls();
  buildCheckinDomainInputs();
  const dateInput = document.getElementById('checkinDate');
  if (dateInput && !dateInput.value) {
    dateInput.value = getTodayISODate();
  }
  showView('dashboard');
  renderAll();
  setInterval(renderAll, 5000);

// ==================== MATRIX GENERATION ====================

// Domain Interaction Matrix - Shows how each domain flows into others
const DOMAIN_INTERACTION_MATRIX = [
  // O  U  T  D  P  E  R
  [ 0, 1, 1, 0, 0, 0, 0 ],  // Observe → understand, Think
  [ 0, 0, 1, 1, 0, 0, 0 ],  // understand → Think, Decide
  [ 0, 0, 0, 1, 0, 0, 0 ],  // Think → Decide
  [ 0, 0, 0, 0, 1, 0, 0 ],  // Decide → perfrom
  [ 0, 0, 0, 0, 0, 1, 0 ],  // perfrom → Experience
  [ 1, 1, 1, 0, 0, 0, 1 ],  // Experience → Observe, understand, Think, Repeat
  [ 1, 0, 0, 0, 1, 0, 0 ]   // Repeat → Observe, perfrom
];

// Subdomain to Growth Dimensions mapping
const SUBDOMAIN_DIMENSION_MAP = [
  { subdomain: 'Perceptual', dimensions: ['Awareness', 'understand', 'Integration'] },
  { subdomain: 'Continuous', dimensions: ['Awareness', 'Application', 'Mastery'] },
  { subdomain: 'Analytical', dimensions: ['understand', 'Application', 'Integration'] },
  { subdomain: 'Reflective', dimensions: ['understand', 'Integration', 'Mastery'] },
  { subdomain: 'External', dimensions: ['Awareness', 'Application', 'Integration'] },
  { subdomain: 'Internal', dimensions: ['Awareness', 'understand', 'Mastery'] },
  { subdomain: 'Active', dimensions: ['Application', 'Integration', 'Mastery'] }
];

function renderDomainInteractionMatrix() {
  const container = document.getElementById('matrix-table');
  if (!container) return;

  const domains = DOMAIN_META.map(d => d.key);
  let html = '<table class="matrix-table" style="width:100%; border-collapse: collapse; font-size: 12px;">';
  
  // Header row
  html += '<tr><th style="border: 1px solid #ddd; padding: 8px; background: #f5f5f5; text-align: center; font-weight: 600;">Domain</th>';
  domains.forEach(d => {
    html += `<th style="border: 1px solid #ddd; padding: 8px; background: #f5f5f5; text-align: center; font-weight: 600; width: 50px;">${d.substring(0, 3)}</th>`;
  });
  html += '</tr>';

  // Data rows
  DOMAIN_INTERACTION_MATRIX.forEach((row, rowIdx) => {
    const rowDomain = domains[rowIdx];
    const domainColor = DOMAIN_META[rowIdx].color;
    html += `<tr><td style="border: 1px solid #ddd; padding: 8px; background: ${domainColor}20; font-weight: 600;">${rowDomain}</td>`;
    
    row.forEach((value) => {
      const bgColor = value === 1 ? '#0f6e56' : '#f5f5f5';
      const textColor = value === 1 ? '#fff' : '#999';
      html += `<td style="border: 1px solid #ddd; padding: 8px; text-align: center; background: ${bgColor}; color: ${textColor}; font-weight: ${value === 1 ? 600 : 400};">${value}</td>`;
    });
    html += '</tr>';
  });

  html += '</table>';
  container.innerHTML = html;
}

function renderSubdomainDimensionMatrix() {
  const container = document.getElementById('sd-matrix-table');
  if (!container) return;

  const dimensions = ['Awareness', 'understand', 'Application', 'Integration', 'Mastery'];
  let html = '<table class="matrix-table" style="width:100%; border-collapse: collapse; font-size: 12px;">';
  
  // Header row
  html += '<tr><th style="border: 1px solid #ddd; padding: 8px; background: #f5f5f5; text-align: center; font-weight: 600;">Subdomain</th>';
  dimensions.forEach(d => {
    html += `<th style="border: 1px solid #ddd; padding: 8px; background: #f5f5f5; text-align: center; font-weight: 600;">${d}</th>`;
  });
  html += '</tr>';

  // Data rows
  SUBDOMAIN_DIMENSION_MAP.forEach((item) => {
    html += `<tr><td style="border: 1px solid #ddd; padding: 8px; background: #534AB720; font-weight: 600;">${item.subdomain}</td>`;
    
    dimensions.forEach((dim) => {
      const hasDim = item.dimensions.includes(dim);
      const bgColor = hasDim ? '#534AB7' : '#f5f5f5';
      const textColor = hasDim ? '#fff' : '#999';
      const checkmark = hasDim ? '✓' : '−';
      html += `<td style="border: 1px solid #ddd; padding: 8px; text-align: center; background: ${bgColor}; color: ${textColor}; font-weight: ${hasDim ? 600 : 400};">${checkmark}</td>`;
    });
    html += '</tr>';
  });

  html += '</table>';
  container.innerHTML = html;
}

function initializeCategoryMatrixView() {
  renderDomainInteractionMatrix();
  renderSubdomainDimensionMatrix();
}
}

startDashboard();