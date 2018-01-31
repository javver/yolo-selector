import test from 'ava';
import {JSDOM} from 'jsdom';
import jQuery from 'jquery';
import instalYolo from '.';

test('used when not installed errors out', t => {
	const {window} = new JSDOM('<html></html>');
	const $ = jQuery(window);
	t.throws(() => $(':yolo'));
});

test('empty document has no obsolete elements', t => {
	const {window} = new JSDOM('<html></html>');
	const $ = jQuery(window);
	instalYolo($);
	const query = $(':yolo');
	t.is(query.length, 0);
});

test('document with only live tags has no obsolete elements', t => {
	const {window} = new JSDOM(`<html>
	<body>
	<div>I'm ok</div>
	<a>I'm ok</a>
	<span>I'm ok</span>
	<main>I'm ok</main>
	<aside>I'm ok</aside>
	</body>
	</html>`);
	const $ = jQuery(window);
	instalYolo($);
	const query = $(':yolo');
	t.is(query.length, 0);
});

test('document with two obsolete elements', t => {
	const {window} = new JSDOM(`<html>
	<body>
	<div>I'm ok</div>
	<a>I'm ok</a>
	<span>I'm ok</span>
	<main>I'm ok</main>
	<aside>I'm ok</aside>
	<blink>I'm ok</blink>
	<marquee>I'm ok</marquee>
	</body>
	</html>`);
	const $ = jQuery(window);
	instalYolo($);
	const query = $(':yolo');
	t.is(query.length, 2);
	t.is(query.slice(0).prop('tagName'), 'BLINK');
	t.is(query.slice(1).prop('tagName'), 'MARQUEE');
});
