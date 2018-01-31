'use strict';

const yoloElements = ['acronym', 'applet', 'basefont', 'bgsound',
	'big', 'blink', 'center', 'command', 'content', 'dir', 'element',
	'font', 'frame', 'frameset', 'image', 'isindex', 'keygen', 'listing',
	'marquee', 'menu', 'menuitem', 'multicol', 'nextid', 'nobr', 'noembed',
	'noframes', 'plaintext', 'shadow', 'spacer', 'strike', 'tt', 'xmp'];
const yoloSelector = yoloElements.join(',');

function installYolo(jQuery) {
	jQuery.extend(jQuery.expr[':'], {
		yolo(el) {
			return jQuery(el).is(yoloSelector);
		}
	});
}

module.exports = installYolo;
