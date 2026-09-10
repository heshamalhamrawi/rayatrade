const fs = require('fs');

const rawData = `1	راية ميجا ستور جسر السويس	Raya Mega Store Gesr Suez	Mega Gesr Suez	New	Mega	Cairo	Al Zayton	43th St. Al-Laith Street - Gesr Al-Suez - Al-Zaytoun	43 شارع الليث - جسر السويس- الزيتون	https://goo.gl/maps/jh8zJSFNbvF6YvGN7
2	راية كايرو فيستفال سيتي مول	Raya Cairo Festival City Mall	Raya CFC	New	Raya	Cairo	New Cairo	Raya Cairo Festival Al Wahda (2-551), third floor, next to El-Ezaby Pharmacy, in front of Carrefour	راية  كايرو فيستفال  وحده (2-551)  الدور الثالث بجانب صيدليه العزبي امام كارفور	https://maps.app.goo.gl/cMLoZZDtteb2DaJ68
3	راية المعادي	Raya Maadi 	Raya El Gazayer	New	Raya	Cairo	Maadi	1 Algeria Square - New Maadi	1 ميدان الجزائر - المعادي الجديده	https://goo.gl/maps/9tp2ySKKBjpExYux8
4	راية ميجا ستور مكرم عبيد	Raya Mega Store Makram Ebeid	Mega Makram	New	Mega	Cairo	Nasr City	1th St. Lotfy, Makram Ebeid Extention, Nasr City	1 شارع عبد الحميد لطفي امتداد مكرم عبيد - مدينه نصر	https://goo.gl/maps/CfdHE3mhJWvxvTBp8
5	 راية ميجا ستور حلوان	Raya Mega Store Helwan	Mega Helwan	New	Mega	Cairo	Helwan	39 B Tanzim - Mohamed Mustafa Al-Maraghi Street	39  ب تنظيم- شارع محمد مصطفى المراغي -ناصيه شارع راغب امام سوبر ماركت المحمل-	https://goo.gl/maps/GyoSEFfWLonwojg69
6	راية سيتي سنتر المعادي	Raya City Center Maadi	Raya CityCenter Maadi	New	Raya	Cairo	Maadi	Carrefour City Center Maadi	كارفور سيتي سنتر المعادي	https://maps.app.goo.gl/SK2kiL3PcmmnXVsz6
7	راية ميجا ستور حدائق القبة	Raya Mega Store Hadayek ElKoba	Mega Hadayek	New	Mega	Cairo	Hadayek AlQubbah	116th St. Masr We Al Sodan, Hadaeq Al Qubbah, Cairo	116 مصر و السودان، حدائق القبة، قسم حدائق القبة، محافظة القاهرة	https://goo.gl/maps/Zz6SVPh1kpfey3jVA
8	راية سيتي ستارز	Raya City Stars 	Raya City Stars	New	Raya	Cairo	Nasr City	City Stars Mall, Ground floor, Nasr City	سيتي ستارز مول - الدور الارضي - مدينه نصر	https://maps.app.goo.gl/3visYpVDn7JXkYgQ9
10	راية كونكورد بلازا - التجمع	Raya Concord Plaza	Raya Concorde Plaza	New	Raya	Cairo	New Cairo	Concorde Plaza Mall - North 90th Street - Fifth Settlement	كونكورد بلازا مول - شارع التسعين الشمالي - التجمع الخامس	https://maps.app.goo.gl/RHbzJpntg15D8n1RA
11	راية الرحاب	Raya ElRehab	Raya ElRehab	New	Raya	Cairo	New Cairo	Gate Way Mall Stores #G07 & #G08- New Cairo	 مول جيت واي، محل رقم G07 و G08 - الرحاب - القاهرة الجديدة	https://maps.app.goo.gl/6T1zzkVNoqVb3An1A
12	راية ميجا ستور التجمع الخامس	Raya Mega Store New Cairo 	Mega Tagmoa	New	Mega	Cairo	New Cairo	45 Fifth Settlement Service Center in front of Al Salam International Hospital - New Cairo	٤٥ مركز خدمات التجمع الخامس امام مستشفى السلام الدولي - القاهرة الجديدة	https://goo.gl/maps/XRJuxYtahsS1W93y5
13	راية رشدي	Raya Roushdy	Raya Roushdy	Old	Raya	Alexandria	Roushdy	28th St. Al-Moaskar Al-Romani Street - Roushdy	28 شارع المعسكر الروماني - رشدي	https://goo.gl/maps/71WjsdEy51BJic1H7
14	راية ميجا ستور دمنهور	Raya Mega Store Damanhour	Mega Damanhur	New	Mega	Delta	 Damanhour	Al Matreed Al Edary Bldg., Ahmed Orabi St., El-Miri El-Buhaira land	برج مطاريد الإداري , ش أحمد عرابى - أرض الميرى - دمنهور - البحيرة	https://goo.gl/maps/s8HFHMoZmwPv16ZQ6
15	راية ميجا ستور الإسماعيلية	Raya Mega Store Ismailia	Mega Ismailia	New	Mega	Canal	Ismailia	11 Shebin El-Kom and Sinai Street - Shebin El-Kom District - Ismailia Governorate	11 شارع شبين الكوم وسيناء - حي شبين الكوم - محافظة الإسماعيلية .	https://goo.gl/maps/pxvymoShqdXPSCMx5
16	راية مصدق	Raya Mosadak	Raya 44Musadak	New	Raya	Giza	Dokki	44th St. Mossadak, Ad Doqi, Dokki, Giza	44 شارع مصدق - الدقي- المهندسين	https://goo.gl/maps/zr7pcjvhv8QevDms6
17	راية هايبرا وان	Raya Hyper one	Raya Hyper One	New	Raya	Giza	October	Hyper One - Sheikh Zayed - 6th of October	هايبر وان - الشيخ زايد - 6 أكتوبر	https://maps.app.goo.gl/chKv9HGXAHmSh4W87
18	 راية ميجا ستور مول العرب	Raya Mega Store Mall of Arabia	Mega ArabMall	New	Mega	Giza	October	Mall of Arabia - Gate 23 - Store No. G-019	مول العرب - بوابه 23  - محل رقم G-019	https://maps.app.goo.gl/4KmRoVLzxB3wLRm46
19	 راية ميجا ستور الغردقة	New Mega Hurghada	Mega Hurghada	New	Mega	Upper Egypt	Hurghada	Al-Nasr Street in front of Go Bus - Dahar, Hurghada - Red Sea Governorate	شارع النصر أمام جو باص - الدهار، الغردقة - محافظة البحر الأحمر	https://maps.app.goo.gl/AMc5EnUWNmwbuJB66
20	راية ميجا ستور الأقصر 	Raya Mega Store Luxor	Mega Luxor 	New 	Mega	Upper Egypt	Luxor	8 -Television Street - Luxor section	8  شارع التليفزيون - قسم الاقصر	https://goo.gl/maps/vJWUXCQzvm6gkPg28
21	راية ستيلا مارينا الساحل الشمالي	Raya Stella Marina	Raya Stella Marina	Old	Raya	Alexandria	Matrouh - Alalamen	Stella Marina Resort El Alamein City	منتجع ستيلا مارينا مدينة العلمين	https://goo.gl/maps/isgEjYyUKHP5TDUs5
22	راية سيتي سنتر الاسكندرية	Raya City Center Alex	Raya Alex city center	New	Raya	Alexandria	Alexandria	Carrefour City Center - Phase Two - Alexandria	كارفور سيتي سنتر - المرحله الثانيه- الاسكندريه	https://maps.app.goo.gl/SUKvAArLBnEiWNox9
23	مول سكاي كورت الساحل الشمالي	Raya Sky Court North Coast	Raya Sky Court Mall	New	Mega	Alexandria	Matrouh	Marsa Matrouh - Alex Road, Qesm El Dabaa, in front of Amwaj Village, North Coast	مرسى مطروح - طريق إسكندرية قسم الضبعة امام قرية أمواج الساحل الشمالي	https://goo.gl/maps/vsmLntGL2fJEfcoa8
24	راية محور جيهان السادات	Raya Gihan El Sadat Axis	Raya Jehan ElSadat	New	Raya	Cairo	Mansheyet Nasser	Chillout Station - Jihan Sadat Corridor, Mansheyt Naser	 بنزينة شيل أوت - محور جيهان السادات -  منشية ناصر	https://maps.app.goo.gl/Juxi9GGzQMszjByz7
25	راية الحجاز	Raya El Hegaz	Raya Hegaz	Old	Raya	Cairo	Masr elgededa	50th St. El Hegaz Street, next to Mobil Gas Station - Heliopolis	50 شارع الحجاز بجانب بنزينه موبيل- مصر الجديده	https://goo.gl/maps/DBCQaNRC1Gwkz5Y9A
26	راية عمارات العبور	Raya Obour Buildings	Raya 12Obour	Old	Raya	Cairo	Masr elgededa	12 Obour Building، 7 El-Obour Parking Rd	12 عمارات العبور - شارع صلاح سالم - مصر الجديده	https://maps.app.goo.gl/7UMJrvJ1zJRxZc5CA
28	راية ميجا ستور السيدة زينب	Raya Mega Store Sayeda Zaynab	Mega Sayeda Zeinab	Old	Mega	Cairo	Sayeda Zainb	El-Sayeda Zainab, El Sayeda Zeinab, Cairo	142 شارع السد - السيده زينب	https://goo.gl/maps/aUG2KVwrgAAvXyU97
29	 راية ميجا ستور شبرا	Raya Mega Store Shubra	Mega Shoubra	New	Mega	Cairo	Shoubra	Al-Shamashergy, Qism Shubra, Cairo	57  شارع شبرا بجوار بنك مصر- شبرا 	https://maps.app.goo.gl/8qouK1hSnoBmAjT29
30	 راية ميجا ستور شبرا الخيمة	Raya Mega Store Shubra El Khema	Mega Shubra Al Khaima	New	Mega	Cairo	Shubra AlKhaima	15th St. Next to Mohamed Abdo Mosque, next to the National Bank of Egypt, Shubra El-Kheima	173 شارع 15 مايو امام البنك الاهلي- شبرا الخيمه	https://goo.gl/maps/sDnV5BBdHPFTnpvX6
31	راية ميجا ستور محرم بك 	Raya Mega Store Moharam 	Mega Moharam 	New	Mega	Alexandria	Alexandria	المحل التجاري الكائن ب، 85  شارع محرم بك - ناصية باولينو 	المحل التجاري الكائن ب، 85 Moharram Bek, Emberouz WA Moharram Beik, Moharam Bek, Alexandria Governorate 5413414	https://maps.app.goo.gl/HMPc3tiCjxHReaa77
32	 راية ميجا ستور لوران	Raya Mega store Louran	Mega louran	New	Mega	Alexandria	Louran	 696 Horya Road - Abu Qir Street - at the corner of Shaarawy Street - Loran	 696 طريق الحريه لوران - شارع ابو قير-عند ناصيه شارع شعراوي- لوران 	https://maps.app.goo.gl/xB9bSP1aEV6zLusA6
33	راية المنشية 	Raya El Manshya	Raya Mansheya	New	Raya	Alexandria	Mansheya	4th St. Salah Salem Street - Al-Mansheya	4 شارع صلاح سالم امام جراج الاتحاد الاشتراكي- المنشيه	https://maps.app.goo.gl/6ZLkG2CWvYqyaFWx9
34	ميجا العجمي	Mega al-Ajami	Mega El Agamy	New	Mega	Alexandria	Al-Ajami	Al-Ajami, Alexandria-Matrouh Road, 17th Km, next to Al-Hadid we Al-Salb Street	العجمي، طريق اسكندرية مطروح، الكيلو 17 ، بجوار شارع الحديد والصلب	https://maps.app.goo.gl/9dbi59qLrUBZfMvt5
35	راية ميجا ستور الزقازيق	Raya Mega Store Zagazig	Mega Zagazig	New	Mega	Delta	Zagazig	2 Atfi Street with the intersection of Al-Qawmia Street, Zagazig - Sharkia	٢ شارع عطفي كامل مع شارع القومية- التقسيم الأول للمهنيين- ميدان القومية- الزقازيق- الشرقية	https://goo.gl/maps/U6rsbrKSFN9wvXTs5
36	راية المنصورة	Raya Mansoura	Raya Mansoura	Old	Raya	Delta	Mansoura	22th St. Al-Gomhoria Street, Al-Mashaya Al-Nawras Tower	22 شارع الجمهوريه عالمشايه برج النورس امام بوابه الجامعه الرئيسيه	https://maps.app.goo.gl/o5WaBeqFUogSbiNA8
37	 راية ميجا ستور المنصورة	 Raya Mega Store Mansoura	Mega Mansoura	New	Mega	Delta	Mansoura	Mansoura, Port Said Street - Hala Commercial Tower - in front of the Sharia Association Mosque	المنصورة شارع بورسعيد - برج هلا التجاري - أمام الجمعية الشرعية	https://goo.gl/maps/ifd4CtcXC3gE5g439
38	 راية ميجا ستور الحصري	Raya Mega Store El Hossary	Mega Hossary	Old	Mega	Giza	October	Central Axis, next to El Hosary Mosque - 6th of October	المحور المركزي بجوار جامع الحصري- 6 اكتوبر	https://goo.gl/maps/Uspr5m6MkwVAVWBW6
39	راية كايرو مول الهرم	Raya Cairo Mall Haram	Raya Elharam	Old	Raya	Giza	Haram	269th St. Haram Street - Cairo Mall - Giza	269 شارع الهرم - كايرو مول - الهرم	https://goo.gl/maps/Y33Pq5Q372Eb2rJg7
40	راية الهرم 2	Raya Haram 2	Raya Haram2	Old	Raya	Giza	Haram	166th St. Haram Street - Al-Arish Street station - Haram	166 شارع الهرم - محطه شارع العريش- الهرم	https://goo.gl/maps/Lvi37v9LsEwPeBjh6
41	راية مول مصر	Raya Mall of Egypt	Raya Mall OF Egypt	New	Raya	Giza	October	Mall of Egypt, first floor, in front of Carrefour	مول مصر الدور الاول امام كارفور	https://maps.app.goo.gl/VRHDb622QYqi6k73A
42	راية ميجا ستور السودان	Raya Mega Store Sudan 	Mega Sudan	Old	Mega	Giza	Mohandessen	161th St. Sudan Street - Aden Street in front of Salam Shopping Center - Mohandeseen	161 شارع السودان - على ناصيه شارع عدن امام السلام شوبينج سنتر- المهندسين	https://maps.app.goo.gl/xXLh7WZNfpZ9PY5V7
43	 راية ميجا ستور فيصل	Raya Mega Store Faisal St	Mega Faisal	Old	Mega	Giza	Faisal	114th St. King Faisal St, Kafr Tohormos, Bulaq, Giza	411 شارع الملك فيصل - محطه التميمي - ناصيه شارع ابن بطوطه- فيصل	https://goo.gl/maps/YQjji4KkpKH2maQG8
44	 راية ميجا ستور فيصل 2	Raya Mega Store Faisal 2 St	Mega Faisal 2	New	Mega	Giza	Faisal	325 King Faisal Street, corner of Hassan Muhammad - Faisal	325 شارع الملك فيصل ناصيه حسن محمد - فيصل	https://goo.gl/maps/J9SS1m6KRARsxXZ38
45	 راية ميجا ستور أسيوط	Raya Mega Store Assiut 	Mega Assuit	New	Mega	Upper Egypt	 Assiut	14 B El Gomhoureya Street, Al Borg laboratories	14 ب شارع الجمهوريه امام معامل البرج وألفا بجوار اشاره المساحه	https://goo.gl/maps/twXLwchMht5N4vsr9
46	راية طنطا 2 	Raya Tanta 2	Raya Tanta 2	New	Mega	Delta	Tanta	Al-Mudireya Street - Tanta - Gharbia Governorate., Tanta	شارع المديرية - طنطا - الغربية 	https://share.google/tg3xldpasBfX5RFDj
47	 راية  ميجا ستور أسوان 	Raya Mega Store Aswan 	Mega Aswan 	New	Mega	Upper Egypt	Aswan	101 كورنيش النيل، شياخة ثالثة، اول اسوان، محافظة أسوان 81511	101 كورنيش النيل، شياخة ثالثة، اول اسوان، محافظة أسوان 81511	New Mega Store Aswan - راية ميجا ستور أسوان - خرائط Google
48	راية ميجا سوهاج	Raya Mega sohag	Mega sohag	New	Mega	Upper Egypt	Sohag	المحل رقم 1 بالدور الارضى, شارع النصر, Awlad Naseer, Sohag 2, Sohag Governorate 82511	المحل رقم 1 بالدور الارضى, شارع النصر, Awlad Naseer, Sohag 2, Sohag Governorate 82511	https://share.google/aWEvgTQZf7n8bHlH7
	RAYA HQ MAADI	RAYA HQ MAADI	RAYA New HQ					Maadi as Sarayat Al Gharbeyah, Tura, Cairo Governorate 		https://maps.app.goo.gl/aZG7Lw3ngFb6po1z9`;

