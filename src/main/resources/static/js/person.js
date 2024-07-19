console.log("person.js");


// ==================== 1. 인사 등록  ============================== //
function personInput(){
    let personInput = document.querySelector("#personPost");
    let html = `<div>
                    <form>
                        부서번호 : <input id ="deptInput1" type="text"/> <br/>
                        이름 : <input id ="personInput1" type="text"/> <br/>
                        전화번호 : <input id="phoneInput1" type="text"/> <br/>
                        직급 : <input id ="positionInput1" type="text"/> <br/>

                        <button onclick ="personPost()" type ="button"> 인사 등록 </button>
                        <button onclick ="postClear1()" type="button"> 지우기 </button>
                    </form>
                    </div>`;
    personInput.innerHTML = html;
}

function personPost(){
    let dept1 = document.querySelector("#deptInput1").value;
    let person1 = document.querySelector("#personInput1").value;
    let phone1 = document.querySelector("#phoneInput1").value;
    let position1 = document.querySelector("#positionInput1").value;

    $.ajax({
        method : 'post',
        url : '/company/person/post',
        data : {dNo : dept1, phone : phone1, name : person1, position : position1},
        success : function response(result){
            console.log(result);
            if(result){
                alert("인사 등록 성공")
                location.href="person";
            }else{
                alert("인사 등록 실패");
            }
        }
    })
}

function postClear1(){
    let personInput = document.querySelector("#personPost");    
    personInput.innerHTML = `<div id = "personPost">
                            <a onclick = "personInput()">
                                인사 등록
                            </a>
                        </div>`;
}

//  ============================== 2. 인사 출력 ============================== //

function personGetInput(){
    let personInput = document.querySelector("#personGet");
    let html = `<div>
                    <form>
                        부서번호 : <input id ="deptInput2" type="text"/> <br/>
                        

                        <button onclick ="personGet()" type ="button"> 인사 출력 </button>
                        <button onclick ="getClear1()" type="button"> 지우기 </button>
                    </form>
                    </div>`;
    personInput.innerHTML = html;
}


function personGet(){
    let pno = document.querySelector("#deptInput2").value;
    $.ajax({
        method:'get',
        url:"/company/person/get",
        data:{dNo : pno},
        success:function response(result){
            console.log(result);
            let deptPrint=document.querySelector("#personGet");
            let html='';
            result.forEach(list =>{
                console.log(list);
                html+=`<tr>
                <td>부서번호 ${list.dno} </td>
                <td>이름 ${list.name}</td>
                <td>전화번호 ${list.phone} </td>
                <td>직급 ${list.position} </td>
                <td>사원번호 ${list.pno} </td>
             </tr><br>
             `;
            })
            html += `<button onclick ="getClear()" type="button"> 지우기 </button>`;
            deptPrint.innerHTML=html;
        }
    })

}

function getClear1(){
    let personInput = document.querySelector("#personGet");    
    personInput.innerHTML = `<div id = "personGet">
                            <a onclick = "personGetInput()">
                                인사 출력
                            </a>
                        </div>`;
}

//  ============================== 3. 인사 수정 ============================== //

function personUpdateInput(){
    let personInput = document.querySelector("#personUpdate");
    let html = `<div>
                    <form>
                        수정할 인사 번호 : <input id ="personInput2" type="text"/> <br/>
                        수정할 이름 : <input id ="personInput3" type="text"/> <br/>
                        수정할 전화번호 : <input id="phoneInput3" type="text"/> <br/>
                        수정할 직급 : <input id ="positionInput2" type="text"/> <br/>
                    
                        <button onclick ="personUpdate()" type ="button"> 인사 수정 </button>
                        <button onclick ="updateClear1()" type="button"> 지우기 </button>
                    </form>
                    </div>`;
                    personInput.innerHTML = html;
}

function personUpdate(){
    let person2 = document.querySelector("#personInput2").value;
    let person3 = document.querySelector("#personInput3").value;
    let phone3 = document.querySelector("#phoneInput3").value;
    let position2 = document.querySelector("#positionInput2").value;

    $.ajax({
        method : 'put',
        url : '/company/person/put',
        data : {pNo : person2, name : person3, phone : phone3, position : position2},
        success : function response(result){
            console.log(result);
            if(result){
                alert("인사 수정 성공")
                location.href="person";
            }else{
                alert("인사 수정 실패");
            }
        }
    })
}

function updateClear1(){
    let personInput = document.querySelector("#personUpdate");
    personInput.innerHTML = `<div id = "personUpdate">
                            <a onclick = "personUpdateInput()">
                                인사 수정
                            </a>
                        </div>`;
}

// =============================== 4. 인사 삭제 ==================================== //

function personDeleteInput(){
    let personInput = document.querySelector("#personDelete");
    let html = `<div>
                    <form>
                        삭제할 인사 번호 : <input id ="personInput4" type="text"/> <br/>
                    
                        <button onclick ="personDelete()" type ="button"> 인사 삭제 </button>
                        <button onclick ="deleteClear1()" type="button"> 지우기 </button>
                    </form>
                    </div>`;
                    personInput.innerHTML = html;
}

function personDelete(){
    let person4 = document.querySelector("#personInput4").value;

    $.ajax({
        method : 'delete',
        url : '/company/person/delete',
        data : {pNo : person4},
        success : function response(result){
            console.log(result);
            if(result){
                alert("부서 삭제 성공")
                location.href="person";
            }else{
                alert("부서 삭제 실패");
            }
        }
    })
}

function deleteClear1(){
    let personInput = document.querySelector("#personDelete");
    personInput.innerHTML = `<div id = "personDelete">
                            <a onclick = "personDeleteInput()">
                                인사 삭제
                            </a>
                        </div>`;
}
