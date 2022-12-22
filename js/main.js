var panorama1, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7, viewer, infospot;

panorama1 = new PANOLENS.ImagePanorama('img/pano1.jpg');    "Центр холла"
panorama2 = new PANOLENS.ImagePanorama('img/pano2.jpg');    "Входная зона"
panorama3 = new PANOLENS.ImagePanorama('img/pano3.jpg');    "Зона отдыха"
panorama4 = new PANOLENS.ImagePanorama('img/pano4.jpg');    "Переход между этажами"
panorama5 = new PANOLENS.ImagePanorama('img/pano5.jpg');    "Центр первого этажа"
panorama6 = new PANOLENS.ImagePanorama('img/pano6.jpg');    "Дверь библиотеки"
panorama7 = new PANOLENS.ImagePanorama('img/pano7.jpg');    "Библиотека"


infospot1 = new PANOLENS.Infospot();
infospot1.position.copy(new THREE.Vector3(4947.18, 703.44, 11.15));
infospot1.addHoverText( 'Пост охраны');
panorama2.add(infospot1);

infospot2 = new PANOLENS.Infospot();
infospot2.position.copy(new THREE.Vector3(-3965.39, -927.63, -2893.75));
infospot2.addHoverText( 'Гардероб главного корпуса');
panorama1.add(infospot2);

infospot15 = new PANOLENS.Infospot();
infospot15.position.copy(new THREE.Vector3(-4781.08, 44.31, 1500));
infospot15.addHoverText( '122 Общий отдел');
panorama4.add(infospot15);

infospot17 = new PANOLENS.Infospot();
infospot17.position.copy(new THREE.Vector3(-4694.88, 50.94, 1695.78));
infospot17.addHoverText( '121 Проректор по общим и правовым вопросам');
panorama4.add(infospot17);

infospot22 = new PANOLENS.Infospot();
infospot22.position.copy(new THREE.Vector3(-4619.30, 65.70, 1892.15));
infospot22.addHoverText( '120 Служба по обеспечению управления имущественным комплексом ');
panorama4.add(infospot22);

infospot21 = new PANOLENS.Infospot();
infospot21.position.copy(new THREE.Vector3(338.24, 300, 4978.11));
infospot21.addHoverText( '118 Бухгалтерия. Материальная группа');
panorama5.add(infospot21);

infospot20 = new PANOLENS.Infospot();
infospot20.position.copy(new THREE.Vector3(415.66, 1, 4974.99));
infospot20.addHoverText( '117 Бухгалтерия. Главный бухгалтер');
panorama5.add(infospot20);

infospot19 = new PANOLENS.Infospot();
infospot19.position.copy(new THREE.Vector3(1099.22, 104.18, 4870.52));
infospot19.addHoverText( '116 Бухгалтерия. Рассчётная группа');
panorama5.add(infospot19);

infospot5 = new PANOLENS.Infospot();
infospot5.position.copy(new THREE.Vector3(4952.64, 504.12, 357.04));
infospot5.addHoverText( '115 Институт геодезии и менеджмента. Деканат');
panorama5.add(infospot5);

infospot11 = new PANOLENS.Infospot();
infospot11.position.copy(new THREE.Vector3(-2218.27, 101.82, -4469.19));
infospot11.addHoverText( '114 Отдел патентной и изобретательской работы');
panorama6.add(infospot11);

infospot6 = new PANOLENS.Infospot();
infospot6.position.copy(new THREE.Vector3(4488.83, 1077.42, -1904.02));
infospot6.addHoverText( '112 Отдел метрологии, стандартизации и сертификации');
panorama6.add(infospot6);

infospot7 = new PANOLENS.Infospot();
infospot7.position.copy(new THREE.Vector3(453.28, 95.25, -4972.50));
infospot7.addHoverText( '111 Объединённый профком сотрудников и студентов');
panorama6.add(infospot7);

infospot8 = new PANOLENS.Infospot();
infospot8.position.copy(new THREE.Vector3(-393.99, 66.33, -4976.75));
infospot8.addHoverText( '110 Департамент образоввания. Центр содействия занятости учащейся молодёжи и трудоустройства выпускников');
panorama6.add(infospot8);

