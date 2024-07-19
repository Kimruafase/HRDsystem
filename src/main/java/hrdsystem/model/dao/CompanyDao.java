package hrdsystem.model.dao;

import hrdsystem.model.dto.DeptDto;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

@Component
public class CompanyDao {

    Connection conn;
    PreparedStatement ps;
    ResultSet rs;


    private CompanyDao() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/hrdsystem", "root", "1234");
        } catch (Exception e) {
            System.out.println(e);
        }
    }


    //  1. 부서 등록
    public boolean deptPost(DeptDto deptDto){
        try{
            String sql = "insert into dept(dname, dphone) values(?,?)";
            ps = conn.prepareStatement(sql);
            ps.setString(1,deptDto.getDname());
            ps.setString(2,deptDto.getDphone());

            int count = ps.executeUpdate();
            if(count == 1){
                return true;
            }
        }catch(Exception e){
            System.out.println(e);
        }
        return false;
    }

    //  4. 부서 삭제
    public boolean deptDelete(DeptDto deptDto){
        try{
            String sql = "delete from dept where dno = ?";
            ps = conn.prepareStatement(sql);
            ps.setInt(1,deptDto.getDno());

            int count = ps.executeUpdate();
            if(count == 1){
                return true;
            }
        }catch(Exception e){
            System.out.println(e);
        }
        return false;
    }
}
