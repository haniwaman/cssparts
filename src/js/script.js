jQuery(function() {
	// スクロール判定
	jQuery(window).on("scroll", function() {
		if (100 < jQuery(this).scrollTop()) {
			jQuery("body").attr("data-scroll", "true");
		} else {
			jQuery("body").attr("data-scroll", "false");
		}
	});

	// ローディング判定
	jQuery(window).on("load", function() {
		jQuery("body").attr("data-loading", "true");
	});

	// .js-file
	jQuery(".js-file").change(function() {
		jQuery(this)
			.siblings(".c-file__result")
			.show();
		jQuery(this)
			.siblings(".c-file__result")
			.text(jQuery(this).val());
	});

	// .js-drawer
	jQuery(".js-drawer").on("click", function(e) {
		e.preventDefault();
		jQuery(this)
			.parent()
			.toggleClass("is-checked");
		return false;
	});

	jQuery(".js-drawer-close a").on("click", function(e) {
		e.preventDefault();
		jQuery(this)
			.parents(".js-drawer-close")
			.parent()
			.toggleClass("is-checked");
		return false;
	});

	// .js-modal
	jQuery(".js-modal").on("click", function(e) {
		e.preventDefault();
		let target = jQuery(this).attr("data-target");
		jQuery("#" + target).toggleClass("is-checked");
		return false;
	});

	// .js-accordion
	jQuery(".js-accordion").on("click", function(e) {
		e.preventDefault();
		jQuery(this)
			.siblings(".js-accordion-content")
			.slideToggle(500);
		jQuery(this)
			.parent(".c-accordion")
			.toggleClass("is-checked");
		return false;
	});

	// .js-tab
	jQuery(".js-tab").on("click", function(e) {
		e.preventDefault();
		jQuery(this)
			.parent()
			.children()
			.removeClass("is-checked");
		jQuery(this).addClass("is-checked");
		let target = jQuery(this).attr("data-target");
		jQuery("#" + target)
			.parent()
			.children()
			.removeClass("is-checked");
		jQuery("#" + target).addClass("is-checked");
		return false;
	});

	// スムーススクロール
	jQuery('a[href^="#"]').click(function() {
		let header = jQuery(".l-header").height();
		let speed = 300;
		let id = jQuery(this).attr("href");
		let target = jQuery("#" == id ? "html" : id);
		let position = jQuery(target).offset().top - header;
		if ("fixed" !== jQuery(".l-header").css("position")) {
			position = jQuery(target).offset().top;
		}
		if (0 > position) {
			position = 0;
		}
		jQuery("html, body").animate(
			{
				scrollTop: position
			},
			speed
		);
		return false;
	});

	// パララックス
	jQuery(window).on("load scroll", function() {
		let jsAnim = jQuery(".js-anim");
		let isAnimate = "is-anim";

		jsAnim.each(function() {
			let winScroll = jQuery(window).scrollTop();
			let winHeight = jQuery(window).height();
			let scrollPos = winScroll + winHeight;
			let buffer = 100; // 表示領域に入ってからクラス付与までの距離

			if (jQuery(this).offset().top < scrollPos - buffer) {
				jQuery(this).addClass(isAnimate);
			}
		});
	});

	// Swiper
	// https://idangero.us/swiper/
	let swiper = new Swiper(".swiper-container", {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: true
		},
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
			clickable: true
		},
		speed: 300,
		slidesPerView: 1,
		spaceBetween: 0,
		initialSlide: 0,
		effect: "slide" // fade
	});

	// Lightbox
	// https://lokeshdhakar.com/projects/lightbox2/
	lightbox.option({
		wrapAround: true
	});

	// 電話番号
	let ua = navigator.userAgent;
	if (ua.indexOf("iPhone") < 0 && ua.indexOf("Android") < 0) {
		jQuery('a[href^="tel:"]')
			.css("cursor", "default")
			.on("click", function(e) {
				e.preventDefault();
			});
	}
});