infospot9 = new PANOLENS.Infospot();
infospot9.position.copy(new THREE.Vector3(-812.06, -10.36, -4926.36));
infospot9.addHoverText( '109 Группа сопровождения учебного процесса');
panorama5.add(infospot9);

infospot10 = new PANOLENS.Infospot();
infospot10.position.copy(new THREE.Vector3(-1615.28, -95.48, -4724.32));
infospot10.addHoverText( '108 Центр дополнительного образования и маркетинговых коммуникаций ');
panorama5.add(infospot10);

infospot4 = new PANOLENS.Infospot();
infospot4.position.copy(new THREE.Vector3(-4964.56, 299.29, 451.79));
infospot4.addHoverText( '107 Центр дополнительного образования и маркетинговых коммуникаций. Директор');
panorama5.add(infospot4);

infospot12 = new PANOLENS.Infospot();
infospot12.position.copy(new THREE.Vector3(-817.10, 169.15, 4919.25));
infospot12.addHoverText( '106 Приёмная проректоров');
panorama5.add(infospot12);

infospot13 = new PANOLENS.Infospot();
infospot13.position.copy(new THREE.Vector3(-330.16, 126.19, 4977.74));
infospot13.addHoverText( '105');
panorama5.add(infospot13);

infospot18 = new PANOLENS.Infospot();
infospot18.position.copy(new THREE.Vector3(-4267.55, 91.22, 2589.80));
infospot18.addHoverText( '104 Приёмная ректора');
panorama4.add(infospot18);

infospot14 = new PANOLENS.Infospot();
infospot14.position.copy(new THREE.Vector3(-3728.39, -49.92, 3326.90));
infospot14.addHoverText( '102 Юридический отдел');
panorama4.add(infospot14);


infospot3 = new PANOLENS.Infospot();
infospot3.position.copy(new THREE.Vector3(-525.38, -95.73, 4968.37));
infospot3.addHoverText( '101 Отдел кадров обучающихся');
panorama4.add(infospot3);

infospot16 = new PANOLENS.Infospot();
infospot16.position.copy(new THREE.Vector3(-4073.09, 78.60, 2890.14));
infospot16.addHoverText( '103 Отдел кадров сотрудников');
panorama4.add(infospot16);

viewer = new PANOLENS.Viewer({
    autoRotate: true,
    autoRotateSpeed: -0.5,
    output: 'console'
});
viewer.add(panorama1);
viewer.add(panorama2);
viewer.add(panorama3);
viewer.add(panorama4);
viewer.add(panorama5);
viewer.add(panorama6);
viewer.add(panorama7);

panorama1.link(panorama2, new THREE.Vector3(3254.30, -1442.60, -3502.29));  "От центра холла к входной зоне"
panorama1.link(panorama3, new THREE.Vector3(-3080.40, -930.55, 3813.49));   "От центра холла к зоне отдыха (к ёлке)"
panorama1.link(panorama4, new THREE.Vector3(3906.99, -136.20, 3100.97));    "От центра холла вверх по лестнице к переходу между этажами"

panorama2.link(panorama1, new THREE.Vector3(-727.04, -1211.97, 4787.80));   "От входной зоны к центру холла"

panorama3.link(panorama1, new THREE.Vector3(-3412.78, -1130.74, -3463.74)); "От зоны отдыха к центру холла"

panorama4.link(panorama1, new THREE.Vector3(4387.64, -1085.36, -2119.06));  "Вниз по лестнице от перехода между этажами к центру холла"
panorama4.link(panorama5, new THREE.Vector3(-4475.64, -207.55, 2196.47));   "От перехода между этажами к центру первого этажа"

panorama5.link(panorama4, new THREE.Vector3(-8.47, -76.09, 4996.57));       "От центра первого этажа к переходу между этажами"
panorama5.link(panorama6, new THREE.Vector3(88.21, -459.34, -4972.03));     "От центра первого этажа к двери библиотеки"

panorama6.link(panorama5, new THREE.Vector3(-1363.23, -405.90, -4786.41));  "От двери библиотеки к центру первого этажа"
panorama6.link(panorama7, new THREE.Vector3(1805.52, -397.94, 4638.11));    "От двери библиотеки внутрь библиотеку"

panorama7.link(panorama6, new THREE.Vector3(1983.44, -143.09, 4581.00));    "Из библиотеки к двери входа в библиотеку"







