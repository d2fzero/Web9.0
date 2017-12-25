var source =Document.getElementById('girl_list');
var template =handlebar.compile(source);
var pagetoLoad =0;
function loadNextPage(){

}$.ajax({
  url:'/api/images/page/0'
}).then(
  (data) =>{
    $(#"girl_list").html(template({image:data}));
    if($body).height().append(template({imgage}))
  },
  (err) =>{
    console.log(err)
  }
);
function  checkEndLessScrolling() {
  if($(window).height()+$(window).scrolltop>$('body').height()-$(widow).height()/2) loadNextPage()
}

$(window).on('scroll',checkEndLessScrolling);
loadNextPage()
Nguyen Thai minh
