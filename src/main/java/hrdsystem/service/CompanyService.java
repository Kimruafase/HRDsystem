package hrdsystem.service;


import hrdsystem.model.dao.CompanyDao;
import hrdsystem.model.dto.DeptDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CompanyService {
    @Autowired CompanyDao companyDao;


    //  1. 부서 등록
    public boolean deptPost(String dName, String dPhone){
        return companyDao.deptPost(DeptDto.builder().dname(dName).dphone(dPhone).build());
    }

    //  4. 부서 삭제
    public boolean deptDelete(int dNo){
        return companyDao.deptDelete(DeptDto.builder().dno(dNo).build());
    }
}
