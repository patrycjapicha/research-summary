const stages=[
 {title:'Start with a question or routine',question:'What brings the user to the dashboard?',body:'People arrive with a recurring check or a specific operational question. The dashboard is the starting point for deciding what to look at next.',insight:'Proactive signals matter when they are relevant to the team’s real operating pattern. Generic alerts quickly become background noise.',opportunity:'Highlight meaningful movement against a team baseline; show why it was flagged and let users tune what matters.',job:'When I check a familiar dashboard, I want to spot what needs attention so I know where to focus.',quotes:[
  {text:'“More useful would be for me to be able to identify problems and trends before they happen. And so I don’t really know how to do that now.”',speaker:'Nick Wolf',source:'Dashboard interviews'},
  {text:'“I mean, I think the most valuable to me would be if it understood what I’m trying to accomplish and what we’re trying to do here. And it proactively saw trends in the data that were negative or positive and highlighted.”',speaker:'Nick Wolf',source:'Dashboard interviews'},
  {text:'“For them to understand what it means and for myself to also just easily see, you know, what is at the top of the list, what needs attention.”',speaker:'Lané Lubbe',source:'Dashboard interviews'}]},
 {title:'Scan for a signal',question:'What stands out in the data?',body:'People move from an aggregate chart into filters, segments, comparisons, or individual tickets. When the dashboard cannot provide enough context, they export data, consult colleagues, or open another system.',insight:'The explanation trail breaks between metric and underlying record. Missing drill-down fields and metric definitions create work and doubt.',opportunity:'Connect signals to definitions, contributing segments, and relevant underlying records without losing the current investigation context.',job:'When a number stands out, I want to see which segment or records drive it so I can identify the signal.',quotes:[
  {text:'“These two are agents who exclusively do tier one, so you can see they are significantly above everyone else. This agent does escalations, so I would rather her be below these other two agents who are also tier one.”',speaker:'Nick Wolf',source:'Dashboard interviews'},
  {text:'“So oftentimes it is really the drilling in and we don’t always have all the things that we are looking for specifically available in the drill in options and we need to get something that is linked to it and then we need to go into the actual ticket to review fully what was actually happening.”',speaker:'Lané Lubbe',source:'Dashboard interviews'},
  {text:'“Manual investigation takes so much time. So if there was a way for AI to do a part of it to kind of help cut down on the time that it takes, it would probably be quite helpful I think for me in the day to day.”',speaker:'Lané Lubbe',source:'Dashboard interviews'}]},
 {title:'Investigate the signal',question:'What is driving the movement?',body:'Users compare periods, groups, channels, and operational states to distinguish a genuine issue from seasonality, data latency, workload mix, or a one-off ticket. They often bring this context from memory.',insight:'A number without a clear time window, data freshness, or comparable baseline can be misread — even by experienced teams.',opportunity:'Make comparisons and freshness visible by default; retain filters and explain how each dataset or metric is defined.',job:'When I find a change, I want to compare it with a useful baseline and operating context so I can tell whether it matters.',quotes:[
  {text:'“The most painful thing I guess is the drill in option sometimes… it is a bit tedious as well.”',speaker:'Lané Lubbe',source:'Dashboard interviews'},
  {text:'“I have to go to multiple dashboards…”',speaker:'Nick Wolf',source:'Dashboard interviews'},
  {text:'“Sometimes it’s really useful to drill into those, export the ticket number… and just see exactly what’s happening.”',speaker:'Chris Boyd',source:'Dashboard interviews'}]},
 {title:'Interpret with context',question:'Is this meaningful, and for whom?',body:'The dashboard informs a judgment; it rarely makes the decision alone. Users combine evidence with staffing, customer, policy, and implementation context. They want AI to help reason, not confidently prescribe from a thin slice of data.',insight:'Recommendations need instance-specific context and a legible rationale. Repeatedly irrelevant suggestions erode trust.',opportunity:'Offer options with supporting evidence, assumptions, expected impact, and confidence — and invite a clarifying question when context is missing.',job:'When I see a meaningful pattern, I want to understand its causes and impact so I can choose an appropriate response.',quotes:[
  {text:'“We receive the data, we interpret it and then we kind of make action plans from there.”',speaker:'Tim Santoro',source:'Dashboard interviews'},
  {text:'“For the recommendations, I would like a clean explanation and even potentially hand little charts showing me what what happened, what it would expect to happen, and what the change should bring.”',speaker:'Nick Wolf',source:'Dashboard interviews'},
  {text:'“If we see that, I don’t know, calls are dropping midday, then you know that also relates to higher wait times, everything like that.”',speaker:'Tim Santoro',source:'Dashboard interviews'}]},
 {title:'Share findings and decide',question:'Who needs to understand this, and what response fits?',body:'A finding often has to travel to people who do not use dashboards. Users turn metrics into a concise explanation, screenshot, report, or conversation so teams can agree on a response.',insight:'A technically correct dashboard can still fail if a manager, client, or frontline team cannot understand what the numbers mean.',opportunity:'Generate an evidence-linked summary for the intended audience; preserve human control over approvals and sharing.',job:'When other people need to act on a finding, I want to share a clear explanation with trusted evidence so we can align on what to do.',quotes:[
  {text:'“If I can show them, here is the dashboard, here’s a reason, and here’s all the details you need, then it’s easier for us to collectively make a decision.”',speaker:'Lané Lubbe',source:'Dashboard interviews'},
  {text:'“I pass those metrics that we talked about that I showed you in cloud, but I pass them over to my boss and then he kind of provides them to the end user. But I’ve asked him if he wants a dashboard or if he wants things like that. And he’s like, I just want the four numbers.”',speaker:'Nick Wolf',source:'Dashboard interviews'},
  {text:'“It would be very time saving if we could almost have a dashboard summary of some, you know, in some way, like we have one of the tickets as well.”',speaker:'Lané Lubbe',source:'Dashboard interviews'}]},
];

