$(document).ready(function(){
    $("#theme").on('change',function(){
        var editor = ace.edit("editor");
        var theme = $("#theme").val();
        editor.setTheme("ace/theme/" + theme);
    });
    $("#mode").on('change',function(){
        var editor = ace.edit("editor");
        var mode = $("#mode").val();
        editor.getSession().setMode("ace/mode/" + mode);
    });
});
