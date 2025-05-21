 let prod = window.location.search.substring(1);
 if(!prod)
    prod = 'alpha-geo-L300';
 let mheading = document.getElementById('main-heading');
 let heading = document.getElementById('prod-heading');
 document.getElementById(prod+'-sidebar').classList.add('active');
 let overview = document.getElementById('prod-overview');
 let slider = document.getElementById('slideshow-container');
 let alldetails = document.getElementById('alldetails');
 switch(prod){
    case 'alpha-geo-L300':
        mheading.innerHTML = "Alpha Geo L300 GNSS Receiver";
        heading.innerHTML = "Alpha Geo L300 GNSS Receiver";
        overview.innerHTML = `The <b>Alpha Geo L300 GNSS Receiver</b> is a compact, high-performance device designed for <b>land surveying and 
                        construction</b>. It supports <b>multiple satellite constellations</b> including GPS, GLONASS, BEIDOU, GALILEO,
                         QZSS, SBAS, and IRNSS, ensuring precise and accurate spatial data.`;
                         
        slider.innerHTML = `<img id="mainImage" class="main-image" src="assets/img/products/dgps/L300-1.png" alt="Main Product Image">
                       <div class="thumbnails" id="thumbnailContainer">
                        <img src="assets/img/products/dgps/L300-1.png" alt="L300">
                         <img src="assets/img/products/dgps/L300-2.png" alt="L300">
                         <img src="assets/img/products/dgps/L300-3.png" alt="L300">
                         <img src="assets/img/products/dgps/L300-4.png" alt="L300">
                       </div>`;

        alldetails.innerHTML=`<h3>GNSS Performance</h3>
                    <ul>
                        <li>1408 channels for precise positioning.</li>
                        <li>Supports GPS, GLONASS, BEIDOU, GALILEO, QZSS, SBAS, and IRNSS.</li>
                        <li>RTK signal initialization in under 10 seconds.</li>
                        <li>High-precision static accuracy: <br /> - Horizontal: 2.5 mm + 0.5 ppm<br /> - Vertical: 5 mm + 0.5 ppm</li>
                        <li>RTK accuracy: <br /> - Horizontal: 8 mm + 0.5 ppm<br /> - Vertical: 15 mm + 0.5 ppm</li>
                    </ul>
                    <h3>Connectivity & Communication</h3>
                    <ul>
                        <li>Integrated 4G modem supporting multiple bands.</li>
                        <li>Dual UHF radio transmitters: 
                        <br /> - LoRa radio with up to 15 km range. 
                        <br /> - Tx/Rx radio with up to 8 km range, compatible with various brands.</li>
                        <li>Wi-Fi hotspot for easy configuration and data transfer.</li>
                        <li>Bluetooth V4.0 with a range of up to 50 meters.
                        </li>
                    </ul>
                    <h3>Battery & Power</h3>
                    <ul>
                        <li>6800mAh lithium-ion battery with USB Type-C fast charging.</li>
                        <li>Battery life: 
                        <br /> - Rover mode: 12 hours
                        <br /> - Base mode: 7 hours
                        <br /> - Static mode: 15 hours
                        </li>
                    </ul>
                    <h3>Physical & Durability</h3>
                    <ul>
                        <li>Magnesium alloy body, lightweight yet rugged.</li>
                        <li>IP67-rated for dust and water resistance.</li>
                        <li>Shockproof, survives 2-meter drops onto concrete.</li>
                        <li>Operating temperature: -40°C to +75°C.</li>
                    </ul>
                    <h3>Additional Features</h3>
                    <ul>
                        <li>IMU Tilt Sensor with up to 60° tilt compensation.</li>
                        <li>8GB internal memory for data storage.</li>
                        <li>Linux-based operating system with WebUI configuration.</li>
                        <li>Voice prompts for user guidance.</li>
                    </ul>
                    `;
    break;

    case 'matrix-2-lite':
        mheading.innerHTML = "Matrix II Lite GNSS Receiver";
        heading.innerHTML = "Matrix II Lite GNSS Receiver";

        overview.innerHTML = `The <b>Matrix II Lite GNSS Receiver</b> is a compact, next-generation <b>RTK GNSS receiver</b> designed for 
        <b>surveying and mapping applications</b>. It features <b>IMU tilt compensation, multi-band GNSS tracking</b>, and 
        <b>advanced connectivity options</b>.`;
                         
        slider.innerHTML = `<img id="mainImage" class="main-image" src="assets/img/products/dgps/lite-1.jpg" alt="Main Product Image">
                       <div class="thumbnails" id="thumbnailContainer">
                        <img src="assets/img/products/dgps/lite-1.jpg" alt="lite">
                         <img src="assets/img/products/dgps/lite-2.jpg" alt="lite">
                         <img src="assets/img/products/dgps/lite-3.jpg" alt="lite">
                       </div>`;

        alldetails.innerHTML=`<h3>GNSS Performance</h3>
                    <ul>
                        <li>1408 channels for precise positioning.</li>
                        <li>Supports GPS, GLONASS, BEIDOU, GALILEO, QZSS, SBAS.</li>
                        <li>RTK signal initialization in under 5 seconds.</li>
                        <li>Cold start: <60 seconds.</li>
                        <li>Hot start: <15 seconds.</li>
                        <li>Positioning output rate: 1Hz - 20Hz.</li>
                        <li>RTK accuracy: <br /> - Horizontal: 8 mm + 0.5 ppm<br /> - Vertical: 15 mm + 0.5 ppm</li>
                    </ul>
                    <h3>Connectivity & Communication</h3>
                    <ul>
                        <li>Integrated LTE modem for real-time corrections.</li>
                        <li>Dual-band UHF radio (410-470 MHz) for long-range communication.</li>
                        <li>Wi-Fi hotspot for easy configuration and data transfer.</li>
                        <li>Bluetooth V4.0 with a range of up to 50 meters.
                        </li>
                    </ul>
                    <h3>Battery & Power</h3>
                    <ul>
                        <li>7000mAh lithium-ion battery with USB Type-C fast charging.</li>
                        <li>Battery life: 
                        <br /> - Rover mode: 12+ hours
                        <br /> - Base mode: 8+ hours
                        <br /> - Static mode: 15+ hours
                        </li>
                    </ul>
                    <h3>Physical & Durability</h3>
                    <ul>
                        <li>Magnesium alloy body, lightweight yet rugged.</li>
                        <li>IP67-rated for dust and water resistance.</li>
                        <li>Shockproof, survives 2-meter drops onto concrete.</li>
                        <li>Operating temperature: -40°C to +75°C.</li>
                    </ul>
                    <h3>Additional Features</h3>
                    <ul>
                        <li>IMU Tilt Sensor with up to 120° tilt compensation.</li>
                        <li>64GB internal memory for data storage.</li>
                        <li>Linux-based operating system with WebUI configuration.</li>
                        <li>Voice prompts for user guidance.</li>
                        <li>Laser coordinate measurement for enhanced accuracy.</li>
                    </ul>
                    `;
    break;

    case 'matrix-2-laser':
        mheading.innerHTML = "Matrix II Laser GNSS Receiver";
        heading.innerHTML = "Matrix II Laser GNSS Receiver";

        overview.innerHTML = `The <b>Matrix II Laser GNSS Receiver</b> is next-generation <b>smart laser RTK receiver</b> designed for 
        <b>surveying and mapping applications</b>. It combines <b>laser coordinate measurement, IMU tilt compensation, and multi-band GNSS tracking</b> 
        for high-precision positioning.`;
                         
        slider.innerHTML = `<img id="mainImage" class="main-image" src="assets/img/products/dgps/laser-1.png" alt="Main Product Image">
                       <div class="thumbnails" id="thumbnailContainer">
                        <img src="assets/img/products/dgps/laser-1.png" alt="laser">
                         <img src="assets/img/products/dgps/laser-2.png" alt="laser">
                         <img src="assets/img/products/dgps/laser-3.jpg" alt="laser">
                         <img src="assets/img/products/dgps/laser-4.jpg" alt="laser">
                         <img src="assets/img/products/dgps/laser-5.jpg" alt="laser">
                       </div>`;

        alldetails.innerHTML=`<h3>GNSS Performance</h3>
                    <ul>
                        <li>1408 channels for high-precision positioning.</li>
                        <li>Supports GPS, GLONASS, BEIDOU, GALILEO, QZSS, SBAS, IRNSS.</li>
                        <li>Laser coordinate measurement for centimeter-level accuracy.</li>
                        <li>IMU tilt compensation up to 120°.</li>
                        <li>RTK accuracy: <br /> - Horizontal: 8 mm + 0.5 ppm<br /> - Vertical: 15 mm + 0.5 ppm</li>
                    </ul>
                    <h3>Connectivity & Communication</h3>
                    <ul>
                        <li>Bulit-in 4G modem for real-time corrections.</li>
                        <li>Dual-band UHF radio (410-470 MHz) for long-range communication.</li>
                        <li>Wi-Fi hotspot for easy configuration and data transfer.</li>
                        <li>Bluetooth V4.0 with a range of up to 50 meters.</li>
                        <li>WebUI configuration for remote access.</li>
                    </ul>
                    <h3>Battery & Power</h3>
                    <ul>
                        <li>7000mAh lithium-ion battery with USB Type-C fast charging.</li>
                        <li>Battery life: 
                        <br /> - Rover mode: 12+ hours
                        <br /> - Base mode: 8+ hours
                        <br /> - Static mode: 15+ hours
                        </li>
                    </ul>
                    <h3>Physical & Durability</h3>
                    <ul>
                        <li>Magnesium alloy body, lightweight yet rugged.</li>
                        <li>IP67-rated for dust and water resistance.</li>
                        <li>Shockproof, survives 2-meter drops onto concrete.</li>
                        <li>Operating temperature: -40°C to +75°C.</li>
                    </ul>
                    <h3>Additional Features</h3>
                    <ul>
                        <li>AR real-scene stakeout for enhanced efficiency.</li>
                        <li>64GB internal memory with cyclic storage.</li>
                        <li>Voice prompts for user guidance.</li>
                        <li>Laser coordinate measurement for enhanced accuracy.</li>
                    </ul>
                    `;
    break;

    case 'matrix-ultra':
        mheading.innerHTML = "Matrix Ultra GNSS Receiver";
        heading.innerHTML = "Matrix Ultra GNSS Receiver";

        slider.innerHTML = `<img id="mainImage" class="main-image" src="assets/img/products/dgps/matrix-ultra-1.jpg" alt="Main Product Image">
                       <div class="thumbnails" id="thumbnailContainer">
                        <img src="assets/img/products/dgps/matrix-ultra-1.jpg" alt="matrix">
                         <img src="assets/img/products/dgps/matrix-ultra-2.jpg" alt="matrix">
                         <img src="assets/img/products/dgps/matrix-ultra-3.jpg" alt="matrix">
                         <img src="assets/img/products/dgps/matrix-ultra-4.jpg" alt="matrix">
                       </div>`;

        overview.innerHTML = `The <b>Matrix Ultra GNSS Receiver</b> is a high-performace <b>RTK GNSS receiver</b> designed for 
        <b>surveying and mapping applications</b>. It features <b>IMU tilt compensation, and multi-band GNSS tracking, and advanced 
        connectivity opyions</b>.`;

        alldetails.innerHTML=`<h3>GNSS Performance</h3>
                    <ul>
                        <li>336 tracking channels for high-precision positioning.</li>
                        <li>Supports GPS, GLONASS, BEIDOU, GALILEO, QZSS, SBAS, IRNSS.</li>
                        <li>RTK accuracy: <br /> - Horizontal: 8 mm + 1 ppm<br /> - Vertical: 15 mm + 1 ppm</li>
                        <li>Static survey accuracy: <br /> - Horizontal: 2.5 mm + 0.5 ppm<br /> - Vertical: 5 mm + 0.5 ppm</li>
                        <li>Cold start: <60 seconds.</li>
                        <li>Hot start: <1 seconds.</li>
                        <li>Positioning output rate: 1Hz - 50Hz.</li>
                        <li>RTK initialization time: <5 seconds.</li>
                        <li>Initialization reliability: >99.99%.</li>
                    </ul>
                    <h3>Connectivity & Communication</h3>
                    <ul>
                        <li>Bulit-in 4G modem for real-time corrections.</li>
                        <li>Dual-band UHF radio (410-470 MHz) for long-range communication.</li>
                        <li>Wi-Fi hotspot for easy configuration and data transfer.</li>
                        <li>Bluetooth V4.0 with a range of up to 50 meters.</li>
                        <li>WebUI configuration for remote access.</li>
                    </ul>
                    <h3>Battery & Power</h3>
                    <ul>
                        <li>7000mAh lithium-ion battery with USB Type-C fast charging.</li>
                        <li>Battery life: 
                        <br /> - Rover mode: 20+ hours
                        <br /> - Base mode: 6+ hours
                        <br /> - Static mode: 24+ hours
                        </li>
                    </ul>
                    <h3>Physical & Durability</h3>
                    <ul>
                        <li>Magnesium alloy body, lightweight yet rugged.</li>
                        <li>IP67-rated for dust and water resistance.</li>
                        <li>Shockproof, survives 2-meter drops onto concrete.</li>
                        <li>Operating temperature: -40°C to +75°C.</li>
                        <li>Dimensions: 149 x 149 x 111 mm.</li>
                        <li>Weight: <1.02 kg.</li>
                    </ul>
                    <h3>Additional Features</h3>
                    <ul>
                        <li>IMU Tilt Sensor with up to 120° tilt compensation.</li>
                        <li>Laser coordinate measurement with 1 cm + 5 mm/m accuracy.</li>
                        <li>Photogrammetry accuracy: 2-4 cm (95%) under normal lighting conditions.</li>
                        <li>AR real-scene stakeout for enhanced efficiency.</li>
                        <li>64GB internal memory with cyclic storage.</li>
                        <li>Voice prompts for user guidance.</li>
                    </ul>
                    `;
    break;

    case 'alpha-x':
        mheading.innerHTML = "Alpha X Total Station";
        heading.innerHTML = "Alpha X Total Station";

        slider.innerHTML = `<img id="mainImage" class="main-image" src="assets/img/products/total_station/alpha-x-1.jpg" alt="Main Product Image">
                       <div class="thumbnails" id="thumbnailContainer">
                        <img src="assets/img/products/total_station/alpha-x-1.jpg" alt="alpha-x">
                       </div>`;

        overview.innerHTML = `The Alpha X Total Station is a high-precision surveying instrument designed for engineering,
         construction, and mapping projects. It features reflectorless measurement, dual-axis compensation, and
          Bluetooth connectivity for seamless data transfer.`;

        alldetails.innerHTML=`<h3>General Specifications</h3>
                    <ul>
                        <li>Height: 0.34 m</li>
                        <li>Width: 0.175 m</li>
                        <li>Depth: 0.297 m</li>
                        <li>Weight: 0.178 Kg</li>
                        <li>Year of Introduction: 2023</li>
                    </ul>
                    <h3>User Interface</h3>
                    <ul>
                        <li>Alphanumeric keyboard with LCD display (6 lines x 20 characters).</li>
                        <li>Bluetooth connectivity for cable-free operation.</li>
                        <li>Compatible with SurPro 6.0 software for efficient data collection.</li>
                    </ul>
                    <h3>Distacne Measurent</h3>
                    <ul>
                        <li>Reflectorless measuring range: Up to 1000 meters.</li>
                        <li>Prism EDM range: Up to 5000 meters.</li>
                        <li>Accuracy: 
                        <br /> - Prism: 2 mm + 2 ppm
                        <br /> - Reflectorless: 2 mm + 2 ppm
                        </li>
                        <li>Measuring Time: 
                        <br /> - Fine mode: 1.2 seconds
                        <br /> - Tracking mode: 0.3 seconds
                        <br /> - Fast mode: 0.7 seconds
                        </li>
                    </ul>
                    <h3>Angle Measurement</h3>
                    <ul>
                        <li>Reading system: Absolute encoder.</li>
                        <li>Angle unit options: 360° / 400gon / 6400mil.</li>
                        <li>Display resolution: 1″ / 5″ / 10″.</li>
                        <li>Accuracy: 2″ / 5″.</li>
                    </ul>
                    <h3>Compensator & Leveling</h3>
                    <ul>
                        <li>Dual-axis compensator for enhanced accuracy.</li>
                        <li>Plate Level Vial Sensitivity: 30″ / 2mm.</li>
                        <li>Circular Level Vial Sensitivity: 8' / 2mm.</li>
                    </ul>
                    <h3>Laser & Optical Plummet</h3>
                    <ul>
                        <li>Laser plummet accuracy: ±1mm / 1.5m.</li>
                        <li>Laser class: Class 2 (IEC60825-1).</li>
                        <li>Optical plummet accuracy: ±0.8mm / 1.5m.</li>
                        <li>Magnification: 3x.</li>
                        <li>Field of view: 4°.</li>
                    </ul>
                    <h3>Data Storage & Connectivity</h3>
                    <ul>
                        <li>SD Card support.</li>
                        <li>USB connectivity.</li>
                        <li>RS-232 / 422 Serial port.</li>
                        <li>Bluetooth onboard.</li>
                    </ul>
                    <h3>Power Supply</h3>
                    <ul>
                        <li>Battery: 3400mAh Li-ion rechargeable.</li>
                        <li>Continuous operation time: Approx. 20 hours.</li>
                        <li>Output voltage: 7.4V DC.</li>
                    </ul>
                    <h3>Environmental Durability</h3>
                    <ul>
                        <li>Operating temperature: -40°C to +60°C.</li>
                        <li>IP rating: IP55 (dust and water resistance).</li>
                        <li>Shockproof: Survives 2-meter drops onto concrete.</li>
                    </ul>
                    `;
    break;
 
    case 'alpha-y':
      mheading.innerHTML = "Alpha Y Total Station";
        heading.innerHTML = "Alpha Y Total Station";

        slider.innerHTML = `<img id="mainImage" class="main-image" src="assets/img/products/total_station/alpha-y-1.jpg" alt="Main Product Image">
                       <div class="thumbnails" id="thumbnailContainer">
                        <img src="assets/img/products/total_station/alpha-y-1.jpg" alt="alpha-y">
                        <img src="assets/img/products/total_station/alpha-y-2.jpg" alt="alpha-y">
                        <img src="assets/img/products/total_station/alpha-y-3.jpg" alt="alpha-y">
                       </div>`;

        overview.innerHTML = `The Alpha Y Total Station is a high-precision surveying instrument designed for engineering,
         construction, and mapping projects. It features Android OS, reflectorless measurement, dual-axis compensation, and
          advanced connectivity options.`;

        alldetails.innerHTML=`<h3>General Specifications</h3>
                    <ul>
                        <li>Operating System: Android 11.</li>
                        <li>Processor: Quad-core ARM Cortex-A55, up to 2GHz.</li>
                        <li>Display: 5.5-inch HD touchscreen (1280 x 720 resolution).</li>
                        <li>Memory: 4GB RAM + 32GB ROM (expandable to 8GB + 128GB).</li>
                        <li>Keyboard: Alphanumeric with 15 keys.</li>
                        <li>Connectivity: Bluetooth, Wi-Fi, USB Type-C, 4G (optional).</li>
                    </ul>
                    <h3>Distacne Measurent</h3>
                    <ul>
                        <li>Reflectorless measuring range: Up to 1000 meters.</li>
                        <li>Reflective sheet/RP60 Range: Up to 1200 meters.</li>
                        <li>Single Prism range: Up to 5000 meters.</li>
                        <li>Accuracy: 
                        <br /> - Prism: 2 mm + 2 ppm
                        <br /> - Reflective Sheet/RP60: 2 mm + 2 ppm
                        <br /> - Reflectorless: 2 mm + 2 ppm
                        </li>
                        <li>Measuring Time: 
                        <br /> - Fine mode: 1.2 seconds
                        <br /> - Tracking mode: 0.3 seconds
                        <br /> - Fast mode: 0.7 seconds
                        </li>
                        <li>Laser Class: Class 3R (Reflectorless & Reflective Sheet), Class 1 (Prism).</li>
                    </ul>
                    <h3>Angle Measurement</h3>
                    <ul>
                        <li>Reading system: Absolute encoder.</li>
                        <li>Angle unit options: 360° / 400gon / 6400mil.</li>
                        <li>Display resolution: 1″ / 5″ / 10″.</li>
                        <li>Accuracy: 2″.</li>
                    </ul>
                    <h3>Compensator & Leveling</h3>
                    <ul>
                        <li>Dual-axis compensator for enhanced accuracy.</li>
                        <li>Plate Level Vial Sensitivity: 30″ / 2mm.</li>
                        <li>Circular Level Vial Sensitivity: 8' / 2mm.</li>
                    </ul>
                    <h3>Laser & Optical Plummet</h3>
                    <ul>
                        <li>Laser plummet accuracy: ±1mm / 1.5m.</li>
                        <li>Laser class: Class 2 (IEC60825-1).</li>
                        <li>Optical plummet accuracy: ±0.8mm / 1.5m.</li>
                        <li>Magnification: 3x.</li>
                        <li>Field of view: 4°.</li>
                    </ul>
                    <h3>Data Storage & Connectivity</h3>
                    <ul>
                        <li>SD Card support.</li>
                        <li>USB connectivity.</li>
                        <li>RS-232 / 422 Serial port.</li>
                        <li>Bluetooth onboard.</li>
                        <li>Supports CAD file import/export.</li>
                    </ul>
                    <h3>Power Supply</h3>
                    <ul>
                        <li>Battery: 5200mAh Li-ion rechargeable.</li>
                        <li>Continuous operation time: Approx. 8 hours.</li>
                        <li>Charging time: Approx. 4 hours.</li>
                        <li>Output voltage: 7.4V DC.</li>
                    </ul>
                    <h3>Environmental Durability</h3>
                    <ul>
                        <li>Operating temperature: -40°C to +60°C.</li>
                        <li>IP rating: IP55 (dust and water resistance).</li>
                        <li>Shockproof: Survives 2-meter drops onto concrete.</li>
                    </ul>
                    `;
    break;
  
    case 'sokkia-B40A':
      mheading.innerHTML = "Sokkia B40A Auto Level";
        heading.innerHTML = "Sokkia B40A Auto Level";

        slider.innerHTML = `<img id="mainImage" class="main-image" src="assets/img/products/auto_level/sokkia-b40a-1.jpg" alt="Main Product Image">
                       <div class="thumbnails" id="thumbnailContainer">
                        <img src="assets/img/products/auto_level/sokkia-b40a-1.jpg" alt="sokkia-b40a">
                        <img src="assets/img/products/auto_level/sokkia-b40a-2.jpg" alt="sokkia-b40a">
                        <img src="assets/img/products/auto_level/sokkia-b40a-4.jpg" alt="sokkia-b40a">
                        <img src="assets/img/products/auto_level/sokkia-b40a-3.jpg" alt="sokkia-b40a">
                       </div>`;

        overview.innerHTML = `The Sokkia B40A Auto Level is a high-precision optical instrument designed for surveying and
         construction applications. It features a rapid, stable, and durable compensator, ensuring reliable accuracy even
          in challenging environments.`;

        alldetails.innerHTML=`<h3>Telescope</h3>
                    <ul>
                        <li>Length: 214mm (8.42in.).</li>
                        <li>Magnification: 24x.</li>
                        <li>Objective Aperture: 32mm (1.26 in.).</li>
                        <li>Resolving Power: 4″.</li>
                        <li>Field of View (at 100m/328ft.): 1°25' (2.5m / 8.2ft.).</li>
                        <li>Minimum Focus: 0.2m (7.9 in.) from end of telescope.</li>
                        <li>Image: Erect.</li>
                        <li>Stadia Constant: 0.</li>
                        <li>Stadia Constant: 100.</li>
                        <li>Focusing Knob: 1-speed.</li>
                        <li>Sighting Aid: Gun Sight.</li>
                    </ul>
                    <h3>Accuracy</h3>
                    <ul>
                        <li>1km double run leveling:
                        <br /> - Without Micrometer: 2.0mm (0.08 in.)
                        <br /> - With Micrometer: Not applicable
                        </li>
                    </ul>
                    <h3>Compensator</h3>
                    <ul>
                        <li>Type: Pendulum compensator with magnetic damping system.</li>
                        <li>Setting Accuracy: 0.5″.</li>
                        <li>Working Range: ±15'.</li>
                    </ul>
                    <h3>Circular Level</h3>
                    <ul>
                        <li>Sensitivity: 10' / 2mm.</li>
                    </ul>
                    <h3>Horizontal Circle</h3>
                    <ul>
                        <li>Diameter: 99mm (3.9in.).</li>
                        <li>Minimum Division: 1°/ 1gon.</li>
                    </ul>
                    <h3>General Specifications</h3>
                    <ul>
                        <li>Water Resistance: IPX6 (IEC 60529:2001).</li>
                        <li>Operating Temperature: -20 to +50°C (-4 to +122°F).</li>
                        <li>Size:
                        <br /> - Width: 130mm (5.12in.)
                        <br /> - Length: 215mm (8.46in.)
                        <br /> - Height: 140mm (5.51in.)
                        </li>
                        <li>Weight: 1.5kg (3.3lbs.).</li>
                    </ul>
                    `;
    break;

    case 'sokkia-B40':
      mheading.innerHTML = "Sokkia B40 Auto Level";
        heading.innerHTML = "Sokkia B40 Auto Level";

        slider.innerHTML = `<img id="mainImage" class="main-image" src="assets/img/products/auto_level/Sokkia-b40-1.jpg" alt="Main Product Image">
                       <div class="thumbnails" id="thumbnailContainer">
                        <img src="assets/img/products/auto_level/Sokkia-b40-1.jpg" alt="sokkia-b40a">
                       </div>`;

        overview.innerHTML = `The Sokkia B40 Auto Level is part of Sokkia's B-Series automatic levels, designed for 
        surveying and construction applications. It features high-precision optics, magnetic damping compensator, 
        and IPX6-rated water resistance, making it reliable in tough environments.`;

        alldetails.innerHTML=`<h3>Telescope</h3>
                    <ul>
                        <li>Magnification: 24x.</li>
                        <li>Objective Aperture: 32mm.</li>
                        <li>Resolving Power: 4″.</li>
                        <li>Field of View :1°25' (2.5m at 100m).</li>
                        <li>Minimum Focus: 0.2m from end of telescope.</li>
                        <li>Image: Erect.</li>
                        <li>Stadia Constant: 0.</li>
                        <li>Stadia Constant: 100.</li>
                        <li>Focusing Knob: 1-speed.</li>
                        <li>Sighting Aid: Gun Sight.</li>
                    </ul>
                    <h3>Accuracy</h3>
                    <ul>
                        <li>1km double - run leveling: ±2.0mm.</li>
                    </ul>
                    <h3>Compensator</h3>
                    <ul>
                        <li>Type: Pendulum compensator with magnetic damping system.</li>
                        <li>Setting Accuracy: 0.5″.</li>
                        <li>Working Range: ±15'.</li>
                    </ul>
                    <h3>Circular Level</h3>
                    <ul>
                        <li>Sensitivity: 10' / 2mm.</li>
                    </ul>
                    <h3>Horizontal Circle</h3>
                    <ul>
                        <li>Diameter: 99mm (3.9in.).</li>
                        <li>Minimum Division: 1°/ 1gon.</li>
                    </ul>
                    <h3>General Specifications</h3>
                    <ul>
                        <li>Water Resistance: IPX6-rated (protected against powerful water jets).</li>
                        <li>Operating Temperature: -20 to +50°C.</li>
                        <li>Size: 130mm x 215mm x 140mm</li>
                        <li>Weight: 1.5kg.</li>
                    </ul>
                    `;
    break;
  
    case 'accessories':
        mheading.innerHTML = "Accessories";
        heading.innerHTML = "Accessories";

        overview.innerHTML = `<div class="row">
       <div class="col-lg-4">
         <div class="card acc-card">
            <div class="card-body acc-card-body">
                <img src="assets/img/products/accessories/tripod.webp" alt="Image 1">
            </div>
            <div class="card-footer acc-card-footer">Tripod</div>
        </div>
       </div>
       <div class="col-lg-4">
         <div class="card acc-card">
            <div class="card-body acc-card-body">
                <img src="assets/img/products/accessories/carbon-pole.avif" alt="Image 1">
            </div>
            <div class="card-footer acc-card-footer">Carbon Pole</div>
        </div>
       </div>
       <div class="col-lg-4">
         <div class="card acc-card">
            <div class="card-body acc-card-body">
                <img src="assets/img/products/accessories/Tribrach.avif" alt="Image 1">
            </div>
            <div class="card-footer acc-card-footer">Tribrach</div>
        </div>
       </div>
       <div class="col-lg-4">
         <div class="card acc-card">
            <div class="card-body acc-card-body">
                <img src="assets/img/products/accessories/red-nd-white-pole.jpg" alt="Image 1">
            </div>
            <div class="card-footer acc-card-footer">Red & White Pole</div>
        </div>
       </div>
       <div class="col-lg-4">
         <div class="card acc-card">
            <div class="card-body acc-card-body">
                <img src="assets/img/products/accessories/prism.jpg" alt="Image 1">
            </div>
            <div class="card-footer acc-card-footer">Prism</div>
        </div>
       </div>
       <div class="col-lg-4">
         <div class="card acc-card">
            <div class="card-body acc-card-body">
                <img src="assets/img/products/accessories/mini-prism.jpeg" alt="Image 1">
            </div>
            <div class="card-footer acc-card-footer">Mini Prism</div>
        </div>
       </div>
       <div class="col-lg-4">
         <div class="card acc-card">
            <div class="card-body acc-card-body">
                <img src="assets/img/products/accessories/alu-tripod.webp" alt="Image 1">
            </div>
            <div class="card-footer acc-card-footer">Aluminium Tripod</div>
        </div>
       </div>
    </div>`;
    break;
};



 const mainImage = document.getElementById('mainImage');
        const thumbnails = document.querySelectorAll('.thumbnails img');

        thumbnails.forEach((thumb, index) => {
          thumb.addEventListener('click', () => {
            // Remove active class from all
            thumbnails.forEach(t => t.classList.remove('active-thumb'));
            thumb.classList.add('active-thumb');

            // Fade transition
            mainImage.style.opacity = 0;
            setTimeout(() => {
              mainImage.src = thumb.src;
              mainImage.style.opacity = 1;
            }, 200);
          });

          // Set the first thumbnail as active on load
          if (index === 0) {
            thumb.classList.add('active-thumb');
          }
        });
  