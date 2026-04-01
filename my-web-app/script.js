const questions = [
  {
    name: "q1",
    category: "Sleep opportunity",
    text: "How much sleep do you usually get in a 24-hour period?",
    help: "",
    options: [
      { value: 0, label: "0 = 7 hours or more most nights" },
      { value: 1, label: "1 = 6 to 6 hours 59 minutes most nights" },
      { value: 2, label: "2 = 5 to 5 hours 59 minutes most nights" },
      { value: 3, label: "3 = under 5 hours most nights" }
    ]
  },
  {
    name: "q2",
    category: "Sleep opportunity",
    text: "How often do work or social demands limit your opportunity to get enough sleep?",
    help: "",
    options: [
      { value: 0, label: "0 = never" },
      { value: 1, label: "1 = on a few days" },
      { value: 2, label: "2 = on about half of days" },
      { value: 3, label: "3 = on most or all days" }
    ]
  },
  {
    name: "q3",
    category: "Sleep opportunity",
    text: "How often do you need an alarm clock to wake up?",
    help: "",
    options: [
      { value: 0, label: "0 = never" },
      { value: 1, label: "1 = on a few days" },
      { value: 2, label: "2 = on about half of days" },
      { value: 3, label: "3 = on most or all days" }
    ]
  },
  {
    name: "q4",
    category: "Sleep opportunity",
    text: "On non-working days, how often do you sleep more than 1 hour later than your usual wake time?",
    help: "Non-working days include weekends, days off work, and holidays.",
    options: [
      { value: 0, label: "0 = never" },
      { value: 1, label: "1 = on a few non-working days" },
      { value: 2, label: "2 = on about half of non-working days" },
      { value: 3, label: "3 = on most or all non-working days" }
    ]
  },
  {
    name: "q5",
    category: "Recovery and alertness",
    text: "After waking, how often does it take more than 30 minutes before you feel fully alert?",
    help: "",
    options: [
      { value: 0, label: "0 = never" },
      { value: 1, label: "1 = on a few days" },
      { value: 2, label: "2 = on about half of days" },
      { value: 3, label: "3 = on most or all days" }
    ]
  },
  {
    name: "q6",
    category: "Daytime consequences",
    text: "How often do you feel sleepy during the day?",
    help: "",
    options: [
      { value: 0, label: "0 = never" },
      { value: 1, label: "1 = on a few days" },
      { value: 2, label: "2 = on about half of days" },
      { value: 3, label: "3 = on most or all days" }
    ]
  },
  {
    name: "q7",
    category: "Daytime consequences",
    text: "How often do you struggle to concentrate because you feel tired?",
    help: "",
    options: [
      { value: 0, label: "0 = never" },
      { value: 1, label: "1 = on a few days" },
      { value: 2, label: "2 = on about half of days" },
      { value: 3, label: "3 = on most or all days" }
    ]
  },
  {
    name: "q8",
    category: "Daytime consequences",
    text: "How often do you rely on caffeine to stay alert or function well during the day?",
    help: "",
    options: [
      { value: 0, label: "0 = never" },
      { value: 1, label: "1 = on a few days" },
      { value: 2, label: "2 = on about half of days" },
      { value: 3, label: "3 = on most or all days" }
    ]
  },
  {
    name: "q9",
    category: "Daytime consequences",
    text: "How often do you unintentionally doze off in quiet situations, such as meetings, reading, or watching television?",
    help: "",
    options: [
      { value: 0, label: "0 = never" },
      { value: 1, label: "1 = once or twice in 14 days" },
      { value: 2, label: "2 = several times in 14 days" },
      { value: 3, label: "3 = most days" }
    ]
  },
  {
    name: "q10",
    category: "Safety and clinical flags",
    text: "In the last 14 days, have you felt too sleepy to drive safely or noticed lapses in attention while driving?",
    help: "",
    options: [
      { value: 0, label: "0 = no" },
      { value: 1, label: "1 = once" },
      { value: 2, label: "2 = more than once" }
    ]
  },
  {
    name: "q11",
    category: "Safety and clinical flags",
    text: "Has anyone noticed loud snoring, pauses in breathing, or gasping during your sleep, or do you often wake unrefreshed despite enough time in bed?",
    help: "",
    options: [
      { value: 0, label: "0 = no" },
      { value: 1, label: "1 = not sure" },
      { value: 2, label: "2 = yes" }
    ]
  }
];

const coreQuestions = ["q1","q2","q3","q4","q5","q6","q7","q8","q9"];
const sleepOpportunityItems = ["q1","q2","q3","q4"];
const recoveryItems = ["q5"];
const daytimeItems = ["q6","q7","q8","q9"];

