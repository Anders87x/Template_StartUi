$(document).ready(function() {
    var $table = $('#table');
    var data = [];

    for (var i = 1; i <= 40; i++) {
        data.push({
            "id": i,
            "name": "Status " + i,
            "price": "$" + Math.ceil(Math.random() * 100)
        });
    }

    $table.bootstrapTable({
        iconsPrefix: 'font-icon',
        paginationPreText: '<i class="font-icon font-icon-arrow-left"></i>',
        paginationNextText: '<i class="font-icon font-icon-arrow-right"></i>',
        data: data
    });
});
