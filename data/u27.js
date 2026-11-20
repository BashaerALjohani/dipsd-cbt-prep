window.STUDY = window.STUDY || { units: [] };
STUDY.units.push({
  id: "u27", num: 27,
  title: { en: "Develop Data-Driven Applications", ar: "تطوير التطبيقات المعتمدة على البيانات" },
  intro: {
    en: "What makes an app data-driven, the three-layer model (UI, business logic, data access), the LEAP project structure, and choosing a data-access API: JDBC, ADO/ADO.NET, LINQ, ODBC.",
    ar: "ما الذي يجعل التطبيق معتمداً على البيانات، والنموذج ثلاثي الطبقات (الواجهة، منطق العمل، الوصول للبيانات)، وهيكل مشروع LEAP، واختيار واجهة الوصول للبيانات: JDBC وADO/ADO.NET وLINQ وODBC."
  },
  klos: [
    { en: "KLO 1.1 Data-driven applications and the three-layer model", ar: "KLO 1.1 التطبيقات المعتمدة على البيانات والنموذج ثلاثي الطبقات" },
    { en: "KLO 1.2 Choosing a data-access API", ar: "KLO 1.2 اختيار واجهة الوصول للبيانات" }
  ],
  keywords: [
    { t: "Data-driven application", lv: 1, en: "An app whose main job depends on storing, finding, changing or showing data (orders, attendance, exhibitors).", ar: "تطبيق وظيفته الأساسية تعتمد على تخزين البيانات أو البحث فيها أو تعديلها أو عرضها (طلبات، حضور، عارضين)." },
    { t: "Architecture", lv: 1, en: "The plan for how the parts of an application fit together.", ar: "خطة توضح كيف تترابط أجزاء التطبيق." },
    { t: "Layer / tier", lv: 1, en: "One part of the design with a clear job. A layer is a responsibility, not always a separate screen or computer.", ar: "جزء من التصميم له مهمة واضحة. الطبقة مسؤولية وليست دائماً شاشة أو جهازاً منفصلاً." },
    { t: "UI / presentation layer", lv: 1, en: "Screens, forms, buttons, tables and messages; receives input and shows results.", ar: "الشاشات والنماذج والأزرار والجداول والرسائل؛ تستقبل المدخلات وتعرض النتائج." },
    { t: "Business logic layer (BLL)", lv: 2, en: "Checks the organisation's rules and makes decisions before an action is accepted.", ar: "تتحقق من قواعد المنظمة وتتخذ القرار قبل قبول أي عملية." },
    { t: "Data access layer (DAL)", lv: 2, en: "Talks to the data source: sends requests to read/change data and returns results (DBHelper.java).", ar: "تتواصل مع مصدر البيانات: ترسل طلبات القراءة والتعديل وترجع النتائج (DBHelper.java)." },
    { t: "Data source", lv: 1, en: "Where data is stored or comes from (MySQL database). It is NOT a layer.", ar: "مكان تخزين البيانات أو مصدرها (قاعدة MySQL). وهو ليس طبقة." },
    { t: "Business rule", lv: 2, en: "A rule the app must follow: company name required; only Admin sees all exhibitors.", ar: "قاعدة يجب أن يلتزم بها التطبيق: اسم الشركة مطلوب، والمسؤول فقط يرى كل العارضين." },
    { t: "API", lv: 1, en: "Rules and ready tools that let one software part ask another to do a job. Like a restaurant menu.", ar: "قواعد وأدوات جاهزة تخلي جزءاً من البرنامج يطلب من جزء آخر ينفذ مهمة. مثل قائمة المطعم." },
    { t: "Driver", lv: 2, en: "Software that translates API requests for a specific DBMS (MySQL Connector/J).", ar: "برنامج يترجم طلبات الـ API لنظام قاعدة بيانات معين (MySQL Connector/J)." },
    { t: "DBMS", lv: 1, en: "Software that stores and manages databases (MySQL).", ar: "برنامج يخزن قواعد البيانات ويديرها (MySQL)." },
    { t: "JDBC", lv: 1, en: "Java Database Connectivity: the Java API for connecting to relational databases and sending SQL.", ar: "اتصال جافا بقواعد البيانات: واجهة جافا للاتصال بقواعد البيانات العلائقية وإرسال SQL." },
    { t: "ADO", lv: 3, en: "Older classic Microsoft data technology (classic ASP, VBScript), with OLE DB.", ar: "تقنية بيانات قديمة من مايكروسوفت (ASP الكلاسيكي وVBScript)، مع OLE DB." },
    { t: "ADO.NET", lv: 2, en: "Microsoft data access for .NET (C#, VB.NET); supports connected and disconnected work with DataSet.", ar: "وصول مايكروسوفت للبيانات في .NET (سي شارب وVB.NET)؛ يدعم العمل المتصل والمنفصل باستخدام DataSet." },
    { t: "DataSet", lv: 3, en: "An in-memory copy of rows that ADO.NET can work with while the connection is closed (disconnected).", ar: "نسخة في الذاكرة من الصفوف يشتغل عليها ADO.NET والاتصال مقفل (منفصل)." },
    { t: "LINQ", lv: 2, en: "Language Integrated Query: readable queries inside .NET code (C#/VB.NET) over lists, XML and databases. Not Java.", ar: "استعلام مدمج باللغة: استعلامات مقروءة داخل كود .NET على القوائم وXML وقواعد البيانات. ليس جافا." },
    { t: "ODBC", lv: 2, en: "Open Database Connectivity: a standard interface used with drivers to reach many different DBMSs from many languages.", ar: "اتصال قواعد البيانات المفتوح: واجهة قياسية تُستخدم مع برامج تشغيل للوصول لأنظمة قواعد بيانات كثيرة من لغات كثيرة." },
    { t: "Connection", lv: 2, en: "The communication link between the app and the data source.", ar: "رابط التواصل بين التطبيق ومصدر البيانات." },
    { t: "DriverManager", lv: 3, en: "JDBC class that selects a driver and opens a connection.", ar: "صنف في JDBC يختار برنامج التشغيل ويفتح الاتصال." },
    { t: "PreparedStatement", lv: 3, en: "Sends SQL with ? placeholders filled by setInt/setString; safer and reusable.", ar: "يرسل SQL فيه علامات ? تتعبأ بـ setInt وsetString؛ أكثر أماناً وقابل لإعادة الاستخدام." },
    { t: "ResultSet", lv: 3, en: "Rows returned by a query; read with rs.next() and getInt/getString.", ar: "الصفوف الراجعة من الاستعلام؛ تُقرأ بـ rs.next() وgetInt وgetString." },
    { t: "SQLException", lv: 3, en: "Java exception that describes database errors.", ar: "استثناء جافا يصف أخطاء قاعدة البيانات." },
    { t: "JFrame Form", lv: 2, en: "A window form in Java Swing/NetBeans (WelcomeForm, AdminForm, ExhibitorForm).", ar: "نافذة نموذج في Java Swing وNetBeans (WelcomeForm وAdminForm وExhibitorForm)." },
    { t: "JTable", lv: 2, en: "Swing component that DISPLAYS rows; it does not save data by itself.", ar: "عنصر Swing يعرض الصفوف؛ لا يحفظ البيانات بنفسه." }
  ],
  topics: [
    { lv: 1, t: { en: "What is a data-driven application?", ar: "ما هو التطبيق المعتمد على البيانات؟" },
      en: "An app whose main job is storing, finding, changing or showing data. Examples: a food app stores orders, a school system stores attendance, LEAP stores exhibitor details.",
      ar: "تطبيق وظيفته الأساسية تخزين البيانات أو البحث فيها أو تعديلها أو عرضها. أمثلة: تطبيق طعام يخزن الطلبات، نظام مدرسة يخزن الحضور، LEAP يخزن بيانات العارضين.",
      more: { en: "Data = facts the program uses (name, date, price, location). Ask about any app: what did I enter, what did it show later, and where was that kept? A maps app takes a start and destination and uses a data source of map information to show a route.",
              ar: "البيانات = حقائق يستخدمها البرنامج (اسم، تاريخ، سعر، موقع). اسأل عن أي تطبيق: وش دخلت؟ وش عرض لي بعدين؟ ووين انحفظت؟ تطبيق الخرائط يأخذ نقطة البداية والوجهة ويستخدم مصدر بيانات للخرائط ليعرض المسار." } },
    { lv: 2, t: { en: "The three-layer model", ar: "النموذج ثلاثي الطبقات" },
      en: "UI (presentation): screens and input. BLL (business logic): rules and decisions. DAL (data access): database commands and results. The database is the data SOURCE, not a layer.",
      ar: "الواجهة (العرض): الشاشات والمدخلات. منطق العمل: القواعد والقرارات. الوصول للبيانات: أوامر قاعدة البيانات ونتائجها. قاعدة البيانات هي مصدر البيانات وليست طبقة.",
      more: { en: "Restaurant analogy: UI = you tell the cashier your order. BLL = the restaurant checks its rules (is the item available?). DAL = the worker checks or updates the stored order. Request goes down, response comes back up; information moves in both directions.",
              ar: "تشبيه المطعم: الواجهة = تقول للكاشير طلبك. منطق العمل = المطعم يتحقق من قواعده (هل الصنف متوفر؟). الوصول للبيانات = الموظف يتحقق من الطلب المخزن أو يحدثه. الطلب ينزل، والرد يرجع؛ المعلومات تتحرك في الاتجاهين." } },
    { lv: 2, t: { en: "LEAP project mapping (GA11)", ar: "ربط مشروع LEAP (GA11)" },
      en: "UI = three JFrame Forms: WelcomeForm (choose Admin or Exhibitor), AdminForm (view/manage exhibitors in a JTable), ExhibitorForm (enter company details). DAL = DBHelper.java using JDBC. Data source = MySQL exhibitors table.",
      ar: "الواجهة = ثلاث نوافذ JFrame: WelcomeForm (اختيار مسؤول أو عارض)، AdminForm (عرض وإدارة العارضين في JTable)، ExhibitorForm (إدخال بيانات الشركة). الوصول للبيانات = DBHelper.java باستخدام JDBC. مصدر البيانات = جدول exhibitors في MySQL.",
      more: { en: "Trace 'Show all exhibitors': AdminForm opens → UI asks for the list → rules checked → DBHelper asks MySQL → MySQL returns rows → JTable shows them. GA11 is a simplified model: it does not need a separate BLL class, but BLL rules still exist (company name required, only Admin sees all rows, hall must be valid).",
              ar: "تتبع 'اعرض كل العارضين': تفتح AdminForm ← الواجهة تطلب القائمة ← تُفحص القواعد ← DBHelper يطلب من MySQL ← MySQL يرجع الصفوف ← JTable يعرضها. مشروع GA11 نموذج مبسط: ما يحتاج صنف BLL منفصل، لكن القواعد موجودة (اسم الشركة مطلوب، المسؤول فقط يرى كل الصفوف، القاعة لازم تكون صحيحة)." } },
    { lv: 3, t: { en: "Why separate the layers?", ar: "ليش نفصل الطبقات؟" },
      en: "Easier to change (redesign AdminForm without touching the DB code), easier to reuse (several forms share DBHelper methods), easier to find errors (bad screen → check form; no data → check DBHelper/connection).",
      ar: "أسهل في التعديل (تغير شكل AdminForm بدون ما تلمس كود قاعدة البيانات)، أسهل في إعادة الاستخدام (أكثر من نافذة تستخدم دوال DBHelper)، أسهل في إيجاد الأخطاء (الشاشة غلط ← افحص النافذة؛ البيانات ما تجي ← افحص DBHelper والاتصال).",
      more: { en: "Bad design: AdminForm draws the table, connects to MySQL, contains SELECT/DELETE SQL and decides who may delete. Better: AdminForm only shows controls and results; DBHelper connects and runs database commands. Rule: no SQL in the form.",
              ar: "تصميم سيء: AdminForm يرسم الجدول ويتصل بـ MySQL وفيه أوامر SELECT وDELETE ويقرر من يحق له الحذف. الأفضل: AdminForm يعرض الأزرار والنتائج فقط، وDBHelper يتصل وينفذ أوامر قاعدة البيانات. القاعدة: لا SQL داخل النافذة." } },
    { lv: 2, t: { en: "API vs driver vs DBMS", ar: "الـ API مقابل برنامج التشغيل مقابل نظام قاعدة البيانات" },
      en: "API = communication rules and tools (JDBC). Driver = connector/translator for a specific DBMS (MySQL Connector/J). DBMS = software that stores and manages tables (MySQL).",
      ar: "الـ API = قواعد وأدوات التواصل (JDBC). برنامج التشغيل = الموصل أو المترجم لنظام معين (MySQL Connector/J). نظام إدارة قاعدة البيانات = البرنامج الذي يخزن الجداول ويديرها (MySQL).",
      more: { en: "Flow: Java code (DBHelper) → JDBC API → MySQL Connector/J driver → MySQL DBMS → exhibitors table, then rows come back. Common confusion in the exam: JDBC is the API, MySQL is the database, Connector/J is the driver.",
              ar: "المسار: كود جافا (DBHelper) ← JDBC ← برنامج التشغيل Connector/J ← MySQL ← جدول exhibitors، ثم ترجع الصفوف. خلط شائع في الاختبار: JDBC هو الـ API، وMySQL هو قاعدة البيانات، وConnector/J هو برنامج التشغيل." } },
    { lv: 3, t: { en: "Choosing a data-access API", ar: "اختيار واجهة الوصول للبيانات" },
      en: "Three questions: what language? what data source? what does the brief require? Java + MySQL + brief names JDBC → JDBC.",
      ar: "ثلاثة أسئلة: أي لغة؟ أي مصدر بيانات؟ وش يطلب التكليف؟ جافا + MySQL + التكليف يذكر JDBC ← JDBC.",
      more: { en: "Scenarios: Java app + MySQL → JDBC. C# app querying a list of objects → LINQ. Legacy VBScript/classic ASP → ADO. Reporting tool using one standard interface with drivers for many DBMSs → ODBC. .NET app needing a disconnected DataSet → ADO.NET. A student saying 'I'll use LINQ in my Java project' is wrong: LINQ is .NET only.",
              ar: "سيناريوهات: تطبيق جافا + MySQL ← JDBC. تطبيق سي شارب يستعلم قائمة كائنات ← LINQ. صفحة VBScript قديمة أو ASP كلاسيكي ← ADO. أداة تقارير تستخدم واجهة قياسية مع برامج تشغيل لأنظمة كثيرة ← ODBC. تطبيق .NET يحتاج DataSet منفصل ← ADO.NET. الطالب اللي يقول 'بستخدم LINQ في مشروع جافا' غلطان: LINQ خاص بـ .NET." } },
    { lv: 3, t: { en: "JDBC step by step", ar: "JDBC خطوة بخطوة" },
      en: "1) MySQL running and database exists. 2) Add Connector/J. 3) URL jdbc:mysql://localhost:3306/dbname. 4) Import java.sql classes. 5) DriverManager.getConnection(url, user, pass). 6) PreparedStatement with ? → executeQuery → loop rs.next().",
      ar: "1) MySQL شغال وقاعدة البيانات موجودة. 2) أضف Connector/J. 3) العنوان jdbc:mysql://localhost:3306/اسم_القاعدة. 4) استورد أصناف java.sql. 5) DriverManager.getConnection(url, user, pass). 6) PreparedStatement مع ? ← executeQuery ← حلقة rs.next().",
      more: { en: "URL parts: jdbc:mysql = use MySQL; localhost = same computer; 3306 = usual MySQL port; last part = database name. executeQuery is for SELECT and returns a ResultSet. executeUpdate is for INSERT/UPDATE/DELETE and returns the number of rows changed. Placeholders count from 1. try-with-resources closes the connection automatically. Error clues: 'Unknown database' → name in URL; 'Access denied' → user/password/permissions; 'Communications link failure' → MySQL service, host, port; 'No suitable driver' → add Connector/J.",
              ar: "أجزاء العنوان: jdbc:mysql = استخدم MySQL؛ localhost = نفس الجهاز؛ 3306 = المنفذ المعتاد؛ آخر جزء = اسم القاعدة. executeQuery لـ SELECT ويرجع ResultSet. وexecuteUpdate لـ INSERT وUPDATE وDELETE ويرجع عدد الصفوف المتغيرة. ترقيم علامات ? يبدأ من 1. try-with-resources يقفل الاتصال تلقائياً. دلائل الأخطاء: 'Unknown database' ← اسم القاعدة في العنوان؛ 'Access denied' ← المستخدم أو كلمة المرور أو الصلاحيات؛ 'Communications link failure' ← خدمة MySQL أو المضيف أو المنفذ؛ 'No suitable driver' ← أضف Connector/J." } },
    { lv: 4, t: { en: "Connected vs disconnected data and data sources", ar: "البيانات المتصلة والمنفصلة ومصادر البيانات" },
      en: "Connected: the app keeps the connection open while reading rows (JDBC ResultSet). Disconnected: the app copies rows into memory (ADO.NET DataSet), closes the connection, works on the copy, then sends changes back. Data sources include relational databases, NoSQL, files and XML.",
      ar: "المتصل: التطبيق يبقي الاتصال مفتوحاً وهو يقرأ الصفوف (ResultSet في JDBC). المنفصل: التطبيق ينسخ الصفوف للذاكرة (DataSet في ADO.NET)، ويقفل الاتصال، ويشتغل على النسخة، ثم يرسل التغييرات. مصادر البيانات تشمل القواعد العلائقية وNoSQL والملفات وXML.",
      more: { en: "This is the next class in your unit plan (Class 03), so expect it in the CBT. Disconnected access reduces load on the database server and suits apps that work offline for a while; connected access always shows the latest data. Relational = tables with keys (MySQL); NoSQL = flexible documents/key-value; XML/JSON files = structured text.",
              ar: "هذا موضوع الحصة القادمة في خطة الوحدة (الحصة 03)، فتوقعه في الاختبار. الوصول المنفصل يخفف الضغط على خادم قاعدة البيانات ويناسب التطبيقات اللي تشتغل بدون اتصال لفترة، والمتصل يعرض دائماً أحدث البيانات. العلائقية = جداول بمفاتيح (MySQL)، وNoSQL = مستندات أو مفتاح وقيمة بشكل مرن، وملفات XML وJSON = نص منظم." } }
  ],
  code: [
    { title: { en: "DBHelper: the data-access class", ar: "DBHelper: صنف الوصول للبيانات" }, lang: "java",
      src: `// JDBC is the API used for Java database access.
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBHelper {
    private static final String URL =
        "jdbc:mysql://localhost:3306/leap_conference";
    private static final String USER = "your_db_user";
    private static final String PASSWORD = "your_password";

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }
}`,
      lines: [
        { n: "1", en: "The comment required by GA11 Task 1.2: names JDBC as the API.", ar: "التعليق المطلوب في مهمة GA11 رقم 1.2: يذكر أن الـ API هو JDBC." },
        { n: "2-4", en: "Imports from java.sql make the JDBC classes available.", ar: "الاستيراد من java.sql يتيح أصناف JDBC." },
        { n: "7-8", en: "URL: MySQL, same computer, port 3306, database name.", ar: "العنوان: MySQL، نفس الجهاز، المنفذ 3306، اسم القاعدة." },
        { n: "9-10", en: "Login details. Never share real passwords in screenshots.", ar: "بيانات الدخول. لا تشارك كلمات مرور حقيقية في لقطات الشاشة." },
        { n: "12-14", en: "Opens and returns a connection; throws SQLException if it fails.", ar: "يفتح الاتصال ويرجعه؛ ويرمي SQLException إذا فشل." }
      ] },
    { title: { en: "Read rows with PreparedStatement", ar: "قراءة الصفوف بـ PreparedStatement" }, lang: "java",
      src: `String sql = "SELECT exhibitor_id, exhibitor_name FROM exhibitors WHERE hall = ?";
try (Connection conn = DBHelper.getConnection();
     PreparedStatement ps = conn.prepareStatement(sql)) {
    ps.setString(1, "Hall A");
    try (ResultSet rs = ps.executeQuery()) {
        while (rs.next()) {
            int id = rs.getInt("exhibitor_id");
            String name = rs.getString("exhibitor_name");
            System.out.println(id + ": " + name);
        }
    }
} catch (SQLException e) {
    System.out.println("Connection failed.");
}`,
      lines: [
        { n: "1", en: "? is a placeholder for a value.", ar: "علامة ? مكان محجوز لقيمة." },
        { n: "2-3", en: "try-with-resources opens the connection and statement and closes them automatically.", ar: "try-with-resources يفتح الاتصال والجملة ويقفلهم تلقائياً." },
        { n: "4", en: "Fill placeholder number 1 (counting starts at 1).", ar: "عبّي المكان رقم 1 (العد يبدأ من 1)." },
        { n: "5", en: "executeQuery runs a SELECT and returns a ResultSet.", ar: "executeQuery ينفذ SELECT ويرجع ResultSet." },
        { n: "6-9", en: "rs.next() moves row by row and returns false when finished.", ar: "rs.next() يتنقل صفاً صفاً ويرجع false لما يخلص." },
        { n: "12-13", en: "Handle database errors; show users a simple message.", ar: "عالج أخطاء قاعدة البيانات واعرض للمستخدم رسالة بسيطة." }
      ] },
    { title: { en: "Insert a row with executeUpdate", ar: "إضافة صف بـ executeUpdate" }, lang: "java",
      src: `String sql = "INSERT INTO exhibitors (exhibitor_name, hall) VALUES (?, ?)";
try (Connection conn = DBHelper.getConnection();
     PreparedStatement ps = conn.prepareStatement(sql)) {
    ps.setString(1, companyName);
    ps.setString(2, hall);
    int rows = ps.executeUpdate();
    System.out.println(rows + " row(s) saved");
}`,
      lines: [
        { n: "1", en: "Two placeholders for the company name and hall.", ar: "مكانين محجوزين لاسم الشركة والقاعة." },
        { n: "4-5", en: "Values come from the ExhibitorForm text fields (UI), but the SQL stays in the DAL.", ar: "القيم تجي من حقول ExhibitorForm (الواجهة)، لكن SQL يبقى في طبقة الوصول للبيانات." },
        { n: "6", en: "executeUpdate is for INSERT/UPDATE/DELETE; returns how many rows changed.", ar: "executeUpdate لـ INSERT وUPDATE وDELETE؛ ويرجع عدد الصفوف المتغيرة." }
      ] },
    { title: { en: "LINQ in C# (for comparison, not Java)", ar: "LINQ في سي شارب (للمقارنة، ليس جافا)" }, lang: "csharp",
      src: `var names =
    from c in companies
    where c.Country == "Saudi Arabia"
    select c.Name;`,
      lines: [
        { n: "1-4", en: "From the companies list, keep those in Saudi Arabia, return their names. This is C#/.NET syntax, so never use it in DBHelper.java.", ar: "من قائمة الشركات، خذ اللي في السعودية، وارجع أسماءها. هذا أسلوب سي شارب/.NET، فلا تستخدمه في DBHelper.java." }
      ] }
  ],
  quiz: [
    { lv: 1, q: "Which layer displays the exhibitor table in the LEAP app?", o: ["UI / AdminForm", "Business logic", "Data access", "MySQL"], a: 0, why: { en: "Showing data is the UI's job.", ar: "عرض البيانات مهمة الواجهة." } },
    { lv: 2, q: "'Company name is required' belongs to which part?", o: ["UI only", "Business logic", "Database screen", "Driver"], a: 1, why: { en: "It is a business rule.", ar: "هي قاعدة عمل." } },
    { lv: 2, q: "Which part sends a query to MySQL in GA11?", o: ["AdminForm", "DBHelper", "JTable", "WelcomeForm"], a: 1, why: { en: "DBHelper is the DAL.", ar: "DBHelper هو طبقة الوصول للبيانات." } },
    { lv: 2, q: "In the three-layer model, MySQL is:", o: ["A layer", "The data source", "A JFrame Form", "The API"], a: 1, why: { en: "The database stores data; the DAL talks to it.", ar: "قاعدة البيانات تخزن، والطبقة تتواصل معها." } },
    { lv: 1, q: "Which API connects Java apps to relational databases?", o: ["JDBC", "LINQ", "ADO.NET", "DataSet"], a: 0, why: { en: "Java Database Connectivity.", ar: "اتصال جافا بقواعد البيانات." } },
    { lv: 2, q: "What is the database driver's job?", o: ["Store data", "Translate API requests for a specific DBMS", "Display a form", "Check business rules"], a: 1, why: { en: "Connector/J translates JDBC calls for MySQL.", ar: "Connector/J يترجم طلبات JDBC لـ MySQL." } },
    { lv: 2, q: "LINQ is commonly used with which platform?", o: ["Java", ".NET (C#/VB.NET)", "MySQL server only", "Python"], a: 1, why: { en: "Language Integrated Query is .NET.", ar: "LINQ خاص بـ .NET." } },
    { lv: 3, q: "A reporting tool must use one standard interface with drivers for many different DBMSs. Choose:", o: ["ODBC", "LINQ", "JDBC", "ADO"], a: 0, why: { en: "ODBC = standard interface + drivers.", ar: "ODBC = واجهة قياسية + برامج تشغيل." } },
    { lv: 3, q: "A .NET app needs to work with a disconnected in-memory copy of rows. Choose:", o: ["JDBC", "ADO.NET with DataSet", "ODBC", "Connector/J"], a: 1, why: { en: "DataSet is ADO.NET's disconnected object.", ar: "DataSet هو كائن ADO.NET المنفصل." } },
    { lv: 3, q: "A legacy classic ASP / VBScript page uses Microsoft data tools. Choose:", o: ["ADO", "JDBC", "LINQ", "PreparedStatement"], a: 0, why: { en: "Classic ADO is the older Microsoft technology.", ar: "ADO الكلاسيكي هو تقنية مايكروسوفت القديمة." } },
    { lv: 3, q: "Which method runs an INSERT and returns the number of rows changed?", o: ["executeQuery()", "executeUpdate()", "rs.next()", "getConnection()"], a: 1, why: { en: "executeUpdate for INSERT/UPDATE/DELETE.", ar: "executeUpdate للإضافة والتعديل والحذف." } },
    { lv: 3, q: "In ps.setInt(1, id), what does 1 mean?", o: ["The row number", "The first ? placeholder", "The column index in the table", "Connection number"], a: 1, why: { en: "Placeholders are numbered from 1.", ar: "علامات ? ترقم من 1." } },
    { lv: 4, q: "JDBC error 'No suitable driver'. Most likely fix?", o: ["Check the password", "Add MySQL Connector/J to the project", "Rename the table", "Restart the monitor"], a: 1, why: { en: "The driver library is missing.", ar: "مكتبة برنامج التشغيل ناقصة." } },
    { lv: 4, q: "JDBC error 'Access denied'. What should you check?", o: ["Username, password and permissions", "Port number only", "Connector/J", "JTable columns"], a: 0, why: { en: "Authentication/permission problem.", ar: "مشكلة في الدخول أو الصلاحيات." } },
    { lv: 4, q: "Which is the BETTER design?", o: ["AdminForm contains SQL and connects to MySQL", "AdminForm shows controls; DBHelper connects and runs SQL", "JTable saves data directly", "Each form has its own connection code"], a: 1, why: { en: "Separation of layers.", ar: "فصل الطبقات." } },
    { lv: 3, q: "In jdbc:mysql://localhost:3306/leap, what is 3306?", o: ["Database name", "Usual MySQL port", "User ID", "Driver version"], a: 1, why: { en: "3306 = default MySQL port.", ar: "3306 = المنفذ الافتراضي لـ MySQL." } }
  ]
});
