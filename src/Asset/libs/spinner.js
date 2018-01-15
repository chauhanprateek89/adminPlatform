/*
 * File: Loading Spinners For Entire Project 
 * Author: Rajan Ingle
 * */

(function() {
	'use strict';

    angular
        .module('app.core',[])
    .factory('spinner', [ '$log', function($log) {

        // Set Spinner Options
        var options = {
        		effect: "bounce",
    			text: 'Please wait...',
    			bg: 'rgba(255,255,255,0.7)',
    			color:'#4E342E',
    			sizeW:'',
    			sizeH:'',
    			source: 'public/assets/img/carzzen_loader.gif'
        };

        var spinner = {
            show: show,
            hide: hide,
        };

        return spinner;
        // Show spinner
        function show(element, message) {
        	options.text = message;
        	$(element).waitMe(options);
        }
        // hide spinner
        function hide(element) {
        	$(element).waitMe('hide');
        }
        
    }]);

})();
