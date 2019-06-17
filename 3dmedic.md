### 3Dmedic

 - Техническое задание [ТЗ](https://mltefive.github.io/docs/%D1%82%D0%B7.html)
 - Открыть рабочий Web прототип - [Demo](http://194.87.102.175/3dmedic/) загрузить файлы Dicom или директорию (много файлов не загружать - зависнет)
 - Предварительно необходимо скачать пример [DICOM файлы](http://194.87.102.175/3dmedic/lukas_3d_dicom.zip), разархивировать их
 - Ковертация в 3D [пример](http://45.11.27.40/2.stl) (рабочий пример, можно открыть 3D-просмотр на платформе Windows 10 )
 - Dicom сервер хранения и обмена данными [Сервер Linux]() (в работе)
 - Основной Сервер-сайт: регистрация, оплата, личный кабинет (в работе)

---

### Комментарии

Рынок анализа Медецинских данных очень обширен.
На сколько я понял - это 3D печать органов.
Поэтому необходимы пояснения как должен применяться инструмент, для какой задачи.

---

### Черновик

![vesalius3d](https://raw.githubusercontent.com/mltefive/docs/master/vesalius3d.png)

## Дано:
срок 2-3 месяца
ТЗ на программное обеспечение в сфере медицины обработки и анализа рентгенограмм

Требования: 
 - навыки работы по созданию,
 - корректировки 3D моделей,
 - формированию stl файлов,
 - определения размеров (линейных и угловых) на изображениях посредством экранной линейки и других инструментов.

удаленная работа - ТЗ.

##
Решение

### Техническое задание

на программное обеспечение
для обработки и анализа медицинских файлов формата обмена данных (DICOM), подготовки 3D модели для печати

#### Требуется

1 Просмотр и обработка файлов DICOM

1.2 формирование 3D модели stl (Desktop) 

1.3 для дальнейшей печати (3D Printer) Зарубежный аналог https://www.embodi3d.com/democratiz3D/

1.4 или просмотра в браузере через технологию WebGL (Threejs, Unity, Blender) или Flash (WEB)

1.5 очистка по плотности и по выделенной площади (Desktop)


Требования к оборудованию:

Как правило существует два типа программного обеспечения: веб-приложение или desktop-приложение.

Так как медицинские файлы данных как правило большого размера,
веб-приложение не всегда способно обработать большой поток информации
- не у каждого пользователя хороший современый компьютер с графическим ускорителем.
А полностью переложить финкционал нагрузки на серверную сторону не представляется возможным.

Поэтому первичная обработка должна производиться desktop-приложением, с помощью оператора (человеком) а именно:

 - импорт DICOM
 
 - очистка от "артифактов" и лишней информации,
 
 - очистка по плотности и по выделенной площади,
 
 - расскраска слоев плотности по цвету,
 
 - экспорт 3D модели
 

И только после получения очищенной 3D модели её можно

 - распечатывать
 
 - производить анализ (геометрия и свойства) и просмотр модели в веб-браузере
 
 
На сегоднишний день DICOM является стандартом для обмена различными медицинскими данными, включая КТ - компьютерную томографию и радиографию

Полный перечень форматов представлен ниже

Modality
A DICOM data object consists of a number of attributes, including items such as name, ID, etc., and also one special attribute containing the image pixel data.
One of attributes - DICOM modality, that represents DICOM file type. In addition, each attribute also has a Value Multiplicity to indicate the number of data elements contained in the attribute.

DICOM Modality

Value	Description
AR	Autorefraction	 
AS	Angioscopy	Retired
ASMT	Content Assessment Results	 
AU	Audio	 
BDUS	Bone Densitometry (ultrasound)	 
BI	Biomagnetic imaging	 
BMD	Bone Densitometry (X-Ray)	 
CD	Color flow Doppler	Retired
CF	Cinefluorography	Retired
CP	Colposcopy	Retired
CR	Computed Radiography	 
CS	Cystoscopy	Retired
CT	Computed Tomography	 
DD	Duplex Doppler	Retired
DF	Digital fluoroscopy	Retired
DG	Diaphanography	 
DM	Digital microscopy	Retired
DOC	Document
DS	Digital Subtraction Angiography	Retired
DX	Digital Radiography	 
EC	Echocardiography	Retired
ECG	Electrocardiography	 
EPS	Cardiac Electrophysiology	 
ES	Endoscopy	 
FA	Fluorescein angiography	Retired
FID	Fiducials	 
FS	Fundoscopy	Retired
GM	General Microscopy	 
HC	Hard Copy	 
HD	Hemodynamic Waveform	 
IO	Intra-Oral Radiography	 
IOL	Intraocular Lens Data	 
IVOCT	Intravascular Optical Coherence Tomography	 
IVUS	Intravascular Ultrasound	 
KER	Keratometry	 
KO	Key Object Selection	 
LEN	Lensometry	 
LP	Laparoscopy	Retired
LS	Laser surface scan	 
MA	Magnetic resonance angiography	Retired
MG	Mammography	 
MR	Magnetic Resonance	 
MS	Magnetic resonance spectroscopy	Retired
NM	Nuclear Medicine	 
OAM	Ophthalmic Axial Measurements	
OCT	Optical Coherence Tomography (non-Ophthalmic)	 
OP	Ophthalmic Photography	 
OPM	Ophthalmic Mapping	 
OPR	Ophthalmic Refraction	Retired
OPT	Ophthalmic Tomography	 
OPV	Ophthalmic Visual Field	 
OSS	Optical Surface Scan	 
OT	Other	 
PLAN	Plan	 
PR	Presentation State	 
PT	Positron emission tomography (PET)	 
PX	Panoramic X-Ray	 
REG	Registration	 
RESP	Respiratory Waveform	 
RF	Radio Fluoroscopy	 
RG	Radiographic imaging (conventional film/screen)	 
RTDOSE	Radiotherapy Dose	 
RTIMAGE	Radiotherapy Image	 
RTPLAN	Radiotherapy Plan	 
RTRECORD	RT Treatment Record	 
RTSTRUCT	Radiotherapy Structure Set	 
RWV	Real World Value Map	 
SEG	Segmentation	 
SM	Slide Microscopy	 
SMR	Stereometric Relationship	 
SR	SR Document	 
SRF	Subjective Refraction	 
ST	Single-photon emission computed tomography (SPECT)	Retired
STAIN	Automated Slide Stainer	 
TG	Thermography	 
US	Ultrasound	 
VA	Visual Acuity	 
VF	Videofluorography	Retired
XA	X-Ray Angiography	 
XC	External-camera Photography	 

## ПО первичного просмотра DICOM

### Каждое направление медицины имеет свою специфику и решает свои задачи.

Стоматология
![Стоматология](https://implastation.com/fbimage/impl.png)

Просмотр органов
![2](https://images.idoimaging.com/images/116/osirix_7.jpg)

Анализ скелета
![3](https://o.aolcdn.com/images/dims?thumbnail=980%2C653&quality=80&image_uri=https%3A%2F%2Fs.blogcdn.com%2Fslideshows%2Fimages%2Fslides%2F718%2F463%2F7%2FS7184637%2Fslug%2Fl%2F13-full-body-3d-volume-rendering-4-1.jpg&client=amp-blogside-v2&signature=4282d0a382f4d3b20fccdd64be6e388ca003d24e)

### Комментарии:

Поэтому необходимы пояснения как должен применяться инструмент, для какой задачи.

### Полезные ссылки https://github.com/topics/dicom

 - docs:

 [DICOM Standard Browser](https://dicom.innolitics.com/ciods/ct-image/clinical-trial-subject)

---

 - webviewers:
 
 https://github.com/ivmartel/dwv
 
 https://github.com/cornerstonejs/cornerstone
 
 https://github.com/FNNDSC/ami
 
 http://jaanga.github.io/brainofrichard/
 
 https://github.com/OHIF/Viewers

---

 - viewers:

 https://github.com/pixmeo/osirix

 https://github.com/nroduit/Weasis
 
 https://github.com/starviewer-medical/starviewer
 
---
 
 - extract-images:

dcmtk/bionic,now 3.6.2-3build3 amd64 [installed,automatic]
  OFFIS DICOM toolkit command line utilities

https://support.dcmtk.org/docs/dcmj2pnm.html

http://xrays.uniito.ru/katieghorii/dokumientatsiia/stati/dicom-landshaft-vybor-pravilnogo-sdk

 https://github.com/danishm/mritopng

 https://github.com/suyashkumar/dicom
 
---

 - 3d transform

 https://github.com/dave3d/dicom2stl

 https://github.com/innolitics/dicom-numpy

---

 - DICOM parsers
 
 https://github.com/MITK/MITK
 
 https://github.com/dicom/ruby-dicom
 
 https://github.com/suyashkumar/dicom
  
 https://github.com/dcmjs-org/dcmjs
 
