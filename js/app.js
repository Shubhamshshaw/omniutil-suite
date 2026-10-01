/* OmniUtil Core Application Controller - 100 Tools Edition */
const OMNI_TOOLS = [
  /* === ORIGINAL 14 TOOLS === */
  { id: 'file-compressor', name: 'File-Size Compressor', url: 'tools/file-size-compressor.html', icon: '⚡', category: 'Media', desc: 'Compress images & files right in your browser with live ratio preview.' },
  { id: 'image-converter', name: 'Image Converter', url: 'tools/image-converter.html', icon: '🖼️', category: 'Media', desc: 'Convert images between PNG, JPG, WEBP, and BMP formats instantly.' },
  { id: 'word-counter', name: 'Word Counter', url: 'tools/word-counter.html', icon: '📝', category: 'Text', desc: 'Real-time word, character, paragraph counter & reading time stats.' },
  { id: 'qr-generator', name: 'QR Code Generator', url: 'tools/qr-code-generator.html', icon: '📱', category: 'Utility', desc: 'Create custom QR codes with colors, scale & instant SVG/PNG download.' },
  { id: 'password-generator', name: 'Password Generator', url: 'tools/password-generator.html', icon: '🔒', category: 'Security', desc: 'Generate high-entropy secure passwords with length & symbol controls.' },
  { id: 'age-calculator', name: 'Age Calculator', url: 'tools/age-calculator.html', icon: '🎂', category: 'Math', desc: 'Calculate exact age down to seconds, total days & upcoming birthday.' },
  { id: 'case-converter', name: 'Text Case Converter', url: 'tools/text-case-converter.html', icon: '🔤', category: 'Text', desc: 'Convert text to UPPERCASE, camelCase, Title Case, snake_case & more.' },
  { id: 'json-formatter', name: 'JSON Formatter', url: 'tools/json-formatter.html', icon: '{ }', category: 'Developer', desc: 'Format, minify, validate & navigate JSON data with tree view.' },
  { id: 'color-converter', name: 'Color Converter', url: 'tools/color-converter.html', icon: '🎨', category: 'Design', desc: 'Convert between HEX, RGB, HSL, CMYK & test WCAG contrast ratios.' },
  { id: 'base64-converter', name: 'Base64 Encoder/Decoder', url: 'tools/base64-converter.html', icon: '🔐', category: 'Developer', desc: 'Encode and decode text or files to/from Base64 strings.' },
  { id: 'stopwatch-timer', name: 'Stopwatch & Timer', url: 'tools/stopwatch-timer.html', icon: '⏱️', category: 'Utility', desc: 'Precision millisecond stopwatch with lap times & countdown chime.' },
  { id: 'markdown-converter', name: 'Markdown to HTML', url: 'tools/markdown-to-html.html', icon: '📄', category: 'Developer', desc: 'Live Markdown side-by-side previewer & HTML generator.' },
  { id: 'unit-converter', name: 'Unit Converter', url: 'tools/unit-converter.html', icon: '📐', category: 'Math', desc: 'Convert Length, Weight, Temperature, Data Size & Speed units.' },
  { id: 'image-to-html-css', name: 'Image to HTML/CSS', url: 'tools/image-to-html-css.html', icon: '💻', category: 'Design', desc: 'Convert uploaded images into pure HTML & CSS pixel art matrix.' },

  /* === TEXT & WRITING TOOLS === */
  { id: 'text-diff-checker', name: 'Text Diff Checker', url: 'tools/text-diff-checker.html', icon: '↔️', category: 'Text', desc: 'Compare two texts side-by-side with line-by-line diff highlighting.' },
  { id: 'lorem-ipsum-generator', name: 'Lorem Ipsum Generator', url: 'tools/lorem-ipsum-generator.html', icon: '📖', category: 'Text', desc: 'Generate placeholder lorem ipsum text with custom paragraph and word counts.' },
  { id: 'text-to-speech', name: 'Text to Speech', url: 'tools/text-to-speech.html', icon: '🔊', category: 'Text', desc: 'Convert text to speech using browser TTS with voice, speed & pitch controls.' },
  { id: 'speech-to-text', name: 'Speech to Text', url: 'tools/speech-to-text.html', icon: '🎤', category: 'Text', desc: 'Voice-to-text transcription using Web Speech API recognition.' },
  { id: 'fancy-text-generator', name: 'Fancy Text Generator', url: 'tools/fancy-text-generator.html', icon: '✨', category: 'Text', desc: 'Generate 20+ fancy Unicode text styles: bold, italic, script, bubble & more.' },
  { id: 'text-reverser', name: 'Text Reverser', url: 'tools/text-reverser.html', icon: '🔄', category: 'Text', desc: 'Reverse text, words, or lines and check if text is a palindrome.' },
  { id: 'duplicate-line-remover', name: 'Duplicate Line Remover', url: 'tools/duplicate-line-remover.html', icon: '🧹', category: 'Text', desc: 'Remove duplicate lines from text with sorting and case options.' },
  { id: 'text-to-slug', name: 'Text to URL Slug', url: 'tools/text-to-slug.html', icon: '🔗', category: 'Text', desc: 'Convert text to clean URL slugs with custom separators and options.' },
  { id: 'ascii-art-generator', name: 'ASCII Art Generator', url: 'tools/ascii-art-generator.html', icon: '🎭', category: 'Text', desc: 'Convert text to large ASCII art characters in multiple font styles.' },
  { id: 'text-sorter', name: 'Text Line Sorter', url: 'tools/text-sorter.html', icon: '📋', category: 'Text', desc: 'Sort text lines alphabetically, by length, numerically, or randomly.' },
  { id: 'text-to-binary', name: 'Text to Binary', url: 'tools/text-to-binary.html', icon: '01', category: 'Text', desc: 'Convert text to binary, hex, and octal representations and back.' },

  /* === DEVELOPER TOOLS === */
  { id: 'html-encoder-decoder', name: 'HTML Entity Encoder/Decoder', url: 'tools/html-encoder-decoder.html', icon: '&lt;&gt;', category: 'Developer', desc: 'Encode and decode HTML entities including &amp; &lt; &gt; &quot; and more.' },
  { id: 'url-encoder-decoder', name: 'URL Encoder/Decoder', url: 'tools/url-encoder-decoder.html', icon: '🌐', category: 'Developer', desc: 'URL encode and decode strings using encodeURI and encodeURIComponent.' },
  { id: 'jwt-decoder', name: 'JWT Token Decoder', url: 'tools/jwt-decoder.html', icon: '🔑', category: 'Developer', desc: 'Decode JWT tokens and inspect Header, Payload, and expiry status.' },
  { id: 'uuid-generator', name: 'UUID Generator', url: 'tools/uuid-generator.html', icon: '🆔', category: 'Developer', desc: 'Generate RFC 4122 v4 UUIDs in bulk with multiple format options.' },
  { id: 'hash-generator', name: 'Hash Generator', url: 'tools/hash-generator.html', icon: '#️⃣', category: 'Developer', desc: 'Generate MD5, SHA-1, SHA-256, SHA-512 hashes from text or files.' },
  { id: 'regex-tester', name: 'Regex Tester', url: 'tools/regex-tester.html', icon: '🔍', category: 'Developer', desc: 'Test and debug regular expressions with live match highlighting.' },
  { id: 'json-to-csv', name: 'JSON to CSV Converter', url: 'tools/json-to-csv.html', icon: '📊', category: 'Developer', desc: 'Convert JSON arrays to CSV format with preview and download.' },
  { id: 'csv-to-json', name: 'CSV to JSON Converter', url: 'tools/csv-to-json.html', icon: '📋', category: 'Developer', desc: 'Parse CSV files and convert to JSON with custom delimiter support.' },
  { id: 'json-to-yaml', name: 'JSON to YAML Converter', url: 'tools/json-to-yaml.html', icon: '📝', category: 'Developer', desc: 'Convert between JSON and YAML formats with pretty printing.' },
  { id: 'cron-parser', name: 'Cron Expression Parser', url: 'tools/cron-expression-parser.html', icon: '⏰', category: 'Developer', desc: 'Parse cron expressions into human-readable descriptions and show next run times.' },
  { id: 'xml-formatter', name: 'XML Formatter', url: 'tools/xml-formatter.html', icon: '📄', category: 'Developer', desc: 'Format, prettify, minify, and validate XML documents.' },

  /* === CSS DESIGN TOOLS === */
  { id: 'css-gradient', name: 'CSS Gradient Generator', url: 'tools/css-gradient-generator.html', icon: '🌈', category: 'Design', desc: 'Visual gradient builder for linear, radial, and conic CSS gradients.' },
  { id: 'box-shadow-generator', name: 'Box Shadow Generator', url: 'tools/box-shadow-generator.html', icon: '🔳', category: 'Design', desc: 'Create and preview CSS box shadow effects with visual sliders.' },
  { id: 'border-radius-generator', name: 'Border Radius Generator', url: 'tools/border-radius-generator.html', icon: '⬛', category: 'Design', desc: 'Generate custom CSS border radius with per-corner controls and presets.' },
  { id: 'color-palette-generator', name: 'Color Palette Generator', url: 'tools/color-palette-generator.html', icon: '🎨', category: 'Design', desc: 'Generate complementary, analogous, triadic color palettes from a base color.' },
  { id: 'color-picker', name: 'Color Picker', url: 'tools/color-picker.html', icon: '💧', category: 'Design', desc: 'Pick colors and get HEX, RGB, HSL values with color history.' },
  { id: 'flexbox-playground', name: 'Flexbox Playground', url: 'tools/flexbox-playground.html', icon: '📦', category: 'Design', desc: 'Interactive flexbox property explorer with live CSS code output.' },
  { id: 'grid-generator', name: 'CSS Grid Generator', url: 'tools/grid-generator.html', icon: '⬜', category: 'Design', desc: 'Visual CSS grid layout builder with drag-to-merge cells.' },
  { id: 'css-minifier', name: 'CSS Minifier', url: 'tools/css-minifier.html', icon: '⚡', category: 'Developer', desc: 'Minify and beautify CSS files with size savings statistics.' },
  { id: 'html-minifier', name: 'HTML Minifier', url: 'tools/html-minifier.html', icon: '🗜️', category: 'Developer', desc: 'Minify and prettify HTML markup with whitespace and comment removal.' },
  { id: 'js-minifier', name: 'JavaScript Minifier', url: 'tools/js-minifier.html', icon: '📉', category: 'Developer', desc: 'Minify JavaScript files with comment and whitespace removal.' },

  /* === MATH & CALCULATOR TOOLS === */
  { id: 'scientific-calculator', name: 'Scientific Calculator', url: 'tools/scientific-calculator.html', icon: '🔬', category: 'Math', desc: 'Full scientific calculator with trigonometry, logarithms, and history.' },
  { id: 'percentage-calculator', name: 'Percentage Calculator', url: 'tools/percentage-calculator.html', icon: '%', category: 'Math', desc: 'Calculate percentages, percentage changes, and increases/decreases.' },
  { id: 'loan-emi-calculator', name: 'Loan EMI Calculator', url: 'tools/loan-emi-calculator.html', icon: '🏦', category: 'Math', desc: 'Calculate EMI, total interest and amortization schedule for loans.' },
  { id: 'bmi-calculator', name: 'BMI Calculator', url: 'tools/bmi-calculator.html', icon: '⚖️', category: 'Math', desc: 'Calculate Body Mass Index (BMI) in metric and imperial units.' },
  { id: 'gst-calculator', name: 'GST / Tax Calculator', url: 'tools/gst-calculator.html', icon: '🧾', category: 'Math', desc: 'Add or extract GST and tax from prices with multi-item support.' },
  { id: 'discount-calculator', name: 'Discount Calculator', url: 'tools/discount-calculator.html', icon: '🏷️', category: 'Math', desc: 'Calculate sale price, discount amount, and savings percentage.' },
  { id: 'tip-calculator', name: 'Tip Calculator', url: 'tools/tip-calculator.html', icon: '🍽️', category: 'Math', desc: 'Calculate tip amount and split bills across multiple people.' },
  { id: 'number-to-words', name: 'Number to Words', url: 'tools/number-to-words.html', icon: '🔢', category: 'Math', desc: 'Convert numbers to English words and Indian numbering system.' },
  { id: 'roman-numeral', name: 'Roman Numeral Converter', url: 'tools/roman-numeral-converter.html', icon: 'Ⅷ', category: 'Math', desc: 'Convert between Arabic numbers and Roman numerals (1-3999).' },
  { id: 'binary-calculator', name: 'Binary Calculator', url: 'tools/binary-calculator.html', icon: '🔢', category: 'Developer', desc: 'Convert and calculate between binary, octal, decimal, and hex.' },

  /* === IMAGE TOOLS === */
  { id: 'image-resizer', name: 'Image Resizer', url: 'tools/image-resizer.html', icon: '📐', category: 'Media', desc: 'Resize images to custom dimensions with aspect ratio lock.' },
  { id: 'image-cropper', name: 'Image Cropper', url: 'tools/image-cropper.html', icon: '✂️', category: 'Media', desc: 'Crop images with interactive selection and preset aspect ratios.' },
  { id: 'image-color-picker', name: 'Image Color Picker', url: 'tools/image-color-picker.html', icon: '💉', category: 'Media', desc: 'Pick any color from an uploaded image with eyedropper tool.' },
  { id: 'image-flipper', name: 'Image Flipper & Rotator', url: 'tools/image-flipper.html', icon: '↩️', category: 'Media', desc: 'Flip and rotate images horizontally, vertically, or by custom angle.' },
  { id: 'image-metadata', name: 'Image Metadata Viewer', url: 'tools/image-metadata-viewer.html', icon: 'ℹ️', category: 'Media', desc: 'View image EXIF metadata, dimensions, and file information.' },
  { id: 'svg-to-png', name: 'SVG to PNG Converter', url: 'tools/svg-to-png.html', icon: '🔄', category: 'Media', desc: 'Convert SVG files or code to PNG with custom dimensions.' },
  { id: 'image-border', name: 'Image Border Generator', url: 'tools/image-border-generator.html', icon: '🖼️', category: 'Media', desc: 'Add custom borders, padding, and shadow to images.' },
  { id: 'watermark-tool', name: 'Image Watermark Tool', url: 'tools/watermark-tool.html', icon: '💧', category: 'Media', desc: 'Add text or image watermarks to photos with opacity control.' },
  { id: 'ico-converter', name: 'ICO / Favicon Converter', url: 'tools/ico-converter.html', icon: '⭐', category: 'Media', desc: 'Create favicons in multiple sizes from any image file.' },
  { id: 'gif-frame-extractor', name: 'GIF Frame Extractor', url: 'tools/gif-to-png.html', icon: '🎞️', category: 'Media', desc: 'Extract frames from animated GIF files and download as PNG.' },

  /* === SECURITY TOOLS === */
  { id: 'caesar-cipher', name: 'Caesar Cipher', url: 'tools/caesar-cipher.html', icon: '🔐', category: 'Security', desc: 'Encode and decode text with Caesar cipher and brute force all shifts.' },
  { id: 'morse-code', name: 'Morse Code Translator', url: 'tools/morse-code-translator.html', icon: '📡', category: 'Security', desc: 'Translate between text and Morse code with audio playback.' },
  { id: 'password-strength', name: 'Password Strength Checker', url: 'tools/password-strength-checker.html', icon: '🔏', category: 'Security', desc: 'Check password strength with crack time estimation and tips.' },
  { id: 'otp-generator', name: 'OTP Generator', url: 'tools/otp-generator.html', icon: '🔢', category: 'Security', desc: 'Generate time-based and random OTP codes for authentication.' },
  { id: 'credit-card-validator', name: 'Credit Card Validator', url: 'tools/credit-card-validator.html', icon: '💳', category: 'Security', desc: 'Validate credit card numbers with Luhn algorithm and card type detection.' },
  { id: 'bcrypt-generator', name: 'Bcrypt Hash Generator', url: 'tools/bcrypt-generator.html', icon: '#️⃣', category: 'Security', desc: 'Generate and verify bcrypt-style password hashes (educational demo).' },
  { id: 'rsa-key-generator', name: 'RSA Key Generator', url: 'tools/rsa-key-generator.html', icon: '🔑', category: 'Security', desc: 'Generate RSA public/private key pairs in PEM format.' },
  { id: 'htpasswd-generator', name: '.htpasswd Generator', url: 'tools/htpasswd-generator.html', icon: '🔒', category: 'Security', desc: 'Generate .htpasswd entries for Apache HTTP server password files.' },

  /* === DATE & TIME TOOLS === */
  { id: 'timezone-converter', name: 'Timezone Converter', url: 'tools/timezone-converter.html', icon: '🌍', category: 'Utility', desc: 'Convert times between timezones with a world clock display.' },
  { id: 'date-difference', name: 'Date Difference Calculator', url: 'tools/date-difference-calculator.html', icon: '📅', category: 'Utility', desc: 'Calculate the exact difference between two dates in all units.' },
  { id: 'unix-timestamp', name: 'Unix Timestamp Converter', url: 'tools/unix-timestamp-converter.html', icon: '⌛', category: 'Utility', desc: 'Convert Unix timestamps to dates and vice versa with live counter.' },
  { id: 'countdown-timer', name: 'Event Countdown Timer', url: 'tools/countdown-timer.html', icon: '⏳', category: 'Utility', desc: 'Set countdown timers for events with notifications and localStorage save.' },
  { id: 'calendar-generator', name: 'Calendar Generator', url: 'tools/calendar-generator.html', icon: '📆', category: 'Utility', desc: 'Generate printable monthly calendars with custom events.' },
  { id: 'world-clock', name: 'World Time Zone Clock', url: 'tools/time-zone-clock.html', icon: '🕐', category: 'Utility', desc: 'Live clocks for major cities around the world in all timezones.' },

  /* === SEO TOOLS === */
  { id: 'meta-tag-generator', name: 'Meta Tag Generator', url: 'tools/meta-tag-generator.html', icon: '🏷️', category: 'SEO', desc: 'Generate complete meta tags with OG, Twitter card, and SEO fields.' },
  { id: 'og-generator', name: 'Open Graph Generator', url: 'tools/open-graph-generator.html', icon: '📣', category: 'SEO', desc: 'Generate Open Graph tags with social media preview simulation.' },
  { id: 'robots-txt', name: 'Robots.txt Generator', url: 'tools/robots-txt-generator.html', icon: '🤖', category: 'SEO', desc: 'Build robots.txt files with rules for different search engine bots.' },
  { id: 'sitemap-generator', name: 'XML Sitemap Generator', url: 'tools/sitemap-generator.html', icon: '🗺️', category: 'SEO', desc: 'Create XML sitemaps with priority and changefreq settings.' },
  { id: 'readability-checker', name: 'Readability Checker', url: 'tools/readability-checker.html', icon: '📖', category: 'SEO', desc: 'Calculate Flesch Reading Ease, Kincaid Grade, and Gunning Fog scores.' },
  { id: 'keyword-density', name: 'Keyword Density Analyzer', url: 'tools/keyword-density-checker.html', icon: '🔍', category: 'SEO', desc: 'Analyze keyword frequency and density in your content.' },

  /* === MISC UTILITY TOOLS === */
  { id: 'random-number', name: 'Random Number Generator', url: 'tools/random-number-generator.html', icon: '🎲', category: 'Utility', desc: 'Generate random numbers with range, quantity, and dice mode options.' },
  { id: 'coin-flipper', name: 'Coin Flipper & Dice Roller', url: 'tools/coin-flipper.html', icon: '🪙', category: 'Utility', desc: 'Flip coins and roll dice with 3D CSS animations and history.' },
  { id: 'pomodoro-timer', name: 'Pomodoro Timer', url: 'tools/pomodoro-timer.html', icon: '🍅', category: 'Utility', desc: 'Focus timer with Pomodoro technique, circular progress, and audio alerts.' },
  { id: 'online-notepad', name: 'Online Notepad', url: 'tools/notepad.html', icon: '📓', category: 'Utility', desc: 'Browser-based notepad with auto-save to localStorage.' },
  { id: 'screen-info', name: 'Screen Resolution Checker', url: 'tools/screen-resolution-checker.html', icon: '🖥️', category: 'Utility', desc: 'View screen resolution, viewport size, browser info, and device details.' },
  { id: 'table-generator', name: 'HTML Table Generator', url: 'tools/table-generator.html', icon: '📊', category: 'Developer', desc: 'Create styled HTML tables with editable cells and CSS themes.' },
  { id: 'list-randomizer', name: 'List Randomizer', url: 'tools/list-randomizer.html', icon: '🔀', category: 'Utility', desc: 'Shuffle and randomize lists or pick random items from any list.' },
  { id: 'number-sorter', name: 'Number Sorter & Statistics', url: 'tools/number-sorter.html', icon: '📈', category: 'Math', desc: 'Sort numbers and calculate mean, median, mode, and standard deviation.' },
  { id: 'barcode-generator', name: 'Barcode Generator', url: 'tools/barcode-generator.html', icon: '▊▌▍▋', category: 'Utility', desc: 'Generate Code 128, EAN-13, and Code 39 barcodes in the browser.' },
  { id: 'data-uri-converter', name: 'Data URI Converter', url: 'tools/data-uri-converter.html', icon: '📦', category: 'Developer', desc: 'Convert files to base64 data URIs for embedding in HTML/CSS.' },
  { id: 'nato-alphabet', name: 'NATO Phonetic Alphabet', url: 'tools/nato-alphabet.html', icon: '📻', category: 'Utility', desc: 'Convert text to NATO phonetic alphabet words with audio playback.' },
  { id: 'invoice-generator', name: 'Invoice Generator', url: 'tools/invoice-generator.html', icon: '🧾', category: 'Utility', desc: 'Create professional invoices with line items and print support.' },
  { id: 'nameplate-generator', name: 'Business Card Generator', url: 'tools/nameplate-generator.html', icon: '💼', category: 'Utility', desc: 'Design and download printable business cards with 5 style themes.' },
  { id: 'ip-lookup', name: 'IP Address Lookup', url: 'tools/ip-address-lookup.html', icon: '🌐', category: 'Utility', desc: 'Look up IP addresses to see geolocation and ISP information.' },
];

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSearchModal();
  initGlobalEvents();
});

