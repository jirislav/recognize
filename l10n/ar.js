OC.L10N.register(
    "recognize",
    {
    "Recognize" : "التعرف على",
    "Smart media tagging for Nextcloud" : "الوسم الذكي للوسائط smart media tagging على نكست كلاود",
    "This app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* ⚡ Tagging works via Nextcloud's Collaborative Tags, allowing access by any of your apps\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos with the photos app\n\n## Ethical AI Rating\n### Rating for Photo object detection: 🟢\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n### Rating for Photo face recognition: 🟢\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n### Rating for Video action recognition: 🟢\n\nPositive:\n* the software for training and inferencing of this model is open source\n* the trained model is freely available, and thus can be ran on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n## Ethical AI Rating\n### Rating Music genre recognition: 🟡\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n\nNegative:\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\nLearn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- php 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64-bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; FreeBSD, Alpine linux and thus also the official Nextcloud Docker container and Nextcloud AIO are *not* such systems)\n- For sub-native speed (using WASM mode)\n  - Processor: x86 64-bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux and thus also the official Nextcloud Docker container and also Nextcloud AIO)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n- This app is currently incompatible with the *Suspicious Login* app due to a dependency conflict (ie. you can only have one of the two installed)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js." : "هذا التطبيق يبحث عبر مجموعة الوسائط الخاصة بك ويضيف وسم مناسب، ويصنف الصور والموسيقى تلقائيًا.\n\n* 📷👪 يتعرف على الوجوه من صور جهات الاتصال \n* 📷 🏔 يتعرف على الحيوانات والمناظر الطبيعية والطعام والمركبات والمباني والأشياء الأخرى \n* 📷 🗼 يتعرف على المعالم الأرضية والمعالم الأثرية \n* 👂 🎵 يتعرف على أنواع الموسيقى\n* ⚡ يعمل وضع وسم عبر الوسم التشاركي لنكست كلود، مما يسمح بالوصول إليها من خلال أي من تطبيقاتك\n * 👂 الاستماع إلى الموسيقى التي تم وضع وسم عليها باستخدام تطبيق مشغل الصوت\n* 📷 عرض الصور التي تم وضع وسم عليها باستخدام تطبيق الصور\n\n## تقييم AI الوصفي\n ### تقييم اكتشاف كائن الصورة: 🟢\n\nالإيجابي: \n* البرنامج للتدريب والاستدلال لهذا النموذج مفتوح المصدر \n* النموذج المدرب متاح مجانًا، وبالتالي يمكن تشغيل برمجية أون بريمسيز\n* بيانات التدريب متاحة مجانًا، مما يجعل من الممكن التحقق من الخطأ المنهجي وتصحيحه أو تحسين أداء النموذج واستخدام CO2. \n\n### تقييم التعرف علي وجه الصورة: 🟢\n\nالإيجابي: \n* البرنامج للتدريب والاستدلال لهذا النموذج مفتوح المصدر \n* النموذج المدرب متاح مجانًا، وبالتالي يمكن تشغيل برمجية أون بريمسيز\n* بيانات التدريب متاحة مجانًا، مما يجعل من الممكن التحقق من الخطأ المنهجي وتصحيحه أو تحسين أداء النموذج واستخدام CO2. \n\n### تقييم التعرف علي إجراءات الفيديو: 🟢\n\nالإيجابي: \n* البرنامج للتدريب والاستدلال لهذا النموذج مفتوح المصدر \n* النموذج المدرب متاح مجانًا، وبالتالي يمكن تشغيل برمجية أون بريمسيز \n* بيانات التدريب متاحة مجانًا، مما يجعل من الممكن التحقق من الخطأ المنهجي وتصحيحه أو تحسين أداء النموذج واستخدام CO2. \n\n## تقييم AI الوصفي\n### تقييم الترف علي نوع الموسيقي :  🟡\n\nالإيجابي: \n* البرنامج للتدريب والاستدلال لهذا النموذج مفتوح المصدر \n* النموذج المدرب متاح مجانًا، وبالتالي يمكن تشغيل برمجية أون بريمسيز\n\nالسلبي: \n* بيانات التدريب غير متاحة مجانًا ، مما يحد من قدرة الأطراف الخارجية للتحقق من الخطأ المنهجي وتصحيحه أو تحسين أداء النموذج واستخدام CO2. \n\nتعرف على المزيد حول التقييم الوصفي لنكست كلود AI [من خلال مدونتنا] (https://nextcloud.com/blog/nextcloud-ethical-ai-rating/ ).\n\nبعد التثبيت، يمكنك تمكين وضع الوسم في إعدادات المسؤول. \n\nالمتطلبات:\n- معالج نص تشعبي 7.4 فما فوق\n- تمكين \"الوسم التشاركي\" للتطبيق\n- للسرعة الأصلية:\n- معالج: 86اكس 64 بت ( يدعم تعليمات شركة أيه في اكس)\n- نظام مزود ببرمجية مكتبة جنو سي (عادةً ما يكون نموذج في Linux ؛ FreeBSD و Alpine linux وبالتالي أيضًا حاوية Nextcloud Docker الرسمية و Nextcloud AIO ليست * مثل هذه الأنظمة)\n- للسرعة الأقل من الأصلية (يستخدم وضع ويب أسمبلي)\n- المعالج: 86اكس 64 بت، arm64، armv7l (لا حاجة إلى أيه في إكس)\n- نظام مزود ببرمجية مكتبة جنو سي أو musl (بما في ذلك Alpine linux وبالتالي أيضًا حاوية Nextcloud Docker الرسمية وأيضًا Nextcloud AIO) \n- 4 غيغابايت تقريبا من ذاكرة الوصول العشوائي المجانية (إذا كنت تقترب من ذلك ، فتأكد من توفر بعض الاستبدال) \n- هذا التطبيق غير متوافق حاليًا مع تطبيق * Suspicious Login * بسبب تعارض في التبعية (على سبيل المثال ، يمكنك تثبيت واحد فقط من الاثنين) \n\nلا يرسل التطبيق أي بيانات حساسة إلى موفري الخدمات السحابية أو الخدمات المماثلة. تتم جميع عمليات المعالجة على جهاز Nextcloud الخاص بك ، باستخدام Tensorflow.js الذي يعمل في Node.js.",
    "Status" : "الحاله",
    "The machine learning models have been downloaded successfully." : "تمّ تنزيل نماذج التعلُّم الآلي بنجاحٍ.",
    "The machine learning models still need to be downloaded." : "يلزم تنزيل نماذج التعلُّم الآلي.",
    "Could not execute the Node.js binary. You may need to set the path to a working binary manually." : "تعذر تشغيل الملف الثنائي لبرمجية نود.جي إس \" Node.js \". قد تحتاج إلى تعيين المسار يدويا إلى الملف الثنائي العامل.",
    "Background Jobs are not executed via cron. Recognize requires background jobs to be executed via cron." : "مهام الخلفية لا تعمل حاليّاً عبر مجدول الأعمال الزمني كرون \"cron\" . يستلزم التعرف أن يتم تشغيل مهام الخلفية عبر مجدول الأعمال الزمني كرون \"cron\" .",
    "The app is installed and will automatically classify files in background processes." : "تمّ تنصيب التطبيق و سوف يقوم بتنصيف الملفات آليّاً في عمليات بالخلفية.",
    "None of the tagging options below are currently selected. The app will currently do nothing." : "لم يتم تحديد أي من خيارات وضع السِّمَات أدناه حالياً. لن يقوم التطبيق حالياً بأيّ شيء.",
    "Face recognition" : "التعرف على الوجه",
    "Face recognition is working. " : "التعرُّف عل الوجوه قيد العمل.",
    "An error occurred during face recognition, please check the Nextcloud logs." : "حدث خطأ أثناء التعرّف على الوجوه. رجاءً راجع سجل الحركات logs في نكست كلاود",
    "Waiting for status reports on face recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "في انتظار تقارير الحالة الخاصة بالتعرف على الوجوه. إذا استمرت هذه الرسالة لأكثر من 15 دقيقة، فيرجى التحقق من سجلات نكست كلود.",
    "Face recognition:" : "التعرُّف على الوجوه",
    "Queued files" : "ملفات في قائمة الانتظار",
    "Last classification: " : "آخر تصنيف:",
    "Scheduled background jobs: " : "المهام المجدولة فى الخلفية:",
    "Last background job execution: " : "آخر تنفيذ للمهمة في الخلفية:",
    "There are queued files in the face recognition queue but no background job is scheduled to process them." : "توجد ملفات قيد الانتظار في قائمة انتظار التعرف علي الوجوه ولكن لم تتم جدولة أي مهمة في الخلفية لمعالجتهم.",
    "Face clustering:" : "تجميع الوجه:",
    "faces left to cluster" : "الأوجه المتبقية للتجميع:",
    "Last clustering run: " : "آخر عملية  تجميع تم إجراؤها:",
    "A minimum of 120 faces per user is necessary for clustering to kick in" : "يلزم ما لا يقل عن 120 وجه لكل مستخدم لبدء التجميع",
    "Enable face recognition (groups photos by faces that appear in them; UI is in the photos app)" : "تمكين التعرف على الوجه (تجميع الصور حسب الوجوه التي تظهر فيها؛ واجهة المستخدم موجودة في تطبيق الصور)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~500 or more, in WASM mode ~50 is recommended)" : "عدد الملفات المراد معالجتها لكل وظيفة يتم تشغيلها (ستتم جدولة وظيفة كل 5 دقائق؛ للتشغيل العادي حوالي 500 أو أكثر، في وضع ويب أسمبلي يوصي بحوالي 50)",
    "Object detection & landmark recognition" : "اكتشاف الكائنات والتعرف على المعالم",
    "Object recognition is working." : "التعرُّف على الأشياء يعمل الآن",
    "An error occurred during object recognition, please check the Nextcloud logs." : "أنت على وشك تحميل عدد كبير من الملفات. هل أنت متأكد؟",
    "Waiting for status reports on object recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "في انتظار تقارير الحالة الخاصة بالتعرف على الكائن. إذا استمرت هذه الرسالة لأكثر من 15 دقيقة، فيرجى التحقق من سجلات نكست كلود.",
    "Object recognition:" : "التعرُّف على الأشياء",
    "There are queued files in the object detection queue but no background job is scheduled to process them." : "توجد ملفات قيد الانتظار في قائمة انتظار اكتشاف الكائنات ولكن لم تتم جدولة أي مهمة في الخلفية لمعالجتهم.",
    "Landmark recognition is working." : "خاصية التعرف على المعالم تعمل.",
    "An error occurred during landmark recognition, please check the Nextcloud logs." : "حدث خطأ أثناء التعرف على المعالم، يرجى التحقق من سجلات نكست كلود.",
    "Waiting for status reports on landmark recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "في انتظار تقارير الحالة الخاصة بالتعرف على المعالم. إذا استمرت هذه الرسالة لأكثر من 15 دقيقة، فيرجى التحقق من سجلات نكست كلود.",
    "Landmark recognition:" : "التعرف على المعلم:",
    "There are queued files in the landmarks queue but no background job is scheduled to process them." : "توجد ملفات قيد الانتظار في قائمة انتظار المعالم ولكن لم تتم جدولة أي مهمة في الخلفية لمعالجتهم.",
    "Enable object recognition (e.g. food, vehicles, landscapes)" : "تمكين التعرُّف على الأشياء (مثل الأطعمة والمركبات والمناظر الطبيعية)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~100 or more, in WASM mode ~20 is recommended)" : "عدد الملفات المراد معالجتها لكل عملية تشغيل (ستتم جدولة وظيفة كل 5 دقائق؛ للتشغيل العادي حوالي 100 أو أكثر، في وضع ويب أسمبلي يوصي بحوالي 20)",
    "Enable landmark recognition (e.g. Eiffel Tower, Golden Gate Bridge)" : "تمكين التعرُّف على المعالم (مثل برج إيفل ، الأهرامات، و غيرها)",
    "Audio tagging" : "الوسم الصوتي",
    "Audio recognition is working." : "التعرُّف على الأصوات يعمل الآن",
    "An error occurred during audio recognition, please check the Nextcloud logs." : "حدث خطأ أثناء التعرف على الصوت، يرجى التحقُّق من سجل الحركات logs في نكست كلاود.",
    "Waiting for status reports on audio recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "في انتظار تقارير الحالة الخاصة بالتعرف على الصوت. إذا استمرت هذه الرسالة لأكثر من 15 دقيقة، فيرجى التحقق من سجلات نكست كلود.",
    "Music genre recognition:" : "التعرُّف على الأسلوب الموسيقي",
    "There are queued files but no background job is scheduled to process them." : "توجد ملفات في قائمة الانتظار ولكن لم تتم جدولة أي مهام في الخلفية لمعالجتها.",
    "Enable music genre recognition (e.g. pop, rock, folk, metal, new age)" : "تفعيل التعرف على الأسلوب الموسيقي (مثل موسيقى البوب ​​والروك والشعبية والطربية و غيرها)",
    "Video tagging" : "الوسم بالفيديو",
    "Video recognition is working." : "التعرُّف على الفيديوهات يعمل الآن.",
    "An error occurred during video recognition, please check the Nextcloud logs." : "حدث خطأ أثناء التعرف على الفيديوهات، يرجى التحقُّق من سجل الحركات logs في نكست كلاود.",
    "Waiting for status reports on video recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "في انتظار تقارير الحالة الخاصة بالتعرف على الفيديو. إذا استمرت هذه الرسالة لأكثر من 15 دقيقة، فيرجى التحقق من سجلات نكست كلود.",
    "Video recognition:" : "التعرُّف على الفيديوهات",
    "Enable human action recognition (e.g. arm wrestling, dribbling basketball, hula hooping)" : "تمكين التعرُّف على أوضاع جسم الإنسان (مثل المصارعة و الجري و الرمي و غيرها)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~20 or more, in WASM mode ~5 is recommended)" : "عدد الملفات المراد معالجتها لكل عملية تشغيل (ستتم جدولة مهمة كل 5 دقائق ؛ للتشغيل العادي حوالي 20 أو أكثر، في وضع ويب أسمبلي يوصي بحوالي 5)",
    "Reset" : "إعادة الضبط",
    "Click the button below to remove all tags from all files that have been classified so far." : "أنقُر فوق الزّر أدناه لإزالة كافة الوسوم من كافة الملفات التي تمّ تصنيفها حتى الآن.",
    "Reset tags for classified files" : "إعادة تعيين السِّمَات للملفات المُصنّفة",
    "Click the button below to remove all face detections from all files that have been classified so far." : "انقر فوق الزر أدناه لإزالة اكتشافات جميع الوجوه من جميع الملفات التي تم تصنيفها حتى الآن.",
    "Reset faces for classified files" : "إعادة تعيين الوجوه للملفات المصنفة",
    "Click the button below to rescan all files in this instance and add them to the classifier queues." : "أنقُر فوق الزّر أدناه لإعادة فحص جميع الملفات على هذا الخادوم وإضافتها إلى قوائم انتظار المُصنِّف.",
    "Rescan all files" : "إعادة فحص كل الملفات",
    "Click the button below to clear the classifier queues and clear all background jobs. This is useful when you want to do the initial classification using the terminal command." : "انقر فوق الزر أدناه لمحو قوائم انتظار المُصنِّف classifier ومحو جميع وظائفه في الخلفية. يكون هذا مفيدًا عندما تريد إجراء التصنيف الأولي باستخدام سطر الأوامر على الطرفية.",
    "Clear queues and background jobs" : "محو قوائم الانتظار و وظائف الخلفية",
    "CPU cores" : "أنوية وحدة المعالجة المركزية",
    "By default all available CPU cores will be used which may put your system under considerable load. To avoid this, you can limit the amount of CPU Cores used. (Note: In WASM mode, currently only 1 core can be used at all times.)" : "بشكل افتراضي، سيتم استخدام جميع نُوَى وحدة المعالجة المركزية CPU cores المتاحة والتي قد تضع نظامك تحت عبء كبير. لتجنب ذلك، يمكنك تحديد عدد النُّوَى المستعملة. (ملاحظة: في وضع WASM، يمكن حاليًا استخدام نواة واحدة فقط في جميع الأوقات.)",
    "Number of CPU Cores (0 for no limit)" : "عدد أنوية وحدة المعالجة المركزية CPU cores ـ (0 تعني غير عدد محدود)",
    "Tensorflow WASM mode" : "وضع تنسرفلو ويب أسمبلي \"Tensorflow WASM\"",
    "Checking CPU" : "فحص وحدة المعالجة المركزية CPU",
    "Could not check whether your machine supports native TensorFlow operation. Make sure your OS has GNU lib C, your CPU supports AVX instructions and you are running on x86. If one of these things is not the case, you will need to run in WASM mode." : "تعذر التحقق مما إذا كان جهازك يدعم المكتبة البرمجية تنسرفلو \"Tensorflow\" محليا. تأكد من أن نظام التشغيل لديك مزود ببرمجية مكتبة جنو سي، وأن وحدة المعالجة المركزية لديك تدعم تعليمات أيه فى إكس \"AVX\" وأنك تعمل على x86. إذا لم يكن الأمر كذلك، فسوف تحتاج إلى التشغيل في وضع ويب أسمبلي \"WASM\".",
    "Your machine supports native TensorFlow operation, you do not need WASM mode." : "يدعم جهازك عملية TensorFlow الأصلية، ولا تحتاج إلى وضعية WASM.",
    "WASM mode was activated automatically, because your machine does not support native TensorFlow operation:" : "تمّ تنشيط وضع WASM تلقائياً، لأن جهازك لا يدعم عملية TensorFlow الأصلية:",
    "Enable WASM mode" : "تمكين وضعية WASM",
    "Recognize uses Tensorflow for running the machine learning models. Not all installations support Tensorflow, either because the CPU does not support AVX instructions, or because the platform is not x86 (ie. on a Raspberry Pi, which is ARM), or because the Operating System that your nextcloud runs on (when using docker, then that is the OS within the docker image) does not come with GNU lib C (for example Alpine Linux, which is also used by Nextcloud AIO). In most cases, even if your installation does not support native Tensorflow operation, you can still run Tensorflow using WebAssembly (WASM) in Node.js. This is somewhat slower but still works." : "التعرف باستخدام المكتبة البرمجية تنسرفلو \"Tensorflow\" لتشغيل نماذج التعلم الآلة. ليست جميع عمليات التثبيت تدعم تنسرفلو، إما لأن وحدة المعالجة المركزية لا تدعم تعليمات أيه فى إكس \"AVX\" أو لأن النظام الأساسي ليس x86 (على سبيل المثال حاسوب راسبيري باي \"Raspberry Pi\"، حيث يحتوي علي معالج آرم \"ARM\")، أو لأن نظام التشغيل الذي يعمل عليه نكست كلود الخاص بك (عند استخدام برمجية دوكر \"docker\"، فإن نظام التشغيل ضمن صورة دوكر) لا يأتي مزود ببرمجية مكتبة جنو سي (على سبيل المثال آلبين لينوكس \"Alpine Linux \"، والذي يتم استخدامه أيضا من قبل نكست كلود أيه آي أو\"Nextcloud AIO\"). في معظم الحالات، حتى إذا كان التثبيت لا يدعم التشغيل المحلي لبرمجية تنسرفلو، فلا يزال بإمكانك تشغيل لبرمجية تنسرفلو باستخدام ويب أسمبلي (WASM) علي نود.جيه اس \"Node.js\". وهذا أبطأ إلى حد ما لكنه لا يزال يعمل.",
    "Tensorflow GPU mode" : "وضع GPU Tensorflow",
    "Enable GPU mode" : "تفعيل وضع GPU",
    "Like most machine learning models, recognize will run even faster when using a GPU. Setting this up is non-trivial but works well when everything is setup correctly." : "مثل معظم نماذج التعلم الآلي، سيعمل التعرف بشكل أسرع عند استخدام وحدة معالجة الرسومات. عملية التنصيب ليست بالأمر السهل ولكنها تعمل بشكل جيد عندما يتم تنصيب كل شيء بشكل صحيح.",
    "Learn how to setup GPU mode with recognize" : "تعلّم كيفية تهيئة وضعية وحدة المعالجة الرُّسُومِيّة GPU مع \"التعرُّف\" recognize",
    "Node.js" : "نود. جي اس",
    "Checking Node.js" : "التحقق من نود. جي اس",
    "Node.js {version} binary was installed successfully." : "تم تثبيت الملف الثنائي لبرمجية نود. جي اس {version}بنجاح.",
    "Checking libtensorflow" : "التحقق من برمجية ليب تنسرفلو \"libtensorflow\"",
    "Could not load libtensorflow in Node.js. You can try to manually install libtensorflow or run in WASM mode." : "تعذر تحميل ليب تنسرفلو في نود. جي اس. يمكنك محاولة تثبيت ليب تنسرفلو يدويًا أو تشغيله في وضع ويب أسمبلي \"WASM \".",
    "Successfully loaded libtensorflow in Node.js, but couldn't load GPU. Make sure CUDA Toolkit and cuDNN are installed and accessible, or turn off GPU mode." : "تم تحميل libtensorflow بنجاح في Node.js ، لكن تعذر تحميل GPU. تأكد من تثبيت CUDA Toolkit و cuDNN وإمكانية الوصول إليهم، أو قم بإيقاف تشغيل وضع GPU.",
    "Libtensorflow was loaded successfully into Node.js." : "تم تحميل ليب تنسرفلو في نود. جي اس بنجاح.",
    "Could not load Tensorflow WASM in Node.js. Something is wrong with your setup." : "تعذر تحميل ليب تنسرفلو  ويب أسمبلي في نود. جي اس. يوجد خطأ فى التنصيب. ",
    "Tensorflow WASM was loaded successfully into Node.js." : "تم تحميل ليب تنسرفلو  ويب اسمبلي في نود. جي اس بنجاح.",
    "If the shipped Node.js binary doesn't work on your system for some reason you can set the path to a custom node.js binary. Currently supported is Node v14.17 and newer v14 releases." : "إذا كان الملف الثنائي Node.js المشحون مع النظام لا يعمل على نظامك لسبب ما، يمكنك تعيين المسار إلى ملف node.js ثنائي مخصص. يتم دعم Node v14.17 والإصدارات الأحدث v14.",
    "Classifier process priority" : "أولوية عمليات المُصنِّف classifier",
    "Checking Nice binary" : "التحقُّق من الملف الثنائي لتطبيق تبادل الصور Nice ",
    "Could not find the Nice binary. You may need to set the path to a working binary manually." : "تعذّر العثور على الملف الثنائي لتطبيق تبادل الصور Nice . قد تحتاج إلى أن تُعيِّن يدويّاً مسار الملف الثنائي العامل.",
    "Nice binary path" : "مسار الملف الثنائي لتطبيق تبادل الصور Nice",
    "Nice value to set the priority of the Node.js processes. The value can only be from 0 to 19 since the Node.js process runs without superuser privileges. The higher the nice value, the lower the priority of the process." : "قيمة تطبيق \"نايس\" Nice لتعيين أولوية عمليات Node.js. يمكن أن تكون القيمة من 0 إلى 19 فقط نظرًا لأن عملية Node.js تعمل بدون امتيازات المستخدم المتميز superuser. وكلما زادت هذه القيمة كلما انخفضت أولوية العملية.",
    "Terminal commands" : "أوامر الطَرَفِيّة terminal commands  ",
    "To download all models preliminary to executing the classification jobs, run the following command on the server terminal." : "لتنزيل جميع النماذج التمهيدية لتنفيذ وظائف التصنيف، قم بتشغيل الأمر التالي على طرفية terminal الخادوم.",
    "To trigger a full classification run, run the following command on the server terminal. (The classification will run in multiple background jobs which can run in parallel.)" : "لبدء تشغيل تصنيف كامل ، قم بتشغيل الأمر التالي على الخادم الطرفي. (سيتم تشغيل التصنيف في وظائف متعددة في الخلفية والتي يمكن تشغيلها بالتوازي.)",
    "To run a full classification run on the terminal, run the following. (The classification will run in sequence inside your terminal.)" : "لتشغيل تصنيف كامل يتم تشغيله على الوحدة الطرفية، قم بتشغيل ما يلي. (سيتم تشغيل التصنيف بالتسلسل داخل حاسوبك الطرفي.)",
    "Before running a full initial classification run on the terminal, you should stop all background processing that recognize scheduled upon installation to avoid interference." : "قبل تشغيل تصنيف أولي كامل full initial classification على سطر الأوامر في الطرفية terminal، يجب عليك إيقاف جميع عمليات المعالجة المجدولة في الخلفية عند التثبيت لتجنب التداخل.",
    "To run a face clustering run on for each user in the terminal, run the following. (The clustering will run in sequence inside your terminal.)" : "لتشغيل وظيفة تجميع الوجوه يتم تشغيلها لكل مستخدم في الحاسوب الطرفي، قم بتشغيل ما يلي. (سيتم تشغيل التجميع بالتسلسل داخل الحاسوب الطرفي الخاص بك.)",
    "To remove all face clusters but keep the raw detected faces run the following on the terminal:" : "لإزالة جميع مجموعات الوجوه مع الحفاظ على الوجوه الأولية المكتشفة ، قم بتشغيل ما يلي على الجهاز:",
    "To remove all detected faces and face clusters run the following on the terminal:" : "لإزالة جميع الوجوه المكتشفة ومجموعات الوجوه ، قم بتشغيل ما يلي على الجهاز:",
    "You can reset the tags of all files that have been previously classified by Recognize with the following command:" : "يمكنك إعادة تعيين وسوم جميع الملفات التي تمّ تصنيفها مسبقًا عن طريق خدمة التّعَرُّف باستخدام الأمر التالي:",
    "You can delete all tags that no longer have any files associated with them with the following command:" : "يمكنك حذف جميع السِّمَات tags التي لم يعد لها أي ملفات مرتبطة بها باستخدام الأمر التالي:",
    "To remove tags that were created by recognize version 2 from all files run the following on the terminal:" : "لإزالة الوسوم التي تم إنشاؤها عن طريق تطبيق التعرف \"recognize\" الإصدار 2 من جميع الملفات، قم بتشغيل ما يلي على الجهاز:",
    "Your server does not support AVX instructions" : "الخادوم الخاص بك لا يدعم تعليمات AVX",
    "Your server does not have an x86 64-bit CPU" : "لا يحتوي خادومك على وحدة معالجة مركزية x86-64 بت",
    "Your server uses musl libc" : "خادومك يستعمل musl libc",
    "Failed to load settings" : "إخفاق في تحميل الإعدادات",
    "Failed to save settings" : "فشل حفظ الإعدادات",
    "never" : "بتاتاً",
    "{time} ago" : "{time} مضت",
    "Cat" : "قطة",
    "Animal" : "حيوان",
    "Wildlife" : "الحياة البرية",
    "Nature" : "طبيعة",
    "Puma" : "بوما",
    "Leopard" : "نمر",
    "Lion" : "أسد",
    "Wild cat" : "قطة برية",
    "Cheetah" : "فهد",
    "Seashore" : "شاطئ البحر",
    "Beach" : "شاطئ",
    "Water" : "ماء",
    "Lakeside" : "شاطئ البحيرة ",
    "Flower" : "ورد",
    "Plant" : "نبات",
    "Window" : "نافذة ",
    "Architecture" : "معمار",
    "Stairs" : "سلالم",
    "Building" : "مبنى",
    "Field" : "حقل",
    "Farm" : "مزرعة",
    "Landscape" : "وضع أُفُقي",
    "Portrait" : "وضع رأسي",
    "People" : "الناس",
    "Fashion" : "موضة",
    "Ship" : "سفينة",
    "Vehicle" : "مركبة",
    "Grasshopper" : "جراد",
    "Insect" : "حشرة",
    "Fish" : "سمكة",
    "Shark" : "سمك القرش",
    "Chicken" : "فرخة",
    "Bird" : "طائر",
    "Ostrich" : "نعامة",
    "Owl" : "بُومَة",
    "Salamander" : "سلمندر",
    "Frog" : "ضفدع",
    "Turtle" : "سلحفاة",
    "Reptile" : "الزواحف",
    "Lizard" : "سحلية",
    "Chameleon" : "حرباء",
    "Crocodile" : "تمساح",
    "Alligator" : "قاطور",
    "Scorpion" : "عقرب",
    "Spider" : "عنكبوت",
    "Duck" : "بطة",
    "Worm" : "دُودَة",
    "Shell" : "صدَفَة",
    "Snail" : "حلزون",
    "Crab" : "سلطعون",
    "Lobster" : "سرطان البحر",
    "Cooking" : "طبخ",
    "Penguin" : "بطريق",
    "Whale" : "حوت",
    "Dog" : "كلب",
    "Wolf" : "ذئب",
    "Fox" : "ثعلب",
    "Bear" : "دُبٌّ",
    "Beetle" : "خنفساء",
    "Butterfly" : "فراشة",
    "Rabbit" : "أرنب",
    "Hippo" : "فرس النهر",
    "Cow" : "بقرة",
    "Buffalo" : "جاموسة",
    "Sheep" : "خروف",
    "Ape" : "سَعْدان",
    "Monkey" : "قرد",
    "Lemur" : "ليمور",
    "Elephant" : "فيل",
    "Panda" : "باندا",
    "Instrument" : "أداة",
    "Music" : "الموسيقى",
    "Aircraft" : "طائرة",
    "Airport" : "مطار",
    "Tractor" : "جرار زراعى",
    "Weapon" : "سلاح",
    "Backpack" : "حقيبة ظهر",
    "Shop" : "متجر",
    "Office" : "مكتب",
    "Outdoor" : "في الخارج",
    "Living" : "معيشة",
    "Tower" : "برج",
    "Drinks" : "مشروبات",
    "Beverage" : "مشروب",
    "Food" : "طعام",
    "Shelter" : "مَأوىً",
    "Furniture" : "أثاث",
    "Book" : "كتاب",
    "Train" : "القطار",
    "Butcher" : "جزار",
    "Car" : "سيارة",
    "Historic" : "تاريخي",
    "Boat" : "قارب",
    "Electronics" : "إلكترونيات",
    "Indoor" : "داخلي",
    "Church" : "كنيسة",
    "Shoe" : "حذاء",
    "Candle" : "شمعة",
    "Coffee" : "قهوة",
    "Keyboard" : "لوحة المفاتيح",
    "Computer" : "كمبيوتر",
    "Helmet" : "خوذة",
    "Wall" : "حائط",
    "Clock" : "الساعة",
    "Dining" : "غرفة الطعام",
    "Kitchen" : "مطبخ",
    "Snow" : "ثلج",
    "Dome" : "قبة",
    "Screen" : "شاشة",
    "Flag" : "علَم",
    "Truck" : "شاحنة",
    "Store" : "متجر",
    "Tool" : "أداة",
    "Pumpkin" : "يقطين",
    "Vegetables" : "خضروات",
    "Photography" : "تصوير فوتوغرافي",
    "Library" : "مكتبة",
    "Display" : "عرض",
    "Bag" : "حقيبة",
    "Cup" : "كوب",
    "Rocks" : "صخور",
    "Bus" : "حافلة",
    "Bowl" : "صَحن",
    "Monitor" : "شاشة",
    "Bike" : "دراجة",
    "Scooter" : "سكوتر",
    "Camping" : "تخيم",
    "Cart" : "عربة مجرورة",
    "Piggy bank" : "حصالة نقود",
    "Bottle" : "زجاجة",
    "Plate" : "طبق",
    "Camera" : "الكاميرا",
    "Camper" : "عربة",
    "Barbecue" : "حفل شواء",
    "Basket" : "سلة",
    "Diving" : "غوص",
    "Snowmobile" : "زحافة جليد",
    "Bridge" : "كوبري",
    "Couch" : "أريكة",
    "Theater" : "مسرح",
    "Spoon" : "ملعقة",
    "Comic" : "رُسُومٌ هَزْلِيّة",
    "Soup" : "حساء",
    "Dessert" : "حَلوَى",
    "Bakery" : "مخبز",
    "Fruit" : "فاكهة",
    "Pasta" : "معكرونة",
    "Meat" : "لحمة",
    "Pizza" : "بيتزا",
    "Wine" : "خمر",
    "Alpine" : "جبال الألب",
    "Mountains" : "جبال",
    "Sand" : "رمل",
    "Wool" : "صوف",
    "Glass" : "زجاج",
    "Moment" : "لحظة",
    "Info" : "معلومات",
    "Document" : "وثيقة",
    "Puzzle" : "لغز",
    "Heritage" : "تراث",
    "Safe" : "آمن",
    "Bucket" : "الحزمة",
    "Baby" : "طفل",
    "Cradle" : "مهد ",
    "Patio" : "فناء",
    "Mountain" : "جبل",
    "Radio telescope" : "تلسكوب راديو",
    "Theme park" : "مدينة ترفيهية",
    "Festival" : "مهرجان",
    "Event" : "حدث",
    "Monument" : "نُصُب تذكاري",
    "Balloon" : "بالون",
    "Crib" : "سرير طفل",
    "Fan" : "معجب",
    "Gas station" : "محطة غاز",
    "Wood" : "خشب",
    "Bench" : "مقعد",
    "Parking" : "موقف سيارات",
    "Traffic" : "حركة المرور",
    "Public transport" : "النقل العام",
    "Umbrella" : "مظلة",
    "Stage" : "منصة",
    "Toy" : "لعبة",
    "Vase" : "مزهرية",
    "Mailbox" : "صندوق بريد",
    "Sign" : "وقع",
    "Gallery" : "معرض الصور",
    "Park" : "حديقة"
},
"nplurals=6; plural=n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;");