const answers = Object.fromEntries(questions.map(q => [q.name, null]));
let currentIndex = 0;
let displayedScore = 0;

const questionCard = document.getElementById("questionCard");
const questionCategory = document.getElementById("questionCategory");
const questionText = document.getElementById("questionText");
const questionHelp = document.getElementById("questionHelp");
const optionsWrap = document.getElementById("optionsWrap");
const questionCounter = document.getElementById("questionCounter");
const stepFill = document.getElementById("stepFill");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");
const printBtn = document.getElementById("printBtn");
const exportPdfBtn = document.getElementById("exportPdfBtn");

const totalScoreEl = document.getElementById("totalScore");
const sleepOpportunityEl = document.getElementById("sleepOpportunity");
const recoveryAlertnessEl = document.getElementById("recoveryAlertness");
const daytimeConsequencesEl = document.getElementById("daytimeConsequences");
const progressBarEl = document.getElementById("progressBar");
const ragBadgeEl = document.getElementById("ragBadge");
const ragTitleEl = document.getElementById("ragTitle");
const ragTextEl = document.getElementById("ragText");
const flagDriveEl = document.getElementById("flagDrive");
const flagSleepDisorderEl = document.getElementById("flagSleepDisorder");

const reportDateEl = document.getElementById("reportDate");
const reportRagBadgeEl = document.getElementById("reportRagBadge");
const reportScoreEl = document.getElementById("reportScore");
const reportHeadlineEl = document.getElementById("reportHeadline");
const reportSleepOpportunityEl = document.getElementById("reportSleepOpportunity");
const reportRecoveryAlertnessEl = document.getElementById("reportRecoveryAlertness");
const reportDaytimeConsequencesEl = document.getElementById("reportDaytimeConsequences");
const reportInterpretationEl = document.getElementById("reportInterpretation");
const reportDriveFlagEl = document.getElementById("reportDriveFlag");
const reportSleepFlagEl = document.getElementById("reportSleepFlag");
const reportActionsEl = document.getElementById("reportActions");

function getAnswer(name) {
  return answers[name] === null ? 0 : Number(answers[name]);
}

function sumValues(names) {
  return names.reduce((sum, name) => sum + getAnswer(name), 0);
}

function answeredCount() {
  return Object.values(answers).filter(value => value !== null).length;
}

function getRagStatus(score, driveFlag, sleepFlag) {
  if (driveFlag === 2 || sleepFlag === 2) {
    return {
      label: "Red",
      className: "rag-red",
      title: "Red. Immediate action advised.",
      text: "Your result indicates high sleep-related risk. This may reflect substantial sleep debt, marked daytime impairment, or a triggered override flag. Prioritise sleep opportunity and consider clinical review where relevant."
    };
  }

  if (score >= 16) {
    return {
      label: "Red",
      className: "rag-red",
      title: "Red. High likelihood of meaningful sleep debt.",
      text: "This score suggests restricted sleep opportunity, incomplete recovery, and daytime consequences that are likely to impair performance and alertness."
    };
  }

  if (score >= 8) {
    return {
      label: "Amber",
      className: "rag-amber",
      title: "Amber. Sleep debt may be building.",
      text: "This score suggests emerging sleep debt or reduced recovery margin. Review work demands, social demands, sleep timing, and caffeine reliance."
    };
  }

  return {
    label: "Green",
    className: "rag-green",
    title: "Green. Low current indication of sleep debt.",
    text: "This score suggests that sleep opportunity and recovery are broadly adequate at present. Maintain consistency and monitor for change."
  };
}

function getPriorityActions(score, driveFlag, sleepFlag) {
  const actions = [];

  if (driveFlag === 2) {
    actions.push("Treat driving sleepiness as an immediate safety issue. Do not drive when sleepy.");
  }
  if (sleepFlag === 2) {
    actions.push("Consider medical review for possible sleep-disordered breathing.");
  }
  if (score >= 16) {
    actions.push("Increase protected sleep opportunity as soon as possible over the next several days.");
    actions.push("Reduce avoidable late-night work and social demands.");
    actions.push("Monitor daytime alertness closely, especially during meetings, driving, and low-stimulation tasks.");
  } else if (score >= 8) {
    actions.push("Add 30 to 60 minutes of protected time in bed where feasible.");
    actions.push("Stabilise wake time and reduce reliance on catch-up sleep.");
    actions.push("Review caffeine use as a compensatory strategy, not a solution.");
  } else {
    actions.push("Maintain current routines that protect sleep opportunity and recovery.");
    actions.push("Watch for future drift in workload, wake time, and daytime sleepiness.");
  }

  return actions;
}

