"use strict";$(function(){$(document).on("click.qor.alert",'[data-dismiss="alert"]',function(){$(this).closest(".qor-alert").remove()}),setTimeout(function(){$('.qor-alert[data-dismissible="true"]').remove()},5e3)}),$(function(){var e=$(".qor-page__body > .qor-form-container > form");$(".qor-error > li > label").each(function(){var o=$(this),a=o.attr("for");a&&e.find("#"+a).closest(".qor-field").addClass("is-error").append(o.clone().addClass("qor-field__error"))})}),$(function(){$(document).on("click",".qor-dialog--global-search",function(e){e.stopPropagation(),$(e.target).parents(".qor-dialog-content").length||$(e.target).is(".qor-dialog-content")||$(".qor-dialog--global-search").remove()}),$(document).on("click",".qor-global-search--show",function(e){e.preventDefault();var o=$(this).data(),a=window.Mustache.render('<div class="qor-dialog qor-dialog--global-search" tabindex="-1" role="dialog" aria-hidden="true"><div class="qor-dialog-content"><form action=[[actionUrl]]><div class="mdl-textfield mdl-js-textfield" id="global-search-textfield"><input class="mdl-textfield__input ignore-dirtyform" name="keyword" id="globalSearch" value="" type="text" placeholder="" /><label class="mdl-textfield__label" for="globalSearch">[[placeholder]]</label></div></form></div></div>',o);$("body").append(a),window.componentHandler.upgradeElement(document.getElementById("global-search-textfield")),$("#globalSearch").focus()})}),$(function(){var e=[],o=localStorage.getItem("qoradmin_menu_status");o&&o.length&&(e=o.split(",")),$(".qor-menu-container").on("click","> ul > li > a",function(){var o=$(this),a=o.parent(),t=o.next("ul"),n=a.attr("qor-icon-name");t.length&&(t.hasClass("in")?(e.push(n),a.removeClass("is-expanded"),t.one("transitionend",function(){t.removeClass("collapsing in")}).addClass("collapsing").height(0)):(e=_.without(e,n),a.addClass("is-expanded"),t.one("transitionend",function(){t.removeClass("collapsing")}).addClass("collapsing in").height(t.prop("scrollHeight"))),localStorage.setItem("qoradmin_menu_status",e))}).find("> ul > li > a").each(function(){var o=$(this),a=o.parent(),t=o.next("ul"),n=a.attr("qor-icon-name");t.length&&(t.addClass("collapse"),a.addClass("has-menu"),-1!=e.indexOf(n)?t.height(0):(a.addClass("is-expanded"),t.addClass("in").height(t.prop("scrollHeight"))))});var a=$(".qor-page > .qor-page__header"),t=$(".qor-page > .qor-page__body"),n=a.find(".qor-page-subnav__header").length?96:48;a.length&&(a.height()>n&&t.css("padding-top",a.height()),$(".qor-page").addClass("has-header"),$("header.mdl-layout__header").addClass("has-action"))}),$(function(){$(".qor-mobile--show-actions").on("click",function(){$(".qor-page__header").toggleClass("actions-show")})}),$(function(){function e(e){$("[data-url]").removeClass(r),e&&e.length&&e.addClass(r)}function o(){var e=$(".qor-js-table tbody").find(".mdl-checkbox__input:checked"),o=[];return!!e.length&&(e.each(function(){o.push($(this).closest("tr").data("primary-key"))}),o)}var a=$("body"),t=void 0,n=void 0,r="is-selected",l=function(){return a.hasClass("qor-slideout-open")},s=function(){return a.hasClass("qor-bottomsheets-open")};a.qorBottomSheets(),a.qorSlideout(),t=a.data("qor.slideout"),n=a.data("qor.bottomsheets"),$(document).on("click.qor.openUrl","[data-url]",function(a){var i=$(this),d=$(a.target),c=i.hasClass("qor-button--new"),h=i.hasClass("qor-button--edit"),u=(i.is(".qor-table tr[data-url]")||i.closest(".qor-js-table").length)&&!i.closest(".qor-slideout").length,g=i.data(),p=void 0,m=g.openType,f=i.parents(".qor-theme-slideout").length,q=i.hasClass("qor-action-button")||i.hasClass("qor-action--button");if(a.stopPropagation(),!(i.data("ajax-form")||d.closest(".qor-table--bulking").length||d.closest(".qor-button--actions").length||!d.data("url")&&d.is("a")||u&&s()))return q&&(p=o())&&(g=$.extend({},g,{actionData:p})),g.$target=d,g.method&&"GET"!=g.method.toUpperCase()?void 0:"bottomsheet"!=m&&!q||"slideout"==m?"slideout"==m||u||c&&!s()||h?"slideout"==m||f?i.hasClass(r)?(t.hide(),e(),!1):(t.open(g),e(i),!1):(window.location=g.url,!1):l()||c&&s()?(n.open(g),!1):f?(t.open(g),!1):(n.open(g),!1):q&&!p&&i.closest('[data-toggle="qor.action.bulk"]').length?(window.QOR.qorConfirm(g.errorNoItem),!1):(n.open(g),!1)})}),$(function(){var e=window.location;$(".qor-search").each(function(){var o=$(this),a=o.find(".qor-search__input"),t=o.find(".qor-search__clear"),n=!!a.val(),r=function(){"?"==e.search.replace(new RegExp(a.attr("name")+"\\=?\\w*"),"")?e.href=e.href.split("?")[0]:e.search=e.search.replace(new RegExp(a.attr("name")+"\\=?\\w*"),"")};o.closest(".qor-page__header").addClass("has-search"),$("header.mdl-layout__header").addClass("has-search"),t.on("click",function(){a.val()||n?r():o.removeClass("is-dirty")})})});