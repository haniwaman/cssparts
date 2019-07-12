// .c-file-control
jQuery('.c-file-control input[type="file"]').change(function() {
	jQuery(".c-file-result").show();
	jQuery(".c-file-result").text(jQuery(this).val());
});

// .c-drawer > .e-hamburger
jQuery(".c-drawer > .e-hamburger, .c-drawer > .e-close").on("click", function() {
	jQuery(this)
		.parent(".c-drawer")
		.toggleClass("is-checked");
	if (
		jQuery(this)
			.parent(".c-drawer")
			.hasClass("is-checked")
	) {
		jQuery(this)
			.children(".e-text")
			.text("CLOSE");
	} else {
		jQuery(this)
			.children(".e-text")
			.text("MENU");
	}
});