function updateBadge(el, label, className) {
  el.textContent = label;
  el.className = `rag-badge ${className}`;
  el.classList.remove("bump");
  void el.offsetWidth;
  el.classList.add("bump");
}

function animateNumber(targetValue) {
  const start = displayedScore;
  const diff = targetValue - start;
  const duration = 300;
  const startTime = performance.now();

  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    displayedScore = start + diff * eased;
    totalScoreEl.textContent = Math.round(displayedScore);
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      displayedScore = targetValue;
      totalScoreEl.textContent = targetValue;
    }
  }

  requestAnimationFrame(step);
}

function updateFlags(driveFlag, sleepFlag) {
  if (driveFlag === 2) {
    flagDriveEl.textContent = "Driving risk flag triggered. Sleepiness while driving was reported more than once.";
    flagDriveEl.className = "flag-item alert";
    reportDriveFlagEl.textContent = "Driving risk flag triggered. Sleepiness while driving was reported more than once.";
  } else {
    flagDriveEl.textContent = "Driving risk flag not triggered";
    flagDriveEl.className = "flag-item neutral";
    reportDriveFlagEl.textContent = "Driving risk flag not triggered.";
  }

  if (sleepFlag === 2) {
    flagSleepDisorderEl.textContent = "Sleep-disordered breathing flag triggered. Snoring, gasping, pauses in breathing, or unrefreshing sleep were reported.";
    flagSleepDisorderEl.className = "flag-item alert";
    reportSleepFlagEl.textContent = "Sleep-disordered breathing flag triggered. Signs consistent with snoring, gasping, pauses in breathing, or unrefreshing sleep were reported.";
  } else {
    flagSleepDisorderEl.textContent = "Sleep-disordered breathing flag not triggered";
    flagSleepDisorderEl.className = "flag-item neutral";
    reportSleepFlagEl.textContent = "Sleep-disordered breathing flag not triggered.";
  }
}

function updateDashboard() {
  const total = sumValues(coreQuestions);
  const sleepOpportunity = sumValues(sleepOpportunityItems);
  const recovery = sumValues(recoveryItems);
  const daytime = sumValues(daytimeItems);
  const driveFlag = getAnswer("q10");
  const sleepFlag = getAnswer("q11");
  const rag = getRagStatus(total, driveFlag, sleepFlag);

  animateNumber(total);
  sleepOpportunityEl.textContent = `${sleepOpportunity} / 12`;
  recoveryAlertnessEl.textContent = `${recovery} / 3`;
  daytimeConsequencesEl.textContent = `${daytime} / 12`;
  progressBarEl.style.width = `${(total / 27) * 100}%`;

  updateBadge(ragBadgeEl, rag.label, rag.className);
  ragTitleEl.textContent = rag.title;
  ragTextEl.textContent = rag.text;

  updateReport(total, sleepOpportunity, recovery, daytime, rag, driveFlag, sleepFlag);
  updateFlags(driveFlag, sleepFlag);
}

function updateReport(total, sleepOpportunity, recovery, daytime, rag, driveFlag, sleepFlag) {
  const today = new Date();
  const dateText = today.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  const actions = getPriorityActions(total, driveFlag, sleepFlag);

  reportDateEl.textContent = dateText;
  updateBadge(reportRagBadgeEl, rag.label, rag.className);
  reportScoreEl.textContent = total;
  reportHeadlineEl.textContent = rag.title;
  reportSleepOpportunityEl.textContent = `${sleepOpportunity} / 12`;
  reportRecoveryAlertnessEl.textContent = `${recovery} / 3`;
  reportDaytimeConsequencesEl.textContent = `${daytime} / 12`;
  reportInterpretationEl.textContent = rag.text;

  reportActionsEl.innerHTML = "";
  actions.forEach(action => {
    const li = document.createElement("li");
    li.textContent = action;
    reportActionsEl.appendChild(li);
  });
}

