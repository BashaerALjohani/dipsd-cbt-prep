window.STUDY = window.STUDY || { units: [] };
STUDY.ga = STUDY.ga || {};
STUDY.ga.u18 = {
  ga: 'GA2', num: 18, title: { en: 'Design user interfaces', ar: 'تصميم واجهات المستخدم' },
  file: 'U18_TraineeName_TraineeID',
  scenario: { en: 'You are a junior designer at "Ignite". Pick your own client (healthcare, e-commerce, education, gaming…) and design an interactive product for them: an app, dashboard, booking system or web interface. You take it from discovery to tested, signed-off design.', ar: 'أنت مصمم مبتدئ في شركة "Ignite". تختار عميلك بنفسك (صحة، تجارة إلكترونية، تعليم، ألعاب…) وتصمم له منتج تفاعلي: تطبيق أو لوحة تحكم أو نظام حجز أو واجهة ويب. وتمشي فيه من الاكتشاف لين تصميم مختبر ومعتمد.' },
  tools: { en: 'Figma (wireframes, storyboard, prototype), FigJam or Lucidchart (content map / flowchart), Adobe Color or WebAIM (contrast check), Word using Template A.', ar: 'Figma (المخططات والستوري بورد والنموذج)، FigJam أو Lucidchart (خريطة المحتوى أو المخطط الانسيابي)، Adobe Color أو WebAIM (فحص التباين)، وورد باستخدام Template A.' },
  rules: [
    { en: 'Original work: the criteria say "no AI used". Use this page to understand, then write everything in your own words.', ar: 'عمل أصلي: المعايير تقول "بدون ذكاء اصطناعي". استخدم هذي الصفحة عشان تفهم، واكتب كل شيء بأسلوبك.' },
    { en: 'Format: Calibri 11, black, single spacing, left-to-right (or another professional style).', ar: 'التنسيق: Calibri حجم 11، أسود، تباعد مفرد، من اليسار لليمين (أو أسلوب احترافي آخر).' },
    { en: 'Save as U18_TraineeName_TraineeID.', ar: 'احفظ الملف باسم U18_TraineeName_TraineeID.' }
  ],
  tasks: [
    { n: 'Task 1 · 1.1', title: { en: 'Pitch your idea to the Creative Director', ar: 'اعرض فكرتك على المدير الإبداعي' }, crit: '1.1',
      need: { en: 'Choose a client and product, then answer the Creative Director (your tutor) using the Appendix A interview: the idea, the problem, and how your design solves it.', ar: 'اختر عميل ومنتج، وجاوب المدير الإبداعي (المدرب) باستخدام مقابلة الملحق A: الفكرة، والمشكلة، وكيف يحلها تصميمك.' },
      explain: { en: 'This is the discovery meeting. The tutor wants proof you understand WHY the product exists before you design anything.', ar: 'هذا اجتماع الاكتشاف. المدرب يبي يتأكد إنك فاهم ليش المنتج موجود قبل ما تصمم أي شيء.' },
      steps: [
        { en: 'Pick ONE realistic client (e.g. a dental clinic booking app). Give it a project name.', ar: 'اختر عميل واقعي واحد (مثلاً تطبيق حجز لعيادة أسنان). وسمِّ المشروع.' },
        { en: 'Write one sentence: "This product helps [users] to [goal]."', ar: 'اكتب جملة: "هذا المنتج يساعد [المستخدمين] على [الهدف]."' },
        { en: 'Describe the main problem users have today and the main feature that fixes it.', ar: 'اوصف المشكلة الأساسية اليوم، والميزة الرئيسية اللي تحلها.' },
        { en: 'Fill the Appendix A dialogue in Template A, section 1, in full sentences.', ar: 'عبِّ حوار الملحق A في Template A القسم 1، بجمل كاملة.' }
      ],
      shots: [{ en: 'Template A section 1: the completed interview (idea + problem).', ar: 'Template A القسم 1: المقابلة مكتملة (الفكرة + المشكلة).' }],
      a: { en: 'A = clear idea, deep understanding of goals, every director question answered confidently. Keep the same product name and goal in every later task.', ar: 'A = فكرة واضحة، فهم عميق للأهداف، وكل أسئلة المدير مجاوبة بثقة. واستخدم نفس اسم المنتج وهدفه في كل التاسكات اللي بعدها.' } },
    { n: 'Task 1 · 1.2', title: { en: 'Technical parameters', ar: 'المعايير التقنية' }, crit: '1.2',
      need: { en: 'Define device, input method, screen size/ratio, platform/OS and design guidelines.', ar: 'حدد الجهاز، وطريقة الإدخال، وحجم الشاشة ونسبتها، والمنصة/النظام، وإرشادات التصميم.' },
      explain: { en: 'These are the build "rules". They must match your users: a nurse on the move → phone, touch, 9:16.', ar: 'هذي "قواعد" البناء. لازم تناسب مستخدمينك: ممرضة تتحرك ← جوال، لمس، 9:16.' },
      steps: [
        { en: 'Device: mobile, tablet, desktop or kiosk, with ONE reason.', ar: 'الجهاز: جوال أو تابلت أو كمبيوتر أو كشك، مع سبب واحد.' },
        { en: 'Input: touch, mouse/keyboard, voice. Link it to button sizes (touch ≥ 44–48 px).', ar: 'الإدخال: لمس، فأرة/لوحة مفاتيح، صوت. واربطه بحجم الأزرار (اللمس ≥ 44–48 بكسل).' },
        { en: 'Screen: ratio (9:16 / 16:9) and frame size you will use in Figma (e.g. iPhone 14, 390×844).', ar: 'الشاشة: النسبة (9:16 أو 16:9) ومقاس الإطار في Figma (مثلاً iPhone 14 بمقاس 390×844).' },
        { en: 'Platform + guideline: iOS → Apple HIG, Android → Material Design, web → responsive.', ar: 'المنصة + الإرشادات: iOS ← Apple HIG، أندرويد ← Material Design، الويب ← متجاوب.' },
        { en: 'Mention one constraint (e.g. load time under 3 s, works on small screens).', ar: 'اذكر قيد واحد على الأقل (مثلاً التحميل أقل من 3 ثواني، يشتغل على الشاشات الصغيرة).' }
      ],
      shots: [{ en: 'Template A: the technical parameters answers/table.', ar: 'Template A: إجابات أو جدول المعايير التقنية.' }],
      a: { en: 'A = accurate choices AND awareness of constraints (why touch targets are big, why 9:16, which guideline).', ar: 'A = اختيارات دقيقة مع وعي بالقيود (ليش الأزرار كبيرة، ليش 9:16، أي إرشادات).' } },
    { n: 'Task 1 · 1.3', title: { en: 'Audience and user profile', ar: 'الجمهور وملف المستخدم' }, crit: '1.3',
      need: { en: 'Describe demographics, language, tech experience, accessibility needs, culture and purpose. A persona is ideal.', ar: 'اوصف الفئة العمرية واللغة والخبرة التقنية واحتياجات الوصول والثقافة والهدف. والأفضل تسوي Persona.' },
      explain: { en: 'User-centred design starts here. Every later choice (colours, font size, icons) should trace back to this profile.', ar: 'التصميم المتمركز حول المستخدم يبدأ هنا. كل قرار بعدين (الألوان، حجم الخط، الأيقونات) لازم يرجع لهذا الملف.' },
      steps: [
        { en: 'Create a persona: name, age, job, language, device, tech level (low/medium/high), goal, frustration.', ar: 'سوِّ Persona: اسم، عمر، وظيفة، لغة، جهاز، مستوى تقني (منخفض/متوسط/عالي)، هدف، مشكلة.' },
        { en: 'List 3+ accessibility features tied to real needs: high contrast, larger text, Arabic/English, icons + labels, screen-reader labels.', ar: 'اذكر 3 ميزات وصول أو أكثر مربوطة باحتياج حقيقي: تباين عالٍ، خط أكبر، عربي/إنجليزي، أيقونة مع نص، عناوين لقارئ الشاشة.' },
        { en: 'Say how each feature changes your design ("older users → 18 px body text").', ar: 'وضّح كيف كل ميزة تغيّر تصميمك ("كبار السن ← خط 18 بكسل").' }
      ],
      shots: [{ en: 'Persona card + accessibility list in Template A.', ar: 'بطاقة الـ Persona وقائمة الوصول في Template A.' }],
      a: { en: 'A = detailed demographics + tech experience + accessibility, and design choices clearly reflect them.', ar: 'A = تفاصيل الفئة والخبرة التقنية والوصول، وقرارات التصميم تعكسها بوضوح.' } },
    { n: 'Task 1 · 1.4', title: { en: 'Information architecture (content map / flowchart)', ar: 'هندسة المعلومات (خريطة محتوى / مخطط انسيابي)' }, crit: '1.4',
      need: { en: 'Draw a content map or flowchart showing how the user moves from the start screen to the main goal.', ar: 'ارسم خريطة محتوى أو مخطط انسيابي يوضح كيف يتنقل المستخدم من الشاشة الأولى للهدف الرئيسي.' },
      explain: { en: 'This is the skeleton of the product. The A criterion asks for 3 clicks or fewer to the main feature.', ar: 'هذا هيكل المنتج. معيار A يطلب 3 ضغطات أو أقل للوصول للميزة الرئيسية.' },
      steps: [
        { en: 'List every screen (Splash, Login, Home, Search, Results, Details, Confirm, Profile).', ar: 'اكتب كل الشاشات (البداية، الدخول، الرئيسية، البحث، النتائج، التفاصيل، التأكيد، الملف).' },
        { en: 'In FigJam/Lucidchart draw boxes and arrows; mark decisions (logged in? available?) with diamonds.', ar: 'في FigJam أو Lucidchart ارسم مربعات وأسهم؛ والقرارات (مسجل دخول؟ متوفر؟) بشكل معين.' },
        { en: 'Count clicks from Home to the main action and write the number on the diagram.', ar: 'احسب الضغطات من الرئيسية للفعل الأساسي واكتب الرقم على المخطط.' }
      ],
      shots: [{ en: 'Exported content map / flowchart image.', ar: 'صورة خريطة المحتوى أو المخطط بعد التصدير.' }],
      a: { en: 'A = complete, clear and logical journey, ≤ 3 clicks to the main feature.', ar: 'A = رحلة كاملة وواضحة ومنطقية، و3 ضغطات أو أقل للميزة الرئيسية.' } },
    { n: 'Task 2 · 2.1–2.2', title: { en: 'Wireframes in Figma', ar: 'المخططات الأولية (Wireframes) في Figma' }, crit: '2.1–2.2',
      need: { en: 'Low-fidelity wireframes of the main screens showing layout and components (header, footer, buttons, forms, search, navigation).', ar: 'مخططات أولية للشاشات الرئيسية توضح الترتيب والمكونات (الهيدر، الفوتر، الأزرار، النماذج، البحث، التنقل).' },
      explain: { en: 'Grey boxes only: structure before style. Each screen must match a box in your content map.', ar: 'مربعات رمادية بس: الهيكل قبل الشكل. كل شاشة لازم تطابق مربع في خريطة المحتوى.' },
      steps: [
        { en: 'Create frames at the size you chose in 1.2; add a layout grid.', ar: 'سوِّ إطارات بالمقاس اللي اخترته في 1.2؛ وأضف شبكة تخطيط (Grid).' },
        { en: 'Wireframe 5–7 key screens from your flowchart using rectangles, placeholder text and icons.', ar: 'ارسم 5 إلى 7 شاشات أساسية من المخطط بمستطيلات ونص مؤقت وأيقونات.' },
        { en: 'Label components (Header, Search bar, CTA button, Tab bar…).', ar: 'سمِّ المكونات (Header، شريط البحث، زر CTA، Tab bar…).' },
        { en: 'Under each screen write one line: how it meets the brief from Task 1.', ar: 'تحت كل شاشة اكتب سطر: كيف تحقق متطلبات Task 1.' }
      ],
      shots: [{ en: 'Figma screenshot of all wireframes side by side (Figma UI visible).', ar: 'لقطة من Figma لكل المخططات جنب بعض (مع ظهور واجهة Figma).' }],
      a: { en: 'A = clear, well-structured Figma wireframes that strongly reflect Template A section 1, components logically placed.', ar: 'A = مخططات واضحة ومنظمة في Figma تعكس بقوة القسم 1، والمكونات بمكان منطقي.' } },
    { n: 'Task 2 · 2.3–2.4', title: { en: 'Storyboard, metaphors and prototype', ar: 'الستوري بورد والاستعارات والنموذج التفاعلي' }, crit: '2.3–2.4',
      need: { en: 'A storyboard of the user completing the main task, with interface metaphors explained, plus a clickable prototype.', ar: 'ستوري بورد للمستخدم وهو يكمل المهمة الأساسية، مع شرح الاستعارات البصرية، ونموذج قابل للضغط (Prototype).' },
      explain: { en: 'Storyboard = the user\'s story screen by screen. Metaphors = familiar symbols (calendar for booking, cart, slider for filters, tabs).', ar: 'الستوري بورد = قصة المستخدم شاشة شاشة. الاستعارات = رموز مألوفة (تقويم للحجز، عربة، شريط للفلترة، تبويبات).' },
      steps: [
        { en: 'Arrange screens in order with a caption: "Sara opens the app → searches → picks a time → confirms".', ar: 'رتّب الشاشات بالترتيب مع وصف: "سارة تفتح التطبيق ← تبحث ← تختار موعد ← تأكد".' },
        { en: 'Make a table: Metaphor | Where | Why it helps the user (3–5 rows).', ar: 'سوِّ جدول: الاستعارة | مكانها | ليش تساعد المستخدم (3 إلى 5 صفوف).' },
        { en: 'In Figma Prototype mode connect buttons between screens and share the prototype link.', ar: 'في وضع Prototype في Figma اربط الأزرار بين الشاشات وانسخ رابط النموذج.' }
      ],
      shots: [{ en: 'Storyboard image, metaphor table, Figma prototype connections (blue arrows) + link.', ar: 'صورة الستوري بورد، جدول الاستعارات، روابط النموذج في Figma (الأسهم الزرقاء) والرابط.' }],
      a: { en: 'A = complete, engaging storyboard; meaningful metaphors that support tasks; a prototype submitted.', ar: 'A = ستوري بورد كامل وجذاب، استعارات لها معنى وتدعم المهام، ونموذج تفاعلي مسلَّم.' } },
    { n: 'Task 2 · 2.5', title: { en: 'Brand identity (colours, type, tone)', ar: 'هوية العلامة (الألوان والخط والنبرة)' }, crit: '2.5',
      need: { en: 'A style guide: colour palette with exact HEX codes, typography scale, and tone of voice, each justified.', ar: 'دليل أسلوب: لوحة ألوان بأكواد HEX دقيقة، وأحجام الخطوط، ونبرة الكلام، وكل اختيار مبرر.' },
      explain: { en: 'Brand must fit the client and users (bank = blue/trust, kids = bright/playful) and pass contrast checks.', ar: 'الهوية لازم تناسب العميل والمستخدمين (بنك = أزرق/ثقة، أطفال = ألوان زاهية/مرحة) وتنجح في فحص التباين.' },
      steps: [
        { en: 'Pick primary, secondary, background, text, success and error colours with HEX codes.', ar: 'اختر الألوان: الأساسي والثانوي والخلفية والنص والنجاح والخطأ، بأكواد HEX.' },
        { en: 'Check text/background contrast (WebAIM): aim for 4.5:1 or higher; note the ratio.', ar: 'افحص تباين النص مع الخلفية (WebAIM): الهدف 4.5:1 أو أعلى؛ واكتب النسبة.' },
        { en: 'Typography: font family + sizes for H1, H2, body, caption.', ar: 'الخطوط: نوع الخط + أحجام H1 وH2 والنص والتعليق.' },
        { en: 'Tone of voice: 3 adjectives + one example button text / message.', ar: 'النبرة: 3 صفات + مثال لنص زر أو رسالة.' }
      ],
      shots: [{ en: 'Style guide frame in Figma + contrast checker result.', ar: 'إطار دليل الأسلوب في Figma + نتيجة فحص التباين.' }],
      a: { en: 'A = accurate HEX codes, consistent typography, tone clearly defined and aligned with the brand.', ar: 'A = أكواد HEX دقيقة، خطوط متسقة، ونبرة واضحة ومتوافقة مع الهوية.' } },
    { n: 'Task 2 · 2.6–2.7', title: { en: 'High-fidelity designs + design specification', ar: 'التصاميم النهائية + مواصفات التصميم' }, crit: '2.6–2.7',
      need: { en: 'Final detailed screens and a developer-ready specification: measurements, colours, component states (default/hover/click/disabled), accessibility notes, load time.', ar: 'شاشات نهائية مفصلة ومواصفات جاهزة للمطورين: المقاسات، الألوان، حالات المكونات (عادي/تمرير/ضغط/معطّل)، ملاحظات الوصول، وقت التحميل.' },
      explain: { en: 'Developers must be able to build it without asking you anything.', ar: 'المطور لازم يقدر يبنيه بدون ما يسألك أي شيء.' },
      steps: [
        { en: 'Apply your style guide to the wireframes to create hi-fi screens.', ar: 'طبّق دليل الأسلوب على المخططات عشان تطلع الشاشات النهائية.' },
        { en: 'Make a component states table: Button | Default | Hover | Pressed | Disabled (colours + sizes).', ar: 'سوِّ جدول حالات المكونات: الزر | عادي | تمرير | ضغط | معطّل (ألوان ومقاسات).' },
        { en: 'Add specs: spacing (8 px grid), corner radius, font sizes, icon sizes, min touch target.', ar: 'أضف المواصفات: المسافات (شبكة 8 بكسل)، انحناء الزوايا، أحجام الخط والأيقونات، أقل حجم لمنطقة اللمس.' },
        { en: 'Accessibility notes: alt text, contrast, focus order, labels on icons.', ar: 'ملاحظات الوصول: النص البديل، التباين، ترتيب التركيز، عناوين للأيقونات.' }
      ],
      shots: [{ en: 'Hi-fi screens + the spec sheet/states table.', ar: 'الشاشات النهائية + جدول المواصفات والحالات.' }],
      a: { en: 'A = professional, detailed designs; complete specs with hover/click states, accessibility notes and developer instructions.', ar: 'A = تصاميم احترافية ومفصلة؛ مواصفات كاملة فيها حالات hover/click وملاحظات الوصول وتعليمات للمطور.' } },
    { n: 'Task 3 · 3.1–3.2', title: { en: 'Test plan and user testing', ar: 'خطة الاختبار واختبار المستخدم' }, crit: '3.1–3.2',
      need: { en: 'Write a test plan (objectives, participants, tasks, success measures) and test with a real user using the interview script, recording observations.', ar: 'اكتب خطة اختبار (الأهداف، المشاركين، المهام، مقاييس النجاح) واختبر مع مستخدم حقيقي باستخدام سكربت المقابلة وسجّل الملاحظات.' },
      explain: { en: 'Choose a tester who matches your persona. Use open and closed questions and watch where they hesitate.', ar: 'اختر مختبِر يشبه الـ Persona. استخدم أسئلة مفتوحة ومغلقة ولاحظ وين يتردد.' },
      steps: [
        { en: 'Objectives: e.g. "User books an appointment in under 60 seconds."', ar: 'الأهداف: مثلاً "المستخدم يحجز موعد في أقل من 60 ثانية."' },
        { en: '3 task scenarios + success criteria (time, errors, completed yes/no).', ar: '3 سيناريوهات مهام + معايير النجاح (الوقت، الأخطاء، اكتمل نعم/لا).' },
        { en: 'Run the test on the prototype; write what the user did, said and where they got stuck.', ar: 'شغّل الاختبار على النموذج؛ واكتب وش سوى المستخدم ووش قال ووين تعلّق.' },
        { en: 'Ask 2 open + 2 closed questions and record the answers.', ar: 'اسأل سؤالين مفتوحين وسؤالين مغلقين وسجّل الإجابات.' }
      ],
      shots: [{ en: 'Completed test plan + observation notes table.', ar: 'خطة الاختبار مكتملة + جدول الملاحظات.' }],
      a: { en: 'A = full test plan, interview script used properly, detailed user feedback recorded.', ar: 'A = خطة اختبار كاملة، سكربت المقابلة مستخدم صح، وملاحظات المستخدم مسجلة بالتفصيل.' } },
    { n: 'Task 3 · 3.3–3.4', title: { en: 'Iteration: fix the weaknesses', ar: 'التحسين: أصلح نقاط الضعف' }, crit: '3.3–3.4',
      need: { en: 'Develop alternative solutions for each problem found and update the IA and design specification.', ar: 'طوّر حلول بديلة لكل مشكلة ظهرت، وحدّث هندسة المعلومات ومواصفات التصميم.' },
      explain: { en: 'Show you listened: problem → evidence → change → result. Before/after makes it obvious.', ar: 'أثبت إنك سمعت: المشكلة ← الدليل ← التعديل ← النتيجة. صورة قبل/بعد توضحها.' },
      steps: [
        { en: 'Make a Redesign log: Issue | User evidence | Alternative options | Chosen fix | Why.', ar: 'سوِّ سجل تعديل: المشكلة | دليل المستخدم | البدائل | الحل المختار | السبب.' },
        { en: 'Put before and after screenshots next to each other.', ar: 'حط صورة قبل وبعد جنب بعض.' },
        { en: 'Update the flowchart / specs where the change affects them (mark "v2").', ar: 'حدّث المخطط أو المواصفات إذا تأثرت بالتعديل (واكتب "v2").' }
      ],
      shots: [{ en: 'Redesign log + before/after images + updated spec.', ar: 'سجل التعديل + صور قبل/بعد + المواصفات المحدثة.' }],
      a: { en: 'A = every issue addressed with alternatives and clear reasoning; specs updated.', ar: 'A = كل مشكلة لها بدائل وتبرير واضح، والمواصفات محدثة.' } },
    { n: 'Task 3 · 3.5', title: { en: 'Final sign-off', ar: 'الاعتماد النهائي' }, crit: '3.5',
      need: { en: 'Present the final polished design to the "Ignite team" (tutor) and record their agreement.', ar: 'اعرض التصميم النهائي على "فريق Ignite" (المدرب) وسجّل موافقتهم.' },
      explain: { en: 'Approval needs evidence: who approved, when, which version.', ar: 'الاعتماد يحتاج دليل: من اعتمد، ومتى، وأي إصدار.' },
      steps: [
        { en: 'Prepare a short presentation: problem, users, final screens, test results, changes made.', ar: 'جهّز عرض قصير: المشكلة، المستخدمين، الشاشات النهائية، نتائج الاختبار، التعديلات.' },
        { en: 'Present it; ask the tutor to confirm approval (email, comment or signed form).', ar: 'اعرضه؛ واطلب من المدرب تأكيد الاعتماد (إيميل أو تعليق أو نموذج موقّع).' },
        { en: 'Add the approval evidence to the document with the version name.', ar: 'أضف دليل الاعتماد للملف مع اسم الإصدار.' }
      ],
      shots: [{ en: 'Final screens + approval evidence.', ar: 'الشاشات النهائية + دليل الاعتماد.' }],
      a: { en: 'A = polished, complete design, confidently presented, all feedback addressed, ready for approval.', ar: 'A = تصميم مصقول وكامل، معروض بثقة، كل الملاحظات معالجة، وجاهز للاعتماد.' } }
  ]
};
