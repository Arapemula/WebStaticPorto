$(document).ready(function() {
    // Ketika gambar panah pertama diklik
    $('.panah').click(function() {
        $(this).slideUp(); 
        $('.pINFO').hide();
        $('.rahasia').slideDown(); 
    });

    // Ketika gambar panah kedua di dalam rahasia diklik
    $('.rahasia .panah').click(function() {
        $('.rahasia').slideUp(); 
        $('.pINFO').show();
        $('.panah').slideDown(); 
    });

   
    let i = 0;
    let txts = $('#text-list li').map(function() {
        return $(this).text();
    }).get(); 
    let txt = txts[0]; 
    let speed = 150; 
    let isDeleting = false;
    let txtIndex = 0;

    function typeWriter() {
        if (i < txt.length && !isDeleting) {
            $('#dynamic-text').append(txt.charAt(i));
            i++;
            setTimeout(typeWriter, speed);
        } else if (i > 0 && isDeleting) {
            $('#dynamic-text').text(txt.substring(0, i - 1));
            i--;
            setTimeout(typeWriter, speed);
        } else if (i === 0 && isDeleting) {
            isDeleting = false;
            txtIndex++; 
            txt = txts[txtIndex % txts.length]; 
            setTimeout(typeWriter, speed);
        } else if (i === txt.length && !isDeleting) {
            isDeleting = true;
            setTimeout(typeWriter, speed);
        }
    }

   
    $('#dynamic-text').text('');


    typeWriter();
});

document.getElementById('navbar-toggle').addEventListener('click', function() {
    document.getElementById('navbar-menu').classList.toggle('active');
});
