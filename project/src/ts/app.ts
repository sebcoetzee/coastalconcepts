/// <reference path="../typings/tsd.d.ts" />

interface IJSONInput {

    "name": string;
    "email": string;
    "message": string;
    "subject": string;
    "recaptchaResponse": string;

}

var onloadCallback;

(function() {

    $("#contact-footer").submit(
        function (e:Event) {

            e.preventDefault();
            submitFooterContactForm();

        }
    );

    $("#contactForm").submit(
        function (e:Event) {

            e.preventDefault();
            submitContactForm();

        }
    );

    function submitContactForm() {

        //Get the input data
        var contactInput: IJSONInput = <IJSONInput>{};
        contactInput.name = $('#name').val();
        contactInput.email = $('#email').val();
        contactInput.subject = $('#subject').val();
        contactInput.message = $('#message').val();
        contactInput.recaptchaResponse = grecaptcha.getResponse(contactWidgetID);

        //Validation
        if (contactInput.name === "" || contactInput.name === null){

            setContactError("Please enter your name.");
            return;

        }

        if (contactInput.email === "" || contactInput.email === null){

            setContactError("Please enter your email address.");
            return;

        }

        if (contactInput.subject === "" || contactInput.subject === null){

            setContactError("Please enter a subject line.");
            return;

        }

        if (contactInput.subject === "" || contactInput.subject === null){

            setContactError("Please enter a message body.");
            return;

        }

        if (contactInput.recaptchaResponse === ""){

            setContactError("Please solve the CAPTCHA to confirm you are not a robot.");
            return;

        }


        var ajaxSettings: JQueryAjaxSettings = {};
        ajaxSettings.url = "/api/contact";
        ajaxSettings.method = "POST";
        ajaxSettings.data = JSON.stringify(contactInput);
        ajaxSettings.headers = {
            "Content-Type": "application/json"
        };

        $.ajax(ajaxSettings)
            .done(
            function(data, statusCode: string, jqXHR: JQueryXHR){

                setContactSuccess("Successfully sent an email to Coastal Concepts. We will reply as soon as possible.");

            }
        )
            .fail(
            function(jqXHR: JQueryXHR, statusCode: string, error){

                setContactError("An error occurred while sending the email to Coastal Concepts. Apologies for the inconvenience.");

            }
        )

    }

    function submitFooterContactForm() {

        //Get the input data
        var contactInput: IJSONInput = <IJSONInput>{};
        contactInput.name = $('#contact-footer-name').val();
        contactInput.email = $('#contact-footer-email').val();
        contactInput.subject = $('#contact-footer-subject').val();
        contactInput.message = $('#contact-footer-message').val();
        contactInput.recaptchaResponse = grecaptcha.getResponse(footerWidgetID);

        //Validation
        if (contactInput.name === "" || contactInput.name === null){

            setFooterContactError("Please enter your name.");
            return;

        }

        if (contactInput.email === "" || contactInput.email === null){

            setFooterContactError("Please enter your email address.");
            return;

        }

        if (contactInput.subject === "" || contactInput.subject === null){

            setFooterContactError("Please enter a subject line.");
            return;

        }

        if (contactInput.subject === "" || contactInput.subject === null){

            setFooterContactError("Please enter a message body.");
            return;

        }

        if (contactInput.recaptchaResponse === ""){

            setFooterContactError("Please solve the CAPTCHA to confirm you are not a robot.");
            return;

        }


        var ajaxSettings: JQueryAjaxSettings = {};
        ajaxSettings.url = "/api/contact";
        ajaxSettings.method = "POST";
        ajaxSettings.data = JSON.stringify(contactInput);
        ajaxSettings.headers = {
            "Content-Type": "application/json"
        };

        $.ajax(ajaxSettings)
            .done(
                function(data, statusCode: string, jqXHR: JQueryXHR){

                    setFooterContactSuccess("Successfully sent an email to Coastal Concepts. We will reply as soon as possible.");

                }
            )
            .fail(
                function(jqXHR: JQueryXHR, statusCode: string, error){

                    setFooterContactError("An error occurred while sending the email to Coastal Concepts. Apologies for the inconvenience.");

                }
            )

    }

    function setFooterContactSuccess(message: string){

        unHideFooterContactStatus();
        $("#contact-footer-status-message > p")
            .toggleClass("success", true)
            .toggleClass("error", false)
            .text(message);

    }

    function setFooterContactError(message: string){

        unHideFooterContactStatus();
        $("#contact-footer-status-message > p")
            .toggleClass("success", false)
            .toggleClass("error", true)
            .text(message);

    }

    function unHideFooterContactStatus(){

        $("#contact-footer-status-message")
        .toggleClass("hidden", false);

    }

    function setContactSuccess(message: string){

        unHideContactStatus();
        $("#contact-form-status-message > p")
            .toggleClass("success", true)
            .toggleClass("error", false)
            .text(message);

    }

    function setContactError(message: string){

        unHideContactStatus();
        $("#contact-form-status-message > p")
            .toggleClass("success", false)
            .toggleClass("error", true)
            .text(message);

    }

    function unHideContactStatus(){

        $("#contact-form-status-message")
            .toggleClass("hidden", false);

    }

    var footerWidgetID: number;
    var contactWidgetID: number;

    onloadCallback = function () {
        footerWidgetID = grecaptcha.render(
            'contactFooterCaptcha',
            {
                'sitekey': '6LcuCAwTAAAAAH0a-M6a9YFW29PXgWBejcRdLZhO'
            }
        );

        contactWidgetID = grecaptcha.render(
            'contactCaptcha',
            {
                'sitekey': '6LcuCAwTAAAAAH0a-M6a9YFW29PXgWBejcRdLZhO'
            }
        );
    };



}).call(this);