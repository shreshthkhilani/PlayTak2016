$(document).ready(function() {
    var getUrlParameter = function (sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };

    var r = getUrlParameter("r");

    if (r === 'Kevin+Rodden' ||
        r === 'Reya+Zaveri' ||
        r === 'Taha+Tariq' ||
        r === 'Rohan+Bhide' ||
        r === 'Meghan+Swyryn' ||
        r === 'Susanna+Jaramillo' ||
        r === 'Elijah+Cory' ||
        r === 'Josh+Ogunleye' ||
        r === 'Jordan+Miller' ||
        r === 'Mikey+Miller' ||
        r === 'Greg+Olberding' ||
        r === 'Kyla+Balkan' ||
        r === 'Irtaza+Ali' ||
        r === 'Claris+Park' ||
        r === 'Ardita+Koka' ||
        r === 'Meerabelle+Jesuthasan' ||
        r === 'Danny+Fradin' ||
        r === 'Noah+Lee' ||
        r === 'Sam+Warrick' ||
        r === 'Shaishvi+Shrivastava' ||
        r === 'Shreshth+Khilani' ||
        r === 'Emma+Lee' ||
        r === 'Percia+Verlin' ||
        r === 'Priyanshi+Pokharna' ||
        r === 'Allison+Day' ||
        r === 'Chad+Haddad' ||
        r === 'Danielle+Freid' ||
        r === 'Carly+Miron' ||
        r === 'Mounika+Burugupalli' ||
        r === 'Grayce+Hoffman' ||
        r === 'Mikie+Sakanaka' ||
        r === 'Alicia+Lu' ||
        r === 'Anna+Dailey' ||
        r === 'Sarah+Zerod') {
      r = r.replace('+',' ');
      $('#refname').val(r);
    }

    $("#navUpcoming").addClass("active");
    $("#navUpcoming2").addClass("active");

    $("#venmo-btn").click(function() {
      var url = "https://venmo.com/?txn=pay&recipients=MikeyMiller&audience=public";
      var tcks = $("#ticketNumber").val();
      var amt = tcks * 9;
      /*if (tcks >= 6)
        amt = tcks * 7;*/
      var name = $("#nameInput").val();
      if (name == "") {
        $("#divName").addClass("has-error");
        return false;
      }
      else if (tcks < 1 || tcks % 1 != 0) {
        $("#divTck").addClass("has-error");
        return false;
      }
      var ref = $("#refname").val();
      var day = $("input[name=optionsRadios]:checked").val();
      var amount = "&amount=" + amt;
      var note = "&note=OneActs2016%20Tickets%20(" + encodeURIComponent(name) + "%2C" + tcks + "%2C" + day + "%2C" + encodeURIComponent(ref) + ")";
      url = url + amount + note;
      window.location.href = url;
      return false;
    });

    $("#nameInput").change(function() {
      var name = $("#nameInput").val();
      if (name == "") {
        $("#divName").removeClass("has-success");
        $("#divName").addClass("has-error");
      }
      else {
        $("#divName").addClass("has-success");
        $("#divName").removeClass("has-error");
      }
    });

    $("#ticketNumber").change(function() {
      var t = $("#ticketNumber").val();
      if (t < 1 || t % 1 != 0) {
        $("#divTck").removeClass("has-success");
        $("#divTck").addClass("has-error");
      }
      else {
        $("#divTck").addClass("has-success");
        $("#divTck").removeClass("has-error");
      }
    });
});