/* Theme Manager */
function initTheme() {
  const savedTheme = localStorage.getItem('omni_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('omni_theme', next);
      updateThemeIcon(next);
      showToast(`Switched to ${next} theme`, 'info');
    });
  }
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    toggleBtn.setAttribute('title', `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`);
  }
}

/* Quick Search Palette Modal */
function initSearchModal() {
  const searchBtn = document.getElementById('search-trigger');
  const modalOverlay = document.getElementById('search-modal-overlay');
  const searchInput = document.getElementById('search-input');
  const resultsContainer = document.getElementById('search-results');

  if (!modalOverlay || !searchInput || !resultsContainer) return;

  function openModal() {
    modalOverlay.classList.add('active');
    searchInput.value = '';
    renderSearchResults('');
    searchInput.focus();
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
  }

  if (searchBtn) searchBtn.addEventListener('click', openModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      modalOverlay.classList.contains('active') ? closeModal() : openModal();
    }
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  searchInput.addEventListener('input', (e) => {
    renderSearchResults(e.target.value);
  });
}

function renderSearchResults(query) {
  const resultsContainer = document.getElementById('search-results');
  if (!resultsContainer) return;

  const q = query.toLowerCase().trim();
  const filtered = OMNI_TOOLS.filter(t => 
    t.name.toLowerCase().includes(q) || 
    t.desc.toLowerCase().includes(q) || 
    t.category.toLowerCase().includes(q)
  );

  if (filtered.length === 0) {
    resultsContainer.innerHTML = `<div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">No matching tools found</div>`;
    return;
  }

  // Get base path relative to current page location
  const isSubPage = window.location.pathname.includes('/tools/');
  const basePath = isSubPage ? '../' : '';

  resultsContainer.innerHTML = filtered.map(t => `
    <a href="${basePath}${t.url}" class="search-item">
      <span style="font-size: 1.25rem;">${t.icon}</span>
      <div>
        <div style="font-weight: 700; font-size: 0.95rem;">${t.name} <span style="font-size: 0.7rem; padding: 0.1rem 0.4rem; background: var(--bg-primary); border-radius: 4px; color: var(--accent-primary); margin-left: 0.5rem;">${t.category}</span></div>
        <div style="font-size: 0.8rem; color: var(--text-secondary);">${t.desc}</div>
      </div>
    </a>
  `).join('');
}

/* Toast Notifications */
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    setTimeout(() => toast.remove(), 250);
  }, 2500);
}

/* Copy to Clipboard Utility */
async function copyToClipboard(text, successMsg = 'Copied to clipboard!') {
  try {
    await navigator.clipboard.writeText(text);
    showToast(successMsg, 'success');
  } catch (err) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast(successMsg, 'success');
  }
}

function initGlobalEvents() {
  document.addEventListener('click', (e) => {
    const copyTarget = e.target.closest('[data-copy]');
    if (copyTarget) {
      const textToCopy = copyTarget.getAttribute('data-copy');
      if (textToCopy) copyToClipboard(textToCopy);
    }
  });
}
