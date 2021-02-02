declare var $: JQueryStatic;
import "./less/style.less";
import "./js/analytics";
import "./js/app";

interface IJSONInput {
    name: string;
    email: string;
    message: string;
    subject: string;
    recaptchaResponse: string;
}

declare var window: any;

$("#contact-footer").on("sumbit", function (e: JQuery.Event) {
    e.preventDefault();
    submitFooterContactForm();
});

$("#contactForm").on("submit", function (e: JQuery.Event) {
    e.preventDefault();
    submitContactForm();
});

function submitContactForm() {
    //Get the input data
    var contactInput: IJSONInput = <IJSONInput>{
        name: $("#name").val(),
        email: $("#email").val(),
        subject: $("#subject").val(),
        message: $("#message").val(),
        recaptchaResponse: grecaptcha.getResponse(contactWidgetID),
    };

    //Validation
    if (contactInput.name === "" || contactInput.name === null) {
        setContactError("Please enter your name.");
        return;
    }

    if (contactInput.email === "" || contactInput.email === null) {
        setContactError("Please enter your email address.");
        return;
    }

    if (contactInput.subject === "" || contactInput.subject === null) {
        setContactError("Please enter a subject line.");
        return;
    }

    if (contactInput.subject === "" || contactInput.subject === null) {
        setContactError("Please enter a message body.");
        return;
    }

    if (contactInput.recaptchaResponse === "") {
        setContactError(
            "Please solve the CAPTCHA to confirm you are not a robot."
        );
        return;
    }

    $.ajax({
        url: "/api/contact",
        method: "POST",
        data: JSON.stringify(contactInput),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .done(function () {
            setContactSuccess(
                "Successfully sent an email to Coastal Concepts. We will reply as soon as possible."
            );
        })
        .fail(function () {
            setContactError(
                "An error occurred while sending the email to Coastal Concepts. Apologies for the inconvenience."
            );
        });
}

function submitFooterContactForm() {
    //Get the input data
    var contactInput: IJSONInput = <IJSONInput>{};
    contactInput.name = $("#contact-footer-name").val() as string;
    contactInput.email = $("#contact-footer-email").val() as string;
    contactInput.subject = $("#contact-footer-subject").val() as string;
    contactInput.message = $("#contact-footer-message").val() as string;
    contactInput.recaptchaResponse = grecaptcha.getResponse(footerWidgetID);

    //Validation
    if (contactInput.name === "" || contactInput.name === null) {
        setFooterContactError("Please enter your name.");
        return;
    }

    if (contactInput.email === "" || contactInput.email === null) {
        setFooterContactError("Please enter your email address.");
        return;
    }

    if (contactInput.subject === "" || contactInput.subject === null) {
        setFooterContactError("Please enter a subject line.");
        return;
    }

    if (contactInput.subject === "" || contactInput.subject === null) {
        setFooterContactError("Please enter a message body.");
        return;
    }

    if (contactInput.recaptchaResponse === "") {
        setFooterContactError(
            "Please solve the CAPTCHA to confirm you are not a robot."
        );
        return;
    }

    var ajaxSettings: JQueryAjaxSettings = {};
    ajaxSettings.url = "/api/contact";
    ajaxSettings.method = "POST";
    ajaxSettings.data = JSON.stringify(contactInput);
    ajaxSettings.headers = {
        "Content-Type": "application/json",
    };

    $.ajax(ajaxSettings)
        .done(function (data, statusCode: string, jqXHR: JQueryXHR) {
            setFooterContactSuccess(
                "Successfully sent an email to Coastal Concepts. We will reply as soon as possible."
            );
        })
        .fail(function (jqXHR: JQueryXHR, statusCode: string, error) {
            setFooterContactError(
                "An error occurred while sending the email to Coastal Concepts. Apologies for the inconvenience."
            );
        });
}

function setFooterContactSuccess(message: string) {
    unHideFooterContactStatus();
    $("#contact-footer-status-message > p")
        .toggleClass("success", true)
        .toggleClass("error", false)
        .text(message);
}

function setFooterContactError(message: string) {
    unHideFooterContactStatus();
    $("#contact-footer-status-message > p")
        .toggleClass("success", false)
        .toggleClass("error", true)
        .text(message);
}

function unHideFooterContactStatus() {
    $("#contact-footer-status-message").toggleClass("hidden", false);
}

function setContactSuccess(message: string) {
    unHideContactStatus();
    $("#contact-form-status-message > p")
        .toggleClass("success", true)
        .toggleClass("error", false)
        .text(message);
}

function setContactError(message: string) {
    unHideContactStatus();
    $("#contact-form-status-message > p")
        .toggleClass("success", false)
        .toggleClass("error", true)
        .text(message);
}

function unHideContactStatus() {
    $("#contact-form-status-message").toggleClass("hidden", false);
}

var footerWidgetID: number;
var contactWidgetID: number;

window.onloadCallback = function () {
    footerWidgetID = grecaptcha.render("contactFooterCaptcha", {
        sitekey: "6LcuCAwTAAAAAH0a-M6a9YFW29PXgWBejcRdLZhO",
    });

    contactWidgetID = grecaptcha.render("contactCaptcha", {
        sitekey: "6LcuCAwTAAAAAH0a-M6a9YFW29PXgWBejcRdLZhO",
    });
};

export function dropdownHover(arg0: {
    instantlyCloseOthers: boolean;
    delay: number;
}) {
    throw new Error("Function not implemented.");
}
