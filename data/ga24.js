window.STUDY = window.STUDY || { units: [] };
STUDY.ga = STUDY.ga || {};
STUDY.ga.u24 = {
  ga: 'GA7', num: 24, title: { en: 'Use software libraries and components (Smart Tourism)', ar: 'استخدام المكتبات والمكونات (السياحة الذكية)' },
  file: 'U24.GA7.TraineeName.TraineeID + Tasks 1-3 Template + TourismSystem_TraineeName_TraineeID.zip',
  scenario: { en: 'Vision 2030 "Smart Tourism Service System". You get a working Java (NetBeans) program that calculates trip costs. Identify reusable components, evaluate options, then build ONE reusable component in a library.components package, test it and integrate it.', ar: 'نظام "السياحة الذكية" لرؤية 2030. يعطونك برنامج جافا (NetBeans) شغال يحسب تكلفة الرحلة. تحدد المكونات القابلة لإعادة الاستخدام، تقيّم الخيارات، ثم تبني مكوّن واحد في حزمة library.components، تختبره وتدمجه.' },
  tools: { en: 'NetBeans + JDK, the given TourismSystem project, Tasks 1–3 Template (Tables 1–5), Snipping Tool.', ar: 'NetBeans وJDK، مشروع TourismSystem المعطى، قالب Tasks 1–3 (الجداول 1 إلى 5)، أداة القص.' },
  rules: [
    { en: 'The component you choose in Task 2 MUST be the one you build in Task 3.', ar: 'المكوّن اللي تختاره في Task 2 لازم يكون نفسه اللي تبنيه في Task 3.' },
    { en: '"Organized clearly + references where possible" is an A item in each task.', ar: '"منظم بوضوح + مراجع إذا أمكن" بند A في كل تاسك.' },
    { en: 'Write the code yourself; screenshots must show NetBeans with your project.', ar: 'اكتب الكود بنفسك؛ واللقطات لازم توضح NetBeans مع مشروعك.' }
  ],
  tasks: [
    { n: 'Task 1', title: { en: 'Identify reusable components in the given program', ar: 'حدد المكونات القابلة لإعادة الاستخدام في البرنامج' }, crit: '1.1–1.2',
      need: { en: 'Table 1: name, type, functionality and justification for reuse of components already in the program.', ar: 'الجدول 1: الاسم، النوع، الوظيفة، وتبرير إعادة الاستخدام لمكونات موجودة في البرنامج.' },
      explain: { en: 'Open the code and look for parts with ONE clear job that another program could use: a cost calculation method, a Swing JComboBox of cities, a JButton handler, the JFrame form.', ar: 'افتح الكود ودوّر على أجزاء لها وظيفة وحدة واضحة يقدر برنامج ثاني يستخدمها: دالة حساب التكلفة، قائمة المدن JComboBox، معالج الزر JButton، نموذج JFrame.' },
      steps: [
        { en: 'Read TourismForm.java and list the methods and Swing components.', ar: 'اقرأ TourismForm.java واكتب الدوال ومكونات Swing.' },
        { en: 'Pick at least TWO; classify the type (method, class, UI component, business or technical component).', ar: 'اختر اثنين على الأقل؛ وصنّف النوع (دالة، صنف، مكوّن واجهة، مكوّن عمل أو تقني).' },
        { en: 'Justify: one clear job, clear input/output, useful elsewhere (hotel, museum, cinema booking).', ar: 'برّر: وظيفة وحدة واضحة، مدخل ومخرج واضح، مفيد في مكان ثاني (حجز فندق، متحف، سينما).' }
      ],
      shots: [{ en: 'Table 1 + a NetBeans screenshot of each component in the code.', ar: 'الجدول 1 + لقطة NetBeans لكل مكوّن في الكود.' }],
      a: { en: 'A: two appropriate components with type described and suitability justified.', ar: 'A: مكونين مناسبين مع وصف النوع وتبرير الملاءمة.' } },
    { n: 'Task 2', title: { en: 'Evaluate, compare and select', ar: 'قيّم وقارن واختر' }, crit: '2.1–2.7',
      need: { en: 'Table 2: evaluate options (Input Validator, Discount Calculator, Name Formatter, Greeting Generator, or your own) for requirement support, cost (time/effort), technical impact, licensing. Table 3: comparison. Then final decision and reflection.', ar: 'الجدول 2: قيّم الخيارات (مدقق المدخلات، حاسبة الخصم، منسق الاسم، مولد التحية، أو من عندك) من حيث المتطلب، التكلفة (الوقت/الجهد)، الأثر التقني، الترخيص. الجدول 3: المقارنة. ثم القرار والتأمل.' },
      explain: { en: 'Requirements to match: accept input, validate input, calculate cost, display output, reusable & maintainable. Licensing: your own code → no licence issue (say so).', ar: 'المتطلبات للمطابقة: استقبال المدخل، التحقق منه، حساب التكلفة، عرض المخرج، قابل لإعادة الاستخدام والصيانة. الترخيص: كودك أنت ← ما فيه مشكلة ترخيص (قلها).' },
      steps: [
        { en: 'Evaluate at least THREE options in Table 2 (all four columns filled).', ar: 'قيّم 3 خيارات على الأقل في الجدول 2 (كل الأعمدة الأربعة معبّأة).' },
        { en: 'Table 3: which requirement each one meets (✓/✗) and effort level.', ar: 'الجدول 3: أي متطلب يحقق كل واحد (✓/✗) ومستوى الجهد.' },
        { en: 'Reflection: why you chose one, why you rejected each other one, licensing, effect on the system.', ar: 'التأمل: ليش اخترت واحد، ليش رفضت كل واحد من الباقي، الترخيص، وأثره على النظام.' }
      ],
      shots: [{ en: 'Tables 2–3 + reflection paragraph.', ar: 'الجدولين 2 و3 + فقرة التأمل.' }],
      a: { en: 'A: 3+ components evaluated on all four factors; clear, well-justified decision including rejections.', ar: 'A: 3 مكونات أو أكثر مقيّمة بالعوامل الأربعة؛ وقرار واضح ومبرر يشمل أسباب الرفض.' } },
    { n: 'Task 3 · 3.1–3.2', title: { en: 'Create the component and import it', ar: 'أنشئ المكوّن واستورده' }, crit: '3.1–3.2',
      need: { en: 'Create package library.components, a class for your option, and import it into the main program.', ar: 'أنشئ الحزمة library.components وصنف للخيار اللي اخترته، واستورده في البرنامج الرئيسي.' },
      explain: { en: 'A good component: one class, one clear public method, input via parameters, output via return value, no UI code inside.', ar: 'المكوّن الجيد: صنف واحد، دالة عامة واضحة، المدخل عبر المعاملات، المخرج عبر القيمة الراجعة، وبدون كود واجهة بداخله.' },
      steps: [
        { en: 'Right-click Source Packages → New → Java Package → library.components.', ar: 'كليك يمين على Source Packages ← New ← Java Package ← library.components.' },
        { en: 'New Java Class inside it; write one public static method (pattern below).', ar: 'Java Class جديد داخلها؛ واكتب دالة public static وحدة (النمط تحت).' },
        { en: 'In the form: import library.components.YourClass;', ar: 'في النموذج: import library.components.YourClass;' }
      ],
      code: 'package library.components;\n\n/** Purpose: ... (one clear job)\n *  Input: ...   Output: ... */\npublic class YourComponent {\n    public static RETURN_TYPE doJob(PARAMS) {\n        // your logic here\n    }\n}', lang: 'java',
      shots: [{ en: 'Projects tree showing library.components + the class code.', ar: 'شجرة المشروع فيها library.components + كود الصنف.' }],
      a: { en: 'Clean package name, one responsibility, a JavaDoc comment at the top.', ar: 'اسم حزمة نظيف، مسؤولية وحدة، وتعليق JavaDoc في الأعلى.' } },
    { n: 'Task 3 · 3.3', title: { en: 'Test class in library.testing', ar: 'صنف الاختبار في library.testing' }, crit: '3.3',
      need: { en: 'Create package library.testing with a test class whose main() calls your component and prints clear results.', ar: 'أنشئ الحزمة library.testing وفيها صنف اختبار، والـ main() يستدعي المكوّن ويطبع نتائج واضحة.' },
      explain: { en: 'Test normal, boundary and invalid inputs so the output proves it works.', ar: 'اختبر مدخل عادي وحدّي وغير صالح عشان المخرج يثبت إنه يشتغل.' },
      steps: [
        { en: 'Create the package and a class with main().', ar: 'أنشئ الحزمة وصنف فيه main().' },
        { en: 'Call your method 3–4 times with different inputs and print "input → output".', ar: 'استدعِ دالتك 3–4 مرات بمدخلات مختلفة واطبع "المدخل ← المخرج".' },
        { en: 'Run File (Shift+F6) and screenshot the Output window.', ar: 'شغّل الملف (Shift+F6) وصوّر نافذة Output.' }
      ],
      code: 'package library.testing;\n\nimport library.components.YourComponent;\n\npublic class YourComponentTest {\n    public static void main(String[] args) {\n        System.out.println("Test 1 (normal): " + YourComponent.doJob(...));\n        System.out.println("Test 2 (boundary): " + YourComponent.doJob(...));\n        System.out.println("Test 3 (invalid): " + YourComponent.doJob(...));\n    }\n}', lang: 'java',
      shots: [{ en: 'Test class code + Output window.', ar: 'كود صنف الاختبار + نافذة Output.' }],
      a: { en: 'A: clear and correct output from the test class.', ar: 'A: مخرج واضح وصحيح من صنف الاختبار.' } },
    { n: 'Task 3 · 3.4–3.6', title: { en: 'Integrate, fix dependencies, final test', ar: 'الدمج وإصلاح الاعتماديات والاختبار النهائي' }, crit: '3.4–3.6, 4.1–4.3',
      need: { en: 'Add the component step by step into the button click logic or input validation, fix import/method errors, run the full program with no crashes and correct output.', ar: 'أضف المكوّن خطوة بخطوة في كود ضغط الزر أو التحقق من المدخلات، أصلح أخطاء الاستيراد والدوال، وشغّل البرنامج كامل بدون أعطال وبمخرج صحيح.' },
      explain: { en: 'Incremental = add one call, run, check, then the next. Dependency errors = wrong package name, missing import, wrong method signature.', ar: 'تدريجي = أضف استدعاء واحد، شغّل، افحص، ثم اللي بعده. أخطاء الاعتمادية = اسم حزمة غلط، import ناقص، توقيع دالة غلط.' },
      steps: [
        { en: 'Open the Calculate button\'s actionPerformed and call your component there.', ar: 'افتح actionPerformed لزر الحساب واستدعِ المكوّن هناك.' },
        { en: 'If you get an error, screenshot it, fix it, screenshot the fix (that is your 3.5 evidence).', ar: 'إذا طلع خطأ، صوّره، أصلحه، وصوّر الإصلاح (هذا دليلك لـ 3.5).' },
        { en: 'Run the whole program (F6) with valid and invalid input; screenshot both.', ar: 'شغّل البرنامج كامل (F6) بمدخل صحيح وغلط؛ وصوّر الحالتين.' }
      ],
      shots: [{ en: 'Table 4: code in the form, error + fix, running program screenshots.', ar: 'الجدول 4: الكود في النموذج، الخطأ + الإصلاح، لقطات البرنامج شغال.' }],
      a: { en: 'Show each step, not only the final result; then zip the project as TourismSystem_TraineeName_TraineeID.zip.', ar: 'وضّح كل خطوة مو بس النتيجة؛ ثم اضغط المشروع باسم TourismSystem_TraineeName_TraineeID.zip.' } },
    { n: 'Task 3 · 3.7', title: { en: 'Component documentation', ar: 'توثيق المكوّن' }, crit: '3.7',
      need: { en: 'Table 5: component name, purpose, inputs and outputs.', ar: 'الجدول 5: اسم المكوّن، الهدف، المدخلات، المخرجات.' },
      explain: { en: 'This lets another developer reuse it without reading the code.', ar: 'هذا يخلي مطور ثاني يعيد استخدامه بدون ما يقرأ الكود.' },
      steps: [
        { en: 'Fill name, purpose (one sentence), inputs (name + type), outputs (type + meaning, e.g. "double, total in SAR").', ar: 'عبِّ الاسم، الهدف (جملة وحدة)، المدخلات (الاسم + النوع)، المخرجات (النوع + المعنى، مثلاً "double، المجموع بالريال").' },
        { en: 'Add the references section of the template.', ar: 'عبِّ قسم المراجع في القالب.' }
      ],
      shots: [{ en: 'Table 5 + references.', ar: 'الجدول 5 + المراجع.' }],
      a: { en: 'A: purpose, inputs and outputs documented.', ar: 'A: الهدف والمدخلات والمخرجات موثقة.' } }
  ]
};
