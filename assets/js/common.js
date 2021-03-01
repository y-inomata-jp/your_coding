$(function () {
  $('.un-faq-table th').on('click', function () {
    $(this).parent().next().children().slideToggle();
  });
});

$(function () {
  $('.el-menu').on('click', function () {
    $('.el-hamburgerNav').slideToggle();
  });
});

$(function () {
  AOS.init({
    duration: 2000
    });
});

$(function () {
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 56,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      991: {
          slidesPerView:4,
          spaceBetween: 56,
      },
    },
  });
});

$(function(){
  var scroll = new SmoothScroll('a[href*="#"]',{
    header: '[data-scroll-header]'
  });
});

$(function(){
  $('#agree').change(function() {
    var flag = $('#agree').prop("checked");
    if(flag){
      $('.bl-form-submitBtn').removeClass('btn-disabled');
      $('.bl-form-submitBtn').prop("disabled", false);
    } else {
      $('.bl-form-submitBtn').addClass('btn-disabled');
      $('.bl-form-submitBtn').prop("disabled", true);
    }
  });
});

$(function () {
  $('.bl-form-submitBtn').click(function(){

    //バリデーションメッセージクリア
    clearMessage();

    //バリデーション
    result = ceckInput();
    if(result){return false;}

    //メッセージ送信
    $('#bl-form').submit(function (e) {
      var formData = $('#bl-form').serialize();
      $.ajax({
        url: "https://docs.google.com/forms/u/2/d/e/1FAIpQLSdDPr9vCNZ8D4XSicnnmKiIeC1DDa6Uc7h37Y7KMHHQev6EMw/formResponse",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
            alert('お問い合わせが送信されました');
          }
        }
      });
      // return false;
      e.preventDefault();
    });
  })
});

function ceckInput() {
  errorFlag = false;

  var name = $('#contact-name').val();
  var email = $('#contact-mail').val();
  var contents = $('#contact-contents').val();

  if(!name){
    $('#form-labelName .el-validateMsg').show();
    errorFlag = true;
  }

  if(!email){
    $('#form-labelEmail .el-validateMsg').show();
    errorFlag = true;
  }

  if(!contents){
    $('#form-labelCont .el-validateMsg').show();
    errorFlag = true;
  }

  return errorFlag;
}

function clearMessage() {
  $('.el-validateMsg').hide();
}

$(function(){
  $('#agree').change(function() {
    var flag = $('#agree').prop("checked");
    if(flag){
      $('.bl-form-submitBtn').removeClass('is-disabled');
      $('.bl-form-submitBtn').prop("disabled", false);
    } else {
      $('.bl-form-submitBtn').addClass('is-disabled');
      $('.bl-form-submitBtn').prop("disabled", true);
    }
  });
});