$.noConflict();
jQuery(document).ready(function ($) {
    var form = $('form'),
        playground = $('#playground');

    form.submit(function (e) {
        e.preventDefault();

        var tag = form.find('[name="tag"]').val(),
            elClass = form.find('[name="class"]').val(),
            content = form.find('[name="content"]').val();

        playground.append('<' + tag + ' class="' + elClass
            + '">' + content + '</' + tag + '>');
    });
});