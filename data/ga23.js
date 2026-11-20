window.STUDY = window.STUDY || { units: [] };
STUDY.ga = STUDY.ga || {};
STUDY.ga.u23 = {
  ga: 'GA9', num: 23, title: { en: 'Programming methods (Umrah assistant)', ar: 'أساليب البرمجة (مساعد العمرة)' },
  file: 'U23.GA9.TraineeName.TraineeID + U23_GA9_Tasks 1-3 Template + UmrahGuideSystem_TraineeName_TraineeID.zip',
  scenario: { en: 'A Umrah assistant prototype in three styles: an event-driven JavaScript web app to select and save activities (Tawaf, Sa\'i, prayers) as JSON, an object-oriented Java program that reads that JSON, and a procedural Python program that builds a progress report from it.', ar: 'نموذج مساعد عمرة بثلاث أساليب: تطبيق ويب JavaScript موجه بالأحداث لاختيار الأنشطة (الطواف، السعي، الصلاة) وحفظها JSON، وبرنامج جافا كائني يقرأ هذا الـ JSON، وبرنامج بايثون إجرائي يطلع تقرير تقدم منه.' },
  tools: { en: 'VS Code + browser (HTML/JS), NetBeans + JDK (Java), Python 3 (IDLE or VS Code), draw.io (use-case, class diagram, flowchart), Tasks 1–3 Template (Tables 1–13).', ar: 'VS Code ومتصفح (HTML/JS)، NetBeans وJDK (جافا)، Python 3 (IDLE أو VS Code)، draw.io (حالات الاستخدام ومخطط الأصناف والمخطط الانسيابي)، قالب Tasks 1–3 (الجداول 1 إلى 13).' },
  rules: [
    { en: 'The same JSON file links all three tasks: Task 1 creates it, Tasks 2 and 3 read it.', ar: 'نفس ملف JSON يربط التاسكات الثلاث: Task 1 تنشئه، وTask 2 و3 يقرونه.' },
    { en: 'Each code screenshot must show the requirement it proves (use the A list).', ar: 'كل لقطة كود لازم توضح المتطلب اللي تثبته (استخدم قائمة A).' },
    { en: 'Write code and explanations yourself; add references.', ar: 'اكتب الكود والشرح بنفسك؛ وأضف المراجع.' }
  ],
  tasks: [
    { n: 'Task 1 · 1.1–1.2', title: { en: 'Explain event-driven + plan the web app', ar: 'اشرح الموجه بالأحداث + خطط تطبيق الويب' }, crit: '1.1–1.2',
      need: { en: 'Explain event-driven applications, events, user interaction and event handlers; list functional requirements; draw a use-case diagram.', ar: 'اشرح التطبيقات الموجهة بالأحداث، والأحداث، وتفاعل المستخدم، والمعالجات؛ واكتب المتطلبات الوظيفية؛ وارسم مخطط حالات الاستخدام.' },
      explain: { en: 'Use your Unit 23 lesson: program waits → event (click/change) → handler function runs → screen updates.', ar: 'استخدم درس الوحدة 23: البرنامج ينتظر ← حدث (ضغط/تغيير) ← دالة المعالج تشتغل ← الشاشة تتحدث.' },
      steps: [
        { en: 'Write 3 short paragraphs in your own words with one example each from YOUR app.', ar: 'اكتب 3 فقرات قصيرة بأسلوبك مع مثال من تطبيقك لكل وحدة.' },
        { en: 'FRs: select activity, add to visible list, save in localStorage, download .json.', ar: 'المتطلبات: اختيار نشاط، إضافته لقائمة ظاهرة، حفظه في localStorage، تنزيل ملف .json.' },
        { en: 'Use-case: actor Pilgrim outside the boundary; use cases Select Activity, Add Activity, Save Activities, Download JSON inside.', ar: 'حالات الاستخدام: الممثل الحاج برا الحدود؛ وداخلها Select Activity وAdd Activity وSave Activities وDownload JSON.' }
      ],
      shots: [{ en: 'Tables 1–2 + use-case diagram.', ar: 'الجدولين 1 و2 + مخطط حالات الاستخدام.' }],
      a: { en: 'A: user interaction role explained; accurate use-case diagram.', ar: 'A: شرح دور تفاعل المستخدم؛ ومخطط حالات استخدام دقيق.' } },
    { n: 'Task 1 · 1.3', title: { en: 'Build and test the JavaScript web app', ar: 'ابنِ تطبيق JavaScript واختبره' }, crit: '1.3',
      need: { en: 'HTML + JS app that selects an activity, adds it to a visible list, stores with localStorage and downloads a .json file; then a test plan with expected and actual results.', ar: 'تطبيق HTML وJS يختار نشاط، يضيفه لقائمة ظاهرة، يحفظ بـ localStorage، وينزّل ملف .json؛ ثم خطة اختبار بالنتيجة المتوقعة والفعلية.' },
      explain: { en: 'Key pieces: <select>, a button with addEventListener("click"), JSON.stringify for storage, a Blob + link for download.', ar: 'الأجزاء الأساسية: <select>، زر مع addEventListener("click")، JSON.stringify للتخزين، وBlob مع رابط للتنزيل.' },
      steps: [
        { en: 'index.html: a select with activities, an Add button, a <ul>, a Download button; link script.js.', ar: 'index.html: قائمة select بالأنشطة، زر إضافة، <ul>، زر تنزيل؛ واربط script.js.' },
        { en: 'script.js: load saved list on start, add on click (validate empty), save to localStorage, download JSON.', ar: 'script.js: حمّل القائمة المحفوظة عند البدء، أضف عند الضغط (تحقق من الفراغ)، احفظ في localStorage، ونزّل JSON.' },
        { en: 'Tests: add activity, refresh page (still there), empty selection (message), download (file appears).', ar: 'الاختبارات: إضافة نشاط، تحديث الصفحة (يبقى موجود)، اختيار فاضي (رسالة)، تنزيل (يطلع الملف).' }
      ],
      code: '// Download the saved activities as a .json file\nconst blob = new Blob([JSON.stringify(activities, null, 2)], { type: "application/json" });\nconst link = document.createElement("a");\nlink.href = URL.createObjectURL(blob);\nlink.download = "umrah_activities.json";\nlink.click();', lang: 'javascript',
      shots: [{ en: 'Code for each feature (select, add, storage, download), the running page, the JSON file, DevTools → Application → localStorage, test table.', ar: 'كود كل ميزة (الاختيار، الإضافة، التخزين، التنزيل)، الصفحة شغالة، ملف JSON، DevTools ← Application ← localStorage، وجدول الاختبار.' }],
      a: { en: 'A: evidence of selecting, adding, storing, downloading AND the program output.', ar: 'A: دليل على الاختيار والإضافة والتخزين والتنزيل ومخرج البرنامج.' } },
    { n: 'Task 2 · 2.1–2.2', title: { en: 'Explain OOP + plan the classes', ar: 'اشرح OOP + خطط الأصناف' }, crit: '2.1–2.2',
      need: { en: 'Explain object-oriented applications, class, object, attributes, methods; identify classes with attributes and methods as a class diagram or table.', ar: 'اشرح التطبيقات الكائنية، الصنف، الكائن، الخصائص، الدوال؛ وحدد الأصناف بخصائصها ودوالها كمخطط أصناف أو جدول.' },
      explain: { en: 'Expected classes: Activity (name, status/time), Pilgrim (name, list of activities, addActivity(), showSummary()), Main (main method).', ar: 'الأصناف المتوقعة: Activity (الاسم، الحالة/الوقت)، Pilgrim (الاسم، قائمة الأنشطة، addActivity()، showSummary())، Main (الدالة الرئيسية).' },
      steps: [
        { en: 'Write the explanations with examples from your classes.', ar: 'اكتب الشرح مع أمثلة من أصنافك.' },
        { en: 'Class diagram: 3 boxes (name / attributes / methods) and the relation Pilgrim has many Activity.', ar: 'مخطط الأصناف: 3 مربعات (الاسم / الخصائص / الدوال) والعلاقة: Pilgrim عنده أكثر من Activity.' }
      ],
      shots: [{ en: 'Tables 5–6 + class diagram.', ar: 'الجدولين 5 و6 + مخطط الأصناف.' }],
      a: { en: 'A: a class diagram or table of the classes used.', ar: 'A: مخطط أصناف أو جدول للأصناف المستخدمة.' } },
    { n: 'Task 2 · 2.3', title: { en: 'Java program that reads the JSON', ar: 'برنامج جافا يقرأ ملف JSON' }, crit: '2.3',
      need: { en: 'A Java program that reads the Task 1 .json file and organises the data with classes and objects; test plan with two test cases.', ar: 'برنامج جافا يقرأ ملف .json من Task 1 وينظم البيانات بالأصناف والكائنات؛ وخطة اختبار بحالتين.' },
      explain: { en: 'The brief names no JSON library: confirm the approach with your tutor (simple string parsing or a library like Gson) and show the evidence.', ar: 'الأسايمنت ما حدد مكتبة JSON: أكّد الطريقة مع المدرب (تحليل نصي بسيط أو مكتبة مثل Gson) ووضّح الدليل.' },
      steps: [
        { en: 'Put umrah_activities.json in the project folder; read it with Files.readString(Path.of(...)).', ar: 'حط umrah_activities.json في مجلد المشروع؛ واقرأه بـ Files.readString(Path.of(...)).' },
        { en: 'Create Activity objects and add them to a Pilgrim; print a summary.', ar: 'أنشئ كائنات Activity وأضفها لـ Pilgrim؛ واطبع ملخص.' },
        { en: 'Two tests: valid file → list printed; missing/empty file → clear message.', ar: 'اختبارين: ملف صحيح ← تنطبع القائمة؛ ملف ناقص/فاضي ← رسالة واضحة.' }
      ],
      shots: [{ en: 'Imports (libraries), Activity class, Pilgrim class, Main + main method, Output window, test table.', ar: 'الاستيرادات (المكتبات)، صنف Activity، صنف Pilgrim، Main والـ main، نافذة Output، جدول الاختبار.' }],
      a: { en: 'A: libraries, Activity, Pilgrim, Main + main and output all evidenced; two test cases with expected and actual results.', ar: 'A: المكتبات وActivity وPilgrim وMain والمخرج كلها موضحة؛ وحالتين اختبار بالمتوقع والفعلي.' } },
    { n: 'Task 3 · 3.1–3.2', title: { en: 'Explain procedural + plan with IPO and flowchart', ar: 'اشرح الإجرائي + خطط بجدول IPO ومخطط انسيابي' }, crit: '3.1–3.2',
      need: { en: 'Explain procedural programming, step-by-step execution, sequence, selection, iteration; fill the inputs/processes/outputs table; draw a flowchart with start, end, input, process, decision, output.', ar: 'اشرح البرمجة الإجرائية، التنفيذ خطوة بخطوة، التسلسل والاختيار والتكرار؛ عبِّ جدول المدخلات/المعالجة/المخرجات؛ وارسم مخطط انسيابي فيه بداية ونهاية ومدخل ومعالجة وقرار ومخرج.' },
      explain: { en: 'Step-by-step execution = the computer runs line 1, then 2, then 3, unless a selection or loop changes the path.', ar: 'التنفيذ خطوة بخطوة = الكمبيوتر ينفذ السطر 1 ثم 2 ثم 3، إلا إذا الاختيار أو الحلقة غيّرت المسار.' },
      steps: [
        { en: 'IPO: Input = JSON file; Process = count, percentage, choose message; Output = report + list.', ar: 'IPO: المدخل = ملف JSON؛ المعالجة = العد، النسبة، اختيار الرسالة؛ المخرج = التقرير + القائمة.' },
        { en: 'Flowchart: Start → Read file → Count → Calculate % → Decision (% ≥ 100? ≥ 50?) → Message → Print list → End.', ar: 'المخطط: البداية ← قراءة الملف ← العد ← حساب النسبة ← قرار (النسبة ≥ 100؟ ≥ 50؟) ← الرسالة ← طباعة القائمة ← النهاية.' }
      ],
      shots: [{ en: 'Tables 9–10 + flowchart.', ar: 'الجدولين 9 و10 + المخطط الانسيابي.' }],
      a: { en: 'A: step-by-step execution explained clearly.', ar: 'A: شرح واضح للتنفيذ خطوة بخطوة.' } },
    { n: 'Task 3 · 3.3', title: { en: 'Python progress report + tests', ar: 'تقرير التقدم ببايثون + الاختبارات' }, crit: '3.3',
      need: { en: 'Python program: read JSON, count activities, calculate completion %, show a message by condition, list activities; three test cases.', ar: 'برنامج بايثون: يقرأ JSON، يعد الأنشطة، يحسب نسبة الإنجاز، يعرض رسالة حسب الشرط، ويعرض القائمة؛ وثلاث حالات اختبار.' },
      explain: { en: 'Use functions for each step (read_data, count, percentage, message, show_list) so each screenshot proves one requirement.', ar: 'استخدم دالة لكل خطوة (read_data وcount وpercentage وmessage وshow_list) عشان كل لقطة تثبت متطلب واحد.' },
      steps: [
        { en: 'import json; open the file with json.load.', ar: 'import json؛ وافتح الملف بـ json.load.' },
        { en: 'Decide the total expected activities (e.g. 3: Tawaf, Sa\'i, Prayer) to compute %.', ar: 'حدد إجمالي الأنشطة المتوقعة (مثلاً 3: الطواف، السعي، الصلاة) عشان تحسب النسبة.' },
        { en: 'Tests: full file (100% message), partial file (e.g. 66%), empty list (0% / no-activity message).', ar: 'الاختبارات: ملف كامل (رسالة 100%)، ملف جزئي (مثلاً 66%)، قائمة فاضية (0% أو رسالة ما فيه أنشطة).' }
      ],
      shots: [{ en: 'Code for reading, counting, percentage, message, list + terminal output for each test.', ar: 'كود القراءة والعد والنسبة والرسالة والقائمة + مخرج الطرفية لكل اختبار.' }],
      a: { en: 'A: all six pieces evidenced + three test cases with expected and actual results. Zip all three apps as UmrahGuideSystem_TraineeName_TraineeID.zip.', ar: 'A: الأجزاء الستة موضحة + ثلاث حالات اختبار بالمتوقع والفعلي. واضغط التطبيقات الثلاثة باسم UmrahGuideSystem_TraineeName_TraineeID.zip.' } }
  ]
};
