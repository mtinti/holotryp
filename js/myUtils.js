
function jq( myid ) {
 
    return "#" + myid.replace( /(:|\.|\[|\]|,|=|@)/g, "\\$1" );
 
}

//this function try to parse a string as a number
//if fail, return the original string
function numberParser(value){
    return (+value) ? +value : value;
}

//create a range of int for fractionation experiments
function range(start, stop, step, addString) {
    var a = [start], b = start;
    while (b < stop) {
        a.push(b += step || 1);
    }
    if (addString){
        var c = a.map(function(n) {
        return 'f'+n.toString()});
        return c;}
    else {
        return a;
    }
}

//this function replace an element of an array
//by finding it's index. Assume array of unique elements
function replaceByIndex(array, element, new_element){
    var index = array.indexOf(element);
    array[index] = new_element;
}


//this function take as input a file read in d3 (csv,tsv)
//each column is mapped to a dictionay so that the key 
//are the column headers and the values ar the column values
var fromFileToDict = function fileTodict(inFile) {
    //the final output
    dictionary_data ={};
    //we read the headers of the d3 file (inFile)
    //and we create a key for each column value
    inFile.columns.forEach(column => {
        dictionary_data[column]=[]
    });
    //we read each element of a d3 file and we store the column
    inFile.forEach(element => {
        //for each header we store the value of the raw
        //in the proper dictionary
        inFile.columns.forEach(column => {
        dictionary_data[column].push(parseFloat(element[column]))
        });
    });
    
    return dictionary_data;
}



//this function parse a d3 file (data) and creates an html table
//anchored at the table_id <table id="table_id"> 
//using the specified columns.
var tabulate = function makeTable(data, columns, table_id) {

    var table = d3.select(table_id)
    var thead = table.append('thead')
    var tbody = table.append('tbody')

    thead.append('tr')
    .selectAll('th')
    .data(columns)
    .enter()
    .append('th')
    .html(function (d) { return d });
        
    var rows = tbody.selectAll('tr')
    .data(data)
    .enter()
    .append('tr');
        
    var cells = rows.selectAll('td')
    .data(function(row) {return columns.map(function (column) {
        return { column: column, value: row[column] }}
        )})
    .enter()
    .append('td')
    .html(function (d) { return d.value });
        
    return table;
}

//this function allow to make sortable the checkbox column of the datatable.
//to make it work, the column defs of the datatable shuld contains
//orderDataType somthing similar to:
// columnDefs: [ {"targets": 2,  "searchable": false, 
//               "orderable": true, "orderDataType": "dom-checkbox"}],
$.fn.dataTable.ext.order['dom-checkbox'] = function (settings, col) {
    return this.api().column(col, { order: 'index' }).nodes().map(function (td, i) {
      //console.log(td, i, 'test');
      //console.log( $('input', td).attr('value'), 'test2');
      if ( $('input', td).attr('value') == 'True'){
          return 0;
        }
      else {return 1}
    });
  }

