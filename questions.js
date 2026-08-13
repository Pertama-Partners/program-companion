// Generated participant-safe practice data. Do not edit by hand.
globalThis.PertamaQuizQuestions = Object.freeze([
  {
    "id": "QP-001",
    "topic": "Proactive operations",
    "prompt": "A maintenance team wants fewer emergency parts shortages. Which first use of AI is most likely to create an early-warning process?",
    "options": [
      {
        "key": "A",
        "text": "Draft a message to a supplier whenever a part is already unavailable.",
        "feedback": "An urgent message after the part is unavailable may speed a reaction, but it does not anticipate the shortage."
      },
      {
        "key": "B",
        "text": "Analyse past usage, replenishment lead times, and seasonal work patterns to flag likely future gaps.",
        "feedback": "Usage history, lead times, and seasonal work patterns can expose a future gap early enough for an owner to act."
      },
      {
        "key": "C",
        "text": "Trigger a purchase only after the inventory count reaches zero.",
        "feedback": "Waiting until zero stock is a reactive trigger and can create avoidable disruption."
      },
      {
        "key": "D",
        "text": "Produce a monthly chart showing the hours spent searching for parts.",
        "feedback": "Measuring time spent searching describes the cost of the problem; it does not provide an early-warning signal."
      }
    ],
    "correctAnswer": "B",
    "coreReason": "Proactive management uses leading evidence to identify a future supply risk before it becomes an emergency."
  },
  {
    "id": "QP-002",
    "topic": "Proactive operations",
    "prompt": "A planning team asks for help with recurring material delays. Which output would best support a proactive conversation with the project owner?",
    "options": [
      {
        "key": "A",
        "text": "A polished narrative describing why the last delay was frustrating.",
        "feedback": "A polished narrative may explain frustration but does not show when or why action is needed."
      },
      {
        "key": "B",
        "text": "A list of every historical transaction, without prioritisation.",
        "feedback": "An unprioritised transaction list preserves volume without turning it into a useful management signal."
      },
      {
        "key": "C",
        "text": "An automatic order placed with the current supplier.",
        "feedback": "Automatic ordering skips the review of assumptions, supplier conditions, and authority."
      },
      {
        "key": "D",
        "text": "An exception view showing the likely gap, evidence period, assumptions, owner, and next review date.",
        "feedback": "A gap horizon, evidence period, assumptions, owner, and review date make the forecast actionable and governable."
      }
    ],
    "correctAnswer": "D",
    "coreReason": "A decision owner needs an exception view that connects signal, evidence, uncertainty, ownership, and review."
  },
  {
    "id": "QP-003",
    "topic": "Proactive operations",
    "prompt": "A forecast is requested, but the latest supplier lead-time data is missing. What is the most responsible next step?",
    "options": [
      {
        "key": "A",
        "text": "Label the lead time as unknown, request the approved data, and avoid presenting a precise forecast until the gap is addressed.",
        "feedback": "Labelling the gap and requesting approved data protects decision quality and prevents false precision."
      },
      {
        "key": "B",
        "text": "Use the shortest lead time from a different supplier as a proxy without telling the user.",
        "feedback": "Borrowing another supplier's shortest lead time changes the scenario without evidence and creates an optimistic bias."
      },
      {
        "key": "C",
        "text": "Fill the missing value with an average and describe it as confirmed.",
        "feedback": "An average may be a modelling assumption, but presenting it as confirmed hides uncertainty."
      },
      {
        "key": "D",
        "text": "Cancel all forecasting work because no dataset is perfect.",
        "feedback": "Imperfect data does not require abandoning all useful analysis; it requires a bounded, transparent next step."
      }
    ],
    "correctAnswer": "A",
    "coreReason": "Missing lead-time data is an uncertainty that must remain visible rather than being silently replaced."
  },
  {
    "id": "QP-004",
    "topic": "Documentation and administration",
    "prompt": "A team retypes fields from approved delivery records into a tracking system. Which workflow best reflects the Zero-Paperwork Office idea?",
    "options": [
      {
        "key": "A",
        "text": "Ask a second person to retype the same fields for comparison.",
        "feedback": "Duplicate typing adds labour and still leaves the original error-prone step in place."
      },
      {
        "key": "B",
        "text": "Generate a longer training manual about accurate typing.",
        "feedback": "Training may help people type better, but it does not remove the manual re-entry bottleneck."
      },
      {
        "key": "C",
        "text": "Extract the fields into a structured draft, flag uncertain values, and update the approved register only after the required check.",
        "feedback": "Structured extraction, visible uncertainty, and a controlled register update reduce re-keying while preserving review."
      },
      {
        "key": "D",
        "text": "Publish a report naming the people who make the most entry errors.",
        "feedback": "Naming error-makers focuses on people rather than improving the workflow."
      }
    ],
    "correctAnswer": "C",
    "coreReason": "The Zero-Paperwork Office removes avoidable transcription by extracting and structuring information at the source boundary."
  },
  {
    "id": "QP-005",
    "topic": "Documentation and administration",
    "prompt": "An AI assistant turns meeting notes into an action register, but two actions have no named owner. What should the register do?",
    "options": [
      {
        "key": "A",
        "text": "Preserve the missing-owner status and route a clarification question to the meeting owner.",
        "feedback": "Preserving the gap and routing a clarification question makes the next human decision explicit."
      },
      {
        "key": "B",
        "text": "Assign both actions to the most senior person present.",
        "feedback": "Seniority does not establish that the person owns the action."
      },
      {
        "key": "C",
        "text": "Remove the actions because an owner is not yet known.",
        "feedback": "Removing the action loses a real commitment simply because one field is incomplete."
      },
      {
        "key": "D",
        "text": "Infer owners from job titles and send the register immediately.",
        "feedback": "An inferred owner may be wrong and can create an unapproved obligation."
      }
    ],
    "correctAnswer": "A",
    "coreReason": "A missing owner is a material gap in an action register, not an invitation for AI to invent accountability."
  },
  {
    "id": "QP-006",
    "topic": "Documentation and administration",
    "prompt": "An extraction tool reads most invoice fields clearly but has low confidence on tax codes for three records. What is the best process?",
    "options": [
      {
        "key": "A",
        "text": "Accept every field because the source document was approved.",
        "feedback": "An approved source document does not guarantee that every extracted field was read correctly."
      },
      {
        "key": "B",
        "text": "Discard all invoices and return to manual entry.",
        "feedback": "Rejecting every invoice throws away clear, usable information instead of isolating the uncertain fields."
      },
      {
        "key": "C",
        "text": "Replace the uncertain tax codes with the most common code in the dataset.",
        "feedback": "A common value is an invented substitution unless the approved process explicitly authorises it."
      },
      {
        "key": "D",
        "text": "Pass clear fields through the controlled workflow and hold the low-confidence fields for human review with a visible trace.",
        "feedback": "Clear fields can continue with traceability while low-confidence fields pause for a human check."
      }
    ],
    "correctAnswer": "D",
    "coreReason": "Confidence or extraction quality should determine where human review is concentrated."
  },
  {
    "id": "QP-007",
    "topic": "Lean, Muda, and flow",
    "prompt": "A work package waits several hours for a supervisor to notice an approval request in a shared inbox. Which intervention best addresses the waste?",
    "options": [
      {
        "key": "A",
        "text": "Route the request to an approved digital queue with a clear owner, status, and escalation timer.",
        "feedback": "A controlled queue, owner, status, and escalation timer improve flow and keep the supervisor accountable."
      },
      {
        "key": "B",
        "text": "Send an apology to the next team whenever the approval is late.",
        "feedback": "An apology addresses the consequence, not the waiting step."
      },
      {
        "key": "C",
        "text": "Predict which supervisor is most likely to be busy.",
        "feedback": "Predicting busyness does not create a reliable approval route."
      },
      {
        "key": "D",
        "text": "Count the number of emails in the shared inbox each week.",
        "feedback": "Counting inbox volume measures activity but does not remove the bottleneck."
      }
    ],
    "correctAnswer": "A",
    "coreReason": "The waste is waiting for an approval to be noticed; a visible, owned digital handoff reduces the wait without removing authority."
  },
  {
    "id": "QP-008",
    "topic": "Lean, Muda, and flow",
    "prompt": "A design-change request is copied across four email chains and repeatedly loses its current owner. What is the strongest first improvement?",
    "options": [
      {
        "key": "A",
        "text": "Add more people to every email chain.",
        "feedback": "More recipients can increase duplication and confusion."
      },
      {
        "key": "B",
        "text": "Ask AI to write increasingly urgent subject lines.",
        "feedback": "Urgent wording does not repair the missing workflow state."
      },
      {
        "key": "C",
        "text": "Create one controlled request record with the source, current state, owner, handoff, and next decision.",
        "feedback": "One request record gives the team a stable source, current owner, status, and next decision."
      },
      {
        "key": "D",
        "text": "Measure which team sends the most messages.",
        "feedback": "Message volume is a symptom and can reward noise rather than flow."
      }
    ],
    "correctAnswer": "C",
    "coreReason": "A single controlled record makes state, ownership, evidence, and next handoff visible."
  },
  {
    "id": "QP-009",
    "topic": "Lean, Muda, and flow",
    "prompt": "A proposed workflow would automatically approve a request if the assigned reviewer has not responded within two hours. What should happen before using it?",
    "options": [
      {
        "key": "A",
        "text": "Shorten the timeout to make the process faster.",
        "feedback": "A shorter timeout increases the chance of an unreviewed commitment."
      },
      {
        "key": "B",
        "text": "Keep the approval human-owned; define an escalation or stop route rather than treating silence as approval.",
        "feedback": "Keep approval human-owned and use escalation or a stop route when the reviewer does not respond."
      },
      {
        "key": "C",
        "text": "Ask a second AI system to approve the request after the timeout.",
        "feedback": "Another AI cannot replace the authorised decision-maker."
      },
      {
        "key": "D",
        "text": "Remove the approval step because it is causing delay.",
        "feedback": "Removing approval eliminates accountability instead of fixing the handoff."
      }
    ],
    "correctAnswer": "B",
    "coreReason": "Silence is not approval when the request has a consequential decision boundary."
  },
  {
    "id": "QP-010",
    "topic": "Risk-adjusted procurement",
    "prompt": "A supplier is the cheapest option but is the only source for a critical component. Which analysis is most useful?",
    "options": [
      {
        "key": "A",
        "text": "Ask the supplier for an even lower price.",
        "feedback": "A lower price does not reduce single-source or disruption risk."
      },
      {
        "key": "B",
        "text": "Rank suppliers by price alone and select the first one.",
        "feedback": "Price-only ranking ignores the consequences of failure."
      },
      {
        "key": "C",
        "text": "Switch automatically to the second-cheapest supplier whenever an issue appears.",
        "feedback": "Automatic switching may violate contract, quality, or approval requirements."
      },
      {
        "key": "D",
        "text": "Compare price with lead time, quality, financial or cyber exposure, concentration risk, alternatives, and failure consequences.",
        "feedback": "A multi-factor comparison makes resilience, concentration, alternatives, and trade-offs visible to the procurement owner."
      }
    ],
    "correctAnswer": "D",
    "coreReason": "Procurement resilience requires more than price; it requires a view of exposure and alternatives."
  },
  {
    "id": "QP-011",
    "topic": "Risk-adjusted procurement",
    "prompt": "Two suppliers are being considered: one has strong quality but long lead times, and the other is faster but has repeated defects. What should an AI-supported comparison produce?",
    "options": [
      {
        "key": "A",
        "text": "One final supplier choice with no explanation.",
        "feedback": "A final unexplained choice hides the criteria and makes review difficult."
      },
      {
        "key": "B",
        "text": "A criteria-based comparison showing trade-offs, evidence gaps, and risks for the authorised procurement owner to decide.",
        "feedback": "Evidence, trade-offs, gaps, and risks support a reasoned procurement decision."
      },
      {
        "key": "C",
        "text": "A recommendation based only on the faster delivery.",
        "feedback": "Speed alone can create quality and resilience failures."
      },
      {
        "key": "D",
        "text": "A message telling both suppliers that they have been rejected.",
        "feedback": "Rejecting both suppliers does not address the decision or identify a controlled alternative."
      }
    ],
    "correctAnswer": "B",
    "coreReason": "AI should make the trade-offs inspectable; the authorised owner decides how to balance them."
  },
  {
    "id": "QP-012",
    "topic": "Risk-adjusted procurement",
    "prompt": "An external news feed flags a possible financial problem with a supplier, but the report has not been verified. How should the signal be used?",
    "options": [
      {
        "key": "A",
        "text": "Treat it as a lead, label it unverified, and confirm it through approved sources before making a procurement decision.",
        "feedback": "Labelling the signal and checking approved sources preserves the distinction between lead and evidence."
      },
      {
        "key": "B",
        "text": "Cancel the supplier immediately to show that the organisation is cautious.",
        "feedback": "Immediate cancellation may create a new disruption based on an unverified claim."
      },
      {
        "key": "C",
        "text": "Ignore it because external information is never useful.",
        "feedback": "External evidence can be useful when it is verified and used within the approved process."
      },
      {
        "key": "D",
        "text": "Ask the supplier's competitor whether the report is true and use that answer as proof.",
        "feedback": "A competitor's statement is not independent confirmation."
      }
    ],
    "correctAnswer": "A",
    "coreReason": "An unverified external signal can inform investigation but should not become a procurement fact."
  },
  {
    "id": "QP-013",
    "topic": "Forecasting and demand signals",
    "prompt": "A retailer wants to prepare inventory for changing demand. Which approach is most informative?",
    "options": [
      {
        "key": "A",
        "text": "Report the current stock count without a forecast.",
        "feedback": "A current stock count is descriptive, not predictive."
      },
      {
        "key": "B",
        "text": "Increase every order by the same percentage.",
        "feedback": "A blanket increase ignores which products, periods, or conditions actually change demand."
      },
      {
        "key": "C",
        "text": "Combine sales history with relevant weather, event, and seasonal signals, then show assumptions and uncertainty.",
        "feedback": "Sales history, weather, events, and seasonality can create a more responsive forecast when assumptions are visible."
      },
      {
        "key": "D",
        "text": "Ask AI to choose the most persuasive marketing slogan for slow-moving items.",
        "feedback": "Marketing copy may affect demand later but does not forecast or control the inventory decision."
      }
    ],
    "correctAnswer": "C",
    "coreReason": "Precision forecasting uses relevant internal and external signals to improve a future decision."
  },
  {
    "id": "QP-014",
    "topic": "Forecasting and demand signals",
    "prompt": "A demand model has a gap covering the last four weeks of sales. What should the analysis show?",
    "options": [
      {
        "key": "A",
        "text": "A complete-looking chart with estimated values presented as actuals.",
        "feedback": "Estimated values presented as actuals create false evidence."
      },
      {
        "key": "B",
        "text": "No output at all, even if older data is useful.",
        "feedback": "Older data may still support a bounded analysis if its limits are explicit."
      },
      {
        "key": "C",
        "text": "A forecast based on the most optimistic assumption.",
        "feedback": "Optimism is not a substitute for missing observations."
      },
      {
        "key": "D",
        "text": "The available period, the missing-data limitation, the effect on confidence, and the request or check needed before action.",
        "feedback": "A transparent period, gap, confidence effect, and next check let the owner judge whether action is justified."
      }
    ],
    "correctAnswer": "D",
    "coreReason": "A missing period changes forecast confidence and must be shown as a limitation."
  },
  {
    "id": "QP-015",
    "topic": "Forecasting and demand signals",
    "prompt": "A forecasting tool recommends a reorder point for a new product with no history. What is the best next step?",
    "options": [
      {
        "key": "A",
        "text": "Publish the number because the tool generated it from a formula.",
        "feedback": "Formula output is not automatically valid for a new product."
      },
      {
        "key": "B",
        "text": "Test the assumptions against comparable approved cases, label the uncertainty, and have the inventory owner review before ordering.",
        "feedback": "Comparable approved cases, assumptions, and owner review create a safer path to a first decision."
      },
      {
        "key": "C",
        "text": "Use the highest possible reorder point to eliminate all stockout risk.",
        "feedback": "A high reorder point can create overstock and waste."
      },
      {
        "key": "D",
        "text": "Use the lowest possible reorder point to avoid holding cost.",
        "feedback": "A low reorder point can create stockouts and emergency cost."
      }
    ],
    "correctAnswer": "B",
    "coreReason": "A model output without product history is a hypothesis that requires comparison, uncertainty labels, and human review."
  },
  {
    "id": "QP-016",
    "topic": "Logistics and rostering",
    "prompt": "A delivery plan changes throughout the day because traffic and customer time windows move. Which AI use addresses the planning problem?",
    "options": [
      {
        "key": "A",
        "text": "Recalculate route and roster options against traffic, time windows, driver availability, and working-hour constraints.",
        "feedback": "It connects traffic, windows, driver availability, and working-hour limits to the schedule."
      },
      {
        "key": "B",
        "text": "Send a standard late-delivery message to every customer.",
        "feedback": "A customer message addresses communication, not the plan."
      },
      {
        "key": "C",
        "text": "Ban overtime so the schedule cannot change.",
        "feedback": "A blanket overtime ban ignores the operational constraints that create the need for changes."
      },
      {
        "key": "D",
        "text": "Create a chart of yesterday's overtime cost.",
        "feedback": "Historical cost reporting does not optimise today's route."
      }
    ],
    "correctAnswer": "A",
    "coreReason": "The planning problem is changing constraints, so the tool must recompute feasible route and roster options."
  },
  {
    "id": "QP-017",
    "topic": "Logistics and rostering",
    "prompt": "A dispatcher must assign urgent deliveries while respecting driver hours and promised windows. What should the tool provide?",
    "options": [
      {
        "key": "A",
        "text": "The shortest route, regardless of working-hour limits.",
        "feedback": "The shortest route may violate hours, windows, or service commitments."
      },
      {
        "key": "B",
        "text": "A single answer with no assumptions.",
        "feedback": "An answer without assumptions cannot be responsibly reviewed."
      },
      {
        "key": "C",
        "text": "Several feasible options with the constraints, trade-offs, exceptions, and decision owner visible.",
        "feedback": "Options, constraints, exceptions, and decision ownership support a real dispatch choice."
      },
      {
        "key": "D",
        "text": "A new HR policy that removes all delivery windows.",
        "feedback": "Removing delivery windows changes the business requirement rather than solving the planning problem."
      }
    ],
    "correctAnswer": "C",
    "coreReason": "Good decision support exposes feasible choices and trade-offs instead of hiding constraints behind a single answer."
  },
  {
    "id": "QP-018",
    "topic": "Logistics and rostering",
    "prompt": "The approved routing tool is unavailable during a service outage. What is the safest response?",
    "options": [
      {
        "key": "A",
        "text": "Guess the route from memory and present it as optimised.",
        "feedback": "Memory-based guesses presented as optimised are not evidence-led."
      },
      {
        "key": "B",
        "text": "Send every delivery to the nearest driver without checking availability.",
        "feedback": "Proximity alone ignores workload, hours, windows, and availability."
      },
      {
        "key": "C",
        "text": "Cancel the deliveries without informing the owner.",
        "feedback": "Cancellation is an unreviewed consequence, not a fallback plan."
      },
      {
        "key": "D",
        "text": "Use the documented offline fallback, label the tool limitation, and let the authorised dispatcher confirm the revised plan.",
        "feedback": "A documented offline route preserves continuity while making the limitation and dispatcher authority visible."
      }
    ],
    "correctAnswer": "D",
    "coreReason": "When a tool is unavailable, the workflow needs an explicit fallback and a human-confirmed decision."
  },
  {
    "id": "QP-019",
    "topic": "Root-cause analysis",
    "prompt": "A packaging machine fails at roughly the same time each week. Which investigation is most likely to reveal a root cause?",
    "options": [
      {
        "key": "A",
        "text": "Count the failures and publish the monthly total.",
        "feedback": "Counts show recurrence but do not explain the trigger."
      },
      {
        "key": "B",
        "text": "Compare sensor readings, temperature, operating speed, material batch, and timing to test possible triggers.",
        "feedback": "Sensor, temperature, speed, material, and timing evidence can distinguish competing causes."
      },
      {
        "key": "C",
        "text": "Ask the maintenance team to stand beside the machine every week.",
        "feedback": "Standing by the machine may improve response but does not test the cause."
      },
      {
        "key": "D",
        "text": "Rewrite the repair instructions so the next fix is faster.",
        "feedback": "Faster repair is useful, but it leaves the recurring failure unexplained."
      }
    ],
    "correctAnswer": "B",
    "coreReason": "Root-cause analysis tests hidden conditions that may explain the repeated symptom."
  },
  {
    "id": "QP-020",
    "topic": "Root-cause analysis",
    "prompt": "A team repeatedly misses inspection handoffs. Which first analysis is strongest?",
    "options": [
      {
        "key": "A",
        "text": "Identify the person who sends the fewest reminders.",
        "feedback": "Reminder volume does not establish why handoffs are missed."
      },
      {
        "key": "B",
        "text": "Add a reminder to every calendar.",
        "feedback": "More reminders may add noise without fixing missing inputs or approvals."
      },
      {
        "key": "C",
        "text": "Tell the team to work faster.",
        "feedback": "Telling people to work faster is not a diagnosis."
      },
      {
        "key": "D",
        "text": "Compare handoff times, missing inputs, workload, and approval conditions across cases to test competing explanations.",
        "feedback": "Comparing timings, inputs, workload, and approval conditions creates evidence for competing hypotheses."
      }
    ],
    "correctAnswer": "D",
    "coreReason": "A plausible cause must be tested against the process conditions that vary across cases."
  },
  {
    "id": "QP-021",
    "topic": "Root-cause analysis",
    "prompt": "The only available evidence is a count of late inspections. What can the team responsibly claim?",
    "options": [
      {
        "key": "A",
        "text": "The count shows a symptom; the team should label the cause as unknown and collect evidence before claiming why it happens.",
        "feedback": "It keeps the symptom visible, labels the cause unknown, and identifies the next evidence needed."
      },
      {
        "key": "B",
        "text": "The busiest shift caused the problem.",
        "feedback": "The busiest shift is an untested explanation."
      },
      {
        "key": "C",
        "text": "The newest employee caused the problem.",
        "feedback": "Blaming a person without evidence is unsafe and outside the data."
      },
      {
        "key": "D",
        "text": "The inspection process is permanently unsuitable.",
        "feedback": "A permanent judgement is not justified by one aggregate count."
      }
    ],
    "correctAnswer": "A",
    "coreReason": "A count of late inspections is a signal, not a confirmed cause."
  },
  {
    "id": "QP-022",
    "topic": "Service recovery",
    "prompt": "A customer group has received delayed installation appointments. Which response best supports service recovery?",
    "options": [
      {
        "key": "A",
        "text": "Send the same generic apology to every customer.",
        "feedback": "A generic message may fail to acknowledge the actual customer impact or next step."
      },
      {
        "key": "B",
        "text": "Wait until the root cause is fully proven before contacting anyone.",
        "feedback": "Waiting for perfect root-cause certainty delays useful communication."
      },
      {
        "key": "C",
        "text": "Prepare a specific, empathetic message that states what is known, the remedy, the next update, and the accountable route for review.",
        "feedback": "Known facts, remedy, update timing, and review route address both service and trust."
      },
      {
        "key": "D",
        "text": "Ask AI to promise a compensation amount automatically.",
        "feedback": "An AI-generated compensation promise creates an unapproved commitment."
      }
    ],
    "correctAnswer": "C",
    "coreReason": "Recovery needs a specific remedy and communication that is accurate, empathetic, and owned."
  },
  {
    "id": "QP-023",
    "topic": "Service recovery",
    "prompt": "Several customers were charged twice by a billing error. What should an AI-assisted support workflow do first?",
    "options": [
      {
        "key": "A",
        "text": "Triage the affected cases, draft personalised explanations, and route refunds through the authorised approval process.",
        "feedback": "Triage, personalised drafts, and approved refund routing combine speed, empathy, and governance."
      },
      {
        "key": "B",
        "text": "Send a public apology without checking individual records.",
        "feedback": "A public message cannot replace checking individual cases."
      },
      {
        "key": "C",
        "text": "Issue every refund automatically, regardless of account status.",
        "feedback": "Automatic refunds may be wrong, unauthorised, or create additional reconciliation problems."
      },
      {
        "key": "D",
        "text": "Blame the billing team in the customer message.",
        "feedback": "Blame does not repair the customer's loss or provide a safe next step."
      }
    ],
    "correctAnswer": "A",
    "coreReason": "AI can organise cases and prepare communication while the authorised process controls the financial remedy."
  },
  {
    "id": "QP-024",
    "topic": "Service recovery",
    "prompt": "A delivery failure is confirmed, but its underlying cause is still being investigated. What should the customer update say?",
    "options": [
      {
        "key": "A",
        "text": "State a likely cause as fact so the message sounds confident.",
        "feedback": "Confidence of tone does not turn a hypothesis into a fact."
      },
      {
        "key": "B",
        "text": "Omit the problem and focus only on future service.",
        "feedback": "Omitting the failure avoids the real customer need."
      },
      {
        "key": "C",
        "text": "Say nothing until every internal question is resolved.",
        "feedback": "Silence leaves affected people without an owner or expectation."
      },
      {
        "key": "D",
        "text": "Separate confirmed facts from the unknown cause, state the immediate remedy, and give the next update or review point.",
        "feedback": "Facts, unknown cause, immediate remedy, and next update preserve honesty and usefulness."
      }
    ],
    "correctAnswer": "D",
    "coreReason": "A trustworthy update separates what is confirmed from what is still being investigated."
  },
  {
    "id": "QP-025",
    "topic": "Insight-driven operations",
    "prompt": "Regional teams submit operational spreadsheets with inconsistent layouts. What is the most useful first transformation?",
    "options": [
      {
        "key": "A",
        "text": "Ask each team to write a longer explanation of its spreadsheet.",
        "feedback": "More explanation does not fix inconsistent data structure."
      },
      {
        "key": "B",
        "text": "Ingest the files, map fields, clean the data, identify gaps, and produce a consolidated decision view.",
        "feedback": "Ingestion, field mapping, cleaning, gap identification, and consolidation make the data usable."
      },
      {
        "key": "C",
        "text": "Read the spreadsheets aloud to the director.",
        "feedback": "Reading raw files transfers the search burden to the director."
      },
      {
        "key": "D",
        "text": "Predict which team will submit late next month.",
        "feedback": "Submission behaviour is not the same as overall operational health."
      }
    ],
    "correctAnswer": "B",
    "coreReason": "Insight requires a traceable transformation from fragmented sources to a decision-ready view."
  },
  {
    "id": "QP-026",
    "topic": "Insight-driven operations",
    "prompt": "One regional report records quantities in boxes and another in individual units. What should happen before the figures are combined?",
    "options": [
      {
        "key": "A",
        "text": "Add the numbers together because both are quantities.",
        "feedback": "Adding incompatible units produces a misleading total."
      },
      {
        "key": "B",
        "text": "Use the larger number to avoid underestimating demand.",
        "feedback": "Choosing the larger number introduces an arbitrary bias."
      },
      {
        "key": "C",
        "text": "Define the unit conversion, preserve the source, and show any unresolved data-quality issue before aggregation.",
        "feedback": "A documented conversion, source trace, and data-quality flag preserve meaning before aggregation."
      },
      {
        "key": "D",
        "text": "Delete the report with the less convenient unit.",
        "feedback": "Deleting inconvenient data hides an input problem rather than solving it."
      }
    ],
    "correctAnswer": "C",
    "coreReason": "A consolidated view is only meaningful when definitions and units are reconciled."
  },
  {
    "id": "QP-027",
    "topic": "Insight-driven operations",
    "prompt": "A dashboard shows a green status, but half of the reporting locations have not submitted current data. What is the correct interpretation?",
    "options": [
      {
        "key": "A",
        "text": "Display the data-coverage gap and confidence limitation, then route the missing-data issue to an owner.",
        "feedback": "The gap is part of the evidence and should be assigned to an owner for completion or review."
      },
      {
        "key": "B",
        "text": "Treat green as proof that performance is healthy.",
        "feedback": "Green based on incomplete data can create false assurance."
      },
      {
        "key": "C",
        "text": "Replace missing locations with last year's best results.",
        "feedback": "Substituting best results invents evidence and hides current conditions."
      },
      {
        "key": "D",
        "text": "Remove the green status and state that performance has failed.",
        "feedback": "Missing data does not prove that performance has failed."
      }
    ],
    "correctAnswer": "A",
    "coreReason": "A status signal must include data coverage and confidence, not just a colour."
  },
  {
    "id": "QP-028",
    "topic": "Personalised BI assistants",
    "prompt": "A site manager needs to decide which constraints require escalation this week. What should a BI assistant prioritise?",
    "options": [
      {
        "key": "A",
        "text": "Every available metric in one report.",
        "feedback": "More metrics increase search cost and can obscure exceptions."
      },
      {
        "key": "B",
        "text": "A new combined metric that no one used before.",
        "feedback": "An invented metric may not have a shared definition or decision use."
      },
      {
        "key": "C",
        "text": "A long narrative with no thresholds or actions.",
        "feedback": "A narrative without thresholds or actions leaves the decision unclear."
      },
      {
        "key": "D",
        "text": "A small, role-relevant set of signals and exceptions linked to the escalation decision.",
        "feedback": "Relevant signals and exceptions connect the assistant to escalation work."
      }
    ],
    "correctAnswer": "D",
    "coreReason": "A role-based view earns its place by supporting a named decision with a small set of relevant signals."
  },
  {
    "id": "QP-029",
    "topic": "Personalised BI assistants",
    "prompt": "A commercial manager wants an early view of payment and variation risk. Which output is most useful?",
    "options": [
      {
        "key": "A",
        "text": "A list of all project correspondence in date order.",
        "feedback": "A chronological correspondence list still requires the manager to find the risks manually."
      },
      {
        "key": "B",
        "text": "A view of ageing items, unapproved variations, missing evidence, thresholds, owners, and next actions.",
        "feedback": "Ageing, approvals, missing evidence, thresholds, and next actions create a decision-oriented view."
      },
      {
        "key": "C",
        "text": "A chart of the team's total email volume.",
        "feedback": "Email volume is not a reliable proxy for payment or variation risk."
      },
      {
        "key": "D",
        "text": "A generic industry report with no project source references.",
        "feedback": "A generic report without project sources cannot support a specific decision."
      }
    ],
    "correctAnswer": "B",
    "coreReason": "The output must connect commercial risk to evidence, thresholds, owners, and action."
  },
  {
    "id": "QP-030",
    "topic": "Personalised BI assistants",
    "prompt": "A manager asks for a 50-page weekly report “so nothing is missed.” What should the designer do first?",
    "options": [
      {
        "key": "A",
        "text": "Produce 50 pages immediately because more information is safer.",
        "feedback": "More pages can increase the time needed to find the important signal."
      },
      {
        "key": "B",
        "text": "Remove all detail and provide only one overall score.",
        "feedback": "Removing all detail prevents appropriate review and follow-up."
      },
      {
        "key": "C",
        "text": "Clarify the recurring decisions, create a concise role-based view, and retain drill-down evidence for review.",
        "feedback": "A concise role view with traceable drill-down supports action without losing evidence."
      },
      {
        "key": "D",
        "text": "Ask AI to invent a metric that summarises every department.",
        "feedback": "A new all-purpose metric can hide rather than clarify differences between decisions."
      }
    ],
    "correctAnswer": "C",
    "coreReason": "The first design question is what decisions recur, not how much information can be displayed."
  },
  {
    "id": "QP-031",
    "topic": "PDPA and responsible data",
    "prompt": "A team wants to test an external AI model using customer service records. Which preparation is required before upload?",
    "options": [
      {
        "key": "A",
        "text": "Confirm the purpose and permitted organisational route, minimise the data to what the task requires, protect any PII, and use synthetic or sanitised data where practical.",
        "feedback": "It addresses purpose, data minimisation, PII protection, approved processing, and task relevance before upload without treating raw data as the default."
      },
      {
        "key": "B",
        "text": "Upload the full records because more data guarantees a better result.",
        "feedback": "More raw data can increase privacy exposure and does not guarantee a better result."
      },
      {
        "key": "C",
        "text": "Ask the model to delete the records after the response.",
        "feedback": "A later deletion promise does not replace organisational approval or data controls."
      },
      {
        "key": "D",
        "text": "Send a notice after the test is complete.",
        "feedback": "A post-test notice is too late to establish the permitted purpose and route."
      }
    ],
    "correctAnswer": "A",
    "coreReason": "Responsible use starts by confirming the purpose and permitted route, minimising the data, and applying appropriate safeguards to any personal data. Synthetic or sanitised data is a strong option where it meets the task."
  },
  {
    "id": "QP-032",
    "topic": "PDPA and responsible data",
    "prompt": "A participant wants to paste a live client contract containing names and contact details into a personal AI account. What is the appropriate response?",
    "options": [
      {
        "key": "A",
        "text": "Allow it if the participant deletes the chat later.",
        "feedback": "Deleting a chat later does not establish where the data travelled or whether the route was permitted."
      },
      {
        "key": "B",
        "text": "Remove only the company logo and upload the rest.",
        "feedback": "Removing a logo does not remove names, contact details, contract terms, or other sensitive context."
      },
      {
        "key": "C",
        "text": "Ask the AI to promise confidentiality.",
        "feedback": "A model's promise cannot substitute for organisational data governance."
      },
      {
        "key": "D",
        "text": "Use synthetic or sanitised material, or the explicitly approved organisational route; do not use the live identifiers without clearance.",
        "feedback": "Synthetic/sanitised material or an explicitly cleared organisational route protects the participant and client boundary."
      }
    ],
    "correctAnswer": "D",
    "coreReason": "A personal account and live client identifiers are not an approved training route by default."
  },
  {
    "id": "QP-033",
    "topic": "PDPA and responsible data",
    "prompt": "A software vendor says its model deletes uploaded data after each session. What should the organisation do?",
    "options": [
      {
        "key": "A",
        "text": "Treat the vendor's statement as sufficient approval.",
        "feedback": "A vendor statement does not confirm purpose, access, retention, contract, or approved use."
      },
      {
        "key": "B",
        "text": "Still verify the organisational route, purpose, controls, retention, and permitted data before any upload.",
        "feedback": "The organisation still verifies route, purpose, controls, retention, and permitted data."
      },
      {
        "key": "C",
        "text": "Upload the most sensitive records first to test the promise.",
        "feedback": "Sensitive data should not be used as a test of an unverified control."
      },
      {
        "key": "D",
        "text": "Ask a participant to decide whether the statement is legally adequate.",
        "feedback": "A participant cannot replace the accountable privacy or organisational approval route."
      }
    ],
    "correctAnswer": "B",
    "coreReason": "Vendor retention claims are one input to review, not the organisation's permission to process data."
  },
  {
    "id": "QP-034",
    "topic": "Human-in-the-Loop governance",
    "prompt": "An AI tool ranks contract exceptions for a procurement reviewer. Which control is strongest for high-consequence cases?",
    "options": [
      {
        "key": "A",
        "text": "Auto-accept every high-confidence result.",
        "feedback": "Confidence does not confer authority or guarantee that an exception is safe."
      },
      {
        "key": "B",
        "text": "Remove the reviewer so the process is faster.",
        "feedback": "Removing the reviewer turns support into ungoverned autonomy."
      },
      {
        "key": "C",
        "text": "Let the tool flag anomalies and supporting evidence while a qualified human makes the final decision.",
        "feedback": "The human reviews evidence and makes the final decision within the authorised process."
      },
      {
        "key": "D",
        "text": "Ask a second AI to approve the first AI's ranking.",
        "feedback": "Another AI does not supply the accountable authority or independent human judgement."
      }
    ],
    "correctAnswer": "C",
    "coreReason": "In high-consequence work, AI supports review by surfacing evidence and anomalies; an authorised human decides."
  },
  {
    "id": "QP-035",
    "topic": "Human-in-the-Loop governance",
    "prompt": "An AI-assisted inspection workflow detects a possible safety deviation. What should happen next?",
    "options": [
      {
        "key": "A",
        "text": "Route the evidence to the qualified responsible person for verification and decision, with a stop/escalation rule.",
        "feedback": "It makes the alert useful without allowing AI to declare a consequential matter resolved."
      },
      {
        "key": "B",
        "text": "Mark the deviation resolved because AI detected it.",
        "feedback": "Detection is not verification or authorisation."
      },
      {
        "key": "C",
        "text": "Publish the alert to every external stakeholder immediately.",
        "feedback": "Immediate external publication can spread unverified or sensitive information."
      },
      {
        "key": "D",
        "text": "Ignore the alert if the confidence score is below 100%.",
        "feedback": "A confidence score below 100% does not justify ignoring a potentially serious signal."
      }
    ],
    "correctAnswer": "A",
    "coreReason": "A detected safety concern needs qualified verification, an accountable decision, and a stop/escalation path."
  },
  {
    "id": "QP-036",
    "topic": "Human-in-the-Loop governance",
    "prompt": "A named reviewer is unavailable when a high-impact AI output is ready for release. What is the correct boundary?",
    "options": [
      {
        "key": "A",
        "text": "Release it because the tool has already completed its checks.",
        "feedback": "Tool checks cannot replace the named human decision."
      },
      {
        "key": "B",
        "text": "Ask an unrelated colleague to approve it without context.",
        "feedback": "An unrelated colleague may lack the authority or context to approve the output."
      },
      {
        "key": "C",
        "text": "Remove the review requirement for this one case.",
        "feedback": "A one-off exception weakens the control precisely when it is needed."
      },
      {
        "key": "D",
        "text": "Hold or stop the release, escalate through the approved route, or use the documented fallback.",
        "feedback": "Hold/stop, escalate, or use a documented fallback until the authorised route is available."
      }
    ],
    "correctAnswer": "D",
    "coreReason": "If the required reviewer is unavailable, the release boundary remains in force."
  },
  {
    "id": "QP-037",
    "topic": "Continuous quality assurance",
    "prompt": "What makes an AI-supported 24/7 QA workflow actionable rather than merely observable?",
    "options": [
      {
        "key": "A",
        "text": "A dashboard with as many indicators as possible.",
        "feedback": "More indicators without decision use can increase noise."
      },
      {
        "key": "B",
        "text": "A defined standard, monitored signal, exception threshold, evidence record, human verifier, and next action.",
        "feedback": "The full chain makes an exception inspectable and actionable."
      },
      {
        "key": "C",
        "text": "A weekly report sent after the issue has passed.",
        "feedback": "A delayed report may arrive after the useful intervention window."
      },
      {
        "key": "D",
        "text": "A promise that the system will prevent every deviation.",
        "feedback": "No monitoring system can honestly promise prevention of every deviation."
      }
    ],
    "correctAnswer": "B",
    "coreReason": "QA becomes operational when a signal is connected to a standard, threshold, evidence, human verifier, and action."
  },
  {
    "id": "QP-038",
    "topic": "Continuous quality assurance",
    "prompt": "A facilities team wants to monitor hygiene checks across multiple locations. Which design is strongest?",
    "options": [
      {
        "key": "A",
        "text": "Ask AI to write a motivating hygiene policy.",
        "feedback": "Motivation does not create continuous evidence or exception handling."
      },
      {
        "key": "B",
        "text": "Schedule one surprise visit each month and treat the result as complete assurance.",
        "feedback": "A monthly visit cannot provide 24/7 visibility and may miss the relevant event."
      },
      {
        "key": "C",
        "text": "Compare approved checklist evidence with the defined standard, raise traceable exceptions, and route them to a human reviewer.",
        "feedback": "Standard, evidence, traceable alert, and human review create a controlled QA loop."
      },
      {
        "key": "D",
        "text": "Predict which location is least reliable from staff turnover alone.",
        "feedback": "Turnover alone is an indirect signal and cannot prove a hygiene deviation."
      }
    ],
    "correctAnswer": "C",
    "coreReason": "Monitoring must compare approved evidence against a defined standard and route exceptions for human review."
  },
  {
    "id": "QP-039",
    "topic": "Continuous quality assurance",
    "prompt": "A monitoring tool produces too many false alarms. What should the team do?",
    "options": [
      {
        "key": "A",
        "text": "Review the test cases, threshold, source quality, and human triage process; revise and re-evaluate before changing the control.",
        "feedback": "Reviewing cases, thresholds, sources, and triage can improve signal quality while preserving human oversight."
      },
      {
        "key": "B",
        "text": "Disable all alerts so the team can work faster.",
        "feedback": "Disabling alerts removes visibility rather than improving the control."
      },
      {
        "key": "C",
        "text": "Auto-accept every alert as a true breach.",
        "feedback": "Treating every alert as true creates unnecessary disruption and can erode trust."
      },
      {
        "key": "D",
        "text": "Hide the false alarms from the review record.",
        "feedback": "Hiding false alarms prevents learning and makes the control look stronger than it is."
      }
    ],
    "correctAnswer": "A",
    "coreReason": "False alarms are a test-and-revise problem, not a reason to remove the safety boundary or hide evidence."
  },
  {
    "id": "QP-040",
    "topic": "Strategy and staged adoption",
    "prompt": "In the course's staged adoption model, what should the first 30-day action plan make visible within a broader 90-day roadmap?",
    "options": [
      {
        "key": "A",
        "text": "Every tool the organisation might buy in the future.",
        "feedback": "A catalogue of future tools does not define a current value test."
      },
      {
        "key": "B",
        "text": "A promise that all manual work will disappear.",
        "feedback": "Removing all manual work ignores risk, authority, and human adoption."
      },
      {
        "key": "C",
        "text": "A launch date without an owner or measure.",
        "feedback": "A date without an owner or measure cannot show whether the test worked."
      },
      {
        "key": "D",
        "text": "One bounded opportunity, an owner, baseline or measure, controls, dependencies, review points, and an expand/revise/stop decision.",
        "feedback": "The bounded opportunity, owner, measure, controls, dependencies, and decision route create a responsible adoption cycle."
      }
    ],
    "correctAnswer": "D",
    "coreReason": "A staged adoption plan turns an opportunity into a bounded test with ownership, measurement, controls, and a next decision. The course's 30-day action plan can serve as the first executable stage within the broader 90-day roadmap."
  },
  {
    "id": "QP-041",
    "topic": "Strategy and staged adoption",
    "prompt": "A department proposes launching ten complex AI tools in one quarter. What is the best first move?",
    "options": [
      {
        "key": "A",
        "text": "Approve all ten so teams can choose their favourite.",
        "feedback": "Ten simultaneous tools spread attention and make evidence difficult to compare."
      },
      {
        "key": "B",
        "text": "Prioritise one repeatable, high-value workflow, define its evidence and controls, and sequence later experiments.",
        "feedback": "One repeatable workflow with controls and a learning loop creates a credible basis for sequencing more work."
      },
      {
        "key": "C",
        "text": "Cancel all AI work permanently.",
        "feedback": "A poor rollout plan does not mean all AI work should stop permanently."
      },
      {
        "key": "D",
        "text": "Buy the most expensive tool because complexity signals value.",
        "feedback": "Price and complexity do not prove value or fit."
      }
    ],
    "correctAnswer": "B",
    "coreReason": "Adoption improves when a team proves one useful workflow before adding complexity."
  },
  {
    "id": "QP-042",
    "topic": "Strategy and staged adoption",
    "prompt": "A proposed AI project has no baseline measure. What should the Strategy Canvas say?",
    "options": [
      {
        "key": "A",
        "text": "Claim a likely percentage improvement based on a similar company.",
        "feedback": "A result from another company is not evidence of this workflow's baseline or outcome."
      },
      {
        "key": "B",
        "text": "Use the largest available metric as a proxy without checking relevance.",
        "feedback": "A convenient metric may not represent the intended value."
      },
      {
        "key": "C",
        "text": "Record the baseline as unknown, define a feasible measurement approach, and make the next decision conditional on evidence.",
        "feedback": "A baseline plan and conditional decision make learning possible without inventing ROI."
      },
      {
        "key": "D",
        "text": "Proceed directly to organisation-wide deployment.",
        "feedback": "Scaling without a measure removes the ability to test value, risk, or adoption."
      }
    ],
    "correctAnswer": "C",
    "coreReason": "An unknown baseline must remain unknown until a measurement method is defined."
  },
  {
    "id": "QP-043",
    "topic": "Predictive inventory resilience",
    "prompt": "A distribution team has both expired stock and emergency purchases. Which analysis addresses the system rather than one symptom?",
    "options": [
      {
        "key": "A",
        "text": "Combine usage, demand, expiry, lead time, and replenishment signals to support a reviewed inventory decision.",
        "feedback": "Usage, demand, expiry, lead time, and replenishment together address both waste and service risk."
      },
      {
        "key": "B",
        "text": "Send a warning to staff who allowed items to expire.",
        "feedback": "Blame does not improve the inventory system or its signals."
      },
      {
        "key": "C",
        "text": "Negotiate a cheaper emergency delivery rate.",
        "feedback": "Cheaper emergency delivery reduces one cost after failure but does not prevent waste or shortage."
      },
      {
        "key": "D",
        "text": "Increase every order equally.",
        "feedback": "A blanket increase can worsen expiry and holding cost."
      }
    ],
    "correctAnswer": "A",
    "coreReason": "Resilience requires balancing excess, expiry, replenishment, and shortage signals in one decision view."
  },
  {
    "id": "QP-044",
    "topic": "Predictive inventory resilience",
    "prompt": "A warehouse wants to find items that create both waste and service risk. What should the analysis surface?",
    "options": [
      {
        "key": "A",
        "text": "Only the items with the highest unit price.",
        "feedback": "Unit price alone does not show expiry or service exposure."
      },
      {
        "key": "B",
        "text": "Only items currently at zero stock.",
        "feedback": "Zero stock is only one point in the problem and misses items that are about to expire."
      },
      {
        "key": "C",
        "text": "Items with expiry exposure, repeated urgent demand, lead-time risk, and a named owner for the next decision.",
        "feedback": "Expiry, urgent demand, lead time, and ownership create a prioritised review queue."
      },
      {
        "key": "D",
        "text": "A list of employees who requested emergency stock.",
        "feedback": "Employee identity does not explain the system's inventory risk."
      }
    ],
    "correctAnswer": "C",
    "coreReason": "The decision view should identify items that combine waste exposure with service or replenishment risk."
  },
  {
    "id": "QP-045",
    "topic": "Predictive inventory resilience",
    "prompt": "Demand is expected to spike, but several current batches are close to expiry and the forecast is uncertain. What is the best decision-support output?",
    "options": [
      {
        "key": "A",
        "text": "Automatically discard all near-expiry stock.",
        "feedback": "Automatic disposal may create avoidable loss and needs a qualified inventory decision."
      },
      {
        "key": "B",
        "text": "Place the largest possible order to guarantee availability.",
        "feedback": "The largest order can worsen expiry, cash, and storage exposure."
      },
      {
        "key": "C",
        "text": "Ignore the expiry dates because demand is increasing.",
        "feedback": "Ignoring expiry discards a material risk signal."
      },
      {
        "key": "D",
        "text": "Present scenarios with the demand and expiry assumptions, options, risks, and human approval point before changing replenishment.",
        "feedback": "Scenarios, assumptions, options, risks, and the approval point make the trade-off reviewable."
      }
    ],
    "correctAnswer": "D",
    "coreReason": "Conflicting demand and expiry signals require scenario comparison and an authorised decision, not an automatic extreme."
  }
]);
