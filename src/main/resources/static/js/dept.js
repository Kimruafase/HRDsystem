console.log("dept.js");


// ==================== 1. 부서 등록  ============================== //
function deptInput(){
    let deptInput = document.querySelector("#deptPost");
    let html = `<div>
                    <form>
                        부서 : <input id ="deptInput1" type="text"/> <br/>
                        전화번호 : <input id="phoneInput1" type="text"/> <br/>

                        <button onclick ="deptPost()" type ="button"> 부서 등록 </button>
                        <button onclick ="postClear()" type="button"> 지우기 </button>
                    </form>
                    </div>`;
    deptInput.innerHTML = html;
}

function deptPost(){
    let dept1 = document.querySelector("#deptInput1").value;
    let phone1 = document.querySelector("#phoneInput1").value;

    $.ajax({
        method : 'post',
        url : '/company/dept/post',
        data : {dName : dept1, dPhone : phone1},
        success : function response(result){
            console.log(result);
            if(result){
                alert("부서 등록 성공")
                location.href="dept";
            }else{
                alert("부서 등록 실패");
            }
        }
    })
}

function postClear(){
    let deptInput = document.querySelector("#deptPost");
    deptInput.innerHTML = `<div id = "deptPost">
                            <a onclick = "deptInput()">
                                부서 등록
                            </a>
                        </div>`;
                    
}

//  ============================== 2. 부서 출력 ============================== //

function deptGet(){
    $.ajax({
        method:'get',
        url:"/company/dept/print",
        success:function response(result){
            console.log(result);
            let deptPrint=document.querySelector("#deptGet");
            let html='';
            result.forEach(list =>{
                console.log(list);
                html+=`<tr>
                <td>번호 ${list.dno} </td>
                <td>부서명 ${list.dname}</td>
                <td>대표전화 ${list.dphone} </td>
             </tr><br>
             `;
            })
            html +=`<button onclick ="getClear()" type="button"> 지우기 </button>`;
            deptPrint.innerHTML=html;
        }
    })

}

function getClear(){
    let deptInput = document.querySelector("#deptGet");    
    deptInput.innerHTML = `<div id = "deptGet">
                            <a onclick = "deptGet()">
                                부서 전체 출력
                            </a>
                        </div>`;
}

//  ============================== 3. 부서 수정 ============================== //

function deptUpdateInput(){
    let deptInput = document.querySelector("#deptUpdate");
    let html = `<div>
                    <form>
                        수정할 부서 번호 : <input id ="deptInput2" type="text"/> <br/>
                        수정할 부서 이름 : <input id ="deptInput3" type="text"/> <br/>
                        수정할 전화번호 : <input id="phoneInput3" type="text"/> <br/>
                    
                        <button onclick ="deptUpdate()" type ="button"> 부서 수정 </button>
                        <button onclick ="updateClear()" type="button"> 지우기 </button>
                    </form>
                    </div>`;
    deptInput.innerHTML = html;
}

function deptUpdate(){
    let dept2 = document.querySelector("#deptInput2").value;
    let dept3 = document.querySelector("#deptInput3").value;
    let phone3 = document.querySelector("#phoneInput3").value;

    $.ajax({
        method : 'put',
        url : '/company/dept/put',
        data : {dNo : dept2, dName : dept3, dPhone : phone3},
        success : function response(result){
            console.log(result);
            if(result){
                alert("부서 수정 성공")
                location.href="dept";
            }else{
                alert("부서 수정 실패");
            }
        }
    })
}

function updateClear(){
    let deptInput = document.querySelector("#deptUpdate");
    deptInput.innerHTML = `<div id = "deptUpdate">
                            <a onclick = "deptUpdateInput()">
                                부서 수정
                            </a>
                        </div>`;
}

// =============================== 4. 부서 삭제 ==================================== //

function deptDeleteInput(){
    let deptInput = document.querySelector("#deptDelete");
    let html = `<div>
                    <form>
                        삭제할 부서 번호 : <input id ="deptInput4" type="text"/> <br/>
                    
                        <button onclick ="deptDelete()" type ="button"> 부서 삭제 </button>
                        <button onclick ="deleteClear()" type="button"> 지우기 </button>
                    </form>
                    </div>`;
    deptInput.innerHTML = html;
}

function deptDelete(){
    let dept4 = document.querySelector("#deptInput4").value;

    $.ajax({
        method : 'delete',
        url : '/company/dept/delete',
        data : {dNo : dept4},
        success : function response(result){
            console.log(result);
            if(result){
                alert("부서 삭제 성공")
                location.href="dept";
            }else{
                alert("부서 삭제 실패");
            }
        }
    })
}

function deleteClear(){
    let deptInput = document.querySelector("#deptDelete");
    deptInput.innerHTML = `<div id = "deptDelete">
                            <a onclick = "deptDeleteInput()">
                                부서 삭제
                            </a>
                        </div>`;
}
