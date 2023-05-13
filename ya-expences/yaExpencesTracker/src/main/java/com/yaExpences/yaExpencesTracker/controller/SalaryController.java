package com.yaExpences.yaExpencesTracker.controller;


import com.yaExpences.yaExpencesTracker.model.Salary;
import com.yaExpences.yaExpencesTracker.service.SalaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SalaryController {
    @Autowired
    SalaryService salaryService;

    @PutMapping("/api/updateSalary")
    public String updateSalary( @RequestBody int salary){
        salaryService.updateMoneyLeft(salary);
//        return {'msg': "", 'status': 200}
        return "Updated Successfully";
    }

    @GetMapping("/api/getSaving")
    public Salary getSavings(){
        return salaryService.getSalary();
    }

    @GetMapping("/api/getAllSavings")
    public List<Salary> getAllSavings(){
        return salaryService.getAllSalaries();
    }
}
