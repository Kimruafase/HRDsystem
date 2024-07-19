package hrdsystem.controller;

import hrdsystem.model.dto.DeptDto;
import hrdsystem.model.dto.PersonDto;
import hrdsystem.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/company")
public class CompanyController {
    @Autowired CompanyService companyService;

    //  1. 부서 등록
    @PostMapping("/dept/post")
    public boolean deptPost(String dName, String dPhone){
        return companyService.deptPost(dName, dPhone);
    }

    //  2. 부서 출력
    @GetMapping("/dept/print")
    public ArrayList<DeptDto> deptPrint(){
        return companyService.deptPrint();
    }

    // 3. 부서 수정
    @PutMapping("/dept/put")
    public boolean deptPut(int dNo, String dName, String dPhone){
        return companyService.deptPut(dNo, dName, dPhone);
    }

    //  4. 부서 삭제
    @DeleteMapping("/dept/delete")
    public boolean deptDelete(int dNo){
        return companyService.deptDelete(dNo);
    }

    // 5. 인사 등록
    @PostMapping("/person/post")
    public boolean personPost(int dNo, String name, String phone, String position){
        return companyService.personPost(dNo, name, phone, position);
    }

    // 6. 인사 출력
    @GetMapping("/person/get")
    public ArrayList<PersonDto> personGet(int dNo){
        return companyService.personGet(dNo);
    }

    // 7. 인사 수정
    @PutMapping("/person/put")
    public boolean personPut(int pNo, String name, String phone, String position){
        return companyService.personPut(pNo, name, phone, position);
    }

    // 8. 인사 삭제
    @DeleteMapping("/person/delete")
    public boolean personDelete(int pNo){
        return companyService.personDelete(pNo);
    }


}
