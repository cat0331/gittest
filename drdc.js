(function($) {
    $.fn.extend({
        slider: function(options) {
            var _that = this,
                init = null,
                main = null,
                start = null,
                stop = null,
                next = null,
                prev = null,
                tiemout = null,
                elems = {},
                defaults = {
                    speed: 500,
                    delay: 3000
                }
            options = $.extend(defaults, options);


            init = function() {
                elems._index = 1;
                elems.sliderLis = _that.children('li');
                elems.btn = _that.prevAll();
                console.log(elems.btn);
            }

        }
    });
})(jQuery);