/**
 * amCharts 4 locale
 * 
 * Locale: fa
 * Language: Persian
 * Author: Saeed Hassani Borzadaran (@hasanisaeed)
 *
 * Follow instructions in [`amcharts4-lang` repo](https://github.com/amcharts/amcharts4-lang) to make corrections or add new translations.
 */
export default {
	// number formatter related
	"_decimalSeparator": ".",
	"_thousandSeparator": ",",

	// Default date formats for various periods
	"_big_number_suffix_3": "k",
	"_big_number_suffix_6": "M",
	"_big_number_suffix_9": "G",
	"_big_number_suffix_12": "T",
	"_big_number_suffix_15": "P",
	"_big_number_suffix_18": "E",
	"_big_number_suffix_21": "Z",
	"_big_number_suffix_24": "Y",

	"_small_number_suffix_3": "m",
	"_small_number_suffix_6": "μ",
	"_small_number_suffix_9": "n",
	"_small_number_suffix_12": "p",
	"_small_number_suffix_15": "f",
	"_small_number_suffix_18": "a",
	"_small_number_suffix_21": "z",
	"_small_number_suffix_24": "y",

	"_byte_suffix_B": "B",
	"_byte_suffix_KB": "KB",
	"_byte_suffix_MB": "MB",
	"_byte_suffix_GB": "GB",
	"_byte_suffix_TB": "TB",
	"_byte_suffix_PB": "PB",

	// Default date formats for various periods
	"_date_millisecond": "mm:ss SSS",
	"_date_second": "HH:mm:ss",
	"_date_minute": "HH:mm",
	"_date_hour": "HH:mm",
	"_date_day": "MMM dd",
	"_date_week": "ww",
	"_date_month": "MMM",
	"_date_year": "yyyy",

	// Default duration formats for various base units
	// Default duration formats for various base units
	"_duration_millisecond": "SSS",
	"_duration_second": "ss",
	"_duration_minute": "mm",
	"_duration_hour": "hh",
	"_duration_day": "dd",
	"_duration_week": "ww",
	"_duration_month": "MM",
	"_duration_year": "yyyy",

	// Era translations
	"_era_ad": "پیش از میلاد",
	"_era_bc": "قبل از میلاد",

	// Period
	"A": "ص",
	"P": "ش",
	"AM": "ق.ظ",
	"PM": "ب.ظ",
	"A.M.": "قبل از ظهر",
	"P.M.": "بعد از ظهر",

	// Dates
	"January": "ژانویه",
	"February": "فوریه",
	"March": "مارس",
	"April": "آوریل",
	"May": "مه",
	"June": "ژوئن",
	"July": "جولای",
	"August": "اوت",
	"September": "سپتامبر",
	"October": "اکتبر",
	"November": "نوامبر",
	"December": "دسامبر",
	"Jan": "ژانویه",
	"Feb": "فوریه",
	"Mar": "مارس",
	"Apr": "آوریل",
	"May(short)": "مه",
	"Jun": "ژوئن",
	"Jul": "جولای",
	"Aug": "اوت",
	"Sep": "سپتامبر",
	"Oct": "اکتبر",
	"Nov": "نوامبر",
	"Dec": "دسامبر",

	// Weekdays.
	"Sunday": "یکشنبه",
	"Monday": "دوشنبه",
	"Tuesday": "سه شنبه",
	"Wednesday": "چهارشنبه",
	"Thursday": "پنجشنبه",
	"Friday": "جمعه",
	"Saturday": "شنبه",
	"Sun": "یکشنبه",
	"Mon": "دوشنبه",
	"Tue": "سه شنبه",
	"Wed": "چهارشنبه",
	"Thu": "پنجشنبه",
	"Fri": "جمعه",
	"Sat": "شنبه",

	// Date ordinal function
	"_dateOrd": function (day: number): string {
		return "ُم";
	},

	// Various chart controls.
	"Zoom Out": "بزرگنمایی",

	// Timeline buttons
	"Play": "نمایش",
	"Stop": "نگه داشتن",
	"Legend": "راهنمای نمودار",
	"Click, tap or press ENTER to toggle": "برای تغییر وضعیت، کلیک، تپ یا فشردن ENTER",
	"Loading": "بارگیری",
	"Home": "خانه",

	// Chart types
	"Chart": "نمودار",
	"Serial chart": "نمودار سریالی",
	"X/Y chart": "نمودار محوری X/Y",
	"Pie chart": "نمودار پای",
	"Gauge chart": "نمودار اندازه‌گیری",
	"Radar chart": "نمودار راداری",
	"Sankey diagram": "نمودار سانکی",
	"Flow diagram": "نمودار جریان",
	"Chord diagram": "نمودار کرد",
	"TreeMap chart": "نمودار درختی",
	"Sliced chart": "نمودار برشی",

	// Series types
	"Series": "سری",
	"Candlestick Series": "سری شمعی",
	"OHLC Series": "سری OHLC",
	"Column Series": "سری ستونی",
	"Line Series": "سری خطی",
	"Pie Slice Series": "سری برش‌های پای",
	"Funnel Series": "سری قیفی",
	"Pyramid Series": "سری هرمی",
	"X/Y Series": "سری محوری X/Y",

	// Map-related
	"Map": "نقشه",
	"Press ENTER to zoom in": "برای بزرگنمایی، فشردن ENTER",
	"Press ENTER to zoom out": "برای کوچکنمایی، فشردن ENTER",
	"Use arrow keys to zoom in and out": "برای بزرگنمایی و کوچکنمایی، کلید‌های جهت‌دار را استفاده کنید",
	"Use plus and minus keys on your keyboard to zoom in and out": "برای بزرگنمایی و کوچکنمایی، کلیدهای + و - را در صفحه کلید خود استفاده کنید",
	
	// Export-related
	"Export": "خروجی",
	"Image": "تصویر",
	"Data": "داده",
	"Print": "چاپ",
	"Click, tap or press ENTER to open": "برای باز کردن کلیک، لمس یا فشار دادن ENTER را انجام دهید",
	"Click, tap or press ENTER to print.": "برای چاپ کلیک، لمس یا فشار دادن ENTER را انجام دهید",
	"Click, tap or press ENTER to export as %1.": "برای صادر کردن به عنوان %1 کلیک، لمس یا فشار دادن ENTER را انجام دهید",
	'To save the image, right-click this link and choose "Save picture as..."': 'برای ذخیره تصویر، روی این لینک کلیک راست کنید و گزینه "ذخیره تصویر به عنوان..." را انتخاب کنید',
	'To save the image, right-click thumbnail on the left and choose "Save picture as..."': 'برای ذخیره تصویر، روی تصویر کوچک در سمت چپ کلیک راست کنید و گزینه "ذخیره تصویر به عنوان..." را انتخاب کنید',
	"(Press ESC to close this message)": "(برای بستن این پیام، دکمه ESC را فشار دهید)",
	"Image Export Complete": "صادر کردن تصویر تکمیل شد",
	"Export operation took longer than expected. Something might have gone wrong.": "عملیات صادر کردن بیشتر از زمان مورد انتظار طول کشیده است. ممکن است مشکلی پیش آمده باشد.",
	"Saved from": "ذخیره شده از",
	"PNG": "PNG",
	"JPG": "JPG",
	"GIF": "GIF",
	"SVG": "SVG",
	"PDF": "PDF",
	"JSON": "JSON",
	"CSV": "CSV",
	"XLSX": "XLSX",

	// Scrollbar-related
	"Use TAB to select grip buttons or left and right arrows to change selection": "برای انتخاب دکمه های مربوط به قاب قرار دهی از TAB استفاده کنید یا از پیکان های چپ و راست استفاده کنید تا انتخاب را تغییر دهید",
	"Use left and right arrows to move selection": "برای جابجایی انتخاب از پیکان های چپ و راست استفاده کنید",
	"Use left and right arrows to move left selection": "برای جابجایی انتخاب چپ از پیکان های چپ و راست استفاده کنید",
	"Use left and right arrows to move right selection": "استفاده از کلیدهای جهت‌دهی چپ و راست برای حرکت نشانگر انتخاب",
	"Use TAB select grip buttons or up and down arrows to change selection": "استفاده از کلید تب و کلیدهای جهت‌دهی بالا و پایین برای تغییر انتخاب",
	"Use up and down arrows to move selection": "استفاده از کلیدهای جهت‌دهی بالا و پایین برای حرکت نشانگر انتخاب",
	"Use up and down arrows to move lower selection": "استفاده از کلیدهای جهت‌دهی بالا و پایین برای حرکت نشانگر انتخاب پایینی",
	"Use up and down arrows to move upper selection": "استفاده از کلیدهای جهت‌دهی بالا و پایین برای حرکت نشانگر انتخاب بالایی",
	"From %1 to %2": "از %1 تا %2",
	"From %1": "از %1",
	"To %1": "تا %1",

	// Data loader-related
	"No parser available for file: %1": "پارسری برای پرونده %1 در دسترس نیست",
	"Unable to load file: %1": "بارگذاری پرونده %1 ممکن نیست",
	"Invalid date": "تاریخ نامعتبر است"
};
