// .c-file-control
jQuery('.c-file-control input[type="file"]').change(function() {
	jQuery(".c-file-result").show();
	jQuery(".c-file-result").text(jQuery(this).val());
});
