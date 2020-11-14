function attach_form(container) {
    var form = new SpiffForm(container);
    form.set_title('Slide firt');
    form.set_subtitle('Techer can help');
    var entry = form.append(new SpiffFormEntryField());
    entry.set_label('Content for Slide');
    entry.set_text('Techer can write here');
    return form;
}

$(document).ready(function () {
    var form = attach_form($('#form'));
    var panel = new SpiffFormPanel($('#panel'));
    form.attach_panel(panel);
    form.make_editable();

    // select a form item to make the preferences visible.
    form.select($('#form').find('.spiffform-item:nth(3)').data('obj'));

    $('#sidebar-elements').slideDown("slow");

    $(".ui-elements li").each(function () {
        $(this).draggable({
            "helper": function () {
                return $(this).clone();
            },
            // "cursorAt" is important: make sure that the cursor is beneath
            // (=not on top of) the dragged element, else "form.insert_at()"
            // might not find the right target position for the new element.
            "cursorAt": { 'right': -5 },
            "stop": function (event, ui) {
                var cls = spiffform_elements[$(this).attr('name')];
                var obj = form.insert_at(event, new cls());
                if (obj)
                    form.select(obj);
            }
        });
    });

    $('#editable').click(function () {
        if ($(this).is(':checked')) {
            $('#sidebar-elements').slideDown("slow");
            form.make_editable();
        }
        else {
            $('#sidebar-elements').slideUp("slow");
            form.make_editable(false);
        }
    });

    $('#serialize').click(function () {
        alert(form.serialize(SpiffFormJSONSerializer));
    });

    $('#serialize-deserialize').click(function () {
        form.deserialize(SpiffFormJSONSerializer, form.serialize(SpiffFormJSONSerializer));
    });
});
function nodeToString ( node ) {
    let tmpNode = document.createElement( "div" );
    tmpNode.appendChild( node.cloneNode( true ) );
    let str = tmpNode.innerHTML;
    tmpNode = node = null;
    return str;
 }

$("#btn-save").on("click", function() {
    var c = document.getElementById('form');
    let a = nodeToString(c);
    console.log(a);
})