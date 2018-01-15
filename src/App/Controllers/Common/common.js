function InitDateTimeRangePicker() {
	var start = moment().subtract(29, 'days');
	var end = moment();
	$('input[name="daterange"]').daterangepicker({
		startDate : start,
		endDate : end,
		ranges : {
			'Today' : [ moment(), moment() ],
			'Last 3 Months' : [ moment().subtract(3, 'months'), moment() ],
			'Last 6 Months' : [ moment().subtract(6, 'months'), moment() ],
			'Last 9 Months' : [ moment().subtract(9, 'months'), moment() ],
			'Last 12 Months' : [ moment().subtract(12, 'months'), moment() ],
		},
		locale : {
			format : 'DD MMM YYYY'
		}
	});
}

function getFromDate(dateRange) {
	   var res1 = dateRange.slice(0, 11);
	  return res1;
}

function getToDate(dateRange) {
	var res1 = dateRange.slice(14, 25);
	  return res1;
}

function DateFormat(datestring, format) {
    if (datestring == null || datestring == '' || datestring == undefined) {
        datestring = new Date();
    }

    if (!(datestring instanceof Date)) {
        try {
            var d1 = Date.parse(datestring.replace(/([0-9]+)\/([0-9]+)/, '$2/$1'));
        }
        catch (err) {
            var d1 = Date.parse(datestring);
        }
        if (d1 == null) {
            d1 = new Date();
        }
    }
    else {
        d1 = datestring;
    }
    var array = d1.toString(format);
    return array;
}

function cb(start, end) {
	var fromDate = $('[name="fromDate"]');				
	fromDate.val(start.format('DD MMM YYYY'));
	fromDate.trigger('input');
	
	var toDate = $('[name="toDate"]');				
	toDate.val(end.format('DD MMM YYYY'));
	toDate.trigger('input');
}

function InitDateRangePicker() {
	var start = moment().subtract(29, 'days');
	var end = moment();

	$('.daterange-picker').daterangepicker(
	{
		startDate : start,
		endDate : end,
		ranges : {
			'Today' : [ moment(), moment() ],
			'Last 3 Months' : [moment().subtract(3, 'months'), moment() ],
			'Last 6 Months' : [moment().subtract(6, 'months'), moment() ],
			'Last 9 Months' : [moment().subtract(9, 'months'), moment() ],
			'Last 12 Months' : [ moment().subtract(12, 'months'), moment() ],
		},
		locale : { format : 'DD MMM YYYY' }
	}, cb);
	cb(start, end);
}