const el=(s)=>document.querySelector(s);let currentStage=0;
function renderStage(i){currentStage=(i+stages.length)%stages.length;const d=stages[currentStage];document.querySelectorAll('.stage').forEach((x,n)=>{x.classList.toggle('active',n===currentStage);x.classList.toggle('completed',n<currentStage)});const quoteMarkup=d.quotes.map((q,n)=>n===0?`<blockquote class="stage-quote">${q.text}<footer><strong>${q.speaker}</strong> · <span class="quote-source">${q.source}</span></footer></blockquote>`:`<button class="quote-tooltip stage-quote-icon" type="button" aria-label="Show quote from ${q.speaker}" aria-describedby="stage-quote-tooltip-${currentStage}-${n}"><img class="quote-icon" src="assets/quote-union.svg" alt="" aria-hidden="true"><span class="quote-tooltip-bubble" id="stage-quote-tooltip-${currentStage}-${n}" role="tooltip"><span>${q.text}</span><small>${q.speaker} · ${q.source}</small></span></button>`).join('');el('#stageDetail').innerHTML=`<div class="step-kicker">${d.question.toUpperCase()}</div><div class="stage-summary"><div class="stage-copy"><h3>${d.title}</h3><p>${d.body} ${d.insight}</p></div><div class="stage-jtbd"><span>JOB TO BE DONE</span><p>${d.job}</p></div></div><div class="stage-quotes"><div class="stage-quote-grid">${quoteMarkup}</div></div>`}
document.querySelectorAll('.stage').forEach(x=>x.addEventListener('click',()=>renderStage(+x.dataset.stage)));renderStage(0);

const takeawayTrack=el('#takeawayTrack');
const takeawayCards=[...document.querySelectorAll('.takeaway-card')];
const takeawayDots=[...document.querySelectorAll('[data-takeaway-index]')];
let currentTakeaway=0;
function showTakeaway(index){
  currentTakeaway=(index+takeawayCards.length)%takeawayCards.length;
  takeawayTrack.style.transform=`translateX(-${currentTakeaway*20}%)`;
  takeawayDots.forEach((dot,i)=>dot.setAttribute('aria-current',String(i===currentTakeaway)));
  takeawayCards.forEach((card,i)=>card.setAttribute('aria-hidden',String(i!==currentTakeaway)));
}
takeawayDots.forEach(dot=>dot.addEventListener('click',()=>showTakeaway(+dot.dataset.takeawayIndex)));
showTakeaway(0);

