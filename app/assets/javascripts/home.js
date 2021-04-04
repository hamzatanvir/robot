$(document).ready(function () {
    for (var i = 0; i < 5; i++) {
        for (var j = 4; j >= 0; --j) {
            element = '<div id=' + i + '' + j
            element += ' class="box box1">' + i + ',' + j + '</div>'
            $(".wrapper").append(element);
        }
    }
    $('#left').on('click', function () {
        if ($("#robot").length) {
            current_face = $('#robot').attr('face');
            if (current_face == "North") {
                $('#robot').attr("face", "West");
            }
            if (current_face == "South") {
                $('#robot').attr("face", "East");
            }
            if (current_face == "East") {
                $('#robot').attr("face", "North");
            }
            if (current_face == "West") {
                $('#robot').attr("face", "South");
            }
            change_icon_pointing_position();
        } else {
            alert("Robot is not Placed Yet!");
        }
    });
    $('#right').on('click', function () {
        if ($("#robot").length) {
            current_face = $('#robot').attr('face');
            if (current_face == "North") {
                $('#robot').attr("face", "East");
            }
            if (current_face == "South") {
                $('#robot').attr("face", "West");
            }
            if (current_face == "East") {
                $('#robot').attr("face", "South");
            }
            if (current_face == "West") {
                $('#robot').attr("face", "North");
            }
            change_icon_pointing_position();
        } else {
            alert("Robot is not Placed Yet!");
        }
    });
    $("#move").on('click', function () {
        if ($("#robot").length) {
            current_position = $('#robot').parent().attr('id');
            current_face = $('#robot').attr('face');
            $.ajax({
                method: 'GET',
                url: '/move?current_position=' + current_position + '&current_face=' + current_face,
            });
        } else {
            alert("Robot is not Placed Yet!");
        }
    });
    $("#place").on('click', function () {
        var current_face = $('#face_select option:selected').val();
        var x_pos = $('#x_select option:selected').val();
        var y_pos = $('#y_select option:selected').val();
        var new_position = $.trim(x_pos.concat(y_pos));
        $.ajax({
            method: 'GET',
            url: '/place?new_position=' + new_position + '&current_face=' + current_face,
        });
    });
    $("#report").on('click', function () {
        if ($("#robot").length) {
            current_face = $('#robot').attr('face');
            x_pos = $('#robot').parent().attr('id').split('')[0];
            y_pos = $('#robot').parent().attr('id').split('')[1];
            $('#x_pos').text("X: " + x_pos);
            $('#y_pos').text("Y: " + y_pos);
            $('#face').text("FACE: " + current_face);
            $('#myModal').modal('toggle');
        } else {
            alert("Robot is not Placed Yet!");
        }

    });


});

function change_icon_pointing_position() {
    current_face = $('#robot').attr('face');
    if (current_face == "North") {
        $('#robot').css('transform', 'rotate(' + 0 + 'deg)');
    }
    if (current_face == "South") {
        $('#robot').css('transform', 'rotate(' + 180 + 'deg)');
    }
    if (current_face == "East") {
        $('#robot').css('transform', 'rotate(' + 90 + 'deg)');
    }
    if (current_face == "West") {
        $('#robot').css('transform', 'rotate(' + 270 + 'deg)');
    }
}