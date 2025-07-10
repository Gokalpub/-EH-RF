// svg-turkiye-haritasi.js
/*! SVG Türkiye Haritası | MIT Lisans | dnomak.com */

function svgturkiyeharitasi() {
  const element = document.querySelector('#svg-turkiye-haritasi');
  const colorPicker = document.getElementById('colorPicker');
  const resetColorsBtn = document.getElementById('resetColors');
  const kingNameInput = document.getElementById('kingNameInput');
  const defaultCityFillColor = '#222';

  let selectedColor = colorPicker ? colorPicker.value : defaultCityFillColor;
  let currentKing = "";

  const kingInfoDisplay = document.getElementById('kingInfo');
  const ilIsimleriContainer = document.querySelector('.il-isimleri');

  const istanbulAsyaGroup = element.querySelector('#istanbul-asya');
  const istanbulAvrupaGroup = element.querySelector('#istanbul-avrupa');
  let combinedIstanbulBBox = null;

  if (istanbulAsyaGroup && istanbulAvrupaGroup) {
    const bboxAsya = istanbulAsyaGroup.getBBox();
    const bboxAvrupa = istanbulAvrupaGroup.getBBox();

    const combinedMinX = Math.min(bboxAsya.x, bboxAvrupa.x);
    const combinedMinY = Math.min(bboxAsya.y, bboxAvrupa.y);
    const combinedMaxX = Math.max(bboxAsya.x + bboxAsya.width, bboxAvrupa.x + bboxAvrupa.width);
    const combinedMaxY = Math.max(bboxAsya.y + bboxAsya.height, bboxAvrupa.y + bboxAvrupa.height);

    combinedIstanbulBBox = {
      x: combinedMinX,
      y: combinedMinY,
      width: combinedMaxX - combinedMinX,
      height: combinedMaxY - combinedMinY
    };
  }

  if (element) {
    element.removeEventListener('mouseover', function(){});
    element.removeEventListener('mousemove', function(){});
    element.removeEventListener('mouseout', function(){});
  }

  if (colorPicker) {
    colorPicker.addEventListener('input', (event) => {
      selectedColor = event.target.value;
    });
  }

  function updateCityNameDisplay(group) {
    const cityId = group.getAttribute('id');
    
    if (cityId === 'guney-kibris' || cityId === 'kuzey-kibris') {
      let nameDiv = ilIsimleriContainer.querySelector(`div[data-city-id="${cityId}"]`);
      if (nameDiv) {
        ilIsimleriContainer.removeChild(nameDiv);
      }
      return; 
    }

    let cityName = group.getAttribute('data-iladi');
    let nameDiv = ilIsimleriContainer.querySelector(`div[data-city-id="${cityId}"]`);

    let offsetX = 0;
    let offsetY = 0;
    let rotationAngle = 0; // Default no rotation

    const baseOffsetY = -100;

    switch (cityId) {
        case 'istanbul-asya':
            offsetY = 25; // Adjusted for Istanbul (top-left)
            offsetX = -5; // Adjusted for Istanbul (top-left)
            rotationAngle = 5; // Slight rotation to the right
            break;
        case 'konya':
            offsetX = -20;
            break;
        case 'trabzon':
            offsetY = 20;
            break;
        case 'rize':
            offsetY = 15;
            break;
        case 'kars':
            offsetY = 20;
            break;
        case 'igdir':
            offsetY = 20;
            break;
        case 'van':
            offsetY = 20;
            break;
        case 'diyarbakir':
            offsetY = 20;
            break;
        case 'mardin':
            offsetY = 15; // Slightly up
            break;
        case 'sirnak':
            offsetY = 10; // Slightly down
            break;
        case 'mersin':
            offsetY = 20;
            break;
        case 'hatay':
            offsetY = 20;
            break;
        case 'malatya':
            offsetX = -20;
            break;
        case 'bilecik':
            offsetY = 5;
            offsetX = -10;
            break;
        case 'bursa':
            offsetY = 15;
            break;
        case 'aydin':
            offsetY = 20;
            break;
        case 'kirklareli':
            offsetY = 20;
            break;
        case 'zonguldak':
        case 'karabuk':
            offsetY = 20;
            break;
        case 'bartin':
            offsetY = 15;
            break;
        case 'sinop':
            offsetY = 20;
            break;
        case 'samsun':
            offsetY = 20;
            break;
        case 'ordu':
            offsetY = 5;
            break;
        case 'usak':
            offsetY = 10;
            break;
        case 'antalya':
            offsetY = -5;
            break;
        case 'gaziantep':
            offsetY = 20;
            break;
        case 'kilis':
            offsetY = 20;
            break;
        case 'sanliurfa':
            offsetY = 20;
            break;
        case 'elazig':
            offsetY = 35; // Slightly more down
            break;
        case 'bitlis':
            offsetX = -20;
            offsetY = 20;
            break;
        case 'siirt':
            offsetY = 20;
            offsetX = -5; // Slightly left
            break;
        case 'mus':
            offsetX = -5;
            offsetY = 15;
            break;
        case 'gumushane':
            offsetX = -10;
            offsetY = 10;
            break;
        case 'bayburt':
            offsetY = 20;
            break;
        case 'ardahan':
            offsetY = 15;
            offsetX = -5;
            break;
        case 'amasya':
            offsetY = 5;
            break;
        case 'isparta':
            offsetY = 20;
            break;
        case 'izmir':
            offsetY = 40; // Slightly down
            break;
        case 'adiyaman':
            offsetY = 5;
            break;
        case 'corum':
            offsetX = -15;
            offsetY = 20;
            break;
        case 'tokat':
            offsetY = 10;
            break;
        case 'yalova':
            offsetY = 15;
            break;
        case 'kocaeli':
            offsetY = 15;
            break;
        case 'duzce':
            offsetX = -10;
            offsetY = 10;
            break;
        case 'bolu':
            offsetY = 20;
            break;
        case 'manisa':
            offsetY = 5;
            break;
        case 'erzurum':
            offsetY = 10; // Slightly down
            break;
        case 'osmaniye':
            offsetY = 30;
            break;
        case 'cankiri':
            offsetY = 5;
            break;
        case 'balikesir':
            offsetY = 30;
            break;
        case 'canakkale':
            offsetY = 25; // Slightly down
            break;
        case 'aksaray':
            offsetY = 20;
            break;
        case 'nevsehir':
            offsetY = 20;
            break;
        case 'tunceli':
            offsetY = 20; // Slightly top-left
            offsetX = -5; // Slightly top-left
            break;
        case 'adana':
            offsetY = 25;
            offsetX = -5; // Slightly left
            break;
        case 'tekirdag':
            offsetY = 15; // Slightly more up
            break;
        case 'kutahya':
            offsetY = 25; // Slightly down
            break;
        case 'eskisehir':
            offsetY = 25; // Slightly down
            break;
        case 'bingol':
            offsetY = 25; // Slightly down
            break;
        case 'kirsehir':
            offsetY = 25; // Slightly down
            break;
        case 'burdur':
            offsetY = 10; // Slightly down
            break;
        case 'kastamonu':
            offsetY = 25; // Slightly down
            break;
        case 'agri':
            offsetX = -5; // Slightly left
            break;
    }

    if (cityName && cityName.trim() !== "") {
      let bbox;
      if (cityId === 'istanbul-asya' && istanbulAvrupaGroup && combinedIstanbulBBox) {
          bbox = combinedIstanbulBBox;
          if(group.getAttribute('data-iladi-original') === 'İstanbul (Asya)') {
              cityName = 'İstanbul';
          }
          offsetY += 0;
      } else if (cityId === 'istanbul-avrupa') {
          if (nameDiv) {
              nameDiv.style.display = 'none';
          }
          return;
      } else {
          bbox = group.getBBox();
      }
      
      const ctm = element.getScreenCTM();
      if (ctm && bbox) {
        const centerX = bbox.x + bbox.width / 2 + offsetX;
        const centerY = bbox.y + bbox.height / 2 + offsetY + baseOffsetY;

        const transformedX = ctm.a * centerX + ctm.e;
        const transformedY = ctm.d * centerY + ctm.f;

        if (!nameDiv) {
          nameDiv = document.createElement('div');
          nameDiv.classList.add('city-name');
          nameDiv.setAttribute('data-city-id', cityId);
          ilIsimleriContainer.appendChild(nameDiv);
        }

        nameDiv.textContent = cityName;
        nameDiv.style.position = 'absolute';
        nameDiv.style.display = 'block';

        // Dinamik font boyutu ayarı - şekle uygun boyutlandırma
        let fontSize = 9; // Varsayılan en küçük boyut
        const bboxArea = bbox.width * bbox.height; // Alanı hesapla
        
        if (cityId === 'istanbul-asya' && combinedIstanbulBBox) {
            fontSize = 16; // Slightly increased font size for Istanbul
        } else if (bboxArea > 35000) { // Çok büyük şehirler (örn: Konya, Sivas)
            fontSize = 20;
        } else if (bboxArea > 20000) { // Büyük şehirler
            fontSize = 17;
        } else if (bboxArea > 10000) { // Orta büyüklükteki şehirler
            fontSize = 14;
        } else if (bboxArea > 4000) { // Küçük şehirler
            fontSize = 12;
        } else if (bboxArea > 1500) { // Çok küçük şehirler
            fontSize = 10;
        } else { // En küçük şehirler
            fontSize = 9;
        }
        
        nameDiv.style.fontSize = `${fontSize}px`;

        requestAnimationFrame(() => {
            nameDiv.style.left = `${transformedX - nameDiv.offsetWidth / 2}px`;
            nameDiv.style.top = `${transformedY - nameDiv.offsetHeight / 2}px`;

            // Apply rotation only for Istanbul, and ensure other elements don't have unnecessary transforms
            if (rotationAngle !== 0) {
                nameDiv.style.transform = `rotate(${rotationAngle}deg)`;
                nameDiv.style.transformOrigin = 'center center';
            } else {
                nameDiv.style.transform = 'none'; // Remove transform if no rotation
            }


            // Metin genişliğini kontrol et ve sığmazsa font boyutunu düşür
            let currentFontSize = fontSize;
            const minAllowedFontSize = 7; // Okunabilir en küçük font boyutu
            const maxWidthRatio = 0.95; // Metnin bbox genişliğinin %95'ini kullanmasına izin ver

            while (nameDiv.offsetWidth > bbox.width * maxWidthRatio && currentFontSize > minAllowedFontSize) {
                currentFontSize--;
                nameDiv.style.fontSize = `${currentFontSize}px`;
                // Font boyutu değiştiğinde konumu yeniden hesapla
                nameDiv.style.left = `${transformedX - nameDiv.offsetWidth / 2}px`;
                nameDiv.style.top = `${transformedY - nameDiv.offsetHeight / 2}px`;
                if (rotationAngle !== 0) {
                    nameDiv.style.transform = `rotate(${rotationAngle}deg)`; // Reapply transform for Istanbul
                } else {
                    nameDiv.style.transform = 'none'; // Ensure no transform for others
                }
            }
        });
      }
    } else {
      if (nameDiv) {
        ilIsimleriContainer.removeChild(nameDiv);
      }
    }
  }

  function handleIstanbul(targetGroup, color, isReset = false) {
    if (!istanbulAsyaGroup || !istanbulAvrupaGroup) return;

    const istanbulPaths = [
      istanbulAsyaGroup.querySelector('path'),
      istanbulAvrupaGroup.querySelector('path')
    ].filter(Boolean);

    if (isReset) {
      const originalAsyaName = istanbulAsyaGroup.getAttribute('data-iladi-original') || 'İstanbul (Asya)';
      const originalAvrupaName = istanbulAvrupaGroup.getAttribute('data-iladi-original') || 'İstanbul (Avrupa)';
      istanbulAsyaGroup.setAttribute('data-iladi', originalAsyaName);
      istanbulAvrupaGroup.setAttribute('data-iladi', originalAvrupaName);
      
      updateCityNameDisplay(istanbulAsyaGroup);
      updateCityNameDisplay(istanbulAvrupaGroup); 

    } else {
      const currentIstanbulName = istanbulAsyaGroup.getAttribute('data-iladi');
      istanbulAsyaGroup.setAttribute('data-iladi', currentIstanbulName);
      istanbulAvrupaGroup.setAttribute('data-iladi', currentIstanbulName);
      updateCityNameDisplay(istanbulAsyaGroup);
      const avrupaNameDiv = ilIsimleriContainer.querySelector(`div[data-city-id="istanbul-avrupa"]`);
      if (avrupaNameDiv) avrupaNameDiv.style.display = 'none';
    }
    
    istanbulPaths.forEach(path => {
      path.style.fill = color;
    });
  }

  if (resetColorsBtn) {
    resetColorsBtn.addEventListener('click', () => {
      element.querySelectorAll('g[data-iladi]').forEach(group => {
        const path = group.querySelector('path');
        if (path) {
          path.style.fill = defaultCityFillColor;
        }
        
        if (group.id === 'istanbul-asya' || group.id === 'istanbul-avrupa') {
            handleIstanbul(group, defaultCityFillColor, true);
        } else {
            const originalCityName = group.getAttribute('data-iladi-original');
            if (originalCityName) {
                group.setAttribute('data-iladi', originalCityName);
            }
            updateCityNameDisplay(group);
        }
      });
      selectedColor = defaultCityFillColor;
      if (colorPicker) {
        colorPicker.value = defaultCityFillColor;
      }
      currentKing = "";
      if (kingNameInput) {
        kingNameInput.value = "";
      }
      if (kingInfoDisplay) {
        kingInfoDisplay.textContent = 'Kralın Adını Girin';
      }
    });
  }

  if (kingNameInput) {
    kingNameInput.addEventListener('input', (event) => {
      currentKing = event.target.value.trim();
      if (kingInfoDisplay) {
        kingInfoDisplay.textContent = currentKing ? `👑 Ülkenin Kralı: ${currentKing}` : "Kralın Adını Girin";
      }
    });
  }
  
  setTimeout(() => {
    element.querySelectorAll('g[data-iladi]').forEach(group => {
      if (!group.hasAttribute('data-iladi-original')) {
        group.setAttribute('data-iladi-original', group.getAttribute('data-iladi'));
      }

      if (group.id === 'istanbul-asya' || group.id === 'istanbul-avrupa') {
        group.setAttribute('data-iladi', 'İstanbul');
      }
      updateCityNameDisplay(group);
    });

    const avrupaNameDiv = ilIsimleriContainer.querySelector(`div[data-city-id="istanbul-avrupa"]`);
    if (avrupaNameDiv) avrupaNameDiv.style.display = 'none';

  }, 50);

  // Sağ tıklama ile şehir adını düzenleme özelliği
  if (element) {
    element.addEventListener('contextmenu', function (event) {
      event.preventDefault(); 

      let targetElement = event.target;
      
      if (targetElement.classList.contains('city-name')) {
        const cityId = targetElement.getAttribute('data-city-id');
        targetElement = element.querySelector(`#${cityId} path`);
      }

      if (targetElement && targetElement.tagName === 'path') {
        const parentGroup = targetElement.parentNode;
        const cityId = parentGroup.getAttribute('id');
        
        // Prevent editing for Istanbul and Ankara
        if (cityId === 'guney-kibris' || cityId === 'kuzey-kibris' || cityId === 'istanbul-asya' || cityId === 'istanbul-avrupa' || cityId === 'ankara') {
            return;
        }

        openCityNameEditor(parentGroup); 
      }
    });

    // Sol tıklama ile sadece renklendirme
    element.addEventListener('click', function (event) {
        let targetElement = event.target;

        if (targetElement.classList.contains('city-name')) {
            const cityId = targetElement.getAttribute('data-city-id');
            targetElement = element.querySelector(`#${cityId} path`);
        }

        if (targetElement && targetElement.tagName === 'path') {
            const parentGroup = targetElement.parentNode;
            const cityId = parentGroup.getAttribute('id');

            if (cityId === 'guney-kibris' || cityId === 'kuzey-kibris') {
                return;
            }

            if (cityId === 'istanbul-asya' || cityId === 'istanbul-avrupa') {
                handleIstanbul(parentGroup, selectedColor);
            } else {
                targetElement.style.fill = selectedColor;
            }
        }
    });
  }

  function openCityNameEditor(group) {
    const cityId = group.getAttribute('id');
    const currentCityName = group.getAttribute('data-iladi');

    // Prevent editing for Istanbul and Ankara
    if (cityId === 'istanbul-asya' || cityId === 'istanbul-avrupa' || cityId === 'ankara') {
        return;
    }

    const existingInput = document.getElementById('city-name-editor');
    if (existingInput) {
        if (existingInput.getAttribute('data-city-id') === cityId) return; 
        
        const prevCityId = existingInput.getAttribute('data-city-id');
        const prevNameDiv = ilIsimleriContainer.querySelector(`div[data-city-id="${prevCityId}"]`);
        if (prevNameDiv) prevNameDiv.style.display = 'block';
        document.body.removeChild(existingInput);
    }

    const nameDiv = ilIsimleriContainer.querySelector(`div[data-city-id="${cityId}"]`);
    if (!nameDiv) return;

    nameDiv.style.display = 'none'; 

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'city-name-editor';
    input.setAttribute('data-city-id', cityId);
    input.value = currentCityName;
    input.style.position = 'fixed'; 
    input.style.zIndex = '1000';
    input.style.padding = '5px';
    input.style.border = '1px solid #ccc';
    input.style.borderRadius = '3px';
    input.style.textAlign = 'center';
    input.style.fontSize = `${nameDiv.style.fontSize}`; 

    input.style.right = '20px'; 
    input.style.bottom = '20px'; 
    input.style.transform = 'none'; 

    document.body.appendChild(input);
    input.focus();
    input.select();

    const updateAndCleanup = () => {
        const newName = input.value.trim();
        if (newName !== "") {
            group.setAttribute('data-iladi', newName);
            updateCityNameDisplay(group);
        } else {
            alert("Şehir adı boş bırakılamaz.");
            input.focus();
            return;
        }
        
        if (document.body.contains(input)) {
            document.body.removeChild(input);
        }
        if (nameDiv) nameDiv.style.display = 'block'; 
    };

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            updateAndCleanup();
        }
    });
    input.addEventListener('blur', updateAndCleanup);
  }
}

svgturkiyeharitasi();