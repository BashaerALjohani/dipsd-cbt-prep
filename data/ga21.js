window.STUDY = window.STUDY || { units: [] };
STUDY.ga = STUDY.ga || {};
STUDY.ga.u21 = {
  ga: 'GA5', num: 21, title: { en: 'Document applications', ar: 'توثيق التطبيقات' },
  file: 'U21.GA5.TraineeName.TraineeID + Tasks 1-5 Template + User Manual V1/V2 + Technical Documentation V1/V2 + final PDFs',
  scenario: { en: 'As a Junior Documentation Specialist, choose ONE Saudi website (Webook, Noon or Careem) and produce a User Manual and a Technical Documentation report, from requirements to published PDFs.', ar: 'كأخصائي توثيق مبتدئ، اختر موقع سعودي واحد (Webook أو Noon أو Careem) وسوِّ دليل مستخدم وتقرير توثيق تقني، من المتطلبات لين ملفات PDF المنشورة.' },
  tools: { en: 'Tasks 1–5 Template (sections 1–20), Word templates for both documents, Snipping Tool for screenshots, draw.io for the architecture and use-case diagrams, browser DevTools (F12 → Elements) to study HTML/CSS.', ar: 'قالب Tasks 1–5 (الأقسام 1 إلى 20)، قوالب وورد للوثيقتين، أداة القص للقطات، draw.io لمخطط المعمارية وحالات الاستخدام، وأدوات المطور (F12 ← Elements) لدراسة HTML وCSS.' },
  rules: [
    { en: '"Organized all sections clearly and included references" is an A item in EVERY task: add references each time.', ar: '"نظّمت كل الأقسام وأضفت المراجع" بند A في كل تاسك: أضف مراجع في كل مرة.' },
    { en: 'Keep the exact file names the brief asks for (User_Manual_V1.0_WebsiteName, etc.).', ar: 'التزم بأسماء الملفات المطلوبة بالضبط (User_Manual_V1.0_WebsiteName وغيرها).' },
    { en: 'Own work only; Calibri 11, single spacing.', ar: 'عمل أصلي فقط؛ Calibri حجم 11، تباعد مفرد.' }
  ],
  tasks: [
    { n: 'Task 1 · 1.1–1.2', title: { en: 'Documentation requirements + industry standards', ar: 'متطلبات التوثيق + معايير الصناعة' }, crit: '1.1–1.2',
      need: { en: 'Identify both documents, their target audience, why each is needed, and the stakeholders; then a table of documentation standards and best practices.', ar: 'حدد الوثيقتين، والجمهور المستهدف لكل وحدة، وليش كل وحدة مهمة، وأصحاب المصلحة؛ ثم جدول لمعايير التوثيق وأفضل الممارسات.' },
      explain: { en: 'User Manual → end users (simple steps). Technical Documentation → developers (structure, code). Standards = rules professionals follow.', ar: 'دليل المستخدم ← المستخدم (خطوات بسيطة). التوثيق التقني ← المطورين (الهيكل والكود). المعايير = قواعد يمشي عليها المحترفين.' },
      steps: [
        { en: 'Requirements table: Document | Audience | Purpose | Why necessary. Add stakeholders (users, developers, technical lead, support team).', ar: 'جدول المتطلبات: الوثيقة | الجمهور | الهدف | ليش ضرورية. وأضف أصحاب المصلحة (المستخدمين، المطورين، القائد التقني، فريق الدعم).' },
        { en: 'Standards table with 4+ rows: e.g. ISO/IEC/IEEE 26514 (user docs), WCAG 2.1 (accessibility), Plain English, Microsoft Writing Style Guide, JSDoc/HTML commenting conventions. Column: how YOU will apply it.', ar: 'جدول معايير بـ 4 صفوف أو أكثر: مثل ISO/IEC/IEEE 26514 (توثيق المستخدم)، WCAG 2.1 (الوصول)، اللغة الواضحة، دليل أسلوب مايكروسوفت، أعراف التعليق في HTML. وعمود: كيف بتطبقه أنت.' },
        { en: 'Add references.', ar: 'أضف المراجع.' }
      ],
      shots: [{ en: 'Template sections 1–2.', ar: 'القالب القسمين 1 و2.' }],
      a: { en: 'A: strong evaluation of requirements AND four or more relevant standards with clear application.', ar: 'A: تقييم قوي للمتطلبات و4 معايير أو أكثر مع طريقة تطبيق واضحة.' } },
    { n: 'Task 1 · 1.3–1.4', title: { en: 'Scope, deliverables and scope approval', ar: 'النطاق والمخرجات واعتماد النطاق' }, crit: '1.3–1.5',
      need: { en: 'In-scope / out-of-scope, deliverables (V1, V2, PDF) and approval from the Technical Lead (sign-off form or email).', ar: 'داخل/خارج النطاق، المخرجات (V1 وV2 وPDF) واعتماد القائد التقني (نموذج توقيع أو إيميل).' },
      explain: { en: 'Scope sets boundaries so the work does not grow. Approval must be real evidence.', ar: 'النطاق يحدد الحدود عشان الشغل ما يكبر. والاعتماد لازم يكون دليل حقيقي.' },
      steps: [
        { en: 'List features you WILL document (search, book, cart, track) and what you will NOT (admin, payments backend).', ar: 'اكتب الميزات اللي بتوثقها (البحث، الحجز، السلة، التتبع) واللي ما بتوثقها (لوحة الإدارة، خلفية الدفع).' },
        { en: 'Deliverables table: name, version, format, date.', ar: 'جدول المخرجات: الاسم، الإصدار، الصيغة، التاريخ.' },
        { en: 'Email your tutor (Technical Lead) the scope and paste the approval reply.', ar: 'أرسل النطاق للمدرب (القائد التقني) بالإيميل والصق رد الاعتماد.' }
      ],
      shots: [{ en: 'Sections 3–4 + approval email screenshot.', ar: 'القسمين 3 و4 + لقطة إيميل الاعتماد.' }],
      a: { en: 'Clear boundaries + dated approval evidence + references.', ar: 'حدود واضحة + دليل اعتماد بتاريخ + مراجع.' } },
    { n: 'Task 2 · 2.1–2.2', title: { en: 'Tables of contents + style guide', ar: 'جداول المحتويات + دليل الأسلوب' }, crit: '2.1–2.2',
      need: { en: 'A table of contents for both documents (logical sections, add your own), and a style guide: formatting, numbering, tone, style.', ar: 'جدول محتويات للوثيقتين (أقسام منطقية، وأضف أقسامك)، ودليل أسلوب: التنسيق، الترقيم، النبرة، الأسلوب.' },
      explain: { en: 'TOC = structure (order + hierarchy). Style guide = rules any writer can follow without guessing.', ar: 'جدول المحتويات = الهيكل (الترتيب والتسلسل). دليل الأسلوب = قواعد أي كاتب يقدر يطبقها بدون تخمين.' },
      steps: [
        { en: 'Build both TOCs from the Task 3 required sections (manual: intro, overview, steps, screenshots, glossary, FAQ; tech: control page, change log… code comments).', ar: 'ابنِ جدولي المحتويات من أقسام Task 3 المطلوبة (الدليل: مقدمة، نظرة عامة، خطوات، لقطات، مسرد، أسئلة شائعة؛ التقني: صفحة التحكم، سجل التغييرات… تعليقات الكود).' },
        { en: 'Style guide table: headings (font, size, colour), body text, numbered steps, screenshot captions + alt text, tone, file naming, version format.', ar: 'جدول دليل الأسلوب: العناوين (الخط، الحجم، اللون)، النص، الخطوات المرقمة، عناوين اللقطات + النص البديل، النبرة، تسمية الملفات، صيغة الإصدار.' }
      ],
      shots: [{ en: 'Sections 5–6.', ar: 'القسمين 5 و6.' }],
      a: { en: 'A: the style guide shows professional design consistency (every rule is specific and checkable).', ar: 'A: دليل الأسلوب يعكس اتساق تصميم احترافي (كل قاعدة محددة وقابلة للتحقق).' } },
    { n: 'Task 2 · 2.3–2.5', title: { en: 'Website review, templates and validation', ar: 'مراجعة الموقع والقوالب والتحقق' }, crit: '2.3–2.5',
      need: { en: 'Features and user roles of the website, a Word template for each document, and a checklist confirming the structure matches the scope.', ar: 'ميزات الموقع وأدوار المستخدمين، قالب وورد لكل وثيقة، وقائمة تحقق تأكد إن الهيكل يطابق النطاق.' },
      explain: { en: '"Beyond surface features" = explain how features connect (account → cart → checkout → tracking) and who does what (guest, registered user, seller/driver, admin).', ar: '"أبعد من الميزات الظاهرة" = اشرح كيف الميزات تترابط (الحساب ← السلة ← الدفع ← التتبع) ومين يسوي وش (زائر، مستخدم مسجل، بائع/سائق، مدير).' },
      steps: [
        { en: 'Feature/role table with a short flow for each main feature.', ar: 'جدول الميزات والأدوار مع مسار قصير لكل ميزة رئيسية.' },
        { en: 'Create User_Manual_Template and Technical_Documentation_Template Word files using your style guide (headings, placeholders).', ar: 'سوِّ ملفي User_Manual_Template وTechnical_Documentation_Template في وورد باستخدام دليل الأسلوب (عناوين وأماكن محجوزة).' },
        { en: 'Validation checklist: Scope item | Section in template | ✓.', ar: 'قائمة التحقق: عنصر النطاق | القسم في القالب | ✓.' }
      ],
      shots: [{ en: 'Sections 7–8 + both template files.', ar: 'القسمين 7 و8 + ملفي القالب.' }],
      a: { en: 'A: understanding of the site structure beyond surface features.', ar: 'A: فهم هيكل الموقع أبعد من الميزات الظاهرة.' } },
    { n: 'Task 3 · 3.1–3.3 (manual)', title: { en: 'User Manual Version 1', ar: 'دليل المستخدم الإصدار 1' }, crit: '3.1–3.3',
      need: { en: 'Introduction, system overview, step-by-step instructions with screenshots, glossary, and troubleshooting OR FAQ, in plain English.', ar: 'مقدمة، نظرة عامة، تعليمات خطوة بخطوة مع لقطات، مسرد، وحل المشاكل أو الأسئلة الشائعة، بلغة واضحة.' },
      explain: { en: 'Write for a first-time user: one action per numbered step, exact button labels, captions + alt text.', ar: 'اكتب لمستخدم أول مرة: فعل واحد لكل خطوة مرقمة، أسماء الأزرار بالضبط، وعناوين ونص بديل للصور.' },
      steps: [
        { en: 'Do each task yourself on the real site and screenshot every step.', ar: 'سوِّ كل مهمة بنفسك في الموقع الحقيقي وصوّر كل خطوة.' },
        { en: 'Write 3–5 procedures (e.g. create account, search, book/add to cart, checkout, track).', ar: 'اكتب 3–5 إجراءات (مثلاً إنشاء حساب، بحث، حجز/إضافة للسلة، دفع، تتبع).' },
        { en: 'Glossary of 6+ terms explained simply; FAQ/troubleshooting of 4+ items.', ar: 'مسرد فيه 6 مصطلحات أو أكثر بشرح بسيط؛ وأسئلة شائعة أو حل مشاكل 4 بنود أو أكثر.' }
      ],
      shots: [{ en: 'User_Manual_V1.0 pages (cover, one procedure, glossary, FAQ).', ar: 'صفحات User_Manual_V1.0 (الغلاف، إجراء، المسرد، الأسئلة).' }],
      a: { en: 'A: all required sections complete and professionally written, with references.', ar: 'A: كل الأقسام المطلوبة مكتملة ومكتوبة باحترافية، مع المراجع.' } },
    { n: 'Task 3 · 3.1, 3.4 (technical)', title: { en: 'Technical Documentation Version 1 + code comments', ar: 'التوثيق التقني الإصدار 1 + تعليقات الكود' }, crit: '3.1, 3.4',
      need: { en: 'Document control page, change log, overview, high-level architecture diagram, technology stack, frontend structure, purpose of buttons, CSS description, use-case diagram, security considerations, and HTML (optional CSS) with meaningful comments explained.', ar: 'صفحة التحكم، سجل التغييرات، نظرة عامة، مخطط المعمارية، التقنيات المستخدمة، هيكل الواجهة، هدف الأزرار، وصف CSS، مخطط حالات الاستخدام، اعتبارات الأمان، وكود HTML (وCSS اختياري) بتعليقات مفيدة مع شرحها.' },
      explain: { en: 'You study the public site (F12) and describe it; your code example is your own illustrative HTML with <!-- comments --> that explain purpose.', ar: 'تدرس الموقع العام (F12) وتوصفه؛ ومثال الكود هو HTML توضيحي من كتابتك فيه <!-- تعليقات --> تشرح الهدف.' },
      steps: [
        { en: 'F12 → Elements: note the header, nav, buttons, forms; Wappalyzer/BuiltWith for the tech stack.', ar: 'F12 ← Elements: لاحظ الهيدر والتنقل والأزرار والنماذج؛ واستخدم Wappalyzer أو BuiltWith للتقنيات.' },
        { en: 'Draw: browser → CDN/web server → app server → database (architecture) and a use-case diagram.', ar: 'ارسم: المتصفح ← CDN/خادم الويب ← خادم التطبيق ← قاعدة البيانات (المعمارية) ومخطط حالات الاستخدام.' },
        { en: 'Write a small HTML snippet of one component with useful comments and explain each comment.', ar: 'اكتب مقطع HTML صغير لمكوّن واحد بتعليقات مفيدة واشرح كل تعليق.' }
      ],
      shots: [{ en: 'Technical_Documentation_V1.0 pages + your commented HTML in an editor.', ar: 'صفحات Technical_Documentation_V1.0 + كود HTML بتعليقاتك في المحرر.' }],
      a: { en: 'A: every required section present and professional; label your code as illustrative; references included.', ar: 'A: كل قسم مطلوب موجود واحترافي؛ واكتب إن الكود توضيحي؛ والمراجع موجودة.' } },
    { n: 'Task 4', title: { en: 'Review, feedback and Version 2', ar: 'المراجعة والملاحظات والإصدار 2' }, crit: '4.1–4.4',
      need: { en: 'Email V1 to the Technical Lead, complete the feedback analysis table, update change logs, create V2 of both documents, and complete a proofreading checklist.', ar: 'أرسل V1 للقائد التقني بالإيميل، عبِّ جدول تحليل الملاحظات، حدّث سجلات التغيير، سوِّ V2 للوثيقتين، وعبِّ قائمة التدقيق.' },
      explain: { en: 'The examiner wants to SEE improvement: feedback → decision → change → logged.', ar: 'المقيّم يبي يشوف التحسن: الملاحظة ← القرار ← التعديل ← التسجيل.' },
      steps: [
        { en: 'Screenshot the sent email with V1 attached and the reply.', ar: 'صوّر الإيميل المرسل مع V1 والرد.' },
        { en: 'Feedback table: Comment | Location | Priority | Accepted? | Action taken.', ar: 'جدول الملاحظات: الملاحظة | المكان | الأولوية | مقبولة؟ | الإجراء.' },
        { en: 'Change log row per change (version, date, change, author); save V2 files.', ar: 'صف في سجل التغييرات لكل تعديل (الإصدار، التاريخ، التعديل، الكاتب)؛ واحفظ ملفات V2.' },
        { en: 'Proofreading checklist with notes (grammar, links, labels, screenshots, formatting).', ar: 'قائمة تدقيق مع ملاحظات (القواعد، الروابط، الأسماء، اللقطات، التنسيق).' }
      ],
      shots: [{ en: 'Email, feedback table, change log, proofreading checklist (sections 11–16).', ar: 'الإيميل، جدول الملاحظات، سجل التغييرات، قائمة التدقيق (الأقسام 11–16).' }],
      a: { en: 'A: feedback table complete and accurate, improvements visible in change logs, detailed editing evidence.', ar: 'A: جدول ملاحظات كامل ودقيق، التحسينات واضحة في سجل التغييرات، ودليل تدقيق مفصل.' } },
    { n: 'Task 5', title: { en: 'Final approval and publication', ar: 'الاعتماد النهائي والنشر' }, crit: '5.1–5.3',
      need: { en: 'Cross-check final documents against scope, get final sign-off, convert to PDF, define file naming and the distribution/storage method.', ar: 'طابق الوثائق النهائية مع النطاق، خذ الاعتماد النهائي، حوّلها لـ PDF، وحدد تسمية الملفات وطريقة التوزيع والتخزين.' },
      explain: { en: 'Publication is controlled: right version, right format, right place, right people.', ar: 'النشر مضبوط: الإصدار الصح، الصيغة الصح، المكان الصح، الأشخاص الصح.' },
      steps: [
        { en: 'Alignment table: Scope item | Where covered | ✓.', ar: 'جدول المطابقة: عنصر النطاق | وين مغطى | ✓.' },
        { en: 'Final sign-off email naming the exact version.', ar: 'إيميل اعتماد نهائي يذكر الإصدار بالضبط.' },
        { en: 'Export PDFs; define naming (Project_Doc_Lang_vX.Y) and where each is stored/shared (e.g. SharePoint for technical docs with restricted access; website help centre for the manual).', ar: 'صدّر PDF؛ وحدد التسمية (Project_Doc_Lang_vX.Y) ووين ينحفظ وينشارك كل واحد (مثلاً SharePoint للتقني بصلاحيات محدودة؛ ومركز المساعدة في الموقع للدليل).' }
      ],
      shots: [{ en: 'Sections 17–19 + both final PDFs open.', ar: 'الأقسام 17–19 + ملفي PDF النهائيين مفتوحين.' }],
      a: { en: 'A: a professional distribution/storage method for the Technical Documentation.', ar: 'A: طريقة توزيع وتخزين احترافية للتوثيق التقني.' } }
  ]
};
