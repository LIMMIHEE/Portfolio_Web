var Main_info_num =0;
var Main_info_name= [ '첫번쨰 프로젝트','두번째 프로젝트','세번째 프로젝ㅌ,'];
var Main_info_team= [ '개인','팀','개인'];
var Main_info_simple_info= [ 'dlfjznfwjfjznfdlfjzndwjfjznf','이 프로그램은 아무생각없이 만든 프로그램입니다','이 프로젝트는 게임을 좋아하는 제가 어쩌구 저쩌구 하면서'];

function Main_info_num_change (  i ){
    Main_info_num=i;
    Main_info_chage();
}

function Main_info_chage (){
        document.getElementById("pro-name").innerHTML = Main_info_name[Main_info_num];
        document.getElementById("pro-team").innerHTML = Main_info_team[Main_info_num];
        document.getElementById("pro-sinfo").innerHTML = Main_info_simple_info[Main_info_num];
}


var Details_info_num=0;
var Dinfo_name= [ '첫번쨰 프로젝트','두번째 프로젝트','세번째 프로젝ㅌ,'];
var Dinfo_team= [ '개인','팀','개인'];
var Dinfo_info= [ 'dlfjznfwjfjznfdlfjzndwjfjznf','이 프로그램은 아무생각없이 만든 프로그램입니다','이 프로젝트는 게임을 좋아하는 제가 어쩌구 저쩌구 하면서'];

function Details_num_change(i){
    Details_info_num=i;
}
function Details_info_chage ( ){
    document.getElementById("Pro_name").innerHTML = Dinfo_name[Details_info_num];
    document.getElementById("Pro_team_or").innerHTML = Dinfo_team[Details_info_num];
    document.getElementById("introduction").innerHTML = Dinfo_info[Details_info_num];
}