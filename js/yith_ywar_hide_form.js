jQuery(document).ready(function ($) {

    var title_form =  $( '#review_form_wrapper .comment-form-title');
    var comment_form =  $( '#review_form_wrapper .comment-form-comment');
    var upload_form =  $( '#review_form_wrapper p.upload_section');
    var submit_form =  $( '#review_form_wrapper .form-submit');
    var author_name =  $( '#review_form_wrapper .comment-form-author');
    var author_email =  $( '#review_form_wrapper .comment-form-email');


    if (title_form.length )
        title_form.hide();
    if (comment_form.length )
        comment_form.hide();
    if (upload_form.length )
        upload_form.hide();
    if (submit_form.length )
        submit_form.hide();
    if (author_name.length )
        author_name.hide();
    if (author_email.length )
        author_email.hide();


  $('#cancel-comment-reply-link').on('click', function (e) {
   if (title_form.length )
        title_form.hide();
    if (comment_form.length )
        comment_form.hide();
    if (upload_form.length )
        upload_form.hide();
    if (submit_form.length )
        submit_form.hide();
    if (author_name.length )
        author_name.hide();
    if (author_email.length )
        author_email.hide();

    });
    
    
    $( document ).on('click', 'a.comment-reply-link', function (e) {
		 if (title_form.length )
            title_form.show();
        if (comment_form.length )
            comment_form.show();
        if (upload_form.length )
            upload_form.show();
        if (submit_form.length )
            submit_form.show();
        if (author_name.length )
            author_name.show();
        if (author_email.length )
            author_email.show();
    });
    
    $( document ).on('click', 'a.comment-edit-link', function (e) {
		 if (title_form.length )
            title_form.show();
        if (comment_form.length )
            comment_form.show();
        if (upload_form.length )
            upload_form.show();
        if (submit_form.length )
            submit_form.show();
        if (author_name.length )
            author_name.show();
        if (author_email.length )
            author_email.show();
    });


    $('#review_form #respond #commentform .comment-form-rating p.stars').on('click', 'a', function (e) {

        if (title_form.length )
            title_form.show();
        if (comment_form.length )
            comment_form.show();
        if (upload_form.length )
            upload_form.show();
        if (submit_form.length )
            submit_form.show();
        if (author_name.length )
            author_name.show();
        if (author_email.length )
            author_email.show();
    });
    
    

});