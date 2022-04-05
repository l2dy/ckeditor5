/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';

import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic, Code, Strikethrough } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Image, ImageCaption, ImageStyle, ImageToolbar, PictureEditing } from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';

import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import { Markdown } from '@ckeditor/ckeditor5-markdown-gfm';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';

export default class ClassicEditor extends ClassicEditorBase {
	public static override builtinPlugins = [
		Markdown,
		SourceEditing,

		Essentials,
		Autoformat,
		Bold,
		Italic,
		Strikethrough,
		HorizontalLine,
		BlockQuote,
		Code,
		CodeBlock,
		Heading,
		Image,
		ImageCaption,
		ImageStyle,
		ImageToolbar,
		Indent,
		Link,
		List,
		Paragraph,
		PasteFromOffice,
		PictureEditing,
		Table,
		TableToolbar,
		TextTransformation
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				'undo', 'redo',
				'|', 'heading',
				'|', 'bold', 'italic', 'strikethrough', 'code',
				'|', 'link', 'insertTable', 'codeBlock', 'blockQuote',
				'|', 'bulletedList', 'numberedList', 'outdent', 'indent',
				'|', 'sourceEditing'
			],
			shouldNotGroupWhenFull: true
		},
		image: {
			toolbar: [
				'imageStyle:inline',
				'imageStyle:block',
				'imageStyle:side',
				'|',
				'toggleImageCaption',
				'imageTextAlternative'
			]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells'
			]
		},
		// This value must be kept in sync with the language defined in webpack.config.js.
		language: 'en'
	};
}