// Top-level research navigation.
const researchView=document.querySelector('#researchView');
function showResearch(target='overview'){
  researchView.hidden=false;
  document.querySelectorAll('.nav-item').forEach(a=>a.classList.toggle('active',a.dataset.target===target));
  history.replaceState(null,'',`#${target}`);
  if(target!=='overview') document.getElementById(target)?.scrollIntoView({behavior:'smooth',block:'start'}); else window.scrollTo({top:0,behavior:'smooth'});
}
function showVision(){
  showResearch('vision');
}
document.querySelectorAll('.nav-item,.back-to-research,footer a').forEach(a=>a.addEventListener('click',e=>{const target=a.dataset.target||'overview';e.preventDefault();if(target==='vision')showVision();else showResearch(target)}));
if(location.hash==='#vision')showVision();

// Animate the Dashboard Builder example as a user prompt followed by an AI follow-up.
const builderPreview=document.querySelector('.preview-builder');
if(builderPreview){
  const prompt=builderPreview.querySelector('.builder-prompt-text');
  const aiMessage=builderPreview.querySelector('.builder-ai-message');
  const aiTyping=builderPreview.querySelector('.builder-ai-typing');
  const aiContent=builderPreview.querySelector('.builder-ai-content');
  const fullPrompt=prompt.dataset.fulltext;
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reducedMotion){
    aiMessage.classList.remove('builder-hidden');
    aiTyping.classList.add('builder-hidden');
  }else{
    let animationTimer;
    let started=false;
    const playConversation=()=>{
      clearTimeout(animationTimer);
      prompt.textContent='';
      prompt.classList.add('is-typing');
      aiMessage.classList.add('builder-hidden');
      aiTyping.classList.remove('builder-hidden');
      aiContent.classList.add('builder-hidden');
      let position=0;
      const typeNext=()=>{
        prompt.textContent=fullPrompt.slice(0,position++);
        if(position<=fullPrompt.length){
          animationTimer=setTimeout(typeNext,17);
        }else{
          prompt.classList.remove('is-typing');
          animationTimer=setTimeout(()=>{
            aiMessage.classList.remove('builder-hidden');
            animationTimer=setTimeout(()=>{
              aiTyping.classList.add('builder-hidden');
              aiContent.classList.remove('builder-hidden');
              animationTimer=setTimeout(playConversation,4800);
            },900);
          },450);
        }
      };
      typeNext();
    };
    const observer=new IntersectionObserver(entries=>{
      if(entries.some(entry=>entry.isIntersecting)&&!started){started=true;playConversation();}
      if(!entries.some(entry=>entry.isIntersecting)&&started){clearTimeout(animationTimer);started=false;}
    },{threshold:.2});
    observer.observe(builderPreview);
  }
}

// Reveal the investigation path step by step when it enters view.
const investigationPreview=document.querySelector('.preview-investigate .thought-path');
if(investigationPreview){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    investigationPreview.classList.add('path-animate');
  }else{
    let pathTimer;
    let pathVisible=false;
    const runPathCycle=()=>{
      if(!pathVisible)return;
      investigationPreview.classList.remove('path-animate');
      void investigationPreview.offsetWidth;
      investigationPreview.classList.add('path-animate');
      pathTimer=setTimeout(runPathCycle,3600);
    };
    const pathObserver=new IntersectionObserver(entries=>{
      const visible=entries.some(entry=>entry.isIntersecting);
      if(visible&&!pathVisible){
        pathVisible=true;
        runPathCycle();
      }else if(!visible&&pathVisible){
        pathVisible=false;
        clearTimeout(pathTimer);
      }
    },{threshold:.2});
    pathObserver.observe(investigationPreview);
  }
}
