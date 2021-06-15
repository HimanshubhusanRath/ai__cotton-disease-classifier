$(document).ready(function () {
    $('#result').hide();
    $('#btn-predict').hide()

    $("#imgUpload").change(function () {
        $('.image-section').show();
        $('#btn-predict').show();
        $('#result').text('');
        $('#result').hide();
    });

    // Predict
    $('#btn-predict').click(function () {

        var form = $('#file-upload-form')[0];
        var form_data = new FormData(form);

        // Show loading animation
        $(this).hide();
        
        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: '/predict',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                $('#result').fadeIn(600);
                $('#result').text(' Result:  ' + data);
                console.log('Successful!');
            },
        });
    });

});