package hrdsystem.controller;

import hrdsystem.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/company")
public class CompanyController {
    @Autowired CompanyService companyService;

    //  1. 부서 등록
    @PostMapping("/dept/post")
    public boolean deptPost(String dName, String dPhone){
        return companyService.deptPost(dName, dPhone);
    }

    //  4. 부서 삭제
    @DeleteMapping("/dept/delete")
    public boolean deptDelete(int dNo){
        return companyService.deptDelete(dNo);
    }

}
