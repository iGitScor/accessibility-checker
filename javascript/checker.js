var silent = true;
var hasError = false;

/**
*
* Lang attribute
*
*/

var hasLang = (document.querySelector('html[lang]') !== null);
if (!hasLang) {
  hasError = true;
  console.error('Add the lang attribute and a valid ISO-639-1 two letter language.');
}

/**
*
* Headings order
*
*/

for (var heading = 2; heading <= 6; heading++) {
  var elements = document.querySelectorAll('h' + heading);
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var parent = element.parentElement;
    var topHeadings = [];
    for (var topHeading = 1; topHeading < heading; topHeading++) {
      topHeadings.push('h' + topHeading);
    }

    var wrongElements = parent.querySelectorAll(topHeadings.join(','));
    for (var j = 0; j < wrongElements.length; j++) {
      hasError = true;
      console.error('Wrong headings order');
    }
  }
}

/**
*
* Image accessibility
*
*/

var wrongImg = document.querySelectorAll('img[alt=""]:not([role="presentation"])');
if (wrongImg.length > 0) {
  hasError = true;
  console.error('Wrong image accessibility');
}

wrongImg = document.querySelectorAll('img[alt]');
for (var iterator = 0; iterator < wrongImg.length; iterator++) {
  if (wrongImg[iterator].getAttribute('alt') === '') {
    hasError = true;
    console.error('Specify alt for images');
    console.info(wrongImg[iterator]);
    break;
  }
}

// Global error handler
if (hasError && !silent) {
  alert('check the console');
}
