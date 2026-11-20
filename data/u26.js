window.STUDY = window.STUDY || { units: [] };
STUDY.units.push({
  id: "u26", num: 26,
  title: { en: "Develop Databases", ar: "تطوير قواعد البيانات" },
  intro: {
    en: "Plan and build a relational database (College DB), keys and integrity, normalisation to 3NF, SELECT with filters, functions, GROUP BY/HAVING, JOINs, UNION, subqueries, views, procedures, triggers, security and metadata.",
    ar: "تخطيط وبناء قاعدة بيانات علائقية (قاعدة الكلية)، المفاتيح والسلامة، التطبيع حتى 3NF، استعلام SELECT مع الفلاتر، الدوال، GROUP BY وHAVING، الربط JOIN، UNION، الاستعلامات الفرعية، العروض، الإجراءات، المشغلات، الأمان والبيانات الوصفية."
  },
  klos: [
    { en: "Plan and create a relational database (ERD, data dictionary, keys)", ar: "تخطيط وإنشاء قاعدة بيانات علائقية (ERD، قاموس البيانات، المفاتيح)" },
    { en: "Keys, integrity and normalisation", ar: "المفاتيح والسلامة والتطبيع" },
    { en: "Query data: SELECT, operators, functions, grouping", ar: "استعلام البيانات: SELECT والعوامل والدوال والتجميع" },
    { en: "Combine data: JOIN, UNION, subqueries", ar: "دمج البيانات: JOIN وUNION والاستعلامات الفرعية" },
    { en: "Views, stored procedures, triggers", ar: "العروض والإجراءات المخزنة والمشغلات" },
    { en: "Administration, security, identifiers and metadata", ar: "الإدارة والأمان والمعرّفات والبيانات الوصفية" }
  ],
  keywords: [
    { t: "Primary Key (PK)", lv: 1, en: "Field that uniquely identifies each record. No duplicates, no NULL.", ar: "حقل يميز كل سجل بشكل فريد. لا تكرار ولا NULL." },
    { t: "Foreign Key (FK)", lv: 1, en: "Field that links to the key of another table; creates relationships and referential integrity.", ar: "حقل يشير لمفتاح في جدول آخر؛ ينشئ العلاقات ويحقق السلامة المرجعية." },
    { t: "UNIQUE key", lv: 2, en: "Constraint that stops duplicate values in a field (e.g. Email).", ar: "قيد يمنع تكرار القيم في حقل (مثل الإيميل)." },
    { t: "Composite Primary Key", lv: 3, en: "ONE primary key made of two or more fields together, e.g. (StudentID, CourseID).", ar: "مفتاح أساسي واحد مكوّن من حقلين أو أكثر معاً، مثل (StudentID, CourseID)." },
    { t: "Entity integrity", lv: 2, en: "Every record has a unique, non-NULL primary key.", ar: "كل سجل له مفتاح أساسي فريد وغير فارغ." },
    { t: "Referential integrity", lv: 2, en: "Foreign key values must refer to existing records in the related table.", ar: "قيم المفتاح الأجنبي لازم تشير لسجلات موجودة في الجدول المرتبط." },
    { t: "Domain integrity", lv: 3, en: "Controls the type or range of values allowed in a field (data type, CHECK).", ar: "يتحكم بنوع أو مدى القيم المسموحة في الحقل (نوع البيانات، CHECK)." },
    { t: "NULL", lv: 1, en: "A missing or unknown value (not zero, not empty text).", ar: "قيمة مفقودة أو غير معروفة (ليست صفراً ولا نصاً فارغاً)." },
    { t: "Normalisation", lv: 2, en: "Organising tables to reduce duplication and improve integrity, usually by splitting tables.", ar: "تنظيم الجداول لتقليل التكرار وتحسين السلامة، غالباً بتقسيم الجداول." },
    { t: "Data redundancy", lv: 2, en: "Unnecessary repetition of the same data; causes insert, update and delete anomalies.", ar: "تكرار غير ضروري لنفس البيانات؛ يسبب شذوذ الإدخال والتحديث والحذف." },
    { t: "1NF", lv: 2, en: "One value per field, no repeating groups, each record identifiable.", ar: "قيمة واحدة لكل حقل، بدون مجموعات متكررة، وكل سجل مميز." },
    { t: "2NF", lv: 3, en: "1NF + every non-key field depends on the WHOLE primary key (no partial dependency).", ar: "1NF + كل حقل غير مفتاحي يعتمد على المفتاح كاملاً (بدون اعتماد جزئي)." },
    { t: "3NF", lv: 3, en: "2NF + non-key fields depend ONLY on the key, not on other non-key fields (no transitive dependency).", ar: "2NF + الحقول غير المفتاحية تعتمد على المفتاح فقط وليس على حقول غير مفتاحية أخرى (بدون اعتماد متعدٍ)." },
    { t: "Partial dependency", lv: 3, en: "A non-key field depends on only part of a composite key. Breaks 2NF.", ar: "حقل غير مفتاحي يعتمد على جزء فقط من المفتاح المركب. يكسر 2NF." },
    { t: "Transitive dependency", lv: 3, en: "A non-key field depends on another non-key field: StudentID → DepartmentID → DepartmentName. Breaks 3NF.", ar: "حقل غير مفتاحي يعتمد على حقل غير مفتاحي آخر. يكسر 3NF." },
    { t: "ERD", lv: 1, en: "Entity Relationship Diagram: shows tables, keys and relationships.", ar: "مخطط الكيانات والعلاقات: يعرض الجداول والمفاتيح والعلاقات." },
    { t: "Data dictionary", lv: 2, en: "Table describing each field: name, data type, size, PK/FK, NULL rule, range/format, description.", ar: "جدول يصف كل حقل: الاسم، النوع، الحجم، المفتاح، قاعدة NULL، المدى أو الصيغة، الوصف." },
    { t: "WHERE", lv: 1, en: "Filters individual rows.", ar: "يفلتر الصفوف واحداً واحداً." },
    { t: "ORDER BY", lv: 1, en: "Sorts the output, ASC (default) or DESC.", ar: "يرتب النتائج تصاعدياً (افتراضي) أو تنازلياً DESC." },
    { t: "BETWEEN", lv: 2, en: "Range filter; includes both boundary values.", ar: "فلتر مدى؛ يشمل القيمتين الطرفيتين." },
    { t: "IN", lv: 2, en: "Matches one of a list of values: Status IN ('Present','Late').", ar: "يطابق قيمة من قائمة قيم." },
    { t: "LIKE", lv: 2, en: "Pattern matching with wildcards: % = zero or more characters, _ = exactly one.", ar: "مطابقة نمط برموز بديلة: % = صفر أو أكثر من الأحرف، _ = حرف واحد بالضبط." },
    { t: "DISTINCT", lv: 2, en: "Removes duplicate values from the RESULT only; does not delete table data.", ar: "يحذف التكرار من النتيجة فقط؛ لا يحذف بيانات الجدول." },
    { t: "Aggregate functions", lv: 2, en: "COUNT, SUM, AVG, MIN, MAX: one result from many rows.", ar: "دوال تجميع: نتيجة واحدة من صفوف كثيرة." },
    { t: "GROUP BY", lv: 2, en: "Puts rows with the same value into groups, so aggregates are calculated per group.", ar: "يجمع الصفوف ذات القيمة نفسها في مجموعات لتحسب الدوال لكل مجموعة." },
    { t: "HAVING", lv: 3, en: "Filters GROUPS after aggregation. WHERE filters rows before.", ar: "يفلتر المجموعات بعد التجميع. أما WHERE فيفلتر الصفوف قبله." },
    { t: "Alias (AS)", lv: 1, en: "Temporary new name for a column or table in the result.", ar: "اسم مؤقت لعمود أو جدول في النتيجة." },
    { t: "INNER JOIN", lv: 2, en: "Returns only rows that match in both tables.", ar: "يرجع فقط الصفوف المتطابقة في الجدولين." },
    { t: "LEFT JOIN", lv: 3, en: "All rows from the left (first) table + matches; NULL where no match.", ar: "كل صفوف الجدول الأيسر (الأول) + المتطابقة؛ NULL إذا ما فيه تطابق." },
    { t: "RIGHT JOIN", lv: 3, en: "All rows from the right (second) table + matches.", ar: "كل صفوف الجدول الأيمن (الثاني) + المتطابقة." },
    { t: "FULL OUTER JOIN", lv: 3, en: "Matching and unmatched rows from both tables. MySQL does not support it directly.", ar: "الصفوف المتطابقة وغير المتطابقة من الجدولين. MySQL لا يدعمه مباشرة." },
    { t: "UNION / UNION ALL", lv: 3, en: "Stacks SELECT results vertically. UNION removes duplicates; UNION ALL keeps them. Same column count, compatible types.", ar: "يرص نتائج SELECT فوق بعض. UNION يحذف التكرار، وUNION ALL يبقيه. نفس عدد الأعمدة وأنواع متوافقة." },
    { t: "Subquery", lv: 3, en: "A query inside another query; the inner query runs first.", ar: "استعلام داخل استعلام؛ الداخلي يُنفذ أولاً." },
    { t: "View", lv: 3, en: "A saved query that acts like a virtual table. Used with SELECT.", ar: "استعلام محفوظ يعمل كجدول افتراضي. يُستخدم مع SELECT." },
    { t: "Stored procedure", lv: 3, en: "Named saved SQL statements, can take parameters, run with CALL.", ar: "مجموعة أوامر SQL محفوظة باسم، تقبل معاملات، وتُشغّل بـ CALL." },
    { t: "Trigger", lv: 4, en: "SQL that runs AUTOMATICALLY on INSERT/UPDATE/DELETE, BEFORE or AFTER the event.", ar: "كود SQL يعمل تلقائياً عند INSERT أو UPDATE أو DELETE، قبل الحدث أو بعده." },
    { t: "OLD / NEW", lv: 4, en: "Inside a trigger: OLD = value before change, NEW = value after change.", ar: "داخل المشغل: OLD = القيمة قبل التغيير، NEW = القيمة بعده." },
    { t: "DBA", lv: 2, en: "Database Administrator: manages, maintains, protects and monitors the database.", ar: "مدير قاعدة البيانات: يديرها ويصونها ويحميها ويراقبها." },
    { t: "Authentication vs authorisation", lv: 3, en: "Authentication = WHO are you (username/password). Authorisation = WHAT can you do (privileges).", ar: "المصادقة = من أنت (اسم المستخدم وكلمة المرور). التفويض = ماذا تقدر تفعل (الصلاحيات)." },
    { t: "GRANT / REVOKE", lv: 3, en: "GRANT gives a privilege; REVOKE removes it.", ar: "GRANT يعطي صلاحية، وREVOKE يسحبها." },
    { t: "Least privilege", lv: 3, en: "Give users only the permissions they need, nothing more.", ar: "أعطِ المستخدم الصلاحيات التي يحتاجها فقط، لا أكثر." },
    { t: "Backup / restore", lv: 2, en: "A copy of the database; restore recovers it after loss or damage.", ar: "نسخة من قاعدة البيانات؛ الاستعادة ترجعها بعد الفقد أو التلف." },
    { t: "Metadata", lv: 3, en: "Data about the structure (data types, keys), not the stored values.", ar: "بيانات عن البنية (الأنواع والمفاتيح)، وليست القيم المخزنة." },
    { t: "Schema", lv: 3, en: "The structure of the database: tables, columns, keys, constraints.", ar: "بنية قاعدة البيانات: الجداول والأعمدة والمفاتيح والقيود." },
    { t: "Identifier / naming convention", lv: 2, en: "Name of a database object; avoid spaces, starting with numbers, and reserved words.", ar: "اسم كائن في قاعدة البيانات؛ تجنب المسافات والبدء برقم والكلمات المحجوزة." }
  ],
  topics: [
    { lv: 1, t: { en: "Planning a relational database", ar: "تخطيط قاعدة بيانات علائقية" },
      en: "Ask: what to store, what belongs together, what uniquely identifies a record, how tables relate. Draw an ERD, write a data dictionary, then create the tables. College DB: students, courses, enrollments, teachers, attendance.",
      ar: "اسأل: ماذا نخزن، وما الذي يرتبط ببعضه، وما الذي يميز كل سجل، وكيف ترتبط الجداول. ارسم ERD، واكتب قاموس البيانات، ثم أنشئ الجداول. قاعدة الكلية: الطلاب، المقررات، التسجيلات، المعلمون، الحضور.",
      more: { en: "Students ↔ Courses is many-to-many (a student takes many courses, a course has many students), so we add a link table 'enrollments' holding StudentID and CourseID as foreign keys. The data dictionary lists field name, data type, size, PK/FK, NULL/NOT NULL, range/format and description. Test log checks: tables exist, data types right, PK rejects duplicates, NOT NULL rejects empty, FKs work, CSV imports.",
              ar: "العلاقة بين الطلاب والمقررات كثير إلى كثير (الطالب يأخذ مقررات كثيرة والمقرر فيه طلاب كثير)، لذلك نضيف جدول ربط 'enrollments' فيه StudentID وCourseID كمفاتيح أجنبية. قاموس البيانات يذكر: اسم الحقل، النوع، الحجم، المفتاح، NULL أو NOT NULL، المدى أو الصيغة، والوصف. سجل الاختبار يتحقق: الجداول موجودة، الأنواع صحيحة، المفتاح الأساسي يرفض التكرار، NOT NULL يرفض الفراغ، المفاتيح الأجنبية تعمل، والـ CSV انستورد." } },
    { lv: 1, t: { en: "SELECT, FROM, WHERE, ORDER BY", ar: "SELECT وFROM وWHERE وORDER BY" },
      en: "SELECT chooses columns, FROM chooses the table, WHERE filters rows, ORDER BY sorts. Without WHERE you get all rows. Comparison operators: =, >, <, >=, <=, <> or !=.",
      ar: "SELECT يختار الأعمدة، FROM يحدد الجدول، WHERE يفلتر الصفوف، ORDER BY يرتب. بدون WHERE تجيك كل الصفوف. عوامل المقارنة: = و> و< و>= و<= و<> أو !=.",
      more: { en: "Boolean operators combine conditions: AND (both true), OR (at least one), NOT (exclude). Order of writing: SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY. Memory: 'Sweet Fruits Will Grow Healthy Oranges'.",
              ar: "العوامل المنطقية تجمع الشروط: AND (الاثنين صحيحين)، OR (واحد على الأقل)، NOT (استبعاد). ترتيب الكتابة: SELECT ← FROM ← WHERE ← GROUP BY ← HAVING ← ORDER BY. حيلة للحفظ بالإنجليزي: Sweet Fruits Will Grow Healthy Oranges." } },
    { lv: 2, t: { en: "BETWEEN, IN, LIKE, DISTINCT", ar: "BETWEEN وIN وLIKE وDISTINCT" },
      en: "BETWEEN 70 AND 90 includes 70 and 90. IN ('Present','Late') matches any value in the list. LIKE 'A%' = starts with A; '%a' = ends with a; '%li%' = contains li. DISTINCT shows each value once.",
      ar: "BETWEEN 70 AND 90 يشمل 70 و90. IN ('Present','Late') يطابق أي قيمة في القائمة. LIKE 'A%' = يبدأ بـ A، و'%a' = ينتهي بـ a، و'%li%' = يحتوي li. DISTINCT يعرض كل قيمة مرة وحدة.",
      more: { en: "BETWEEN is a shortcut for Grade >= 70 AND Grade <= 90. IN is a shortcut for Status = 'Present' OR Status = 'Late'. DISTINCT does not delete anything from the table, it only hides repeats in the result. Wildcard _ means exactly one character: '_a%' = second letter is a.",
              ar: "BETWEEN اختصار لـ Grade >= 70 AND Grade <= 90. وIN اختصار لـ Status = 'Present' OR Status = 'Late'. DISTINCT ما يحذف شيء من الجدول، بس يخفي التكرار في النتيجة. الرمز _ يعني حرفاً واحداً بالضبط: '_a%' = الحرف الثاني a." } },
    { lv: 2, t: { en: "Keys and integrity", ar: "المفاتيح والسلامة" },
      en: "PK: unique, never NULL. FK: links tables, can repeat, sometimes NULL. UNIQUE: no repeats (e.g. email). Composite PK: one key made of several fields. Integrity types: entity (PK), referential (FK), domain (allowed values).",
      ar: "المفتاح الأساسي: فريد ولا يكون NULL. الأجنبي: يربط الجداول، يتكرر، وأحياناً NULL. UNIQUE: بدون تكرار (مثل الإيميل). المركب: مفتاح واحد من عدة حقول. أنواع السلامة: الكيان (PK)، المرجعية (FK)، النطاق (القيم المسموحة).",
      more: { en: "PRIMARY KEY (StudentID, CourseID) does NOT mean two primary keys; it is ONE key made of two columns, because neither alone is unique in an enrollments table. A FK that points to a non-existent student breaks referential integrity, so the DBMS rejects it. A CHECK (Grade BETWEEN 0 AND 100) enforces domain integrity.",
              ar: "PRIMARY KEY (StudentID, CourseID) لا يعني مفتاحين أساسيين؛ هو مفتاح واحد من عمودين، لأن كل واحد بمفرده غير فريد في جدول التسجيلات. مفتاح أجنبي يشير لطالب غير موجود يكسر السلامة المرجعية فيرفضه النظام. وقيد CHECK (Grade BETWEEN 0 AND 100) يحقق سلامة النطاق." } },
    { lv: 3, t: { en: "Normalisation: 1NF, 2NF, 3NF", ar: "التطبيع: 1NF و2NF و3NF" },
      en: "1NF: one value per field (no 'Java, SQL, PHP' in one cell). 2NF: depend on the WHOLE key (remove partial dependency). 3NF: depend ONLY on the key (remove transitive dependency).",
      ar: "1NF: قيمة واحدة لكل حقل (لا تكتب 'Java, SQL, PHP' في خلية وحدة). 2NF: الاعتماد على المفتاح كاملاً (إزالة الاعتماد الجزئي). 3NF: الاعتماد على المفتاح فقط (إزالة الاعتماد المتعدي).",
      more: { en: "Classic phrase: 'The key (1NF), the whole key (2NF), and nothing but the key (3NF).' 2NF example: key (StudentID, CourseID); StudentName depends only on StudentID → partial dependency → split into Students, Courses, Enrollments. 3NF example: StudentID → DepartmentID → DepartmentName → transitive → move DepartmentName to a Departments table. Why normalise? Less redundancy, consistent data, no insert/update/delete anomalies.",
              ar: "الجملة الشهيرة: 'المفتاح (1NF)، المفتاح كله (2NF)، ولا شيء غير المفتاح (3NF)'. مثال 2NF: المفتاح (StudentID, CourseID)، واسم الطالب يعتمد على StudentID فقط ← اعتماد جزئي ← نقسم إلى Students وCourses وEnrollments. مثال 3NF: StudentID ← DepartmentID ← DepartmentName ← اعتماد متعدٍ ← ننقل اسم القسم لجدول Departments. ليش نطبّع؟ تكرار أقل، بيانات متسقة، وبدون شذوذ في الإدخال والتحديث والحذف." } },
    { lv: 2, t: { en: "Calculations and built-in functions", ar: "العمليات الحسابية والدوال الجاهزة" },
      en: "Arithmetic: + - * / (Credits * 15 AS LearningHours). String: UPPER, LOWER, LENGTH, CONCAT. Math: ROUND, CEILING (up), FLOOR (down), MOD (remainder), RAND (random 0-1). Date: CURDATE, YEAR, MONTH, DAY, DATEDIFF.",
      ar: "الحساب: + - * / (Credits * 15 AS LearningHours). النصوص: UPPER وLOWER وLENGTH وCONCAT. الرياضيات: ROUND (تقريب)، CEILING (لأعلى)، FLOOR (لأسفل)، MOD (باقي القسمة)، RAND (رقم عشوائي بين 0 و1). التاريخ: CURDATE وYEAR وMONTH وDAY وDATEDIFF.",
      more: { en: "Aliases do not rename the real column, only the output heading. ROUND(85.67, 1) = 85.7. CEILING(85.2) = 86. FLOOR(85.9) = 85. MOD(10, 3) = 1. DATEDIFF(CURDATE(), EnrollmentDate) = days since enrolment.",
              ar: "الاسم المستعار ما يغير اسم العمود الحقيقي، بس عنوان النتيجة. ROUND(85.67, 1) = 85.7. CEILING(85.2) = 86. FLOOR(85.9) = 85. MOD(10, 3) = 1. DATEDIFF(CURDATE(), EnrollmentDate) = عدد الأيام منذ التسجيل." } },
    { lv: 3, t: { en: "GROUP BY and HAVING", ar: "GROUP BY وHAVING" },
      en: "GROUP BY makes one group per value so aggregates are per group (average grade per GroupNumber). HAVING filters those groups (AVG > 70). WHERE filters rows BEFORE grouping; HAVING filters groups AFTER.",
      ar: "GROUP BY يسوي مجموعة لكل قيمة فتحسب الدوال لكل مجموعة (متوسط الدرجة لكل GroupNumber). HAVING يفلتر هذي المجموعات (AVG > 70). WHERE يفلتر الصفوف قبل التجميع، وHAVING يفلتر المجموعات بعده.",
      more: { en: "You cannot write WHERE AVG(Grade) > 70, because aggregates do not exist yet when WHERE runs. Without GROUP BY, AVG gives one overall result. Sorting grouped averages: ORDER BY AVG(Grade) DESC.",
              ar: "ما تقدر تكتب WHERE AVG(Grade) > 70، لأن دوال التجميع ما تكون موجودة وقت تنفيذ WHERE. بدون GROUP BY يعطيك AVG نتيجة وحدة للكل. لترتيب المتوسطات: ORDER BY AVG(Grade) DESC." } },
    { lv: 3, t: { en: "JOIN types", ar: "أنواع الربط JOIN" },
      en: "INNER = only matches. LEFT = keep everything from the first table. RIGHT = keep everything from the second table. FULL OUTER = keep everything from both. ON defines the matching condition (usually PK = FK).",
      ar: "INNER = المتطابق فقط. LEFT = احتفظ بكل شيء من الجدول الأول. RIGHT = احتفظ بكل شيء من الجدول الثاني. FULL OUTER = احتفظ بكل شيء من الاثنين. ON يحدد شرط التطابق (عادة PK = FK).",
      more: { en: "Only students enrolled in a course → INNER JOIN. All students including not enrolled → students LEFT JOIN enrollments (missing data shows NULL). Students with NO enrolment → LEFT JOIN ... WHERE e.StudentID IS NULL. LEFT/RIGHT depend on table ORDER in the query.",
              ar: "فقط الطلاب المسجلين في مقرر ← INNER JOIN. كل الطلاب حتى غير المسجلين ← students LEFT JOIN enrollments (البيانات الناقصة تظهر NULL). الطلاب بدون أي تسجيل ← LEFT JOIN ... WHERE e.StudentID IS NULL. اتجاه LEFT وRIGHT يعتمد على ترتيب الجداول في الاستعلام." } },
    { lv: 3, t: { en: "UNION vs JOIN, and subqueries", ar: "UNION مقابل JOIN، والاستعلامات الفرعية" },
      en: "JOIN adds COLUMNS side by side using a relationship (horizontal). UNION stacks ROWS from two SELECTs (vertical). Subquery: inner query runs first, its result feeds the outer query.",
      ar: "JOIN يضيف أعمدة جنب بعض باستخدام علاقة (أفقي). UNION يرص صفوفاً من استعلامين SELECT (عمودي). الاستعلام الفرعي: الداخلي يُنفذ أولاً ونتيجته تدخل في الخارجي.",
      more: { en: "UNION rules: same number of columns and compatible types. UNION removes duplicates, UNION ALL keeps them, so UNION ALL can return more rows. Subquery example: students with grade above average: inner AVG(Grade) → 76, then outer Grade > 76.",
              ar: "قواعد UNION: نفس عدد الأعمدة وأنواع متوافقة. UNION يحذف التكرار وUNION ALL يبقيه، فممكن UNION ALL يرجع صفوفاً أكثر. مثال استعلام فرعي: الطلاب فوق المتوسط: الداخلي AVG(Grade) ← 76، ثم الخارجي Grade > 76." } },
    { lv: 4, t: { en: "View vs stored procedure vs trigger", ar: "العرض مقابل الإجراء المخزن مقابل المشغل" },
      en: "View = saved query, a virtual table, used with SELECT (see data). Procedure = saved task, can take parameters, run with CALL (do a task). Trigger = runs automatically on INSERT/UPDATE/DELETE (automatic reaction).",
      ar: "العرض View = استعلام محفوظ كجدول افتراضي ويُستخدم مع SELECT (شوف البيانات). الإجراء Procedure = مهمة محفوظة تقبل معاملات وتُشغّل بـ CALL (نفّذ مهمة). المشغل Trigger = يعمل تلقائياً عند INSERT أو UPDATE أو DELETE (رد فعل تلقائي).",
      more: { en: "Scenarios: 'list of students with grades above 80 often' → View. 'User enters a group number' → Procedure with a parameter. 'Record old and new grade whenever it changes' → AFTER UPDATE trigger using OLD.Grade and NEW.Grade into an audit log table. A trigger is never called with CALL; the event fires it. Delete with DROP VIEW / DROP PROCEDURE / DROP TRIGGER.",
              ar: "سيناريوهات: 'قائمة الطلاب فوق 80 نحتاجها كثير' ← View. 'المستخدم يدخل رقم مجموعة' ← Procedure بمعامل. 'سجّل الدرجة القديمة والجديدة كل ما تتغير' ← Trigger من نوع AFTER UPDATE يستخدم OLD.Grade وNEW.Grade ويحفظها في جدول سجل. المشغل ما يُستدعى بـ CALL أبداً؛ الحدث هو اللي يشغله. الحذف بـ DROP VIEW وDROP PROCEDURE وDROP TRIGGER." } },
    { lv: 3, t: { en: "Administration and security", ar: "الإدارة والأمان" },
      en: "The DBA keeps the database available, reliable, secure and fast. Authentication checks who you are; authorisation checks what you may do. GRANT gives privileges, REVOKE removes them. Use least privilege. Backup and restore recover lost data.",
      ar: "مدير قاعدة البيانات يحافظ عليها متاحة وموثوقة وآمنة وسريعة. المصادقة تتحقق من هويتك، والتفويض يتحقق مما يحق لك. GRANT يعطي الصلاحيات وREVOKE يسحبها. طبّق مبدأ أقل صلاحية. النسخ الاحتياطي والاستعادة يرجعان البيانات المفقودة.",
      more: { en: "Final boss path: new instructor needs to view and update grades → GRANT SELECT, UPDATE (not DELETE) → least privilege. She leaves → REVOKE or disable the account. Records accidentally deleted → restore from a recent backup.",
              ar: "مسار التحدي: معلمة جديدة تحتاج تشوف الدرجات وتعدلها ← GRANT SELECT, UPDATE (بدون DELETE) ← أقل صلاحية. تركت العمل ← REVOKE أو تعطيل الحساب. سجلات انحذفت بالغلط ← استعادة من نسخة احتياطية حديثة." } },
    { lv: 4, t: { en: "Identifiers and metadata", ar: "المعرّفات والبيانات الوصفية" },
      en: "An identifier is the name of a table, column, view or procedure. Good names: no spaces, do not start with a number, avoid reserved words (SELECT, ORDER, GROUP). Metadata describes structure; data is the stored values.",
      ar: "المعرّف هو اسم الجدول أو العمود أو العرض أو الإجراء. الأسماء الجيدة: بدون مسافات، ما تبدأ برقم، وتتجنب الكلمات المحجوزة (SELECT وORDER وGROUP). البيانات الوصفية تصف البنية، والبيانات هي القيم المخزنة.",
      more: { en: "'Student Data' is risky (space) → use students. '123Student' (starts with a number) and 'Group'/'Select' (reserved) are risky. Grade = 85 is data; DECIMAL(5,2) and 'StudentID is the PK' are metadata. No documentation? Use SHOW TABLES, DESCRIBE students, SHOW COLUMNS FROM students.",
              ar: "'Student Data' خطر (فيه مسافة) ← استخدم students. '123Student' (يبدأ برقم) و'Group' و'Select' (محجوزة) خطرة. Grade = 85 بيانات، أما DECIMAL(5,2) و'StudentID هو المفتاح الأساسي' فبيانات وصفية. ما فيه توثيق؟ استخدم SHOW TABLES وDESCRIBE students وSHOW COLUMNS FROM students." } }
  ],
  code: [
    { title: { en: "CREATE TABLE with keys and constraints", ar: "إنشاء جدول بالمفاتيح والقيود" }, lang: "sql",
      src: `CREATE TABLE students (
  StudentID   INT          NOT NULL,
  FirstName   VARCHAR(50)  NOT NULL,
  Email       VARCHAR(100) UNIQUE,
  GroupNumber INT          NOT NULL,
  Grade       DECIMAL(4,1) NULL,
  PRIMARY KEY (StudentID),
  CHECK (Grade BETWEEN 0 AND 100)
);

CREATE TABLE enrollments (
  StudentID INT NOT NULL,
  CourseID  INT NOT NULL,
  Grade     DECIMAL(4,1),
  PRIMARY KEY (StudentID, CourseID),          -- composite key
  FOREIGN KEY (StudentID) REFERENCES students(StudentID),
  FOREIGN KEY (CourseID)  REFERENCES courses(CourseID)
);`,
      lines: [
        { n: "2-6", en: "Each column has a data type. NOT NULL = must have a value; NULL = may be empty.", ar: "كل عمود له نوع بيانات. NOT NULL = لازم له قيمة، وNULL = يقدر يكون فاضي." },
        { n: "4", en: "UNIQUE stops two students sharing the same email.", ar: "UNIQUE يمنع طالبين يكون لهم نفس الإيميل." },
        { n: "7", en: "Primary key: entity integrity.", ar: "المفتاح الأساسي: سلامة الكيان." },
        { n: "8", en: "CHECK limits the allowed range: domain integrity.", ar: "CHECK يحدد المدى المسموح: سلامة النطاق." },
        { n: "14", en: "ONE composite key from two columns, because a student can take many courses.", ar: "مفتاح مركب واحد من عمودين، لأن الطالب يقدر يسجل في مقررات كثيرة." },
        { n: "15-16", en: "Foreign keys link to students and courses: referential integrity.", ar: "المفاتيح الأجنبية تربط بالطلاب والمقررات: السلامة المرجعية." }
      ] },
    { title: { en: "Filtering and sorting", ar: "الفلترة والترتيب" }, lang: "sql",
      src: `SELECT FirstName, Grade FROM students WHERE Grade > 80 ORDER BY Grade DESC;
SELECT * FROM students WHERE Grade >= 70 AND FirstName LIKE 'A%';
SELECT * FROM students WHERE Grade BETWEEN 70 AND 90;
SELECT * FROM attendance WHERE Status IN ('Present', 'Late');
SELECT DISTINCT Status FROM attendance;`,
      lines: [
        { n: "1", en: "Two columns, rows with grade above 80, highest first.", ar: "عمودين، الصفوف اللي درجتها فوق 80، الأعلى أولاً." },
        { n: "2", en: "AND: both conditions. LIKE 'A%': first name starts with A.", ar: "AND: الشرطين معاً. LIKE 'A%': الاسم يبدأ بـ A." },
        { n: "3", en: "BETWEEN includes 70 and 90.", ar: "BETWEEN يشمل 70 و90." },
        { n: "4", en: "IN matches any value in the list.", ar: "IN يطابق أي قيمة في القائمة." },
        { n: "5", en: "Each status shown once; table data is unchanged.", ar: "كل حالة تظهر مرة وحدة؛ بيانات الجدول ما تتغير." }
      ] },
    { title: { en: "Functions, aliases, GROUP BY and HAVING", ar: "الدوال والأسماء المستعارة وGROUP BY وHAVING" }, lang: "sql",
      src: `SELECT CONCAT(FirstName, ' ', LastName) AS FullName,
       UPPER(FirstName) AS Upper_Name,
       ROUND(Grade) AS Rounded,
       DATEDIFF(CURDATE(), EnrollmentDate) AS DaysEnrolled
FROM students;

SELECT GroupNumber, AVG(Grade) AS AvgGrade
FROM students
GROUP BY GroupNumber
HAVING AVG(Grade) > 70
ORDER BY AvgGrade DESC;`,
      lines: [
        { n: "1", en: "CONCAT joins first and last name; AS names the output column.", ar: "CONCAT يدمج الاسم الأول والأخير، وAS يسمي عمود النتيجة." },
        { n: "3", en: "ROUND rounds to the nearest whole number.", ar: "ROUND يقرّب لأقرب رقم صحيح." },
        { n: "4", en: "Days between today and the enrolment date.", ar: "عدد الأيام بين اليوم وتاريخ التسجيل." },
        { n: "7-9", en: "One average per group.", ar: "متوسط واحد لكل مجموعة." },
        { n: "10", en: "HAVING keeps only groups with average above 70 (filters groups, not rows).", ar: "HAVING يبقي المجموعات اللي متوسطها فوق 70 (يفلتر المجموعات وليس الصفوف)." },
        { n: "11", en: "Sort the groups from highest average to lowest.", ar: "رتّب المجموعات من الأعلى متوسطاً للأقل." }
      ] },
    { title: { en: "JOIN, UNION and subquery", ar: "JOIN وUNION والاستعلام الفرعي" }, lang: "sql",
      src: `-- students who are enrolled (matches only)
SELECT s.FirstName, c.CourseName
FROM students s
INNER JOIN enrollments e ON s.StudentID = e.StudentID
INNER JOIN courses c     ON e.CourseID  = c.CourseID;

-- students with NO enrolment
SELECT s.FirstName FROM students s
LEFT JOIN enrollments e ON s.StudentID = e.StudentID
WHERE e.StudentID IS NULL;

SELECT FirstName AS CollegePeople FROM students
UNION
SELECT FirstName FROM teachers;

SELECT FirstName, Grade FROM students
WHERE Grade > (SELECT AVG(Grade) FROM students);`,
      lines: [
        { n: "2-5", en: "Three tables joined with PK = FK. s, e, c are table aliases.", ar: "ربط ثلاث جداول بشرط PK = FK. والحروف s وe وc أسماء مستعارة للجداول." },
        { n: "8-10", en: "LEFT JOIN keeps all students; IS NULL finds those without a match.", ar: "LEFT JOIN يحتفظ بكل الطلاب، وIS NULL يجيب اللي ما لهم تطابق." },
        { n: "12-14", en: "UNION stacks names vertically and removes duplicates.", ar: "UNION يرص الأسماء فوق بعض ويحذف التكرار." },
        { n: "16-17", en: "Inner query computes the average first; outer query compares each grade to it.", ar: "الاستعلام الداخلي يحسب المتوسط أولاً، والخارجي يقارن كل درجة فيه." }
      ] },
    { title: { en: "View, stored procedure, trigger", ar: "العرض والإجراء المخزن والمشغل" }, lang: "sql",
      src: `CREATE VIEW HighGradeStudents AS
SELECT StudentID, FirstName, Grade FROM students WHERE Grade > 80;
SELECT * FROM HighGradeStudents;

DELIMITER //
CREATE PROCEDURE ShowStudentsByGroup(IN grp INT)
BEGIN
  SELECT FirstName, GroupNumber FROM students WHERE GroupNumber = grp;
END //
DELIMITER ;
CALL ShowStudentsByGroup(6);

CREATE TRIGGER StudentGradeChange
AFTER UPDATE ON students
FOR EACH ROW
INSERT INTO GradeLog(StudentID, OldGrade, NewGrade, ChangeDate)
VALUES (OLD.StudentID, OLD.Grade, NEW.Grade, NOW());`,
      lines: [
        { n: "1-3", en: "A view saves the query; you read it like a table with SELECT.", ar: "العرض يحفظ الاستعلام، وتقرأه مثل الجدول بـ SELECT." },
        { n: "5-10", en: "DELIMITER lets the procedure body contain semicolons. IN grp is a parameter.", ar: "DELIMITER يسمح بوجود فواصل منقوطة داخل الإجراء. IN grp هو المعامل." },
        { n: "11", en: "CALL runs the procedure with group 6.", ar: "CALL يشغل الإجراء للمجموعة 6." },
        { n: "13-17", en: "Fires automatically after every grade update and logs OLD and NEW values. No CALL needed.", ar: "يشتغل تلقائياً بعد كل تحديث للدرجة ويسجل القيمة القديمة OLD والجديدة NEW. ما يحتاج CALL." }
      ] },
    { title: { en: "Security and metadata commands", ar: "أوامر الأمان والبيانات الوصفية" }, lang: "sql",
      src: `GRANT SELECT, UPDATE ON college_db.students TO 'instructor'@'localhost';
REVOKE SELECT, UPDATE ON college_db.students FROM 'instructor'@'localhost';

SHOW TABLES;
DESCRIBE students;
SHOW COLUMNS FROM students;`,
      lines: [
        { n: "1", en: "Least privilege: view and update only, no DELETE.", ar: "أقل صلاحية: عرض وتحديث فقط، بدون DELETE." },
        { n: "2", en: "Remove the privileges when the user leaves.", ar: "اسحب الصلاحيات لما يترك المستخدم." },
        { n: "4-6", en: "Inspect metadata: list tables, then fields, types, NULL rules and keys.", ar: "افحص البيانات الوصفية: قائمة الجداول، ثم الحقول والأنواع وقواعد NULL والمفاتيح." }
      ] }
  ],
  quiz: [
    { lv: 1, q: "Which key uniquely identifies each record and cannot be NULL?", o: ["Foreign key", "Primary key", "UNIQUE key", "Alias"], a: 1, why: { en: "PK = unique and not NULL.", ar: "المفتاح الأساسي = فريد وغير فارغ." } },
    { lv: 2, q: "A field contains 'Java, SQL, PHP' in one cell. Which normal form is violated?", o: ["1NF", "2NF", "3NF", "None"], a: 0, why: { en: "1NF requires one value per field.", ar: "1NF يتطلب قيمة واحدة لكل حقل." } },
    { lv: 3, q: "Composite PK (StudentID, CourseID). StudentName depends only on StudentID. This is:", o: ["Transitive dependency, violates 3NF", "Partial dependency, violates 2NF", "Referential integrity", "A UNIQUE key"], a: 1, why: { en: "Depends on part of the composite key.", ar: "يعتمد على جزء من المفتاح المركب." } },
    { lv: 3, q: "StudentID → DepartmentID → DepartmentName. What is the problem and fix?", o: ["Partial dependency; add a composite key", "Transitive dependency; move department data to its own table", "1NF issue; split the cell", "No problem"], a: 1, why: { en: "Non-key depends on non-key → 3NF fix.", ar: "غير مفتاحي يعتمد على غير مفتاحي ← حل 3NF." } },
    { lv: 2, q: "Which operator finds names starting with A?", o: ["LIKE 'A%'", "LIKE '%A'", "IN ('A')", "= 'A'"], a: 0, why: { en: "% after A = anything can follow.", ar: "% بعد A = أي شيء بعدها." } },
    { lv: 2, q: "Grade BETWEEN 70 AND 90 returns:", o: ["71 to 89 only", "70 to 90 including both", "Below 70 and above 90", "Only 70 and 90"], a: 1, why: { en: "BETWEEN is inclusive.", ar: "BETWEEN يشمل الطرفين." } },
    { lv: 2, q: "What does DISTINCT do?", o: ["Deletes duplicate rows from the table", "Removes duplicates from the query result only", "Sorts results", "Counts rows"], a: 1, why: { en: "Table data is not changed.", ar: "بيانات الجدول لا تتغير." } },
    { lv: 3, q: "Which clause filters groups after aggregation?", o: ["WHERE", "HAVING", "ORDER BY", "DISTINCT"], a: 1, why: { en: "HAVING filters groups; WHERE filters rows.", ar: "HAVING للمجموعات، وWHERE للصفوف." } },
    { lv: 3, q: "Show ALL students, including those not enrolled in any course. Which JOIN (students written first)?", o: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN", "UNION"], a: 1, why: { en: "LEFT keeps every row of the first table.", ar: "LEFT يحتفظ بكل صفوف الجدول الأول." } },
    { lv: 2, q: "Show only students who are enrolled in at least one course.", o: ["INNER JOIN", "LEFT JOIN", "FULL OUTER JOIN", "RIGHT JOIN"], a: 0, why: { en: "Only matching rows.", ar: "الصفوف المتطابقة فقط." } },
    { lv: 3, q: "Difference between UNION and UNION ALL?", o: ["UNION keeps duplicates", "UNION removes duplicates; UNION ALL keeps them", "UNION ALL joins columns", "No difference"], a: 1, why: { en: "UNION ALL can return more rows.", ar: "UNION ALL ممكن يرجع صفوفاً أكثر." } },
    { lv: 3, q: "JOIN vs UNION:", o: ["JOIN combines rows, UNION combines columns", "JOIN combines columns (horizontal), UNION combines rows (vertical)", "Both combine rows", "Both need ON"], a: 1, why: { en: "JOIN horizontal, UNION vertical.", ar: "JOIN أفقي، وUNION عمودي." } },
    { lv: 4, q: "Whenever a grade changes, the old and new grade must be recorded automatically. Use:", o: ["View", "Stored procedure", "Trigger", "Index"], a: 2, why: { en: "Automatic reaction to an UPDATE event.", ar: "رد فعل تلقائي على حدث UPDATE." } },
    { lv: 3, q: "The user enters a group number to see matching students. Use:", o: ["View", "Stored procedure with a parameter", "Trigger", "UNION"], a: 1, why: { en: "Procedures accept parameters and run with CALL.", ar: "الإجراء يقبل معاملات ويُشغّل بـ CALL." } },
    { lv: 3, q: "Which command runs a stored procedure in MySQL?", o: ["EXEC", "RUN", "CALL", "SELECT"], a: 2, why: { en: "CALL ProcedureName(...).", ar: "CALL اسم_الإجراء(...)." } },
    { lv: 4, q: "Inside an UPDATE trigger, OLD.Grade refers to:", o: ["The new value", "The value before the change", "The average grade", "The primary key"], a: 1, why: { en: "OLD = before, NEW = after.", ar: "OLD = قبل، NEW = بعد." } },
    { lv: 3, q: "An instructor must view and update grades but not delete. Which approach?", o: ["GRANT ALL", "GRANT SELECT, UPDATE (least privilege)", "REVOKE SELECT", "Share the DBA password"], a: 1, why: { en: "Only what is needed.", ar: "فقط ما تحتاجه." } },
    { lv: 2, q: "Checking WHO the user is (username/password) is called:", o: ["Authorisation", "Authentication", "Normalisation", "Restore"], a: 1, why: { en: "Authentication = identity.", ar: "المصادقة = الهوية." } },
    { lv: 2, q: "Important records were accidentally deleted. The DBA should:", o: ["GRANT more privileges", "Restore from a recent backup", "Create a view", "Run DESCRIBE"], a: 1, why: { en: "Backups exist for recovery.", ar: "النسخ الاحتياطي للاستعادة." } },
    { lv: 4, q: "Which is METADATA?", o: ["Grade = 85", "FirstName = 'Sara'", "Grade column is DECIMAL(5,2)", "Status = 'Late'"], a: 2, why: { en: "Structure info, not values.", ar: "معلومة عن البنية وليست قيمة." } },
    { lv: 3, q: "Which table name is the best identifier?", o: ["Student Data", "123Student", "students", "Select"], a: 2, why: { en: "No spaces, no leading number, not reserved.", ar: "بدون مسافة ولا يبدأ برقم وليس محجوزاً." } },
    { lv: 3, q: "Which command shows a table's fields, types, NULL rules and keys?", o: ["SHOW TABLES", "DESCRIBE students", "SELECT *", "GRANT"], a: 1, why: { en: "DESCRIBE shows table metadata.", ar: "DESCRIBE يعرض البيانات الوصفية للجدول." } }
  ]
});
