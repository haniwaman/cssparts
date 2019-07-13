// .c-file-control
jQuery(".js-file").change(function() {
	jQuery(this)
		.siblings(".c-file-result")
		.show();
	jQuery(this)
		.siblings(".c-file-result")
		.text(jQuery(this).val());
});

// .c-drawer
jQuery(".js-drawer").on("click", function(e) {
	e.preventDefault();
	let target = jQuery(this).attr("data-target");
	jQuery("#" + target).toggleClass("is-checked");
	if (jQuery("#" + target).hasClass("is-checked")) {
		jQuery("#" + target)
			.children(".e-text")
			.text("CLOSE");
	} else {
		jQuery("#" + target)
			.children(".e-text")
			.text("MENU");
	}
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
	let target = jQuery(this).attr("data-target");
	jQuery("#" + target).slideToggle();
	return false;
});
