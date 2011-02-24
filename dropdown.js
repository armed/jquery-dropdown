jQuery.fn.extend({
    dropdown: function() {
        if (this.attr("tagName").toLowerCase() == "select") {
            var source = this;
            var selected = source.find("option[selected]");
            var options = $("option", source);
            var dropDownId = source.attr('id') + '_dropdown';

            source.after('<dl id="' + dropDownId + '" class="dropdown"></dl>')
            var dropdown = $("#" + dropDownId);

            dropdown.append('<dt><span class="text">' + selected.text() + '<span class="value">'
                    + selected.val() + '</span></span></dt>')
                    dropdown.append('<dd><ul></ul></dd>')

                    options.each(function() {
                        $("#" + dropDownId + " dd ul").append(
                                '<li><span class="text">' + $(this).text() + '<span class="value">'
                                + $(this).val() + '</span></span></li>');
                    });

            $("#" + dropDownId + ".dropdown dt span.text").click(function() {
                $("#" + dropDownId + ".dropdown dd ul").toggle();
            });

            $(document).bind('click', function(e) {
                var $clicked = $(e.target);
                if (!$clicked.parents().hasClass("dropdown"))
                    $("#" + dropDownId + ".dropdown dd ul").hide();
            });

            $("#" + dropDownId + ".dropdown dd ul li span.text").click(function() {
                var text = $(this).html();
                $("#" + dropDownId + ".dropdown dt span.text").html(text);
                $("#" + dropDownId + ".dropdown dd ul").hide();

                source.val($(this).find("span.value").html())
            });

            source.hide();
        }
        return this;
    }
});
