/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * CKEditor 4 LTS ("Long Term Support") is available under the terms of the Extended Support Model.
 */

CKEDITOR.plugins.setLang( 'a11yhelp', 'sr', {
	title: 'Упутства за помоћ',
	contents: 'Садржаји за помоћ. Да би сте затворили дијалог притисните ЕСЦ',
	legend: [
		{
		name: 'Опште',
		items: [
			{
			name: 'Алатке за преуређиванје',
			legend: 'Притисните ${тоолбарФоцус} да бисте прешли на траку са алаткама. Пређите на следећу и претходну групу трака са алаткама помоћу ТАБ и СХИФТ+ТАБ. Пређите на следеће и претходно дугме на траци са алаткама помоћу СТРЕЛИЦЕ НАДЕСНО или СТРЕЛИЦА НАЛЕВО. Притисните СПАЦЕ или ЕНТЕР да бисте активирали дугме на траци са алаткама. Након активирања дугмета на траци са алаткама, фокус ће бити померен назад у област за уређивање.'
		},

			{
			name: 'Уређивач дијалога',
			legend:
				'Унутар дијалога притисните ТАБ да пређете на следећи елемент дијалога, притисните СХИФТ+ТАБ да пређете на претходни елемент дијалога, притисните ЕНТЕР да пошаљете дијалог, притисните ЕСЦ да откажете дијалог. Када дијалог има више картица, до листе картица се може доћи или са АЛТ+Ф10 или са ТАБ као део редоследа табулатора дијалога. Са фокусираном листом картица, пређите на следећу и претходну картицу помоћу СТРЕЛИЦЕ НАДЕСНО, односно НАЛЕВО. Притисните ЕСЦ да одбаците промене и затворите дијалог. Фокус ће се вратити на област за уређивање након напуштања дијалога.'
		},

			{
			name: 'Уређивач локалног менија.',
			legend: 'Притисните ${contextMenu} или APPLICATION ТАСТЕР за отварање локалног менија. Затим са ТАБ или СТРЕЛИЦА ДОЛЕ можете прећи на следећу зачку менија. Претходну опцију можете постићи са ШХИФТ+ТАБ или СТРЕЛИЦА ГОРЕ. Притисните СПАЦЕ или ЕНТЕР за одабир тачке менија. Притисните СПАЦЕ или ЕНТЕР да би се отворио подмени тренутне ставке менија. За повратак у главни мени притисмите ЕСЦ или СТРЕЛИЦА ДЕСНО. Затворите локални мени помоћу тастера ЕСЦ.'
		},

			{
			name: 'Уређивач листе',
			legend: 'До следећег елемента листе можете дочи са ТАБ или СТРЕЛИЦА ДОЛЕ. За одабир петходног елемента притисните СХИФТ+TAБ или  СТРЕЛИЦА ДОЛЕ. За одабир елемента притисните СПАЦЕ или ЕНТЕР. Са притиско ЕСЦ затварате листу. '
		},

			{
			name: 'Уређивач траке пута елемената',
			legend: 'Притисни ${elementsPathFocus} да би означили траку пута елемената. До следећег елемента можете доћи са TAБ или СТРЕЛИЦА ДЕСНО. До претходног долазите са СХИФТ+TAБ или СТРЕЛИЦА ДЕСНО. Са  СПАЦЕ или ЕНТЕР можете одабрати елемент у уређивачу.'
		}
		]
	},
		{
		name: 'Команда',
		items: [
			{
			name: 'Откажи команду',
			legend: 'Притисни ${undo}'
		},
			{
			name: 'Понови команду',
			legend: 'Притисни ${redo}'
		},
			{
			name: 'Подебљана команда',
			legend: 'Притисни ${bold}'
		},
			{
			name: 'Курзив команда',
			legend: 'Притисни ${italic}'
		},
			{
			name: 'Прецтрана команда',
			legend: 'Притисни ${underline}'
		},
			{
			name: 'Линк команда',
			legend: 'Притисни ${link}'
		},
			{
			name: 'Затвори траку уређивача команда',
			legend: 'Притисни ${toolbarCollapse}'
		},
			{
			name: 'Приступ претходном фокус месту команда',
			legend: 'Притисни ${accessNextSpace} да би приступио најближем недоступном фокус месту пре знака  hiányjel, на пример: дав сусаедна ХР елемента. Понови комбинацију тастера да пронађеш фокус место које се налази даље.'
		},
			{
			name: 'Приступ следећем фокус  месту команда ',
			legend: 'Притисни ${accessNextSpace} да би приступио најближем недоступном фокус месту после знака hiányjel, на пример: дав сусаедна ХР елемента. Понови комбинацију тастера да пронађеш фокус место које се налази даље.'
		},
			{
			name: 'Помоћ приступачнсти',
			legend: 'Притисни ${a11yHelp}'
		},
			{
			name: ' Налепи као обичан текст',
			legend: 'Притисните: ${pastetext}',
			legendEdge: 'Притисните ${pastetext}, затим ${paste}'
		}
		]
	}
	],
	tab: 'Tab',
	pause: 'Pause',
	capslock: 'Caps Lock',
	escape: 'Escape',
	pageUp: 'Page Up',
	pageDown: 'Page Down',
	leftArrow: 'Стрелица лево',
	upArrow: 'Стрелица горе',
	rightArrow: 'Стрелица десно',
	downArrow: 'Стрелица доле',
	insert: 'Insert',
	leftWindowKey: 'леви Windows-тастер',
	rightWindowKey: 'десни Windows-тастер',
	selectKey: 'Одабир тастера',
	numpad0: 'Тастери са бројевима 0',
	numpad1: 'Тастери са бројевима 1',
	numpad2: 'Тастери са бројевима 2',
	numpad3: 'Тастери са бројевима 3',
	numpad4: 'Тастери са бројевима 4',
	numpad5: 'Тастери са бројевима 5',
	numpad6: 'Тастери са бројевима 6',
	numpad7: 'Тастери са бројевима 7',
	numpad8: 'Тастери са бројевима 8',
	numpad9: ' Тастери са бројевима 9',
	multiply: 'Множење',
	add: 'Сабирање',
	subtract: 'Одузимање',
	decimalPoint: 'Децимална тачка',
	divide: 'Дељење',
	f1: 'Ф1',
	f2: 'Ф2',
	f3: 'Ф3',
	f4: 'Ф4',
	f5: 'Ф5',
	f6: 'Ф6',
	f7: 'Ф7',
	f8: 'Ф8',
	f9: 'Ф9',
	f10: 'Ф10',
	f11: 'Ф11',
	f12: 'Ф12',
	numLock: 'Num Lock',
	scrollLock: 'Scroll Lock',
	semiColon: 'Тачка зарез',
	equalSign: 'Знак једнакости',
	comma: 'Зарез',
	dash: 'Цртица',
	period: 'Тачка',
	forwardSlash: 'Коса црта',
	graveAccent: 'Обрнути знак акцента',
	openBracket: 'Отворена ћошкаста заграда',
	backSlash: 'обрнута коса црта',
	closeBracket: 'Затворена ћошкаста заграда',
	singleQuote: 'Симпли знак навода'
} );