function renderQuestion(index) {
  const question = questions[index];
  questionCounter.textContent = `Question ${index + 1} of ${questions.length}`;
  stepFill.style.width = `${((index + 1) / questions.length) * 100}%`;

  questionCard.classList.add("is-transitioning");
  setTimeout(() => {
    questionCategory.textContent = question.category;
    questionText.textContent = question.text;
    questionHelp.textContent = question.help || "";
    questionHelp.style.display = question.help ? "block" : "none";

    optionsWrap.innerHTML = "";
    question.options.forEach((option, optionIndex) => {
      const id = `${question.name}_${optionIndex}`;
      const label = document.createElement("label");
      label.className = "option-card";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = question.name;
      input.value = option.value;
      input.id = id;
      if (answers[question.name] !== null && Number(answers[question.name]) === Number(option.value)) {
        input.checked = true;
      }

      input.addEventListener("change", () => {
        answers[question.name] = Number(input.value);
        updateDashboard();
      });

      const span = document.createElement("span");
      span.className = "option-content";
      span.textContent = option.label;

      label.appendChild(input);
      label.appendChild(span);
      optionsWrap.appendChild(label);
    });

    prevBtn.disabled = index === 0;
    nextBtn.textContent = index === questions.length - 1 ? "Review report" : "Next";
    questionCard.classList.remove("is-transitioning");
  }, 140);
}

function goToQuestion(index) {
  currentIndex = Math.max(0, Math.min(index, questions.length - 1));
  renderQuestion(currentIndex);
}

prevBtn.addEventListener("click", () => goToQuestion(currentIndex - 1));
nextBtn.addEventListener("click", () => {
  if (currentIndex < questions.length - 1) {
    goToQuestion(currentIndex + 1);
  } else {
    document.querySelector(".report-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

resetBtn.addEventListener("click", () => {
  Object.keys(answers).forEach(key => answers[key] = null);
  displayedScore = 0;
  goToQuestion(0);
  updateDashboard();
});

printBtn.addEventListener("click", () => window.print());

exportPdfBtn.addEventListener("click", exportPdf);

function exportPdf() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "a4" });

  const total = sumValues(coreQuestions);
  const sleepOpportunity = sumValues(sleepOpportunityItems);
  const recovery = sumValues(recoveryItems);
  const daytime = sumValues(daytimeItems);
  const driveFlag = getAnswer("q10");
  const sleepFlag = getAnswer("q11");
  const rag = getRagStatus(total, driveFlag, sleepFlag);
  const actions = getPriorityActions(total, driveFlag, sleepFlag);
  const dateText = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });

  const margin = 44;
  let y = 48;
  const lineGap = 18;

  doc.setFillColor(1, 14, 138);
  doc.rect(0, 0, 595, 72, "F");

  doc.setTextColor(254, 254, 254);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("Duratus Sleep Debt Screener Report", margin, 44);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text(dateText, margin, 60);

  y = 104;
  doc.setTextColor(12, 17, 64);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text(`RAG result: ${rag.label}`, margin, y);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  y += 24;
  doc.text(`Core score: ${total} / 27`, margin, y);

  y += 24;
  const interpretation = doc.splitTextToSize(rag.text, 500);
  doc.text(interpretation, margin, y);
  y += interpretation.length * 15 + 18;

  doc.setFont("helvetica", "bold");
  doc.text("Subscale profile", margin, y);
  y += 18;
  doc.setFont("helvetica", "normal");
  doc.text(`Sleep opportunity: ${sleepOpportunity} / 12`, margin, y);
  y += lineGap;
  doc.text(`Recovery and alertness: ${recovery} / 3`, margin, y);
  y += lineGap;
  doc.text(`Daytime consequences: ${daytime} / 12`, margin, y);
  y += 28;

  doc.setFont("helvetica", "bold");
  doc.text("Override flags", margin, y);
  y += 18;
  doc.setFont("helvetica", "normal");
  const driveText = driveFlag === 2
    ? "Driving risk flag triggered. Sleepiness while driving was reported more than once."
    : "Driving risk flag not triggered.";
  const sleepText = sleepFlag === 2
    ? "Sleep-disordered breathing flag triggered. Signs consistent with snoring, gasping, pauses in breathing, or unrefreshing sleep were reported."
    : "Sleep-disordered breathing flag not triggered.";

  [driveText, sleepText].forEach(text => {
    const lines = doc.splitTextToSize(`• ${text}`, 500);
    doc.text(lines, margin, y);
    y += lines.length * 15 + 8;
  });

  y += 12;
  doc.setFont("helvetica", "bold");
  doc.text("Priority actions", margin, y);
  y += 18;
  doc.setFont("helvetica", "normal");

  actions.forEach(action => {
    const lines = doc.splitTextToSize(`• ${action}`, 500);
    if (y + lines.length * 15 > 790) {
      doc.addPage();
      y = 52;
    }
    doc.text(lines, margin, y);
    y += lines.length * 15 + 8;
  });

  doc.save("duratus-sleep-debt-report.pdf");
}

goToQuestion(0);
updateDashboard();
