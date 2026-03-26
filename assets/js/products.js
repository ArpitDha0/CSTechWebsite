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
  