window.STUDY = window.STUDY || { units: [] };
STUDY.units.push({
  id: "u23", num: 23,
  title: { en: "Understand and Apply Programming Methods", ar: "فهم وتطبيق أساليب البرمجة" },
  intro: {
    en: "Programming constructs (If-Then-Else, CASE, While, Repeat-Until), event-driven programming, object-oriented programming and procedural programming, with JavaScript, Java and Python examples.",
    ar: "تراكيب البرمجة (If-Then-Else وCASE وWhile وRepeat-Until)، والبرمجة الموجهة بالأحداث، والبرمجة كائنية التوجه، والبرمجة الإجرائية، مع أمثلة بـ JavaScript وJava وPython."
  },
  klos: [
    { en: "KLO1 Programming constructs: If-Then-Else, CASE, While-Do, Repeat-Until", ar: "KLO1 تراكيب البرمجة: If-Then-Else وCASE وWhile-Do وRepeat-Until" },
    { en: "KLO2 Event-driven: service-oriented, time-driven, handlers, triggers, event types, event loop, features", ar: "KLO2 الموجهة بالأحداث: الخدمات، الوقت، المعالجات، المشغلات، أنواع الأحداث، حلقة الأحداث، المزايا" },
    { en: "KLO3 OOP: discrete reusable units, objects, abstraction, modularity, classification, inheritance, classes, methods, message passing", ar: "KLO3 كائنية التوجه: وحدات مستقلة قابلة لإعادة الاستخدام، الكائنات، التجريد، النمطية، التصنيف، الوراثة، الأصناف، الدوال، تمرير الرسائل" },
    { en: "KLO4 Procedural: procedures, functions, predefined functions, local/global variables, parameters, modularity; fixed/pre-check/post-check loops, breakpoints, conditions, Boolean operators", ar: "KLO4 الإجرائية: الإجراءات، الدوال، الدوال الجاهزة، المتغيرات المحلية والعامة، المعاملات، النمطية؛ الحلقات الثابتة والفحص المسبق واللاحق، نقاط التوقف، الشروط، العوامل المنطقية" }
  ],
  keywords: [
    { t: "Condition", lv: 1, en: "A question with a TRUE or FALSE answer (score >= 50).", ar: "سؤال جوابه صح أو خطأ (score >= 50)." },
    { t: "If-Then-Else", lv: 1, en: "Two paths: one action if TRUE, another if FALSE. Only one branch runs.", ar: "مساران: فعل إذا صح وآخر إذا خطأ. يشتغل فرع واحد فقط." },
    { t: "CASE / SWITCH", lv: 1, en: "One value chooses from several EXACT options, with a default (OTHERWISE).", ar: "قيمة واحدة تختار من عدة خيارات محددة، مع خيار افتراضي (OTHERWISE)." },
    { t: "While-Do (pre-check loop)", lv: 2, en: "Checks the condition BEFORE the body; may run zero times.", ar: "يفحص الشرط قبل التنفيذ؛ ممكن ما يشتغل ولا مرة." },
    { t: "Repeat-Until (post-check loop)", lv: 2, en: "Runs the body FIRST, then checks; runs at least once.", ar: "ينفذ أولاً ثم يفحص؛ يشتغل مرة على الأقل." },
    { t: "Fixed loop (FOR)", lv: 1, en: "Repeats a known number of times.", ar: "يتكرر عدداً معروفاً من المرات." },
    { t: "Infinite loop", lv: 2, en: "A loop whose condition never becomes false, so it never stops.", ar: "حلقة شرطها ما يصير خطأ أبداً فما توقف." },
    { t: "Sequence / selection / iteration", lv: 1, en: "In order / choose a path (IF, CASE) / repeat (loops).", ar: "بالترتيب / اختيار مسار (IF وCASE) / تكرار (الحلقات)." },
    { t: "Event-driven programming", lv: 1, en: "A program that waits for events and runs a response (handler) when one happens.", ar: "برنامج ينتظر الأحداث ويشغل استجابة (معالج) لما يصير حدث." },
    { t: "Event", lv: 1, en: "Something the program detects: mouse click, key press, form submit, timer tick, service response.", ar: "شيء يكتشفه البرنامج: نقرة فأرة، ضغط مفتاح، إرسال نموذج، نبضة مؤقت، رد خدمة." },
    { t: "Event handler / listener", lv: 1, en: "Code that runs in response to a specific event. A listener waits for it.", ar: "كود يشتغل استجابة لحدث محدد. والمستمع ينتظره." },
    { t: "Trigger function", lv: 2, en: "Runs automatically when a defined event or condition occurs (purchase confirmed → stock updated).", ar: "تشتغل تلقائياً عند حدوث حدث أو شرط معين (تأكيد الشراء ← تحديث المخزون)." },
    { t: "Service-oriented event", lv: 3, en: "A client program requests a service; the request/response is an event (weather app asks a forecast service).", ar: "برنامج عميل يطلب خدمة؛ الطلب والرد حدث (تطبيق الطقس يطلب التوقعات)." },
    { t: "Time-driven event", lv: 2, en: "Triggered by a timer or schedule: every 5 minutes (interval) or at 9:00 (schedule).", ar: "يشتغل بمؤقت أو جدول: كل 5 دقائق (فاصل) أو الساعة 9 (موعد)." },
    { t: "Event loop", lv: 3, en: "Repeatedly checks the queue for ready events and dispatches each to its handler, keeping the app responsive.", ar: "يفحص باستمرار طابور الأحداث الجاهزة ويرسل كل حدث لمعالجه، فيبقى التطبيق مستجيباً." },
    { t: "Event-driven features", lv: 2, en: "Flexibility, suitability for graphical interfaces, simplicity of programming, ease of development.", ar: "المرونة، الملاءمة للواجهات الرسومية، بساطة البرمجة، سهولة التطوير." },
    { t: "Class", lv: 1, en: "A plan/blueprint describing attributes and methods for a type of object.", ar: "خطة أو مخطط يصف الخصائص والدوال لنوع من الكائنات." },
    { t: "Object (instance)", lv: 1, en: "One actual item created from a class (Bus A from TransportOption).", ar: "عنصر فعلي واحد يُنشأ من صنف (Bus A من TransportOption)." },
    { t: "Attribute / method", lv: 1, en: "Attribute = stored information (title). Method = action (showDetails()).", ar: "الخاصية = معلومة مخزنة (title). الدالة = فعل (showDetails())." },
    { t: "Encapsulation", lv: 2, en: "Keeping data and methods together in a class and controlling access (private fields + methods that validate).", ar: "جمع البيانات والدوال داخل الصنف والتحكم في الوصول (حقول خاصة + دوال تتحقق)." },
    { t: "Inheritance", lv: 2, en: "A child class reuses a parent's attributes/methods and adds its own ('is a type of'). Java: extends.", ar: "الصنف الابن يعيد استخدام خصائص ودوال الأب ويضيف عليها ('هو نوع من'). في جافا: extends." },
    { t: "Message passing", lv: 3, en: "One object asks another to work by calling its method (Booking calls schedule.checkAvailability()).", ar: "كائن يطلب من كائن آخر عملاً باستدعاء دالته." },
    { t: "Data abstraction", lv: 3, en: "Hiding internal details and exposing only useful operations.", ar: "إخفاء التفاصيل الداخلية وإظهار العمليات المفيدة فقط." },
    { t: "Classification", lv: 3, en: "Grouping similar objects under a shared class.", ar: "تجميع الكائنات المتشابهة تحت صنف مشترك." },
    { t: "Discrete, reusable units", lv: 3, en: "Each object/class has a focused role (discrete) and can be used again (reusable).", ar: "كل كائن أو صنف له دور محدد (مستقل) ويمكن استخدامه مرة أخرى (قابل لإعادة الاستخدام)." },
    { t: "Modularity", lv: 2, en: "Dividing a program into focused parts that can be built, tested and changed separately.", ar: "تقسيم البرنامج لأجزاء مركزة تُبنى وتُختبر وتُعدل بشكل منفصل." },
    { t: "Polymorphism", lv: 4, en: "The same method name behaves differently in different classes (overriding).", ar: "نفس اسم الدالة يتصرف بشكل مختلف في أصناف مختلفة (إعادة التعريف)." },
    { t: "Procedure", lv: 2, en: "A named block that performs an ACTION and returns no value (displayWelcome).", ar: "كتلة مسماة تنفذ فعلاً ولا ترجع قيمة (displayWelcome)." },
    { t: "Function", lv: 2, en: "A named block that RETURNS a value for later use (calculateTotal).", ar: "كتلة مسماة ترجع قيمة لاستخدامها لاحقاً (calculateTotal)." },
    { t: "Pre-defined function", lv: 2, en: "Already provided by the language or a library: len(), round(), print().", ar: "جاهزة من اللغة أو المكتبة: len() وround() وprint()." },
    { t: "Local variable", lv: 2, en: "Declared inside a procedure/function; only available there.", ar: "معرّف داخل الإجراء أو الدالة؛ متاح هناك فقط." },
    { t: "Global variable", lv: 2, en: "Available to many parts of the program; risky because many blocks can change it.", ar: "متاح لأجزاء كثيرة من البرنامج؛ خطر لأن كتل كثيرة تقدر تغيره." },
    { t: "Parameter vs argument", lv: 2, en: "Parameter = named placeholder in the definition (price). Argument = actual value in the call (8).", ar: "المعامل = اسم محجوز في التعريف (price). الوسيط = القيمة الفعلية في الاستدعاء (8)." },
    { t: "Breakpoint", lv: 3, en: "A marker that PAUSES execution so the developer can inspect values. A debugging tool, not a loop stop.", ar: "علامة توقف التنفيذ مؤقتاً لفحص القيم. أداة تصحيح وليست إيقاف حلقة." },
    { t: "Boolean operators", lv: 2, en: "AND (both true), OR (at least one), NOT (reverses).", ar: "AND (الاثنين صح)، OR (واحد على الأقل)، NOT (يعكس)." },
    { t: "Boundary test", lv: 3, en: "Testing values at the edges of a range (1 and 8 for 1-8) plus just outside (0, 9).", ar: "اختبار القيم على حدود المدى (1 و8 لمدى 1-8) وخارجها مباشرة (0 و9)." },
    { t: "JSON", lv: 2, en: "Text format for structured data (objects {} and arrays []); read in Python with json.load().", ar: "صيغة نصية لبيانات منظمة (كائنات {} ومصفوفات [])؛ تُقرأ في بايثون بـ json.load()." },
    { t: "localStorage", lv: 3, en: "Browser storage that keeps data after page refresh (setItem/getItem, with JSON.stringify/parse).", ar: "تخزين في المتصفح يبقى بعد تحديث الصفحة (setItem وgetItem مع JSON.stringify وparse)." },
    { t: "Compiler / virtual machine / editor / libraries", lv: 3, en: "Programming tools: compiler translates code (javac), VM runs bytecode (JVM), editor/IDE writes code, libraries give ready code.", ar: "أدوات البرمجة: المترجم يحول الكود (javac)، الآلة الافتراضية تشغل الكود الوسيط (JVM)، المحرر يكتب الكود، المكتبات تعطي كوداً جاهزاً." }
  ],
  topics: [
    { lv: 1, t: { en: "If-Then-Else vs CASE", ar: "If-Then-Else مقابل CASE" },
      en: "Use If-Then-Else when a condition has two paths (TRUE/FALSE). Use CASE when one value matches several exact options (a menu with 4 choices), with a default for anything else.",
      ar: "استخدم If-Then-Else لما يكون للشرط مساران (صح/خطأ). واستخدم CASE لما قيمة وحدة تطابق عدة خيارات محددة (قائمة فيها 4 اختيارات)، مع خيار افتراضي لأي شيء ثاني.",
      more: { en: "Steps: identify the input → write the rule → choose both actions → test values. Always test the boundary (orderTotal = 30 for '>= 30') and one value each side (29, 31). Only ONE message prints. Common mistakes: missing ELSE, wrong comparison ('30 or more' needs >=). CBT clue: 'several distinct values' → CASE; accepted/rejected → If-Then-Else.",
              ar: "الخطوات: حدد المدخل ← اكتب القاعدة ← اختر الفعلين ← اختبر القيم. اختبر الحد دائماً (orderTotal = 30 للشرط '>= 30') وقيمة على كل جانب (29 و31). تطبع رسالة وحدة فقط. أخطاء شائعة: نسيان ELSE، أو مقارنة غلط ('30 أو أكثر' يحتاج >=). دليل الاختبار: 'عدة قيم مختلفة' ← CASE، 'مقبول/مرفوض' ← If-Then-Else." } },
    { lv: 1, t: { en: "Loops: fixed, pre-check, post-check", ar: "الحلقات: الثابتة، الفحص المسبق، الفحص اللاحق" },
      en: "Fixed loop (FOR): count known. Pre-check (WHILE): checks first, can run 0 times. Post-check (REPEAT-UNTIL / do-while): runs once first, then checks, so at least once.",
      ar: "الحلقة الثابتة (FOR): العدد معروف. الفحص المسبق (WHILE): يفحص أولاً، وممكن ما يشتغل أبداً. الفحص اللاحق (REPEAT-UNTIL أو do-while): ينفذ مرة أولاً ثم يفحص، فيشتغل مرة على الأقل.",
      more: { en: "Menu that must display at least once → post-check. Keep asking while the password is wrong → pre-check. Process 10 known records → fixed. If the loop variable never changes, the condition never becomes false → infinite loop. Iteration + selection together: 'check every row and count only Paid' needs a loop AND an IF, with the counter increment INSIDE the IF.",
              ar: "قائمة لازم تظهر مرة على الأقل ← فحص لاحق. استمر تسأل طالما كلمة المرور غلط ← فحص مسبق. معالجة 10 سجلات معروفة ← ثابتة. إذا متغير الحلقة ما يتغير فالشرط ما يصير خطأ ← حلقة لا نهائية. التكرار + الاختيار معاً: 'افحص كل صف وعد فقط Paid' يحتاج حلقة وIF، وزيادة العداد تكون داخل IF." } },
    { lv: 2, t: { en: "Event-driven programming basics", ar: "أساسيات البرمجة الموجهة بالأحداث" },
      en: "The program waits; an event happens; the matching handler runs; the program checks data; the response appears. Event types: mouse, keyboard, HTML object, form, user interface.",
      ar: "البرنامج ينتظر؛ يصير حدث؛ يشتغل المعالج المناسب؛ يفحص البرنامج البيانات؛ تظهر الاستجابة. أنواع الأحداث: الفأرة، لوحة المفاتيح، عنصر HTML، النموذج، واجهة المستخدم.",
      more: { en: "In 'click Save and store changes', the click is the event and storing is the handler's response. A handler should respond to the correct event, use the latest input, and give feedback. If nothing happens, check: is the listener connected, is the handler logic right, is the output updated? In JavaScript, page elements must exist before the script that finds them.",
              ar: "في 'اضغط حفظ وخزّن التغييرات' النقرة هي الحدث والتخزين هو استجابة المعالج. المعالج لازم يستجيب للحدث الصحيح ويستخدم آخر مدخلات ويعطي تغذية راجعة. إذا ما صار شيء افحص: هل المستمع مربوط؟ هل منطق المعالج صحيح؟ هل تم تحديث المخرج؟ في JavaScript لازم العناصر تكون موجودة قبل السكربت اللي يبحث عنها." } },
    { lv: 3, t: { en: "Service-oriented, time-driven and trigger functions", ar: "الأحداث الخدمية والزمنية ودوال التشغيل" },
      en: "Service-oriented: a client requests a service and handles success or failure. Time-driven: a timer interval or schedule starts the handler. Trigger function: runs automatically when a condition occurs.",
      ar: "الخدمية: العميل يطلب خدمة ويتعامل مع النجاح أو الفشل. الزمنية: فاصل زمني أو موعد يشغل المعالج. دالة التشغيل: تشتغل تلقائياً لما يتحقق شرط.",
      more: { en: "A weather app asking another program for a forecast is the CLIENT. A shop system returning stock info to another program = service-oriented. Dashboard refreshing every minute = time-driven (repeated interval). Plan both service paths: valid → process and display; error/no reply → useful message and stay safe. Timed tasks need concurrency management so they don't block user actions; a failed tick must not stop the next tick.",
              ar: "تطبيق الطقس اللي يطلب التوقعات من برنامج آخر هو العميل. نظام متجر يرجع معلومات المخزون لبرنامج آخر = خدمي. لوحة تتحدث كل دقيقة = زمني (فاصل متكرر). خطط لمساري الخدمة: صحيح ← عالج واعرض؛ خطأ أو ما فيه رد ← رسالة مفيدة وابقَ آمن. المهام الزمنية تحتاج إدارة تزامن حتى ما تعطل المستخدم؛ وفشل نبضة ما يوقف النبضة التالية." } },
    { lv: 3, t: { en: "Event loop and the four features", ar: "حلقة الأحداث والمزايا الأربع" },
      en: "The event loop repeatedly checks the queue for ready events and dispatches each one to its handler, so the program keeps responding. Features: flexibility, GUI suitability, simplicity of programming, ease of development.",
      ar: "حلقة الأحداث تفحص الطابور باستمرار وترسل كل حدث جاهز لمعالجه، فيبقى البرنامج مستجيباً. المزايا: المرونة، الملاءمة للواجهات الرسومية، بساطة البرمجة، سهولة التطوير.",
      more: { en: "Flexibility: responds to many event sources in any order. GUI suitability: buttons, menus and forms naturally produce events. Simplicity: each handler is small and focused (separate Save and Search handlers). Ease of development: add a new feature by adding a new handler. Loop vs handler: the loop DISPATCHES, the handler RESPONDS.",
              ar: "المرونة: يستجيب لمصادر أحداث كثيرة بأي ترتيب. الملاءمة للواجهات: الأزرار والقوائم والنماذج تنتج أحداثاً بطبيعتها. البساطة: كل معالج صغير ومركز (معالج للحفظ ومعالج للبحث). سهولة التطوير: تضيف ميزة جديدة بإضافة معالج جديد. الفرق: الحلقة ترسل، والمعالج يستجيب." } },
    { lv: 2, t: { en: "Classes, objects, attributes, methods", ar: "الأصناف والكائنات والخصائص والدوال" },
      en: "A class is a plan; an object is one item made from that plan. Attributes store information; methods are actions. 'Book' is the class, 'Sea Stories' is one object, title is an attribute, showDetails() is a method.",
      ar: "الصنف خطة، والكائن عنصر واحد مصنوع من هذي الخطة. الخصائص تخزن المعلومات، والدوال أفعال. 'Book' هو الصنف، و'Sea Stories' كائن، وtitle خاصية، وshowDetails() دالة.",
      more: { en: "OOP features in the spec: discrete (each class has a focused role), reusable units, identification of objects (find the 'things' in the scenario: nouns), data abstraction (use deposit() without knowing internal steps), modularity, classification (group similar objects under one class). Don't make one 'do everything' class; plan with a responsibility table: purpose, attributes, methods, links.",
              ar: "مزايا OOP في المنهج: الاستقلالية (كل صنف له دور مركز)، وحدات قابلة لإعادة الاستخدام، تحديد الكائنات (ابحث عن 'الأشياء' في السيناريو: الأسماء)، تجريد البيانات (تستخدم deposit() بدون ما تعرف الخطوات الداخلية)، النمطية، التصنيف (جمع الكائنات المتشابهة تحت صنف). لا تسوي صنف 'يسوي كل شيء'؛ خطط بجدول مسؤوليات: الهدف، الخصائص، الدوال، الروابط." } },
    { lv: 3, t: { en: "Encapsulation, inheritance, message passing", ar: "التغليف والوراثة وتمرير الرسائل" },
      en: "Encapsulation keeps data and methods together and controls changes. Inheritance: a child reuses parent features and adds its own, only when 'X is a type of Y'. Message passing: one object calls another's method and uses the result.",
      ar: "التغليف يجمع البيانات والدوال ويتحكم بالتغيير. الوراثة: الابن يعيد استخدام مزايا الأب ويضيف عليها، فقط إذا 'X نوع من Y'. تمرير الرسائل: كائن يستدعي دالة كائن آخر ويستخدم النتيجة.",
      more: { en: "'is a type of' test: Bicycle is a Vehicle ✓; GraduateStudent is a Student ✓; Library is a Book ✗ (they work together, no inheritance). Examples: Room (roomNumber, capacity) → ComputerLab adds softwareList. Account → SavingsAccount adds interestRate. Message: Booking calls RoomSchedule.checkAvailability(date, time), the schedule returns a result, Booking decides what to show.",
              ar: "اختبار 'هو نوع من': الدراجة نوع من المركبات ✓، طالب الدراسات العليا نوع من الطلاب ✓، المكتبة نوع من الكتب ✗ (يشتغلون مع بعض بدون وراثة). أمثلة: Room (roomNumber وcapacity) ← ComputerLab يضيف softwareList. Account ← SavingsAccount يضيف interestRate. الرسالة: Booking يستدعي RoomSchedule.checkAvailability(date, time)، والجدول يرجع نتيجة، وBooking يقرر وش يعرض." } },
    { lv: 2, t: { en: "Procedures, functions and parameters", ar: "الإجراءات والدوال والمعاملات" },
      en: "Procedure = performs an action, returns nothing (display a message). Function = returns a value the caller uses (calculate an average). Parameters are names in the definition; arguments are values in the call.",
      ar: "الإجراء = ينفذ فعلاً ولا يرجع شيئاً (يعرض رسالة). الدالة = ترجع قيمة يستخدمها المستدعي (تحسب متوسط). المعاملات أسماء في التعريف، والوسائط قيم في الاستدعاء.",
      more: { en: "calculateTotal(price, quantity) defines parameters; calculateTotal(8, 2) passes arguments and returns 16. A second call (5, 4) reuses the same logic without copying code. Pre-defined functions (len, round, count) are tested and reusable; check the docs for name, input/output types and edge cases. len('Madinah') = 7, round(12.6) = 13.",
              ar: "calculateTotal(price, quantity) يعرّف المعاملات، وcalculateTotal(8, 2) يمرر الوسائط ويرجع 16. استدعاء ثاني (5, 4) يعيد نفس المنطق بدون نسخ الكود. الدوال الجاهزة (len وround وcount) مختبرة وقابلة لإعادة الاستخدام؛ راجع التوثيق للاسم وأنواع المدخل والمخرج والحالات الطرفية. len('Madinah') = 7، وround(12.6) = 13." } },
    { lv: 3, t: { en: "Local vs global scope and modularity", ar: "النطاق المحلي مقابل العام والنمطية" },
      en: "Scope = where a variable name can be used. Local = inside one block (safe default for temporary values). Global = shared widely (risky: hidden dependencies, hard debugging). Modularity splits input, processing and output into focused blocks.",
      ar: "النطاق = وين تقدر تستخدم اسم المتغير. المحلي = داخل كتلة وحدة (الخيار الآمن للقيم المؤقتة). العام = مشترك على نطاق واسع (خطر: اعتماديات مخفية وصعوبة في التصحيح). النمطية تقسم الإدخال والمعالجة والإخراج لكتل مركزة.",
      more: { en: "temporaryTotal used in one calculation → local. storeName on every receipt → could be a controlled shared setting. If several functions can change a global, finding who caused a wrong value is hard. Modular benefits: test the calculation alone, change the display without touching the calculation, reuse blocks. Top-down design: break the main task into smaller steps (readInput → validate → calculate → display).",
              ar: "temporaryTotal يُستخدم في حساب واحد ← محلي. storeName يظهر في كل إيصال ← ممكن يكون إعداداً مشتركاً مضبوطاً. إذا دوال كثيرة تقدر تغير المتغير العام، صعب تعرف مين سبب القيمة الغلط. فوائد النمطية: تختبر الحساب لحاله، تغير العرض بدون ما تلمس الحساب، تعيد استخدام الكتل. التصميم من الأعلى للأسفل: قسّم المهمة الرئيسية لخطوات أصغر." } },
    { lv: 4, t: { en: "Debugging, breakpoints and testing", ar: "تصحيح الأخطاء ونقاط التوقف والاختبار" },
      en: "A breakpoint pauses execution so you can inspect variable values; it is not the loop's stopping condition. Test cases: normal, boundary and invalid inputs, recording expected vs actual results. Trace tables track variable values step by step.",
      ar: "نقطة التوقف توقف التنفيذ مؤقتاً لتفحص قيم المتغيرات؛ وهي ليست شرط توقف الحلقة. حالات الاختبار: قيم عادية وحدّية وغير صالحة، مع تسجيل النتيجة المتوقعة والفعلية. جداول التتبع تتابع قيم المتغيرات خطوة بخطوة.",
      more: { en: "Seats 1-8 inclusive: normal 4, boundary 1 and 8 accepted, invalid 0 and 9 rejected. Logic error: counting every task instead of only Completed → fix the condition. Tests: [Completed, Pending, Completed] → 2; empty list → 0. Testing only matching records is not enough: a faulty program that shows everything would still pass.",
              ar: "المقاعد من 1 إلى 8 شاملة: عادي 4، والحدود 1 و8 مقبولة، وغير الصالح 0 و9 مرفوض. خطأ منطقي: عد كل المهام بدل Completed فقط ← أصلح الشرط. الاختبارات: [Completed, Pending, Completed] ← 2؛ قائمة فاضية ← 0. اختبار السجلات المطابقة فقط ما يكفي: برنامج غلط يعرض كل شيء راح ينجح." } },
    { lv: 4, t: { en: "Choosing a paradigm (mixed apps)", ar: "اختيار الأسلوب البرمجي (تطبيقات مختلطة)" },
      en: "Event-driven when the program waits for user/timer/service events. OOP when there are related objects sharing data with different behaviour. Procedural when the work is ordered repeatable processing steps (read → validate → calculate → display).",
      ar: "موجه بالأحداث لما البرنامج ينتظر أحداث المستخدم أو المؤقت أو الخدمة. كائني التوجه لما فيه كائنات مترابطة تتشارك بيانات بسلوك مختلف. إجرائي لما العمل خطوات معالجة مرتبة ومتكررة (قراءة ← تحقق ← حساب ← عرض).",
      more: { en: "One app can mix them: a museum kiosk is event-driven at the interface (ticket selection) and procedural inside the handler (check age → calculate price → print). CBT clue words: 'when the user clicks' → event/handler; 'each record'/'repeat' → iteration; 'if the value is' → selection; 'plan for many similar items' → class/objects; 'shared features in a child type' → inheritance; 'steps in order' → sequence/procedure.",
              ar: "التطبيق الواحد ممكن يجمعها: كشك المتحف موجه بالأحداث في الواجهة (اختيار التذكرة) وإجرائي داخل المعالج (فحص العمر ← حساب السعر ← الطباعة). كلمات الدليل في الاختبار: 'لما يضغط المستخدم' ← حدث ومعالج؛ 'كل سجل' أو 'كرر' ← تكرار؛ 'إذا كانت القيمة' ← اختيار؛ 'خطة لعناصر متشابهة كثيرة' ← صنف وكائنات؛ 'مزايا مشتركة في نوع ابن' ← وراثة؛ 'خطوات بالترتيب' ← تسلسل أو إجراء." } }
  ],
  code: [
    { title: { en: "Pseudocode: If-Then-Else, CASE, While, Repeat-Until", ar: "كود زائف: If-Then-Else وCASE وWhile وRepeat-Until" }, lang: "pseudo",
      src: `INPUT orderTotal
IF orderTotal >= 30 THEN
    DISPLAY "Free drink"
ELSE
    DISPLAY "No free drink"
END IF

CASE deliveryType OF
    "Standard"   : DISPLAY "Standard fee"
    "Express"    : DISPLAY "Express fee"
    "Collection" : DISPLAY "Collect from the desk"
    OTHERWISE    : DISPLAY "Please choose a valid option"
END CASE

WHILE password <> correct DO        // pre-check: may run 0 times
    INPUT password
END WHILE

REPEAT                              // post-check: runs at least once
    DISPLAY menu
    INPUT choice
UNTIL choice = "Q"`,
      lines: [
        { n: "1-6", en: "Two paths; only one message prints. 30 is the boundary and gives 'Free drink'.", ar: "مساران؛ تطبع رسالة وحدة. 30 هو الحد ويعطي 'Free drink'." },
        { n: "8-13", en: "CASE compares one value to several exact options; OTHERWISE is the default.", ar: "CASE يقارن قيمة وحدة بعدة خيارات محددة؛ وOTHERWISE هو الافتراضي." },
        { n: "15-17", en: "WHILE checks first. If the password is already correct, the body never runs.", ar: "WHILE يفحص أولاً. إذا كلمة المرور صحيحة أصلاً، ما يشتغل أبداً." },
        { n: "19-22", en: "REPEAT runs the body first, so the menu always shows at least once.", ar: "REPEAT ينفذ أولاً، فالقائمة تظهر مرة على الأقل دائماً." }
      ] },
    { title: { en: "JavaScript: event handler, localStorage, timer", ar: "JavaScript: معالج حدث وlocalStorage ومؤقت" }, lang: "javascript",
      src: `const addBtn = document.getElementById("addBtn");
const list = document.getElementById("activityList");
let activities = JSON.parse(localStorage.getItem("activities")) || [];

addBtn.addEventListener("click", function () {      // mouse event
  const choice = document.getElementById("activity").value;
  if (choice === "") {                                // validate input
    alert("Please choose an activity");
    return;
  }
  activities.push(choice);
  localStorage.setItem("activities", JSON.stringify(activities));
  const li = document.createElement("li");
  li.textContent = choice;
  list.appendChild(li);                               // response on screen
});

setInterval(function () {                             // time-driven event
  document.getElementById("clock").textContent = new Date().toLocaleTimeString();
}, 60000);`,
      lines: [
        { n: "1-2", en: "Find the page elements (they must exist before the script runs).", ar: "إيجاد عناصر الصفحة (لازم تكون موجودة قبل تشغيل السكربت)." },
        { n: "3", en: "Load saved data from localStorage so it survives a page refresh.", ar: "تحميل البيانات المحفوظة من localStorage حتى تبقى بعد تحديث الصفحة." },
        { n: "5", en: "addEventListener connects the click EVENT to the HANDLER function.", ar: "addEventListener يربط حدث النقرة بدالة المعالج." },
        { n: "7-10", en: "Selection inside the handler: blank input gets feedback, no save.", ar: "اختيار داخل المعالج: المدخل الفاضي يحصل رسالة وما ينحفظ." },
        { n: "11-15", en: "Store as JSON text, then update the visible list.", ar: "تخزين كنص JSON، ثم تحديث القائمة الظاهرة." },
        { n: "18-20", en: "setInterval fires every 60000 ms (1 minute): a time-driven event.", ar: "setInterval يشتغل كل 60000 ملي ثانية (دقيقة): حدث زمني." }
      ] },
    { title: { en: "Java OOP: class, inheritance, message passing", ar: "جافا OOP: صنف ووراثة وتمرير رسائل" }, lang: "java",
      src: `public class Person {
    private String name;                       // encapsulated attribute
    public Person(String name) { this.name = name; }  // constructor
    public String getName() { return name; }
}

public class Pilgrim extends Person {           // inheritance
    private ArrayList<Activity> activities = new ArrayList<>();
    public Pilgrim(String name) { super(name); }
    public void addActivity(Activity a) { activities.add(a); }
    public void showPlan() {
        for (Activity a : activities) {
            System.out.println(getName() + ": " + a.describe());  // message passing
        }
    }
}

Pilgrim p = new Pilgrim("Sara");               // object (instance)
p.addActivity(new Activity("Tawaf"));
p.showPlan();`,
      lines: [
        { n: "2", en: "private hides the field: encapsulation. Others use getName().", ar: "private يخفي الحقل: تغليف. والآخرين يستخدمون getName()." },
        { n: "3", en: "The constructor sets up a new object.", ar: "المُنشئ يجهز الكائن الجديد." },
        { n: "7", en: "extends: Pilgrim is a type of Person and inherits name/getName().", ar: "extends: الحاج نوع من الأشخاص ويرث name وgetName()." },
        { n: "9", en: "super(name) calls the parent constructor.", ar: "super(name) يستدعي مُنشئ الأب." },
        { n: "13", en: "Pilgrim sends a message to each Activity object by calling describe().", ar: "Pilgrim يرسل رسالة لكل كائن Activity باستدعاء describe()." },
        { n: "18-20", en: "Create an object from the class and call its methods.", ar: "إنشاء كائن من الصنف واستدعاء دواله." }
      ] },
    { title: { en: "Python procedural: read JSON, loop, count, percentage", ar: "بايثون إجرائي: قراءة JSON وحلقة وعد ونسبة" }, lang: "python",
      src: `import json

def read_data(path):                  # function: returns a value
    with open(path) as f:
        return json.load(f)

def count_completed(activities):      # parameter
    count = 0                         # local variable
    for a in activities:              # fixed iteration over a list
        if a["status"] == "Completed":   # selection
            count += 1
    return count

def show_report(done, total):         # procedure: action only
    percent = round(done / total * 100) if total > 0 else 0
    print(f"Completed {done} of {total} ({percent}%)")

data = read_data("umrah_activities.json")
done = count_completed(data)          # argument: data
show_report(done, len(data))          # len() is pre-defined`,
      lines: [
        { n: "1", en: "Import the json library (a pre-made library).", ar: "استيراد مكتبة json (مكتبة جاهزة)." },
        { n: "3-5", en: "Function that returns the parsed JSON list.", ar: "دالة ترجع قائمة JSON بعد قراءتها." },
        { n: "8", en: "count is local: only exists inside count_completed.", ar: "count محلي: موجود فقط داخل count_completed." },
        { n: "9-11", en: "Iteration + selection: the increment is INSIDE the IF.", ar: "تكرار + اختيار: الزيادة داخل IF." },
        { n: "14-16", en: "Procedure: displays a result, returns nothing. Guards against dividing by zero.", ar: "إجراء: يعرض نتيجة ولا يرجع شيئاً. ويحمي من القسمة على صفر." },
        { n: "18-20", en: "Main sequence: read → process → display (top-down).", ar: "التسلسل الرئيسي: قراءة ← معالجة ← عرض (من الأعلى للأسفل)." }
      ] }
  ],
  quiz: [
    { lv: 1, q: "A menu has four exact options. Which construct is most suitable?", o: ["If-Then-Else", "CASE", "While", "Repeat-Until"], a: 1, why: { en: "Several exact values → CASE.", ar: "عدة قيم محددة ← CASE." } },
    { lv: 1, q: "If score = 50, is 'score >= 50' TRUE or FALSE?", o: ["TRUE", "FALSE", "Error", "Depends on ELSE"], a: 0, why: { en: ">= includes equality.", ar: ">= يشمل المساواة." } },
    { lv: 2, q: "Which loop checks its condition BEFORE the body runs?", o: ["Post-check loop", "Pre-check loop", "Repeat-Until", "Breakpoint"], a: 1, why: { en: "While = pre-check.", ar: "While = فحص مسبق." } },
    { lv: 2, q: "A menu must display at least once before asking to repeat. Which loop?", o: ["Pre-check", "Fixed", "Post-check", "CASE"], a: 2, why: { en: "Post-check runs at least once.", ar: "الفحص اللاحق يشتغل مرة على الأقل." } },
    { lv: 2, q: "When is a fixed loop most suitable?", o: ["When the repeat count is known", "When the count must be guessed", "When there is no repetition", "For events"], a: 0, why: { en: "FOR loops use a known count.", ar: "حلقة FOR لعدد معروف." } },
    { lv: 2, q: "Check every row and count only rows with status 'Paid'. Which combination?", o: ["Iteration and selection", "Inheritance and event loop", "Encapsulation only", "Message passing only"], a: 0, why: { en: "Loop over rows + IF for the match.", ar: "حلقة على الصفوف + IF للمطابقة." } },
    { lv: 1, q: "A program waits for the user to press Save, then stores the record. What approach describes the trigger?", o: ["Event-driven", "Sequential only", "Inheritance", "Iteration"], a: 0, why: { en: "The click is an event that starts a handler.", ar: "النقرة حدث يشغل معالجاً." } },
    { lv: 2, q: "A dashboard refreshes automatically every minute. This is a:", o: ["Form event", "Time-driven event", "Mouse event", "Keyboard event"], a: 1, why: { en: "A timer interval triggers it.", ar: "يشغله فاصل زمني." } },
    { lv: 3, q: "A shop system receives a request from another program and returns stock information. This is:", o: ["Service-oriented", "Keyboard-driven", "Fixed-loop processing", "Inheritance"], a: 0, why: { en: "Request/response between programs.", ar: "طلب ورد بين برامج." } },
    { lv: 3, q: "What is the main job of an event loop?", o: ["Store data permanently", "Check for ready events and dispatch them to handlers", "Define classes", "Pause execution for debugging"], a: 1, why: { en: "Loop dispatches; handler responds.", ar: "الحلقة ترسل والمعالج يستجيب." } },
    { lv: 3, q: "Separate small handlers for Save and Search most directly support:", o: ["Simplicity of programming", "A fixed sequence", "A time schedule", "Global variables"], a: 0, why: { en: "Each handler is small and focused.", ar: "كل معالج صغير ومركز." } },
    { lv: 2, q: "A purchase confirmation automatically updates stock. The automatic update is a:", o: ["Trigger function", "Breakpoint", "Global variable", "Fixed loop"], a: 0, why: { en: "Runs automatically when the condition occurs.", ar: "يشتغل تلقائياً عند تحقق الشرط." } },
    { lv: 1, q: "What is the difference between a class and an object?", o: ["They are the same", "A class is a plan; an object is one instance made from it", "An object is a plan; a class is an instance", "A class is a variable"], a: 1, why: { en: "Blueprint vs actual item.", ar: "مخطط مقابل عنصر فعلي." } },
    { lv: 2, q: "In a Book class, which is an attribute?", o: ["showDetails()", "title", "Book", "new"], a: 1, why: { en: "Attributes store information.", ar: "الخصائص تخزن معلومات." } },
    { lv: 2, q: "A child class uses the shared name field from Guide and adds a route method. Which idea?", o: ["Inheritance", "Timer event", "Sequence", "Validation"], a: 0, why: { en: "Child reuses parent features.", ar: "الابن يعيد استخدام مزايا الأب." } },
    { lv: 3, q: "One object calls another object's method. This is:", o: ["Message passing", "Classification", "A timer event", "Abstraction"], a: 0, why: { en: "Objects communicate by calling methods.", ar: "الكائنات تتواصل باستدعاء الدوال." } },
    { lv: 3, q: "Grouping Book objects that share the same structure is an example of:", o: ["Classification", "Timer use", "Event dispatch", "Breakpoint"], a: 0, why: { en: "Similar objects under one class.", ar: "كائنات متشابهة تحت صنف واحد." } },
    { lv: 3, q: "Which is a valid 'is a type of' inheritance example?", o: ["Library is a type of Book", "Bicycle is a type of Vehicle", "Book is a type of Library", "Timer is a type of Button"], a: 1, why: { en: "Inheritance needs a true is-a relationship.", ar: "الوراثة تحتاج علاقة 'نوع من' حقيقية." } },
    { lv: 2, q: "A block displays a welcome message and returns nothing. It is a:", o: ["Function", "Procedure", "Class", "Event loop"], a: 1, why: { en: "Action without a returned value = procedure.", ar: "فعل بدون قيمة راجعة = إجراء." } },
    { lv: 3, q: "In calculateTotal(8, 2), what are 8 and 2?", o: ["Parameters", "Arguments", "Global variables", "Attributes"], a: 1, why: { en: "Values in the call = arguments.", ar: "القيم في الاستدعاء = وسائط." } },
    { lv: 3, q: "What is the main risk of making a temporary variable global without need?", o: ["Faster code", "Many blocks can change it, causing hidden dependencies and hard debugging", "It disappears", "It becomes a function"], a: 1, why: { en: "Prefer local scope.", ar: "فضّل النطاق المحلي." } },
    { lv: 3, q: "What is a breakpoint used for?", o: ["Repeat a loop forever", "Store a global variable", "Pause execution and inspect values", "End a CASE"], a: 2, why: { en: "A debugging tool.", ar: "أداة تصحيح." } },
    { lv: 4, q: "A function accepts 1-8 inclusive. Which value is INVALID?", o: ["1", "4", "8", "9"], a: 3, why: { en: "9 is outside the range.", ar: "9 خارج المدى." } },
    { lv: 4, q: "A report reads a file, validates lines, calculates totals and displays a summary. Best description?", o: ["Procedural sequence", "Event loop only", "Inheritance", "Timer event"], a: 0, why: { en: "Ordered processing steps.", ar: "خطوات معالجة مرتبة." } },
    { lv: 4, q: "A Java task must read a JSON file but the brief names no library. Safest next step?", o: ["Treat one library as mandatory", "Confirm an approved approach and show parsing evidence", "Ignore the file", "Switch to Python without approval"], a: 1, why: { en: "Don't invent requirements; confirm and evidence.", ar: "لا تخترع متطلبات؛ أكّد ووثّق." } }
  ]
});
