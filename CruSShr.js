/* CruSShr
 * author: seth4llm
 */

/* globals */
var editor;

/* helpers */
var ByteSize = function ( number, precision, bits, base ) {
	if ( typeof _ == 'undefined' ) { _ = ByteSize };
	if ( typeof _.prefix == 'undefined' ) { _.prefix = [
		'', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'
		] };
	var useBits = ( bits || false );
	var usePrecision = Math.pow( 10, ( precision || 2 ));
	var useBase = ( base || 1000 );

	var p = 0;
	while ( number / Math.pow( useBase, p ) > useBase ) { p++ };
	var result = Math.round( ( number / Math.pow( useBase, p )) * usePrecision ) / usePrecision;
	return result + ' ' + _.prefix[p] + ( useBase == 1024 && p > 0 ? 'i' : '' ) + ( useBits ? 'b' : 'B' );
};

var Thousands = function ( number ) {
	var t = 0, n = '' + number;
	while ( number / Math.pow( 1000, t ) >= 1000 ) { t++ };
	return t;
};

/* AngularJS section */
var CruSShr = function ( $scope ) {
	$scope.UnCruSShd = { content: '', len: 0 };
	$scope.CruSShd = { content: '', len: 0, lps: 0 };
	$scope.CruSSh_it = function ( ) {
		var start = new Date();
		var unprocessed = $scope.UnCruSShd.content;
		$scope.UnCruSShd.len = ByteSize ( $scope.UnCruSShd.content.length );
		$scope.CruSShd.content = unprocessed.replace( /[\n\r\t]/g, '' )
			.replace( /(\ {2,})/g, ' ' )
			.replace( /\/\*.+?\*\//gm, '' )
			.replace( /\s?([;:\.\{\},!])\s?/g, '$1' )
			.replace( /([^0-9])0(\.\d+)/g, '$1$2' )
			.replace( /(#(\d)\2(\d)\3(\d)\4)/g, '#$2$3$4' )
			.replace( /\;\}/g, '}' );
		var end = new Date();
		$scope.CruSShd.len = ByteSize ( $scope.CruSShd.content.length );
		$scope.CruSShd.lps = end - start;
		Prism.highlightAll();
	};
};


/* initialization */

var runtime = function () {
	//
};



$( runtime );