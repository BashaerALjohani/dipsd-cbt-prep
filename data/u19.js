window.STUDY = window.STUDY || { units: [] };
STUDY.units.push({
  id: "u19", num: 19,
  title: { en: "Analyse Software Requirements", ar: "تحليل متطلبات البرمجيات" },
  intro: {
    en: "What requirements are, the requirements journey, gathering techniques, functional vs non-functional requirements, analysis and scope, feasibility, modelling with UML (use-case, activity, class, sequence), flowcharts and pseudocode, risk analysis, and the SRS.",
    ar: "ما هي المتطلبات، ورحلة المتطلبات، وطرق جمعها، والمتطلبات الوظيفية وغير الوظيفية، والتحليل والنطاق، ودراسة الجدوى، والنمذجة بـ UML (حالة الاستخدام، النشاط، الصنف، التسلسل)، والمخططات الانسيابية والكود الزائف، وتحليل المخاطر، ووثيقة SRS."
  },
  klos: [
    { en: "Understand software requirements and the requirements journey", ar: "فهم متطلبات البرمجيات ورحلة المتطلبات" },
    { en: "Gather, analyse and document requirements (FR/NFR, scope, MoSCoW)", ar: "جمع المتطلبات وتحليلها وتوثيقها (وظيفية وغير وظيفية، النطاق، MoSCoW)" },
    { en: "Model requirements: UML, use-case narrative, flowcharts, pseudocode", ar: "نمذجة المتطلبات: UML، سرد حالة الاستخدام، المخططات الانسيابية، الكود الزائف" },
    { en: "Feasibility, solutions, risk analysis and the SRS", ar: "الجدوى والحلول وتحليل المخاطر ووثيقة SRS" }
  ],
  keywords: [
    { t: "Software requirement", lv: 1, en: "What a system needs to do and the needs or conditions it must meet.", ar: "ما يحتاج النظام أن يفعله والاحتياجات أو الشروط التي يجب أن يحققها." },
    { t: "Requirement vs solution", lv: 1, en: "Requirement = the NEED ('customers must order online'). Solution = HOW we meet it ('mobile-friendly website with an order form').", ar: "المتطلب = الاحتياج ('العملاء لازم يطلبون أونلاين'). الحل = كيف نحققه ('موقع متجاوب فيه نموذج طلب')." },
    { t: "Client", lv: 1, en: "The person or organisation requesting the solution.", ar: "الشخص أو الجهة التي تطلب الحل." },
    { t: "Stakeholder", lv: 1, en: "Any person or group affected by the project (users, staff, managers, client).", ar: "أي شخص أو مجموعة تتأثر بالمشروع (المستخدمون، الموظفون، المدراء، العميل)." },
    { t: "Interview", lv: 1, en: "One-to-one questioning for DEPTH and detailed reasons; takes time; evidence: minutes or notes.", ar: "أسئلة فردية للعمق والأسباب التفصيلية؛ يأخذ وقت؛ الدليل: محضر أو ملاحظات." },
    { t: "Questionnaire / survey", lv: 1, en: "Short neutral questions to REACH many people (200 students); less detail.", ar: "أسئلة قصيرة محايدة للوصول لعدد كبير (200 طالب)؛ تفاصيل أقل." },
    { t: "Observation", lv: 2, en: "Watching real work to see where a process is slow; users may act differently when watched.", ar: "مراقبة العمل الفعلي لمعرفة أين العملية بطيئة؛ وقد يتصرف المستخدمون بشكل مختلف وهم مراقَبون." },
    { t: "Workshop", lv: 2, en: "Structured group meeting to resolve disagreements, prioritise and confirm decisions.", ar: "اجتماع جماعي منظم لحل الخلافات وترتيب الأولويات وتأكيد القرارات." },
    { t: "Document analysis", lv: 2, en: "Reviewing existing forms, policies and reports to find requirements and constraints.", ar: "مراجعة النماذج والسياسات والتقارير الموجودة لاكتشاف المتطلبات والقيود." },
    { t: "Functional requirement (FR)", lv: 1, en: "What the system DOES: 'The system shall allow customers to submit a cake order.'", ar: "ما يفعله النظام: 'يجب أن يسمح النظام للعميل بإرسال طلب كيك'." },
    { t: "Non-functional requirement (NFR)", lv: 1, en: "How WELL / under what quality or constraint: performance, security, usability, reliability.", ar: "مدى الجودة أو القيود: الأداء، الأمان، سهولة الاستخدام، الموثوقية." },
    { t: "Testable / traceable / unambiguous", lv: 3, en: "Good requirement qualities: can be verified, linked to a need, no vague words.", ar: "صفات المتطلب الجيد: يمكن التحقق منه، مربوط باحتياج، بدون كلمات مبهمة." },
    { t: "MoSCoW", lv: 2, en: "Prioritisation: Must have, Should have, Could have, Won't have (this time).", ar: "ترتيب الأولويات: لازم، ينبغي، ممكن، لن يكون (هذي المرة)." },
    { t: "Scope", lv: 2, en: "What is included, excluded and delivered.", ar: "ما هو داخل المشروع وما هو خارجه وما سيتم تسليمه." },
    { t: "Constraint", lv: 2, en: "A fixed limit: budget 8,000 SAR, launch before registration week.", ar: "حد ثابت: ميزانية 8000 ريال، الإطلاق قبل أسبوع التسجيل." },
    { t: "Assumption", lv: 3, en: "Believed true but must be checked: all students have college accounts.", ar: "يُعتقد أنه صحيح لكن لازم يُتحقق منه: كل الطلاب عندهم حسابات." },
    { t: "Dependency", lv: 3, en: "Something the project relies on: the college authentication service must be available.", ar: "شيء يعتمد عليه المشروع: خدمة تسجيل الدخول في الكلية لازم تكون متاحة." },
    { t: "Acceptance criteria", lv: 3, en: "Specific conditions a deliverable must meet before the client accepts it.", ar: "شروط محددة يجب أن يحققها المخرج قبل أن يقبله العميل." },
    { t: "Verification vs validation", lv: 4, en: "Verification: are we building it RIGHT (quality, consistent, testable)? Validation: are we building the RIGHT thing (solves the real need)?", ar: "التحقق: هل نبنيه بشكل صحيح (جودة، اتساق، قابل للاختبار)؟ المصادقة: هل نبني الشيء الصحيح (يحل الاحتياج الحقيقي)؟" },
    { t: "Feasibility", lv: 2, en: "Checking whether a solution is realistic: technical, operational, economic (budget), schedule.", ar: "التحقق هل الحل واقعي: تقنياً، تشغيلياً، اقتصادياً (الميزانية)، زمنياً." },
    { t: "SRS / SRD", lv: 1, en: "Software Requirements Specification/Document: the organised final document clients and developers both use.", ar: "وثيقة مواصفات المتطلبات: الوثيقة النهائية المنظمة التي يستخدمها العميل والمطورون." },
    { t: "Requirements modelling", lv: 2, en: "Visual or structured representation of what a system should do and how it behaves.", ar: "تمثيل مرئي أو منظم لما يجب أن يفعله النظام وكيف يتصرف." },
    { t: "UML", lv: 1, en: "Unified Modeling Language: standard visual language to describe, design and document software.", ar: "لغة النمذجة الموحدة: لغة مرئية قياسية لوصف البرمجيات وتصميمها وتوثيقها." },
    { t: "Use-case diagram", lv: 2, en: "WHO uses the system and WHAT they can do: actors outside, use cases inside the system boundary.", ar: "من يستخدم النظام وماذا يفعل: الممثلون خارج حدود النظام وحالات الاستخدام داخلها." },
    { t: "Actor", lv: 2, en: "A ROLE outside the system that interacts with it (Customer, Support Staff), not a person's name.", ar: "دور خارج النظام يتفاعل معه (عميل، موظف دعم)، وليس اسم شخص." },
    { t: "Activity diagram", lv: 2, en: "The FLOW view: actions, order, decisions, start and end.", ar: "عرض السير: الأفعال والترتيب والقرارات والبداية والنهاية." },
    { t: "Class diagram", lv: 3, en: "The THINGS view: classes, attributes, methods and relationships.", ar: "عرض الأشياء: الأصناف والخصائص والدوال والعلاقات." },
    { t: "Sequence diagram", lv: 3, en: "The ORDER view: who sends which message to whom, read top to bottom over time (lifelines).", ar: "عرض الترتيب: من يرسل أي رسالة لمن، يُقرأ من الأعلى للأسفل عبر الزمن (خطوط الحياة)." },
    { t: "Use-case narrative", lv: 3, en: "Written step-by-step description of one use case: actor, preconditions, main flow, alternative flows, postconditions.", ar: "وصف مكتوب خطوة بخطوة لحالة استخدام: الممثل، الشروط المسبقة، المسار الرئيسي، المسارات البديلة، الشروط اللاحقة." },
    { t: "Flowchart", lv: 1, en: "Diagram of logic: oval start/end, rectangle process, diamond decision, parallelogram input/output, arrows.", ar: "مخطط للمنطق: شكل بيضاوي للبداية والنهاية، مستطيل للمعالجة، معين للقرار، متوازي أضلاع للإدخال والإخراج، وأسهم." },
    { t: "Pseudocode", lv: 2, en: "Plain-language, code-like steps describing program logic before coding.", ar: "خطوات بلغة بسيطة تشبه الكود لوصف منطق البرنامج قبل البرمجة." },
    { t: "Risk", lv: 2, en: "An uncertain event that MAY affect objectives (time, cost, quality, security).", ar: "حدث غير مؤكد قد يؤثر على الأهداف (الوقت، التكلفة، الجودة، الأمان)." },
    { t: "Issue", lv: 2, en: "A problem happening NOW (the database is offline). Risk = may happen; issue = is happening.", ar: "مشكلة تحدث الآن (قاعدة البيانات متوقفة). الخطر = قد يحدث، والمشكلة = تحدث الآن." },
    { t: "Risk score", lv: 3, en: "Likelihood × Impact, often on a 5 × 5 matrix.", ar: "الاحتمالية × الأثر، غالباً على مصفوفة 5 × 5." },
    { t: "Risk responses", lv: 3, en: "Avoid (remove cause), Reduce (backups, tests, access control), Transfer (insurance, specialist), Accept (monitor, keep contingency).", ar: "التجنب (إزالة السبب)، التخفيف (نسخ احتياطي، اختبار، صلاحيات)، النقل (تأمين، جهة متخصصة)، القبول (مراقبة مع خطة طوارئ)." },
    { t: "Risk register", lv: 3, en: "Table of risks with type, statement, likelihood, impact, score, response, owner, trigger, review date, status, residual risk.", ar: "جدول المخاطر: النوع، الوصف، الاحتمالية، الأثر، الدرجة، الاستجابة، المالك، المؤشر، تاريخ المراجعة، الحالة، الخطر المتبقي." },
    { t: "Risk owner / trigger", lv: 4, en: "Owner = one named person accountable. Trigger = measurable warning sign (page load > 3 s).", ar: "المالك = شخص واحد مسمى ومسؤول. المؤشر = علامة تحذير قابلة للقياس (تحميل الصفحة > 3 ثوانٍ)." },
    { t: "Residual risk", lv: 4, en: "The risk level remaining after controls are applied.", ar: "مستوى الخطر المتبقي بعد تطبيق الضوابط." }
  ],
  topics: [
    { lv: 1, t: { en: "What requirements are and why they matter", ar: "ما هي المتطلبات وليش مهمة" },
      en: "Requirements describe what the system must do and the conditions it must meet. Understand BEFORE building: good requirements match real needs, give the team a clear target and a shared understanding. Poor requirements cause wrong features, extra cost and unhappy users.",
      ar: "المتطلبات تصف ما يجب أن يفعله النظام والشروط التي يجب أن يحققها. افهم قبل ما تبني: المتطلبات الجيدة تطابق الاحتياج الحقيقي وتعطي الفريق هدفاً واضحاً وفهماً مشتركاً. والضعيفة تسبب ميزات خاطئة وتكلفة زائدة ومستخدمين غير راضين.",
      more: { en: "A client statement ('we want a simple modern website') is a starting point, not a specification. Ask WHO, WHAT, HOW, WHEN, LIMITS (budget, time, tech), SUCCESS. Vague: 'Make the website fast and easy.' Clearer: 'Customers should find a product and start an order in a few simple steps.' Requirement first, solution later.",
              ar: "كلام العميل ('نبي موقع بسيط وحديث') نقطة بداية وليس مواصفات. اسأل: من، ماذا، كيف، متى، القيود (الميزانية، الوقت، التقنية)، معيار النجاح. مبهم: 'سوّ الموقع سريع وسهل'. أوضح: 'العميل يلقى المنتج ويبدأ الطلب بخطوات قليلة'. المتطلب أولاً والحل بعدين." } },
    { lv: 1, t: { en: "The requirements journey", ar: "رحلة المتطلبات" },
      en: "Six stages: Gather → Analyse → Model/Document → Feasibility → Develop & compare solutions → Write the SRS. Memory trick: Ask → Understand → Show → Check → Choose → Write.",
      ar: "ست مراحل: الجمع ← التحليل ← النمذجة والتوثيق ← الجدوى ← تطوير الحلول ومقارنتها ← كتابة SRS. حيلة: اسأل ← افهم ← اعرض ← افحص ← اختر ← اكتب.",
      more: { en: "Each stage produces information for the next. 'Customers can place a cake order online' came from Gather. 'Budget is 8,000 SAR' from Analyse. 'Order flow: choose → details → pay → confirm' from Model. 'A mobile app is too expensive' from Feasibility. 'Option A is recommended' from Solutions. Don't pick the most impressive option; pick the best fit. Mistakes: coding right after the client says 'website'; ignoring budget until after development; an SRS with only the final solution.",
              ar: "كل مرحلة تنتج معلومات للتالية. 'العميل يطلب كيك أونلاين' من الجمع. 'الميزانية 8000 ريال' من التحليل. 'سير الطلب: اختيار ← تفاصيل ← دفع ← تأكيد' من النمذجة. 'تطبيق الجوال مكلف' من الجدوى. 'نوصي بالخيار A' من الحلول. لا تختار الخيار الأكثر إبهاراً، اختر الأنسب. أخطاء: البرمجة مباشرة بعد ما يقول العميل 'موقع'؛ تجاهل الميزانية لبعد التطوير؛ SRS فيه الحل النهائي فقط." } },
    { lv: 2, t: { en: "Gathering techniques: which one when?", ar: "طرق جمع المتطلبات: أي وحدة متى؟" },
      en: "Interview = depth (few people, detailed reasons). Questionnaire = reach (many people, comparable answers). Observation = see real work. Workshop = group agreement on priorities. Document analysis = existing forms and policies.",
      ar: "المقابلة = العمق (أشخاص قليلون وأسباب تفصيلية). الاستبيان = الوصول (عدد كبير وإجابات قابلة للمقارنة). الملاحظة = رؤية العمل الحقيقي. ورشة العمل = اتفاق جماعي على الأولويات. تحليل الوثائق = النماذج والسياسات الموجودة.",
      more: { en: "Scenarios: detailed reasons from the receptionist → interview. Opinions from 200 students → questionnaire. Where the current process is slow → observation. Users and managers disagree about priorities → workshop. Evidence: interview = minutes/signed notes; questionnaire = blank form + response summary; observation = completed observation form; workshop = agenda, attendance, notes, agreed priorities. Good questionnaires are short and neutral. Record facts, not assumptions.",
              ar: "سيناريوهات: أسباب تفصيلية من موظف الاستقبال ← مقابلة. آراء 200 طالب ← استبيان. وين العملية الحالية بطيئة ← ملاحظة. المستخدمون والمدراء مختلفين على الأولويات ← ورشة. الأدلة: المقابلة = محضر أو ملاحظات موقعة؛ الاستبيان = النموذج + ملخص الردود؛ الملاحظة = نموذج ملاحظة مكتمل؛ الورشة = جدول أعمال وحضور وملاحظات وأولويات متفق عليها. الاستبيان الجيد قصير ومحايد. سجّل الحقائق وليس الافتراضات." } },
    { lv: 1, t: { en: "Functional vs non-functional requirements", ar: "المتطلبات الوظيفية مقابل غير الوظيفية" },
      en: "Functional = what the system DOES (features, actions, inputs → processing → outputs). Non-functional = how WELL (performance, security, usability, reliability, availability, accessibility).",
      ar: "الوظيفية = ما يفعله النظام (الميزات والأفعال والمدخلات ← المعالجة ← المخرجات). غير الوظيفية = مدى الجودة (الأداء، الأمان، سهولة الاستخدام، الموثوقية، التوفر، الوصول).",
      more: { en: "FR: 'Staff shall be able to update menu prices.' NFR: 'The website should load quickly on mobile' → better with a measurable target: 'The booking page shall load within 2 seconds under normal use.' Usability NFR: 'A new student shall complete a booking in no more than 5 steps.' Reliability: 'Confirmed bookings shall not be duplicated.' Security: 'Customer data must be protected from unauthorised access.' Good requirements are testable, traceable and unambiguous.",
              ar: "وظيفي: 'يقدر الموظف يحدث أسعار القائمة'. غير وظيفي: 'الموقع يفتح بسرعة في الجوال' ← أفضل مع رقم: 'صفحة الحجز تفتح خلال ثانيتين في الاستخدام العادي'. سهولة الاستخدام: 'الطالب الجديد يكمل الحجز في 5 خطوات أو أقل'. الموثوقية: 'الحجوزات المؤكدة ما تتكرر'. الأمان: 'بيانات العميل محمية من الوصول غير المصرح'. المتطلب الجيد قابل للاختبار والتتبع وواضح." } },
    { lv: 2, t: { en: "Analysis: priorities, constraints, assumptions, scope", ar: "التحليل: الأولويات والقيود والافتراضات والنطاق" },
      en: "Analysis decides what the information MEANS: who uses it, what they need, what limits apply. Prioritise with MoSCoW (agreed with stakeholders, not a personal guess). Scope = included, excluded, deliverables, constraints, assumptions, dependencies, acceptance criteria.",
      ar: "التحليل يقرر وش تعني المعلومات: من يستخدم النظام، وش يحتاج، وش القيود. رتّب الأولويات بـ MoSCoW (باتفاق أصحاب المصلحة وليس تخميناً شخصياً). النطاق = المشمول، المستبعد، المخرجات، القيود، الافتراضات، الاعتماديات، معايير القبول.",
      more: { en: "Constraint = fixed limit (launch before registration week). Assumption = believed true, must be checked (all students have active accounts). Dependency = relied on (college login service). A false assumption or failed dependency can force a scope change. Resolve conflicts (e.g. 'no-login' request vs security) with evidence: compare interviews, surveys, observation, policy; use a prototype. Don't solve only the symptom; verify the cause. Verification = built right; validation = right thing.",
              ar: "القيد = حد ثابت (الإطلاق قبل أسبوع التسجيل). الافتراض = نعتقد أنه صحيح ولازم نتأكد (كل الطلاب عندهم حسابات). الاعتمادية = شيء نعتمد عليه (خدمة دخول الكلية). افتراض خاطئ أو اعتمادية فاشلة ممكن تغيّر النطاق. حل التعارض (مثل طلب 'بدون تسجيل دخول' مقابل الأمان) بالأدلة: قارن المقابلات والاستبيانات والملاحظة والسياسات، واستخدم نموذجاً أولياً. لا تعالج العرض فقط، تأكد من السبب. التحقق = بنيناه صح؛ المصادقة = بنينا الشيء الصح." } },
    { lv: 2, t: { en: "Feasibility and comparing solutions", ar: "الجدوى ومقارنة الحلول" },
      en: "Feasible means realistic enough to proceed, not perfect. Technical: do we have the technology and skills? Operational: will it work for users and processes? Economic/schedule: can we afford it and finish on time? Strategic: does it support goals?",
      ar: "الجدوى تعني واقعي بما يكفي للمتابعة وليس مثالياً. التقنية: هل عندنا التقنية والمهارات؟ التشغيلية: هل يناسب المستخدمين والعمليات؟ الاقتصادية والزمنية: هل نقدر نتحمل التكلفة وننهي في الوقت؟ الاستراتيجية: هل يدعم الأهداف؟",
      more: { en: "'The team has no mobile-app developer' → technical. 'Budget is only 8,000 SAR' → economic. 'Staff refuse the new process' → operational. 'Doesn't support business goals' → strategic. Compare options (A: responsive site + order form; B: site + accounts; C: site + separate app) by value, cost, risk and resources, then write 'We recommend Option ___ because ___.'",
              ar: "'الفريق ما فيه مطور تطبيقات جوال' ← تقنية. 'الميزانية 8000 ريال بس' ← اقتصادية. 'الموظفين رافضين العملية الجديدة' ← تشغيلية. 'ما يدعم أهداف العمل' ← استراتيجية. قارن الخيارات (A: موقع متجاوب + نموذج طلب؛ B: موقع + حسابات؛ C: موقع + تطبيق منفصل) حسب القيمة والتكلفة والمخاطر والموارد، ثم اكتب 'نوصي بالخيار ___ لأن ___'." } },
    { lv: 2, t: { en: "Why model requirements?", ar: "ليش ننمذج المتطلبات؟" },
      en: "The same words create different pictures in different heads. A model gives ONE shared picture. Three benefits: clarity, traceability, collaboration. Finding confusion on a diagram is cheaper than after coding.",
      ar: "نفس الكلمات تصنع صوراً مختلفة في رؤوس مختلفة. النموذج يعطي صورة واحدة مشتركة. ثلاث فوائد: الوضوح، التتبع، التعاون. اكتشاف الغموض في المخطط أرخص من اكتشافه بعد البرمجة.",
      more: { en: "Problem → benefit: client can't understand technical explanation → clarity. Team forgot where a requirement came from → traceability. Two developers understand differently / business and IT must agree → collaboration. Models reveal missing questions (delivery or pickup? payment failure?). Myths: a model does NOT replace written requirements; we do NOT model after coding. Strong analysis uses text + models.",
              ar: "المشكلة ← الفائدة: العميل ما يفهم الشرح التقني ← الوضوح. الفريق نسي من وين جا المتطلب ← التتبع. مطورين فاهمين بشكل مختلف أو العمل والتقنية لازم يتفقون ← التعاون. النماذج تكشف أسئلة ناقصة (توصيل أو استلام؟ فشل الدفع؟). خرافات: النموذج لا يلغي المتطلبات المكتوبة، ولا ننمذج بعد البرمجة. التحليل القوي يجمع النص والنماذج." } },
    { lv: 3, t: { en: "Choosing the right UML diagram", ar: "اختيار مخطط UML المناسب" },
      en: "WHO uses it and WHAT can they do → use-case. FLOW, steps and decisions → activity. THINGS (objects/data) → class. ORDER of messages over time → sequence. One diagram cannot show everything.",
      ar: "من يستخدمه وماذا يفعل ← حالة الاستخدام. السير والخطوات والقرارات ← النشاط. الأشياء (كائنات وبيانات) ← الصنف. ترتيب الرسائل عبر الزمن ← التسلسل. مخطط واحد ما يقدر يعرض كل شيء.",
      more: { en: "Think of UML as different camera views of the same system. Use-case = big picture; sequence = detailed interaction for ONE use case (Customer → System → Database → confirmation, read top to bottom). Use-case rules: actor = role, outside the boundary; use cases = verb + object ('Submit Ticket'), inside; boundary = named rectangle. Functional requirements often become use cases. In GA3 the diagrams go in SRD Section 6 and must match Sections 4-5.",
              ar: "تخيل UML كزوايا تصوير مختلفة لنفس النظام. حالة الاستخدام = الصورة الكبيرة؛ التسلسل = التفاعل التفصيلي لحالة وحدة (عميل ← نظام ← قاعدة بيانات ← تأكيد، يُقرأ من الأعلى للأسفل). قواعد حالة الاستخدام: الممثل = دور خارج الحدود؛ حالات الاستخدام = فعل + مفعول ('Submit Ticket') داخل الحدود؛ والحدود = مستطيل باسم النظام. المتطلبات الوظيفية غالباً تصير حالات استخدام. في GA3 المخططات في القسم 6 من SRD ولازم تطابق القسمين 4 و5." } },
    { lv: 3, t: { en: "Activity diagrams and flowcharts", ar: "مخططات النشاط والمخططات الانسيابية" },
      en: "Activity diagram symbols: filled circle = start, ringed circle = end, rounded rectangle = action, diamond = decision (a question with labelled branches), arrows = flow. Flowcharts: oval terminator, rectangle process, diamond decision, parallelogram input/output.",
      ar: "رموز مخطط النشاط: دائرة ممتلئة = البداية، دائرة بحلقة = النهاية، مستطيل بزوايا دائرية = فعل، معين = قرار (سؤال بفروع معنونة)، أسهم = السير. المخطط الانسيابي: بيضاوي للبداية والنهاية، مستطيل للمعالجة، معين للقرار، متوازي أضلاع للإدخال والإخراج.",
      more: { en: "The decision diamond goes where the process can split: 'In stock?' after the customer selects an item, before payment. Label branches Yes/No, Available/Not available, Valid/Invalid. Checklist: one start and end, logical order, every branch continues somewhere, diagram matches the scenario. Don't add shapes randomly.",
              ar: "معين القرار يكون في المكان اللي ممكن تتفرع فيه العملية: 'متوفر؟' بعد اختيار المنتج وقبل الدفع. اكتب على الفروع نعم/لا، متوفر/غير متوفر، صحيح/خطأ. قائمة الفحص: بداية ونهاية، ترتيب منطقي، كل فرع يكمل لمكان، والمخطط يطابق السيناريو. لا تضيف أشكالاً عشوائية." } },
    { lv: 3, t: { en: "Class diagrams, sequence diagrams and narratives", ar: "مخططات الأصناف والتسلسل والسرد" },
      en: "Class diagram: box with name, attributes, methods; relationships (association, inheritance, aggregation/composition) with multiplicity (1, 0..*, 1..*). Sequence diagram: participants with lifelines, messages as arrows in time order, returns. Use-case narrative: name, actor, preconditions, main flow, alternative flows, postconditions.",
      ar: "مخطط الأصناف: صندوق فيه الاسم والخصائص والدوال؛ والعلاقات (الارتباط، الوراثة، التجميع والتركيب) مع التعددية (1 و0..* و1..*). مخطط التسلسل: مشاركون بخطوط حياة، ورسائل كأسهم بترتيب زمني، وردود. سرد حالة الاستخدام: الاسم، الممثل، الشروط المسبقة، المسار الرئيسي، المسارات البديلة، الشروط اللاحقة.",
      more: { en: "Example classes: Customer, Order, Product; a Customer places 0..* Orders. Precondition = must be true before (user is logged in). Postcondition = true after (request saved and confirmation shown). Alternative flow = what happens on error (invalid data → show message). The narrative gives the written detail; the diagram gives the visual.",
              ar: "مثال أصناف: Customer وOrder وProduct؛ العميل يقدم 0..* طلبات. الشرط المسبق = لازم يكون صحيحاً قبل (المستخدم مسجل دخول). الشرط اللاحق = صحيح بعد (الطلب انحفظ وظهر التأكيد). المسار البديل = وش يصير عند الخطأ (بيانات غلط ← رسالة). السرد يعطي التفاصيل المكتوبة والمخطط يعطي الصورة." } },
    { lv: 4, t: { en: "Risk analysis", ar: "تحليل المخاطر" },
      en: "Risk = uncertain event that may affect time, cost, quality or security. Issue = happening now. Process: identify → assess (likelihood × impact) → respond → monitor (repeats). Write risks as 'Because [cause], [event] may happen, causing [impact].'",
      ar: "الخطر = حدث غير مؤكد قد يؤثر على الوقت أو التكلفة أو الجودة أو الأمان. المشكلة = تحدث الآن. العملية: حدد ← قيّم (الاحتمالية × الأثر) ← استجب ← راقب (تتكرر). اكتب الخطر هكذا: 'بسبب [السبب]، قد يحدث [الحدث]، مسبباً [الأثر]'.",
      more: { en: "Types: people (illness), operational, project (late, over budget), financial, technical (failure, integration), security (hacker), external/physical (fire, new law, supplier). Responses: avoid, reduce, transfer, accept. Preventive control lowers the chance (strong passwords, backups); contingency says what to do if it happens (isolate, restore). Register fields: owner (one named person), trigger (measurable: load > 3 s, repeated 503 errors), review date (high risks sooner), status (Open, Treating, Monitoring, Closed), residual risk. Mistakes: vague 'technical risk', no impact, 'be careful', copying unrelated risks. Risk management is proactive; issue management is reactive.",
              ar: "الأنواع: أشخاص (مرض)، تشغيلية، مشروع (تأخير وتجاوز ميزانية)، مالية، تقنية (عطل وتكامل)، أمنية (اختراق)، خارجية ومادية (حريق، قانون جديد، مورّد). الاستجابات: تجنب، تخفيف، نقل، قبول. الضابط الوقائي يقلل الاحتمال (كلمات مرور قوية، نسخ احتياطي)، وخطة الطوارئ تقول وش تسوي إذا صار (عزل، استعادة). حقول السجل: المالك (شخص واحد مسمى)، المؤشر (قابل للقياس: تحميل > 3 ثوانٍ، أخطاء 503 متكررة)، تاريخ المراجعة (الأخطار العالية أسرع)، الحالة (مفتوح، قيد المعالجة، مراقبة، مغلق)، الخطر المتبقي. أخطاء: 'خطر تقني' مبهم، بدون أثر، 'انتبه'، نسخ مخاطر غير مرتبطة. إدارة المخاطر استباقية، وإدارة المشاكل رد فعل." } },
    { lv: 4, t: { en: "The SRS document", ar: "وثيقة مواصفات المتطلبات SRS" },
      en: "The SRS is the shared reference for the client and the development team. It contains scope and client needs, functional and non-functional requirements, models, proposed solutions, risks, assumptions and resources, formatted for review and approval.",
      ar: "وثيقة SRS هي المرجع المشترك بين العميل وفريق التطوير. فيها النطاق واحتياجات العميل، والمتطلبات الوظيفية وغير الوظيفية، والنماذج، والحلول المقترحة، والمخاطر والافتراضات والموارد، بتنسيق جاهز للمراجعة والاعتماد.",
      more: { en: "GA3 structure: Section 4 = functional requirements, Section 5 = non-functional, Section 6 = process modelling (use-case for grade D, plus sequence for grade A). The diagram is evidence for the SAME requirements, not a separate creative picture: write → model → check the match. Review the SRS with stakeholders and get documented agreement.",
              ar: "هيكل GA3: القسم 4 = المتطلبات الوظيفية، القسم 5 = غير الوظيفية، القسم 6 = نمذجة العمليات (حالة الاستخدام لدرجة D، ومعها التسلسل لدرجة A). المخطط دليل لنفس المتطلبات وليس رسمة إبداعية منفصلة: اكتب ← نمذج ← تأكد من التطابق. راجع SRS مع أصحاب المصلحة واحصل على موافقة موثقة." } }
  ],
  code: [
    { title: { en: "Pseudocode: login with a decision", ar: "كود زائف: تسجيل دخول بقرار" }, lang: "pseudo",
      src: `START
INPUT username, password
IF username AND password are valid THEN
    OPEN dashboard
ELSE
    DISPLAY "Invalid details, try again"
END IF
END`,
      lines: [
        { n: "1, 8", en: "Start and end (ovals in a flowchart / circles in an activity diagram).", ar: "البداية والنهاية (بيضاوي في المخطط الانسيابي ودوائر في مخطط النشاط)." },
        { n: "2", en: "Input (parallelogram in a flowchart).", ar: "إدخال (متوازي أضلاع في المخطط الانسيابي)." },
        { n: "3", en: "Decision (diamond) with two labelled branches: Valid / Invalid.", ar: "قرار (معين) بفرعين: صحيح / خطأ." },
        { n: "4, 6", en: "Actions (rectangles) on each branch.", ar: "أفعال (مستطيلات) على كل فرع." }
      ] },
    { title: { en: "Use-case narrative template", ar: "قالب سرد حالة الاستخدام" }, lang: "text",
      src: `Use case:       Submit Support Request
Actor:          Customer
Precondition:   Customer is signed in
Main flow:      1. Customer selects "New request"
                2. System shows the request form
                3. Customer enters type and description
                4. System validates and saves the request
                5. System shows a confirmation number
Alternative:    4a. Missing description -> system shows an error
Postcondition:  Request is stored with status "Open"`,
      lines: [
        { n: "1-2", en: "Name the use case as verb + object; the actor is a role.", ar: "سمِّ حالة الاستخدام فعل + مفعول؛ والممثل دور." },
        { n: "3", en: "Precondition: must be true before it starts.", ar: "الشرط المسبق: لازم يكون صحيح قبل البدء." },
        { n: "4-8", en: "Main (happy) flow, numbered steps alternating actor and system.", ar: "المسار الرئيسي (الناجح)، خطوات مرقمة بين الممثل والنظام." },
        { n: "9", en: "Alternative flow handles errors at a specific step.", ar: "المسار البديل يعالج الأخطاء عند خطوة محددة." },
        { n: "10", en: "Postcondition: what is true when it ends.", ar: "الشرط اللاحق: وش يكون صحيح بعد الانتهاء." }
      ] },
    { title: { en: "Sequence of messages (text form)", ar: "تسلسل الرسائل (بصيغة نصية)" }, lang: "text",
      src: `Customer  ->  System   : submitRequest(details)
System    ->  Database : save(request)
Database  -->  System  : requestId
System    -->  Customer: show confirmation(requestId)`,
      lines: [
        { n: "1-4", en: "Read top to bottom = time order. Solid arrow = message; dashed arrow = return. Participants: Customer, System, Database (each has a lifeline).", ar: "اقرأ من الأعلى للأسفل = الترتيب الزمني. السهم المتصل = رسالة، والمتقطع = رد. المشاركون: العميل، النظام، قاعدة البيانات (لكل واحد خط حياة)." }
      ] },
    { title: { en: "Risk register row and score", ar: "صف في سجل المخاطر والدرجة" }, lang: "text",
      src: `Risk:       Because backups are not tested, the booking database
            may fail, causing loss of student registrations.
Type:       Technical
Likelihood: 3 (possible)      Impact: 5 (severe)
Score:      3 x 5 = 15  -> High
Response:   Reduce - daily backups + recovery test
Owner:      Database Developer (Amal)
Trigger:    Two failed backup jobs or repeated DB errors
Review:     15 October, after recovery testing
Status:     Treating
Residual:   Low`,
      lines: [
        { n: "1-2", en: "Cause → event → impact format.", ar: "صيغة السبب ← الحدث ← الأثر." },
        { n: "4-5", en: "Score = likelihood × impact on a 5 × 5 matrix.", ar: "الدرجة = الاحتمالية × الأثر على مصفوفة 5 × 5." },
        { n: "6", en: "Response type: avoid / reduce / transfer / accept.", ar: "نوع الاستجابة: تجنب / تخفيف / نقل / قبول." },
        { n: "7-11", en: "One named owner, a measurable trigger, a review date, a status and the residual level.", ar: "مالك واحد مسمى، مؤشر قابل للقياس، تاريخ مراجعة، حالة، والمستوى المتبقي." }
      ] }
  ],
  quiz: [
    { lv: 1, q: "What is a software requirement?", o: ["The final code", "What a system needs to do and the conditions it must meet", "A programming language", "The project budget only"], a: 1, why: { en: "Need + condition.", ar: "احتياج + شرط." } },
    { lv: 1, q: "'Build a mobile-friendly website with an order form' is a:", o: ["Requirement", "Possible solution", "Risk", "Constraint"], a: 1, why: { en: "It says HOW, so it is a solution.", ar: "يقول كيف، فهو حل." } },
    { lv: 2, q: "Which comes first in the requirements journey?", o: ["Write the SRS", "Gather requirements", "Choose a solution", "Feasibility"], a: 1, why: { en: "Ask → Understand → Show → Check → Choose → Write.", ar: "اسأل ← افهم ← اعرض ← افحص ← اختر ← اكتب." } },
    { lv: 2, q: "You need opinions from 200 students. Best technique?", o: ["Interview", "Questionnaire", "Observation", "Workshop"], a: 1, why: { en: "Reach many people.", ar: "الوصول لعدد كبير." } },
    { lv: 2, q: "You need detailed reasons from the receptionist. Best technique?", o: ["Interview", "Questionnaire", "Document analysis", "Survey"], a: 0, why: { en: "Depth.", ar: "العمق." } },
    { lv: 3, q: "You need to see where the current process is slow. Best technique?", o: ["Questionnaire", "Observation", "Workshop", "MoSCoW"], a: 1, why: { en: "See real work.", ar: "شوف العمل الحقيقي." } },
    { lv: 3, q: "Users and managers disagree about priorities. Best technique?", o: ["Workshop", "Questionnaire", "Observation", "Pseudocode"], a: 0, why: { en: "Group discussion and agreement.", ar: "نقاش واتفاق جماعي." } },
    { lv: 1, q: "'The system shall allow customers to submit a cake order' is:", o: ["Functional", "Non-functional", "A constraint", "A risk"], a: 0, why: { en: "What the system DOES.", ar: "ما يفعله النظام." } },
    { lv: 2, q: "'Customer data must be protected from unauthorised access' is:", o: ["Functional", "Non-functional (security)", "Scope", "Assumption"], a: 1, why: { en: "A quality/constraint.", ar: "جودة أو قيد." } },
    { lv: 3, q: "Which NFR is BEST written?", o: ["The site should be fast", "The booking page shall load within 2 seconds under normal use", "The site must be nice", "Users will like it"], a: 1, why: { en: "Measurable = testable.", ar: "قابل للقياس = قابل للاختبار." } },
    { lv: 2, q: "MoSCoW stands for:", o: ["Must, Should, Could, Won't", "Model, Scope, Cost, Work", "Main, Second, Core, Wide", "Make, Show, Code, Write"], a: 0, why: { en: "Prioritisation categories.", ar: "تصنيفات الأولوية." } },
    { lv: 3, q: "'All students have active college accounts' (not yet confirmed) is:", o: ["Constraint", "Assumption", "Dependency", "Deliverable"], a: 1, why: { en: "Believed true, must be checked.", ar: "يُعتقد صحيح ولازم يُتحقق." } },
    { lv: 3, q: "'Launch before registration week' is a:", o: ["Constraint", "Assumption", "Use case", "Actor"], a: 0, why: { en: "A fixed limit.", ar: "حد ثابت." } },
    { lv: 4, q: "Validation asks:", o: ["Is the code compiled?", "Are we building the right thing that solves the real need?", "Is the spelling correct?", "Is the server fast?"], a: 1, why: { en: "Verification = built right; validation = right thing.", ar: "التحقق = بنيناه صح؛ المصادقة = الشيء الصح." } },
    { lv: 3, q: "'The team has no mobile-app developer' is which feasibility area?", o: ["Technical", "Economic", "Operational", "Legal"], a: 0, why: { en: "Skills/technology.", ar: "المهارات والتقنية." } },
    { lv: 2, q: "Which is a benefit of requirements modelling?", o: ["It replaces all written requirements", "Clarity, traceability and collaboration", "It is done after coding", "It removes testing"], a: 1, why: { en: "The three named benefits.", ar: "الفوائد الثلاث." } },
    { lv: 2, q: "Which UML diagram shows actors and system functions?", o: ["Activity", "Class", "Use-case", "Sequence"], a: 2, why: { en: "WHO and WHAT.", ar: "من وماذا." } },
    { lv: 3, q: "Which UML diagram shows messages between participants in time order?", o: ["Sequence", "Use-case", "Class", "Activity"], a: 0, why: { en: "Read top to bottom.", ar: "يُقرأ من الأعلى للأسفل." } },
    { lv: 3, q: "Show the steps and payment success/failure paths for booking. Which diagram?", o: ["Class", "Activity", "Use-case", "Deployment"], a: 1, why: { en: "Flow and decisions.", ar: "السير والقرارات." } },
    { lv: 3, q: "Show Customer, Order and Product with their data. Which diagram?", o: ["Class", "Sequence", "Activity", "Use-case"], a: 0, why: { en: "Things/data.", ar: "الأشياء والبيانات." } },
    { lv: 3, q: "In a use-case diagram, where is the actor placed?", o: ["Inside the system boundary", "Outside the system boundary", "Inside a use case", "It is not shown"], a: 1, why: { en: "Actors are external roles.", ar: "الممثلون أدوار خارجية." } },
    { lv: 2, q: "Which is the best use-case name?", o: ["Ticket", "Submit Ticket", "Sara", "Database"], a: 1, why: { en: "Verb + object.", ar: "فعل + مفعول." } },
    { lv: 2, q: "In an activity diagram the diamond represents:", o: ["Start", "A decision", "An actor", "A class"], a: 1, why: { en: "A question with branches.", ar: "سؤال بفروع." } },
    { lv: 3, q: "Which flowchart symbol represents input/output?", o: ["Oval", "Rectangle", "Parallelogram", "Diamond"], a: 2, why: { en: "Parallelogram = I/O.", ar: "متوازي الأضلاع = إدخال وإخراج." } },
    { lv: 2, q: "Difference between a risk and an issue?", o: ["Same thing", "A risk may happen; an issue is happening now", "An issue may happen; a risk is now", "Risks are positive only"], a: 1, why: { en: "Future vs present.", ar: "مستقبل مقابل حاضر." } },
    { lv: 3, q: "Risk score is calculated as:", o: ["Likelihood + impact", "Likelihood × impact", "Cost ÷ time", "Impact − likelihood"], a: 1, why: { en: "Multiply the two values.", ar: "اضرب القيمتين." } },
    { lv: 3, q: "Using insurance or a specialist provider is which response?", o: ["Avoid", "Reduce", "Transfer", "Accept"], a: 2, why: { en: "Responsibility moves to another party.", ar: "المسؤولية تنتقل لطرف آخر." } },
    { lv: 4, q: "Which is the BEST risk trigger?", o: ["The site feels slow", "Page loading time exceeds 3 seconds", "Something goes wrong", "Users complain sometimes"], a: 1, why: { en: "Measurable and observable.", ar: "قابل للقياس والملاحظة." } },
    { lv: 4, q: "Controls reduced a High risk to Low. The remaining Low level is called:", o: ["Trigger", "Residual risk", "Owner", "Status"], a: 1, why: { en: "What remains after controls.", ar: "ما يتبقى بعد الضوابط." } },
    { lv: 4, q: "Why name one person as risk owner rather than 'the team'?", o: ["It looks better", "Clear accountability; otherwise everyone assumes someone else is dealing with it", "Teams cannot own risks legally", "To reduce the score"], a: 1, why: { en: "Accountability.", ar: "المسؤولية." } }
  ]
});
