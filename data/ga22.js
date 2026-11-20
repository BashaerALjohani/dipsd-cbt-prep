window.STUDY = window.STUDY || { units: [] };
STUDY.ga = STUDY.ga || {};
STUDY.ga.u22 = {
  ga: 'GA6', num: 22, title: { en: 'Provide technical instruction (Innovation Challenge)', ar: 'تقديم التعليمات التقنية (تحدي الابتكار)' },
  file: 'U022.GA6.FirstNameLastName.StudentID + .TemplateA',
  scenario: { en: 'Event Management trainees are your clients for a college event. Build ONE digital solution (QR guest registration, interactive event programme, or digital event map), then plan, deliver and evaluate an instruction session that teaches them to use it.', ar: 'متدربات إدارة الفعاليات هم عملاؤك في فعالية الكلية. تبني حل رقمي واحد (تسجيل ضيوف بـ QR، برنامج فعالية تفاعلي، أو خريطة رقمية)، ثم تخطط وتقدم وتقيّم جلسة تعليمية تعلمهم استخدامه.' },
  tools: { en: 'Google Forms / Microsoft Forms + QR generator, Figma or a web page for the programme/map, Outlook/Gmail for professional emails, PowerPoint for the session, a feedback form, Template A.', ar: 'نماذج قوقل أو مايكروسوفت + مولد QR، Figma أو صفحة ويب للبرنامج/الخريطة، Outlook أو Gmail للإيميلات الرسمية، PowerPoint للجلسة، نموذج تقييم، وTemplate A.' },
  rules: [
    { en: 'Individual project: your own solution, plan and session.', ar: 'مشروع فردي: الحل والخطة والجلسة من شغلك.' },
    { en: 'Evidence is everything here: keep every email, minute, attendance sheet, photo and form result.', ar: 'الأدلة هي كل شيء هنا: احتفظ بكل إيميل ومحضر وكشف حضور وصورة ونتيجة نموذج.' },
    { en: 'Use the sample emails in Appendix A as a structure, but write your own words.', ar: 'استخدم نماذج الإيميل في الملحق A كهيكل، لكن اكتب بكلامك.' }
  ],
  tasks: [
    { n: 'Task 1 + 1A', title: { en: 'Choose your section + client meeting', ar: 'اختر القسم + اجتماع العميل' }, crit: '1.1',
      need: { en: 'Record your section in the Excel file. Section Leads: attend, write minutes, email them. Others: show the email received, summarise the requirements for YOUR solution and your actions, ask for clarification if unclear.', ar: 'سجّل قسمك في ملف الإكسل. قائدة القسم: تحضر وتكتب المحضر وترسله. الباقي: يوضحون الإيميل المستلم، ويلخصون متطلبات حلّهم وأعمالهم، ويسألون إذا شيء مو واضح.' },
      explain: { en: 'Proves you understood the client before building anything.', ar: 'يثبت إنك فهمت العميل قبل ما تبني أي شيء.' },
      steps: [
        { en: 'Screenshot your row in the section selection file.', ar: 'صوّر صفك في ملف اختيار الأقسام.' },
        { en: 'Minutes (if lead): date, attendees, requirements, questions, decisions, actions + owner.', ar: 'المحضر (للقائدة): التاريخ، الحضور، المتطلبات، الأسئلة، القرارات، الأعمال + المسؤول.' },
        { en: 'Write a short table: Requirement | What it means for my solution | My action.', ar: 'اكتب جدول قصير: المتطلب | وش يعني لحلّي | عملي.' },
        { en: 'Send one clarification question by email and keep the reply.', ar: 'أرسل سؤال توضيح واحد بالإيميل واحفظ الرد.' }
      ],
      shots: [{ en: 'Excel row, minutes/email, requirements table, clarification email.', ar: 'صف الإكسل، المحضر/الإيميل، جدول المتطلبات، إيميل التوضيح.' }],
      a: { en: 'A: complete, professional communication; requirements, clarifications and actions accurately captured.', ar: 'A: تواصل كامل واحترافي؛ والمتطلبات والتوضيحات والأعمال مسجلة بدقة.' } },
    { n: 'Task 2', title: { en: 'Determine client needs', ar: 'تحديد احتياجات العميل' }, crit: '1.1',
      need: { en: 'From the meeting and extra communication, write the clients\' learning needs, the solution requirements, and the type of instruction they want.', ar: 'من الاجتماع وأي تواصل إضافي، اكتب احتياجات العميل التعليمية، ومتطلبات الحل، ونوع التعليم اللي يبونه.' },
      explain: { en: 'Learning needs = what they must be able to DO after your session (e.g. "show a guest how to scan the QR").', ar: 'الاحتياجات التعليمية = وش لازم يقدرون يسوونه بعد جلستك (مثلاً "يوضحون للضيف كيف يمسح الـ QR").' },
      steps: [
        { en: 'A short survey or follow-up email: their tech level, devices, what they need to learn.', ar: 'استبيان قصير أو إيميل متابعة: مستواهم التقني، أجهزتهم، وش يحتاجون يتعلمون.' },
        { en: 'List 3–5 learning needs and 4–6 solution requirements.', ar: 'اكتب 3–5 احتياجات تعليمية و4–6 متطلبات للحل.' },
        { en: 'State the instruction type (on-site demo, hands-on practice, quick guide).', ar: 'حدد نوع التعليم (عرض حضوري، تطبيق عملي، دليل سريع).' }
      ],
      shots: [{ en: 'Survey/email evidence + needs list.', ar: 'دليل الاستبيان/الإيميل + قائمة الاحتياجات.' }],
      a: { en: 'All learning needs and solution requirements accurately documented with evidence.', ar: 'كل الاحتياجات التعليمية ومتطلبات الحل موثقة بدقة مع الأدلة.' } },
    { n: 'Task 3', title: { en: 'Agree and confirm session details', ar: 'اتفق على تفاصيل الجلسة وأكّدها' }, crit: '1.2',
      need: { en: 'Agree date, time and location with the clients and confirm by a professional email.', ar: 'اتفق مع العملاء على التاريخ والوقت والمكان وأكّده بإيميل رسمي.' },
      explain: { en: 'Formal confirmation avoids misunderstandings and is your evidence.', ar: 'التأكيد الرسمي يمنع سوء الفهم وهو دليلك.' },
      steps: [
        { en: 'Use Appendix A email A as a structure: subject, greeting, date, time, location, what will happen, invitation to request changes.', ar: 'استخدم إيميل A في الملحق كهيكل: العنوان، التحية، التاريخ، الوقت، المكان، وش بيصير، ودعوة لطلب أي تعديل.' },
        { en: 'Keep the client\'s reply.', ar: 'احتفظ برد العميل.' }
      ],
      shots: [{ en: 'Sent confirmation email + reply.', ar: 'إيميل التأكيد المرسل + الرد.' }],
      a: { en: 'All details clearly agreed and formally confirmed by email with complete evidence.', ar: 'كل التفاصيل متفق عليها بوضوح ومؤكدة رسمياً بالإيميل مع دليل كامل.' } },
    { n: 'Task 4', title: { en: 'Prepare resources (and your solution)', ar: 'جهّز الموارد (والحل نفسه)' }, crit: '2.1, 2.3',
      need: { en: 'Identify, prepare and TEST all resources: your finished digital solution, device, internet, slides, user guide, QR code, screen.', ar: 'حدد وجهّز واختبر كل الموارد: الحل الرقمي الجاهز، الجهاز، الإنترنت، الشرائح، دليل المستخدم، رمز QR، الشاشة.' },
      explain: { en: 'Build your solution here: QR → form with Name, Mobile, Email; or a clickable programme; or an interactive map with booths, hours and info.', ar: 'هنا تبني حلّك: QR ← نموذج فيه الاسم والجوال والإيميل؛ أو برنامج قابل للضغط؛ أو خريطة تفاعلية فيها الأجنحة والأوقات والمعلومات.' },
      steps: [
        { en: 'Build and test the solution on a phone and on the event screen.', ar: 'ابنِ الحل واختبره على جوال وعلى شاشة الفعالية.' },
        { en: 'Resources table: Resource | Purpose | Status (ready/tested) | Evidence.', ar: 'جدول الموارد: المورد | الهدف | الحالة (جاهز/مختبر) | الدليل.' },
        { en: 'Screenshot each test (QR scanned, form submitted, map clicked).', ar: 'صوّر كل اختبار (مسح الـ QR، إرسال النموذج، الضغط على الخريطة).' }
      ],
      shots: [{ en: 'Solution screenshots + resources table + test evidence.', ar: 'لقطات الحل + جدول الموارد + أدلة الاختبار.' }],
      a: { en: 'All resources identified, prepared to guidelines, tested and fully documented.', ar: 'كل الموارد محددة ومجهزة حسب الإرشادات ومختبرة وموثقة كامل.' } },
    { n: 'Task 5', title: { en: 'Instruction plan and agenda', ar: 'خطة التعليم وجدول الأعمال' }, crit: '2.2, 2.4, 2.5',
      need: { en: 'A detailed plan and agenda showing what you will teach, shared in advance with clients and staff.', ar: 'خطة مفصلة وجدول أعمال يوضح وش بتعلّم، ومرسلة مسبقاً للعملاء والموظفين.' },
      explain: { en: 'A good plan has objectives, timed activities, methods, resources and how you will check understanding.', ar: 'الخطة الجيدة فيها أهداف، وأنشطة بأوقات، وطرق، وموارد، وكيف بتتأكد من الفهم.' },
      steps: [
        { en: 'Objectives (3) linked to the Task 2 learning needs.', ar: 'أهداف (3) مرتبطة باحتياجات Task 2.' },
        { en: 'Agenda table: Time | Activity | Method | Resource (e.g. 5 min intro, 10 min demo, 10 min hands-on, 5 min Q&A).', ar: 'جدول الأعمال: الوقت | النشاط | الطريقة | المورد (مثلاً 5 د مقدمة، 10 د عرض، 10 د تطبيق، 5 د أسئلة).' },
        { en: 'Email it in advance and screenshot the email.', ar: 'أرسلها مسبقاً بالإيميل وصوّر الإيميل.' }
      ],
      shots: [{ en: 'Plan + agenda + the email sending it.', ar: 'الخطة + الجدول + إيميل الإرسال.' }],
      a: { en: 'Detailed, well-structured, aligned to client needs and professionally shared in advance.', ar: 'مفصلة ومنظمة ومرتبطة باحتياجات العميل ومرسلة مسبقاً باحترافية.' } },
    { n: 'Task 6', title: { en: 'Deliver the instruction', ar: 'قدّم الجلسة' }, crit: '3.1–3.3',
      need: { en: 'Record attendance, deliver following the plan, demonstrate the solution, let clients try it, answer questions, document the session.', ar: 'سجّل الحضور، قدّم حسب الخطة، اعرض الحل، خلّ العملاء يجربونه، جاوب الأسئلة، ووثّق الجلسة.' },
      explain: { en: 'The tutor observes you (Appendix C). Show active client interaction and check understanding ("Can you show me how a guest registers?").', ar: 'المدرب يلاحظك (الملحق C). وضّح تفاعل العملاء وتأكد من فهمهم ("تقدرين توريني كيف يسجل الضيف؟").' },
      steps: [
        { en: 'Attendance sheet with names and signatures/times.', ar: 'كشف حضور بالأسماء والتواقيع أو الأوقات.' },
        { en: 'Follow your agenda; let each client do the main task once.', ar: 'امشِ حسب الجدول؛ وخلّ كل عميل يسوي المهمة الرئيسية مرة.' },
        { en: 'Take photos (with permission) and write session notes: questions asked and your answers.', ar: 'خذ صور (بإذن) واكتب ملاحظات الجلسة: الأسئلة اللي انسألت وإجاباتك.' }
      ],
      shots: [{ en: 'Attendance, photos, session notes, observation form.', ar: 'الحضور، الصور، ملاحظات الجلسة، نموذج الملاحظة.' }],
      a: { en: 'Professional delivery that fully follows the plan; clear demo; clients interact; understanding checked; complete documentation.', ar: 'تقديم احترافي يتبع الخطة كامل؛ عرض واضح؛ العملاء يتفاعلون؛ الفهم متأكد منه؛ وتوثيق كامل.' } },
    { n: 'Task 7', title: { en: 'Refer further training needs', ar: 'تحويل احتياجات التدريب الإضافية' }, crit: '3.4',
      need: { en: 'Refer any need you cannot fully address to the right person by a professional email, or explain clearly why no referral is needed.', ar: 'حوّل أي احتياج ما تقدر تغطيه للشخص المناسب بإيميل رسمي، أو اشرح بوضوح ليش ما يحتاج تحويل.' },
      explain: { en: 'Escalation is a skill: right person + clear reason + what support is needed.', ar: 'التصعيد مهارة: الشخص الصح + سبب واضح + نوع الدعم المطلوب.' },
      steps: [
        { en: 'Pick a real gap (e.g. exporting form data to Excel, screen setup) and the right person (tutor, IT).', ar: 'اختر فجوة حقيقية (مثلاً تصدير بيانات النموذج لإكسل، إعداد الشاشة) والشخص المناسب (المدرب، التقنية).' },
        { en: 'Use Appendix A email B as a structure and keep the reply.', ar: 'استخدم إيميل B في الملحق كهيكل واحتفظ بالرد.' }
      ],
      shots: [{ en: 'Referral email + reply.', ar: 'إيميل التحويل + الرد.' }],
      a: { en: 'Referred to the most appropriate person with clear reasoning and complete evidence.', ar: 'محوّل للشخص الأنسب مع تبرير واضح ودليل كامل.' } },
    { n: 'Task 8–9', title: { en: 'Client feedback, review and improvements', ar: 'آراء العميل والمراجعة والتحسينات' }, crit: '4.1–4.3',
      need: { en: 'Create a feedback form, collect client responses, analyse strengths, issues and suggestions, discuss with your tutor, and document improvement actions.', ar: 'سوِّ نموذج تقييم، اجمع ردود العملاء، حلّل نقاط القوة والمشاكل والاقتراحات، ناقشها مع المدرب، ووثّق إجراءات التحسين.' },
      explain: { en: 'Ask whether each agreed requirement and learning objective was met, not just "did you like it".', ar: 'اسأل هل كل متطلب متفق عليه وكل هدف تعليمي تحقق، مو بس "عجبك؟".' },
      steps: [
        { en: 'Form: rating questions per objective + 2 open questions.', ar: 'النموذج: أسئلة تقييم لكل هدف + سؤالين مفتوحين.' },
        { en: 'Screenshot the results summary.', ar: 'صوّر ملخص النتائج.' },
        { en: 'Table: Strength / Issue / Suggestion | Action I will take; then an email to your tutor discussing them.', ar: 'جدول: نقطة قوة / مشكلة / اقتراح | الإجراء اللي بسويه؛ ثم إيميل للمدرب تناقشها فيه.' }
      ],
      shots: [{ en: 'Form, results, analysis table, discussion email.', ar: 'النموذج، النتائج، جدول التحليل، إيميل النقاش.' }],
      a: { en: 'Feedback strongly checks requirements; analysis is clear; actions are well-considered and professionally communicated.', ar: 'الآراء تتحقق من المتطلبات بقوة؛ التحليل واضح؛ والإجراءات مدروسة ومرسلة باحترافية.' } }
  ]
};
