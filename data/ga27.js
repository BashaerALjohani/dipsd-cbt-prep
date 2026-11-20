window.STUDY = window.STUDY || { units: [] };
STUDY.ga = STUDY.ga || {};
STUDY.ga.u27 = {
  ga: 'GA11', num: 27, title: { en: 'Develop data-driven applications (LEAP)', ar: 'تطوير التطبيقات المعتمدة على البيانات (LEAP)' },
  file: 'U27.GA11.TraineeName.TraineeID + Tasks 1-6 GA11 + LEAP_TraineeName_TraineeID.zip',
  scenario: { en: 'A Java desktop app for the LEAP conference team. Exhibitors submit their company details (they cannot see others). Admins view all exhibitors in a table, update and delete. Data lives in MySQL, accessed only through DBHelper.java with JDBC.', ar: 'تطبيق جافا لسطح المكتب لفريق مؤتمر LEAP. العارض يسجل بيانات شركته (وما يشوف غيره). المسؤول يشوف كل العارضين في جدول، ويعدّل ويحذف. البيانات في MySQL، والوصول لها فقط عن طريق DBHelper.java باستخدام JDBC.' },
  tools: { en: 'NetBeans + JDK, Swing JFrame Forms, WAMP/XAMPP + phpMyAdmin, MySQL Connector/J (.jar), the Exhibitor Data Sheet, Tasks 1–6 Template (Tables 1–14).', ar: 'NetBeans وJDK، نماذج Swing JFrame، WAMP/XAMPP مع phpMyAdmin، MySQL Connector/J (ملف jar)، ورقة بيانات العارضين، قالب Tasks 1–6 (الجداول 1 إلى 14).' },
  rules: [
    { en: 'NO SQL in any form file. Forms call DBHelper methods only (A criterion).', ar: 'ممنوع أي SQL في ملفات النماذج. النماذج تستدعي دوال DBHelper بس (معيار A).' },
    { en: 'Always PreparedStatement with ? for user input.', ar: 'دائماً PreparedStatement مع ? لمدخلات المستخدم.' },
    { en: 'Hide your real DB password in screenshots; write the code yourself.', ar: 'اخفِ كلمة مرور القاعدة الحقيقية في اللقطات؛ واكتب الكود بنفسك.' }
  ],
  tasks: [
    { n: 'Task 1', title: { en: 'UI layer (3 forms) + DBHelper class', ar: 'طبقة الواجهة (3 نماذج) + صنف DBHelper' }, crit: '1.1–1.2, 6.2',
      need: { en: 'WelcomeForm, AdminForm (fields, Update/Delete/Refresh/Back, tblExhibitors with ID, Company, Country, Sector, Hall) and ExhibitorForm (fields, Submit/Back) as JFrame Forms; DBHelper.java with a top comment naming JDBC.', ar: 'WelcomeForm وAdminForm (الحقول، أزرار Update/Delete/Refresh/Back، جدول tblExhibitors بأعمدة ID وCompany وCountry وSector وHall) وExhibitorForm (الحقول، Submit/Back) كنماذج JFrame؛ وDBHelper.java بتعليق في الأعلى يذكر JDBC.' },
      explain: { en: 'UI layer = the three forms; data-access layer = DBHelper. Keep them separate (three-layer model from your lesson).', ar: 'طبقة الواجهة = النماذج الثلاثة؛ طبقة الوصول للبيانات = DBHelper. خلّهم منفصلين (نموذج الطبقات الثلاث من درسك).' },
      steps: [
        { en: 'New → JFrame Form ×3; drag components exactly as the brief tables list; rename variables (txtCompany, btnSubmit, tblExhibitors).', ar: 'New ← JFrame Form ثلاث مرات؛ اسحب المكونات حسب جداول الأسايمنت بالضبط؛ وغيّر أسماء المتغيرات (txtCompany وbtnSubmit وtblExhibitors).' },
        { en: 'Welcome buttons open the other forms (new AdminForm().setVisible(true); dispose();).', ar: 'أزرار الترحيب تفتح النماذج الثانية (new AdminForm().setVisible(true); dispose();).' },
        { en: 'New → Java Class DBHelper with the JDBC comment.', ar: 'New ← Java Class باسم DBHelper مع تعليق JDBC.' }
      ],
      shots: [{ en: 'Design view of each form + running forms + DBHelper with comment (Tables 1–2).', ar: 'شاشة التصميم لكل نموذج + النماذج شغالة + DBHelper مع التعليق (الجدولين 1 و2).' }],
      a: { en: 'A: all three forms clearly separated from DBHelper.java, no SQL in any form.', ar: 'A: النماذج الثلاثة منفصلة بوضوح عن DBHelper.java، وبدون SQL في أي نموذج.' } },
    { n: 'Task 2', title: { en: 'Database + connection method', ar: 'قاعدة البيانات + دالة الاتصال' }, crit: '2.1–2.3, 6.2',
      need: { en: 'In phpMyAdmin create yournameleap_conference with table exhibitors (exhibitor_id, company_name, country, sector, hall). In DBHelper write a connection method using a connection string and DriverManager.getConnection() inside try/catch.', ar: 'في phpMyAdmin أنشئ yournameleap_conference وفيها جدول exhibitors (exhibitor_id وcompany_name وcountry وsector وhall). وفي DBHelper اكتب دالة اتصال تستخدم connection string وDriverManager.getConnection() داخل try/catch.' },
      explain: { en: 'Add Connector/J to Libraries first. exhibitor_id = INT AUTO_INCREMENT PRIMARY KEY.', ar: 'أضف Connector/J للمكتبات أول. exhibitor_id = INT AUTO_INCREMENT PRIMARY KEY.' },
      steps: [
        { en: 'Libraries → Add JAR → mysql-connector-j.', ar: 'Libraries ← Add JAR ← mysql-connector-j.' },
        { en: 'Connection method returns a Connection; on failure show JOptionPane with a clear message.', ar: 'دالة الاتصال ترجع Connection؛ وعند الفشل اعرض JOptionPane برسالة واضحة.' },
        { en: 'Test: stop MySQL once to screenshot the error message.', ar: 'اختبر: أوقف MySQL مرة عشان تصوّر رسالة الخطأ.' }
      ],
      code: '// JDBC is the API used for Java database access.\npublic static Connection getConnection() {\n    try {\n        return DriverManager.getConnection(URL, USER, PASSWORD);\n    } catch (SQLException e) {\n        JOptionPane.showMessageDialog(null, "Cannot connect to the database. Please check MySQL is running.");\n        return null;\n    }\n}', lang: 'java',
      shots: [{ en: 'phpMyAdmin structure, connection method code, success + failure message (Tables 3–4).', ar: 'هيكل الجدول في phpMyAdmin، كود الاتصال، رسالة النجاح والفشل (الجدولين 3 و4).' }],
      a: { en: 'A: a clear error message to the user if the connection fails.', ar: 'A: رسالة خطأ واضحة للمستخدم إذا فشل الاتصال.' } },
    { n: 'Task 3', title: { en: 'Query and display exhibitors (Admin)', ar: 'استعلم واعرض العارضين (المسؤول)' }, crit: '3.1–3.4, 6.2',
      need: { en: 'DBHelper method: SELECT * FROM exhibitors, read with ResultSet into ArrayList<String[]>, try/catch. AdminForm calls it on load and fills the JTable. Add sample data from the Exhibitor Data Sheet via SQL INSERT.', ar: 'دالة في DBHelper: SELECT * FROM exhibitors، تقرأ بـ ResultSet وتخزن في ArrayList<String[]>، مع try/catch. وAdminForm يستدعيها عند الفتح ويعبّي الجدول. وأضف بيانات من ورقة العارضين بـ INSERT.' },
      explain: { en: 'Fill the table through DefaultTableModel: clear rows, then addRow for each String[].', ar: 'عبِّ الجدول عن طريق DefaultTableModel: امسح الصفوف، ثم addRow لكل String[].' },
      steps: [
        { en: 'INSERT the sample rows in phpMyAdmin (screenshot).', ar: 'أدخل الصفوف التجريبية بـ INSERT في phpMyAdmin (لقطة).' },
        { en: 'Write getAllExhibitors() in DBHelper; call it from the AdminForm constructor (or a loadTable() method).', ar: 'اكتب getAllExhibitors() في DBHelper؛ واستدعها من constructor الـ AdminForm (أو دالة loadTable()).' },
        { en: 'Show a clear message if retrieval fails.', ar: 'اعرض رسالة واضحة إذا فشل الجلب.' }
      ],
      shots: [{ en: 'Method code, AdminForm call, running table with data, error message (Tables 5–6).', ar: 'كود الدالة، الاستدعاء في AdminForm، الجدول شغال بالبيانات، رسالة الخطأ (الجدولين 5 و6).' }],
      a: { en: 'A: a clear error message if data retrieval fails.', ar: 'A: رسالة خطأ واضحة إذا فشل جلب البيانات.' } },
    { n: 'Task 4', title: { en: 'Add, update, delete with PreparedStatement', ar: 'الإضافة والتعديل والحذف بـ PreparedStatement' }, crit: '4.1–4.3, 6.2',
      need: { en: 'Submit → add method, success message, clear fields. Update → update selected row. Delete → confirmation dialog, then delete selected row. All SQL with ? placeholders and try/catch.', ar: 'Submit ← دالة الإضافة، رسالة نجاح، مسح الحقول. Update ← تعديل الصف المحدد. Delete ← نافذة تأكيد ثم حذف الصف المحدد. وكل SQL بعلامات ? وtry/catch.' },
      explain: { en: 'Selected row: tblExhibitors.getSelectedRow(); its ID from column 0. Confirmation: JOptionPane.showConfirmDialog.', ar: 'الصف المحدد: tblExhibitors.getSelectedRow()؛ ورقمه من العمود 0. والتأكيد: JOptionPane.showConfirmDialog.' },
      steps: [
        { en: 'Write addExhibitor, updateExhibitor, deleteExhibitor in DBHelper (executeUpdate).', ar: 'اكتب addExhibitor وupdateExhibitor وdeleteExhibitor في DBHelper (executeUpdate).' },
        { en: 'Add companies through the ExhibitorForm UI using the data sheet.', ar: 'أضف شركات عن طريق واجهة ExhibitorForm باستخدام ورقة البيانات.' },
        { en: 'Screenshot phpMyAdmin BEFORE and AFTER delete to prove the row is gone.', ar: 'صوّر phpMyAdmin قبل وبعد الحذف عشان تثبت إن الصف انحذف.' }
      ],
      code: 'int ok = JOptionPane.showConfirmDialog(this, "Delete this company?", "Confirm", JOptionPane.YES_NO_OPTION);\nif (ok == JOptionPane.YES_OPTION) {\n    DBHelper.deleteExhibitor(id);   // SQL lives only in DBHelper\n}', lang: 'java',
      shots: [{ en: 'Each method + button code, success message, confirmation dialog, DB before/after (Tables 7–11).', ar: 'كل دالة + كود الزر، رسالة النجاح، نافذة التأكيد، القاعدة قبل/بعد (الجداول 7–11).' }],
      a: { en: 'A: Delete button with confirmation dialog evidenced + database table proving deletion.', ar: 'A: زر الحذف مع نافذة التأكيد موضح + جدول القاعدة يثبت الحذف.' } },
    { n: 'Task 5', title: { en: 'Disconnected data (offline cache)', ar: 'البيانات المنفصلة (نسخة محلية)' }, crit: '5.1–5.2, 6.2',
      need: { en: 'Research answer (80–100 words): what disconnected data means and how your AdminForm handles Wi-Fi being down. Then keep a local ArrayList copy after a successful load and show it when the DB is unavailable.', ar: 'إجابة بحث (80–100 كلمة): وش تعني البيانات المنفصلة وكيف AdminForm يتعامل مع انقطاع الواي فاي. ثم احتفظ بنسخة محلية في ArrayList بعد التحميل الناجح واعرضها لما القاعدة ما تكون متاحة.' },
      explain: { en: 'Disconnected = work on a local copy while the connection is closed (like ADO.NET DataSet). Your cache is a static ArrayList in AdminForm.', ar: 'المنفصل = تشتغل على نسخة محلية والاتصال مقفل (مثل DataSet في ADO.NET). والنسخة عندك ArrayList ثابتة في AdminForm.' },
      steps: [
        { en: 'Write the answer in your own words with one reference.', ar: 'اكتب الإجابة بأسلوبك مع مرجع واحد.' },
        { en: 'On success: cache = new ArrayList<>(rows). On failure: if cache not empty, show it + a message "Showing saved copy".', ar: 'عند النجاح: cache = new ArrayList<>(rows). عند الفشل: إذا النسخة مو فاضية اعرضها + رسالة "عرض النسخة المحفوظة".' },
        { en: 'Test: load once, stop MySQL, press Refresh, screenshot.', ar: 'اختبر: حمّل مرة، أوقف MySQL، اضغط Refresh، وصوّر.' }
      ],
      shots: [{ en: 'Research paragraph + cache code + offline test screenshot (Tables 12–13).', ar: 'فقرة البحث + كود النسخة + لقطة الاختبار بدون اتصال (الجدولين 12 و13).' }],
      a: { en: 'A: the research answer clearly explains the strategy for LEAP\'s app.', ar: 'A: إجابة البحث تشرح بوضوح الاستراتيجية لتطبيق LEAP.' } },
    { n: 'Task 6', title: { en: 'Comment every DBHelper method', ar: 'علّق على كل دالة في DBHelper' }, crit: '6.1–6.2',
      need: { en: 'A clear comment above every method in DBHelper.java explaining what it does.', ar: 'تعليق واضح فوق كل دالة في DBHelper.java يشرح وش تسوي.' },
      explain: { en: 'Use JavaDoc style from Unit 21: purpose, @param, @return.', ar: 'استخدم أسلوب JavaDoc من الوحدة 21: الهدف، @param، @return.' },
      steps: [
        { en: 'Add /** ... */ above getConnection, getAllExhibitors, add, update, delete.', ar: 'أضف /** ... */ فوق getConnection وgetAllExhibitors والإضافة والتعديل والحذف.' },
        { en: 'Zip the project as LEAP_TraineeName_TraineeID.zip.', ar: 'اضغط المشروع باسم LEAP_TraineeName_TraineeID.zip.' }
      ],
      shots: [{ en: 'Full DBHelper.java with comments (Table 14).', ar: 'ملف DBHelper.java كامل بالتعليقات (الجدول 14).' }],
      a: { en: 'A: every method has a clear comment above it.', ar: 'A: كل دالة فوقها تعليق واضح.' } }
  ]
};
