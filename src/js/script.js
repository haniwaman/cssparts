// .c-file
jQuery(".js-file").change(function() {
	jQuery(this)
		.siblings(".c-file__result")
		.show();
	jQuery(this)
		.siblings(".c-file__result")
		.text(jQuery(this).val());
});

// .c-drawer
jQuery(".js-drawer").on("click", function(e) {
	e.preventDefault();
	jQuery(this)
		.parent()
		.toggleClass("is-checked");
	return false;
});

// .c-modal
jQuery(".js-modal").on("click", function(e) {
	e.preventDefault();
	let target = jQuery(this).attr("data-target");
	jQuery("#" + target).toggleClass("is-checked");
	return false;
});

// .c-accordion
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

// .c-tab
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

// SmoothScroll
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

// スクロールしたら処理
jQuery(window).on("scroll", function() {
	if (100 < jQuery(this).scrollTop()) {
		jQuery(".l-header").addClass("is-scroll");
	} else {
		jQuery(".l-header").removeClass("is-scroll");
	}
});

// パララックス
jQuery(window).on("load scroll", function() {
	var elemAnim = jQuery(".js-anim");
	var isAnimate = "is-anim";

	elemAnim.each(function() {
		var winScroll = jQuery(window).scrollTop();
		var winHeight = jQuery(window).height();
		var scrollPos = winScroll + winHeight;
		var buffer = 100; // 表示領域に入ってからクラス付与までの距離

		if (jQuery(this).offset().top < scrollPos - buffer) {
			jQuery(this).addClass(isAnimate);
		}
	});
});

// Swiper
var swiper = new Swiper(".swiper-container", {
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
lightbox.option({
	wrapAround: true
});
