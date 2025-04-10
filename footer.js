document.write(`
    <footer style="text-align: center; padding: 20px; color: #aaa; font-size: 14px;">
      &copy; 2025 SecureMe. Licensed under the 
      <a href="#" onclick="openLicense()" style="color: #00ffe7; text-decoration: none;">MIT License</a>.
    </footer>
  
    <div id="licenseModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background-color:rgba(0,0,0,0.8); z-index:9999;">
      <div style="background-color:#fff; color:#000; margin:5% auto; padding:20px; width:80%; max-width:600px; border-radius:10px; overflow-y:auto; max-height:80%;">
        <h3>MIT License</h3>
        <pre style="white-space: pre-wrap; font-size: 14px;">
MIT License

Copyright (c) 2025 Abduaziz Khakimov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell     
copies of the Software, and to permit persons to whom the Software is         
furnished to do so, subject to the following conditions:                       

The above copyright notice and this permission notice shall be included in    
all copies or substantial portions of the Software.                           

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR    
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,      
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE   
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER        
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN     
THE SOFTWARE.
        </pre>
        <button onclick="closeLicense()" style="margin-top: 15px; padding: 10px 15px; background-color: #00ffe7; border: none; border-radius: 5px; cursor: pointer;">Close</button>
      </div>
    </div>
  `);
  
  function openLicense() {
    document.getElementById("licenseModal").style.display = "block";
  }
  
  function closeLicense() {
    document.getElementById("licenseModal").style.display = "none";
  }
  