/*
Author       : Dreamguys
Template Name: Doccure - Bootstrap Admin Template
Version      : 1.0
*/

(function($) {
    "use strict";
	
	// Variables declarations
	
	var $wrapper = $('.main-wrapper');
	var $pageWrapper = $('.page-wrapper');
	var $slimScrolls = $('.slimscroll');
	
	
		
	// Sidebar
	var Sidemenu = function () {
		this.$menuItem = $('#sidebar-menu a');
	};

	function init() {
		var $this = Sidemenu;
		$('#sidebar-menu a').on('click', function (e) {
			if ($(this).parent().hasClass('submenu')) {
				e.preventDefault();
			}
			if (!$(this).hasClass('subdrop')) {
				$('ul', $(this).parents('ul:first')).slideUp(350);
				$('a', $(this).parents('ul:first')).removeClass('subdrop');
				$(this).next('ul').slideDown(350);
				$(this).addClass('subdrop');
			} else if ($(this).hasClass('subdrop')) {
				$(this).removeClass('subdrop');
				$(this).next('ul').slideUp(350);
			}
		});
		$('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
	}
	
	// Sidebar Initiate
	init();
	
	// Mobile menu sidebar overlay
	$('body').append('<div class="sidebar-overlay"></div>');
	$(document).on('click', '#mobile_btn', function () {
		$wrapper.toggleClass('slide-nav');
		$('.sidebar-overlay').toggleClass('opened');
		$('html').toggleClass('menu-opened');
		return false;
	});
	
	// Sidebar overlay
	$(".sidebar-overlay").on("click", function () {
		$wrapper.removeClass('slide-nav');
		$(".sidebar-overlay").removeClass("opened");
		$('html').removeClass('menu-opened');
	});
	// Logo Hide Btn

	$(document).on("click",".logo-hide-btn",function () {
		$(this).parent().hide();
	});

	// Page Content Height
	if ($('.page-wrapper').length > 0) {
		var height = $(window).height();
		$(".page-wrapper").css("min-height", height);
	}
	
	// Page Content Height Resize
	$(window).resize(function () {
		if ($('.page-wrapper').length > 0) {
			var height = $(window).height();
			$(".page-wrapper").css("min-height", height);
		}
	});
		// Experience Add More
	
    $(".settings-form").on('click','.trash', function () {
		$(this).closest('.links-cont').remove();
		return false;
    });

    $(document).on("click",".add-links",function () {
		var experiencecontent = '<div class="row form-row links-cont">' +
			'<div class="col-12 col-md-11">' +
				'<div class="form-group d-flex">' +
					'<button class="btn social-icon"><i class="feather-github"></i></button>' +
					'<input type="text" class="form-control" placeholder="Social Link">' +
				'</div>' +
			'</div>' +
			'<div class="col-12 col-md-1 col-lg-1"><a href="#" class="btn trash"><i class="feather-trash-2"></i></a></div>' +
		'</div>';
		
        $(".settings-form").append(experiencecontent);
        return false;
    });

     // Editor
	if ($('#editor').length > 0) {
		ClassicEditor
		.create( document.querySelector( '#editor' ), {
			 toolbar: [  'bold', 'italic', 'link' ]
		} )
		.then( editor => {
			window.editor = editor;
		} )
		.catch( err => {
			console.error( err.stack );
		} );
	}
	// Select 2
	if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
	
	// Datetimepicker
	
	if($('.datetimepicker').length > 0 ){
		$('.datetimepicker').datetimepicker({
			format: 'DD-MM-YYYY',
			icons: {
				up: "fas fa-angle-up",
				down: "fas fa-angle-down",
				next: 'fas fa-angle-right',
				previous: 'fas fa-angle-left'
			}
		});
	}
	
	$('.custom-file-upload input').change(function() {
		var filename = $(this).val();
		$(this).next().html(filename);
		$(this).prev().hide();
	});
	
	$('.change-photo-btn input').change(function() {
		var filename = $(this).val();
		$(this).next().html(filename);
		$(this).prev().hide();
	});
	
	// Tooltip
	if ($('[data-toggle="tooltip"]').length > 0) {
		$('[data-toggle="tooltip"]').tooltip();
	}
	
	// Datatable
	if ($('.datatable').length > 0) {
		$('#data-tables').DataTable({
			"language": {
			//	search: ' ',
			//	searchPlaceholder: "Search...",
				paginate: {
				  next: 'Next <i class="fas fa-chevron-right ms-2"></i>',
				  previous: '<i class="fas fa-chevron-left me-2"></i> Previous'
			  
				}
			 },
		//	"bInfo": false,
			"bFilter": false,
			"bInfo": false,
			"bLengthChange": false,
			initComplete: (settings, json)=>{
				$('.dataTables_paginate').appendTo('#tablepagination');
			//	$('.dataTables_filter').appendTo('#tableSearch');
			},			
		});
	}
	
	if ($('#data-table').length > 0) {
		$('#data-table').DataTable({
			"language": {
				search: ' ',
				searchPlaceholder: "Search...",
				paginate: {
				  next: 'Next <i class="fas fa-chevron-right ms-2"></i>',
				  previous: '<i class="fas fa-chevron-left me-2"></i> Previous'
			  
				}
			 },
			"bFilter": true,
			"bInfo": false,
			"bLengthChange": false,
			initComplete: (settings, json)=>{
				$('.dataTables_paginate').appendTo('#tablepagination');
				$('.dataTables_filter').appendTo('#tableSearch');
			},		
		});
	}
	
	// Date Range Picker
	if($('.bookingrange').length > 0) {
		var start = moment().subtract(6, 'days');
		var end = moment();

		function booking_range(start, end) {
			$('.bookingrange span').html(start.format('M/D/YYYY') + ' - ' + end.format('M/D/YYYY'));
		}

		$('.bookingrange').daterangepicker({
			startDate: start,
			endDate: end,
			ranges: {
				'Today': [moment(), moment()],
				'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'Last 7 Days': [moment().subtract(6, 'days'), moment()],
				'Last 30 Days': [moment().subtract(29, 'days'), moment()],
				'This Month': [moment().startOf('month'), moment().endOf('month')],
				'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
			}
		}, booking_range);

		booking_range(start, end);
	}
	
	//Checkbox Select
	
	if($('.multipleSelection').length > 0) {
		var show = true;
		var checkboxes = document.getElementById("checkBoxes");
		$('.selectBox').on("click", function() {
			
			if (show) {
				checkboxes.style.display = "block";
				show = false;
			} else {
				checkboxes.style.display = "none";
				show = true;
			}
		});
		
	}

	//Checkbox Select
	
	if($('.SortBy').length > 0) {
		var show = true;
		var checkbox1 = document.getElementById("checkBox");
		$('.selectBoxes').on("click", function() {
			
			if (show) {
				checkbox1.style.display = "block";
				show = false;
			} else {
				checkbox1.style.display = "none";
				show = true;
			}
		});		
	}
	
	//clinic slider
	if($('.owl-carousel.appointment-slider').length > 0) {
		$('.owl-carousel.appointment-slider').owlCarousel({
			loop:true,
			margin:15,
			dots: false,
			nav:true,
			navContainer: '.slide-nav-3',
			navText: [ '<i class="fas fa-chevron-left custom-arrow"></i>', '<i class="fas fa-chevron-right custom-arrow"></i>' ], 
			responsive:{
				0:{
					items:1
				},
				500:{
					items:1
				},
				768:{
					items:2
				},
				1350:{
					items:3
				}
			}
		})	
	}
	
	if($('.pricing-carousel').length > 0 ){
		$('.pricing-carousel').owlCarousel({
	        loop:true,
			margin:10,
			dots: false,
			nav:true,
			navText: [
				'<i class="fas fa-chevron-left"></i>',
				'<i class="fas fa-chevron-right"></i>'
			],
	        responsive: {
	          	0: {
	            	items: 1
	          	},
	          	480 : {
	            	items: 2,
					margin: 10
	          	},
	          	576 : {
	            	items: 2,
					margin: 15
	          	},
	          	768 : {
	            	items: 2,
					margin: 15
	          	},
	          	992 : {
	            	items: 2,
					margin: 15
	          	},
	          	1170: {
	            	items: 2,
					margin: 15
	          	},
	          	1550: {
	            	items: 5
	          	}
	        }
	    });
    }
	
	$(document).ready(function(){
		if(window.location.hash == "#DarkMode"){
			document.body.classList.add('darkmode');
			localStorage.setItem('darkMode', 'enabled');
		}
	});
	
	// DarkMode with LocalStorage
	if($('#dark-mode-toggle').length > 0) {
		$("#dark-mode-toggle").children("i:first").addClass("active");
		let darkMode = localStorage.getItem('darkMode'); 
		
		const darkModeToggle = document.querySelector('#dark-mode-toggle');
		
		const enableDarkMode = () => {
			document.body.classList.add('darkmode');
			$("#dark-mode-toggle").children("i:last").addClass("active");
			$("#dark-mode-toggle").children("i:first").removeClass("active");
			localStorage.setItem('darkMode', 'enabled');
		}

		const disableDarkMode = () => {
		  document.body.classList.remove('darkmode');
			$("#dark-mode-toggle").children("i:last").removeClass("active");
			$("#dark-mode-toggle").children("i:first").addClass("active");
		  localStorage.setItem('darkMode', null);
		}
		 
		if (darkMode === 'enabled') {
			enableDarkMode();
		}

		darkModeToggle.addEventListener('click', () => {
		  darkMode = localStorage.getItem('darkMode'); 
		  
		  if (darkMode !== 'enabled') {
			enableDarkMode();
		  } else {  
			disableDarkMode(); 
		  }
		});
	}
	
	// Floating Label

	if($('.floating').length > 0 ){
		$('.floating').on('focus blur', function (e) {
		$(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
		}).trigger('blur');
	}
	
	// Sidebar Slimscroll
	if ($slimScrolls.length > 0) {
		$slimScrolls.slimScroll({
			height: 'auto',
			width: '100%',
			position: 'right',
			size: '7px',
			color: '#ccc',
			allowPageScroll: false,
			wheelStep: 10,
			touchScrollStep: 100
		});
		var wHeight = $(window).height() - 60;
		$slimScrolls.height(wHeight);
		$('.sidebar .slimScrollDiv').height(wHeight);
		$(window).resize(function () {
			var rHeight = $(window).height() - 60;
			$slimScrolls.height(rHeight);
			$('.sidebar .slimScrollDiv').height(rHeight);
		});
	}
	
	// Password Show
	
	if($('.toggle-password').length > 0) {
		$(document).on('click', '.toggle-password', function() {
			$(this).toggleClass("fa-eye fa-eye-slash");
			var input = $(".pass-input");
			if (input.attr("type") == "password") {
				input.attr("type", "text");
			} else {
				input.attr("type", "password");
			}
		});
	}

	// Check all email
	
	$(document).on('click', '#check_all', function() {
		$('.checkmail').click();
		return false;
	});
	if($('.checkmail').length > 0) {
		$('.checkmail').each(function() {
			$(this).on('click', function() {
				if($(this).closest('tr').hasClass('checked')) {
					$(this).closest('tr').removeClass('checked');
				} else {
					$(this).closest('tr').addClass('checked');
				}
			});
		});
	}
	
	// Mail important
	
	$(document).on('click', '.mail-important', function() {
		$(this).find('i.fa').toggleClass('fa-star').toggleClass('fa-star-o');
	});
	
	// Small Sidebar
	$(document).on('click', '#toggle_btn', function () {
		if ($('body').hasClass('mini-sidebar')) {
			$('body').removeClass('mini-sidebar');
			$('.subdrop + ul').slideDown();
		} else {
			$('body').addClass('mini-sidebar');
			$('.subdrop + ul').slideUp();
		}
		return false;
	});
	
	$(document).on('mouseover', function (e) {
		e.stopPropagation();
		if ($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
			var targ = $(e.target).closest('.sidebar').length;
			if (targ) {
				$('body').addClass('expand-menu');
				$('.subdrop + ul').slideDown();
			} else {
				$('body').removeClass('expand-menu');
				$('.subdrop + ul').slideUp();
			}
			return false;
		}
	});
	
	$(document).on('click', '#filter_search', function() {
		$('#filter_inputs').slideToggle("slow");
	});
	
	
	// Tooltip
	
	if($('[data-bs-toggle="tooltip"]').length > 0) {
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		  return new bootstrap.Tooltip(tooltipTriggerEl)
		})
	}
	
	// Popover
	
	if($('.popover-list').length > 0) {
		var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
		var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		  return new bootstrap.Popover(popoverTriggerEl)
		})
	}
	
	//Show div based on select
	
	if($('#selectval').length > 0) {
		$("#selectval").on('change', function () {
			if ($(this).val() == "video") {
				$("#videoId").show();
			} else {
				$("#videoId").hide();
			}
		});
	}	
	
	
})(jQuery);