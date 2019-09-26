jQuery(function() {
	let length = 100;
	if (jQuery(document).hasClass('js-mv')) {
		length = jQuery('.js-mv').innerHeight();
	}
	// スクロール判定
	jQuery(window).on('scroll', function() {
		let length = 100;
		if (jQuery('.js-mv').length) {
			length = jQuery('.js-mv').innerHeight();
		}
		if (length < jQuery(this).scrollTop()) {
			jQuery('body').attr('data-scroll', 'true');
		} else {
			jQuery('body').attr('data-scroll', 'false');
		}
	});

	// ローディング判定
	jQuery('body')
		.delay(3000)
		.queue(function() {
			jQuery(this)
				.attr('data-loading', 'true')
				.dequeue();
		});
	jQuery(window).on('load', function() {
		jQuery('body').attr('data-loading', 'true');
	});

	// .js-file
	jQuery('.js-file').change(function() {
		jQuery(this)
			.siblings('.c-file__result')
			.show();
		jQuery(this)
			.siblings('.c-file__result')
			.text(jQuery(this).val());
	});

	// .js-drawer
	jQuery('.js-drawer').on('click', function(e) {
		e.preventDefault();
		let targetClass = jQuery(this).attr('data-target');
		jQuery('.' + targetClass).toggleClass('is-checked');
		return false;
	});

	jQuery('.js-drawer-close a').on('click', function(e) {
		e.preventDefault();
		jQuery(this)
			.parents('.js-drawer-close')
			.parent()
			.toggleClass('is-checked');
		return false;
	});

	// .js-modal
	jQuery('.js-modal').on('click', function(e) {
		e.preventDefault();
		let target = jQuery(this).attr('data-target');
		jQuery('#' + target).toggleClass('is-checked');
		return false;
	});

	// .js-accordion
	jQuery('.js-accordion').on('click', function(e) {
		e.preventDefault();
		jQuery(this)
			.siblings('.js-accordion-content')
			.slideToggle(500);
		jQuery(this)
			.parent('.c-accordion')
			.toggleClass('is-checked');
		return false;
	});

	// .js-tab
	jQuery('.js-tab').on('click', function(e) {
		e.preventDefault();
		jQuery(this)
			.parent()
			.children()
			.removeClass('is-checked');
		jQuery(this).addClass('is-checked');
		let target = jQuery(this).attr('data-target');
		jQuery('#' + target)
			.parent()
			.children()
			.removeClass('is-checked');
		jQuery('#' + target).addClass('is-checked');
		return false;
	});

	// スムーススクロール
	jQuery('a[href^="#"]').click(function() {
		let header = jQuery('.l-header').height();
		let speed = 300;
		let id = jQuery(this).attr('href');
		let target = jQuery('#' == id ? 'html' : id);
		let position = jQuery(target).offset().top - header;
		if ('fixed' !== jQuery('.l-header').css('position')) {
			position = jQuery(target).offset().top;
		}
		if (0 > position) {
			position = 0;
		}
		jQuery('html, body').animate(
			{
				scrollTop: position
			},
			speed
		);
		return false;
	});

	// パララックス
	const parallaxOptions = { root: null, rootMargin: '0px', threshold: [0.25] };
	var parallaxItems = [].slice.call(document.querySelectorAll('.js-anim'));
	let parallaxItemObserver = new IntersectionObserver(function(entries, observer) {
		entries.forEach(function(entry) {
			if (entry.isIntersecting) {
				let parallaxItem = entry.target;
				parallaxItem.classList.add('is-anim');
				parallaxItemObserver.unobserve(parallaxItem);
			}
		});
	}, parallaxOptions);

	parallaxItems.forEach(function(parallaxItem) {
		parallaxItemObserver.observe(parallaxItem);
	});

	// 電話番号
	let userAgent = navigator.userAgent;
	if (userAgent.indexOf('iPhone') < 0 && userAgent.indexOf('Android') < 0) {
		jQuery('a[href^="tel:"]')
			.css('cursor', 'default')
			.on('click', function(e) {
				e.preventDefault();
			});
	}

	// StickyのIE11対応
	// https://blog.hiroyuki90.com/demo/position-sticky/stickyfill.min.js
	let sticky = document.querySelectorAll('.l-section--sticky');
	Stickyfill.add(sticky);

	// LazyLoad
	// https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/
	const lazyOptions = { root: null, rootMargin: '0px', threshold: [0] };
	var lazyItems = [].slice.call(document.querySelectorAll('.js-lazy'));
	lazyItems.forEach(function(lazyItem) {
		lazyItem.setAttribute('data-src', lazyItem.src);
		lazyItem.src = '';
	});
	let lazyItemObserver = new IntersectionObserver(function(entries, observer) {
		entries.forEach(function(entry) {
			if (entry.isIntersecting) {
				let lazyItem = entry.target;
				if (lazyItem.dataset.hasOwnProperty('src')) {
					lazyItem.src = lazyItem.dataset.src;
				}
				if (lazyItem.dataset.hasOwnProperty('srcset')) {
					lazyItem.srcset = lazyItem.dataset.srcset;
				}
				lazyItem.classList.remove('js-lazy');
				lazyItemObserver.unobserve(lazyItem);
			}
		});
	}, lazyOptions);

	lazyItems.forEach(function(lazyItem) {
		lazyItemObserver.observe(lazyItem);
	});
});
