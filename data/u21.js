window.STUDY = window.STUDY || { units: [] };
STUDY.units.push({
  id: "u21", num: 21,
  title: { en: "Document Applications", ar: "توثيق التطبيقات" },
  intro: {
    en: "Document functions and types, formats and online help, requirements and scope, templates and style guides, plain English, JavaDoc and JavaHelp, readability and accessibility, review, approval and publication.",
    ar: "وظائف الوثائق وأنواعها، الصيغ والمساعدة الإلكترونية، المتطلبات والنطاق، القوالب وأدلة الأسلوب، اللغة الواضحة، JavaDoc وJavaHelp، سهولة القراءة والوصول، المراجعة والاعتماد والنشر."
  },
  klos: [
    { en: "KLO1 Document editing: functions, types, formats, online help", ar: "KLO1 تحرير الوثائق: الوظائف والأنواع والصيغ والمساعدة الإلكترونية" },
    { en: "KLO2 Comments: JavaDoc syntax, @param/@return/@throws, JavaHelp", ar: "KLO2 التعليقات: صياغة JavaDoc والوسوم وJavaHelp" },
    { en: "KLO3 Usability: readability, accessibility, target audiences", ar: "KLO3 سهولة الاستخدام: القراءة والوصول والجمهور المستهدف" },
    { en: "KLO4 Reviewing: workshops, surveys, online forms, comments; approval and publication", ar: "KLO4 المراجعة: ورش العمل والاستبيانات والنماذج والتعليقات؛ الاعتماد والنشر" }
  ],
  keywords: [
    { t: "Software documentation", lv: 1, en: "Written or visual information explaining a product's requirements, design, code, testing, use or maintenance.", ar: "معلومات مكتوبة أو مرئية تشرح متطلبات المنتج أو تصميمه أو كوده أو اختباره أو استخدامه أو صيانته." },
    { t: "Proposal", lv: 1, en: "Presents the software idea, its purpose and the problem it solves. Reader: client/decision-maker.", ar: "يعرض فكرة البرنامج وهدفه والمشكلة التي يحلها. القارئ: العميل أو صاحب القرار." },
    { t: "Feasibility study", lv: 2, en: "Checks if the project is practical (cost, resources, time) and should go ahead.", ar: "يتحقق هل المشروع عملي (تكلفة، موارد، وقت) وهل نكمل فيه." },
    { t: "Requirements analysis", lv: 2, en: "Explains what the business and users need the system to do.", ar: "يشرح ما يحتاجه العمل والمستخدمون من النظام." },
    { t: "Design document", lv: 2, en: "Technical designs (database, interface, diagrams) needed before coding.", ar: "التصاميم التقنية (قاعدة البيانات، الواجهة، المخططات) المطلوبة قبل البرمجة." },
    { t: "Test document", lv: 2, en: "Records test steps, expected and actual results, defects and evidence.", ar: "يسجل خطوات الاختبار والنتائج المتوقعة والفعلية والأخطاء والأدلة." },
    { t: "User guide / manual", lv: 1, en: "Step-by-step instructions for people who use the software.", ar: "تعليمات خطوة بخطوة لمن يستخدم البرنامج." },
    { t: "Maintenance manual", lv: 3, en: "Supports maintenance staff with procedures and diagnostics.", ar: "يدعم فريق الصيانة بالإجراءات والتشخيص." },
    { t: "Formatting vs file format", lv: 2, en: "Formatting = how content LOOKS (font, spacing). File format = how it is STORED (.docx, .pdf, .html).", ar: "التنسيق = شكل المحتوى (خط، مسافات). صيغة الملف = طريقة الحفظ (.docx و.pdf و.html)." },
    { t: "DOCX / PDF / HTML", lv: 1, en: "DOCX = editable draft. PDF = fixed layout for printing/submission. HTML = linked web help.", ar: "DOCX = مسودة قابلة للتعديل. PDF = تخطيط ثابت للطباعة والتسليم. HTML = مساعدة ويب مترابطة." },
    { t: "Online help", lv: 2, en: "Short, searchable, topic-based help delivered digitally inside or beside the app.", ar: "مساعدة قصيرة قابلة للبحث مقسمة لمواضيع، تُقدّم رقمياً داخل التطبيق أو بجانبه." },
    { t: "Context-sensitive help", lv: 2, en: "Help that opens the topic related to the current screen (Help on the payment screen → payment topic).", ar: "مساعدة تفتح الموضوع المرتبط بالشاشة الحالية (مساعدة في شاشة الدفع ← موضوع الدفع)." },
    { t: "Client need", lv: 2, en: "The problem or result the client wants: 'patients need help booking'.", ar: "المشكلة أو النتيجة التي يريدها العميل: 'المرضى يحتاجون مساعدة في الحجز'." },
    { t: "Documentation requirement", lv: 2, en: "A specific, checkable instruction for the document: what, why, who, how, when.", ar: "تعليمات محددة قابلة للتحقق للوثيقة: ماذا، لماذا، لمن، كيف، متى." },
    { t: "Scope of work", lv: 2, en: "Agreed boundary: deliverables, in scope, out of scope, limits (dates, reviews).", ar: "الحدود المتفق عليها: المخرجات، داخل النطاق، خارج النطاق، القيود (التواريخ والمراجعات)." },
    { t: "Template", lv: 2, en: "A reusable starting file with fixed parts, layouts, styles and placeholders.", ar: "ملف بداية قابل لإعادة الاستخدام فيه أجزاء ثابتة وتخطيطات وأنماط وأماكن محجوزة." },
    { t: "Document structure", lv: 2, en: "The planned order and hierarchy of sections and headings.", ar: "الترتيب المخطط والتسلسل الهرمي للأقسام والعناوين." },
    { t: "Style", lv: 2, en: "The appearance of ONE element (Heading 1 = 24 pt navy).", ar: "مظهر عنصر واحد (العنوان 1 = 24 نقطة كحلي)." },
    { t: "Style guide", lv: 3, en: "Recorded rules shared by writers: brand, typography, language, procedures, images, file names.", ar: "قواعد مكتوبة يتشاركها الكتّاب: الهوية، الخطوط، اللغة، الإجراءات، الصور، أسماء الملفات." },
    { t: "Technical writing", lv: 2, en: "Explains a product or task so a specific reader can understand and act correctly.", ar: "تشرح منتجاً أو مهمة بحيث يفهم قارئ محدد ويتصرف بشكل صحيح." },
    { t: "Plain English", lv: 1, en: "Familiar words, direct sentences, clear order, understood the first time ('use' not 'utilise').", ar: "كلمات مألوفة وجمل مباشرة وترتيب واضح، تُفهم من أول مرة ('use' بدل 'utilise')." },
    { t: "Active voice", lv: 2, en: "Shows who does the action: 'Check the details, then select Confirm.'", ar: "يوضح من يقوم بالفعل: 'تحقق من التفاصيل ثم اختر تأكيد'." },
    { t: "Warning / caution / note", lv: 3, en: "Warning = serious risk to people/data. Caution = risk of loss or unwanted result. Note = helpful extra info.", ar: "تحذير = خطر جدي على الناس أو البيانات. تنبيه = خطر فقد أو نتيجة غير مرغوبة. ملاحظة = معلومة إضافية مفيدة." },
    { t: "JavaDoc", lv: 2, en: "Standard comment format /** ... */ placed above a class/method; the javadoc tool generates HTML API reference pages.", ar: "صيغة تعليق قياسية /** ... */ توضع فوق الصنف أو الدالة؛ وأداة javadoc تولّد صفحات مرجعية HTML." },
    { t: "@param", lv: 2, en: "Describes an INPUT parameter and its allowed values.", ar: "يصف معامل الإدخال وقيمه المسموحة." },
    { t: "@return", lv: 2, en: "Describes the OUTPUT the method returns (void methods have none).", ar: "يصف المخرج الذي ترجعه الدالة (دوال void ما لها)." },
    { t: "@throws", lv: 3, en: "Names an exception and when it happens.", ar: "يذكر الاستثناء ومتى يحدث." },
    { t: "@author / @version / @see", lv: 3, en: "Author name, version, and a link to a related reference.", ar: "اسم الكاتب، الإصدار، ورابط لمرجع ذي صلة." },
    { t: "JavaHelp", lv: 3, en: "Electronic help viewer for Java apps: HTML topics + XML config (HelpSet, map of topic ID → file); contents, index, search.", ar: "عارض مساعدة إلكتروني لتطبيقات جافا: مواضيع HTML + إعدادات XML (HelpSet وخريطة معرف الموضوع ← الملف)؛ فهرس محتويات وفهرس كلمات وبحث." },
    { t: "Parameter vs argument", lv: 3, en: "Parameter = the input NAME (quantity). Argument = the VALUE supplied (3).", ar: "المعامل = اسم المدخل (quantity). الوسيط = القيمة المرسلة (3)." },
    { t: "Readability", lv: 2, en: "How easily a reader can read, understand and act on text.", ar: "مدى سهولة قراءة النص وفهمه والتصرف بناءً عليه." },
    { t: "Accessibility", lv: 2, en: "People with different abilities can perceive, navigate and use the content (alt text, captions, contrast, headings).", ar: "الأشخاص بقدرات مختلفة يقدرون يدركون المحتوى ويتنقلون فيه ويستخدمونه (نص بديل، ترجمة، تباين، عناوين)." },
    { t: "Target audience", lv: 1, en: "The intended group of readers (end users, developers, testers, stakeholders).", ar: "مجموعة القراء المقصودين (مستخدمون، مطورون، مختبرون، أصحاب مصلحة)." },
    { t: "Readability score", lv: 3, en: "Estimate of text difficulty: Flesch Reading Ease, Gunning Fog, Hemingway, Word statistics.", ar: "تقدير لصعوبة النص: Flesch وGunning Fog وHemingway وإحصاءات وورد." },
    { t: "Document review", lv: 2, en: "A planned check for accuracy, clarity, consistency and compliance.", ar: "فحص مخطط للدقة والوضوح والاتساق والالتزام." },
    { t: "Workshop", lv: 3, en: "Interactive small-group review to explore problems together.", ar: "مراجعة تفاعلية مع مجموعة صغيرة لاستكشاف المشاكل معاً." },
    { t: "Survey", lv: 3, en: "Questions that collect comparable answers from many respondents.", ar: "أسئلة تجمع إجابات قابلة للمقارنة من عدد كبير." },
    { t: "Document comment", lv: 3, en: "Feedback attached to a specific word, image or page.", ar: "ملاحظة مربوطة بكلمة أو صورة أو صفحة محددة." },
    { t: "Change log", lv: 3, en: "Records version, date, changes and author.", ar: "يسجل الإصدار والتاريخ والتغييرات والكاتب." },
    { t: "Approval", lv: 3, en: "An authorised person confirms a SPECIFIC version meets the standard.", ar: "شخص مخوّل يؤكد أن إصداراً محدداً يحقق المعيار." },
    { t: "Publication", lv: 3, en: "Making the approved document available in the correct format, channel and location.", ar: "إتاحة الوثيقة المعتمدة بالصيغة والقناة والمكان الصحيح." }
  ],
  topics: [
    { lv: 1, t: { en: "Why we document and which type to choose", ar: "ليش نوثق وأي نوع نختار" },
      en: "Functions: explain, guide, record, standardise, support (training/maintenance), comply. Choose the type by PURPOSE + READER + PROJECT STAGE + EVIDENCE.",
      ar: "الوظائف: الشرح، التوجيه، التسجيل، التوحيد، الدعم (التدريب والصيانة)، الالتزام. اختر النوع حسب الهدف + القارئ + مرحلة المشروع + الأدلة.",
      more: { en: "Lifecycle map: BEFORE build = proposal, feasibility study, requirements analysis. DESIGN & BUILD = design document, source code/comments. CHECK = test plan, test cases, test report. RELEASE & USE = user guide, online help, licence, marketing. Clinic examples: manager deciding if affordable → feasibility study; developers before coding → design document; patients booking → user guide; testers → test document. Function ≠ type: 'guide a user' is a function; 'user guide' is a type.",
              ar: "خريطة دورة الحياة: قبل البناء = المقترح، دراسة الجدوى، تحليل المتطلبات. التصميم والبناء = وثيقة التصميم، الكود والتعليقات. الفحص = خطة الاختبار، حالات الاختبار، تقرير الاختبار. الإطلاق والاستخدام = دليل المستخدم، المساعدة الإلكترونية، الترخيص، التسويق. أمثلة العيادة: المدير يقرر هل التكلفة مناسبة ← دراسة جدوى؛ المطورون قبل البرمجة ← وثيقة تصميم؛ المرضى يحجزون ← دليل مستخدم؛ المختبرون ← وثيقة اختبار. الوظيفة ليست النوع: 'توجيه المستخدم' وظيفة، و'دليل المستخدم' نوع." } },
    { lv: 1, t: { en: "Formats, layout and online help", ar: "الصيغ والتنسيق والمساعدة الإلكترونية" },
      en: "Formatting changes appearance; file format changes how it is saved. DOCX to edit, PDF to print/submit with fixed layout, HTML for linked browser help. Online help is fast, always available and lowers support calls.",
      ar: "التنسيق يغيّر الشكل؛ وصيغة الملف تغيّر طريقة الحفظ. DOCX للتعديل، وPDF للطباعة والتسليم بتخطيط ثابت، وHTML للمساعدة المترابطة في المتصفح. المساعدة الإلكترونية سريعة ومتاحة دائماً وتقلل اتصالات الدعم.",
      more: { en: "Good formatting = clarity, consistency, navigation, professionalism. Fix a messy page: clear heading ('Reset your password'), readable size, numbered steps (one action each), meaningful link text instead of 'Click here'. Good online help is tailored, current, searchable and actionable. Need both print and web? Provide PDF + HTML.",
              ar: "التنسيق الجيد = وضوح، اتساق، سهولة تنقل، احترافية. لإصلاح صفحة فوضوية: عنوان واضح ('أعد تعيين كلمة المرور')، خط مقروء، خطوات مرقمة (فعل واحد لكل خطوة)، ونص رابط واضح بدل 'اضغط هنا'. المساعدة الجيدة: مخصصة، محدثة، قابلة للبحث، وعملية. تحتاج طباعة وويب؟ قدّم PDF وHTML معاً." } },
    { lv: 2, t: { en: "Need vs requirement vs scope", ar: "الاحتياج مقابل المتطلب مقابل النطاق" },
      en: "Need = the result the client wants. Requirement = specific, checkable instruction for the document. Scope = agreed boundary (in/out). Method: collect → identify → interpret → check gaps → confirm.",
      ar: "الاحتياج = النتيجة التي يريدها العميل. المتطلب = تعليمات محددة قابلة للتحقق للوثيقة. النطاق = الحدود المتفق عليها (داخل/خارج). الطريقة: اجمع ← حدّد ← فسّر ← ابحث عن الثغرات ← أكّد.",
      more: { en: "Vague: 'Make a simple guide quickly.' Checkable: 'Create a 6-page PDF patient guide by 30 September covering registration, booking and cancellation, using the clinic template and plain English.' Sources: client brief, interview, application review, standards, existing documents. New request (video + Arabic translation) outside scope? Do not promise or reject: assess work, resources and deadline, then send an updated scope for approval. Identify = find, Define = write boundaries, Confirm = obtain agreement.",
              ar: "مبهم: 'سوّ دليل بسيط بسرعة'. قابل للتحقق: 'أنشئ دليل PDF للمرضى من 6 صفحات قبل 30 سبتمبر يشمل التسجيل والحجز والإلغاء، بقالب العيادة ولغة واضحة'. المصادر: طلب العميل، المقابلة، مراجعة التطبيق، المعايير، الوثائق السابقة. طلب جديد (فيديو + ترجمة عربية) خارج النطاق؟ لا توعد ولا ترفض: قيّم العمل والموارد والموعد، ثم أرسل نطاقاً محدثاً للاعتماد. Identify = اكتشف، Define = اكتب الحدود، Confirm = احصل على الموافقة." } },
    { lv: 2, t: { en: "Template, structure, style, style guide", ar: "القالب والهيكل والنمط ودليل الأسلوب" },
      en: "Template = the file. Structure = the order. Style = the appearance of one element. Style guide = the rules. Templates give consistency, speed, completeness, quality control, teamwork and version control.",
      ar: "القالب = الملف. الهيكل = الترتيب. النمط = مظهر عنصر واحد. دليل الأسلوب = القواعد. القوالب تعطي اتساقاً وسرعة واكتمالاً وضبط جودة وعمل جماعي وضبط إصدارات.",
      more: { en: "User-guide structure: cover/version → contents → introduction (purpose/audience) → before you start → task procedures → troubleshooting → contact support. 'Before you start' comes before 'How to book' because the reader must prepare first. Heading levels show meaning, not decoration (H1 section, H2 topic, H3 smaller point). Placeholder text must be replaced before publishing. File naming example: Clinic_UserGuide_EN_v1.0.pdf (major.minor).",
              ar: "هيكل دليل المستخدم: الغلاف والإصدار ← المحتويات ← المقدمة (الهدف والجمهور) ← قبل أن تبدأ ← خطوات المهام ← حل المشاكل ← التواصل مع الدعم. 'قبل أن تبدأ' تأتي قبل 'كيف تحجز' لأن القارئ لازم يجهز أولاً. مستويات العناوين تعني معنى وليست زينة (H1 قسم، H2 موضوع، H3 نقطة أصغر). النص المحجوز لازم يُستبدل قبل النشر. مثال تسمية الملف: Clinic_UserGuide_EN_v1.0.pdf (رئيسي.فرعي)." } },
    { lv: 2, t: { en: "Technical writing and plain English", ar: "الكتابة التقنية واللغة الواضحة" },
      en: "Six features: accurate, direct, concise, consistent, scannable, complete. Use action verbs (Open, Select, Enter), one main action per step, exact screen labels, active voice, positive instructions, one approved term per feature.",
      ar: "ست صفات: دقيقة، مباشرة، مختصرة، متسقة، سهلة المسح، مكتملة. استخدم أفعالاً (Open وSelect وEnter)، وفعلاً رئيسياً واحداً لكل خطوة، وأسماء الأزرار كما في الشاشة، وصيغة المعلوم، وتعليمات إيجابية، ومصطلحاً واحداً لكل ميزة.",
      more: { en: "Swap list: utilise → use, commence → start, subsequent to → after, in the event that → if, approximately → about, a sufficient number of → enough. Do not mix 'Book appointment', 'Create booking', 'Reserve a visit' for one button. Tone: not too formal ('furnish credentials'), not too casual ('pop in your details'). Accuracy before simplicity: never remove information that prevents an error. Avoid 'probably', 'soon', 'try again many times'.",
              ar: "قائمة الاستبدال: utilise ← use، commence ← start، subsequent to ← after، in the event that ← if، approximately ← about، a sufficient number of ← enough. لا تخلط بين 'Book appointment' و'Create booking' و'Reserve a visit' لزر واحد. النبرة: لا رسمية زيادة ولا عامية زيادة. الدقة قبل البساطة: لا تحذف معلومة تمنع خطأ. تجنب 'probably' و'soon' و'حاول مرات كثيرة'." } },
    { lv: 3, t: { en: "JavaDoc comments and tags", ar: "تعليقات JavaDoc والوسوم" },
      en: "Three comment forms: // single line, /* multi-line */, /** JavaDoc */. JavaDoc goes directly above the class or method. @param = what goes in, @return = what comes back, @throws = what can go wrong.",
      ar: "ثلاثة أشكال للتعليق: // سطر واحد، /* عدة أسطر */، /** JavaDoc */. يوضع JavaDoc مباشرة فوق الصنف أو الدالة. @param = ما يدخل، @return = ما يرجع، @throws = ما الذي قد يحدث خطأ.",
      more: { en: "The javadoc tool (in the JDK) reads the comments and generates linked HTML API pages: javadoc -d docs TicketCalculator.java → open docs/index.html. Readers: programmers. Changing a comment does NOT change the code: if code multiplies by 50 and the comment says 60, the comment is wrong. Tags must match the code: @param must use the real parameter name. The @throws tag does not enforce the rule; the code must contain the check. JavaDoc sources: source files, package comments, overview comments, other files (images).",
              ar: "أداة javadoc (داخل JDK) تقرأ التعليقات وتولد صفحات HTML مرجعية مترابطة: javadoc -d docs TicketCalculator.java ← افتح docs/index.html. القراء: المبرمجون. تغيير التعليق لا يغير الكود: إذا الكود يضرب في 50 والتعليق يقول 60 فالتعليق غلط. الوسوم لازم تطابق الكود: @param يستخدم اسم المعامل الحقيقي. وسم @throws ما يطبق القاعدة؛ الكود لازم يحتوي الفحص. مصادر JavaDoc: ملفات الكود، تعليقات الحزمة، تعليق النظرة العامة، ملفات أخرى (صور)." } },
    { lv: 3, t: { en: "JavaHelp and HTML comments", ar: "JavaHelp وتعليقات HTML" },
      en: "JavaDoc = reference for programmers. JavaHelp = help viewer for application USERS. JavaHelp uses HTML topics (the readable text) and XML configuration (HelpSet + map linking topic ID to file). The viewer offers contents, index and search.",
      ar: "JavaDoc = مرجع للمبرمجين. JavaHelp = عارض مساعدة لمستخدمي التطبيق. JavaHelp يستخدم مواضيع HTML (النص المقروء) وإعدادات XML (HelpSet + خريطة تربط معرف الموضوع بالملف). العارض فيه فهرس محتويات وفهرس كلمات وبحث.",
      more: { en: "Map line: <mapID target=\"ticket_price\" url=\"booking-help.html\" />. Context-sensitive flow: user on ticket screen presses Help → app requests ticket_price → map finds booking-help.html → viewer shows it. HTML comments <!-- ... --> are not displayed by the browser; they explain code to readers. Good comment explains purpose ('Opens the ticket-price help page'), weak comment just says 'A link'. Never put passwords in comments.",
              ar: "سطر الخريطة: <mapID target=\"ticket_price\" url=\"booking-help.html\" />. مسار المساعدة الحساسة للسياق: المستخدم في شاشة التذاكر يضغط مساعدة ← التطبيق يطلب ticket_price ← الخريطة تلقى booking-help.html ← العارض يعرضه. تعليقات HTML <!-- ... --> ما يعرضها المتصفح؛ تشرح الكود للقارئ. التعليق الجيد يشرح الهدف ('يفتح صفحة مساعدة سعر التذكرة')، والضعيف يقول 'رابط' بس. لا تحط كلمات مرور في التعليقات." } },
    { lv: 3, t: { en: "Readability, accessibility and audiences", ar: "سهولة القراءة والوصول والجمهور" },
      en: "Readability: plain words, short sentences, headings, numbered steps, important info first. Accessibility: alt text, captions/transcripts, real headings and lists, meaningful links, contrast, never colour alone. Audience: end users (steps, screenshots), developers (code, APIs), testers (expected results, defects), stakeholders (outcomes, risks).",
      ar: "سهولة القراءة: كلمات بسيطة، جمل قصيرة، عناوين، خطوات مرقمة، الأهم أولاً. الوصول: نص بديل، ترجمة ونصوص للوسائط، عناوين وقوائم حقيقية، روابط واضحة، تباين، ولا تعتمد على اللون وحده. الجمهور: المستخدم (خطوات ولقطات)، المطور (كود وAPI)، المختبر (نتائج متوقعة وأخطاء)، أصحاب المصلحة (نتائج ومخاطر).",
      more: { en: "WCAG AA contrast: 4.5:1 normal text, 3:1 large text. Informative image → descriptive alt text ('Order details with the Track order control below the delivery address'); decorative image → mark as decorative; never use a file name like screenshot.png. 'Authenticate against the endpoint before initiating the transaction' → 'Sign in before you place the order.' Readability scores estimate difficulty; they don't measure intelligence, so also test with a real reader. Trap: readability ≠ accessibility.",
              ar: "تباين WCAG AA: 4.5:1 للنص العادي و3:1 للنص الكبير. صورة معلوماتية ← نص بديل وصفي؛ صورة زخرفية ← علّمها زخرفية؛ لا تستخدم اسم ملف مثل screenshot.png. 'Authenticate against the endpoint...' ← 'سجّل دخولك قبل ما تطلب'. مقاييس القراءة تقدّر الصعوبة ولا تقيس الذكاء، فاختبر مع قارئ حقيقي. فخ: سهولة القراءة ليست هي الوصول." } },
    { lv: 4, t: { en: "Review, feedback and editing", ar: "المراجعة والملاحظات والتعديل" },
      en: "Review checks accuracy, clarity, consistency, compliance. Process: plan → check → record → edit → recheck. Reviewers: author, technical reviewer, target user, editor/approver. Feedback methods: workshop (explore together), survey (comparable ratings from many), online form (structured storage), document comments (specific location).",
      ar: "المراجعة تفحص الدقة والوضوح والاتساق والالتزام. العملية: خطط ← افحص ← سجّل ← عدّل ← أعد الفحص. المراجعون: الكاتب، المراجع التقني، المستخدم المستهدف، المحرر أو المعتمد. طرق جمع الملاحظات: ورشة عمل (استكشاف جماعي)، استبيان (تقييمات قابلة للمقارنة من كثيرين)، نموذج إلكتروني (تخزين منظم)، تعليقات الوثيقة (مكان محدد).",
      more: { en: "Proofreading = spelling/grammar only; review is more. Useful feedback names location + problem + reason + action ('Step 3 says Login but the screen says Sign in; update Figure 4'). Analyse before editing: group, prioritise, decide. Priority: HIGH = wrong info, broken link, inaccessible, task blocked; MEDIUM = unclear wording, inconsistent terms; LOW = spacing, style preference. Versions: V1 = first draft kept unchanged; V2 = after valid feedback; Final = approved. Survey questions: one idea per question, neutral wording.",
              ar: "التدقيق اللغوي = إملاء وقواعد فقط؛ المراجعة أشمل. الملاحظة المفيدة تذكر المكان + المشكلة + السبب + الإجراء. حلّل قبل التعديل: جمّع، رتّب الأولويات، قرّر. الأولوية: عالية = معلومة غلط، رابط مكسور، غير متاح، مهمة متوقفة؛ متوسطة = صياغة غير واضحة، مصطلحات غير متسقة؛ منخفضة = مسافات وتفضيلات شكلية. الإصدارات: V1 = المسودة الأولى تبقى كما هي؛ V2 = بعد الملاحظات الصحيحة؛ Final = المعتمد. أسئلة الاستبيان: فكرة وحدة لكل سؤال وصياغة محايدة." } },
    { lv: 4, t: { en: "Approval and publication", ar: "الاعتماد والنشر" },
      en: "Review finds issues; approval is an authorised person confirming a SPECIFIC version is ready. Publication makes the approved version available in the right format and channel. Workflow: check → submit → approve → prepare (export, compare, name) → share.",
      ar: "المراجعة تكتشف المشاكل؛ والاعتماد هو تأكيد شخص مخوّل أن إصداراً محدداً جاهز. النشر يتيح الإصدار المعتمد بالصيغة والقناة الصحيحة. التسلسل: افحص ← قدّم ← اعتمد ← جهّز (تصدير، مقارنة، تسمية) ← شارك.",
      more: { en: "Best approval evidence: an email naming the exact version, approver, date and decision, not 'Final' in a file name. If the PDF was exported from V1 but V2 was approved, export a new PDF from V2 and compare before publishing. Before publishing a PDF: page order, images, captions, links, no comments/tracked changes/placeholders, matches approved source. CBT method: identify stage, reader, purpose, then the keyword BEST/FIRST/MOST suitable; eliminate options that skip review, approval or evidence.",
              ar: "أفضل دليل اعتماد: إيميل يذكر الإصدار بالضبط والمعتمد والتاريخ والقرار، وليس كلمة 'Final' في اسم الملف. إذا الـ PDF مصدّر من V1 والمعتمد V2، صدّر PDF جديد من V2 وقارن قبل النشر. قبل نشر PDF: ترتيب الصفحات، الصور، العناوين التوضيحية، الروابط، بدون تعليقات أو تتبع تغييرات أو نص محجوز، ومطابق للمصدر المعتمد. طريقة الاختبار: حدد المرحلة والقارئ والهدف، ثم الكلمة المفتاحية BEST أو FIRST أو MOST suitable، واستبعد الخيارات اللي تتجاوز المراجعة أو الاعتماد أو الأدلة." } }
  ],
  code: [
    { title: { en: "JavaDoc on a method (TicketCalculator)", ar: "JavaDoc على دالة (TicketCalculator)" }, lang: "java",
      src: `/**
 * Calculates the total ticket price.
 * @param quantity number of tickets, at least 1
 * @return total price in SAR
 * @throws IllegalArgumentException if quantity is less than 1
 */
public int calculateTotal(int quantity) {
    if (quantity < 1) {
        throw new IllegalArgumentException("Choose at least one ticket");
    }
    // Each ticket costs 50 SAR.
    return quantity * 50;
}`,
      lines: [
        { n: "1", en: "/** opens a JavaDoc comment; it sits directly above the method.", ar: "/** يفتح تعليق JavaDoc؛ ويكون مباشرة فوق الدالة." },
        { n: "2", en: "Summary sentence: the method's job.", ar: "جملة الملخص: وظيفة الدالة." },
        { n: "3", en: "@param: the input name 'quantity' and allowed values.", ar: "@param: اسم المدخل quantity وقيمه المسموحة." },
        { n: "4", en: "@return: what comes back, with its unit (SAR).", ar: "@return: ما يرجع، مع الوحدة (ريال)." },
        { n: "5", en: "@throws: the exception and its condition.", ar: "@throws: الاستثناء وشرطه." },
        { n: "8-10", en: "The code enforces the rule; the tag only documents it.", ar: "الكود هو اللي يطبق القاعدة؛ الوسم يوثقها فقط." },
        { n: "11-12", en: "An ordinary // comment. calculateTotal(3) returns 150 (SAR, not tickets).", ar: "تعليق عادي //. calculateTotal(3) يرجع 150 (ريال وليس تذاكر)." }
      ] },
    { title: { en: "Class-level JavaDoc and generating docs", ar: "JavaDoc على مستوى الصنف وتوليد التوثيق" }, lang: "java",
      src: `/**
 * Calculates ticket prices for the College Open Day.
 * @author Documentation Team
 * @version 1.0
 * @see java.lang.Math
 */
public class TicketCalculator { ... }

// In a terminal (JDK installed):
// javadoc -d docs TicketCalculator.java
// then open docs/index.html in a browser`,
      lines: [
        { n: "3-5", en: "@author, @version and @see usually appear in class documentation.", ar: "@author و@version و@see تظهر عادة في توثيق الصنف." },
        { n: "10", en: "-d docs puts the generated HTML pages in a 'docs' folder. It documents, it does not run the program.", ar: "-d docs يحط صفحات HTML المولدة في مجلد docs. هذا توثيق وليس تشغيل للبرنامج." }
      ] },
    { title: { en: "HTML comments and a JavaHelp map entry", ar: "تعليقات HTML ومدخل خريطة JavaHelp" }, lang: "html",
      src: `<!-- Shows the event name and ticket price to visitors. -->
<h1>College Open Day</h1>
<p>One ticket costs 50 SAR.</p>
<!-- Opens the ticket help page in this practice folder. -->
<a href="booking-help.html">Read ticket help</a>

<!-- JavaHelp map file (XML) -->
<mapID target="ticket_price" url="booking-help.html" />`,
      lines: [
        { n: "1, 4", en: "<!-- --> comments are hidden in the browser and explain purpose to code readers.", ar: "تعليقات <!-- --> مخفية في المتصفح وتشرح الهدف لقارئ الكود." },
        { n: "5", en: "Meaningful link text: 'Read ticket help', not 'Click here'.", ar: "نص رابط واضح: 'Read ticket help' وليس 'اضغط هنا'." },
        { n: "8", en: "The map connects the topic ID ticket_price to its HTML file, enabling context-sensitive help.", ar: "الخريطة تربط معرف الموضوع ticket_price بملف HTML، فتتيح المساعدة الحساسة للسياق." }
      ] }
  ],
  quiz: [
    { lv: 1, q: "A clinic manager must decide whether the app is affordable and practical. Which document?", o: ["User guide", "Feasibility study", "Design document", "Test report"], a: 1, why: { en: "Feasibility checks cost, resources and practicality.", ar: "دراسة الجدوى تفحص التكلفة والموارد والإمكانية." } },
    { lv: 1, q: "Developers need database and screen designs before coding. Which document?", o: ["Proposal", "Design document", "User guide", "Licence"], a: 1, why: { en: "Design docs come before build.", ar: "وثيقة التصميم قبل البناء." } },
    { lv: 1, q: "Changing text alignment is an example of:", o: ["Formatting", "File format", "Scope", "Approval"], a: 0, why: { en: "Formatting = appearance.", ar: "التنسيق = الشكل." } },
    { lv: 2, q: "Which format best preserves layout for printing and submission?", o: ["DOCX", "PDF", "HTML", "TXT"], a: 1, why: { en: "PDF has a fixed layout.", ar: "PDF تخطيطه ثابت." } },
    { lv: 2, q: "Help that opens the topic related to the user's current screen is:", o: ["Printed help", "Context-sensitive help", "A style guide", "A changelog"], a: 1, why: { en: "It starts from the user's location.", ar: "تبدأ من مكان المستخدم." } },
    { lv: 2, q: "'Create a PDF guide explaining booking and cancellation' is a:", o: ["Client need", "Documentation requirement", "Target audience", "Workshop"], a: 1, why: { en: "A specific instruction for the document.", ar: "تعليمات محددة للوثيقة." } },
    { lv: 2, q: "A client wants patients to book appointments more easily. This is a:", o: ["Scope of work", "Client need", "JavaDoc tag", "Change log"], a: 1, why: { en: "A desired result = need.", ar: "نتيجة مرغوبة = احتياج." } },
    { lv: 2, q: "What does a scope of work define?", o: ["Only the font", "Included and excluded work and limits", "Java method output", "Survey rate"], a: 1, why: { en: "Scope sets boundaries.", ar: "النطاق يضع الحدود." } },
    { lv: 3, q: "The client asks for an extra training video outside the approved scope. Best response?", o: ["Promise it immediately", "Refuse without discussion", "Assess work, resources and deadline, then send an updated scope for approval", "Ignore it"], a: 2, why: { en: "Control changes against the approved scope.", ar: "اضبط التغييرات مقابل النطاق المعتمد." } },
    { lv: 2, q: "'A reusable starting file with fixed parts and placeholders' is a:", o: ["Template", "Style", "Structure", "Style guide"], a: 0, why: { en: "Template = the file.", ar: "القالب = الملف." } },
    { lv: 2, q: "Which is plain English for 'Utilise the icon to commence booking'?", o: ["Use the icon to start booking.", "Leverage the icon to initiate booking.", "The icon should be utilised.", "Booking may be commenced."], a: 0, why: { en: "Familiar words + direct action.", ar: "كلمات مألوفة + فعل مباشر." } },
    { lv: 3, q: "Which instruction uses active voice?", o: ["The appointment should be confirmed after checking.", "Check the details, then select Confirm.", "Confirmation is required.", "Details are to be checked."], a: 1, why: { en: "The reader does the action.", ar: "القارئ هو اللي يسوي الفعل." } },
    { lv: 2, q: "JavaDoc comments normally start with:", o: ["//", "/**", "##", "<!--"], a: 1, why: { en: "/** ... */", ar: "/** ... */" } },
    { lv: 2, q: "Which JavaDoc tag describes an input?", o: ["@return", "@throws", "@param", "@author"], a: 2, why: { en: "@param = what goes in.", ar: "@param = ما يدخل." } },
    { lv: 3, q: "Which JavaDoc tag describes an exception?", o: ["@throws", "@return", "@param", "@see"], a: 0, why: { en: "@throws = what can go wrong.", ar: "@throws = ما قد يخطئ." } },
    { lv: 3, q: "Code multiplies by 50 but the comment says 60 SAR. What does calculateTotal(2) return?", o: ["120", "100", "Error", "60"], a: 1, why: { en: "Comments never change the calculation.", ar: "التعليقات لا تغير الحساب." } },
    { lv: 3, q: "What does a JavaHelp map connect?", o: ["A class to a method", "A topic ID to a topic file", "A user to a password", "A PDF to a DOCX"], a: 1, why: { en: "mapID target → url.", ar: "معرف الموضوع ← الملف." } },
    { lv: 2, q: "Who mainly reads JavaDoc API documentation?", o: ["Developers", "First-time shoppers", "Printers", "Reception visitors"], a: 0, why: { en: "It is a programmer reference.", ar: "هو مرجع للمبرمجين." } },
    { lv: 2, q: "Which is a useful alt text?", o: ["screenshot.png", "image123", "Order details with the Track order control below the address", "Picture"], a: 2, why: { en: "Describes the information or function.", ar: "يصف المعلومة أو الوظيفة." } },
    { lv: 3, q: "Which is an accessibility practice?", o: ["Use colour alone for status", "Add captions and transcripts", "Remove headings", "Use 'Click here' for every link"], a: 1, why: { en: "Alternatives for media.", ar: "بدائل للوسائط." } },
    { lv: 3, q: "Which audience usually needs code and API details?", o: ["End users", "Developers", "Stakeholders", "Casual visitors"], a: 1, why: { en: "Technical readers need technical detail.", ar: "القارئ التقني يحتاج تفاصيل تقنية." } },
    { lv: 3, q: "Best method to collect comparable ratings from 100 users?", o: ["Workshop", "Survey", "One document comment", "Change log"], a: 1, why: { en: "Surveys scale and are comparable.", ar: "الاستبيان يناسب العدد الكبير ويقارن." } },
    { lv: 3, q: "Best method to explore problems together with a small group?", o: ["Workshop", "Survey", "PDF export", "JavaDoc"], a: 0, why: { en: "Interactive discussion.", ar: "نقاش تفاعلي." } },
    { lv: 4, q: "Which feedback issue has the HIGHEST priority?", o: ["Wrong button label that stops the task", "Small spacing preference", "Optional colour choice", "Decorative change"], a: 0, why: { en: "Blocked task = high priority.", ar: "مهمة متوقفة = أولوية عالية." } },
    { lv: 4, q: "Which evidence BEST proves a document was approved?", o: ["The filename says Final", "An approval email naming the exact version", "A colourful cover", "A folder screenshot"], a: 1, why: { en: "Names the decision and version.", ar: "يذكر القرار والإصدار." } },
    { lv: 4, q: "Tutor approved V2, but the PDF was exported from V1. What next?", o: ["Publish the PDF", "Export a new PDF from V2, compare it, then publish", "Rename the PDF to Final", "Delete V2"], a: 1, why: { en: "Published files must match the approved version.", ar: "الملفات المنشورة لازم تطابق الإصدار المعتمد." } },
    { lv: 4, q: "A question asks what to do FIRST before publication. Choose:", o: ["Distribute to all users", "Check requirements, evidence, accessibility and approval status", "Delete Version 1", "Change the audience"], a: 1, why: { en: "Readiness and approval come before distribution.", ar: "الجاهزية والاعتماد قبل التوزيع." } }
  ]
});
