function loadProtein(prot_id){

    var string = prot_id //$('#form_prot_id').val();
    console.log('selection', string);
    $("#proteinName").text(string);
    //console.log('address',  "dumpProtein/"+string);
    var request = $.getJSON( "http://134.36.66.166:8070/dumpProtein/"+string, function( data ) {

        //console.log('description', data['description']);

        $("#proteinDescription").text(data['description']);
        if (data['SignalPeptide'].length == 0) {$("#alert_1").text('This protein might not have a signal peptide.');}
        else {$("#alert_1").text('This protein has a signal peptide.'); }

        if (data['Deamidated'].length == 0 && data['HexNAc'].length == 0) {$("#alert_2").text('This protein does not have experimental verified glycosylated sites, only predictions are reported.');}
        else {$("#alert_2").text('This protein has experimental verified glycosylated sites.'); }



        $( "#proteinFeature" ).empty();
        //console.log();
        var seq = data['seq'];
        var ft = new FeatureViewer(seq,
                '#proteinFeature',
                {
                    showAxis: true,
                    showSequence: true,
                    brushActive: true, //zoom
                    toolbar:true, //current zoom & mouse position
                    bubbleHelp:true,
                    zoomMax:10 //define the maximum range of the zoom
                });

        var topology = [];

        var temp_data = data['SignalPeptide'];
        for (var i = 0; i < temp_data.length; i++) {
            var temp = {};
            temp['x']=temp_data[i][0]+1;
            temp['y']=temp_data[i][1]+1;

            temp['id']='Signal_Peptide';
            temp['color']="red";
            temp['description']="Signal Peptide";
            topology.push(temp)
        };

        var temp_data = data['ExtraCellular'];
        for (var i = 0; i < temp_data.length; i++) {
            var temp = {};
            temp['x']=temp_data[i][0]+1;
            temp['y']=temp_data[i][1]+1;

            temp['id']='ExtraCellularDomain'+temp['x'].toString();
            temp['color']="#7FFF00";
            temp['description']="Extra Cellular Domain";
            topology.push(temp)
        };

        var temp_data = data['TransMembrane'];
        for (var i = 0; i < temp_data.length; i++) {
            var temp = {};
            temp['x']=temp_data[i][0]+1;
            temp['y']=temp_data[i][1]+1;

            temp['id']='TransMembrane'+temp['x'].toString();
            temp['color']="#00FFFF";
            temp['description']="Trans Membrane";
            topology.push(temp)
        };

        ft.addFeature({
            data: topology,
            name: "Topology",
            className: "Topology", //can be used for styling
            color: "#9932CC",
            type: "rect" // ['rect', 'path', 'line']
        });

        var temp_data = data['Deamidated'];
        var deamidated = [];
        for (var i = 0; i < temp_data.length; i++) {
            var temp = {};
            temp['x']=temp_data[i][0]+1;
            temp['y']=temp_data[i][0]+1;
            var site = temp_data[i][0]+1;
            temp['id']='Deamidation_'+site.toString();
            temp['color']="red";
            temp['description']="Found "+temp_data[i][2].toString();
            deamidated.push(temp)

        };
        ft.addFeature({
            data: deamidated,
            name: "MS Deamidation",
            className: "Glycosilation_Deamidation",
            color: "#006588",
            type: "rect",
        });

        var temp_data = data['HexNAc'];
        var hexnac = [];
        for (var i = 0; i < temp_data.length; i++) {
            var temp = {};
            temp['x']=temp_data[i][0]+1;
            temp['y']=temp_data[i][0]+1;
            var site = temp_data[i][0]+1;
            temp['id']='HexNAc_'+site.toString();
            temp['color']="Blue";
            temp['description']="Found "+temp_data[i][2].toString();
            hexnac.push(temp)

        };
        ft.addFeature({
            data: hexnac,
            name: "MS HexNAc",
            className: "Glycosilation_HexNAc",
            color: "#006588",
            type: "rect",
        });
        

        var temp_data = data['Prediction'];
        var prediction = [];
        for (var i = 0; i < temp_data.length; i++) {
            var temp = {};
            temp['x']=temp_data[i][0]+1;
            temp['y']=temp_data[i][0]+1;
            var site = temp_data[i][0]+1;
            temp['id']='prediction_'+site.toString();
            var score = temp_data[i][2];
            temp['color']="Blue";
            temp['description']="ML pred: HexNAc"
            if (score > 0.5){
                temp['color']="Red";
                temp['description']="ML pred: Deamidation"
            }
            

            //temp['description']="ML pred: "//+temp_data[i][2].toString();
            prediction.push(temp)

        };
        ft.addFeature({
            data: prediction,
            name: "Prediction",
            className: "Glycosilation_Prediction",
            color: "#006588",
            type: "rect",
        });

        var temp_data = data['Domains'];
        //console.log('temp_data', temp_data)
        var domains = [];
        for (var i = 0; i < temp_data.length; i++) {
            var temp = {};
            temp['x']=temp_data[i][0];
            temp['y']=temp_data[i][1];
            temp['color']="#7FFF00";
            temp['description']=temp_data[i][3] + ' ' +temp_data[i][2].toString();
            domains.push(temp)

        };
        ft.addFeature({
            data: domains,
            name: "Domains",
            className: "Domains",
            color: "#006588",
            type: "rect",
        });

        if (data['Coverage'].length > 0){
        ft.addFeature({
            data: data['Coverage'],
            name: "MS coverage",
            className: "test4",
            color: "#667580",
            type: "line",
            filter: "type2",
            height: "8"
        });}
        console.log('coverage2', data['Coverage2']);
        if (data['Coverage2'].length > 0){
            ft.addFeature({
                data: data['Coverage2'],
                name: "MS coverage2",
                className: "test4",
                color: "#667580",
                type: "line",
                filter: "type2",
                height: "8"
            });}


        zoomIn = function(input){
            var length_seq = data['seq'].length;

            var position = input.value;
            var start = position-20;
            var end = start+40;
            if (start < 20) {start = 0}
            if (end > length_seq) {end = length_seq}
            console.log('zoom on', position, start, end, length_seq);
            ft.zoom(start,end);

        }

        var dataTable = data['dataTable'];
        //console.log(data);
        //console.log(dataTable);
        //console.log('Domains', data['Domains']);
        var table = $('#data_table').DataTable(
                {
                    destroy: true,
                    data: dataTable,
                    "dom": 'Bfrtip',
                    "order": [],
                    "lengthMenu": [
                        [ 5, 10, 25, 50, -1 ],
                        [ '5 rows', '10 rows', '25 rows', '50 rows', 'Show all' ]
                    ],
                    "buttons": [ 'pageLength','copy', 'excel', 'csv' ],
                    "columns": [
                        { "title": "Peptide" ,  "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                            var pep = sData;

                            var limit = Math.floor(pep.length/2);
                            var left_pep = pep.slice(0,limit);
                            var right_pep = pep.slice(limit+1,pep.length);
                            var central = pep.slice(limit,limit+1);
                            var pep_html = left_pep+"<span style='font-size: 16pt; color:blue'>"+central+"</span>"+right_pep
                            //$(nTd).html(left_pep+"<span style='font-size: 16pt; color:blue'>"+central+"</span>"+right_pep);
                            $(nTd).html('<button data-toggle="tooltip" data-placement="top" title="zoom to features panel" onclick="zoomIn(this)" id="longTableId" value="'+oData[1]+'">'+pep_html+'</button>')
                        }},
                        { "title": "Site"},
                        { "title": "MS_D" },
                        { "title": "MS_H" },
                        { "title": "Prediction" }
                    ]
                }
        );



    });

    request.complete(function() {
        console.log( "protein is loaded" );
    });

};

