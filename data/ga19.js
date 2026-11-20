window.STUDY = window.STUDY || { units: [] };
STUDY.ga = STUDY.ga || {};
STUDY.ga.u19 = {
  ga: 'GA3', num: 19, title: { en: 'Analyse software requirements (SRD)', ar: 'تحليل متطلبات البرمجيات (SRD)' },
  file: 'U19.GA3.TraineeName.TraineeID + SRD_TraineeName_TraineeID',
  scenario: { en: 'Produce a Software Requirements Document (SRD) as a junior trainee. Option A: your own app/website idea. Option B: STC wants a web system where customers submit and track support requests, staff manage tickets and managers see reports.', ar: 'تكتب وثيقة متطلبات البرمجيات (SRD) كمتدرب. الخيار A: فكرة تطبيق أو موقع من عندك. الخيار B: شركة STC تبي نظام ويب يقدم فيه العميل طلب دعم ويتابعه، والموظف يدير التذاكر، والمدير يشوف التقارير.' },
  tools: { en: 'The SRD template (sections 1–13), draw.io or Lucidchart for UML (use-case + sequence), Word/Excel tables. Insert attachments with Insert → Object.', ar: 'قالب SRD (الأقسام 1 إلى 13)، draw.io أو Lucidchart لمخططات UML (حالة الاستخدام + التسلسل)، وجداول وورد أو إكسل. أضف المرفقات من Insert ← Object.' },
  rules: [
    { en: 'The grade is cumulative: A needs every D, C and B item too. Check each one.', ar: 'الدرجة تراكمية: الـ A يحتاج كل بنود D وC وB كمان. تأكد من كل واحد.' },
    { en: '"Produced own work and did not copy from AI tools" is an A criterion in every task: write in your own words.', ar: '"عمل أصلي وما انسخ من أدوات الذكاء الاصطناعي" معيار A في كل تاسك: اكتب بأسلوبك.' },
    { en: 'Calibri 11, single spacing. Minimal spelling/grammar errors (A criterion in Task 3).', ar: 'Calibri حجم 11، تباعد مفرد. أخطاء إملائية ولغوية قليلة جداً (معيار A في Task 3).' }
  ],
  tasks: [
    { n: 'Task 1 · 1.1', title: { en: 'Introduction, stakeholders and scope (SRD §1–3)', ar: 'المقدمة وأصحاب المصلحة والنطاق (SRD §1–3)' }, crit: '1.1–1.4',
      need: { en: 'Purpose of the document, the client and current system, problems + sources of information, stakeholders, in-scope / out-of-scope, assumptions.', ar: 'هدف الوثيقة، العميل والنظام الحالي، المشاكل ومصادر المعلومات، أصحاب المصلحة، داخل/خارج النطاق، الافتراضات.' },
      explain: { en: 'You are setting the stage: who the client is, what hurts today, who is affected, and the boundary of the project.', ar: 'تجهّز الأرضية: مين العميل، وش المشكلة اليوم، مين يتأثر، وحدود المشروع.' },
      steps: [
        { en: '§1: write Purpose of the document (2–3 lines), client description, current process, 3–4 problems and where you got them (interview, complaints, website).', ar: '§1: اكتب هدف الوثيقة (2–3 أسطر)، وصف العميل، العملية الحالية، 3–4 مشاكل ومن وين عرفتها (مقابلة، شكاوى، موقع).' },
        { en: '§2: stakeholder table with Role + Interest for at least 2 (customer, support agent, manager, IT).', ar: '§2: جدول أصحاب المصلحة فيه الدور + الاهتمام لاثنين على الأقل (العميل، موظف الدعم، المدير، التقنية).' },
        { en: '§3: list in-scope and out-of-scope points and at least one assumption.', ar: '§3: اكتب نقاط داخل النطاق وخارجه وافتراض واحد على الأقل.' }
      ],
      shots: [{ en: 'SRD §1, §2 and §3 pages.', ar: 'صفحات SRD §1 و§2 و§3.' }],
      a: { en: 'A needs: purpose of the document, TWO stakeholders with complete role and interest, and an assumption in Scope.', ar: 'الـ A يحتاج: هدف الوثيقة، اثنين من أصحاب المصلحة بدور واهتمام كامل، وافتراض في النطاق.' } },
    { n: 'Task 1 · 1.2', title: { en: 'Functional, non-functional and UML (SRD §4–6)', ar: 'الوظيفية وغير الوظيفية وUML (SRD §4–6)' }, crit: '2.1–2.3',
      need: { en: 'A table of functional requirements, a table of non-functional requirements (security, performance, usability) and UML process modelling.', ar: 'جدول المتطلبات الوظيفية، جدول المتطلبات غير الوظيفية (الأمان، الأداء، سهولة الاستخدام)، ونمذجة UML.' },
      explain: { en: 'FR = what the system does (FR-01 Submit ticket). NFR = how well (page loads < 2 s). Use-case = who does what; sequence = message order for one use case.', ar: 'الوظيفي = وش يسوي النظام (FR-01 إرسال تذكرة). غير الوظيفي = مدى الجودة (الصفحة تفتح < 2 ثانية). حالة الاستخدام = مين يسوي وش؛ التسلسل = ترتيب الرسائل لحالة وحدة.' },
      steps: [
        { en: '§4: table ID | Requirement | Actor | Priority (MoSCoW): 6–8 FRs starting "The system shall…".', ar: '§4: جدول ID | المتطلب | الممثل | الأولوية (MoSCoW): 6–8 متطلبات تبدأ بـ "The system shall…".' },
        { en: '§5: at least one measurable NFR each for security, performance, usability.', ar: '§5: متطلب قابل للقياس على الأقل لكل من الأمان والأداء وسهولة الاستخدام.' },
        { en: '§6: draw a use-case diagram (actors outside, verb+noun use cases inside the boundary) AND a sequence diagram (Customer → System → Database → confirmation).', ar: '§6: ارسم مخطط حالات الاستخدام (الممثلون برا، وحالات الاستخدام فعل+اسم داخل الحدود) ومخطط تسلسل (العميل ← النظام ← قاعدة البيانات ← التأكيد).' }
      ],
      shots: [{ en: 'FR and NFR tables + both UML diagrams (exported images).', ar: 'جدولي FR وNFR + مخططي UML (صور مصدّرة).' }],
      a: { en: 'A needs a SEQUENCE diagram in Process Modelling, matching the FRs you wrote.', ar: 'الـ A يحتاج مخطط تسلسل في قسم النمذجة، ويطابق المتطلبات اللي كتبتها.' } },
    { n: 'Task 2 · 2.1–2.2', title: { en: 'Technical and operational feasibility (SRD §7)', ar: 'الجدوى التقنية والتشغيلية (SRD §7)' }, crit: '3.1, 3.2, 3.4',
      need: { en: 'Technical: tools, technologies and PLATFORMS, and whether they are realistic. Operational: how staff will use it, fit with the business, training needed.', ar: 'التقنية: الأدوات والتقنيات والمنصات وهل هي واقعية. التشغيلية: كيف يستخدمه الموظفون، وتوافقه مع العمل، والتدريب المطلوب.' },
      explain: { en: 'Feasible = realistic enough to go ahead. Show the company already has (or can get) what is needed.', ar: 'الجدوى = واقعي بما يكفي للبدء. وضّح إن الشركة عندها (أو تقدر تجيب) اللي يحتاجه المشروع.' },
      steps: [
        { en: 'Tools (VS Code, Git, Figma…), technologies (HTML/CSS/JS, PHP or Node, MySQL…), platforms (cloud hosting, browsers, Windows/Android/iOS) with one reason each.', ar: 'الأدوات (VS Code وGit وFigma…)، التقنيات (HTML/CSS/JS وPHP أو Node وMySQL…)، المنصات (استضافة سحابية، متصفحات، ويندوز/أندرويد/iOS) مع سبب لكل واحد.' },
        { en: 'Operational: describe a staff member\'s day with the new system and how it fits current work.', ar: 'التشغيلية: اوصف يوم موظف مع النظام الجديد وكيف يتوافق مع الشغل الحالي.' },
        { en: 'Training: who needs it (agents, managers, customers) and how (session, guide, video).', ar: 'التدريب: مين يحتاجه (الموظفين، المدراء، العملاء) وكيف (جلسة، دليل، فيديو).' }
      ],
      shots: [{ en: 'SRD §7 technical + operational parts.', ar: 'SRD §7 الجزء التقني والتشغيلي.' }],
      a: { en: 'A needs PLATFORMS listed under Technical Feasibility (not just tools).', ar: 'الـ A يحتاج المنصات مذكورة تحت الجدوى التقنية (مو بس الأدوات).' } },
    { n: 'Task 2 · 2.3–2.4', title: { en: 'Budget and schedule feasibility (SRD §7)', ar: 'جدوى الميزانية والجدول الزمني (SRD §7)' }, crit: '3.3',
      need: { en: 'A budget table with a cost range and whether it is affordable; a timeline table (weeks/months) and whether it is realistic.', ar: 'جدول ميزانية بمدى تكلفة وهل هي مناسبة؛ وجدول زمني (أسابيع/أشهر) وهل هو واقعي.' },
      explain: { en: 'High-level only: reasonable numbers with a short justification are enough.', ar: 'مستوى عام بس: أرقام معقولة مع تبرير قصير تكفي.' },
      steps: [
        { en: 'Budget table: Item | Cost (SAR) e.g. development, design, hosting, licences, testing, training + total.', ar: 'جدول الميزانية: البند | التكلفة (ريال) مثل التطوير، التصميم، الاستضافة، التراخيص، الاختبار، التدريب + المجموع.' },
        { en: 'Write "Is it affordable?" with 2–3 reasons.', ar: 'اكتب "هل هو مناسب مالياً؟" مع 2–3 أسباب.' },
        { en: 'Timeline table: Phase | Weeks (analysis, design, development, testing, deployment) + "Is the timeline realistic?" with reasons.', ar: 'الجدول الزمني: المرحلة | الأسابيع (تحليل، تصميم، تطوير، اختبار، نشر) + "هل الجدول واقعي؟" مع أسباب.' }
      ],
      shots: [{ en: 'Budget table + timeline table with the two explanations.', ar: 'جدول الميزانية + الجدول الزمني مع التفسيرين.' }],
      a: { en: 'A needs the explanation of whether the timeline is realistic.', ar: 'الـ A يحتاج تفسير هل الجدول الزمني واقعي أو لا.' } },
    { n: 'Task 3 · 3.1a', title: { en: 'Solution options and comparison (SRD §8–9)', ar: 'خيارات الحل والمقارنة (SRD §8–9)' }, crit: '4.1–4.3',
      need: { en: 'At least two feasible solutions, with advantages and disadvantages, compared against cost, time and technology.', ar: 'حلين ممكنين على الأقل، مع المزايا والعيوب، ومقارنة بالتكلفة والوقت والتقنية.' },
      explain: { en: 'Typical pair: build a custom system vs buy/subscribe to a ready product (COTS/SaaS).', ar: 'الزوج المعتاد: بناء نظام خاص مقابل شراء أو اشتراك في منتج جاهز (COTS/SaaS).' },
      steps: [
        { en: '§8: describe Option 1 and Option 2, each with 3 pros and 3 cons.', ar: '§8: اوصف الخيار 1 والخيار 2، لكل واحد 3 مزايا و3 عيوب.' },
        { en: '§9: comparison table Constraint | Option 1 | Option 2 for cost, time, technology.', ar: '§9: جدول مقارنة القيد | الخيار 1 | الخيار 2 للتكلفة والوقت والتقنية.' },
        { en: 'Write a recommendation sentence: "We recommend Option ___ because ___."', ar: 'اكتب جملة توصية: "نوصي بالخيار ___ لأن ___."' }
      ],
      shots: [{ en: 'SRD §8 and §9.', ar: 'SRD §8 و§9.' }],
      a: { en: 'A needs advantages AND disadvantages for a solution option.', ar: 'الـ A يحتاج مزايا وعيوب لخيار الحل.' } },
    { n: 'Task 3 · 3.1b', title: { en: 'Assumptions, dependencies and resources (SRD §10)', ar: 'الافتراضات والاعتماديات والموارد (SRD §10)' }, crit: '4.4',
      need: { en: 'What you assume is true, what the system depends on, and what is needed to build and run it.', ar: 'وش تفترض إنه صحيح، ووش يعتمد عليه النظام، ووش تحتاج عشان تبنيه وتشغّله.' },
      explain: { en: 'Assumption = believed true (users have email). Dependency = relied on (SMS gateway works). Resources = people, hardware, software.', ar: 'الافتراض = نعتقد إنه صحيح (المستخدمين عندهم إيميل). الاعتمادية = نعتمد عليه (بوابة الرسائل شغالة). الموارد = أشخاص، أجهزة، برامج.' },
      steps: [
        { en: 'List 2+ assumptions and 2+ dependencies.', ar: 'اكتب افتراضين أو أكثر واعتماديتين أو أكثر.' },
        { en: 'List at least THREE resources (e.g. developers, a cloud server, a database licence).', ar: 'اكتب 3 موارد على الأقل (مثلاً مطورين، خادم سحابي، ترخيص قاعدة بيانات).' }
      ],
      shots: [{ en: 'SRD §10.', ar: 'SRD §10.' }],
      a: { en: 'A needs three required resources listed.', ar: 'الـ A يحتاج 3 موارد مطلوبة مذكورة.' } },
    { n: 'Task 3 · 3.1c', title: { en: 'Risk analysis (SRD §11)', ar: 'تحليل المخاطر (SRD §11)' }, crit: '4.5',
      need: { en: 'A risk table: risk, likelihood, impact, level and mitigation.', ar: 'جدول مخاطر: الخطر، الاحتمالية، الأثر، المستوى، وطريقة التخفيف.' },
      explain: { en: 'Write risks as cause → event → impact. Score = likelihood × impact.', ar: 'اكتب الخطر بصيغة السبب ← الحدث ← الأثر. الدرجة = الاحتمالية × الأثر.' },
      steps: [
        { en: 'Choose 4–6 risks from different types: technical, security, schedule, budget, people.', ar: 'اختر 4–6 مخاطر من أنواع مختلفة: تقنية، أمنية، زمنية، مالية، أشخاص.' },
        { en: 'Columns: Risk | Likelihood (1–5) | Impact (1–5) | Score | Level | Response | Owner.', ar: 'الأعمدة: الخطر | الاحتمالية (1–5) | الأثر (1–5) | الدرجة | المستوى | الاستجابة | المسؤول.' }
      ],
      shots: [{ en: 'SRD §11 risk table.', ar: 'جدول المخاطر SRD §11.' }],
      a: { en: 'Use specific, project-related risks with a clear response for each (no "be careful").', ar: 'استخدم مخاطر محددة ومرتبطة بالمشروع مع استجابة واضحة لكل واحد (مو "انتبه").' } },
    { n: 'Task 3 · 3.1d', title: { en: 'Future features (SRD §12)', ar: 'الميزات المستقبلية (SRD §12)' }, crit: '4.6',
      need: { en: 'Features the system could have later, but not in version 1.', ar: 'ميزات ممكن تنضاف بعدين لكن مو في الإصدار الأول.' },
      explain: { en: 'This shows scope control: good ideas that are out of scope now.', ar: 'هذا يوضح ضبط النطاق: أفكار حلوة لكن خارج النطاق الحين.' },
      steps: [
        { en: 'List 3–5 future features with one line each on why they wait (e.g. chatbot, mobile app, Arabic voice support).', ar: 'اكتب 3–5 ميزات مستقبلية مع سطر لكل واحد ليش تنتظر (مثلاً شات بوت، تطبيق جوال، دعم صوتي عربي).' }
      ],
      shots: [{ en: 'SRD §12.', ar: 'SRD §12.' }],
      a: { en: 'Link each future feature to a real user need from §1.', ar: 'اربط كل ميزة مستقبلية باحتياج حقيقي من §1.' } },
    { n: 'Task 3 · 3.2', title: { en: 'Compile the SRD and get approval (SRD §13)', ar: 'جمّع الـ SRD واحصل على الاعتماد (SRD §13)' }, crit: '5.1–5.2',
      need: { en: 'One organised, professional SRD with every section complete, submitted for approval (approval table signed by the trainer).', ar: 'وثيقة SRD منظمة واحترافية وكل الأقسام مكتملة، مقدمة للاعتماد (جدول الاعتماد موقّع من المدرب).' },
      explain: { en: 'The final check is quality: structure, consistency, spelling, and the approval evidence.', ar: 'الفحص الأخير هو الجودة: الهيكل، الاتساق، الإملاء، ودليل الاعتماد.' },
      steps: [
        { en: 'Add a table of contents, page numbers and consistent headings.', ar: 'أضف جدول محتويات وأرقام صفحات وعناوين متسقة.' },
        { en: 'Run spell check; make sure names (system, actors, FR IDs) are the same everywhere.', ar: 'شغّل المدقق الإملائي؛ وتأكد إن الأسماء (النظام، الممثلين، أرقام FR) نفسها في كل مكان.' },
        { en: 'Fill the approval table in §13 and get it signed by your trainer.', ar: 'عبِّ جدول الاعتماد في §13 وخلّ المدرب يوقّعه.' }
      ],
      shots: [{ en: 'Table of contents + §13 approval table.', ar: 'جدول المحتويات + جدول الاعتماد §13.' }],
      a: { en: 'A needs an organised, professional SRD with all sections complete and minimal grammar/spelling errors.', ar: 'الـ A يحتاج SRD منظم واحترافي وكل الأقسام مكتملة وأخطاء قليلة جداً.' } }
  ]
};