let htmlOut = `<!-- SECTION: BRANCHES DIRECTORY -->
<div class="section-block" data-category="branches_directory" id="sec-branches-directory" style="display:none;">
    <div class="section-header" onclick="toggleSection(this)">
        <span class="section-icon">🏢</span>
        عناوين فروع راية
        <span class="section-toggle">▼</span>
    </div>
    <div class="section-body">
        <style>
            #sec-branches-directory .search-container {
                background: #ffffff; padding: 16px; border-radius: 12px;
                box-shadow: 0 4px 10px rgba(0,0,0,0.05); margin-bottom: 25px;
                display: flex; align-items: center; gap: 12px; border: 1px solid #e2e8f0;
            }
            #sec-branches-directory .search-input {
                flex: 1; border: none; outline: none; font-size: 1.05rem; background: transparent; font-family: inherit;
            }
            #sec-branches-directory .branches-grid {
                display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px;
            }
            #sec-branches-directory .branch-card {
                background: #ffffff; border-radius: 12px; padding: 18px; border: 1px solid #e2e8f0;
                box-shadow: 0 2px 5px rgba(0,0,0,0.02); display: flex; flex-direction: column; position: relative; overflow: hidden;
            }
            #sec-branches-directory .branch-card::before {
                content: ''; position: absolute; top: 0; right: 0; width: 4px; height: 100%; background: #0056b3;
            }
            #sec-branches-directory .branch-header { margin-bottom: 12px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; }
            #sec-branches-directory .branch-title { font-size: 1.15rem; font-weight: 700; color: #0056b3; margin-bottom: 4px; }
            #sec-branches-directory .branch-region { font-size: 0.8rem; background: #f8f9fa; color: #718096; padding: 3px 8px; border-radius: 12px; font-weight: 600; display: inline-block; }
            #sec-branches-directory .branch-details { font-size: 0.9rem; margin-bottom: 16px; color: #2d3748; flex: 1; }
            #sec-branches-directory .branch-actions { display: flex; gap: 8px; margin-top: auto; }
            #sec-branches-directory .btn { padding: 8px; border: none; border-radius: 6px; font-size: 0.9rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 5px; font-family: inherit; }
            #sec-branches-directory .btn-copy { flex: 1; background-color: #25D366; color: white; }
            #sec-branches-directory .btn-map { flex: 0 0 auto; width: 40px; background-color: #f8f9fa; border: 1px solid #e2e8f0; color: #2d3748; text-decoration: none; }
            #sec-branches-directory .hidden-card { display: none !important; }
        </style>

        <div style="background:#f0f4ff; border:1px solid #ccd6f5; border-radius:12px; padding:16px; margin-bottom:20px; text-align:center;">
            <h3 style="color:#003399; margin-bottom:10px; font-weight:bold; font-size:20px;">🏢 عناوين فروع راية</h3>
            <p style="margin:0; font-size:15px; color:#4a5a8a; line-height:1.7;">ابحث عن الفرع، انسخ العنوان بضغطة زر، وشاركه مع العميل عبر واتساب بسهولة.</p>
        </div>

        <div class="search-container">
            <span>🔍</span>
            <input type="text" id="branchesSearchInput" class="search-input" placeholder="ابحث باسم الفرع، المنطقة، أو المحافظة..." onkeyup="filterBranchesStatic()">
        </div>

        <div class="branches-grid" id="branchesGrid">`;

