function responsiveTables(tableSelector) {


    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }


        var table = tableSelector;
        var spannedClone = document.createElement('div');
        spannedClone.setAttribute('class', 'spanned-clone-table');

        var headers = [];
        var headerRow;
        var rows = table.getElementsByTagName('tr');

        if(table.getElementsByTagName('th').length){
            headerRow = table.getElementsByTagName('th');
        }
        else{
            headerRow = table.querySelectorAll('tr:first-of-type td');
        }

        table.className = table.className + (' table-with-clone');

        for(var row=0; row < headerRow.length; row++){
            headers[row] = headerRow[row].innerHTML;
        }

        // Ignore the header row, as we've saved these values in the headers array.

        rows = Array.prototype.slice.call(rows, 1);

        rows.forEach(function (el) {
            var colData = el.getElementsByTagName('td');
            var newTableData = document.createElement('td');
            newTableData.className = newTableData.className + ' spanned-clone-table-row';

            colData = Array.prototype.slice.call(colData, 0);

            colData.forEach(function (el, index) {
                var text = el.innerHTML;
                var textWithHeader = '<strong>' + headers[index] + ':</strong><br/>' + text;
                newTableData.innerHTML = '<span>' + textWithHeader + '</span>';
            });

            spannedClone.appendChild(newTableData);

        });

        insertAfter(spannedClone, table);

}

module.exports = responsiveTables;