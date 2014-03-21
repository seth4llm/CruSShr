
/*
var usp = { pref: 'auto' }, io = { }, ehl = 'blur change keyup', cb, pt, upr, buf;

var nf = function( n ) {
	var f = n.toString();
	var o = ''; var fl = f.length;
	if ( fl > 3 ) {
		for ( i = 1; i <= fl; i++ ) {
			o = ((i > 0 && i % 3 == 0 && i != fl) ? ',' : '') + f[fl-i] + '' + o;
		}
	} else {
		o = f;
	}
	return o;
};

var ca = function( o ) {
	return o.attr( 'checked' );
};

var timit = function(d) {
	var x = new Date();
	pt.text( nf ( x - d ) + ' ms' );
};

var up = function() {
	if ( ca( usp.auto )) {
		usp.pref = 'auto';
	} else if ( ca( usp.live )) {
		usp.pref = 'live';
	} else {
		usp.pref = 'manual';
	};
	seh();
	return usp.pref;
};

var crush = function() {
	var s = new Date();
	var xto = io.txi.val();
	var nto = xto
		.replace( /\/\*[^\*]+?\*\//g, '' )
		.replace( /(\ {2,})/g, ' ' )
		.replace( /([\n\r]{2,})/g, '\n' )
		.replace( /\s?([;:\.\{\},])\s?/g, '$1' )
		.replace( /([^0-9])0(\.\d+)/g, '$1$2' )
		.replace( /(#(\d)\2(\d)\3(\d)\4)/g, '#$2$3$4' )
		.replace( /\t/g, '' )
		.replace( /\;\}/g, '}' );
	io.txo.text( nto ); lico(); timit( s );
};

var uplive = function() {
	io.txi.bind( ehl, crush );
};

var lci = function() {
	io.il.text( nf( io.txi.val().length ));
};

var lco = function() {
	io.ol.text( nf( io.txo.val().length ));
};

var lico = function() {
	lci(); lco();
};

var cbf = function() {
	cb.focus();
};

var seh = function() {
	io.txi.unbind();
	switch ( usp.pref ) {
		case 'auto' :
			io.txi.bind( 'blur change focusout', crush );
		break;
		case 'live' :
			io.txi.bind( 'blur change focusout keyup', crush );
		break;
		case 'manual' :
		default :
			io.txi.bind( 'blur focusout', cbf );
		break;
	};
};

var CM = {
	bufferArray: [],
	newBuffer: function ( name, text, mode ) {
		CM.bufferArray[ name ] = CodeMirror.Doc( text, mode );
	}
};

var runtime = function() {
	buf.unccss = CM.newBuffer ( 'original', '', 'css' );
	buf.mincss = CM.newBuffer ( 'minified', '', 'css' );
	usp.auto = $( '#up-auto' );
	usp.live = $( '#up-live' );
	usp.man = $( '#up-man' );
	io.txi = $( '#txinput' );
	io.txo = $( '#txoutput' );
	io.il = $( '#length-in' );
	io.ol = $( '#length-out' );
	cb = $( '#update-manual-push' );
	pt = $( '#proc' );
	upr = $( ':radio' );
	upr.bind( 'change', up );
	cb.bind( 'click', crush );
	up();
};

*/
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
	};
};






// $( runtime );