const lines = rawData.trim().split('\n');
lines.forEach(line => {
    const cols = line.split('\t');
    if (cols.length >= 10) {
        let name = cols[1].trim();
        let region = cols[6].trim() || 'Headquarters';
        let area = cols[7].trim() || '';
        let address = cols[9].trim() || cols[8].trim();
        let location = cols[10].trim();
        if(!location.startsWith('http')) location = 'https://maps.google.com/?q=' + encodeURIComponent(address);
        
        const copyText = "📍 *اسم الفرع:* " + name + "\n" + "🏢 *العنوان:* " + address + "\n" + "🗺️ *اللوكيشن:* " + location;
        
        htmlOut += `
            <div class="branch-card" data-search="${name} ${address} ${region} ${area}">
                <div class="branch-header">
                    <div class="branch-title">${name}</div>
                    <div class="branch-region">${region} ${area ? '- ' + area : ''}</div>
                </div>
                <div class="branch-details">${address}</div>
                <div class="branch-actions">
                    <button class="btn btn-copy" onclick="copyBranchStatic(this, '${encodeURIComponent(copyText)}')">نسخ للواتساب</button>
                    <a href="${location}" target="_blank" class="btn btn-map" title="خريطة">📍</a>
                </div>
            </div>`;
    }
});

htmlOut += `
        </div>
        <script>
            function filterBranchesStatic() {
                const term = document.getElementById('branchesSearchInput').value.toLowerCase();
                const cards = document.querySelectorAll('#sec-branches-directory .branch-card');
                cards.forEach(card => {
                    const searchable = card.getAttribute('data-search').toLowerCase();
                    if(searchable.includes(term)) card.classList.remove('hidden-card');
                    else card.classList.add('hidden-card');
                });
            }
            function copyBranchStatic(btn, textEnc) {
                const text = decodeURIComponent(textEnc);
                navigator.clipboard.writeText(text).then(() => {
                    const orig = btn.innerHTML;
                    btn.innerHTML = '✔ تم النسخ';
                    btn.style.backgroundColor = '#10B981';
                    setTimeout(() => {
                        btn.innerHTML = orig;
                        btn.style.backgroundColor = '#25D366';
                    }, 2000);
                });
            }
        </script>
    </div>
</div>
`;

let indexHtml = fs.readFileSync('index.html', 'utf8');
const targetMarker = '<div class="manual-content" id="manualContent">';
const targetIdx = indexHtml.indexOf(targetMarker);

if (targetIdx !== -1) {
    const insertPos = targetIdx + targetMarker.length;
    const newHtml = indexHtml.substring(0, insertPos) + '\n\n' + htmlOut + '\n\n' + indexHtml.substring(insertPos);
    fs.writeFileSync('index.html', newHtml);
    console.log("Successfully injected branches at top of manualContent!");
} else {
    console.error("Could not find section markers");
}
