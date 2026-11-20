window.STUDY = window.STUDY || { units: [] };
STUDY.units.push({
  id: "u24", num: 24,
  title: { en: "Use Software Libraries and Components", ar: "استخدام مكتبات البرمجيات ومكوناتها" },
  intro: {
    en: "Software reuse and components, Java tools (editor, IDE, compiler, JVM, bytecode), OOP principles in Java, SDLC methodologies, libraries/packages/JAR/classpath/frameworks, design patterns and idioms, Git/GitHub, metrics, and the reusable-component workflow.",
    ar: "إعادة استخدام البرمجيات والمكونات، أدوات جافا (المحرر، IDE، المترجم، JVM، الكود الوسيط)، مبادئ OOP في جافا، منهجيات SDLC، المكتبات والحزم وJAR وclasspath وأطر العمل، أنماط التصميم والتعابير، Git وGitHub، المقاييس، ومسار المكون القابل لإعادة الاستخدام."
  },
  klos: [
    { en: "KLO1 Understand software development: tools, OOP, SDLC methodologies", ar: "KLO1 فهم تطوير البرمجيات: الأدوات وOOP ومنهجيات SDLC" },
    { en: "Software reuse, libraries, frameworks, patterns, idioms, repositories, metrics", ar: "إعادة الاستخدام، المكتبات، أطر العمل، الأنماط، التعابير، المستودعات، المقاييس" },
    { en: "Identify, evaluate, create, test and integrate reusable components", ar: "تحديد المكونات القابلة لإعادة الاستخدام وتقييمها وإنشاؤها واختبارها ودمجها" }
  ],
  keywords: [
    { t: "Software reuse", lv: 1, en: "Using existing software knowledge, code or components to build new software instead of starting from zero.", ar: "استخدام معرفة أو كود أو مكونات موجودة لبناء برنامج جديد بدل البدء من الصفر." },
    { t: "Reusable component", lv: 1, en: "A software building block with one clear job that can be used again in the same or another project.", ar: "وحدة برمجية لها مهمة واضحة واحدة تُستخدم مرة أخرى في نفس المشروع أو مشروع آخر." },
    { t: "Application vs component reuse", lv: 2, en: "Application reuse = reuse a whole system or large part. Component reuse = reuse a class, method or interface.", ar: "إعادة استخدام التطبيق = نظام كامل أو جزء كبير. إعادة استخدام المكون = صنف أو دالة أو واجهة." },
    { t: "Business vs technical component", lv: 3, en: "Business component supports a business rule (input validator, discount calculator). Technical component supports system operation (logging, DB connection).", ar: "مكون العمل يدعم قاعدة عمل (مدقق المدخلات، حاسبة الخصم). المكون التقني يدعم تشغيل النظام (السجلات، اتصال قاعدة البيانات)." },
    { t: "Editor", lv: 1, en: "Writes and edits source code.", ar: "يكتب ويحرر الكود المصدري." },
    { t: "IDE", lv: 1, en: "Integrated Development Environment = editor + build tools + debugger + project tools (NetBeans, Eclipse).", ar: "بيئة التطوير المتكاملة = محرر + أدوات بناء + مصحح أخطاء + أدوات مشروع (NetBeans وEclipse)." },
    { t: "Compiler", lv: 1, en: "Translates the whole program BEFORE it runs and reports syntax errors. javac: .java → .class bytecode.", ar: "يترجم البرنامج كاملاً قبل تشغيله ويبلغ عن أخطاء الصياغة. javac: من .java إلى كود وسيط .class." },
    { t: "Interpreter", lv: 2, en: "Translates and runs code line by line while the program runs.", ar: "يترجم الكود وينفذه سطراً بسطر أثناء التشغيل." },
    { t: "Bytecode", lv: 2, en: "Intermediate instructions stored in a .class file.", ar: "تعليمات وسيطة محفوظة في ملف .class." },
    { t: "JVM", lv: 2, en: "Java Virtual Machine: reads and runs bytecode; makes Java portable across Windows, macOS, Linux.", ar: "آلة جافا الافتراضية: تقرأ الكود الوسيط وتشغله؛ وتجعل جافا تعمل على ويندوز وماك ولينكس." },
    { t: "Analysis & synthesis (compiler)", lv: 4, en: "Analysis phase checks and prepares the code; synthesis phase produces the target form.", ar: "مرحلة التحليل تفحص الكود وتجهزه، ومرحلة التركيب تنتج الشكل الهدف." },
    { t: "Encapsulation", lv: 2, en: "Private data accessed through controlled public methods (getters/setters with validation).", ar: "بيانات خاصة يُوصل لها عبر دوال عامة مضبوطة (getters وsetters مع تحقق)." },
    { t: "Access modifiers", lv: 2, en: "public (everyone), private (same class), protected (class, package, subclasses), default/package (same package).", ar: "public (الكل)، private (نفس الصنف)، protected (الصنف والحزمة والأبناء)، default (نفس الحزمة)." },
    { t: "Inheritance (extends)", lv: 2, en: "A child class reuses a parent's features; super(...) calls the parent constructor.", ar: "الصنف الابن يعيد استخدام مزايا الأب؛ وsuper(...) يستدعي مُنشئ الأب." },
    { t: "Polymorphism", lv: 3, en: "One call, different behaviours depending on the actual object type.", ar: "استدعاء واحد بسلوكيات مختلفة حسب نوع الكائن الفعلي." },
    { t: "Overloading", lv: 3, en: "Same method name, DIFFERENT parameter lists, in the same class; the compiler picks the match.", ar: "نفس اسم الدالة بقوائم معاملات مختلفة في نفس الصنف؛ والمترجم يختار المطابق." },
    { t: "Overriding (@Override)", lv: 3, en: "A subclass redefines the SAME method signature of its parent.", ar: "الصنف الابن يعيد تعريف نفس توقيع دالة الأب." },
    { t: "Abstraction", lv: 3, en: "Show essential features, hide complexity: abstract classes and interfaces.", ar: "إظهار المزايا الأساسية وإخفاء التعقيد: الأصناف المجردة والواجهات." },
    { t: "Abstract class", lv: 4, en: "Cannot be instantiated (new Shape() is an error); subclasses must implement its abstract methods.", ar: "لا يمكن إنشاء كائن منه (new Shape() خطأ)؛ والأبناء لازم ينفذون دواله المجردة." },
    { t: "Interface (implements)", lv: 4, en: "A contract of methods; implementing classes must provide them as public methods.", ar: "عقد لدوال؛ والأصناف المنفذة لازم توفرها كدوال public." },
    { t: "SDLC", lv: 1, en: "Software Development Life Cycle: analyse, design, develop, test, deploy, maintain.", ar: "دورة حياة تطوير البرمجيات: التحليل، التصميم، التطوير، الاختبار، النشر، الصيانة." },
    { t: "Waterfall", lv: 1, en: "Linear: finish one phase before the next. Fits fixed, clear requirements.", ar: "خطي: تنهي المرحلة قبل التالية. يناسب المتطلبات الثابتة الواضحة." },
    { t: "Agile", lv: 1, en: "Develop in small steps (iterations) and improve with feedback.", ar: "التطوير بخطوات صغيرة (تكرارات) والتحسين بالملاحظات." },
    { t: "Scrum", lv: 2, en: "An Agile framework: short sprints (e.g. 2 weeks) and frequent progress reviews.", ar: "إطار Agile: دورات قصيرة (Sprint مثلاً أسبوعين) ومراجعة تقدم متكررة." },
    { t: "RAD", lv: 2, en: "Rapid Application Development: quick prototypes improved with user feedback.", ar: "تطوير التطبيقات السريع: نماذج أولية سريعة تُحسّن بملاحظات المستخدم." },
    { t: "DevOps", lv: 2, en: "Development + operations together; automated testing and releases.", ar: "التطوير والتشغيل معاً؛ اختبار وإطلاق مؤتمت." },
    { t: "Library", lv: 2, en: "Collection of reusable code your app CALLS when it needs a function.", ar: "مجموعة كود قابل لإعادة الاستخدام يستدعيه تطبيقك عند الحاجة." },
    { t: "Framework", lv: 3, en: "A larger structure that controls the flow; YOUR code fits into it (Swing, Spring).", ar: "هيكل أكبر يتحكم في سير البرنامج؛ وكودك يندمج فيه (Swing وSpring)." },
    { t: "Package", lv: 2, en: "Groups related classes and interfaces; avoids name conflicts (java.util).", ar: "يجمع الأصناف والواجهات المترابطة؛ ويمنع تعارض الأسماء (java.util)." },
    { t: "JAR file", lv: 2, en: "Archive bundling compiled classes and resources: a packed box of reusable Java code.", ar: "أرشيف يجمع الأصناف المترجمة والموارد: صندوق جاهز من كود جافا." },
    { t: "Classpath", lv: 3, en: "Tells Java where to find classes and JAR files.", ar: "يخبر جافا وين تلقى الأصناف وملفات JAR." },
    { t: "import", lv: 2, en: "Lets a source file use a type from another package. A wildcard (*) does not import subpackages.", ar: "يسمح لملف الكود باستخدام نوع من حزمة أخرى. والرمز * ما يستورد الحزم الفرعية." },
    { t: "Dependency", lv: 3, en: "A package, class, library or file the project needs to build or run.", ar: "حزمة أو صنف أو مكتبة أو ملف يحتاجه المشروع للبناء أو التشغيل." },
    { t: "Design pattern", lv: 3, en: "A general reusable solution IDEA for a common design problem; not code you copy like a JAR.", ar: "فكرة حل عامة قابلة لإعادة الاستخدام لمشكلة تصميم متكررة؛ ليست كوداً تنسخه مثل JAR." },
    { t: "Gang of Four categories", lv: 4, en: "Creational (object creation, e.g. Factory, Singleton), Structural (composition, e.g. Adapter), Behavioral (communication, e.g. Observer).", ar: "إنشائية (إنشاء الكائنات مثل Factory وSingleton)، هيكلية (التركيب مثل Adapter)، سلوكية (التواصل مثل Observer)." },
    { t: "Programming idiom", lv: 4, en: "A low-level, language-specific common way to write a small task.", ar: "طريقة شائعة منخفضة المستوى وخاصة بلغة معينة لكتابة مهمة صغيرة." },
    { t: "Repository", lv: 2, en: "Central place to store and manage resources; online (GitHub) or offline (file system).", ar: "مكان مركزي لتخزين وإدارة الموارد؛ أونلاين (GitHub) أو محلي (نظام الملفات)." },
    { t: "Git vs GitHub", lv: 2, en: "Git = version-control tool. GitHub = online platform hosting repositories. Workflow: clone, edit, commit, push, pull.", ar: "Git = أداة التحكم بالإصدارات. GitHub = منصة أونلاين تستضيف المستودعات. المسار: clone وedit وcommit وpush وpull." },
    { t: "Product / process / project metrics", lv: 4, en: "Product = the software itself (size, defects). Process = how development/maintenance work (defect-fix time). Project = people, cost, schedule, productivity.", ar: "المنتج = البرنامج نفسه (الحجم والأخطاء). العملية = طريقة التطوير والصيانة (وقت إصلاح الخطأ). المشروع = الأشخاص والتكلفة والجدول والإنتاجية." },
    { t: "Licence", lv: 3, en: "Decides whether reuse of a component is legally permitted; part of evaluation.", ar: "يحدد هل يُسمح قانونياً بإعادة استخدام المكون؛ وهو جزء من التقييم." }
  ],
  topics: [
    { lv: 1, t: { en: "Software reuse and reusable components", ar: "إعادة استخدام البرمجيات والمكونات" },
      en: "Reuse means using something that already exists instead of building it again. A component is a part of software with one clear job. Classify components as method, class, UI component, business component or technical component.",
      ar: "إعادة الاستخدام تعني استخدام شيء موجود بدل بنائه من جديد. المكون جزء من البرنامج له مهمة واضحة واحدة. صنّف المكونات: دالة، صنف، مكون واجهة، مكون عمل، أو مكون تقني.",
      more: { en: "Benefits: tested components may reduce defects, save time, and a shared component can be updated once. Limitation: it must be suitable, safe, maintainable and legally allowed. Examples: login function reused in another app, price calculation for another product, one button design on many screens. Four questions for any candidate: what enters, what single job, what leaves, where else would it be reused?",
              ar: "الفوائد: المكونات المختبرة تقلل الأخطاء وتوفر الوقت، والمكون المشترك يتحدث مرة وحدة. القيد: لازم يكون مناسباً وآمناً وقابلاً للصيانة ومسموحاً قانونياً. أمثلة: دالة تسجيل الدخول في تطبيق آخر، حساب السعر لمنتج آخر، تصميم زر واحد في شاشات كثيرة. أربعة أسئلة لأي مكون مرشح: وش يدخل؟ وش مهمته الوحيدة؟ وش يطلع؟ ووين أقدر أعيد استخدامه؟" } },
    { lv: 1, t: { en: "Java tools: from source code to running program", ar: "أدوات جافا: من الكود إلى البرنامج الشغال" },
      en: "Editor writes code → compiler (javac) translates .java into .class bytecode → JVM reads and runs the bytecode. An IDE bundles editor, build tools, debugger and output in one app.",
      ar: "المحرر يكتب الكود ← المترجم (javac) يحول .java إلى كود وسيط .class ← آلة JVM تقرأ الكود الوسيط وتشغله. الـ IDE يجمع المحرر وأدوات البناء ومصحح الأخطاء والمخرجات في تطبيق واحد.",
      more: { en: "Compiler vs interpreter: compiler translates the COMPLETE program first and reports syntax errors before running ('Compiler = complete code first'); interpreter translates and runs line by line. Java is portable because the same bytecode runs on any OS with a JVM. CBT patterns: 'Who understands the .class file?' → JVM. 'Which tool creates bytecode?' → compiler. Trap: Eclipse is an IDE, not Photoshop/Dreamweaver.",
              ar: "المترجم مقابل المفسر: المترجم يحول البرنامج كاملاً أولاً ويبلغ عن الأخطاء قبل التشغيل، والمفسر يحول وينفذ سطراً بسطر. جافا قابلة للنقل لأن نفس الكود الوسيط يشتغل على أي نظام فيه JVM. أنماط الاختبار: 'مين يفهم ملف .class؟' ← JVM. 'أي أداة تنتج الكود الوسيط؟' ← المترجم. فخ: Eclipse هو IDE وليس فوتوشوب أو دريمويفر." } },
    { lv: 2, t: { en: "Class and object in Java", ar: "الصنف والكائن في جافا" },
      en: "A class is a reusable blueprint; an object is one instance created with new. Objects of the same class have the same structure but different values (student1, teacher1, counselor all from SchoolMember).",
      ar: "الصنف مخطط قابل لإعادة الاستخدام، والكائن نسخة واحدة تُنشأ بـ new. كائنات نفس الصنف لها نفس البنية لكن قيم مختلفة (student1 وteacher1 وcounselor كلهم من SchoolMember).",
      more: { en: "In 'Animals Cat = new Animals();' the class is Animals and the object name is Cat. To add a counselor you do NOT need a new class: reuse SchoolMember with new values. This is the simplest form of reuse in OOP.",
              ar: "في 'Animals Cat = new Animals();' الصنف هو Animals واسم الكائن Cat. لإضافة مرشدة ما تحتاج صنفاً جديداً: أعد استخدام SchoolMember بقيم جديدة. هذا أبسط شكل لإعادة الاستخدام في OOP." } },
    { lv: 3, t: { en: "The four OOP principles in Java code", ar: "مبادئ OOP الأربعة في كود جافا" },
      en: "Encapsulation: private fields + public methods that validate. Inheritance: extends, super(). Polymorphism: overriding and overloading. Abstraction: abstract classes and interfaces hide complex steps.",
      ar: "التغليف: حقول private + دوال public تتحقق. الوراثة: extends وsuper(). تعدد الأشكال: إعادة التعريف والتحميل الزائد. التجريد: الأصناف المجردة والواجهات تخفي الخطوات المعقدة.",
      more: { en: "Code clues: 'private double balance' + deposit() that checks amount > 0 → encapsulation. account.balance = 100 from another class → compile error (private). 'Animal pet = new Dog(); pet.sound()' → prints Dog's version 'woof' (the ACTUAL object decides). print(int) and print(String) → overloading. @Override speak() in Cat → overriding. car.start() hiding checkBattery/supplyFuel/turnEngine → abstraction. new Shape() on an abstract class → compile error. A class implementing an interface must provide PUBLIC methods.",
              ar: "دلائل الكود: 'private double balance' مع deposit() يتحقق amount > 0 ← تغليف. account.balance = 100 من صنف آخر ← خطأ ترجمة (private). 'Animal pet = new Dog(); pet.sound()' ← يطبع نسخة Dog 'woof' (الكائن الفعلي هو اللي يقرر). print(int) وprint(String) ← تحميل زائد. @Override speak() في Cat ← إعادة تعريف. car.start() يخفي checkBattery وsupplyFuel وturnEngine ← تجريد. new Shape() على صنف مجرد ← خطأ ترجمة. الصنف اللي ينفذ واجهة لازم يوفر دوال public." } },
    { lv: 2, t: { en: "SDLC and methodologies", ar: "دورة حياة التطوير والمنهجيات" },
      en: "SDLC: analyse, design, develop, test, deploy, maintain. Waterfall = one phase then the next. Agile = small steps with feedback. Scrum = Agile with sprints. RAD = fast prototypes with user feedback. DevOps = dev + ops, automated testing and releases.",
      ar: "دورة الحياة: تحليل، تصميم، تطوير، اختبار، نشر، صيانة. Waterfall = مرحلة ثم التالية. Agile = خطوات صغيرة مع ملاحظات. Scrum = Agile بدورات Sprint. RAD = نماذج سريعة مع ملاحظات المستخدم. DevOps = تطوير وتشغيل، واختبار وإطلاق مؤتمت.",
      more: { en: "Scenarios: fixed requirements, design before coding (payroll) → Waterfall. Customer wants a working sample quickly to give feedback → RAD. Two-week cycles with daily checks → Scrum. Automatic testing and releases whenever code is ready → DevOps. Agile is the broad approach; Scrum is one way to apply it; DevOps can support Agile or Waterfall. There is no single best methodology; pick by requirements, feedback, risk, team and delivery needs. Analysis activity example: detailed analysis of the old system.",
              ar: "سيناريوهات: متطلبات ثابتة وتصميم قبل البرمجة (رواتب) ← Waterfall. العميل يبي نموذجاً شغالاً بسرعة ليعطي ملاحظات ← RAD. دورات أسبوعين مع متابعة يومية ← Scrum. اختبار وإطلاق تلقائي كل ما الكود جاهز ← DevOps. Agile هو المنهج العام وScrum طريقة لتطبيقه، وDevOps يدعم Agile أو Waterfall. ما فيه منهجية واحدة الأفضل دائماً؛ اختر حسب المتطلبات والملاحظات والمخاطر والفريق والتسليم. مثال على نشاط التحليل: تحليل مفصل للنظام القديم." } },
    { lv: 3, t: { en: "Libraries, packages, JAR, classpath, frameworks", ar: "المكتبات والحزم وJAR وclasspath وأطر العمل" },
      en: "Library = reusable code your app calls. Package = groups related classes (java.util). JAR = bundle of compiled classes. Classpath = where Java looks for classes/JARs. import = use a class from another package. Framework = larger structure that controls the flow.",
      ar: "المكتبة = كود قابل لإعادة الاستخدام يستدعيه تطبيقك. الحزمة = تجمع أصنافاً مترابطة (java.util). JAR = حزمة أصناف مترجمة. Classpath = وين تدور جافا على الأصناف وملفات JAR. import = استخدم صنفاً من حزمة أخرى. إطار العمل = هيكل أكبر يتحكم في السير.",
      more: { en: "Memory tip: with a LIBRARY, your code calls it; with a FRAMEWORK, your code fits into its structure (inversion of control). Example: Package java.util → class Scanner → method nextLine(). import java.util.Scanner; lets you write Scanner instead of java.util.Scanner. A wildcard import java.util.*; does NOT include subpackages. Before choosing a dependency check function, compatibility, licence and maintenance. A popular component is not automatically correct. Swing/AWT = Java GUI toolkits.",
              ar: "حيلة: مع المكتبة كودك هو اللي يستدعيها، ومع إطار العمل كودك يندمج في هيكله (عكس التحكم). مثال: الحزمة java.util ← الصنف Scanner ← الدالة nextLine(). import java.util.Scanner; يخليك تكتب Scanner بدل java.util.Scanner. الاستيراد بـ * ما يشمل الحزم الفرعية. قبل اختيار اعتمادية افحص الوظيفة والتوافق والترخيص والصيانة. المكون المشهور مو بالضرورة الصحيح. Swing وAWT أدوات واجهات جافا." } },
    { lv: 4, t: { en: "Design patterns vs idioms vs components", ar: "أنماط التصميم مقابل التعابير مقابل المكونات" },
      en: "Design pattern = reusable design IDEA for a recurring problem (not a full program). Idiom = low-level, language-specific way to write a task. Component = actual reusable code. Framework = structure for an application. Algorithm = step-by-step procedure.",
      ar: "نمط التصميم = فكرة تصميم قابلة لإعادة الاستخدام لمشكلة متكررة (ليس برنامجاً كاملاً). التعبير = طريقة منخفضة المستوى خاصة بلغة لكتابة مهمة. المكون = كود فعلي قابل لإعادة الاستخدام. إطار العمل = هيكل لتطبيق. الخوارزمية = خطوات إجرائية.",
      more: { en: "Gang of Four categories: ask 'is the problem creation, structure or communication?' Creational (Factory: caller asks for a service, the factory decides which object to create; Singleton), Structural (Adapter: connects two parts with different interfaces), Behavioral (Observer: one object changes, subscribed objects receive updates; trade-off: subscriptions must be managed). A pattern cannot be copied like a JAR; you implement it with your own classes.",
              ar: "تصنيفات Gang of Four: اسأل 'هل المشكلة في الإنشاء أو الهيكل أو التواصل؟' إنشائية (Factory: المستدعي يطلب خدمة والمصنع يقرر أي كائن ينشئ؛ وSingleton)، هيكلية (Adapter: يربط جزأين بواجهات مختلفة)، سلوكية (Observer: كائن يتغير والكائنات المشتركة توصلها التحديثات؛ لكن لازم إدارة الاشتراكات). النمط ما ينسخ مثل JAR؛ تنفذه بأصنافك." } },
    { lv: 3, t: { en: "Repositories and Git", ar: "المستودعات وGit" },
      en: "A repository is a central place to store and manage resources, online (GitHub) or offline (file system). Git tracks versions; GitHub hosts repositories and supports collaboration (commits, branches, pull requests).",
      ar: "المستودع مكان مركزي لتخزين وإدارة الموارد، أونلاين (GitHub) أو محلي (نظام الملفات). Git يتتبع الإصدارات، وGitHub يستضيف المستودعات ويدعم التعاون (commits وbranches وpull requests).",
      more: { en: "Workflow: clone → edit → commit (save a snapshot with a message) → push (send to remote) → pull (get others' changes). Remote = repository stored somewhere other than your computer. Branch = separate line of work; pull request = ask to merge and review changes. Git and GitHub are connected but not the same thing.",
              ar: "المسار: clone ← تعديل ← commit (حفظ لقطة برسالة) ← push (إرسال للبعيد) ← pull (جلب تغييرات الآخرين). Remote = مستودع مخزن في مكان غير جهازك. Branch = خط عمل منفصل، وPull request = طلب دمج ومراجعة التغييرات. Git وGitHub مترابطان لكن ليسوا نفس الشيء." } },
    { lv: 4, t: { en: "Product, process and project metrics", ar: "مقاييس المنتج والعملية والمشروع" },
      en: "Product metrics describe the software (size, LOC, defects, response time). Process metrics describe how development and maintenance work (defect-fix response time). Project metrics describe people, cost, schedule and productivity.",
      ar: "مقاييس المنتج تصف البرنامج (الحجم، عدد الأسطر، الأخطاء، زمن الاستجابة). مقاييس العملية تصف طريقة التطوير والصيانة (زمن الاستجابة لإصلاح الأخطاء). مقاييس المشروع تصف الأشخاص والتكلفة والجدول والإنتاجية.",
      more: { en: "Classify by the question: 'Is the application responding quickly?' → product. 'How fast do we fix defects?' → process. 'Is the project following the delivery plan / budget?' → project. Record values consistently so they can be compared over time.",
              ar: "صنّف حسب السؤال: 'هل التطبيق يستجيب بسرعة؟' ← منتج. 'كم بسرعة نصلح الأخطاء؟' ← عملية. 'هل المشروع ماشي حسب خطة التسليم والميزانية؟' ← مشروع. سجّل القيم بشكل ثابت حتى تقدر تقارنها مع الوقت." } },
    { lv: 4, t: { en: "Reusable component workflow", ar: "مسار المكون القابل لإعادة الاستخدام" },
      en: "1 Identify candidates → 2 Evaluate (functionality, cost/effort, technical impact, licence) → 3 Create with one defined function → 4 Configure (package, imports, JARs, classpath) → 5 Test in a simple context → 6 Integrate incrementally and resolve dependencies → 7 Final test, document and submit to a library.",
      ar: "1 حدّد المرشحين ← 2 قيّم (الوظيفة، التكلفة والجهد، الأثر التقني، الترخيص) ← 3 أنشئ بوظيفة محددة ← 4 هيّئ (الحزمة، الاستيراد، JAR، classpath) ← 5 اختبر في سياق بسيط ← 6 ادمج تدريجياً وحل الاعتماديات ← 7 اختبار نهائي ووثّق وأضف للمكتبة.",
      more: { en: "Suitable means a good fit for THIS project, not just available or cheap. Licensing is a required evaluation criterion. Typical dependency errors: package name does not match the folder, wrong import, missing library/JAR, classpath cannot find files. Incremental = small changes with checks. Documentation fields: purpose, input (data received), output, dependencies. The final test checks the whole project builds, runs and uses the component correctly.",
              ar: "المناسب يعني ملائم لهذا المشروع، وليس متاح أو رخيص فقط. الترخيص معيار تقييم أساسي. أخطاء الاعتمادية المعتادة: اسم الحزمة ما يطابق المجلد، استيراد غلط، مكتبة أو JAR ناقصة، classpath ما يلقى الملفات. التدريجي = تغييرات صغيرة مع فحص. حقول التوثيق: الهدف، المدخل (البيانات المستلمة)، المخرج، الاعتماديات. الاختبار النهائي يتأكد أن المشروع كله يُبنى ويشتغل ويستخدم المكون صح." } }
  ],
  code: [
    { title: { en: "Class and objects (SchoolMember)", ar: "صنف وكائنات (SchoolMember)" }, lang: "java",
      src: `class SchoolMember {
    String name;
    String role;
}

public class Main {
    public static void main(String[] args) {
        SchoolMember student1 = new SchoolMember();
        student1.name = "Rana";
        student1.role = "Student";

        SchoolMember teacher1 = new SchoolMember();
        teacher1.name = "Ms. Huda";
        teacher1.role = "Teacher";

        System.out.println(student1.name + " is a " + student1.role);
        System.out.println(teacher1.name + " is a " + teacher1.role);
    }
}`,
      lines: [
        { n: "1-4", en: "The class is the reusable blueprint with two String attributes.", ar: "الصنف هو المخطط القابل لإعادة الاستخدام وفيه خاصيتان من نوع String." },
        { n: "8", en: "new creates an object; student1 is the object name.", ar: "new ينشئ كائناً؛ وstudent1 اسم الكائن." },
        { n: "12", en: "Same class, new object, different values: no new class needed.", ar: "نفس الصنف، كائن جديد، قيم مختلفة: ما نحتاج صنفاً جديداً." },
        { n: "16-17", en: "Output: 'Rana is a Student' and 'Ms. Huda is a Teacher'.", ar: "المخرج: 'Rana is a Student' و'Ms. Huda is a Teacher'." }
      ] },
    { title: { en: "Encapsulation with validation", ar: "التغليف مع التحقق" }, lang: "java",
      src: `class Account {
    private double balance;                 // hidden data

    public void deposit(double amount) {
        if (amount > 0) balance += amount;  // controlled change
    }
    public double getBalance() {            // getter
        return balance;
    }
}
// In another class:
// account.balance = 100;  -> compile error: balance is private`,
      lines: [
        { n: "2", en: "private: only code inside Account can touch balance.", ar: "private: فقط الكود داخل Account يقدر يوصل لـ balance." },
        { n: "4-6", en: "The public method validates before changing data (rejects negatives).", ar: "الدالة العامة تتحقق قبل تغيير البيانات (ترفض السالب)." },
        { n: "7-9", en: "Getter returns the private value safely.", ar: "الـ getter يرجع القيمة الخاصة بأمان." },
        { n: "12", en: "Direct access from outside fails at compile time.", ar: "الوصول المباشر من الخارج يفشل وقت الترجمة." }
      ] },
    { title: { en: "Inheritance, overriding and polymorphism", ar: "الوراثة وإعادة التعريف وتعدد الأشكال" }, lang: "java",
      src: `class Person {
    Person(String name) { }
}
class Trainee extends Person {
    Trainee(String name) {
        super(name);                  // must be first: calls parent constructor
    }
}

class Animal {
    String sound() { return "sound"; }
}
class Dog extends Animal {
    @Override
    String sound() { return "woof"; }
}

Animal pet = new Dog();
System.out.println(pet.sound());      // prints: woof`,
      lines: [
        { n: "4", en: "extends: Trainee is a kind of Person.", ar: "extends: المتدرب نوع من الأشخاص." },
        { n: "6", en: "super(name) calls the parent constructor.", ar: "super(name) يستدعي مُنشئ الأب." },
        { n: "14-15", en: "@Override: Dog replaces the inherited method with the same signature.", ar: "@Override: الكلب يستبدل الدالة الموروثة بنفس التوقيع." },
        { n: "18-19", en: "Reference type is Animal but the actual object is Dog, so Dog's version runs: polymorphism.", ar: "نوع المرجع Animal لكن الكائن الفعلي Dog، فتشتغل نسخة Dog: تعدد الأشكال." }
      ] },
    { title: { en: "Overloading, abstract class, interface", ar: "التحميل الزائد والصنف المجرد والواجهة" }, lang: "java",
      src: `class Display {
    void print(int number)  { }       // overloading:
    void print(String word) { }       // same name, different parameters
}

abstract class Shape {
    abstract double area();
}
class Circle extends Shape {
    double r = 2;
    double area() { return 3.14 * r * r; }   // must implement
}
// Shape s = new Shape();  -> compile error: abstract

interface Payment { void pay(); }
class CardPayment implements Payment {
    public void pay() { System.out.println("Paid by card"); }
}`,
      lines: [
        { n: "2-3", en: "Overloading: the compiler picks the version by parameter type.", ar: "التحميل الزائد: المترجم يختار النسخة حسب نوع المعامل." },
        { n: "6-8", en: "An abstract method has no body; subclasses must provide it.", ar: "الدالة المجردة بدون جسم؛ والأبناء لازم يوفرونها." },
        { n: "13", en: "You cannot create an object of an abstract class.", ar: "ما تقدر تنشئ كائناً من صنف مجرد." },
        { n: "15-18", en: "implements: the class must provide the interface method as public.", ar: "implements: الصنف لازم يوفر دالة الواجهة كـ public." }
      ] },
    { title: { en: "Package, import and a reusable component", ar: "حزمة واستيراد ومكون قابل لإعادة الاستخدام" }, lang: "java",
      src: `// File: tourism/util/DiscountCalculator.java
package tourism.util;

public class DiscountCalculator {
    /** Returns the price after a percentage discount. */
    public static double apply(double price, double percent) {
        return price - (price * percent / 100);
    }
}

// File: tourism/app/BookingApp.java
package tourism.app;
import tourism.util.DiscountCalculator;
import java.util.Scanner;

public class BookingApp {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        double price = in.nextDouble();
        System.out.println(DiscountCalculator.apply(price, 10));
    }
}`,
      lines: [
        { n: "2", en: "The package declaration must match the folder tourism/util.", ar: "تعريف الحزمة لازم يطابق المجلد tourism/util." },
        { n: "4-8", en: "A component with ONE defined function, clear input and output, documented.", ar: "مكون بوظيفة واحدة محددة ومدخل ومخرج واضح وموثق." },
        { n: "13-14", en: "import our component and the library class Scanner (java.util).", ar: "استيراد مكوننا وصنف المكتبة Scanner من java.util." },
        { n: "20", en: "Integration test: the app uses the reused function. Missing import/JAR = dependency error.", ar: "اختبار الدمج: التطبيق يستخدم الدالة المعاد استخدامها. نقص import أو JAR = خطأ اعتمادية." }
      ] }
  ],
  quiz: [
    { lv: 1, q: "What is software reuse?", o: ["Deleting old code", "Using existing software knowledge or components to build new software", "Writing everything from zero", "Buying new hardware"], a: 1, why: { en: "Reuse starts with an existing asset.", ar: "إعادة الاستخدام تبدأ بشيء موجود." } },
    { lv: 1, q: "Which tool translates Java source code into bytecode?", o: ["Editor", "Compiler (javac)", "JVM", "GitHub"], a: 1, why: { en: ".java → .class", ar: ".java ← .class" } },
    { lv: 2, q: "Who understands and runs the .class file?", o: ["Editor", "JVM", "Classpath", "Repository"], a: 1, why: { en: "The JVM runs bytecode.", ar: "JVM يشغل الكود الوسيط." } },
    { lv: 2, q: "Why is Java portable?", o: ["It uses no code", "The same bytecode can run on any OS with a JVM", "It avoids translation", "It runs on one machine only"], a: 1, why: { en: "Write once, run anywhere via the JVM.", ar: "اكتب مرة وشغّل في أي مكان عبر JVM." } },
    { lv: 2, q: "class Account { private double balance; public void deposit(double a){ if (a>0) balance+=a; } } shows:", o: ["Encapsulation", "Inheritance", "Polymorphism", "Overloading"], a: 0, why: { en: "Private data + controlled method.", ar: "بيانات خاصة + دالة مضبوطة." } },
    { lv: 2, q: "From another class: account.balance = 100; where balance is private. Result?", o: ["Changes balance to 100", "Prints 500", "Compile error: balance is private", "Creates a new field"], a: 2, why: { en: "Private fields are not accessible outside.", ar: "الحقول الخاصة غير متاحة من الخارج." } },
    { lv: 1, q: "Which keyword completes: class Cat ____ Animal { }", o: ["implements", "extends", "private", "return"], a: 1, why: { en: "Class-to-class inheritance uses extends.", ar: "الوراثة بين الأصناف بـ extends." } },
    { lv: 2, q: "Which line calls the parent constructor inside Trainee(String name)?", o: ["this.name = name;", "super(name);", "extends(name);", "Person(name);"], a: 1, why: { en: "super(...) must be first.", ar: "super(...) لازم يكون أولاً." } },
    { lv: 3, q: "Animal pet = new Dog(); Dog overrides sound() to return \"woof\". pet.sound() prints:", o: ["sound", "woof", "Dog", "Compile error"], a: 1, why: { en: "The actual object type decides.", ar: "نوع الكائن الفعلي هو اللي يقرر." } },
    { lv: 3, q: "print(int number) and print(String word) in the same class is:", o: ["Overriding", "Overloading", "Encapsulation", "Inheritance"], a: 1, why: { en: "Same name, different parameter lists.", ar: "نفس الاسم وقوائم معاملات مختلفة." } },
    { lv: 4, q: "Shape is abstract. Which line causes a compile error?", o: ["Shape s = new Circle();", "Shape s = new Shape();", "class Circle extends Shape { double area(){return 0;} }", "None"], a: 1, why: { en: "Abstract classes cannot be instantiated.", ar: "الصنف المجرد لا يُنشأ منه كائن." } },
    { lv: 3, q: "car.start() hides checkBattery(), supplyFuel(), turnEngine(). Which principle?", o: ["Inheritance", "Abstraction", "Overloading", "Compilation"], a: 1, why: { en: "Simple action hides complex steps.", ar: "فعل بسيط يخفي خطوات معقدة." } },
    { lv: 4, q: "class CardPayment implements Payment { ??? } where Payment has void pay(). Correct method?", o: ["private void pay() { }", "public void pay() { }", "abstract void pay() { }", "void Payment() { }"], a: 1, why: { en: "Interface methods must be implemented as public.", ar: "دوال الواجهة تُنفذ كـ public." } },
    { lv: 2, q: "Requirements are fixed and design must finish before coding. Best methodology?", o: ["Waterfall", "RAD", "Scrum", "DevOps"], a: 0, why: { en: "Linear phases for fixed requirements.", ar: "مراحل خطية لمتطلبات ثابتة." } },
    { lv: 2, q: "The customer wants a working sample quickly to give feedback.", o: ["Waterfall", "RAD", "DevOps", "Repository"], a: 1, why: { en: "Rapid prototypes + feedback.", ar: "نماذج سريعة + ملاحظات." } },
    { lv: 2, q: "Testing and releases happen automatically whenever code is ready.", o: ["Waterfall", "Scrum", "DevOps", "RAD"], a: 2, why: { en: "Dev + Ops with automation.", ar: "تطوير وتشغيل مع أتمتة." } },
    { lv: 3, q: "Which statement about Agile and Scrum is correct?", o: ["They are unrelated", "Scrum is one framework for applying Agile, using sprints", "Agile is part of Scrum", "Scrum is Waterfall"], a: 1, why: { en: "Agile = approach; Scrum = framework.", ar: "Agile منهج وScrum إطار." } },
    { lv: 3, q: "What is the main purpose of a JAR file?", o: ["Edit code", "Bundle compiled classes and resources into one archive", "Run Git", "Store database rows"], a: 1, why: { en: "A packed box of reusable Java code.", ar: "صندوق جاهز من كود جافا." } },
    { lv: 3, q: "What does import java.util.Scanner; do?", o: ["Downloads Scanner", "Lets the file use the Scanner class from java.util", "Creates a package", "Runs the JVM"], a: 1, why: { en: "import makes a type from another package available.", ar: "import يتيح نوعاً من حزمة أخرى." } },
    { lv: 3, q: "Library vs framework: which is correct?", o: ["Your code calls a library; your code fits into a framework's structure", "They are the same", "A framework is smaller than a library", "A library controls your flow"], a: 0, why: { en: "Frameworks control the flow.", ar: "إطار العمل يتحكم في السير." } },
    { lv: 3, q: "What tells Java where to find classes and JAR files?", o: ["Package", "Classpath", "Idiom", "Commit"], a: 1, why: { en: "Classpath = search location.", ar: "Classpath = مكان البحث." } },
    { lv: 4, q: "'A recurring object-oriented design solution' is a:", o: ["Design pattern", "Programming idiom", "Repository", "Metric"], a: 0, why: { en: "Pattern = reusable design idea.", ar: "النمط = فكرة تصميم قابلة لإعادة الاستخدام." } },
    { lv: 4, q: "A low-level, language-specific way to write a common task is a:", o: ["Programming idiom", "Framework", "Repository", "Project metric"], a: 0, why: { en: "Idioms are language-specific.", ar: "التعابير خاصة باللغة." } },
    { lv: 4, q: "Notification objects subscribe and receive updates when a Booking changes. Which pattern?", o: ["Factory", "Observer", "Adapter", "Singleton"], a: 1, why: { en: "Behavioral pattern for change notification.", ar: "نمط سلوكي للإشعار بالتغيير." } },
    { lv: 2, q: "Git vs GitHub:", o: ["Same thing", "Git is a version-control tool; GitHub is an online platform hosting repositories", "GitHub is a compiler", "Git is a cloud service only"], a: 1, why: { en: "Tool vs platform.", ar: "أداة مقابل منصة." } },
    { lv: 4, q: "A team measures the response time for fixing defects. This is a:", o: ["Product metric", "Process metric", "Project metric", "Design pattern"], a: 1, why: { en: "It describes how the maintenance process works.", ar: "يصف طريقة عمل عملية الصيانة." } },
    { lv: 4, q: "Which problem is a dependency error?", o: ["A typo in a comment", "A required package, import or library cannot be found", "A slow monitor", "A long method name"], a: 1, why: { en: "Dependencies = what the build needs.", ar: "الاعتماديات = ما يحتاجه البناء." } },
    { lv: 4, q: "Which is an evaluation criterion when choosing a reusable component?", o: ["Its name sounds good", "Licence", "Its colour", "It is popular"], a: 1, why: { en: "Licence decides if reuse is allowed.", ar: "الترخيص يحدد هل يُسمح بالاستخدام." } },
    { lv: 4, q: "How should a component be added to the project?", o: ["All at once without testing", "Incrementally, checking each step and resolving dependencies", "Only after release", "By copying the whole library"], a: 1, why: { en: "Small changes with checks.", ar: "تغييرات صغيرة مع فحص." } }
  ]
});
