function make_code_mirror(area_id, mode){
    return CodeMirror.fromTextArea(document.getElementById(area_id), {
        lineNumbers: true,
        mode: mode
    })
}

$(function(){
    const ecmascript_editor = make_code_mirror("ecmascript-editor", "javascript")
    const html_editor = make_code_mirror("html-editor", "xml")

    function render(){
        let html = html_editor.getValue()
        let script = ecmascript_editor.getValue()

        $('#target').html(html)
        eval(script)
    }

    $('#render').click(render)
})
