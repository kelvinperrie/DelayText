
(function ($) {

    /**
     * outputs some content with a delay between each word being placed onscreen
     * @param {string} content the text to output
     * @param {object} settings configuraiton options for the output
     * @returns {element} the element the text was output into
     */
    $.fn.outputWordsWithDelay = function (content, settings) {
        words = content.split(' ');
        OutputPartsWithDelay(this, words, ' ', settings);
        return this;
    };
    /**
     * outputs some content with a delay between each character being placed onscreen
     * @param {string} content the text to output
     * @param {object} settings configuraiton options for the output
     * @returns {element} the element the text was output into
     */
    $.fn.outputCharactersWithDelay = function (content, settings) {
        characters = content.split('');
        OutputPartsWithDelay(this, characters, '', settings);
        return this;
    };
    /**
     * outputs some content with a delay between each part being placed onscreen
     * @param {element} element the page element the output is being placed in
     * @param {array} parts an array of parts that need to be output to the screen/html
     * @param {string} separator a separator to place after each part (e.g. space between words)
     * @param {string} settings configuration options for the ouput
     */
    function OutputPartsWithDelay(element, parts, separator, settings) {

        if (!settings) {
            settings = {};
        }
        if (!settings.outputPartDelay) {
            settings.outputPartDelay = 50;
        }
        
        AddTextToElement(element, null, parts, separator, settings);
    }

    /**
     * outputs some content with a delay between each part being placed onscreen
     * @param {element} element the page element the output is being placed in
     * @param {string} part the current value that needs to be placed onscreen
     * @param {array} remainingParts an array of additional parts that still need to be output to the screen/html
     * @param {string} separator a separator to place after each part (e.g. space between words)
     * @param {string} settings configuration options for the ouput
     */
    function AddTextToElement(element, part, remainingParts, separator, settings) {

        if (part) {
            element.html(element.html() + part + separator);
            if (settings.partOutputCallBack) {
                settings.partOutputCallBack();
            }
        }
        if (remainingParts.length > 0) {
            part = remainingParts[0];
            remainingParts = remainingParts.slice(1);
            setTimeout(function () { AddTextToElement(element, part, remainingParts, separator, settings); }, settings.outputPartDelay);
        } else {
            if (settings.completedCallBack) {
                settings.completedCallBack();
            }
        }
    }

}(jQuery));

