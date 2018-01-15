(function ($) {
    $.fn.extend({
        tableExport: function (options) {
            var defaults = {
                separator: ',',
                ignoreColumn: [],
                tableName: 'cadashboard_report',
                type: 'csv',
                pdfFontSize: 14,
                pdfLeftMargin: 20,
                escape: 'true',
                htmlContent: 'false',
                consoleLog: 'false',
                pagetype: 'a4',
                pageheader: ''
            };

            var options = $.extend(defaults, options);
            var el = this;

            if (defaults.type == 'csv' || defaults.type == 'txt') {
                // Header
                var tdData = "";
                $(el).find('thead').find('tr').each(function () {
                    tdData += "\n";
                    $(this).filter(':visible').find('th').each(function (index, data) {
                        if ($(this).css('display') != 'none') {
                            if (defaults.ignoreColumn.indexOf(index) == -1) {
                                tdData += '"' + parseString($(this)) + '"' + defaults.separator;
                            }
                        }

                    });
                    tdData = $.trim(tdData);
                    tdData = $.trim(tdData).substring(0, tdData.length - 1);
                });

                // Row vs Column
                $(el).find('tbody').find('tr').each(function () {
                    tdData += "\n";
                    $(this).filter(':visible').find('td').each(function (index, data) {
                        if ($(this).css('display') != 'none') {
                            if (defaults.ignoreColumn.indexOf(index) == -1) {
                                tdData += '"' + parseString($(this)) + '"' + defaults.separator;
                            }
                        }
                    });
                    //tdData = $.trim(tdData);
                    tdData = $.trim(tdData).substring(0, tdData.length - 1);
                });

                //output
                if (defaults.consoleLog == 'true') {
                    console.log(tdData);
                }
                var base64data = "base64," + $.base64.encode(tdData);
                window.open('data:application/' + defaults.type + ';filename=exportData;' + base64data);
            } else if (defaults.type == 'sql') {

                // Header
                var tdData = "INSERT INTO `" + defaults.tableName + "` (";
                $(el).find('thead').find('tr').each(function () {

                    $(this).filter(':visible').find('th').each(function (index, data) {
                        if ($(this).css('display') != 'none') {
                            if (defaults.ignoreColumn.indexOf(index) == -1) {
                                tdData += '`' + parseString($(this)) + '`,';
                            }
                        }

                    });
                    tdData = $.trim(tdData);
                    tdData = $.trim(tdData).substring(0, tdData.length - 1);
                });
                tdData += ") VALUES ";
                // Row vs Column
                $(el).find('tbody').find('tr').each(function () {
                    tdData += "(";
                    $(this).filter(':visible').find('td').each(function (index, data) {
                        if ($(this).css('display') != 'none') {
                            if (defaults.ignoreColumn.indexOf(index) == -1) {
                                tdData += '"' + parseString($(this)) + '",';
                            }
                        }
                    });

                    tdData = $.trim(tdData).substring(0, tdData.length - 1);
                    tdData += "),";
                });
                tdData = $.trim(tdData).substring(0, tdData.length - 1);
                tdData += ";";

                //output
                //console.log(tdData);

                if (defaults.consoleLog == 'true') {
                    console.log(tdData);
                }

                var base64data = "base64," + $.base64.encode(tdData);
                window.open('data:application/sql;filename=exportData;' + base64data);


            } else if (defaults.type == 'json') {

                var jsonHeaderArray = [];
                $(el).find('thead').find('tr').each(function () {
                    var tdData = "";
                    var jsonArrayTd = [];

                    $(this).filter(':visible').find('th').each(function (index, data) {
                        if ($(this).css('display') != 'none') {
                            if (defaults.ignoreColumn.indexOf(index) == -1) {
                                jsonArrayTd.push(parseString($(this)));
                            }
                        }
                    });
                    jsonHeaderArray.push(jsonArrayTd);

                });

                var jsonArray = [];
                $(el).find('tbody').find('tr').each(function () {
                    var tdData = "";
                    var jsonArrayTd = [];

                    $(this).filter(':visible').find('td').each(function (index, data) {
                        if ($(this).css('display') != 'none') {
                            if (defaults.ignoreColumn.indexOf(index) == -1) {
                                jsonArrayTd.push(parseString($(this)));
                            }
                        }
                    });
                    jsonArray.push(jsonArrayTd);

                });

                var jsonExportArray = [];
                jsonExportArray.push({ header: jsonHeaderArray, data: jsonArray });

                //Return as JSON
                //console.log(JSON.stringify(jsonExportArray));

                //Return as Array
                //console.log(jsonExportArray);
                if (defaults.consoleLog == 'true') {
                    console.log(JSON.stringify(jsonExportArray));
                }
                var base64data = "base64," + $.base64.encode(JSON.stringify(jsonExportArray));
                window.open('data:application/json;filename=exportData;' + base64data);
            } else if (defaults.type == 'xml') {

                var xml = '<?xml version="1.0" encoding="utf-8"?>';
                xml += '<tabledata><fields>';

                // Header
                $(el).find('thead').find('tr').each(function () {
                    $(this).filter(':visible').find('th').each(function (index, data) {
                        if ($(this).css('display') != 'none') {
                            if (defaults.ignoreColumn.indexOf(index) == -1) {
                                xml += "<field>" + parseString($(this)) + "</field>";
                            }
                        }
                    });
                });
                xml += '</fields><data>';

                // Row Vs Column
                var rowCount = 1;
                $(el).find('tbody').find('tr').each(function () {
                    xml += '<row id="' + rowCount + '">';
                    var colCount = 0;
                    $(this).filter(':visible').find('td').each(function (index, data) {
                        if ($(this).css('display') != 'none') {
                            if (defaults.ignoreColumn.indexOf(index) == -1) {
                                xml += "<column-" + colCount + ">" + parseString($(this)) + "</column-" + colCount + ">";
                            }
                        }
                        colCount++;
                    });
                    rowCount++;
                    xml += '</row>';
                });
                xml += '</data></tabledata>'

                if (defaults.consoleLog == 'true') {
                    console.log(xml);
                }

                var base64data = "base64," + $.base64.encode(xml);
                window.open('data:application/xml;filename=exportData;' + base64data);

            } else if (defaults.type == 'excel' || defaults.type == 'doc' || defaults.type == 'powerpoint') {
                var searchvalue = 0;
                
                //console.log($(this).html());
                var excel = "<table>";
                // Header
                $(el).find('thead').find('tr').each(function () {
                    excel += "<tr>";
                    $(this).filter(':visible').find('th').each(function (index, data) {
                        if ($(this).css('display') != 'none') {
                            if (defaults.ignoreColumn.indexOf(index) == -1) {
                                excel += "<td>" + parseString($(this)) + "</td>";
                            }
                        }
                    });
                    excel += '</tr>';

                });


                // Row Vs Column
                var rowCount = 1;
                $(el).find('tbody').find('tr').each(function () {
                    excel += "<tr>";
                    var colCount = 0;
                    $(this).filter(':visible').find('td').each(function (index, data) {
                        if ($(this).css('display') != 'none') {
                            if (defaults.ignoreColumn.indexOf(index) == -1) {
                                excel += "<td>" + parseString($(this)) + "</td>";
                            }
                        }
                        colCount++;
                    });
                    rowCount++;
                    excel += '</tr>';
                });
                excel += '</table>'

                if (defaults.consoleLog == 'true') {
                    console.log(excel);
                }

                var excelFile = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:" + defaults.type + "' xmlns='http://www.w3.org/TR/REC-html40'>";
                excelFile += "<head>";
                excelFile += "<!--[if gte mso 9]>";
                excelFile += "<xml>";
                excelFile += "<x:ExcelWorkbook>";
                excelFile += "<x:ExcelWorksheets>";
                excelFile += "<x:ExcelWorksheet>";
                excelFile += "<x:Name>";
                excelFile += defaults.tableName;
                excelFile += "</x:Name>";
                excelFile += "<x:WorksheetOptions>";
                excelFile += "<x:DisplayGridlines/>";
                excelFile += "</x:WorksheetOptions>";
                excelFile += "</x:ExcelWorksheet>";
                excelFile += "</x:ExcelWorksheets>";
                excelFile += "</x:ExcelWorkbook>";
                excelFile += "</xml>";
                excelFile += "<![endif]-->";
                excelFile += "</head>";
                excelFile += "<body>";
                excelFile += excel;
                excelFile += "</body>";
                excelFile += "</html>";

                var base64data = "base64," + $.base64.encode(excelFile);
                var uri = 'data:application/vnd.ms-' + defaults.type + ';filename=exportData;' + base64data;
                var downloadLink = document.createElement("a");
                downloadLink.href = uri;
                downloadLink.download = defaults.tableName;

                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
                if ($('select[name="table_report_length"]') != undefined) {
                    $('select[name="table_report_length"]').val(searchvalue);
                }
            } else if (defaults.type == 'png') {
                html2canvas($(el), {
                    onrendered: function (canvas) {
                        var img = canvas.toDataURL("image/png");
                        window.open(img);


                    }
                });
            } else if (defaults.type == 'pdf') {
                var pdf = new jsPDF();
                pdf = new jsPDF('p', 'pt', defaults.pagetype);
                pdf.setFont("helvetica");
                pdf.myText(((defaults.pageheader != '') ? defaults.pageheader : defaults.tableName), { align: "center" }, 40, 40);
                source = $(el)[0];
                
                 specialElementHandlers = {
                    '#bypassme': function (element, renderer) {
                        return true
                    }
                 };
                
                margins = {
                    top: 50,
                    bottom: 50,
                    left: 40
                };
                pdf.fromHTML(
                        source,
                        margins.left, 
                        margins.top, {
                            'elementHandlers': specialElementHandlers
                        },
                function (dispose) {
                    // dispose: object with X, Y of the last line add to the PDF 
                    //          this allow the insertion of new lines after html
                    pdf.save(defaults.tableName);
                }
                , margins);
            }
            
            function parseString(data) {
                if (defaults.htmlContent == 'true') {
                    content_data = data.html().trim();
                } else {
                    content_data = data.text().trim();
                }

                if (defaults.escape == 'true') {
                    content_data = escape(content_data);
                }

                return content_data;
            }

        }
    });
})(jQuery);




function tableToJson(table) {
    var data = [];

    // first row needs to be headers
    var headers = [];
    for (var i = 0; i < table.rows[0].cells.length; i++) {
        headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
    }

    // go through cells
    for (var i = 1; i < table.rows.length; i++) {

        var tableRow = table.rows[i];
        var rowData = {};

        for (var j = 0; j < tableRow.cells.length; j++) {

            rowData[headers[j]] = tableRow.cells[j].innerHTML;

        }

        data.push(rowData);
    }

    return data;
}
