OC.L10N.register(
    "recognize",
    {
    "Recognize" : "Recognize",
    "Smart media tagging and face recognition with on-premises machine learning models" : "Etiquetado inteligente de medios y reconocimiento facial con modelos de ML que se ejecutan localmente",
    "Smart media tagging and face recognition with on-premises machine learning models.\nThis app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* 🎥 🤸 Recognizes human actions on video\n\n⚡ Tagging works via Nextcloud's Collaborative Tags\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos and videos with the photos app\n\nModel sizes:\n\n * Object recognition: 1GB\n * Landmark recognition: 300MB\n * Video action recognition: 50MB\n * Music genre recognition: 50MB\n\n## Ethical AI Rating\n### Rating for Photo object detection: 🟢\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n### Rating for Photo face recognition: 🟢\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n### Rating for Video action recognition: 🟢\n\nPositive:\n* the software for training and inferencing of this model is open source\n* the trained model is freely available, and thus can be ran on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n## Ethical AI Rating\n### Rating Music genre recognition: 🟡\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n\nNegative:\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\nLearn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- php 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64-bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; FreeBSD, Alpine linux and thus also the official Nextcloud Docker container and Nextcloud AIO are *not* such systems)\n- For sub-native speed (using WASM mode)\n  - Processor: x86 64-bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux and thus also the official Nextcloud Docker container and also Nextcloud AIO)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n- This app is currently incompatible with the *Suspicious Login* app due to a dependency conflict (ie. you can only have one of the two installed)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js." : "Etiquetado inteligente de medios y reconocimiento facial con modelos de ML que se ejecutan localmente\nEsta app revisa su colección de medios y les añade etiquetas a medida, caterogizando automáticamente sus fotos y música.\n\n* 📷 👪 Reconoce rostros desde las fotos de los contactos\n* 📷 🏔 Reconoce animales, paisajes, comida, vehículos, edificios y otros objetos\n* 📷 🗼 Reconoce puntos de referencia y monumentos\n* 👂 🎵 Reconoce géneros musicales\n* 🎥 🤸 Reconoce acciones humanas en video\n* ⚡ El etiquetado funciona mediante Etiquetas colaborativas de Nextcloud\n  * 👂 escuche su música etiquetada con la app de reproducción de audio\n  * 📷 vea sus fotos y videos etiquetadas con la app de fotos\n\nTamaño de los modelos: \n\n* Reconocimiento de objetos: 1GB\n* Reconocimiento de puntos de referencia y monumentos: 300MB\n* Reconocimiento de acciones en video: 50MB\n* Reconocimiento de géneros musicales: 50MB\n\n## Clasificación ética mediante IA\n### Clasificación para detección de objetos en fotografías: 🟢\n\nPositiva:\n* el software para el entrenamiento e inferencia de este modelo es de software abierto\n* el modelo entrenado está disponible de manera gratuita y por tanto, puede ser ejecutado en su infraestructura local\n* los datos de entrenamiento están disponibles de manera gratuita, haciendo posible la revisión o la corrección por bias u optimización del rendimiento o uso de CO2.\n\n### Clasificación para la detección de rostros en fotografías: 🟢\n\nPositiva:\n* el software para el entrenamiento e inferencia de este modelo es de software abierto\n* el modelo entrenado está disponible de manera gratuita y por tanto, puede ser ejecutado en su infraestructura local\n* los datos de entrenamiento están disponibles de manera gratuita, haciendo posible la revisión o la corrección por bias u optimización del rendimiento o uso de CO2.\n\n### Clasificación para el reconocimiento de acciones en Video: 🟢\n\nPositiva:\n* el software para el entrenamiento e inferencia de este modelo es de software abierto\n* el modelo entrenado está disponible de manera gratuita y por tanto, puede ser ejecutado en su infraestructura local\n* los datos de entrenamiento están disponibles de manera gratuita, haciendo posible la revisión o la corrección por bias u optimización del rendimiento o uso de CO2.\n\n## Clasificación ética mediante IA\n### Clasificación del reconocimiento de géneros musicales: 🟡\n\nPositiva:\n* el software para el entrenamiento e inferencia de este modelo es de software abierto\n* el modelo entrenado está disponible de manera gratuita y por tanto, puede ser ejecutado en su infraestructura local\n\nNegativa:\n* Los datos de entrenamiento no están disponibles de manera gratuita, limitando la habilidad de terceros para revisar y corregir el bias u optimizar el rendimiento o uso de CO2.\n\nAprenda más sobre la clasificación ética mediante IA de Nextcloud [en nuestro blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).\n\nLuego de la instalación, puede habilitar el etiquetado en los ajustes de administración.\n\nRequerimienots:\n- php 7.4 o superior\n- La App de \"Etiquetas colaborativas\" habilitada\n- Para rendimiento nativo:\n  - Procesador: x86 64-bit (con soporte para instrucciones AVX)\n  - Un sistema con glibc (que usualmente es la norma en Linux; FreeBSD, Alpine linux y por tanto la imagen de contenedor Docker oficial de Nextcloud y Nextcloud AIO *no* son este tipo de sistemas)\n- Para rendimiento inferior al nativo (usando el modo WASM)\n  - Procesador: x86 64-bit, arm64, armv7l (no se necesita soporte a instrucciones AVX)\n  - Un sistema con glibc ó musl (incl. Alpine linux y por tanto la imagen oficial de contenedor Docker de Nextcloud y también Nextcloud AIO)\n- ~4GB de RAM libre (si está muy cerca de este valor, asegúrese de tener algo de espacio de intercambio disponible)\n- Esta app actualmente es incompatible con la app de *Inicios de Sesión Sospechosos* dado a un conflicto de dependencias (p.ej. solo puede tener una de las dos instalada)\n\nLa aplicación no envía ningún tipo de datos sensibles a proveedores de nube o a servicios similares. Todo el procesamiento se hace en su equipo Nextcloud, utilizando Tensorflow.js ejecutándose en Node.js.",
    "Status" : "Estatus",
    "The machine learning models have been downloaded successfully." : "Los modelos de machine learning han sido descargados de forma satisfactoria.",
    "The machine learning models still need to be downloaded." : "Los modelos de machine learning todavía requieren ser descargados.",
    "Could not execute the Node.js binary. You may need to set the path to a working binary manually." : "No se pudo ejecutar el binario de Node.js. Es probable que necesite establecer la ruta a un binario funcional manualmente.",
    "Background Jobs are not executed via cron. Recognize requires background jobs to be executed via cron." : "Los trabajos en segundo plano no están siendo ejecutados a través de cron. Recognize requiere que los trabajos en segundo plano sean ejecutados a través de cron.",
    "The app is installed and will automatically classify files in background processes." : "La app está instalada y clasificará automáticamente los archivos en segundo plano.",
    "None of the tagging options below are currently selected. The app will currently do nothing." : "Ninguna de las opciones de etiquetado a continuación se encuentran seleccionadas. La app actualmente no estará haciendo nada.",
    "Face recognition" : "Reconocimiento facial",
    "Face recognition is working. " : "El reconocimiento facial está funcionando.",
    "An error occurred during face recognition, please check the Nextcloud logs." : "Ocurrió un error durante el reconocimiento facial, por favor, compruebe los registros de Nextcloud.",
    "Waiting for status reports on face recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "En espera de reportes de estado sobre el reconocimiento facial. Si este mensaje persiste por mas de 15 minutos, compruebe los registros de Nextcloud.",
    "Face recognition:" : "Reconocimiento facial:",
    "Queued files" : "Archivos encolados",
    "Last classification: " : "Última clasificación:",
    "Scheduled background jobs: " : "Trabajos de segundo plano agendados:",
    "Last background job execution: " : "Última ejecución de trabajo de segundo plano:",
    "There are queued files in the face recognition queue but no background job is scheduled to process them." : "Hay archivos encolados en la cola de reconocimiento facial pero no hay un trabajo de segundo plano agendado para procesarlos.",
    "Face clustering:" : "Agrupamiento de rostros:",
    "faces left to cluster" : "rostros pendientes de agrupar",
    "Last clustering run: " : "Última ejecución de agrupamiento:",
    "A minimum of 120 faces per user is necessary for clustering to kick in" : "Un mínimo de 120 rostros por usuario es necesario para que el agrupamiento arranque",
    "Enable face recognition (groups photos by faces that appear in them; UI is in the photos app)" : "Habilitar el reconocimiento facial (agrupará las imágenes por las personas que aparezcan en ellas; La UI está en la app de fotos)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~500 or more, in WASM mode ~50 is recommended)" : "Número de archivos a procesar por cada ejecución de tarea (Se programará una tarea cada 5 minutos; En operación normal ~500 o más, en modo WASM se recomiendan ~50)",
    "Object detection & landmark recognition" : "Detección de objetos y puntos de referencia",
    "Object recognition is working." : "El reconocimiento de objetos está funcionando.",
    "An error occurred during object recognition, please check the Nextcloud logs." : "Ocurrió un error durante el reconocimiento de objetos, por favor, compruebe los registros de Nextcloud.",
    "Waiting for status reports on object recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "En espera de reportes de estado sobre el reconocimiento de objetos. Si este mensaje persiste por mas de 15 minutos, compruebe los registros de Nextcloud.",
    "Object recognition:" : "Reconocimiento de objetos:",
    "There are queued files in the object detection queue but no background job is scheduled to process them." : "Hay archivos encolados en la cola de detección de objetos pero no hay un trabajo de segundo plano agendado para procesarlos.",
    "Landmark recognition is working." : "El reconocimiento de puntos de referencia está funcionando.",
    "An error occurred during landmark recognition, please check the Nextcloud logs." : "Ocurrió un error durante el reconocimiento de puntos de referencia, por favor, compruebe los registros de Nextcloud.",
    "Waiting for status reports on landmark recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "En espera de reportes de estado sobre el reconocimiento de puntos de referencia. Si este mensaje persiste por mas de 15 minutos, compruebe los registros de Nextcloud.",
    "Landmark recognition:" : "Reconocimiento de puntos de referencia:",
    "There are queued files in the landmarks queue but no background job is scheduled to process them." : "Hay archivos encolados en la cola de detección de puntos de referencia pero no hay un trabajo de segundo plano agendado para procesarlos.",
    "Enable object recognition (e.g. food, vehicles, landscapes)" : "Habilitar el reconocimiento de objetos (p. ej. comida, vehículos, paisajes)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~100 or more, in WASM mode ~20 is recommended)" : "Número de archivos a procesar por cada ejecución de tarea (Se programará una tarea cada 5 minutos; En operación normal ~100 o más, en modo WASM se recomiendan ~20)",
    "Enable landmark recognition (e.g. Eiffel Tower, Golden Gate Bridge)" : "Habilitar el reconocimiento de lugares importantes (p. ej. La torre Eiffel, puente Golden Gate)",
    "Audio tagging" : "Etiquetado de audio",
    "Audio recognition is working." : "El reconocimiento de audio está funcionando.",
    "An error occurred during audio recognition, please check the Nextcloud logs." : "Ocurrió un error durante el reconocimiento de audio, por favor, compruebe los registros de Nextcloud.",
    "Waiting for status reports on audio recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "En espera de reportes de estado sobre el reconocimiento de audio. Si este mensaje persiste por mas de 15 minutos, compruebe los registros de Nextcloud.",
    "Music genre recognition:" : "Reconocimiento de género musical:",
    "There are queued files but no background job is scheduled to process them." : "Hay archivos encolados en la cola pero no hay un trabajo de segundo plano agendado para procesarlos.",
    "Enable music genre recognition (e.g. pop, rock, folk, metal, new age)" : "Habilitar el reconocimiento de género musical (p. ej. pop, rock, folk, metal, new age)",
    "Video tagging" : "Etiquetado de video",
    "Video recognition is working." : "El reconocimiento de video está funcionando.",
    "An error occurred during video recognition, please check the Nextcloud logs." : "Ocurrió un error durante el reconocimiento de video, por favor, compruebe los registros de Nextcloud.",
    "Waiting for status reports on video recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "En espera de reportes de estado sobre el reconocimiento de video. Si este mensaje persiste por mas de 15 minutos, compruebe los registros de Nextcloud.",
    "Video recognition:" : "Reconocimiento de video:",
    "Enable human action recognition (e.g. arm wrestling, dribbling basketball, hula hooping)" : "Habilitar el reconocimiento de acciones humanas (p. ej. pulso, dribles de baloncesto, hula-hula)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~20 or more, in WASM mode ~5 is recommended)" : "Número de archivos a procesar por cada ejecución de tarea (Se programará una tarea cada 5 minutos; En operación normal ~20 o más, en modo WASM se recomiendan ~5)",
    "Reset" : "Restablecer",
    "Click the button below to remove all tags from all files that have been classified so far." : "Haga click a continuación para eliminar todas las etiquetas de todos los archivos que han sido clasificados hasta ahora.",
    "Reset tags for classified files" : "Reestablecer las etiquetas de los archivos clasificados",
    "Click the button below to remove all face detections from all files that have been classified so far." : "Haga click a continuación para eliminar todas las detecciones faciales de todos los archivos que han sido clasificados hasta ahora.",
    "Reset faces for classified files" : "Reestablecer las detecciones faciales de los archivos clasificados",
    "Click the button below to rescan all files in this instance and add them to the classifier queues." : "Haga click a continuación para volver a escanear todos los archivos en esta instancia y añadirlos a las colas de clasificación.",
    "Rescan all files" : "Volver a escanear todos los archivos",
    "Click the button below to clear the classifier queues and clear all background jobs. This is useful when you want to do the initial classification using the terminal command." : "Haga click en el botón a continuación para borrar las colas de clasificación y borrar todos los trabajos en segundo plano. Esto es útil cuando quiere hacer la clasificación inicial utilizando la línea de comandos.",
    "Clear queues and background jobs" : "Borrar colas y trabajos en segundo plano",
    "Resource usage" : "Utilización de recursos",
    "By default all available CPU cores will be used which may put your system under considerable load. To avoid this, you can limit the amount of CPU Cores used. (Note: In WASM mode, currently only 1 core can be used at all times.)" : "Por defecto, todos los núcleos del CPU serán utilizados, lo que podría poner su sistema bajo una carga considerable. Para evitarlo, puede limitar la cantidad de núcleos a utilizar. (Nota: en el modo WASM solo se usa 1 núcleo permanentemente.)",
    "Number of CPU Cores (0 for no limit)" : "Número de núcleos de CPU (0 para no utilizar límite)",
    "By default, recognize will only ever run one classifier process at a time. If you have a lot of resources available and want to run as many processes in parallel as possible, you can turn on concurrency here." : "De forma predeterminada, recognize solo ejecutará un proceso de clasificación al mismo tiempo. Si tiene muchos recursos disponibles y quiere ejecutar tantos procesos en paralelo como sean posibles, puede habilitar la concurrencia aquí.",
    "Enable unlimited concurrency of classifier processes" : "Habilitar concurrencia ilimitada de los procesos clasificadores",
    "Tensorflow WASM mode" : "Modo WASM Tensorflow",
    "Checking CPU" : "Comprobando CPU",
    "Could not check whether your machine supports native TensorFlow operation. Make sure your OS has GNU lib C, your CPU supports AVX instructions and you are running on x86. If one of these things is not the case, you will need to run in WASM mode." : "No se pudo verificar si su máquina tiene soporte nativo para la operación de TensorFlow. Asegúrese que su sistema operativo tenga GNU lib C, que su CPU soporte instrucciones AVX y la arquitectura del mismo sea x86. Si alguna de estas no es el caso, tendrá que ejecutar en modo WASM.",
    "Your machine supports native TensorFlow operation, you do not need WASM mode." : "Su equipo soporta la operación nativa de TensorFlow, no necesitará el modo WASM.",
    "WASM mode was activated automatically, because your machine does not support native TensorFlow operation:" : "El modo WASM fue activado automáticamente, ya que su equipo no soporta la operación nativa de TensorFlow:",
    "Enable WASM mode" : "Habilitar modo WASM",
    "Recognize uses Tensorflow for running the machine learning models. Not all installations support Tensorflow, either because the CPU does not support AVX instructions, or because the platform is not x86 (ie. on a Raspberry Pi, which is ARM), or because the Operating System that your nextcloud runs on (when using docker, then that is the OS within the docker image) does not come with GNU lib C (for example Alpine Linux, which is also used by Nextcloud AIO). In most cases, even if your installation does not support native Tensorflow operation, you can still run Tensorflow using WebAssembly (WASM) in Node.js. This is somewhat slower but still works." : "Recognize utiliza Tensorflow para ejecutar los modelos de aprendizaje automático. No todas las instalaciones admiten Tensorflow, ya sea porque la CPU no admite instrucciones AVX, o porque la plataforma no es x86 (es decir, en una Raspberry Pi, que es ARM), o porque el sistema operativo en el que se ejecuta nextcloud (cuando se utiliza docker, entonces es el sistema operativo dentro de la imagen docker) no viene con GNU lib C (por ejemplo Alpine Linux, que también es utilizado por Nextcloud AIO). En la mayoría de los casos, incluso si su instalación no soporta el funcionamiento nativo de Tensorflow, todavía puede ejecutar Tensorflow utilizando WebAssembly (WASM) en Node.js. Esto es algo más lento, pero sigue funcionando.",
    "Tensorflow GPU mode" : "Modo GPU de Tensorflow",
    "Enable GPU mode" : "Habilitar modo GPU",
    "Like most machine learning models, Recognize will run even faster when using a GPU. Setting this up is non-trivial but works well when everything is setup correctly." : "Cómo la mayoría de los modelos de machine learning, Recognize se ejecutará aún más rápido utilizando un GPU. Configurar esto no es trivial pero funciona muy bien cuando todo está configurado correctamente.",
    "Learn how to setup GPU mode with Recognize" : "Aprenda a como configurar el modo GPU con Recognize",
    "Node.js" : "Node.js",
    "Checking Node.js" : "Comprobando Node.js",
    "Node.js {version} binary was installed successfully." : "El binario Node.js {version} fue instalado exitósamente.",
    "Checking libtensorflow" : "Comprobando libtensorflow",
    "Could not load libtensorflow in Node.js. You can try to manually install libtensorflow or run in WASM mode." : "No fue posible cargar libtensorflow en Node.js. Puede intentar instalar manualmente libtensorflow o utilizar el modo WASM.",
    "Successfully loaded libtensorflow in Node.js, but couldn't load GPU. Make sure CUDA Toolkit and cuDNN are installed and accessible, or turn off GPU mode." : "Se cargó libtensorflow exitosamente en Node.js, aunque no se pudo cargar GPU. Asegúrese que el toolkit CUDA y cuDNN están instalados y son accesibles, o bien, desactive el modo GPU.",
    "Libtensorflow was loaded successfully into Node.js." : "Libtensorflow fue cargada exitosamente en Node.js.",
    "Could not load Tensorflow WASM in Node.js. Something is wrong with your setup." : "No se puede cargar Tensorflow WASM en Node.js. Hay algún problema con su configuración.",
    "Tensorflow WASM was loaded successfully into Node.js." : "Tensorflow WASM fue cargada exitosamente en Node.js.",
    "If the shipped Node.js binary doesn't work on your system for some reason you can set the path to a custom node.js binary. Currently supported is Node v14.17 and newer v14 releases." : "Si el binario proporcionado de Node.js no funciona en su sistema por alguna razón, puede establecer la ruta a un binario personalizado. Se soportan las versiones de Node 14 desde la versión v14.17.",
    "For Nextcloud Snap users, you need to adjust this path to point to the snap's \"current\" directory as the pre-configured path will change with each update. For example, set it to \"/var/snap/nextcloud/current/nextcloud/extra-apps/recognize/bin/node\" instead of \"/var/snap/nextcloud/9337974/nextcloud/extra-apps/recognize/bin/node\"" : "Para los usuarios del Snap de Nextcloud, tendrá que ajustar esta ruta para apuntar al directorio \"actual\" de snap ya que la ruta pre-configurada cambiará con cada actualización. Por ejemplo, configurelo a \"/var/snap/nextcloud/current/nextcloud/extra-apps/recognize/bin/node\" en vez de \"/var/snap/nextcloud/9337974/nextcloud/extra-apps/recognize/bin/node\"",
    "Classifier process priority" : "Prioridad del proceso del clasificador",
    "Checking Nice binary" : "Comprobando el binario Nice",
    "Could not find the Nice binary. You may need to set the path to a working binary manually." : "No se encontró el binario Nice. Es posible que deba establecer la ruta a un binario funcional manualmente.",
    "Nice binary path" : "Ruta del binario Nice",
    "Nice value to set the priority of the Node.js processes. The value can only be from 0 to 19 since the Node.js process runs without superuser privileges. The higher the nice value, the lower the priority of the process." : "Valor de prioridad a establecer sobre los procesos de Node.js. El valor solo puede ser de 0 a 19, ya que el proceso de Node.js se ejecuta sin privilegios de superusuario. Cuanto mayor sea el valor, menor será la prioridad del proceso.",
    "Terminal commands" : "Comandos de terminal",
    "To download all models preliminary to executing the classification jobs, run the following command on the server terminal." : "Para descargar todos los modelos previo a la ejecución de los trabajos de clasificación, ejecute el siguiente comando en el terminal del servidor.",
    "To trigger a full classification run, run the following command on the server terminal. (The classification will run in multiple background jobs which can run in parallel.)" : "Para dar inicio a una corrida de clasificación completa, ejecute el siguiente comando en el terminal del servidor. (La corrida de clasificación se ejecutará en múltiples trabajos en segundo plano que pueden correr en paralelo.)",
    "To run a full classification run on the terminal, run the following. (The classification will run in sequence inside your terminal.)" : "Para ejecutar una corrida de clasificación completa en el terminal, ejecute lo siguiente. (La corrida de clasificación se ejecutará secuencialmente en su terminal.)",
    "Before running a full initial classification run on the terminal, you should stop all background processing that Recognize scheduled upon installation to avoid interference." : "Antes de ejecutar una ejecución completa inicial de clasificación en la terminal, debes detener todos los procesos en segundo plano que Recognize programó al momento de la instalación para evitar interferencias.",
    "To run a face clustering run on for each user in the terminal, run the following. Consider adding the parameter --batch-size <count> for large libraries to avoid PHP memory exhaustion. (The clustering will run in sequence inside your terminal.)" : "Para la ejecución de una corrida facial clusterizada para cada usuario en la terminal, ejecute lo siguiente. Considere añadir el parámetro  --batch-size <count> para librerías largas para evitar que se agote la memoria en PHP. (La clusterización se ejecutará de forma secuencial dentro de su terminal.)",
    "To remove all face clusters but keep the raw detected faces run the following on the terminal:" : "Para quitar todos los grupos de rostros conservando los rostros detectados en crudo, ejecute lo siguiente en el terminal:",
    "To remove all detected faces and face clusters run the following on the terminal:" : "Para quitar todos los rostros detectados y sus grupos, ejecute lo siguiente en el terminal:",
    "You can reset the tags of all files that have been previously classified by Recognize with the following command:" : "Puede reestablecer las etiquetas de todos los archivos que han sido previamente clasificados por medio de reconocimiento con el siguiente comando:",
    "You can delete all tags that no longer have any files associated with them with the following command:" : "Puede eliminar todas las etiquetas que no tienen archivos asociados a ellas con el siguiente comando:",
    "To remove tags that were created by Recognize version 2 from all files run the following on the terminal:" : "Para quitar todas las etiquetas que fueron creadas por Recognize versión 2 de todos los archivos, ejecute lo siguiente en la terminal:",
    "Your server does not support AVX instructions" : "Su servidor no soporta instrucciones AVX",
    "Your server does not have an x86 64-bit CPU" : "Su servidor no tiene un CPU x86 de 64 bits",
    "Your server uses musl libc" : "Su servidor utilizar la libreria C musl",
    "Failed to load settings" : "Fallo al cargar configuraciones",
    "Failed to save settings" : "Fallo al guardar configuraciones",
    "never" : "nunca",
    "{time} ago" : "hace {time}",
    "Cat" : "Gato",
    "Animal" : "Animal",
    "Wildlife" : "Vida silvestre",
    "Nature" : "Naturaleza",
    "Puma" : "Puma",
    "Leopard" : "Pantera",
    "Lion" : "León",
    "Wild cat" : "Gato salvaje",
    "Cheetah" : "Leopardo",
    "Seashore" : "Costa",
    "Beach" : "Playa",
    "Water" : "Agua",
    "Lakeside" : "Junto al lago",
    "Flower" : "Flor",
    "Plant" : "Planta",
    "Window" : "Ventana",
    "Architecture" : "Arquitectura",
    "Stairs" : "Escaleras",
    "Building" : "Edificio",
    "Field" : "Campo",
    "Farm" : "Granja",
    "Landscape" : "Paisaje",
    "Portrait" : "Retrato",
    "People" : "Personas",
    "Fashion" : "Moda",
    "Ship" : "Embarcación",
    "Vehicle" : "Vehículo",
    "Grasshopper" : "Saltamontes",
    "Insect" : "Insecto",
    "Fish" : "Pez",
    "Shark" : "Tiburón",
    "Chicken" : "Pollo",
    "Bird" : "Ave",
    "Ostrich" : "Avestruz",
    "Owl" : "Búho",
    "Salamander" : "Salamandra",
    "Frog" : "Rana",
    "Turtle" : "Tortuga",
    "Reptile" : "Reptil",
    "Lizard" : "Lagartija",
    "Chameleon" : "Camaleón",
    "Crocodile" : "Cocodrilo",
    "Alligator" : "Caimán",
    "Scorpion" : "Escorpión",
    "Spider" : "Araña",
    "Duck" : "Pato",
    "Worm" : "Gusano",
    "Shell" : "Caparazón",
    "Snail" : "Caracol",
    "Crab" : "Cangrejo",
    "Lobster" : "Langosta",
    "Cooking" : "Cocinar",
    "Penguin" : "Pingüino",
    "Whale" : "Ballena",
    "Dog" : "Perro",
    "Wolf" : "Lobo",
    "Fox" : "Zorro",
    "Bear" : "Oso",
    "Beetle" : "Escarabajo",
    "Butterfly" : "Mariposa",
    "Rabbit" : "Conejo",
    "Hippo" : "Hipopótamo",
    "Cow" : "Vaca",
    "Buffalo" : "Búfalo",
    "Sheep" : "Oveja",
    "Ape" : "Simio",
    "Monkey" : "Mono",
    "Lemur" : "Lemúr",
    "Elephant" : "Elefante",
    "Panda" : "Panda",
    "Instrument" : "Instrumento",
    "Music" : "Música",
    "Aircraft" : "Aeronave",
    "Airport" : "Aeropuerto",
    "Tractor" : "Tractor",
    "Weapon" : "Arma",
    "Backpack" : "Morral",
    "Shop" : "Tienda",
    "Office" : "Oficina",
    "Outdoor" : "Exteriores",
    "Living" : "Sala",
    "Tower" : "Torre",
    "Drinks" : "Bebe",
    "Beverage" : "Bebida",
    "Food" : "Comida",
    "Shelter" : "Refugio",
    "Furniture" : "Muebles",
    "Book" : "Libro",
    "Train" : "Tren",
    "Butcher" : "Carnicero",
    "Car" : "Coche",
    "Historic" : "Histórico",
    "Boat" : "Bote",
    "Electronics" : "Electrónica",
    "Indoor" : "Interiores",
    "Church" : "Iglesia",
    "Shoe" : "Zapato",
    "Candle" : "Vela",
    "Coffee" : "Café",
    "Keyboard" : "Teclado",
    "Computer" : "Ordenador",
    "Helmet" : "Casco",
    "Wall" : "Pared",
    "Clock" : "Reloj",
    "Dining" : "Comedor",
    "Kitchen" : "Cocina",
    "Snow" : "Nieve",
    "Dome" : "Domo",
    "Screen" : "Pantalla",
    "Flag" : "Bander",
    "Truck" : "Camión",
    "Store" : "Tienda",
    "Tool" : "Herramienta",
    "Pumpkin" : "Calabaza",
    "Vegetables" : "Vegetales",
    "Photography" : "Fotografía",
    "Library" : "Biblioteca",
    "Display" : "Mostrar",
    "Bag" : "Bolsa",
    "Cup" : "Taza",
    "Rocks" : "Rocas",
    "Bus" : "Bus",
    "Bowl" : "Cuenco",
    "Monitor" : "Monitor",
    "Bike" : "Bicicleta",
    "Scooter" : "Scooter",
    "Camping" : "Camping",
    "Cart" : "Carrito",
    "Piggy bank" : "Alcancía",
    "Bottle" : "Botella",
    "Plate" : "Plato",
    "Camera" : "Cámara",
    "Camper" : "Camper",
    "Barbecue" : "Parrillada",
    "Basket" : "Cesta",
    "Diving" : "Sumergiéndose",
    "Snowmobile" : "Motonieve",
    "Bridge" : "Puente",
    "Couch" : "Sofá",
    "Theater" : "Teatro",
    "Spoon" : "Cuchara",
    "Comic" : "Cómic",
    "Soup" : "Sopa",
    "Dessert" : "Postre",
    "Bakery" : "Panadería",
    "Fruit" : "Fruta",
    "Pasta" : "Pasta",
    "Meat" : "Carne",
    "Pizza" : "Pizza",
    "Wine" : "Vino",
    "Alpine" : "Alpino",
    "Mountains" : "Montañas",
    "Sand" : "Arena",
    "Wool" : "Lana",
    "Glass" : "Vidrio",
    "Moment" : "Momento",
    "Info" : "Información",
    "Document" : "Documento",
    "Puzzle" : "Rompecabezas",
    "Heritage" : "Legado",
    "Safe" : "Caja fuerte",
    "Bucket" : "Balde",
    "Baby" : "Bebé",
    "Cradle" : "Cuna",
    "Patio" : "Patio",
    "Mountain" : "Montaña",
    "Radio telescope" : "Radio telescopio",
    "Theme park" : "Parque temático",
    "Festival" : "Festival",
    "Event" : "Evento",
    "Monument" : "Monumento",
    "Balloon" : "Globo",
    "Crib" : "Cuna",
    "Fan" : "Ventilador",
    "Gas station" : "Gasolinera",
    "Wood" : "Madera",
    "Bench" : "Banco",
    "Parking" : "Aparcamiento",
    "Traffic" : "Tráfico",
    "Public transport" : "Transporte público",
    "Umbrella" : "Sombrilla",
    "Stage" : "Escenario",
    "Toy" : "Juguete",
    "Vase" : "Jarrón",
    "Mailbox" : "Buzón",
    "Sign" : "Signo",
    "Gallery" : "Galería",
    "Park" : "Parque"
},
"nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
