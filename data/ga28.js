window.STUDY = window.STUDY || { units: [] };
STUDY.ga = STUDY.ga || {};
STUDY.ga.u28 = {
  ga: 'GA8', num: 28, title: { en: 'Manage software change requests (Winter Day app)', ar: 'إدارة طلبات التغيير (تطبيق Winter Day)' },
  file: 'U028.GA8.FirstNameLastName.StudentID + .Template',
  scenario: { en: 'The client sent an official change request for the Winter Day app you built in Unit 22. CR1: apply your Unit 22 feedback. CR2: new Winter Day logo + real event data from the Excel file. CR3: improvements specific to YOUR app type (registration, programme or map). Improve your EXISTING app; do not replace it.', ar: 'العميل أرسل طلب تغيير رسمي لتطبيق Winter Day اللي سويته في الوحدة 22. CR1: طبّق ملاحظات الوحدة 22. CR2: شعار Winter Day الجديد + بيانات الفعالية الحقيقية من ملف الإكسل. CR3: تحسينات خاصة بنوع تطبيقك (تسجيل، برنامج، أو خريطة). حسّن تطبيقك الموجود ولا تبدله.' },
  tools: { en: 'Ignite Change Management Template, your Unit 22 app files, the client attachments (logo, Excel with real event data, college map, your Unit 22 feedback), Excel/Word for tables, email.', ar: 'قالب إدارة التغيير من Ignite، ملفات تطبيقك من الوحدة 22، مرفقات العميل (الشعار، الإكسل ببيانات الفعالية الحقيقية، خريطة الكلية، ملاحظاتك من الوحدة 22)، إكسل/وورد للجداول، والإيميل.' },
  rules: [
    { en: 'Only use feedback that was really given on YOUR app; do not invent problems.', ar: 'استخدم بس الملاحظات اللي فعلاً انقالت على تطبيقك؛ لا تخترع مشاكل.' },
    { en: 'Map apps: using the real college/event map is mandatory.', ar: 'تطبيقات الخريطة: استخدام خريطة الكلية الحقيقية إلزامي.' },
    { en: 'Before-and-after screenshots for CR1, CR2 and CR3 are required evidence.', ar: 'لقطات قبل وبعد لـ CR1 وCR2 وCR3 دليل مطلوب.' },
    { en: 'Do not mark unconfirmed activities as confirmed.', ar: 'لا تعلّم الأنشطة غير المؤكدة كأنها مؤكدة.' }
  ],
  tasks: [
    { n: 'Task 1', title: { en: 'Review and record the change requests', ar: 'راجع طلبات التغيير وسجّلها' }, crit: '1.1–1.5',
      need: { en: 'Record CR1–CR3 (request, reason, date, expected outcome); gather the feedback, original requirements, logo, Excel and map; explain impact, cost/effort and benefits; compare with the original app; clarify with your tutor/client and record it.', ar: 'سجّل CR1–CR3 (الطلب، السبب، التاريخ، النتيجة المتوقعة)؛ اجمع الملاحظات والمتطلبات الأصلية والشعار والإكسل والخريطة؛ اشرح الأثر والتكلفة/الجهد والفوائد؛ قارن مع التطبيق الأصلي؛ ووضّح مع المدرب/العميل وسجّل النقاش.' },
      explain: { en: 'Traceability: each CR must point to its source (feedback line, Excel sheet, logo file, map).', ar: 'قابلية التتبع: كل طلب لازم يشير لمصدره (سطر الملاحظة، ورقة الإكسل، ملف الشعار، الخريطة).' },
      steps: [
        { en: 'Copy each Unit 22 feedback point into the CR1 row exactly as given.', ar: 'انسخ كل نقطة من ملاحظات الوحدة 22 في صف CR1 بنفس الصياغة.' },
        { en: 'For each CR: Impact | Effort (hours) | Benefit | Original vs new.', ar: 'لكل طلب: الأثر | الجهد (ساعات) | الفائدة | الأصلي مقابل الجديد.' },
        { en: 'Email/meet your tutor to clarify one point; record what was agreed.', ar: 'راسل أو قابل المدرب لتوضيح نقطة؛ وسجّل وش اتفقتوا عليه.' }
      ],
      shots: [{ en: 'Change log page for CR1–CR3 + clarification evidence.', ar: 'صفحة سجل التغيير لـ CR1–CR3 + دليل التوضيح.' }],
      a: { en: 'A: all CRs documented with traceable sources and an integration objective; impact, cost and benefits thoroughly evaluated.', ar: 'A: كل الطلبات موثقة بمصادر قابلة للتتبع وهدف تكامل؛ والأثر والتكلفة والفوائد مقيّمة بعمق.' } },
    { n: 'Task 2–3', title: { en: 'Classify, prioritise, risks and schedule', ar: 'التصنيف والأولويات والمخاطر والجدول' }, crit: '2.1, 3.1–3.3',
      need: { en: 'Classify each CR High/Medium/Low using event priorities, deadlines and SLAs, track status; identify risks to event operations; evaluate time/resources/cost/benefit; build a schedule with start/end dates and status.', ar: 'صنّف كل طلب عالي/متوسط/منخفض حسب أولويات الفعالية والمواعيد واتفاقيات الخدمة، وتابع الحالة؛ حدد المخاطر على تشغيل الفعالية؛ قيّم الوقت والموارد والتكلفة والفائدة؛ وسوِّ جدول بتواريخ بداية ونهاية وحالة.' },
      explain: { en: 'Risks that break the event (registration not working, wrong times, wrong map location, unusable on mobile) get HIGH priority.', ar: 'المخاطر اللي تخرب الفعالية (التسجيل ما يشتغل، أوقات غلط، مكان غلط في الخريطة، ما يشتغل على الجوال) أولويتها عالية.' },
      steps: [
        { en: 'Priority table: CR | Priority | Reason | SLA/deadline | Status.', ar: 'جدول الأولويات: الطلب | الأولوية | السبب | الموعد/SLA | الحالة.' },
        { en: 'Risk table: Risk | Likelihood | Impact | Mitigation.', ar: 'جدول المخاطر: الخطر | الاحتمالية | الأثر | التخفيف.' },
        { en: 'Schedule (Gantt-style table): Task | Start | End | Status.', ar: 'الجدول الزمني (بأسلوب Gantt): المهمة | البداية | النهاية | الحالة.' }
      ],
      shots: [{ en: 'Priority, risk and schedule tables.', ar: 'جداول الأولويات والمخاطر والجدول الزمني.' }],
      a: { en: 'All CRs and sub-changes correctly classified, prioritised and tracked against event needs.', ar: 'كل الطلبات والتعديلات الفرعية مصنفة ومرتبة ومتابعة صح حسب احتياجات الفعالية.' } },
    { n: 'Task 4', title: { en: 'Change analysis work plan + approval', ar: 'خطة عمل تحليل التغيير + الاعتماد' }, crit: '4.1–4.7',
      need: { en: 'Group related changes, analyse impact on features/users, notify stakeholders, list tools/resources, write a work plan (steps, dependencies, responsibilities, testing), review it, and send it for approval BEFORE changing anything.', ar: 'اجمع التعديلات المترابطة، حلّل أثرها على الميزات والمستخدمين، بلّغ أصحاب المصلحة، حدد الأدوات والموارد، اكتب خطة عمل (خطوات، اعتماديات، مسؤوليات، اختبار)، راجعها، وأرسلها للاعتماد قبل ما تعدّل أي شيء.' },
      explain: { en: 'Order matters: plan → approval → code. Approval evidence before Task 5 dates.', ar: 'الترتيب مهم: الخطة ← الاعتماد ← الكود. ودليل الاعتماد قبل تواريخ Task 5.' },
      steps: [
        { en: 'Notification email to the client and tutor explaining why the changes are needed.', ar: 'إيميل إبلاغ للعميل والمدرب يشرح ليش التعديلات مطلوبة.' },
        { en: 'Work plan table: Change | Steps | Depends on | Who | Test.', ar: 'جدول خطة العمل: التعديل | الخطوات | يعتمد على | مين | الاختبار.' },
        { en: 'Send the plan for approval and record the decision.', ar: 'أرسل الخطة للاعتماد وسجّل القرار.' }
      ],
      shots: [{ en: 'Notification email, work plan, approval email/decision.', ar: 'إيميل الإبلاغ، خطة العمل، إيميل/قرار الاعتماد.' }],
      a: { en: 'Clear, complete plan following the template, approved before implementation.', ar: 'خطة واضحة وكاملة تتبع القالب، ومعتمدة قبل التنفيذ.' } },
    { n: 'Task 5', title: { en: 'Modify the app and test', ar: 'عدّل التطبيق واختبره' }, crit: '5.1–5.4',
      need: { en: 'Implement CR1, CR2 and CR3 in your existing app, test each change, fix and retest problems, and update the app and documentation.', ar: 'نفّذ CR1 وCR2 وCR3 في تطبيقك الموجود، اختبر كل تعديل، أصلح المشاكل وأعد الاختبار، وحدّث التطبيق والتوثيق.' },
      explain: { en: 'For every change: BEFORE screenshot → change → AFTER screenshot → test result.', ar: 'لكل تعديل: لقطة قبل ← التعديل ← لقطة بعد ← نتيجة الاختبار.' },
      steps: [
        { en: 'Take BEFORE screenshots of everything you will change.', ar: 'صوّر "قبل" لكل شيء بتعدّله.' },
        { en: 'CR2: swap in the new logo and copy real data from the Excel (check every time and location).', ar: 'CR2: حط الشعار الجديد وانقل البيانات الحقيقية من الإكسل (تأكد من كل وقت ومكان).' },
        { en: 'Test table: Test | Expected | Actual | Pass/Fail | Fix | Retest.', ar: 'جدول الاختبار: الاختبار | المتوقع | الفعلي | نجح/فشل | الإصلاح | إعادة الاختبار.' },
        { en: 'Test on a real phone (scaling, zoom, QR, pop-ups).', ar: 'اختبر على جوال حقيقي (المقاس، التكبير، QR، النوافذ المنبثقة).' }
      ],
      shots: [{ en: 'Before/after for CR1, CR2, CR3 + test table + app link/files.', ar: 'قبل/بعد لـ CR1 وCR2 وCR3 + جدول الاختبار + رابط/ملفات التطبيق.' }],
      a: { en: 'Every change proven by before/after and passing tests; documentation updated to match the real work.', ar: 'كل تعديل مثبت بقبل/بعد واختبارات ناجحة؛ والتوثيق محدث ويطابق الشغل الفعلي.' } },
    { n: 'Task 6', title: { en: 'Deliver, demonstrate and follow up', ar: 'سلّم واعرض وتابع' }, crit: '6.1–6.3',
      need: { en: 'Deliver the updated app with evidence, demonstrate it and record real client/instructor feedback and acceptance, then complete follow-up actions and record remaining issues or future work.', ar: 'سلّم التطبيق المحدث مع الأدلة، اعرضه وسجّل آراء العميل/المدرب الحقيقية وهل قبلوا التعديلات، ثم نفّذ المتابعة وسجّل المشاكل المتبقية أو الشغل المستقبلي.' },
      explain: { en: 'Close the loop: accepted / not accepted per CR, and what happens next.', ar: 'أغلق الحلقة: مقبول / غير مقبول لكل طلب، ووش اللي بعده.' },
      steps: [
        { en: 'Send the final link/files by email.', ar: 'أرسل الرابط أو الملفات النهائية بالإيميل.' },
        { en: 'Feedback table: CR | Client comment | Accepted? | Follow-up.', ar: 'جدول الآراء: الطلب | تعليق العميل | مقبول؟ | المتابعة.' },
        { en: 'Show evidence of any final fix.', ar: 'وضّح دليل أي إصلاح أخير.' }
      ],
      shots: [{ en: 'Delivery email, feedback table, final evidence.', ar: 'إيميل التسليم، جدول الآراء، الدليل النهائي.' }],
      a: { en: 'Real feedback recorded, acceptance clear for each CR, follow-up completed with evidence.', ar: 'آراء حقيقية مسجلة، القبول واضح لكل طلب، والمتابعة مكتملة بالأدلة.' } }
  ]
};
